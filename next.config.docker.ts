import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker 빌드용 standalone 모드
  output: "standalone",
  images: {
    unoptimized: true,
  },
  basePath: "",
  trailingSlash: true,
  // 정적 파일 서빙 설정
  async headers() {
    return [
      {
        source: '/kanna.html',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
        ],
      },
      {
        source: '/files/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig; 