/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
  // Redirect trailing slashes to prevent duplicate content
  trailingSlash: false,
  // Compress responses
  compress: true,
  // Generate ETags for caching
  generateEtags: true,
  // Improve performance
  poweredByHeader: false,
}

module.exports = nextConfig

