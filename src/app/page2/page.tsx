import { nanumMyeongjo, playfairDisplay } from "@/styles/fonts";
import styles from "./styles.module.css";

export default function Page2() {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} ${playfairDisplay.className}`}>
        The Finale
      </div>

      <div className={styles.subtitle}>The Last Song of Stellar</div>
      <div className={`${styles.description} ${nanumMyeongjo.className}`}>
        아이리 칸나의 마지막 콘서트
      </div>
    </div>
  );
}
