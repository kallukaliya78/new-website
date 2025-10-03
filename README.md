# ANMC — Kerala State Level Championship (Vite + React + Tailwind)

## Quick start (local)
1. `npm install`
2. `npm run dev`  (visit http://localhost:5173)

## Build
`npm run build` — output in `dist/`

## Deploy to Vercel
1. Push repo to GitHub.
2. On Vercel, choose "Import Project" → Connect GitHub repo.
3. Set Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy.

Vercel auto-detects Vite, but setting the build/output above is safe.

Replace images in `public/images/` and update placeholder links (`123.xyz`, `xyz.com`, `example.com`) in `src/App.jsx`.
