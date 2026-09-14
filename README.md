# Sanket Pande — Portfolio

React + TypeScript + Vite, styled with CSS Modules. "Control Plane" direction: a
console-styled hero with an ambient blue glow/grid, and a light/dark toggle that
re-themes every token in the page, not just the background.

## Structure

```
src/
  components/            reusable pieces — each in its own folder with its .tsx and .module.css
    Header/               site nav + résumé link + theme toggle
    Footer/
    Hero/                 landing section — headline, stats, core stack
    About/
    Experience/           the timeline
    Skills/
    Contact/
    ThemeToggle/
    Chip/                 shared tag-pill list, used by Hero and Skills
    Section/              shared section chrome (eyebrow + heading), used by About/Experience/Skills
  pages/
    Home/                 composes Hero → About → Experience → Skills → Contact
  data/resume.ts          typed content — profile, stats, experience, skills (edit this to update copy)
  hooks/useTheme.ts        light/dark state, persisted to localStorage
  styles/global.css        design tokens (light + dark), reset, base typography — the only global stylesheet
public/
  Sanket-Pande-Resume.pdf   served at /Sanket-Pande-Resume.pdf, linked from the header
```

Every component's styles are scoped to it via CSS Modules (`Component.module.css`,
imported as `styles` and applied as `styles.thing`) — nothing leaks between components
except the design tokens in `global.css`, which every module reads from via `var(--token)`.

## Run it

```
npm install
npm run dev       # local dev server
npm run build     # type-checks with tsc, then builds to dist/
npm run preview   # serve the production build locally
```

## Editing content

Everything text-based — the headline, stats, experience bullets, skills, contact links —
lives in `src/data/resume.ts` as typed data, not scattered through the components. Update
it there and every section that uses it updates automatically.

## Deploying

`npm run build` produces a static `dist/` folder — drop it on Vercel, Netlify, GitHub
Pages, or any static host. No server-side code involved.
