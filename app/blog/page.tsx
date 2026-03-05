import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Dog Park Tips & Guides',
  description: 'Expert advice, safety tips, training guides, and helpful articles about enjoying dog parks in Austin, Texas. Learn how to make the most of your dog park visits.',
  alternates: {
    canonical: 'https://atxdogparks.com/blog',
  },
  openGraph: {
    title: 'Dog Park Tips & Guides | ATX Dog Parks',
    description: 'Expert advice, safety tips, training guides, and helpful articles about enjoying dog parks in Austin, Texas.',
    type: 'website',
    url: 'https://atxdogparks.com/blog',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
