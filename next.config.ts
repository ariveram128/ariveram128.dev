import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Enable strict mode and optimized images */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
