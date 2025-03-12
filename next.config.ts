import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // ignoreDuringBuilds: true,
  },
};

export default nextConfig;
