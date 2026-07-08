export const ADMIN_COOKIE = "zbr_admin";

function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmac(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return bufToHex(sig);
}

export async function makeToken(): Promise<string> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return "";
  return hmac("authorized", secret);
}

export async function hashPassword(plain: string): Promise<string> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return "";
  return hmac(`pw:${plain}`, secret);
}

export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

export async function verifyToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const expected = await makeToken();
  if (!expected) return false;
  return timingSafeEqual(token, expected);
}

export function parseBasicAuth(
  header: string | null
): { user: string; pass: string } | null {
  if (!header || !header.startsWith("Basic ")) return null;
  let decoded = "";
  try {
    decoded = atob(header.slice(6).trim());
  } catch {
    return null;
  }
  const sep = decoded.indexOf(":");
  if (sep < 0) return null;
  return { user: decoded.slice(0, sep), pass: decoded.slice(sep + 1) };
}
