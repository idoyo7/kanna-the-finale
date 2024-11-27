"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import Header from "@/modules/header/header";
import { notoSansKr } from "@/styles/fonts";

import "@unocss/reset/tailwind.css";
import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="ko">
      <body className={`${notoSansKr.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
