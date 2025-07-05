import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",
  trailingSlash: true,
  // rewrites 제거 - export 모드에서는 작동하지 않음
};

export default nextConfig;
