import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifyToken } from "@/lib/auth";

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return verifyToken(store.get(ADMIN_COOKIE)?.value);
}

export async function assertAdmin(): Promise<boolean> {
  return isAdmin();
}
