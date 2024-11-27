import styles from "@/styles/root.module.css";

import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";
import Page4 from "./page4/page";
import Page5 from "./page5/page";
import Page6 from "./page6/page";

export default function HomePage() {
  const sections = [
    { id: "hero", component: <Page1 />, fullpage: true },
    { id: "banner", component: <Page2 />, fullpage: false },
    { id: "main", component: <Page3 />, fullpage: true },
    { id: "pv", component: <Page4 />, fullpage: true },
    { id: "story", component: <Page5 />, fullpage: false },
    { id: "history", component: <Page6 />, fullpage: true },
  ];

  return (
    <div>
      {sections.map((section) => (
        <section
          id={section.id}
          key={section.id}
          className={`${styles.container} ${
            !section.fullpage ? styles.noFullpage : ""
          }`}
        >
          {section.component}
        </section>
      ))}
    </div>
  );
}
