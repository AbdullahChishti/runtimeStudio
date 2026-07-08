# Runtime Studio — Visual Identity

## Concept: Paper · Carbon · Flux

Runtime Studio builds software that teams trust in production. The identity has
to make that promise legible before a word is read. It is modeled on a
**precision field manual** — a datasheet, a calibration log, a set of drafting
plans — not a brochure or a pitch deck.

Three materials carry the whole system:

- **Paper** — a warm, calibrated neutral. The page reads like quality drafting
  stock: quiet, dependable, humane. Deliberately warm, never the cold clinical
  white of a generic SaaS template.
- **Carbon** — a warm near-black for type and structure. Contrast is high and
  intentional. Hierarchy comes from **scale and weight**, not from color.
- **Flux** — a single live vermilion (`#dc3f10`). It is the _only_ saturated
  hue in the system, and it is rationed: calls to action, live status, the one
  word in a headline that matters. Because Flux is rare, it always means
  something.

The result is premium, minimal, technical, and confident — warm rather than
corporate-cold, and free of the traps that make engineering sites look generic.

## What this identity deliberately avoids

- **Generic consulting** — no corporate navy, no cobalt, no stock "gradient
  hero". The signal is a warm _vermilion_, not an institutional blue, and it is
  rationed to intent.
- **AI clichés** — no violet/cyan mesh, no glowing orbs, no faux-neural
  ornament. The only background texture is a structural drafting grid and one
  faint corner wash.
- **Excessive gradients** — gradients collapse to single-hue depth
  (`--gradient-accent` runs Flux → deep Flux). They read as near-solid accents
  on rules and one hero word, never as decorative color washes.
- **Heavy shadows** — elevation is expressed with **hairlines**. Shadow tokens
  exist but are warm-tinted and almost imperceptible (max 7% alpha).
- **Too many cards** — facts are presented as datasheet rows (`Field`) inside
  hairline-framed `Panel`s. `Card` exists as one restrained, mostly-clickable
  surface — not the default container.
- **Large rounded corners** — radii are architectural: `2 / 4 / 6px`.

## Color

| Role             | Token               | Value     |
| ---------------- | ------------------- | --------- |
| Paper            | `--background`      | `#f4f2ec` |
| Surface          | `--surface`         | `#faf9f5` |
| Carbon (ink)     | `--foreground`      | `#1a1712` |
| Muted ink        | `--muted`           | `#5c564b` |
| Hairline         | `--border`          | `#e3dfd4` |
| **Flux**         | `--accent`          | `#dc3f10` |
| Flux (pressed)   | `--accent-strong`   | `#b23009` |

The legacy classification tokens (`--accent-indigo`, `--accent-teal`,
`--accent-coral`, `--accent-violet`, `--accent-amber`) are retained for quiet
category coding and re-tuned into one cohesive, warm-forward spectrum. `coral`
sits in the Flux family; `indigo` is the single cool counterweight for
technical categories. Every token **name is preserved**, so all pages re-skin
without a refactor.

## Typography — Geist

- **Display + UI: Geist Sans.** Headlines are set tight (negative tracking
  `-0.025em` to `-0.035em`) at weight 600 for a dense, confident voice. The
  fluid scale runs from hero (`clamp(2.5rem → 4.75rem)`) down to a comfortable
  reading measure for long-form insights.
- **Technical voice: Geist Mono.** Every label, index number, status, and spec
  key is monospaced, uppercase, and letter-spaced (`0.16em`) with slashed
  zeros. This is what makes the site read as an _instrument_ rather than a
  landing page.

> Wiring note: Geist is loaded via `next/font` in `layout.tsx`
> (`GeistSans.variable` / `GeistMono.variable`). `globals.css` now binds
> `--font-sans` / `--font-mono` to the resulting `--font-geist-sans` /
> `--font-geist-mono` variables — previously these were unbound and the site
> silently fell back to system fonts.

## Space, radius, elevation

- **Spacing** is generous and rhythmic: section rhythm `--spacing-section:
  8.5rem` with `sm` / `xs` steps for denser zones, and `grid` / `grid-lg` gaps.
- **Radii**: `--radius-sm: 2px`, `--radius-md: 4px`, `--radius-lg: 6px`.
- **Elevation**: hairline borders first; the near-invisible, warm-tinted shadow
  scale is a last resort. `.panel-ticks` adds optional engineered corner marks.

## Motion language

Motion **confirms intent; it never performs.** One easing curve governs
everything — an expo-out `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`),
mirrored in `framer-motion` (`motion.ts`) so CSS and JS stay unified. Entrances
are short (120–380ms) and travel a small distance (≤16px). Interactive states
change color and a hairline ring / 2px lift, never a glow. Everything collapses
cleanly under `prefers-reduced-motion`.

## Tokens & primitives

- `src/app/globals.css` — the full token layer (color, type, space, radius,
  elevation, motion) plus every utility class the site consumes. Token **names
  are preserved** so all pages re-skin without refactors.
- `src/lib/metadata.ts` — brand voice and site-wide SEO metadata
  (`applicationName`, `keywords`, `authors`, `category`). URL/`basePath` logic
  is untouched so the GitHub Pages deployment stays correct.
- `src/components/ui/*` — refreshed primitives and one new surface:
  - **`Button`** — the single action primitive (carbon by default, Flux via the
    `accent` variant), now with `sm` / `md` / `lg` sizes. Crisp corners, no
    glow.
  - **`Card`** — a restrained, optionally interactive content surface (hairline
    frame, `4px` radius, hairline lift on hover, optional Flux top edge). Used
    sparingly; `Panel` and `Field` remain the defaults.
  - **`Panel`** — the static framed surface: hairline frame, optional corner
    ticks, no shadow.
  - **`Field` / `FieldList`** — datasheet rows (mono key + value) for facts
    without cards.
  - **`Badge`, `Section`, `Container`, `Divider`, `Label`, `Prose`** — carried
    forward; they consume the token contract and adopt the new identity
    automatically.

## Constraints preserved

Static export for GitHub Pages (`next.config.ts` / `next.config.js`),
`basePath` `/runtimeStudio`, `trailingSlash`, unoptimized images, the versioned
Pages workflow (`.github/workflows/deploy.yml`), all content in
`src/content/`, and the metadata URL logic are **untouched**. The redesign is
purely at the token, typography, and primitive layers.
