import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/Blog" || pathname.startsWith("/Blog/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/Blog/, "/blog");
    return NextResponse.redirect(url, 308);
  }

  if (
    pathname === "/project-management" ||
    pathname.startsWith("/project-management/")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(
      /^\/project-management/,
      "/project-portfolio-management",
    );
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/Blog",
    "/Blog/:path*",
    "/project-management",
    "/project-management/:path*",
  ],
};
