import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import Button from "../../components/Button/Button";
import ChipList from "../../components/Chip/Chip";
import Stat from "../../components/Stat/Stat";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import Section from "../../components/Section/Section";
import Icon from "../../components/Icon/Icon";
import { componentDemos } from "./componentDemos";
import styles from "./Components.module.css";

// What each demo's editable code can reference.
const scope = { Button, Chip: ChipList, Stat, ThemeToggle, Section, Icon };

export default function ComponentsPage() {
  return (
    <main id="main" className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Component library</p>
        <h1>The pieces this site is built from</h1>
        <p className={styles.lede}>
          Every reusable component on the portfolio, live. Edit the code under any preview —
          it re-renders instantly against the real component, not a screenshot of one.
        </p>
      </header>

      <div className={styles.list}>
        {componentDemos.map((demo) => (
          <article className={styles.row} id={demo.id} key={demo.id}>
            <div className={styles.info}>
              <h2>{demo.name}</h2>
              <p className={styles.summary}>{demo.summary}</p>

              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>Used in</p>
                <ul className={styles.usedIn}>
                  {demo.usedIn.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>Props</p>
                <ul className={styles.propsList}>
                  {demo.props.map((prop) => (
                    <li key={prop.name}>
                      <code className={styles.propName}>{prop.name}</code>
                      <code className={styles.propType}>{prop.type}</code>
                      {prop.note ? <span className={styles.propNote}>{prop.note}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.demo}>
              <LiveProvider code={demo.code} scope={scope} theme={themes.oneDark} noInline={demo.noInline}>
                <div className={styles.previewPanel}>
                  <LivePreview />
                </div>
                <p className={styles.editorLabel}>Edit this</p>
                <div className={styles.editorPanel}>
                  <LiveEditor />
                </div>
                <LiveError className={styles.liveError} />
              </LiveProvider>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
