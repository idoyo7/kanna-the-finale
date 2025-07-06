#!/bin/bash

# Kanna The Finale Docker 빌드 스크립트 (Multi-stage Build)

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

IMAGE_NAME="kanna-the-finale"
TAG="latest"
CONTAINER_NAME="kanna-app"
PORT="3000"

# 현재 플랫폼 감지
ARCH=$(uname -m)
if [[ "$ARCH" == "arm64" ]]; then
    PLATFORM="linux/arm64"
    PLATFORM_NAME="ARM64 (Apple Silicon)"
elif [[ "$ARCH" == "x86_64" ]]; then
    PLATFORM="linux/amd64"
    PLATFORM_NAME="AMD64 (x86_64)"
else
    PLATFORM="linux/$ARCH"
    PLATFORM_NAME="$ARCH"
fi

echo -e "${GREEN}🚀 Kanna The Finale Multi-stage Docker 빌드${NC}"
echo -e "${BLUE}플랫폼: $PLATFORM_NAME${NC}"
echo -e "${YELLOW}이미지: $IMAGE_NAME:$TAG${NC}"
echo -e "${YELLOW}✨ Multi-stage build로 경량화된 프로덕션 이미지${NC}"
echo -e "${YELLOW}📁 칸나 홈페이지 포함 (로컬 HTML/CSS/JS)${NC}"
echo ""

# 빌드 옵션 선택
echo "빌드 옵션을 선택하세요:"
echo "1. 현재 플랫폼용 빌드 ($PLATFORM_NAME)"
echo "2. 멀티플랫폼 빌드 (AMD64 + ARM64) - 시간이 오래 걸림"
echo "3. 캐시 없이 새로 빌드"
echo ""
echo -e "${YELLOW}5초 후 자동으로 기본값(1)으로 진행됩니다...${NC}"
read -t 5 -p "선택 (기본값: 1): " CHOICE
if [ $? -ne 0 ]; then
    echo -e "\n${BLUE}⏰ 시간 초과 - 기본값(1) 선택${NC}"
    CHOICE=1
fi

case $CHOICE in
    2)
        echo -e "${BLUE}🔨 멀티플랫폼 Multi-stage 빌드 시작...${NC}"
        echo -e "${YELLOW}⚠️ 멀티플랫폼 빌드는 시간이 오래 걸릴 수 있습니다${NC}"
        docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE_NAME:$TAG --load .
        ;;
    3)
        echo -e "${BLUE}🔨 캐시 없이 Multi-stage 빌드 시작...${NC}"
        docker build --no-cache --platform $PLATFORM -t $IMAGE_NAME:$TAG .
        ;;
    *)
        echo -e "${BLUE}🔨 $PLATFORM_NAME Multi-stage 빌드 시작...${NC}"
        docker build --platform $PLATFORM -t $IMAGE_NAME:$TAG .
        ;;
