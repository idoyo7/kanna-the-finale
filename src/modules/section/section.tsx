"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Section(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > & { id: string; children: React.ReactNode }
) {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(props.id);

      if (section) {
        const rect = section.getBoundingClientRect();
        const offsetTop = rect.top; // 섹션의 상단 위치

        // 섹션이 화면의 상단에 가까워지면 URL 업데이트
        if (offsetTop >= 0 && offsetTop <= window.innerHeight / 2) {
          router.replace(`#${props.id}`, { scroll: false });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기화

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.id, router]);

  return <section {...props}>{props.children}</section>;
}
