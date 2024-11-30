"use client";

import { concertPlaying } from "@/modules/time/calcTime";
import { useEffect, useState } from "react";

import Page1_1 from "../page1_1/page";
import Page1_2 from "../page1_2/page";

export default function Page1() {
  const [canMount, setCanMount] = useState(false);
  const [isPlayingConcert, setIsPlayingConcert] = useState(false);

  useEffect(() => {
    setIsPlayingConcert(concertPlaying());
    setCanMount(true);
  }, []);

  if (!canMount) {
    return null;
  }

  return !isPlayingConcert ? <Page1_1 /> : <Page1_2 />;
}
