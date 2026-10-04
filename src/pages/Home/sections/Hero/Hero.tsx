import Button from "../../../../components/Button/Button";
import Stat from "../../../../components/Stat/Stat";
import Icon from "../../../../components/Icon/Icon";
import { useInView } from "../../../../hooks/useInView";
import { profile, stats } from "../../../../data/resume";
import styles from "./Hero.module.css";

export default function Hero() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} id="top" data-play={inView} className={styles.hero}>
      <div className={styles.field} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={`${styles.byline} ${styles.animate}`}>
            <span className={styles.name}>{profile.name}</span>
            <span className={styles.tagline}>{profile.tagline.join(" · ")}</span>
          </p>

          {/* the thesis is the heading - the name sits above it as a byline */}
          <h1 className={`${styles.headline} ${styles.animate} ${styles.delay1}`}>
            {profile.headlineLead} <em>{profile.headlineAccent}</em> {profile.headlineTail}
          </h1>

          <p className={`${styles.summary} ${styles.animate} ${styles.delay2}`}>{profile.summary}</p>

          <div className={`${styles.actions} ${styles.animate} ${styles.delay3}`}>
            <Button variant="primary" href="#contact">
              Get in touch
              <Icon name="arrowRight" size={15} />
            </Button>
            <Button variant="ghost" href="#experience">
              View experience
            </Button>
          </div>
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
