import { nanumMyeongjo, playfairDisplay } from "@/modules/styles/fonts";
import styles from "./styles.module.css";

export default function Page2() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${playfairDisplay.className}`}>
        비늘이들 얼음🧊
      </h1>

      <h2 className={styles.subtitle}>𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 🎸</h2>
      <h3 className={`${styles.description} ${nanumMyeongjo.className}`}>
        나한테는 아이리 칸나도 힙합이야 
      </h3>
    </div>
  );
}
