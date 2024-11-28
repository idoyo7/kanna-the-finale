"use client";

import { useRouter } from "next/router";

// Generic throttle function with explicit type annotations
function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => ReturnType<T> | void {
  let lastCall = 0;

  return function (...args: Parameters<T>): ReturnType<T> | void {
    const now = Date.now();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return func(...args) as ReturnType<T>;
  };
}

export default function Section(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > & { id: string; children: React.ReactNode }
) {
  const router = useRouter();

  const updateHash = throttle(() => {
    const section = document.getElementById(props.id);

    if (section) {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top; // 섹션의 상단 위치

      // 섹션이 화면의 상단에 가까워지면 URL 업데이트
      if (offsetTop >= 0 && offsetTop <= window.innerHeight / 2) {
        const newHash = `#${props.id}`;
        if (newHash !== window.location.hash) {
          window.location.hash = newHash;
          router.replace(newHash);
        }
      }
    }
  }, 200); // 200ms 간격으로 제한

  return <section {...props}>{props.children}</section>;
}
