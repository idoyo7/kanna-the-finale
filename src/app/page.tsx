import styles from "@/styles/root.module.css";

import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";
import Page4 from "./page4/page";
import Page5 from "./page5/page";

export default function HomePage() {
  const sections = [
    { id: 1, component: <Page1 />, fullpage: true },
    { id: 2, component: <Page2 />, fullpage: false },
    { id: 3, component: <Page3 />, fullpage: true },
    { id: 4, component: <Page4 />, fullpage: true },
    { id: 5, component: <Page5 />, fullpage: true },
  ];

  return (
    <div>
      {sections.map((section) => (
        <section
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
