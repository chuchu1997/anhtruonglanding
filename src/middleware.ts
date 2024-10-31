import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axiosInstance from "./axios/interceptors";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside

const protectedRoutes = ["/"];
const publicRoutes = ["/login"];
export async function middleware(request: NextRequest) {
  //   const token = await getToken({ req: request });
  //   console.log("Middleware token", token);
  const path = request.nextUrl.pathname;
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get("access_token");

  //   console.log("HEADER", cookies);
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  //   if (cookieToken) {
  //     return NextResponse.redirect(new URL("/", request.nextUrl));
  //   }

  if (isProtectedRoute && !cookieToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/tao-san-pham-moi/:path*", "/:path*"],
};
