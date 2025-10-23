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
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1749871118217579"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
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

