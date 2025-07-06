export default function formatUrl(filePath: string): string {
  // CDN URL이 없으면 기본값 사용 (로컬 개발 및 Docker 빌드용)
  const cdnUrl = process.env.NEXT_PUBLIC_CDN || '';
  
  return `${cdnUrl}${
    filePath.startsWith("/") ? filePath : `/${filePath}`
  }`;
}
