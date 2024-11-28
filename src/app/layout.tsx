import Header from "@/modules/header/header";
import { notoSansKr } from "@/modules/styles/fonts";

import "@unocss/reset/tailwind.css";
import "@/modules/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
