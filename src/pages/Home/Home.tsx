import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
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
      {/* hero + about share one chapter — same wash, no seam between them */}
      <div className={`${styles.chapter} ${styles.flush} ${styles.surfaceA}`}>
        <Hero />
        <About />
      </div>
      <div className={`${styles.chapter} ${styles.surfaceB}`}>
        <Experience />
      </div>
      <div className={`${styles.chapter} ${styles.surfaceA}`}>
        <Skills />
      </div>
      <div className={`${styles.chapter} ${styles.surfaceB}`}>
        <Contact />
      </div>
    </main>
  );
}
