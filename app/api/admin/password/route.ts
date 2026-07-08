import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth-server";
import { changePassword } from "@/lib/credentials";

export async function POST(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { current, next } = body ?? {};
  if (typeof current !== "string" || typeof next !== "string") {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  const result = await changePassword(current, next);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
