import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  // 특정 경로(index.html)로 접근 시 리다이렉트
  if (url.pathname === "/index.html") {
    url.pathname = "/"; // "/"로 변경
    return NextResponse.redirect(url);
  }

  // /kanna로 시작하는 모든 경로를 kanna.html로 리다이렉트
  if (url.pathname === "/kanna" || url.pathname.startsWith("/kanna#")) {
    const newUrl = new URL(request.url);
    newUrl.pathname = "/kanna.html";
    // 해시 제거
    newUrl.hash = "";
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next(); // 다른 요청은 그대로 통과
}

