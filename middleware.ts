import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("refreshToken")?.value;
  const protectedRoutes = ["/apply", "/dashboard"];
  const url = request.nextUrl.pathname;
  if (!token && protectedRoutes.includes(url)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
