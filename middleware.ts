import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest, response: NextResponse) {
  const cookies = request.cookies;

  const protectedRoutes = ['/books', "/lessons"]
  const authRoutes = ['/login', '/parent-login', '/school-login']

  const authenticated = cookies.get('hawas-auth');
  if (!authenticated && protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (!authenticated && authRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  } else if (authenticated && authRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
export const config = {
  matcher: [
    '/',
    '/login',
    '/parent-login',
    '/school-login',
    '/about-us',
    '/contact-us',
    '/faqs',
    '/gallery',
    '/terms',
    '/policy',
    '/blogs',
    '/services',
    '/blogs/:path*',
    '/services/:path*',
    '/portfolio',
    '/portfolio/:path*',
    '/books',
    '/books/:path*',
    '/books/:path*/lessons',
    '/lessons/:path*']
}