import ChipList from "../Chip/Chip";
import Button from "../Button/Button";
import Stat from "../Stat/Stat";
import { coreStack, profile, stats } from "../../data/resume";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.field} aria-hidden="true" />
      <div className={styles.inner}>
        <h1 className={`${styles.headline} ${styles.animate}`}>
          {profile.headline} <em>{profile.headlineAccent}</em>
        </h1>

        <p className={`${styles.summary} ${styles.animate} ${styles.delay1}`}>{profile.summary}</p>

        <div className={`${styles.actions} ${styles.animate} ${styles.delay2}`}>
          <Button variant="primary" size="lg" href="#contact">
            Contact me
          </Button>
          <Button variant="ghost" size="lg" href="#experience">
            View experience
          </Button>
        </div>

        <div className={`${styles.animate} ${styles.delay3}`}>
          <ChipList items={coreStack} tone="accent" ariaLabel="Core stack" />
        </div>

        <div className={`${styles.stats} ${styles.animate} ${styles.delay4}`}>
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
