import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const UPLOAD_DIR =
  process.env.UPLOAD_DIR || path.join(process.cwd(), "public", "uploads");

const TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  svg: "image/svg+xml",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const safe = path.basename(name);
  const ext = safe.split(".").pop()?.toLowerCase() ?? "";
  const type = TYPES[ext];
  if (!type) return new NextResponse("Not found", { status: 404 });
  try {
    const buf = await fs.readFile(path.join(UPLOAD_DIR, safe));
    return new NextResponse(new Uint8Array(buf), {
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
