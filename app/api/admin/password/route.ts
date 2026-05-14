import { NextRequest, NextResponse } from "next/server";

import {
  ADMIN_SESSION_COOKIE,
  createAdminSession,
  getAdminCookieOptions,
  updateStoredAdminPassword,
  validateAdminCredentials,
  verifyAdminSession,
} from "@/lib/admin-session";

export async function POST(request: NextRequest) {
  const session = verifyAdminSession(
    request.cookies.get(ADMIN_SESSION_COOKIE)?.value
  );

  if (!session) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const { currentPassword, newPassword } = (await request.json()) as {
    currentPassword?: string;
    newPassword?: string;
  };

  if (!currentPassword?.trim() || !newPassword?.trim()) {
    return NextResponse.json(
      {
        success: false,
        message: "Current password and new password are required.",
      },
      { status: 400 }
    );
  }

  if (newPassword.trim().length < 8) {
    return NextResponse.json(
      {
        success: false,
        message: "New password must be at least 8 characters.",
      },
      { status: 400 }
    );
  }

  const isCurrentPasswordValid = validateAdminCredentials({
    username: session.username,
    password: currentPassword.trim(),
  });

  if (!isCurrentPasswordValid) {
    return NextResponse.json(
      {
        success: false,
        message: "Current password is incorrect.",
      },
      { status: 401 }
    );
  }

  updateStoredAdminPassword(session.username, newPassword.trim());

  const response = NextResponse.json({
    success: true,
    message: "Password updated successfully.",
  });

  response.cookies.set(
    ADMIN_SESSION_COOKIE,
    createAdminSession(session.username),
    getAdminCookieOptions()
  );

  return response;
}
