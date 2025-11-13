import { NextResponse } from 'next/server'

export async function GET() {
  // Redirect to Ezoic's ads.txt manager
  // This automatically includes all authorized ad partners (Ezoic + Google AdSense)
  return NextResponse.redirect(
    'https://srv.adstxtmanager.com/19390/atxdogparks.com',
    {
      status: 301, // Permanent redirect
      headers: {
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    }
  )
}

