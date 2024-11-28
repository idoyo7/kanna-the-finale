import styles from "./styles.module.css";

const musicList = {
    "section1": [
        {"1st single ADDICTION": "https://www.youtube.com/embed/kPdB6iGYBBc"},
        {"2nd single 최종화": "https://www.youtube.com/embed/ajDAmJYPQ-U"},
        {"3rd single 푸른 보석과 어린 용": "https://www.youtube.com/embed/gq3gzxPBOK0"},
    ],
    "section2": [
        {"나는 최강": "https://www.youtube.com/embed/MhtScZvcsiQ"},
        {"좋아하니까": "https://www.youtube.com/embed/futqIdI0rOY"},
        {"신시대": "https://www.youtube.com/embed/_nYgmgYMdW0"},
    ],
    "section3": [
        {"삼문소설": "https://www.youtube.com/embed/3PxbqWrDCz4"},
        {"스즈메": "https://www.youtube.com/embed/v8MjiqzLKTs"},
        {"에러": "https://www.youtube.com/embed/eNlXPUp9WBw"},
    ],
    "section4": [
        {"아이돌": "https://www.youtube.com/embed/4_Aknw7fm_8"},
        {"색채": "https://www.youtube.com/embed/AsoPg-h-644"},
        {"잠이 드는 거리": "https://www.youtube.com/embed/nYgMMdYDGak"},
    ],
    "section5": [
        {"LADY": "https://www.youtube.com/embed/GdH0TsPznUs"},
        {"KICK BACK": "https://www.youtube.com/embed/Ei1WobzwsVI"},
        {"지구본": "https://www.youtube.com/embed/8VdlQZQ46D4"},
    ],
    "section6": [
        {"사랑해줘 사랑해줘 사랑해줘": "https://www.youtube.com/embed/OgwD6f_tdIY"},
        {"감 그레이": "https://www.youtube.com/embed/eLJENPbBe8A"},
        {"괴수의 꽃노래": "https://www.youtube.com/embed/of5l0st1kA8"},
    ],
    "section7": [
        {"최종화 (Acoustic Ver.)": "https://www.youtube.com/embed/iCCqSFvz9kM"},
        {"애타는 한 가슴을 달랠 수 있다면": "https://www.youtube.com/embed/IRvrDhVYXHQ"},
        {"역광": "https://www.youtube.com/embed/q-QjjmJjU_8"},
    ],
    "section8": [
        {"Frozen Eclipse": "https://www.youtube.com/embed/RbQv87f4mvg"},
        {"Love wins all (IU)": "https://www.youtube.com/embed/Nr3AhMP1lVg"},
        {"공주열차": "https://www.youtube.com/embed/6A04OifrfR0"},
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
