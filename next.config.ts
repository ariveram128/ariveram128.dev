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
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.nordicsemi.com",
      },
      {
        protocol: "https",
        hostname: "ti.com",
      },
      {
        protocol: "https",
        hostname: "www.ti.com",
      },
      {
        protocol: "https",
        hostname: "docs.zephyrproject.org",
      },
    ],
  },
};

export default nextConfig;
