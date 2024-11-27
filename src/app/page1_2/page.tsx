"use client";

import { useEffect, useState } from "react";

import ReactPlayer from "react-player/lazy";
// import ReactPlayer from "react-player/youtube";

import styles from "./styles.module.css";

function Page1_2() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      <div className={styles.video}>
        {hasWindow && (
          <ReactPlayer
            url="https://youtu.be/eNbB4MWbZAI-U"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
}

export default Page1_2;
