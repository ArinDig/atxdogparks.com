import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  metadataBase: new URL('https://atxdogparks.com'),
  title: {
    default: 'ATX Dog Parks - Austin Complete Dog Park Directory',
    template: '%s | ATX Dog Parks'
  },
  description: 'Discover the best dog parks in Austin, Texas. Find off-leash areas, dog-friendly parks, amenities, directions, and more. Your complete guide to Austin dog parks.',
  keywords: [
    'Austin dog parks',
    'off-leash dog parks Austin',
    'dog parks near me',
    'Austin Texas dog parks',
    'ATX dog parks',
    'dog-friendly Austin',
    'best dog parks Austin',
    'dog park directory Austin'
  ],
  authors: [{ name: 'ATX Dog Parks' }],
  creator: 'ATX Dog Parks',
  publisher: 'ATX Dog Parks',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atxdogparks.com',
    title: 'ATX Dog Parks - Austin Complete Dog Park Directory',
    description: 'Discover the best dog parks in Austin, Texas. Find off-leash areas, dog-friendly parks, amenities, and more.',
    siteName: 'ATX Dog Parks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATX Dog Parks - Austin Complete Dog Park Directory',
    description: 'Discover the best dog parks in Austin, Texas. Find off-leash areas, dog-friendly parks, amenities, and more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Ezoic integration REMOVED 24 Oct 2026.

          Google Ad Manager disapproved atxdogparks.com through Ezoic ("low value content")
          on 24 Oct 2026, after a reapplication on 10 Oct. With no Ad Manager approval the
          scripts served nothing (Ezoic showed $0 and 0 visits), but still cost two consent
          scripts, the Ezoic header script and a cookie-consent banner on every page load.
          Same decision as pickleballatx.org on 15 Sep 2026.

          Left in place on purpose: the /ads.txt redirect to Ezoic's Ads.txt Manager in
          next.config.js. It's harmless and keeps the Ezoic account ready if we reapply.
          To re-integrate: the CMP scripts (cmp.gatekeeperconsent.com/min.js, then
          the.gatekeeperconsent.com/cmp.min.js) must load before ezojs.com/ezoic/sa.min.js.
        */}
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ATX Dog Parks',
              url: 'https://atxdogparks.com',
              logo: 'https://atxdogparks.com/icon.svg',
              description: 'Your complete guide to dog parks in Austin, Texas',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@atxdogparks.com',
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: 'English'
              },
              areaServed: {
                '@type': 'City',
                name: 'Austin',
                '@id': 'https://en.wikipedia.org/wiki/Austin,_Texas'
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1749871118217579"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RFZJV94QNC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RFZJV94QNC');
          `}
        </Script>
        
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}

