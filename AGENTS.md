# Agent Guide

This repository contains the public Astro site for the TUM course **Foundations and Application of Generative AI**.

## Architecture

- `src/content/site.ts` is the main source of truth for public content.
- `src/pages/` defines routes and page composition.
- `src/components/` contains reusable showcase UI.
- `src/styles/global.css` contains visual-system rules.
- `public/images/` contains approved/localized public assets.

## Invariants

- Preserve the showcase visual system and existing route structure.
- Public navigation is `Home`, `Curriculum`, `Insights`, `Projects`, `Team`, `Resources`.
- `/insights` is the canonical guest-insight route.
- `/lectures`, `/guest-lectures`, `/assessment`, `/faq`, and `/teaching-team` are compatibility redirects.
- External links should open in a new tab with `rel="noopener noreferrer"`.
- GitHub Pages deployment must work under `/tum-genai-course`.
- Source is committed to `main`; built output is served from `gh-pages`.

## Content Safety

- Do not publish private emails, Moodle files, assignments, internal operations, or unapproved student data.
- Use anonymous student feedback only, attributed by semester at most.
- Use verified staff, speaker, and portrait data only.
- If a person, project, or portrait is not verified, keep or add a placeholder instead of inventing details.

## Development Commands

```powershell
npm install
npm run dev
npm run build
```

Run `npm run build` before finalizing any change.

For deployment builds, set:

```powershell
$env:SITE_URL='https://chunyang-chen.github.io/tum-genai-course'
$env:BASE_PATH='/tum-genai-course'
```

## Commit Hygiene

Do not commit generated or local-only artifacts:

- `node_modules/`
- `dist/`
- `.astro/`
- `_evalshots/`
- `analysis-output/`
- `output-*.png`
- `stitch_tum_genai_course_showcase/`
- `.github/workflows/deploy.yml` unless the active GitHub token has `workflow` scope.

Keep changes scoped. Prefer editing `src/content/site.ts` for content-only updates and page/component files only when layout or behavior changes.
