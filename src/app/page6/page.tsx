"use client";
import { useSwipeable } from "react-swipeable";

import styles from "./styles.module.css";

export default function Page6() {
    const ImgDir = {
        raw01: [
            "/img/raw01/raw01_1.jpg",
            "/img/raw01/raw01_2.jpg",
            "/img/raw01/raw01_3.jpg",
            "/img/raw01/raw01_4.jpg",
            "/img/raw01/raw01_5.jpg",
            "/img/raw01/raw01_6.jpg",
            "/img/raw01/raw01_7.jpg",
            "/img/raw01/raw01_8.jpg",
        ],
        raw02: [
            "/img/raw02/raw02_1.jpg",
            "/img/raw02/raw02_2.jpg",
            "/img/raw02/raw02_3.jpg",
            "/img/raw02/raw02_4.jpg",
            "/img/raw02/raw02_5.jpg",
            "/img/raw02/raw02_6.jpg",
            "/img/raw02/raw02_7.jpg",
            "/img/raw02/raw02_8.jpg",
        ],
        raw03: [
            "/img/raw03/raw03_1.jpg",
            "/img/raw03/raw03_2.jpg",
            "/img/raw03/raw03_3.jpg",
        ],
    };
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
