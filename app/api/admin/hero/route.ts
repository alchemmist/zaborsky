import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { assertAdmin } from "@/lib/auth-server";
import { setHeroImage } from "@/lib/settings";

export async function POST(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { path, url } = body ?? {};
  if (typeof path !== "string" || typeof url !== "string" || !path || !url) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  await setHeroImage(path, url);
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
