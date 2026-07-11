import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, makeToken, verifyToken, parseBasicAuth } from "@/lib/auth";
import { verifyCredentials } from "@/lib/credentials";

function redirectHome(): NextResponse {
  return new NextResponse(null, {
    status: 303,
    headers: { Location: "/" },
  });
}

export async function GET(req: NextRequest) {
  const cookieToken = req.cookies.get(ADMIN_COOKIE)?.value;
  if (await verifyToken(cookieToken)) {
    return redirectHome();
  }

  const creds = parseBasicAuth(req.headers.get("authorization"));
  if (creds && (await verifyCredentials(creds.user, creds.pass))) {
    const token = await makeToken();
    const res = redirectHome();
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
