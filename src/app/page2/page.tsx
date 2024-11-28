import { nanumMyeongjo, playfairDisplay } from "@/modules/styles/fonts";
import styles from "./styles.module.css";

export default function Page2() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${playfairDisplay.className}`}>
        The Finale
      </h1>

      <h2 className={styles.subtitle}>The Last Song of Stellar</h2>
      <h3 className={`${styles.description} ${nanumMyeongjo.className}`}>
        아이리 칸나의 마지막 콘서트
      </h3>
    </div>
  );
}
