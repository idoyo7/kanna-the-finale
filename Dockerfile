#################################
# Stage 1: Build & Export
#################################
FROM node:18-alpine AS builder

# pnpm 전역 설치
RUN npm install -g pnpm

WORKDIR /app

# package.json과 lock 파일 복사 (캐싱 최적화를 위해)
COPY package.json pnpm-lock.yaml ./

# 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스 전체 복사
COPY . .

# Next.js 빌드: next.config.ts에 "output: export"가 설정되어 있다면,
# next build 시 자동으로 정적 파일이 out 폴더에 생성됨
RUN pnpm run build

#################################
# Stage 2: Serve Static Files
#################################
FROM node:18-alpine AS runner

WORKDIR /app

# 정적 파일 서빙을 위한 serve 패키지 전역 설치
RUN npm install -g serve

# builder 스테이지에서 생성된 정적 파일 복사 (보통 out 폴더에 생성됨)
COPY --from=builder /app/out ./out

# 컨테이너의 포트 3000 노출
EXPOSE 3000

# serve를 이용해 out 폴더를 서빙 (포트 3000)
CMD ["serve", "-s", "out", "-l", "3000"]
