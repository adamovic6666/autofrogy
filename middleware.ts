import { NextResponse } from "next/server";

export function middleware(_: Request) {
  // Example middleware logic
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images directory in /public (public static images)
     */
    "/((?!api|_next/static|_next/image|images).*)",
  ],
};
