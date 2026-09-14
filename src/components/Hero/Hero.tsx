import ChipList from "../Chip/Chip";
import { coreStack, profile, stats } from "../../data/resume";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.field} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.bar}>
          <span className={styles.livePill}>
            <span className={styles.liveDot} />
            Currently at {profile.currentEmployer}
          </span>
          <span className={styles.location}>{profile.location}</span>
        </div>

        <h1 className={styles.headline}>
          I build backend systems for <em>healthcare data</em> that has to be right.
        </h1>

        <p className={styles.summary}>{profile.summary}</p>

        <div className={styles.actions}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className={`${styles.btn} ${styles.btnGhost}`} href="#experience">
            View experience
          </a>
        </div>

        <ChipList items={coreStack} tone="accent" ariaLabel="Core stack" />

        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <dt className={styles.statValue}>{stat.value}</dt>
              <dd className={styles.statLabel}>{stat.label}</dd>
              <dd className={styles.statContext}>{stat.context}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
