import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  // 특정 경로(index.html)로 접근 시 리다이렉트
  if (url.pathname === "/index.html") {
    url.pathname = "/"; // "/"로 변경
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // 다른 요청은 그대로 통과
}

