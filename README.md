
# AgentCamp 2026 – Lagos Edition

Responsive website for **AgentCamp 2026 – Lagos Edition** happening **May 23, 2026** from **08:00 – 17:00 WAT**. Built with **React + Vite + TypeScript + Tailwind CSS**.

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Run locally
npm run dev

# 3) Build for production
npm run build
npm run preview
```

## Customize

- **Event details**: `index.html` JSON‑LD block & hero text.
- **Speakers**: `src/data/speakers.ts`
- **Sessions**: `src/data/sessions.ts`
- **Call for Speakers link**: `src/components/CtaBanner.tsx` → replace `https://example.com/call-for-speakers` with your form (Typeform/Microsoft Forms).

## Tech Stack

- React 18, React Router 6
- Vite 5, TypeScript 5
- Tailwind CSS 3

## Accessibility & SEO

- Semantic headings, focus styles, skip‑to‑content link
- OpenGraph/Twitter meta
- Schema.org **Event** JSON‑LD

## Deployment

Host on any static host (Azure Static Web Apps, GitHub Pages, Vercel, Netlify). Build output is in `dist/`.
