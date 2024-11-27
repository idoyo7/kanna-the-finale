import styles from "./styles.module.css";

export default function Page2() {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${styles.letter}`}
    >
      <section
        className={`max-w-2xl mx-auto text-center ${styles.letter__basic}`}
      >
        <p className="mb-8">
          누군가에게 꿈이 되고 싶었던, 항상 높은 곳에서 빝나길 바랐던 소녀는
          말해왔습니다.
        </p>
        <p className={`mb-8 ${styles.letter__highlight}`}>
          &quot;그야 나는 별이니까&quot;
        </p>
        <p className="mb-8">
          가장 빛나는 별이 되기 위해 매번 죽을 힘을 다해 노래하던 소녀는
          행복했습니다.
          <br />
          소녀는 항상 빛날 수 있는 것만 같았습니다.
          <br />
          하지만, 그녀의 빛이 커질수록 그림자도 커져만 갔습니다.
          <br />
          언제나 위를 보고 달리던 그녀는 수차례 넘어졌고, 때로는 포기하고 싶기도
          했습니다.
        </p>
        <p className="mb-8">
          그렇게 그림자 속에서 처음으로 위가 아닌 주변을 둘러보았을 때, 그녀는
          깨달았습니다.
          <br />
          이미 주변에는 수많은 별들이 함께 빛나고 있다는 것을.
          <br />
          별은 서로 속에서, 서로를 비추어 줄 때 가장 아름답게 빛난다는 것을요.
        </p>
        <p className="mb-8">
          이제 마지막 무대를 앞둔, 가장 아름답게 빝나는 별이 우리에게 말합니다.
        </p>
        <p className={`mb-8 ${styles.letter__highlight}`}>
          &quot;우린 모두 별이니까&quot;
        </p>
      </section>
    </div>
  );
}
