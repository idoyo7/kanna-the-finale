"use client";
import { useSwipeable } from "react-swipeable";

import styles from "./styles.module.css";

export default function Page6() {
    const handlers = useSwipeable({
        onSwipedLeft: () => console.log("Swiped Left!"),
        onSwipedRight: () => console.log("Swiped Right!"),
    });

    return (
        <div>
            <div>
                <span>우리의_추억들#1</span>
                <span>아이라 칸나의 사진관</span>
                <p>line</p>
                <span>이때까지 우리의 추억들을 모아둔 사진관이에요!</span>
                <span>다양한 상황들의 그림을 보며 우리의 추억들을 회상해보아요</span>
            </div>
            <div>
                <span>raw 01</span>
            </div>
            <div>
                <span>raw 02</span>
            </div>
            <div>
                <span>raw 03</span>
            </div>
        </div>
    );
}
