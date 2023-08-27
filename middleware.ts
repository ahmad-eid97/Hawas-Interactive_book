import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest, response: NextResponse) {
  const cookies = request.cookies;
  const authenticated = cookies.get('hawas-auth');
  if (!authenticated && request.nextUrl.pathname !== '/login' &&
    request.nextUrl.pathname !== '/parent-login' &&
    request.nextUrl.pathname !== '/school-login') {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (!authenticated && request.nextUrl.pathname === '/login' ||
    request.nextUrl.pathname === '/parent-login' ||
    request.nextUrl.pathname === '/school-login') {
    return NextResponse.next();
  } else if (authenticated && request.nextUrl.pathname === '/login' ||
    request.nextUrl.pathname === '/parent-login' ||
    request.nextUrl.pathname === '/school-login') {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
export const config = {
  matcher: ['/', '/login', '/parent-login', '/school-login', '/about-us', '/contact-us', '/faqs', '/gallery', '/terms', '/policy', '/blogs', '/services', '/blogs/:id', '/services/:id', '/portfolio', '/portfolio/:id']
}