import styles from "@/styles/root.module.css";

import Page1 from "./page1/page";
import Page1_1 from "./page1_1/page";
import Page1_2 from "./page1_2/page";
import Page2 from "./page2/page";

export default function HomePage() {
  const sections = [
    { id: 1, component: <Page1 /> },
    { id: 1_1, component: <Page1_1 /> },
    { id: 1_2, component: <Page1_2 /> },
    { id: 2, component: <Page2 /> },
    { id: 3, component: <div>Page 3</div> },
  ];

  return (
    <div>
      {sections.map((section) => (
        <section key={section.id} className={styles.container}>
          {section.component}
        </section>
      ))}
    </div>
  );
}
