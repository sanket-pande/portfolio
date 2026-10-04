# CLAUDE.md

React + TypeScript + Vite portfolio, styled with CSS Modules. See README.md for structure.

## Workflow

- Never commit or push unless explicitly asked. Every push to `master` deploys to production (Firebase Hosting).
- Before finishing a change, run `npm run lint` and `npm run build` (`tsc -b` type errors fail the build and CI).
- Generated notes, summaries and screenshots go in `claude/` (gitignored), never in the repo tree.

## Code

- Styles: one `Component.module.css` per component, imported as `styles`. `src/styles/global.css` is the only global stylesheet.
- Colors, fonts and sizes come from tokens in `global.css` via `var(--token)`. A new token must be defined for both light and dark themes.
- Site copy lives in `src/data/resume.ts`, not in components.
- Home sections live in `src/pages/Home/sections/<Name>/` and open with the shared `Section` component. Shared pieces go in `src/components/<Name>/`.

## Components page (`/components`)

- Lazy-loaded so `react-live` stays out of the main bundle. Don't import `react-live` anywhere else.
- Demos are data: add or edit an entry in `src/pages/Components/componentDemos.ts`, and register the component in `scope` in `Components.tsx`.
- Demo code uses inline styles with `var(--token)`. If it needs state or a helper function, set `noInline: true` and end with `render(<Demo />)`.
- When a component's props, usage or icon set change, update its demo entry (`props`, `usedIn`, code) in the same change.
