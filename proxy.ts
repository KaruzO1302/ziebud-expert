import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const WWW_HOST = "www.pogotowie-kanalizacyjne-wroclaw.com";
const APEX_HOST = "pogotowie-kanalizacyjne-wroclaw.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const pathname = request.nextUrl.pathname;

  if (
    pathname === "/miasta" ||
    pathname.startsWith("/miasta/") ||
    pathname === "/wojewodztwa" ||
    pathname.startsWith("/wojewodztwa/")
  ) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  if (host === WWW_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = APEX_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon-192.png|icon-512.png|apple-touch-icon.png|manifest.webmanifest).*)",
  ],
};
