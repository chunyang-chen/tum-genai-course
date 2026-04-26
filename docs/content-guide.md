# Content Guide

Most public content is maintained in `src/content/site.ts`.

## Course Metadata

Edit `siteMeta` for the course name, course code, semester label, TUMOnline URL, Moodle URL, institution links, language, and SEO description.

## Semesters

Edit `semesters` to add or update semester labels, visibility, highlights, and featured content IDs.

For Team and Insights tabs, update `teamAndInsightsSemesterIds` when a semester should appear in newest-first tab order.

## Guest Insights

Edit `guestLectureArchive`.

Each entry needs:

- `id`: stable lowercase ID.
- `semesterId`: matching a semester ID.
- `speaker`, `affiliation`, `topic`, `summary`, `whyItMatters`, `initials`.
- Optional `imageSrc` only when a stable public or approved portrait is available.

Keep summaries public-safe and profile-oriented. Do not publish private email addresses.

## Team

Edit `lecturerProfile` for the lead instructor block.

Edit `tutorArchive` only when a public semester-specific staff roster is confirmed. If a tutor or semester cannot be verified publicly, leave the placeholder behavior in place.

## Projects

Edit `projectArchive`.

The public Projects page shows one unified gallery. `semesterId` is still kept for archive maintenance and ordering, but the UI does not split the gallery by semester.

Use `isPlaceholder: true` only for deliberate future-project slots. Do not invent student projects.

## Student Feedback

Edit `homeFeedbackQuotes`.

Rules:

- Use anonymous EvaSys excerpts only.
- Keep the original language.
- Show only semester attribution.
- Do not include names, programs, emails, or identifying details.

The feedback component groups quotes into rotating pages of three.

## FAQ

Edit `faqSummary`.

The current FAQ structure covers:

- slides and weekly files
- project workflow
- assessment
- current logistics

Keep operational details aligned with the official TUM course page and Moodle.

## Media

Use `public/images/guest-speakers/` and `public/images/team/` for localized portraits.

Only add portraits when they are public, official, or approved for use. If a portrait is not available, omit `imageSrc` so the site shows an initials/avatar fallback.
