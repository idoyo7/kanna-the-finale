import { Metadata } from "next";
import Head from "next/head";

import styles from "@/modules/styles/root.module.css";
import Section from "@/modules/section/section";
import { concertPlaying } from "@/modules/time/calcTime";

import Page1 from "@/sections/page1/page";
import Page1_1 from "@/sections/page1_1/page";
import Page2 from "@/sections/page2/page";
import Page3 from "@/sections/page3/page";
import Page4 from "@/sections/page4/page";
import Page5 from "@/sections/page5/page";
import Page6 from "@/sections/page6/page";
import Page7 from "@/sections/page7/page";
import Page8 from "@/sections/page8/page";
import Page9 from "@/sections/page9/page";

export const metadata: Metadata = {
  title: "AIRI KANNA LAST CONCERT - 「The finale」",
};

export default function HomePage() {
  const sections = [
    {
      id: "hero",
      component: !concertPlaying() ? <Page1 /> : <Page1_1 />,
      full: true,
    },
    { id: "banner", component: <Page2 /> },
    { id: "pv", component: <Page3 />, full: true },
    { id: "story", component: <Page4 /> },
    { id: "history", component: <Page5 />, full: true },
    { id: "history2", component: <Page6 /> },
    { id: "post", component: <Page7 /> },
    { id: "giftbox", component: <Page8 />, full: true },
    { id: "share", component: <Page9 />, full: true },
  ];

  return (
    <>
      <Head>
        <title>AIRI KANNA LAST CONCERT - 「The finale」</title>
      </Head>

      <main>
        {sections.map((section) => (
          <Section
            id={section.id}
            key={section.id}
            className={`${styles.container} ${
              !section.full ? styles.noFullpage : ""
            }`}
          >
            {section.component}
          </Section>
        ))}
      </main>
    </>
  );
}
