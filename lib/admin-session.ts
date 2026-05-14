import {
  createHmac,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "journal-admin-session";

const SESSION_DURATION_SECONDS = 60 * 60 * 12;
const ADMIN_CREDENTIALS_FILE = path.join(
  process.cwd(),
  "data",
  "admin-auth.json"
);

type AdminCredentials = {
  username: string;
  password: string;
};

type StoredAdminCredentials = {
  username: string;
  passwordHash: string;
  salt: string;
  updatedAt: string;
};

function getSessionSecret() {
  return process.env.JOURNAL_ADMIN_SESSION_SECRET?.trim() ?? "";
}

function signPayload(payload: string) {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

export function getAdminCredentials() {
  return {
    username: process.env.JOURNAL_ADMIN_USERNAME?.trim() || "admin",
    password: process.env.JOURNAL_ADMIN_PASSWORD?.trim() || "",
  };
}

function hashPassword(password: string, salt: string) {
  return scryptSync(password, salt, 64).toString("hex");
}

function readStoredAdminCredentials(): StoredAdminCredentials | null {
  try {
    if (!existsSync(ADMIN_CREDENTIALS_FILE)) {
      return null;
    }

    const parsed = JSON.parse(
      readFileSync(ADMIN_CREDENTIALS_FILE, "utf8")
    ) as StoredAdminCredentials;

    if (
      !parsed.username ||
      !parsed.passwordHash ||
      !parsed.salt ||
      !parsed.updatedAt
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function getAdminPasswordSource() {
  return readStoredAdminCredentials() ? "stored" : "env";
}

export function validateAdminCredentials({
  username,
  password,
}: AdminCredentials) {
  const storedCredentials = readStoredAdminCredentials();

  if (storedCredentials) {
    if (username !== storedCredentials.username) {
      return false;
    }

    const derivedHash = hashPassword(password, storedCredentials.salt);

    return (
      derivedHash.length === storedCredentials.passwordHash.length &&
      timingSafeEqual(
        Buffer.from(derivedHash),
        Buffer.from(storedCredentials.passwordHash)
      )
    );
  }

  const fallbackCredentials = getAdminCredentials();

  return (
    username === fallbackCredentials.username &&
    password === fallbackCredentials.password
  );
}

export function updateStoredAdminPassword(username: string, password: string) {
  const salt = randomBytes(16).toString("hex");
  const passwordHash = hashPassword(password, salt);

  mkdirSync(path.dirname(ADMIN_CREDENTIALS_FILE), { recursive: true });
  writeFileSync(
    ADMIN_CREDENTIALS_FILE,
    `${JSON.stringify(
      {
        username,
        passwordHash,
        salt,
        updatedAt: new Date().toISOString(),
      } satisfies StoredAdminCredentials,
      null,
      2
    )}\n`,
    "utf8"
  );
}

export function getAdminRecoveryInstructions() {
  return {
    envFilePath: path.join(process.cwd(), ".env.local"),
    storedPasswordPath: ADMIN_CREDENTIALS_FILE,
  };
}

export function isAdminAuthConfigured() {
  const { password } = getAdminCredentials();
  return Boolean((password || readStoredAdminCredentials()) && getSessionSecret());
}

export function createAdminSession(username: string) {
  const expiresAt = Date.now() + SESSION_DURATION_SECONDS * 1000;
  const payload = `${username}:${expiresAt}`;
  const signature = signPayload(payload);

  return Buffer.from(`${payload}:${signature}`, "utf8").toString("base64url");
}

export function verifyAdminSession(token?: string | null) {
  if (!token || !isAdminAuthConfigured()) {
    return null;
  }

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const lastSeparatorIndex = decoded.lastIndexOf(":");

    if (lastSeparatorIndex === -1) {
      return null;
    }

    const payload = decoded.slice(0, lastSeparatorIndex);
    const signature = decoded.slice(lastSeparatorIndex + 1);
    const expectedSignature = signPayload(payload);

    if (
      signature.length !== expectedSignature.length ||
      !timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))
    ) {
      return null;
    }

    const [username, expiresAtValue] = payload.split(":");
    const expiresAt = Number(expiresAtValue);

    if (!username || Number.isNaN(expiresAt) || Date.now() > expiresAt) {
      return null;
    }

    return {
      username,
      expiresAt,
    };
  } catch {
    return null;
  }
}

export async function getAuthenticatedAdmin() {
  const cookieStore = await cookies();
  return verifyAdminSession(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "strict" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  };
}
