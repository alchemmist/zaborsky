import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, checkBasicAuth, makeToken, verifyToken } from "@/lib/auth";

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookieToken = req.cookies.get(ADMIN_COOKIE)?.value;

  if (pathname.startsWith("/api/admin")) {
    if (await verifyToken(cookieToken)) return NextResponse.next();
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // /admin — вход через basic auth, затем редирект на корень
  if (await verifyToken(cookieToken)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (checkBasicAuth(req.headers.get("authorization"))) {
    const token = await makeToken();
    const res = NextResponse.redirect(new URL("/", req.url));
    res.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return res;
  }

  return new NextResponse("Требуется авторизация", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Zaborskiy admin"' },
  });
}
