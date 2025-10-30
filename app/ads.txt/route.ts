import { NextResponse } from 'next/server'

export async function GET() {
  const adsContent = `google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0`

  return new NextResponse(adsContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}

