import styles from "./styles.module.css";

const musicList = {
    "section1": [
        {"1st single ADDICTION": "https://www.youtube.com/embed/kPdB6iGYBBc"},
        {"2nd single 최종화": "https://www.youtube.com/embed/ajDAmJYPQ-U"},
        {"3rd single 푸른 보석과 어린 용": "https://www.youtube.com/embed/gq3gzxPBOK0"},
    ],
    "section2": [
        {"공주열차": "https://www.youtube.com/embed/6A04OifrfR0"},
        {"Love wins all (IU)": "https://www.youtube.com/embed/Nr3AhMP1lVg"},
        {"역광": "https://www.youtube.com/embed/q-QjjmJjU_8"},
    ]
}

export default function Page7() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>우리의_추억들#1</span>
                <span className={styles.subtitle}>아이리 칸나의 음악관</span>
                <span className={styles.description}>칸나의 발걸음이 담겨있는 음악관이에요!</span>
                <span className={styles.subdescription}>그동안 칸나와 함께 걸어왔던 길을 같이 걸어보아요!</span>
            </div>
            <div className={styles.content}>
                {Object.entries(musicList).map(([sectionKey, items], sectionIndex) => (
                    <div key={sectionKey} className={styles.musicRow}>
                        {items.map((item, index) => (
                            <div key={`${sectionKey}-${index}`} className={styles.musicItem}>
                                <h3>{Object.keys(item)[0]}</h3>
                                <iframe
                                    width="360"
                                    height="215"
                                    src={Object.values(item)[0]}
                                    title={Object.keys(item)[0]}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
