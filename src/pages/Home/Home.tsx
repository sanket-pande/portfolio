import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* hero + about share one chapter — same wash, no seam between them */}
      <div className={`${styles.chapter} ${styles.surfaceA}`}>
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
