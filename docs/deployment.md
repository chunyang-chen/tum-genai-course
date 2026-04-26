# Deployment

This site is deployed as a static Astro project through GitHub Pages.

## Branch Workflow

Source lives on `main`. The built static site is published to `gh-pages`.

Use these commands from the repository root:

```powershell
$env:SITE_URL='https://chunyang-chen.github.io/tum-genai-course'
$env:BASE_PATH='/tum-genai-course'
npm run build
git subtree push --prefix dist origin gh-pages
```

If `gh-pages` does not exist yet, create it from `dist/`:

```powershell
git switch --orphan gh-pages
git rm -r --cached .
Copy-Item -Recurse -Force dist\* .
git add .
git commit -m "Deploy site"
git push -u origin gh-pages
git switch main
```

## GitHub Pages Settings

Use `Deploy from a branch` as the Pages source:

- branch: `gh-pages`
- folder: `/ (root)`

For this repository, the expected public URL is:

`https://chunyang-chen.github.io/tum-genai-course/`

## Base Path

Project Pages sites need a base path. Build with:

```text
SITE_URL=https://chunyang-chen.github.io/tum-genai-course
BASE_PATH=/tum-genai-course
```

Local builds without these environment variables use the fallback site URL in `astro.config.mjs`.

## Optional GitHub Actions

A GitHub Actions deployment can be added later if the GitHub token has the `workflow` scope. Until then, do not commit workflow files from this machine.

## Troubleshooting

- Broken CSS or images usually means `BASE_PATH` was missing or incorrect during `npm run build`.
- Failed `npm ci` usually means `package-lock.json` is out of sync with `package.json`.
- Failed Astro checks should be reproduced locally with `npm run build`.
- If Pages is not visible after publishing, confirm repository Pages settings use the `gh-pages` branch root.
