# Resume versions

- Current revision: `2026-10-08-r3`.
- Editable content: `resume-2026-10-08-r3.json`.
- Finished PDF and preview: `../output/pdf/`.
- Website copy: `../public/files/RyanSeamanResume-2026-10-08-r3.pdf`.
- Prior resume: `../public/files/archive/RyanSeamanResume-archived-2026-10-08.pdf`.

The archive date is the date the earlier file was preserved, not an asserted date of authorship. The original `public/files/RyanSeamanResume.pdf` is also unchanged so older direct links continue to work. All current website links use `RESUME_URL` in `constants.ts`.

This revision uses the previous resume and CV, the confirmed summer annotation contribution, and current website records. The existing roles, dates, degree information, and contact details are retained. Revision 2 emphasizes documented teaching, mentoring, and admissions tour coordination, condenses technical skills, and keeps the first-author training paper as a single selected publication. The original October 8 PDF and content file remain available for comparison. A research-focused biotech version could restore the Kidney International paper, with Ryan named in the correct author order.

The layout is one US Letter page, white background, a single reading column, conventional headings, embedded Instrument Sans, and restrained terracotta accents. The PDF contains selectable text and clickable contact/publication links.

To rebuild, use Python with `fontTools` for `prepare_fonts.py`, then Python with `reportlab` for `build_resume.py`. Fonts are derived from the existing licensed source under `assets/fonts/`. The PDF builder writes only to `output/pdf`; visually review the result before copying it into `public/files` or updating the website link. Intermediate fonts and renders belong in `tmp/pdfs`.

Revision 3 removes the admissions/tour-guide entry and restores the full summary from the first October 8 revision. Research teaching and mentoring remain; earlier PDFs and source files are preserved.
