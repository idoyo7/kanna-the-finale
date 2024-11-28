import styles from "@/modules/styles/root.module.css";
import Section from "@/modules/section/section";

import Page1 from "@/sections/page1/page";
import Page2 from "@/sections/page2/page";
import Page3 from "@/sections/page3/page";
import Page4 from "@/sections/page4/page";
import Page5 from "@/sections/page5/page";
import Page6 from "@/sections/page6/page";
import Page7 from "@/sections/page7/page";
import Page8 from "@/sections/page8/page";
import Page9 from "@/sections/page9/page";
import Page10 from "@/sections/page10/page";

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
