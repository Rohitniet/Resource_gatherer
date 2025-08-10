import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req:NextRequest) {
  // Define routes to protect
  const protectedRoutes = ["/pages/dashboard", "/profile"];

  const { pathname } = req.nextUrl;

  // Check if the request is for a protected route
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // Get the token from NextAuth JWT
    const token = await getToken({ req, secret });

    // If no token, redirect to login
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/api/auth/signin";
      return NextResponse.redirect(url);
    }
  }

  // Allow request to continue
  return NextResponse.next();
}
