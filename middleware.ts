import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, verifyToken } from "@/lib/auth";

export const config = {
  matcher: ["/api/admin/:path*"],
};

export async function middleware(req: NextRequest) {
  if (await verifyToken(req.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.next();
  }
  return NextResponse.json({ error: "unauthorized" }, { status: 401 });
}
