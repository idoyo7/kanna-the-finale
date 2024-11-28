import Image from "next/image";

import formatUrl from "@/modules/cdn/formatUrl";

import styles from "./styles.module.css";

export default function Page9() {
  return (
    <div className={styles.container}>
      <Image
        src={formatUrl("/images/gifts/announcements/gift1.jpg")}
        alt="[기간한정] 아이리칸나 The Finale 월페이퍼 공유"
        className={styles.image}
        width={1250}
        height={702}
      />

      <Image
        src={formatUrl("/images/gifts/announcements/gift2.jpg")}
        alt="[기간한정] 아이리칸나 모바일, 탭용 배경화면 공유"
        className={styles.image}
        width={1250}
        height={702}
      />
    </div>
  );
}
