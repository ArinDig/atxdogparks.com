import { NextResponse } from 'next/server'

// Updated Dec 25, 2025 - Force fresh deployment for AdSense verification
export async function GET() {
  const adsContent = `google.com, pub-1749871118217579, DIRECT, f08c47fec0942fa0
ezoic.com, 19390, DIRECT`

  return new NextResponse(adsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, must-revalidate, no-cache, no-store',
      'CDN-Cache-Control': 'no-cache',
      'Vercel-CDN-Cache-Control': 'no-cache',
    },
  })
}
