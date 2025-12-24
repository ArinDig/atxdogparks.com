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

