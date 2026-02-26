import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.rockstreamer.com',
      },
      {
        protocol: 'https',
        hostname: 's3.brilliant.com.bd'
      }
    ]
  },
};

export default nextConfig;
