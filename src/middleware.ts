import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isComingSoon } from "./lib/utils/common";
import { auth as middleware } from "@/lib/auth/auth";

export default middleware(async (request: NextRequest) => {
  if (isComingSoon() && request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|opengraph-image.*).*)",
  ],
};
