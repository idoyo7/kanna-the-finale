# ArgoCD/ArgoRollout 배포 가이드

이 프로젝트는 ArgoCD와 ArgoRollout을 사용하여 GitOps 방식으로 배포됩니다.

## 🏗️ 아키텍처

```
GitHub Actions → Docker Build → Image Push → Update manifest → ArgoCD → ArgoRollout → Kubernetes
```

## 📋 필수 구성요소

### 1. ArgoCD 설치
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

### 2. ArgoRollout 설치
```bash
kubectl create namespace argo-rollouts
kubectl apply -n argo-rollouts -f https://github.com/argoproj/argo-rollouts/releases/latest/download/install.yaml
```

### 3. Prometheus 설치 (분석을 위해 필요)
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack -n monitoring --create-namespace
```

## 🚀 배포 프로세스

### 1. 자동 배포
- `master` 브랜치에 코드 푸시
- GitHub Actions가 Docker 이미지 빌드 및 푸시
- `manifest/rollout.yaml`에 새 이미지 태그 업데이트
- ArgoCD가 변경사항 감지 후 자동 동기화
- ArgoRollout이 Blue-Green 배포 시작

### 2. Blue-Green 배포 과정
1. **Preview 환경 배포**: 새 버전이 preview 서비스로 배포
2. **자동 분석**: Prometheus 메트릭을 통한 성능 분석
3. **수동 승격**: 분석 통과 후 수동으로 승격 필요
4. **Active 환경 전환**: 트래픽이 새 버전으로 전환
5. **이전 버전 제거**: 30초 후 이전 버전 정리

## 🎛️ 관리 명령어

### ArgoCD 애플리케이션 생성
```bash
kubectl apply -f manifest/argocd-application.yaml
```

### Rollout 상태 확인
```bash
# Rollout 상태 확인
kubectl argo rollouts get rollout kanna -n kanna

# 실시간 상태 모니터링
kubectl argo rollouts get rollout kanna -n kanna --watch
```

### 수동 배포 승격
```bash
# 분석 결과가 성공적이면 수동으로 승격
kubectl argo rollouts promote kanna -n kanna
```

### 배포 롤백
```bash
# 이전 버전으로 롤백
kubectl argo rollouts undo kanna -n kanna
```

### 배포 중단
```bash
# 현재 배포 중단
kubectl argo rollouts abort kanna -n kanna
```

## 📊 모니터링

### ArgoCD UI 접근
```bash
# ArgoCD 비밀번호 확인
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

# 포트 포워딩
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

### ArgoRollout 대시보드
```bash
# Rollout 대시보드 설치
kubectl apply -f https://raw.githubusercontent.com/argoproj/argo-rollouts/stable/manifests/dashboard-install.yaml

# 포트 포워딩
kubectl port-forward svc/argo-rollouts-dashboard -n argo-rollouts 3100:3100
```

## 🔧 설정 파일 설명

### 주요 매니페스트 파일들
- `rollout.yaml`: ArgoRollout 설정
- `services-rollout.yaml`: Active/Preview 서비스
- `analysis-template.yaml`: 배포 분석 템플릿
- `argocd-application.yaml`: ArgoCD 애플리케이션 정의
- `kustomization.yaml`: Kustomize 설정

### 환경별 설정
현재 환경:
- Namespace: `kanna`
- 도메인: `kanna.airi.life`
- 복제본 수: 3
- 배포 전략: Blue-Green
- 분석: Prometheus 기반 성공률 및 응답시간 체크

## 🚨 트러블슈팅

### 일반적인 문제들

1. **ArgoCD 동기화 실패**
   ```bash
   # 수동 동기화 강제 실행
   argocd app sync kanna-app
   ```

2. **Rollout이 멈춤**
   ```bash
   # Rollout 재시작
   kubectl argo rollouts restart kanna -n kanna
   ```

3. **분석 실패**
   - Prometheus 메트릭 확인
   - AnalysisTemplate의 쿼리 검증

4. **서비스 연결 문제**
   - Active/Preview 서비스 확인
   - Ingress 설정 검증

## 📚 추가 리소스

- [ArgoCD 공식 문서](https://argo-cd.readthedocs.io/)
- [ArgoRollout 공식 문서](https://argoproj.github.io/argo-rollouts/)
- [GitOps 베스트 프랙티스](https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/) 