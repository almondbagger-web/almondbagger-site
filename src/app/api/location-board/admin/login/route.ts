import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  createAdminToken,
  verifyAdminPassword,
} from "@/lib/location-board/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string };
    const password = body.password ?? "";
    if (!verifyAdminPassword(password)) {
      return NextResponse.json(
        { ok: false, error: "認証に失敗しました" },
        { status: 401 },
      );
    }

    const token = createAdminToken(password);
    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });
    return res;
  } catch {
    return NextResponse.json(
      { ok: false, error: "ログイン処理に失敗しました" },
      { status: 500 },
    );
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return res;
}
