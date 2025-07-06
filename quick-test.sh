#!/bin/bash

# ⚡ Kanna The Finale 빠른 검증 스크립트
# 로컬 빌드 + Docker 빌드 + 실행 테스트

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}⚡ Kanna The Finale 빠른 검증 시작${NC}"
echo -e "${BLUE}📁 칸나 홈페이지 포함 테스트${NC}"
echo ""

# 1. 로컬 빌드
echo -e "${YELLOW}🔨 로컬 빌드 중...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 로컬 빌드 성공${NC}"
else
    echo -e "${RED}❌ 로컬 빌드 실패${NC}"
    echo "💡 해결 방법: npm install --legacy-peer-deps 재실행"
    exit 1
fi

# 2. Docker 빌드
echo -e "${YELLOW}🐳 Docker 빌드 중...${NC}"
echo -e "${BLUE}💡 개선된 Docker 빌드 스크립트 사용${NC}"
echo -e "${BLUE}   - 자동 컨테이너 관리${NC}"
echo -e "${BLUE}   - 포트 충돌 해결${NC}"
echo -e "${BLUE}   - 칸나 홈페이지 완전 포함${NC}"
echo ""

# Docker 빌드 스크립트를 자동으로 실행 (기본 옵션 선택)
echo "1" | ./docker-build.sh

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Docker 빌드 성공${NC}"
else
    echo -e "${RED}❌ Docker 빌드 실패${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}🎉 모든 검증 완료! Push 준비됨${NC}"
echo ""
echo -e "${GREEN}📋 테스트 체크리스트:${NC}"
echo "1. 🌐 http://localhost:3000 - 메인 페이지"
echo "2. 📁 http://localhost:3000/kanna.html - 칸나 홈페이지"
echo "3. 🎯 메인페이지 → 칸나 홈페이지 버튼 클릭 테스트"
echo ""
echo "다음 단계:"
echo "1. git add ."
echo "2. git commit -m '커밋 메시지'"
echo "3. git push origin 브랜치명"
echo ""
echo "🐳 Docker 컨테이너 관리:"
echo "- 컨테이너 상태: docker ps"
echo "- 브라우저에서 확인: http://localhost:3000"
echo "- 컨테이너 중지: docker stop kanna-app"
echo "- 컨테이너 재시작: docker restart kanna-app"
echo "- 로그 확인: docker logs kanna-app" 