# Rollout 문제 해결 가이드

pod가 생성되지 않고 rollout이 degrade되는 문제를 해결하는 단계별 가이드입니다.

## 🔍 1단계: 기본 환경 확인

### ArgoRollout CRD 설치 확인
```bash
# ArgoRollout CRD가 설치되어 있는지 확인
kubectl get crd | grep rollouts

# ArgoRollout controller가 실행 중인지 확인
kubectl get pods -n argo-rollouts
```

### 네임스페이스 확인
```bash
# kanna 네임스페이스가 존재하는지 확인
kubectl get namespace kanna

# 없다면 생성
kubectl create namespace kanna
```

## 🔍 2단계: 기존 리소스 충돌 확인

### 기존 Deployment 확인 및 제거
```bash
# 기존 deployment가 실행 중인지 확인
kubectl get deployment -n kanna

# 기존 deployment가 있다면 삭제 (같은 selector 사용시 충돌)
kubectl delete deployment kanna -n kanna
```

### 기존 ReplicaSet 확인
```bash
# 남아있는 ReplicaSet 확인
kubectl get rs -n kanna

# 필요시 정리
kubectl delete rs -l app=kanna -n kanna
```

## 🔍 3단계: 이미지 및 리소스 확인

### Docker 이미지 확인
```bash
# 이미지가 실제로 존재하는지 확인
docker pull idoyo7/kanna:8ff103

# 또는 Kubernetes에서 직접 확인
kubectl run test-pod --image=idoyo7/kanna:8ff103 --dry-run=client -o yaml
```

### 노드 리소스 확인
```bash
# 노드별 리소스 사용량 확인
kubectl top nodes

# Pod가 스케줄링될 수 있는지 확인
kubectl describe nodes
```

## 🔍 4단계: 단계별 Rollout 테스트

### 최소한의 Rollout으로 테스트
```bash
# 기존 rollout 삭제
kubectl delete rollout kanna -n kanna

# 최소한의 설정으로 테스트
kubectl apply -f manifest/rollout-debug.yaml

# Rollout 상태 확인
kubectl argo rollouts get rollout kanna -n kanna --watch
```

### Pod 상태 상세 확인
```bash
# Pod 생성 상태 확인
kubectl get pods -n kanna -o wide

# Pod가 생성되지 않는다면 events 확인
kubectl get events -n kanna --sort-by='.lastTimestamp'

# Rollout events 확인
kubectl describe rollout kanna -n kanna
```

## 🔍 5단계: 로그 및 상세 디버깅

### Rollout Controller 로그 확인
```bash
# ArgoRollout controller 로그 확인
kubectl logs -n argo-rollouts deployment/argo-rollouts-controller

# 특정 시간대 로그 확인
kubectl logs -n argo-rollouts deployment/argo-rollouts-controller --since=10m
```

### Pod 생성 실패 원인 확인
```bash
# ReplicaSet 상태 확인
kubectl describe rs -l app=kanna -n kanna

# 스케줄링 문제 확인
kubectl get events -n kanna --field-selector type=Warning
```

## 🛠️ 임시 해결 방법

### 1. Blue-Green 대신 Canary 사용
현재 `rollout.yaml` 대신 `rollout-simple.yaml` 사용:
```bash
kubectl apply -f manifest/rollout-simple.yaml
```

### 2. 가장 단순한 Rolling Update 사용
```bash
kubectl apply -f manifest/rollout-debug.yaml
```

### 3. 일반 Deployment로 복원
문제가 계속되면 일단 기존 deployment로 복원:
```bash
kubectl apply -f manifest/deployment.yaml.backup
```

## 🚀 일반적인 해결책

### 서비스 설정 확인
Blue-Green 전략 사용시 서비스가 제대로 설정되어 있는지 확인:
```bash
kubectl get svc -n kanna
kubectl apply -f manifest/services-rollout.yaml
```

### 권한 문제 해결
ArgoRollout controller에 필요한 권한이 있는지 확인:
```bash
kubectl auth can-i create pods --as=system:serviceaccount:argo-rollouts:argo-rollouts-controller -n kanna
```

## 📋 체크리스트

- [ ] ArgoRollout CRD 설치됨
- [ ] ArgoRollout controller 실행 중
- [ ] kanna 네임스페이스 존재
- [ ] 기존 deployment 삭제됨
- [ ] Docker 이미지 접근 가능
- [ ] 노드에 충분한 리소스
- [ ] 서비스 설정 정확함
- [ ] 권한 문제 없음

## 🆘 긴급 복구

모든 것이 실패하면 기존 방식으로 복구:
```bash
# Rollout 완전 삭제
kubectl delete rollout kanna -n kanna
kubectl delete -f manifest/services-rollout.yaml

# 기존 deployment 복원
kubectl apply -f manifest/deployment.yaml.backup

# 기존 서비스 확인
kubectl apply -f manifest/svc.yaml
``` 