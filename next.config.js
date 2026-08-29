/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Ezoic requires ads.txt to be served by their Ads.txt Manager rather than
        // from a static file, so this hands the URL off to them (manager acct 19390).
        // Once live, THIS is the authoritative ads.txt - public/ads.txt is shadowed
        // because Next checks redirects before the filesystem. The static file is
        // left in place deliberately: deleting this redirect restores it instantly
        // if we ever need to back out.
        //
        // statusCode 301 rather than `permanent: true` on purpose - `permanent`
        // emits a 308, and ads.txt crawlers are simple clients that don't all
        // follow 307/308. The IAB spec allows exactly one off-domain redirect,
        // which is what this is.
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/atxdogparks.com',
        statusCode: 301,
      },
      {
        // Corrected Aug 2026: the park is Falcon POINTE (Murchison Ridge Trail,
        // Pflugerville) - confirmed against the city listing and on-site signage.
        // Slug was missing the 'e', so the URL didn't match how anyone searches it.
        source: '/parks/falcon-point-dog-park',
        destination: '/parks/falcon-pointe-dog-park',
        permanent: true,
      },
      {
        // Corrected Aug 2026 (revised): the Pflugerville park is Northtown Dog Park
        // at 14401 Harris Ridge Blvd, run by Northtown MUD. "Harris Ridge Dog Park"
        // at 14400 is an aggregator alias for the same park - matching MUD contact,
        // matching amenities, and Google lists Northtown with 715 reviews vs 62.
        //
        // This also reverses an earlier mistake: we had redirected Harris Branch Dog
        // Park here on the belief it did not exist. It does - 12041 Harris Branch
        // Pkwy, 78754 - and it is now restored as its own entry.
        source: '/parks/harris-ridge-dog-park',
        destination: '/parks/northtown-dog-park',
        permanent: true,
      },
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
        // Removed Aug 2026: Pflugerville has two off-leash parks (Northtown and
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

