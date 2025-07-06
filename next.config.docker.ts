import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker 빌드용 standalone 모드
  output: "standalone",
  images: {
    unoptimized: true,
  },
  basePath: "",
  trailingSlash: true,
};

export default nextConfig; 