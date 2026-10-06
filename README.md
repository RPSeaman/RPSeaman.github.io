# Ryan Seaman Personal Website

<div align="center">

![Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)

### 🌐 [Visit Website](https://rpseaman.com)

A modern, high-performance portfolio website showcasing biomedical informatics expertise and projects.

</div>

---

## Key Features & Highlights

- **React 19 Integration:**
  - **Native Document Metadata Hoisting:** Dynamic page title and description tags declared within component JSX, eliminating imperative side-effects.
  - **Fluid Search Transitions:** Implemented React 19 `useTransition` to run list searches and category tag filtering in the background, keeping text input typing perfectly responsive.
  - **Resource Preloading:** Hoisted preloading `<link>` tags inline to fetch heavy assets (LCP profile photo and featured publication graphics) early.
- **Client-side routing:** Hash-based home, publications, and projects routes compatible with GitHub Pages.
- **Premium Glassmorphism Design:** Dark, modern theme styled with custom gradients, ambient background glows, interactive 3D card tilt springs, and robust, high-legibility fallbacks optimized for Firefox.

---

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling framework
- **Vite** - Build tool and dev server
- **Framer Motion** - 3D spring animations and gestures
- **Lucide React** - Icon library

---

## Run Locally

### Prerequisites
- Node.js 22.13+ recommended (`.nvmrc` and CI use Node 22; see `package.json` for supported versions)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RPSeaman/RPSeaman.github.io.git
   cd RPSeaman.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Maintenance

- `npm run lint` — ESLint checks for TypeScript and React Hooks.
- `npm run typecheck` — strict TypeScript checking without emitting files.
- `npm test` — regression tests for search, tag filtering, and resetting filters on both listing pages.
- `npm run test:watch` — rerun tests during development.
- `npm run check` — run lint, type checking, tests, and the production build.
- `npm run build` — type-check and build the site into `dist`.

Content lives in `constants.ts`, with interfaces in `types.ts`. Shared page chrome and backgrounds live in `components/PageLayout.tsx`; card entrance and tilt behavior lives in `components/AnimatedSection.tsx`. Author formatting is shared through `components/AuthorList.tsx`, and tag colors and project statuses through `utils/projectPresentation.ts`. Theme tokens and global styles live in `index.css`.

## Deployment

This site is deployed on **GitHub Pages** and accessible at [rpseaman.com](https://rpseaman.com). Pull requests run lint, type checking, tests, and a production build. Pushes to `main` or `master` run the same checks before publishing `dist` to the `gh-pages` branch via GitHub Actions.

---

## Contact

Feel free to reach out:
- 📧 Email: [ryan.patrick.seaman@gmail.com](mailto:ryan.patrick.seaman@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/ryanpseaman](https://linkedin.com/in/ryanpseaman)
- 🐙 GitHub: [github.com/RPSeaman](https://github.com/RPSeaman)
- 📸 Instagram: [@ryanpseaman](https://instagram.com/ryanpseaman)

---

<div align="center">

Made with ❤️ by Ryan Seaman

</div>
