import { MetadataRoute } from 'next'
import dogParksData from '@/data/dogParks.json'
import { DogPark } from '@/types/dogPark'

const dogParks = dogParksData as DogPark[]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://atxdogparks.com'

  const parkUrls = dogParks.map((park) => ({
    url: `${baseUrl}/parks/${park.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...parkUrls,
  ]
}

