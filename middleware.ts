import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle ads.txt specially - prevent any redirects
  if (request.nextUrl.pathname === '/ads.txt') {
    // Get the ads.txt content
    const adsContent = `google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0
ezoic.com, 19390, DIRECT`

    return new NextResponse(adsContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/ads.txt',
}

