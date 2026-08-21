/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/puppy-first-dog-park',
        destination: '/blog',
        permanent: true,
      },
      {
        // Corrected Aug 2026: this listing described Round Rock's off-leash park but
        // used Old Settlers Park's name and address. Old Settlers is leash-only; the
        // actual off-leash park is Dog Depot on Deerfoot Drive.
        source: '/parks/old-settlers-dog-park',
        destination: '/parks/dog-depot-dog-park',
        permanent: true,
      },
      {
        // Corrected Aug 2026: entry was "Harris Branch Dog Park" at an Austin address
        // that does not exist. The real park is Harris Ridge in Pflugerville.
        source: '/parks/harris-branch-dog-park',
        destination: '/parks/harris-ridge-dog-park',
        permanent: true,
      },
      {
        // Removed Aug 2026: Pflugerville has two off-leash parks (Harris Ridge and
        // Falcon Pointe). Bicentennial Park exists but has no dog park.
        source: '/parks/bicentennial-park-dog-run',
        destination: '/parks',
        permanent: true,
      },
      {
        // Removed Aug 2026: no dog park at Steeplechase Park in Round Rock. The
        // Steeplechase dog park is in College Station; Round Rock's is Dog Depot.
        source: '/parks/steeplechase-park-dog-park',
        destination: '/parks/dog-depot-dog-park',
        permanent: true,
      },
      {
        // Corrected Aug 2026: Buda's dog park relocated from the old Sportsplex
        // (closed Aug 2025) to Historic Stagecoach Park, opened Jan 17, 2026.
        // Slug and address updated to match; old slug preserved as a redirect.
        source: '/parks/buda-city-park-dog-park',
        destination: '/parks/stagecoach-park-dog-park',
        permanent: true,
      },
      {
        // Removed Aug 2026: Yard Bar (Burnet Rd) permanently closed May 30, 2026
        // after 11 years in business. No replacement listing.
        source: '/parks/yard-bar',
        destination: '/parks',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
    // Optimize image loading with formats
    formats: ['image/avif', 'image/webp'],
    // Enable image optimization
    minimumCacheTTL: 60,
    // Lazy load images by default
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Redirect trailing slashes to prevent duplicate content
  trailingSlash: false,
  // Compress responses
  compress: true,
  // Generate ETags for caching
  generateEtags: true,
  // Improve performance
  poweredByHeader: false,
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
}

module.exports = nextConfig

