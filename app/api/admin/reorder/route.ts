import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth-server";
import { reorderProducts } from "@/lib/catalog";

export async function POST(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { slug, ids } = body ?? {};
  if (!slug || !Array.isArray(ids)) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  await reorderProducts(slug, ids as string[]);
  return NextResponse.json({ ok: true });
}
