import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/vincar-vehicles-images/**',
      },
    ],
  },
}

export default nextConfig