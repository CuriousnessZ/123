import { NextResponse } from "next/server";

import {
  ADMIN_SESSION_COOKIE,
  createAdminSession,
  getAdminCookieOptions,
  getAdminCredentials,
  isAdminAuthConfigured,
  validateAdminCredentials,
} from "@/lib/admin-session";

export async function POST(request: Request) {
  if (!isAdminAuthConfigured()) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Admin auth is not configured. Set JOURNAL_ADMIN_PASSWORD and JOURNAL_ADMIN_SESSION_SECRET first.",
      },
      { status: 500 }
    );
  }

  const { username, password } = (await request.json()) as {
    username?: string;
    password?: string;
  };
  const credentials = getAdminCredentials();

  if (
    !username?.trim() ||
    !password?.trim() ||
    !validateAdminCredentials({
      username: username.trim(),
      password: password.trim(),
    })
  ) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid admin credentials.",
      },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set(
    ADMIN_SESSION_COOKIE,
    createAdminSession(credentials.username),
    getAdminCookieOptions()
  );

  return response;
}
