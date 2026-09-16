import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.chhayvann.com.kh",
      },
    ],
  },
};

export default nextConfig;
