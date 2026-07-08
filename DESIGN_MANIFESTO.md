# Design Manifesto — Open Field

## The Anti-Card Philosophy

Runtime Studio is a technology consultancy: the work is measured, deliberate, and precise. The interface should feel the same way. The previous design language treated content as a collection of discrete, framed objects — cards. Cards are efficient, but they are also generic. They turn every idea into the same boxed unit and ask the reader to scan a grid instead of following a narrative.

**Open Field rejects the card.** Content is not placed inside boxes; it is arranged on a continuous compositional field. The page is an editorial canvas: full-bleed sections, asymmetric rows, ruled timelines, sticky scroll narratives, and typographic hierarchy carry the structure. The result is calmer, more confident, and more distinct.

## What replaces the card

### 1. Full-bleed sections

Each major act on the page is a full-width section. It touches the edges of the viewport. Its boundaries are expressed by rhythm and a hairline rule, not by a box. The `Section` primitive supports `bleed`, `border`, and `accent` top rules so every section reads as a deliberate compositional gesture.

### 2. Editorial rows

Instead of a grid of equal cards, content is laid out as an editorial row: a label, a body, and an optional aside. This asymmetry lets one item carry more weight than another. The `EditorialRow` primitive replaces the card grid for services, case studies, process steps, and any content that used to be a card.

### 3. Horizontal timelines and ledgers

Processes, milestones, and metadata are presented as ruled sequences. A `Timeline` runs vertically or horizontally with a single rule and small ticks. A `Ledger` presents facts as a ruled datasheet. The row is the unit; the rule is the structure.

### 4. Asymmetric grids

When a grid is needed, the columns are not equal. An `asymmetric-grid` might be 1fr / 0.65fr, or 0.45fr / 1fr. The imbalance creates visual tension and lets the dominant element breathe.

### 5. Floating and layered compositions

Elements can break the grid with negative offsets (`floating-*`) or occupy shared planes (`layer-stack`). This is used sparingly for hero moments and abstract visuals, not for everyday content. The field is the container; the elements are the content.

### 6. Sticky scroll narratives

Long-form explanations are told as a sticky narrative: a figure or statement stays pinned while the body scrolls beside it. This keeps the reader oriented without boxing the content. The `StickyNarrative` primitive is the anti-card way to present a detailed story.

### 7. Typographic treatments

Type carries the hierarchy. Display headings are large and tight. Section kickers are small, mono, and paired with a thin rule. Body copy is measured at a comfortable 68ch. The accent color is rationed: one weighted word in a headline, one status dot, one active rule.

### 8. Abstract visuals and generative fields

Decorative elements are not cards either. A `GenerativeBackground` is a live particle field sampled from the OKLCH tokens. A `Field` pattern is a drafting grid, dot field, or contour wash. These read as computational substrate, not ornament.

## The surface vocabulary

- **Full-bleed sections** — the primary container.
- **Hairline rules** — the primary separator.
- **Editorial rows** — the primary content unit.
- **Timelines and ledgers** — the primary sequence unit.
- **Panels** — used only for technical readouts, code, and data viz. A panel is a ruled drafting surface, not a card. It is never used to wrap editorial content.
- **Buttons, inputs, nav, and footer** — remain as functional chrome.
- **No `.card*` classes** — no `card`, `card-interactive`, `card-signal`, `heading-card`, or any card-named token. The legacy `--card` and `--card-foreground` tokens have been removed.

## Color and motion

The palette is still the OKLCH "computed light" system. `--signal-hue` rotates the brand accent; `--ink-hue` tints the neutrals. Dark mode is a true inversion, not an afterthought. Motion is one shared curve: confirm, then reveal. Entrances are decisive; interactions are springy but restrained.

## How to use the system

1. Reach for `Section` and `Container` first.
2. Put content in `EditorialRow`, `Ledger`, `Timeline`, or `StickyNarrative`.
3. Use `Heading` and `Text` for the typographic hierarchy.
4. Use `Badge` and `Label` for meta information — they are inline markers, not pills.
5. Use `Button` for actions.
6. Use `Panel` only for technical surfaces: data viz, code, readouts.
7. Never import a `Card` component. None exists in the new system.

## Migration notes for the integration subagent

- `src/components/ui/Card.tsx` has been deleted.
- `Card` is no longer exported from `src/components/ui/index.ts`.
- The CSS class `.heading-card` has been renamed to `.heading-block` in `globals.css`. Any component still using `heading-card` will fall back to browser defaults for that class and should be updated to `heading-block`.
- Any component using `className="card ..."` (e.g., `StepCard`, `WhyUsCard`, `TrustReasonCard`, `ServiceCard`, `TeamMemberCard`, `ArticleCard`) will lose the card styling but will still render. These should be refactored into `EditorialRow`, `Ledger`, `Timeline`, or plain ruled blocks.
- `CaseStudyCard` has already been migrated to an anti-card editorial link.
- The `Badge` component now renders as an inline marker with a leading dot. The previous boxed variants (`default`, `outline`, `spectral`) are still accepted but may look different.
- `InteractiveDataViz` now uses a ruled technical frame instead of a rounded panel.

## The point

The goal is not to be different for its own sake. The goal is to make the interface feel as intentional as the engineering work it describes. A card says "here is one of many items." An editorial row says "here is a thought, and here is why it matters." Open Field chooses the latter.
