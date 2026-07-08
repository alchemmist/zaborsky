import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth-server";
import { upsertProduct, deleteProduct } from "@/lib/catalog";

export async function POST(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { slug, product } = body ?? {};
  if (!slug || !product) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  await upsertProduct(slug, product);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { slug, id } = body ?? {};
  if (!slug || !id) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  await deleteProduct(slug, id);
  return NextResponse.json({ ok: true });
}
