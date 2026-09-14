import Section from "../Section/Section";
import ChipList from "../Chip/Chip";
import { skillGroups } from "../../data/resume";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 · Skills" title="The stack, grouped the way I actually reach for it">
      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ChipList items={group.items} tone="muted" />
          </div>
        ))}
      </div>
    </Section>
  );
}
