'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/modules/header/header';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans-kr',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
    <html lang="en">
      <body className={`${notoSansKr.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
