import Section from "../Section/Section";
import ChipList from "../Chip/Chip";
import { skillGroups, type SkillGroup } from "../../data/resume";
import { useInView } from "../../hooks/useInView";
import styles from "./Skills.module.css";

function SkillGroupBlock({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={inView ? "visible" : "hidden"}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={styles.group}
    >
      <h3 className={styles.groupTitle}>{group.title}</h3>
      <ChipList items={group.items} tone="muted" ariaLabel={group.title} />
      <p className={styles.note}>{group.note}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 · Skills" title="The stack, grouped the way I actually reach for it">
      <div className={styles.groups}>
        {skillGroups.map((group, index) => (
          <SkillGroupBlock group={group} index={index} key={group.title} />
        ))}
      </div>
    </Section>
  );
}
