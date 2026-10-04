import styles from "./Logo.module.css";

/**
 * The <sp/> wordmark, from the supplied vector logo files (sp-mark-*.svg).
 * Inlined so it stays crisp at any size and needs no request.
 *
 * Two colours: the brackets and slash take --logo-blue, the "sp" takes
 * --logo-ink. Both are theme tokens whose light and dark values are the
 * ones in the logo files, so the mark re-colours with the toggle.
 *
 * Path coordinates are in the file's own glyph space (baseline at y = 0,
 * so most of the mark is negative). The viewBox is the mark's bounds
 * (x 85-2635, y -760-200) plus 24 units of air on every side: with the
 * bounds flush to the edges, the anti-aliasing on the slash tip, the p's
 * descender and the bracket points got clipped into hard, jagged cuts.
 */
const BRACKET_LEFT = "M85 -253V-357L515 -598V-492L184 -309V-301L515 -119V-12Z";
const BRACKET_RIGHT = "M2205 -118 2536 -301V-309L2205 -491V-598L2635 -357V-253L2205 -12Z";
const SLASH = "M1673 138 2010 -760H2107L1770 138Z";

const LETTER_S =
  "M824 12Q738 12 674.5 -14Q611 -40 579 -85L662 -162Q692 -129 732.5 -110.5Q773 -92 825 -92Q869 -92 894 -105.5Q919 -119 919 -147Q919 -169 902 -177.5Q885 -186 855 -191L772 -204Q737 -209 707 -219.5Q677 -230 655 -248Q633 -266 620 -292Q607 -318 607 -355Q607 -436 669 -482Q731 -528 843 -528Q919 -528 972.5 -507.5Q1026 -487 1058 -449L984 -365Q961 -390 925 -407Q889 -424 838 -424Q752 -424 752 -372Q752 -349 769 -340.5Q786 -332 816 -327L898 -314Q933 -309 963 -298.5Q993 -288 1015.5 -270Q1038 -252 1051 -226Q1064 -200 1064 -163Q1064 -82 1001.5 -35Q939 12 824 12Z";

const LETTER_P =
  "M1119 -516H1267V-422H1274Q1293 -468 1329 -498Q1365 -528 1427 -528Q1470 -528 1505.5 -512Q1541 -496 1566.5 -463Q1592 -430 1606.5 -379Q1621 -328 1621 -258Q1621 -188 1606.5 -137Q1592 -86 1566.5 -53Q1541 -20 1505.5 -4Q1470 12 1427 12Q1365 12 1329 -17.5Q1293 -47 1274 -94H1267V200H1119ZM1363 -103Q1413 -103 1440 -133.5Q1467 -164 1467 -218V-298Q1467 -352 1440 -382.5Q1413 -413 1363 -413Q1324 -413 1295.5 -394Q1267 -375 1267 -334V-182Q1267 -141 1295.5 -122Q1324 -103 1363 -103Z";

interface LogoProps {
  /** Rendered height in px; the width follows the mark's aspect ratio. */
  height?: number;
  className?: string;
}

export default function Logo({ height = 28, className = "" }: LogoProps) {
  return (
    <svg
      className={`${styles.logo} ${className}`.trim()}
      viewBox="61 -784 2598 1008"
      height={height}
      aria-hidden="true"
      focusable="false"
    >
      <path className={styles.blue} d={BRACKET_LEFT} />
      <path className={styles.ink} d={LETTER_S} />
      <path className={styles.ink} d={LETTER_P} />
      <path className={styles.blue} d={SLASH} />
      <path className={styles.blue} d={BRACKET_RIGHT} />
    </svg>
  );
}
