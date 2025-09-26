import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 언어 경로로 접근하는 경우 루트로 리다이렉트
  if (
    request.nextUrl.pathname.startsWith("/ko") ||
    request.nextUrl.pathname.startsWith("/ja") ||
    request.nextUrl.pathname.startsWith("/en")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
