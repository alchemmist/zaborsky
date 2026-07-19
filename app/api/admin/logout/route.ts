import { NextResponse } from "next/server";
import { ADMIN_COOKIE, ADMIN_UI_COOKIE } from "@/lib/auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { path: "/", maxAge: 0 });
  res.cookies.set(ADMIN_UI_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
