<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Single service: `runtime-studio`, a Next.js 16 (Turbopack) marketing/portfolio site. There is no backend/database — it's a fully static site (`next.config.ts` sets `output: "export"`).
- Standard commands live in `package.json` scripts: `npm run dev` (dev server on http://localhost:3000), `npm run lint` (ESLint flat config), `npm run build` (produces the static export in `out/`).
- Because of `output: "export"`, `npm run start` is not the primary way to run locally — use `npm run dev` for development. `npm run build` emits a static `out/` directory rather than serving.
- The contact form (`src/components/contact/ContactForm.tsx`) has no backend: submission is simulated client-side and always shows a "Message sent." success state. Do not expect network calls or persisted data.
- `build:pages` scripts set `NEXT_PUBLIC_BASE_PATH`/`NEXT_PUBLIC_SITE_URL` for GitHub Pages deploys; leave those unset for local dev so routes stay at the root path.
