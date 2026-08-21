import { MetadataRoute } from 'next'
import dogParksData from '@/data/dogParks.json'
import blogArticlesData from '@/data/blogArticles.json'
import { DogPark } from '@/types/dogPark'
import { BlogArticle } from '@/types/blogArticle'

const dogParks = dogParksData as DogPark[]
const blogArticles = blogArticlesData as BlogArticle[]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://atxdogparks.com'

  // lastModified is intentionally omitted unless a park has a real `lastUpdated`
  // date in dogParks.json. Reporting the build time as the modification date for
  // every page teaches Google the lastmod signal is unreliable, and it starts
  // ignoring it. Set `lastUpdated` on a park when its content actually changes.
  const parkUrls = dogParks.map((park) => ({
    url: `${baseUrl}/parks/${park.slug}`,
    ...(park.lastUpdated ? { lastModified: new Date(park.lastUpdated) } : {}),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogUrls = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/parks`,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/guides`,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/guides/dog-park-safety`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/first-timer-guide`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/dog-park-etiquette`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/training-and-behavior`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/seasonal-tips`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/best-parks-by-feature`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gear`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...parkUrls,
    ...blogUrls,
  ]
}

