# The Latent Field

### A next-gen, AI-native visual language for Runtime Studio

> Most "AI" websites look the same: a dark canvas, a violet-to-cyan
> gradient blob, a glowing orb, a neural-network line drawing, and a
> monospace headline promising "the future." That is a template. It
> signals *AI* the way clip-art signals *business*.
>
> **The Latent Field** rejects the costume. It treats the interface as
> what an AI-native product actually is — a **living computational
> substrate** — and lets that idea generate the aesthetic instead of
> illustrating it.

---

## 1. The thesis

An AI-native brand should not *depict* computation with mascots and
sci-fi tropes. It should *behave* computationally. So the identity is
not a fixed set of assets — it is a small set of **axes and functions**
from which every color, size, rhythm, and motion is *derived at runtime*.

Three principles govern everything:

| Principle | Meaning | Where it lives |
|---|---|---|
| **Computed Light** | Color is a function, not a swatch. Everything is expressed in OKLCH and sampled from a few axes. | `globals.css` `:root` axes |
| **Adaptive Structure** | Type and space are fluid scales; the whole system re-renders itself for light or dark substrates. | fluid `--step-*` / `--space-*`, `prefers-color-scheme` |
| **Emergent Motion** | Interfaces confirm, then *reveal*. Springs and generative fields, one decisive curve. | motion tokens, `GenerativeBackground` |

---

## 2. Color — a generative function, not a palette

Traditional brand systems ship a handful of hex values. We ship a
**generative color engine** built on three CSS custom-property axes:

```css
--signal-hue: 24;        /* rotate this and the whole accent re-tunes */
--signal-chroma: 0.205;
--ink-hue: 268;          /* the faint spectral cast in every neutral */
```

Every color in the system is computed from these axes in **OKLCH** —
a *perceptual* color space where lightness is uniform and hue rotation
doesn't shift perceived brightness. Two consequences:

1. **The brand color is a variable, not a constant.** Rotating
   `--signal-hue` re-tunes CTAs, focus rings, status, and hero accents
   *in perceptual lockstep*. A section, a route, or a data state can own
   its own hue without anyone re-picking a palette. This is the
   "data-driven aesthetics" idea made literal: **the accent can be
   driven by data.**

2. **Dark mode is free and correct.** Because colors are derived from
   lightness axes, the dark substrate is the same system with inverted
   L values — not a hand-maintained second theme.

### The spectral ring

For anything categorical — charts, tags, category coding, the
`GenerativeBackground` — we sample a **perceptually even six-stop ring**
around the OKLCH wheel (`--spectral-1 … --spectral-6`). Because the stops
are equal-lightness, a bar chart made from them reads as *one family*,
never as a random assortment. Data becomes texture.

### Why this defies the cliché

- No violet→cyan "AI gradient." The signal hue is a warm, high-chroma
  **flux** by default (an ember, not a laser).
- No neon-on-black. The default substrate is a **cool computed vellum**
  with a faint spectral cast; dark mode is a graphite substrate, not
  pure black.
- Color is **rationed**. The saturated signal appears on intent (CTAs,
  live status, one hero word). Because it's rare, it means something.

---

## 3. Typography — an adaptive scale, not a breakpoint ladder

Type is set on a **fluid modular scale** (`--step--2 … --step-8`) built
from `clamp()`. Sizes interpolate continuously with the viewport, so
there is no jarring jump at `md:` or `lg:` — the hierarchy *breathes*.

- **Voice:** Geist (grotesque display + text) with **Geist Mono** as the
  technical register — used for labels, readouts, and tabular numerals
  (`.data-readout`, `font-variant-numeric: tabular-nums`). The monospace
  isn't decoration; it's the system speaking in its native, measured
  tongue.
- **Optical tightening:** display sizes carry negative tracking and
  near-1.0 line-height; body stays open at 1.7 for long-form trust.
- **`text-wrap: balance` / `pretty`** keep headlines and paragraphs
  optically even without manual line breaks.

Advanced usage: `.text-gradient-spectral` clips the animated spectral
ring into headline glyphs for a single, rare "generative" moment — a
controlled defiance, not a default.

---

## 4. Space — a dynamic, fluid rhythm

