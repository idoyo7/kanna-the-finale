# syntax=docker/dockerfile:1

# ===== Build Stage =====
FROM --platform=$BUILDPLATFORM node:22 AS builder

WORKDIR /app

# 전체 소스코드 복사
COPY . .

# Docker 전용 Next.js 설정 파일 사용
RUN mv next.config.docker.ts next.config.ts

# CDN URL 환경변수 설정
ENV NEXT_PUBLIC_CDN=https://cdn.montkim.com/cdn/kanna-the-finale-files-main

# 멀티코어 사용을 위한 환경변수 설정
ENV NODE_OPTIONS="--max-old-space-size=6144"

# 의존성 설치
RUN npm ci --legacy-peer-deps

# Production 빌드 (standalone)
RUN npm run build

# ===== Production Stage =====
FROM node:22-alpine AS runner

WORKDIR /app

# 보안을 위한 non-root 사용자 생성
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# CDN URL 환경변수 설정 (런타임용)
ENV NEXT_PUBLIC_CDN=https://cdn.montkim.com/cdn/kanna-the-finale-files-main

# Standalone 서버 파일 복사
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Static 파일들 복사
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

# 포트 설정
EXPOSE 3000

# 환경변수 설정
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Standalone 서버 실행
CMD ["node", "server.js"]
