'use client';

import Page1 from "./page1/page";
import Page2 from "./page2/page";

export default function HomePage() {
  const sections = [
    { id: 1, component: <Page1 /> },
    { id: 2, component: <Page2 /> },
    { id: 3, component: <div>Page 3</div> },
  ];

  return (
    <div>
      {sections.map((section) => (
        <section
          key={section.id}
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {section.component}
        </section>
      ))}
    </div>
  );
}
