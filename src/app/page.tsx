import styles from "@/modules/styles/root.module.css";
import Section from "@/modules/section/section";

import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";
import Page4 from "./page4/page";
import Page5 from "./page5/page";
import Page6 from "./page6/page";
import Page7 from "./page7/page";
import Page8 from "./page8/page";
import Page9 from "./page9/page";
import Page10 from "./page10/page";

export default function HomePage() {
  const sections = [
    { id: "hero", component: <Page1 />, fullpage: true },
    { id: "banner", component: <Page2 />, fullpage: false },
    { id: "main", component: <Page3 />, fullpage: true },
    { id: "pv", component: <Page4 />, fullpage: true },
    { id: "story", component: <Page5 />, fullpage: false },
    { id: "history", component: <Page6 />, fullpage: true },
    { id: "history2", component: <Page7 />, fullpage: false },
    { id: "post", component: <Page8 />, fullpage: false },
    { id: "giftbox", component: <Page9 />, fullpage: true },
    { id: "share", component: <Page10 />, fullpage: true },
  ];

  return (
    <div>
      {sections.map((section) => (
        <Section
          id={section.id}
          key={section.id}
          className={`${styles.container} ${
            !section.fullpage ? styles.noFullpage : ""
          }`}
        >
          {section.component}
        </Section>
      ))}
    </div>
  );
}
