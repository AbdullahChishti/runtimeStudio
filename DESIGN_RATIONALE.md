# Runtime Studio — Visual Identity

## Concept: Ink · Substrate · Signal

Runtime Studio builds software that teams trust in production. The identity
makes that promise legible before a word is read. It is modeled on a
**precision instrument** — a datasheet, an oscilloscope, a set of drafting
plans — rather than a brochure.

Three materials carry the whole system:

- **Substrate** — a cool porcelain neutral. The page reads as calibrated
  drafting paper: quiet, dependable, never bright-white clinical.
- **Ink** — a near-black cool graphite for type and structure. Contrast is
  high and deliberate. Hierarchy comes from weight and scale, not color.
- **Signal** — a single electric cobalt. It is the only saturated hue in the
  system and is spent sparingly: calls to action, live status, the one word
  in a headline that matters. Because it is rare, it always means something.

The result is premium, minimal, technical, and confident — and it avoids the
traps that make software sites look generic.

## What this identity deliberately avoids

- **Generic consulting** — no corporate navy, no stock gradients-as-hero. The
  blue here is _electric_, not institutional, and it is rationed.
- **AI clichés** — no violet/cyan mesh, no glowing orbs, no faux-neural
  ornament. The one background texture is a structural drafting grid.
- **Stock photography** — the system is typographic and diagrammatic.
- **Excessive gradients** — gradients are collapsed to single-hue depth
  (`--gradient-accent` runs cobalt → deep cobalt). They read as near-solid
  accents on rules and underlines, never as decorative color washes.
- **Heavy shadows** — elevation is expressed with **hairlines**. Shadow tokens
  exist but are almost imperceptible (max 7% alpha).
- **Too many cards** — surfaces are framed with 1px borders (`Panel`) and
  facts are presented as datasheet rows (`Field`) instead of nested cards.
- **Large rounded corners** — radii are architectural: `0 / 2px / 3px`.

## Color

| Role | Token | Value |
| --- | --- | --- |
| Substrate | `--background` | `#f3f4f6` |
| Surface | `--surface` | `#ffffff` |
| Ink | `--foreground` | `#0d1014` |
| Muted ink | `--muted` | `#565d67` |
| Hairline | `--border` | `#dfe2e7` |
| **Signal** | `--accent` | `#1e3fe0` |
| Signal (pressed) | `--accent-strong` | `#1730ac` |

The legacy classification tokens (`--accent-teal`, `--accent-coral`,
`--accent-violet`, `--accent-amber`) are retained for category coding and
re-tuned into one cohesive, mostly-cool spectrum so existing components keep
working while the palette stays unified. `--accent-indigo` is mapped to the
signal itself.

## Typography

- **Display + UI: Inter Tight** — a tight, modern grotesque. Headlines are set
  at negative tracking (`-0.03em` to `-0.04em`) and weight 600 for a dense,
  confident voice.
- **Technical voice: JetBrains Mono** — every label, index number, status, and
  spec key is monospaced and letter-spaced (`0.2em`, uppercase). This is what
  makes the site read as an instrument rather than a pitch deck.

Type scale is fluid (`clamp()`) from hero (`~2.75–5.25rem`) down to a 68ch
reading measure for long-form insights (`Prose`).

## Space, radius, elevation

- **Spacing** is generous and rhythmic: section rhythm `--spacing-section:
  9rem` with `sm`/`xs` steps for denser zones.
- **Radii**: `--radius-sm: 0`, `--radius-md: 2px`, `--radius-lg: 3px`.
- **Elevation**: hairline borders first; the near-invisible shadow scale is a
  last resort. `.panel-ticks` adds optional engineered corner marks.

## Motion language

Motion **confirms intent; it never performs.** One easing curve governs
everything — an expo-out `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`),
mirrored in `framer-motion` (`motion.ts`) so CSS and JS stay unified. Entrances
are short (140–420ms) and travel a small distance (≤16px). Interactive states
transition color and a hairline ring, not glows. Everything collapses cleanly
under `prefers-reduced-motion`.

## Tokens & primitives

- `src/app/globals.css` — the full token layer (color, type, space, radius,
  elevation, motion) plus the utility classes the site already consumes. Token
  **names are preserved** so all 21 pages re-skin without refactors.
- `src/components/ui/*` — refined primitives (`Button`, `Badge`, `Label`,
  `Section`, `Container`, `Divider`) and new ones:
  - **`Panel`** — the single surface primitive: hairline frame, optional
    corner ticks, no shadow, no rounding.
  - **`Field` / `FieldList`** — datasheet rows (mono key + value) for
    presenting facts without cards.
  - **`Prose`** — long-form reading measure tuned to the type scale, with the
    signal reserved for links only.

## Constraints preserved

Static export for GitHub Pages, `basePath` `/runtimeStudio`, all 21 pages,
content in `src/content/`, and the Pages workflow are untouched. The redesign
is purely at the token, typography, and primitive layers.
