import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
            loader: 'file-loader',
            options: {
                publicPath: '/_next/static/',
                outputPath: 'static/',
                name: '[name].[hash].[ext]',
            },
        },
    });

    // Allow external video URLs from AWS S3
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: false,
          publicPath: 'https://airikannalastconcert.s3.ap-northeast-1.amazonaws.com/',
        }
      }
    });
    
    return config;
  },
};

export default nextConfig;
