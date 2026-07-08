import { NextResponse } from "next/server";
import { assertAdmin } from "@/lib/auth-server";
import { savePrices } from "@/lib/catalog";
import type { PriceRow } from "@/lib/types";

export async function POST(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const rows = body?.rows as PriceRow[] | undefined;
  if (!Array.isArray(rows)) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  await savePrices(rows);
  return NextResponse.json({ ok: true });
}
