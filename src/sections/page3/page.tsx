"use client";

import { useEffect, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

import ReactPlayer from "react-player/lazy";
// import ReactPlayer from "react-player/youtube";

import styles from "./styles.module.css";

export default function Page3() {
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
            url="https://youtu.be/eNbB4MWbZAI"
            width="100%"
            height="100%"
            light="https://i.ytimg.com/vi/eNbB4MWbZAI/maxresdefault.jpg"
            onClick={() => sendGTMEvent({ event: "playPv" })}
          />
        )}
      </div>
    </div>
  );
}
