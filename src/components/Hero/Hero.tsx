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
        {/* one line, one size — the whole greeting is the heading */}
        <h1 className={`${styles.name} ${styles.animate}`}>
          {profile.greeting} {profile.name}
        </h1>

        <p className={`${styles.headline} ${styles.animate} ${styles.delay1}`}>
          {profile.headline} <em>{profile.headlineAccent}</em>
        </p>

        <p className={`${styles.summary} ${styles.animate} ${styles.delay2}`}>{profile.summary}</p>

        <div className={`${styles.actions} ${styles.animate} ${styles.delay3}`}>
          <Button variant="primary" size="lg" href="#contact">
            Contact me
          </Button>
          <Button variant="ghost" size="lg" href="#experience">
            View experience
          </Button>
        </div>

        <div className={`${styles.animate} ${styles.delay4}`}>
          <ChipList items={coreStack} tone="accent" ariaLabel="Core stack" />
        </div>

        <div className={`${styles.stats} ${styles.animate} ${styles.delay5}`}>
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
