import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { assertAdmin } from "@/lib/auth-server";

const UPLOAD_DIR =
  process.env.UPLOAD_DIR || path.join(process.cwd(), "public", "uploads");

const ALLOWED: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

export async function POST(req: Request) {
  if (!(await assertAdmin())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "no file" }, { status: 400 });
  }
  const ext = ALLOWED[file.type];
  if (!ext) {
    return NextResponse.json({ error: "unsupported type" }, { status: 400 });
  }
  const bytes = Buffer.from(await file.arrayBuffer());
  const name = `${Date.now().toString(36)}-${Math.floor(
    Math.random() * 1e6
  ).toString(36)}.${ext}`;
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOAD_DIR, name), bytes);
  return NextResponse.json({ url: `/uploads/${name}` });
}
