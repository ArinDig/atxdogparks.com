import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Skip middleware for Next.js internals and static assets
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|txt)$/)
  ) {
    return NextResponse.next()
  }

  const isWWW = hostname.startsWith('www.')
  const isHTTPS = url.protocol === 'https:'

  // Redirect www → non-www (canonical domain: atxdogparks.com)
  if (isWWW) {
    url.hostname = 'atxdogparks.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // Redirect HTTP → HTTPS
  if (!isHTTPS) {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot|txt)).*)',
  ],
}
