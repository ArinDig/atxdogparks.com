import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Redirect trailing slashes to non-trailing slash URLs (except root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    const newUrl = new URL(url)
    newUrl.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(newUrl, 301)
  }

  // Ensure www redirects to non-www (if needed)
  if (url.hostname.startsWith('www.')) {
    const newUrl = new URL(url)
    newUrl.hostname = url.hostname.replace('www.', '')
    return NextResponse.redirect(newUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}

