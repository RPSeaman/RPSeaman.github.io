# Ryan Seaman’s personal website

A portfolio for collaborative research, biomedical informatics, and health technology. Built with React, TypeScript, Vite, and Tailwind’s base styles; deployed to GitHub Pages.

## Local development

Use Node 22 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

`npm run check` runs lint, TypeScript checks, regression tests, and the production build. `npm run preview` serves the built `dist` directory locally.

## Pages and content

- `/`: introduction, selected work, working style, background, publications, and contact.
- `/#/projects`: project collection with search and optional topic filters.
- `/#/projects/vitessce-annotations`: the annotation project story and contribution.
- `/#/projects/vitesscegen`: overview of ongoing thesis research.
- `/#/publications`: publication archive, including author lists, citations, and preprint labels.

Hash routing lets direct links and page reloads work on GitHub Pages without a server. Search and topic filters are stored in each archive’s URL. The primary Work, About, and Publications links consistently lead to homepage sections. “All projects” and “All publications” open their respective collections. Section links use an inner hash, for example `/#/#about`.

Project/publication records, education, and experience live in `constants.ts`. Project stories live in `pages/ProjectDetailPage.tsx`. Shared search and filtering live in `components/Archive.tsx`. The page header and footer are shared across routes.

Existing publication citations and external links have been retained. Vitessce Annotations is a manuscript in preparation; Ryan built the annotation system within the existing Vitessce framework, with supervision and guidance from Mark S. Keller and Nils Gehlenborg. VitessceGen is ongoing thesis research. New illustrations are conceptual, not research data or product screenshots.

## Visual identity

Production styles and design tokens live in `index.css`. The site uses warm paper, terracotta, and forest green; a single light appearance; and the original Open 03 monogram.

Instrument Sans is bundled locally, with `ss01`, `ss02`, and `ss03` enabled for headings and the wordmark. Body text uses the default letterforms; the alternate ampersand is disabled throughout. The font source and license are in `assets/fonts/`, and the distributed license is in `public/fonts/`. IBM Plex Mono is loaded from Google Fonts for labels, with a monospace fallback.

`components/ProjectArtwork.tsx` contains text-free, responsive SVG illustrations for all six projects. Source research images and earlier project logos remain in `public/images/`.

The `design/` directory preserves the earlier studies, design-system reference, decisions, and review screenshots. These are local working references, not production routes; Vite’s build entry is the root `index.html`.

## Deployment

The existing free deployment remains unchanged. Pull requests run checks. Pushes to `main` or `master` run checks and publish `dist` to the `gh-pages` branch using `.github/workflows/deploy.yml`. The Vite relative base and hash router are retained.

[Website](https://rpseaman.com) · [LinkedIn](https://linkedin.com/in/ryanpseaman) · [GitHub](https://github.com/RPSeaman)
