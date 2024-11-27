import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // 부드러운 스크롤 속도 설정
      smoothWheel: true, // 부드러운 스크롤 활성화
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // 언마운트 시 리소스 정리
    };
  }, []);

  return <>{children}</>;
}
