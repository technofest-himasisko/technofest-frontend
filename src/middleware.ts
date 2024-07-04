import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isComingSoon } from "./lib/utils";

export function middleware(request: NextRequest) {
  if (isComingSoon() && request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|opengraph-image.png).*)",
  ],
};
