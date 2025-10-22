import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ATX Dog Parks - Austin Dog Park Directory',
    short_name: 'ATX Dog Parks',
    description: 'Discover the best dog parks in Austin, Texas. Find off-leash areas, amenities, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

