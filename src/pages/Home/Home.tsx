import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
