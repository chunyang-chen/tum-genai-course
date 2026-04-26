# TUM Generative AI Course Website

Public Astro website for **Foundations and Application of Generative AI (CITHN2014)** at the Technical University of Munich.

Live site: https://chunyang-chen.github.io/tum-genai-course/

## Local Development

```powershell
npm install
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`.

For a production-style check:

```powershell
npm run build
npm run preview
```

## Project Structure

- `src/content/site.ts`: main content source for metadata, semesters, insights, projects, team, FAQ, feedback, resources, and shared media.
- `src/pages/`: route-level page composition.
- `src/components/`: reusable showcase components.
- `src/styles/global.css`: theme tokens, layout helpers, and shared visual rules.
- `public/images/`: localized portraits and public media assets.
- `docs/deployment.md`: GitHub Pages deployment notes.

## Common Edits

- Course title, code, links, semester text: edit `siteMeta` in `src/content/site.ts`.
- Navigation labels and routes: edit `navigation` in `src/content/site.ts`.
- Guest insights: edit `guestLectureArchive` in `src/content/site.ts`.
- Team and tutor cards: edit `lecturerProfile` and `tutorArchive`.
- Project gallery: edit `projectArchive`.
- Homepage feedback: edit `homeFeedback` and `homeFeedbackQuotes`.
- FAQ: edit `faqSummary`.
- Resources page links and access text: edit `resourceLinks`, `resourcesAccessLogic`, and `resourceBanner`.

## Deployment

The repository keeps source on `main` and serves the built static site from the `gh-pages` branch.

Build with the project Pages environment:

```powershell
$env:SITE_URL='https://chunyang-chen.github.io/tum-genai-course'
$env:BASE_PATH='/tum-genai-course'
npm run build
```

Then publish the contents of `dist/` to the `gh-pages` branch. See `docs/deployment.md` for the full workflow.

## Before Committing

Run:

```powershell
npm run build
```

Do not commit generated folders or local evaluation artifacts such as `node_modules/`, `dist/`, `.astro/`, `_evalshots/`, `analysis-output/`, `output-*.png`, or the stitched design reference folder.
