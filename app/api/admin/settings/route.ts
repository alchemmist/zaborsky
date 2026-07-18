import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { assertAdmin } from "@/lib/auth-server";
import { saveSettings } from "@/lib/settings";
import type { SiteSettings } from "@/lib/types";

export async function POST(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = (await req.json()) as Partial<SiteSettings>;
  const patch: Partial<SiteSettings> = {};
  if (typeof body.phone === "string") patch.phone = body.phone;
  if (typeof body.email === "string") patch.email = body.email;
  if (typeof body.heroTitle === "string") patch.heroTitle = body.heroTitle;
  if (typeof body.heroSubtitle === "string") patch.heroSubtitle = body.heroSubtitle;
  if (typeof body.aboutCompany === "string") patch.aboutCompany = body.aboutCompany;
  if (typeof body.aboutHistory === "string") patch.aboutHistory = body.aboutHistory;
  if (Array.isArray(body.faq)) {
    patch.faq = body.faq.filter(
      (f) => f && typeof f.question === "string" && typeof f.answer === "string"
    );
  }
  await saveSettings(patch);
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