Spacing is a **fluid scale** (`--space-3xs … --space-3xl`), also
`clamp()`-based. Section rhythm and container gutters sample from it, so
**density adapts to the device** instead of snapping between fixed
paddings. A phone gets a tighter, purposeful rhythm; a wide display gets
room to breathe — from the *same tokens*.

The `Container` measure is deliberately conservative (`max-w-*` +
fluid gutters) so line length stays readable while the field layers
behind it can go full-bleed (`bleed`).

---

## 5. Structure — drawn by algorithm, not chrome

Depth and interest come from **algorithmic fields**, never from drop
shadows, glassmorphism, or card soup:

- `.field-lattice` — an adaptive drafting grid whose cell size tracks the
  viewport, masked to fade at the edges.
- `.field-dots` — the "sampled points" motif.
- `.field-contour` — faint isolines: the trace of a scalar field.
- `.field-noise` — an almost-imperceptible fractal-noise film (pure SVG
  data-URI) so large fills read as *lit surfaces*, not flat paint.

Surfaces are framed with **hairlines and corner ticks** (`.panel-ticks`,
`.spectral-edge`) — an engineered, instrument-panel detail language.

### `GenerativeBackground`

A dependency-free `<canvas>` that advects particles through a smooth
pseudo–flow field (layered trigonometric noise), leaving hairline traces
that reveal the *shape of a field*. It is the manifesto in one component:

- **Self-adapting:** it samples its colors straight from the CSS tokens,
  so it follows light/dark and any `--signal-hue` rotation with zero
  configuration.
- **Responsible:** it pauses off-screen (IntersectionObserver) and when
  the tab is hidden, caps DPR, and renders a **single static frame**
  under `prefers-reduced-motion`.
- **Structural, not loud:** ink hairlines by default, with only a small
  `accentRatio` of live-hue particles.

---

## 6. Motion — confirm, then reveal

One expressive **expo-out** curve (`--ease-out`) governs entrances:
short travel, quick settle. Interaction adds a **spring** token
(`--ease-spring`) for emergent, physical feedback. Motion changes color
and a hairline ring — never a bloom.

- Entrances are decisive and small (mirrored in `motion.ts` for
  framer-motion so CSS and JS stay unified).
- Generative layers use a slow `--duration-drift` cycle.
- **Every motion has a reduced-motion path.** Nothing is load-bearing on
  animation.

---

## 7. Data as a first-class aesthetic

`InteractiveDataViz` treats a chart as an expression of the language, not
a bolted-on widget:

- The series is **generated algorithmically** (a seeded, deterministic
  mean-reverting walk) so it renders identically on server and client for
  static export — no hydration drift.
- The palette is **the spectral ring**, so the chart is visually part of
  the system.
- It is **interactive** (pointer/keyboard reveals a live readout) and
  **accessible** (the series is exposed as text; motion respects
  preferences).

This is "data-driven aesthetics" as a component: the data literally
draws the picture, in the brand's own colors.

---

## 8. How this defies existing templates

| The template says… | The Latent Field does… |
|---|---|
| Pick 1 brand color. | Derive color from rotatable OKLCH axes. |
| Ship light + dark as two themes. | Derive both from one lightness axis. |
| AI = dark mode + violet gradient + orbs. | AI = a computed substrate + algorithmic fields. |
| Fixed type sizes per breakpoint. | Continuous fluid `clamp()` scales. |
| Depth = shadows and glass. | Depth = hairlines, fields, and noise. |
| Charts are third-party widgets. | Charts are generated in the system's own palette. |
| Motion is decoration. | Motion confirms intent, always with a reduced path. |

---

## 9. Engineering guarantees

The new identity is a **superset**, not a rewrite of the contract:

- **Every previous token name and utility class is preserved** and
  remapped onto the new spectral engine, so all existing components adopt
  the identity with no code changes.
- **Deployment is untouched:** GitHub Pages config (`next.config.ts`
  `output: "export"`, `basePath` `/runtimeStudio`, `assetPrefix`,
  `trailingSlash`) and `.github/workflows/deploy.yml` are unchanged;
  metadata continues to honor `NEXT_PUBLIC_BASE_PATH`.
- **Accessibility & performance:** OKLCH substrate contrast is tuned for
  legibility; all generative/animated layers honor
  `prefers-reduced-motion` and pause when not visible.

---

### The one-line version

> **The brand isn't a color. It's a function — and the interface is the
> field it renders.**
