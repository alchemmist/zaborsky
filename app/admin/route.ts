import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, ADMIN_UI_COOKIE, makeToken, verifyToken, parseBasicAuth } from "@/lib/auth";
import { verifyCredentials } from "@/lib/credentials";

function redirectHome(): NextResponse {
  return new NextResponse(null, {
    status: 303,
    headers: { Location: "/" },
  });
}

function setUiCookie(res: NextResponse) {
  res.cookies.set(ADMIN_UI_COOKIE, "1", {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function GET(req: NextRequest) {
  const cookieToken = req.cookies.get(ADMIN_COOKIE)?.value;
  if (await verifyToken(cookieToken)) {
    const res = redirectHome();
    setUiCookie(res);
    return res;
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
    setUiCookie(res);
    return res;
  }

  return new NextResponse("Требуется авторизация", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Zaborskiy admin"' },
  });
}
