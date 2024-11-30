import { GoogleTagManager } from "@next/third-parties/google";

import Header from "@/modules/header/header";
import formatUrl from "@/modules/cdn/formatUrl";

import "@unocss/reset/tailwind.css";
import "@/modules/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="description"
          content="12월 2일, 스텔라이브 아이리 칸나의 마지막 콘서트, The Finale에 여러분을 초대합니다."
        />

        <meta
          name="og:title"
          content="AIRI KANNA LAST CONCERT - 「The finale」"
        />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={formatUrl("/images/og-image.png")} />
        <meta
          name="og:description"
          content="12월 2일, 스텔라이브 아이리 칸나의 마지막 콘서트, The Finale에 여러분을 초대합니다."
        />
        <meta name="og:url" content="https://kanna-thefinale.live" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="AIRI KANNA LAST CONCERT - 「The finale」"
        />
        <meta
          name="twitter:description"
          content="12월 2일, 스텔라이브 아이리 칸나의 마지막 콘서트, The Finale에 여러분을 초대합니다."
        />
        <meta
          name="twitter:image"
          content={formatUrl("/images/og-image.png")}
        />
        <meta name="twitter:domain" content="https://kanna-thefinale.live" />

        <meta
          name="naver-site-verification"
          content="0a40650cea245e2c79c8feacc39ac962b2ab012d"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>

      <GoogleTagManager gtmId="GTM-5QN9C4SW" />

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
