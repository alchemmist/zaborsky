import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth-server";
import { updateSectionMeta } from "@/lib/catalog";

export async function POST(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { slug, description, specs } = body ?? {};
  if (!slug) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  await updateSectionMeta(slug, { description, specs });
  return NextResponse.json({ ok: true });
}