esac

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Multi-stage 빌드 성공!${NC}"
    echo ""
    echo "📋 빌드된 이미지 정보:"
    docker images $IMAGE_NAME:$TAG --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}"
    echo ""
    echo -e "${GREEN}💡 Multi-stage build 효과:${NC}"
    echo "- Build 스테이지: 모든 개발 도구 + 빌드 과정"
    echo "- Production 스테이지: 빌드 결과물 + 런타임만"
    echo "- 최종 이미지 크기 대폭 감소 🎯"
    echo "- 칸나 홈페이지 완전 포함 📁"
    echo ""
    
    # 실행 여부 확인
    echo -e "${YELLOW}5초 후 자동으로 컨테이너를 실행합니다...${NC}"
    read -t 5 -p "컨테이너를 실행하시겠습니까? (y/n, 기본값: y): " RUN_CONTAINER
    if [ $? -ne 0 ]; then
        echo -e "\n${BLUE}⏰ 시간 초과 - 자동으로 컨테이너 실행${NC}"
        RUN_CONTAINER="y"
    fi
    
    if [[ $RUN_CONTAINER == "y" || $RUN_CONTAINER == "Y" ]]; then
        echo ""
        echo -e "${BLUE}🔍 포트 $PORT 사용 중인 컨테이너 확인 중...${NC}"
        
        # 포트를 사용 중인 컨테이너 찾기
        EXISTING_CONTAINER=$(docker ps -q --filter "publish=$PORT")
        
        if [ ! -z "$EXISTING_CONTAINER" ]; then
            CONTAINER_INFO=$(docker ps --filter "publish=$PORT" --format "table {{.Names}}\t{{.Image}}\t{{.Status}}")
            echo -e "${YELLOW}⚠️ 포트 $PORT을 사용 중인 컨테이너가 있습니다:${NC}"
            echo "$CONTAINER_INFO"
            echo ""
            echo -e "${YELLOW}5초 후 자동으로 기존 컨테이너를 중지하고 새로 실행합니다...${NC}"
            read -t 5 -p "기존 컨테이너를 중지하고 새로 실행하시겠습니까? (y/n, 기본값: y): " STOP_EXISTING
            if [ $? -ne 0 ]; then
                echo -e "\n${BLUE}⏰ 시간 초과 - 자동으로 기존 컨테이너 중지${NC}"
                STOP_EXISTING="y"
            fi
            
            if [[ $STOP_EXISTING == "y" || $STOP_EXISTING == "Y" ]]; then
                echo -e "${YELLOW}🛑 기존 컨테이너 중지 중...${NC}"
                docker stop $EXISTING_CONTAINER
                docker rm $EXISTING_CONTAINER 2>/dev/null
                echo -e "${GREEN}✅ 기존 컨테이너 정리 완료${NC}"
            else
                echo -e "${YELLOW}⚠️ 다른 포트를 사용하거나 기존 컨테이너를 수동으로 중지해주세요${NC}"
                exit 0
            fi
        fi
        
        # 같은 이름의 컨테이너가 있는지 확인 (중지된 상태)
        STOPPED_CONTAINER=$(docker ps -a -q --filter "name=$CONTAINER_NAME")
        if [ ! -z "$STOPPED_CONTAINER" ]; then
            echo -e "${YELLOW}🗑️ 기존 컨테이너 '$CONTAINER_NAME' 제거 중...${NC}"
            docker rm $STOPPED_CONTAINER
        fi
        
        # 새 컨테이너 실행
        echo -e "${BLUE}🚀 새 컨테이너 실행 중...${NC}"
        docker run -d -p $PORT:3000 --name $CONTAINER_NAME $IMAGE_NAME:$TAG
        
        if [ $? -eq 0 ]; then
            echo ""
            echo -e "${GREEN}✅ 컨테이너 실행 성공!${NC}"
            echo -e "${GREEN}🌐 http://localhost:$PORT 에서 확인하세요${NC}"
            echo -e "${GREEN}📁 칸나 홈페이지: http://localhost:$PORT/kanna.html${NC}"
            echo ""
            echo -e "${BLUE}컨테이너 관리 명령어:${NC}"
            echo "• 로그 확인: docker logs $CONTAINER_NAME"
            echo "• 컨테이너 상태: docker ps"
            echo "• 컨테이너 중지: docker stop $CONTAINER_NAME"
            echo "• 컨테이너 재시작: docker restart $CONTAINER_NAME"
            echo "• 컨테이너 삭제: docker stop $CONTAINER_NAME && docker rm $CONTAINER_NAME"
            echo ""
            
            # 컨테이너 상태 확인
            sleep 3
            if docker ps | grep -q $CONTAINER_NAME; then
                echo -e "${GREEN}✅ 컨테이너가 정상적으로 실행 중입니다${NC}"
                echo -e "${GREEN}🎯 테스트: 메인페이지 → 칸나 홈페이지 버튼 클릭${NC}"
            else
                echo -e "${RED}❌ 컨테이너 실행에 문제가 있을 수 있습니다${NC}"
                echo "로그를 확인해보세요: docker logs $CONTAINER_NAME"
            fi
        else
            echo -e "${RED}❌ 컨테이너 실행 실패${NC}"
        fi
    else
        echo ""
        echo "🚀 수동 실행 방법:"
        echo "docker run -p $PORT:3000 $IMAGE_NAME:$TAG"
        echo ""
        echo "🔍 백그라운드 실행:"
        echo "docker run -d -p $PORT:3000 --name $CONTAINER_NAME $IMAGE_NAME:$TAG"
    fi
else
    echo ""
    echo -e "${RED}❌ 빌드 실패${NC}"
    echo ""
    echo "💡 해결 방법:"
    echo "1. Docker Desktop 재시작"
    echo "2. 메모리 4GB 이상 할당 확인"
    echo "3. docker system prune -a (캐시 정리)"
    echo "4. npm install --legacy-peer-deps 재실행"
    exit 1
fi 