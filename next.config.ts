import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/kanna/:path*",
        destination: "/kanna/:path*",
      },
    ];
  },
};

export default nextConfig;
