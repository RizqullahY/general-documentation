// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Ambil token dari cookies
  const token = req.cookies.get("token")?.value;

  // Jika pengguna mencoba mengakses /docs/* tanpa token, redirect ke halaman login
  if (req.nextUrl.pathname.startsWith("/docs") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Jika token ada atau route tidak diproteksi, lanjutkan
  return NextResponse.next();
}

// Tentukan route yang akan diproses middleware
export const config = {
  matcher: ["/docs/:path*"], // Melindungi semua route di bawah /docs
};
