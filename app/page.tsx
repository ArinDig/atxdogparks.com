import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'ATX Dog Parks - Austin Complete Dog Park Directory',
  description: 'Discover the best dog parks in Austin, Texas. Find off-leash areas, dog-friendly parks, amenities, directions, and more. Your complete guide to Austin dog parks.',
  alternates: {
    canonical: 'https://atxdogparks.com',
  },
  openGraph: {
    title: 'ATX Dog Parks - Austin Complete Dog Park Directory',
    description: 'Discover the best dog parks in Austin, Texas. Find off-leash areas, dog-friendly parks, amenities, and more.',
    type: 'website',
    url: 'https://atxdogparks.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return <HomeClient />
}
