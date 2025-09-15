React Lorem Ipsum (React 19 + Vite)

Overview
- Upgraded to React 19 and Vite for fast dev/build.
- Removed auto-copy behavior; added explicit Copy button.
- Removed unused dependencies (CRA, testing libs, toast, copy util).
- Refreshed UI with a clean, responsive layout.

Getting started
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

Notes
- Copy uses `navigator.clipboard` with a fallback; enable HTTPS or use `localhost`.
- Vite serves static assets from `public/` if needed.
