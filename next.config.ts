import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export untuk deploy ke Vercel CDN
  output: 'export',

  // Trailing slash konsisten untuk SEO canonical
  trailingSlash: true,

  // Matikan X-Powered-By header
  poweredByHeader: false,

  // Compress HTML output
  compress: true,

  // Image optimization
  images: {
    // Static export requires unoptimized: true locally
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [],  // tidak ada remote image
  },

  // Experimental features Next.js 15
  experimental: {
    // Optimasi CSS (critters untuk critical CSS inline)
    optimizeCss: true,
  },
}

export default nextConfig
