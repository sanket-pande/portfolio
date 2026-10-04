import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import styles from "./Home.module.css";

export default function Home() {
  const { hash } = useLocation();

  // Arriving from another route (/components → "#about") is a client-side
  // navigation, so the browser never performs its own fragment scroll.
  // Do it here once the section has actually rendered.
  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;
    const frame = requestAnimationFrame(() => {
      target.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <main id="main" className={styles.home}>
      {/* the pitch, then the proof (experience, skills), then how I work and
          how to reach me - About follows the proof so it doesn't repeat the Hero */}
      <div className={`${styles.chapter} ${styles.flush}`}>
        <Hero />
      </div>
      <div className={styles.chapter}>
        <Experience />
      </div>
      <div className={styles.chapter}>
        <Skills />
      </div>
      <div className={styles.chapter}>
        <About />
      </div>
      <div className={styles.chapter}>
        <Contact />
      </div>
    </main>
  );
}
