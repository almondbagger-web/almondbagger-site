import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "ab_loc_admin";

/**
 * ADMIN_PASSWORD が未設定のときのみ、ローカル開発用フォールバックを使用。
 * 本番では必ず環境変数を設定してください。
 */
export function getAdminPassword(): string {
  const fromEnv = process.env.ADMIN_PASSWORD?.trim();
  if (fromEnv && fromEnv.length >= 8) return fromEnv;
  if (process.env.NODE_ENV === "production" && !fromEnv) {
    // Production without password: deny all admin ops via empty unusable secret
    return "";
  }
  return "almondbagger-dev-admin-only";
}

function getSessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET?.trim() ||
    `sess:${getAdminPassword() || "locked"}`
  );
}

export function createAdminToken(password: string): string {
  return createHmac("sha256", getSessionSecret())
    .update(`admin:${password}`)
    .digest("hex");
}

export function verifyAdminPassword(password: string): boolean {
  const expected = getAdminPassword();
  if (!expected) return false;
  try {
    const a = Buffer.from(password);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function verifyAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  const expected = createAdminToken(getAdminPassword());
  if (!expected || !getAdminPassword()) return false;
  try {
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return verifyAdminToken(jar.get(COOKIE_NAME)?.value);
}

export { COOKIE_NAME };
