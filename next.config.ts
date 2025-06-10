import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // ignoreDuringBuilds: true,
  },
  // 정적 파일 처리 설정
  trailingSlash: false,
  // 빌드 시 public 폴더의 모든 파일을 복사
  distDir: 'out',
};

export default nextConfig;
