# Runtime Studio — UI/UX Improvement Plan

Verified by Opus 4.8 against the codebase on 2026-07-08. Five critique subagents produced **45 raw critiques**. After deduplication and source verification (spot-checking every cited file), **37 are VALID** and **8 are REJECTED** as false positives or non-issues.

- Total raw critiques: **45**
- Verified valid (deduped to 31 unique items): **37**
- Rejected: **8**

Owner legend: **Design System** (`globals.css`, `ui/*`), **Home** (`components/home/*`), **Interior** (`app/**/page.tsx` detail/list pages), **Forms** (`contact/*`), **A11y** (cross-cutting accessibility).

---

## 1. Verified Master Critique List (deduplicated)

### VALID — Critical

| # | Item | Severity | File(s) | Verified fix | Owner |
|---|------|----------|---------|--------------|-------|
| C1 | **Mobile menu focus management** — menu has no focus trap and does not restore focus to the toggle on close. Confirmed: `Nav.tsx` renders a plain `div` overlay with no `useRef`/focus handling. | CRITICAL | `src/components/layout/Nav.tsx` | Trap focus within `#mobile-menu` while open, close on `Escape`, and return focus to the toggle button on close (via `useRef`). | A11y |

### VALID — Major

| # | Item | Severity | File(s) | Verified fix | Owner |
|---|------|----------|---------|--------------|-------|
| M1 | **Insufficient muted-text contrast** — `--muted-light: #9a9a9a` on `--background: #fafaf8` ≈ **2.4:1**, fails WCAG AA (4.5:1). Used in footer copyright, trust clients, input placeholders. | MAJOR | `src/app/globals.css` (L8) | Darken `--muted-light` to ≥ `#767676`. Reserve current tone for non-text/decorative only. (`--muted #6b6b6b` ≈ 5:1 already passes.) | Design System |
| M2 | **Sub-minimum font sizes** — `text-[10px]`/`text-[11px]` used pervasively for labels, badges, metric labels, footer version, and the `RS` nav monogram (only glyph shown on mobile). | MAJOR | `ui/Badge.tsx` (L52, L83), `layout/Nav.tsx` (L58), `layout/Footer.tsx` (L110,114), `home/FeaturedWork.tsx`, `app/work/page.tsx` (L159), `contact/ContactForm.tsx` (L59,88) | Establish a **11px floor is exception-only**; raise structural labels to `text-xs` (12px). Centralize a `.label-mono` utility so it's fixed once. Bump `RS` monogram to ≥12px. | Design System |
| M3 | **Form feedback not announced / no pending state** — `handleSubmit` flips to success synchronously; success block has no `aria-live`, and the submit button has no loading state. | MAJOR | `src/components/contact/ContactForm.tsx` (L80-99, L201) | Wrap success container in `aria-live="polite"` (or move focus to it). Add a `pending` state + disabled/"Sending…" button (add `disabled`/loading support to `Button`). | Forms |
| M4 | **Contact form friction & overlapping questions** — "What are you building?" and "How can we help?" overlap; 4 required fields + 2 selects create early-lead drop-off. | MAJOR | `src/components/contact/ContactForm.tsx` (L144-166) | Merge the two textareas into one "Tell us about your project" field, or differentiate prompts. Keep only Name/Email/Message required; company/budget/timing optional. | Forms |
| M5 | **Generic social proof** — trust row lists categories ("Series A startups", "Scaleups") not named clients/logos; weakens senior-expertise claim. (Note: real testimonials DO exist on case-study pages.) | MAJOR | `src/content/company.ts` (L10-18), `home/Hero.tsx` `TrustSection` | Replace generic strings with real client names/logos (or a logo wall). Surface one case-study testimonial on the home page. | Home |
| M6 | **Color palette dilution** — five full accent families (indigo/coral/teal/violet/amber) each with muted/subtle/border/wash tokens, applied without a clear primary hierarchy; risks "UI-kit" feel over bespoke brand. | MAJOR | `src/app/globals.css` (L18-47), `home/accents.ts` | Designate indigo as primary; demote others to *semantic* per-discipline use only. Document the rule so future sections don't add rainbow accents. | Design System |
| M7 | **No inline CTA in mid-page conviction sections** — `HowWeWork` and `WhyRuntimeStudio` have no CTA; users must scroll to nav/FinalCTA after being convinced. (Downgraded from the subagent's "CRITICAL" — a global nav CTA + FinalCTA exist.) | MAJOR | `src/components/home/HowWeWork.tsx` | Add a single "Start a project" link after the "Improve" step / after WhyUs list. | Home |

### VALID — Minor (polish)

| # | Item | Severity | File(s) | Verified fix | Owner |
|---|------|----------|---------|--------------|-------|
| P1 | Touch target below 44px — mobile menu toggle is `h-10 w-10` (40px). | MINOR | `layout/Nav.tsx` (L93) | `h-11 w-11` (44px). | A11y |
| P2 | Inconsistent card language — `ServicesOverview` uses `gap-px` bordered grid + left-accent border + `-translate-y-0.5`; `FeaturedWork` uses `gap-8` full-border + `-translate-y-1`. | MINOR | `home/ServicesOverview.tsx` (L21-28), `home/FeaturedWork.tsx` (L24-34) | Unify hover distance + border treatment across home cards. | Home |
| P3 | Weak service-card affordance — `-translate-y-0.5` hover is barely perceptible for a full-card link. | MINOR | `home/ServicesOverview.tsx` (L28) | Increase lift + add clearer bg/border shift. | Home |
| P4 | Inconsistent primary-CTA labels — "Start a project" / "Start a conversation" / "Get in touch" / "View full details". | MINOR | `layout/Nav.tsx`, `services/page.tsx` (L123), `about/page.tsx` (L204), `content/company.ts` (finalCta L111) | Standardize high-intent CTA to "Start a project". | Design System |
| P5 | Inconsistent H1 scale — Work page `lg:text-6xl`; Services/About top out at `sm:text-5xl` (no `lg` override). | MINOR | `app/work/page.tsx` (L104), `app/services/page.tsx` (L25), `app/about/page.tsx` (L55) | Standardize interior H1 (e.g. `sm:text-5xl` everywhere, or add matching `lg` override). | Interior |
| P6 | Service detail lacks bottom back/next nav — only a small top "← All services". (Bottom CTA + related studies DO exist.) | MINOR | `app/services/[slug]/page.tsx` (L57-62) | Add a "Back to all services" / "Next service" affordance near the footer CTA. | Interior |
| P7 | Case-study density — long prose sections; scannability could improve. (Partially mitigated: numbered approach dots, section-label dots, results grid, pull-quote already exist.) | MINOR | `app/work/[slug]/page.tsx` (L125-166) | Add a short at-a-glance summary / larger pull-quote; keep existing structure. | Interior |
| P8 | Metric box alignment on Work list — box is `lg:text-right` but inner spans are `block` left-aligned, creating a jagged edge. | MINOR | `app/work/page.tsx` (L144-162) | Right-align inner metric text on desktop. | Interior |
| P9 | FinalCTA button hand-rolls white styling via `secondary` + overrides instead of a shared inverted variant. | MINOR | `home/Hero.tsx` `FinalCTA` (L183-189) | Add an `inverted` Button variant and reuse it (also service/about/case-study CTAs). | Design System |
| P10 | Hero headline uses two accent colors (teal + violet) — fragments the primary focal point. | MINOR | `home/Hero.tsx` (L12-17) | Consider a single accent or subtle gradient for the emphasized phrase. | Home |
| P11 | Metric font competes with title in FeaturedWork (`text-4xl`/`lg:text-[2.75rem]`). | MINOR | `home/FeaturedWork.tsx` (L44-49) | Reduce metric size ~15% or mute color slightly. | Home |
| P12 | Hero word-reveal cumulative delay — final words appear ~0.7-0.8s after load (`0.08 + index*0.035`). | MINOR | `home/Hero.tsx` (L57) | Tighten stagger to ~`0.02` and base delay ~`0.05`. | Home |
| P13 | Hero headline leading `lg:leading-[1.08]` risks ascender/descender clash on wrap. | MINOR | `home/Hero.tsx` (L90) | Increase to `lg:leading-[1.12]`–`1.15`. | Home |
| P14 | Hero-mesh opacity `0.45` over 3 radial gradients can muddy text on bright displays. | MINOR | `globals.css` (L177-181) | Reduce to ~`0.25`–`0.3`. | Design System |
| P15 | `.gradient-underline` is 1px — fragile against bold type. | MINOR | `globals.css` (L279) | Increase to 1.5–2px. | Design System |
| P16 | Inconsistent mono tracking — section labels `0.2em` vs badges/labels `0.15em`. | MINOR | `ui/Section.tsx` (L82), `ui/Badge.tsx` (L52,83) | Standardize uppercase mono to `0.2em`. | Design System |
| P17 | Grid-gap drift — `FeaturedWork` `gap-8` vs `InsightsPreview` `gap-6 lg:gap-8`. | MINOR | `home/InsightsPreview.tsx` | Standardize card grids to `gap-8`. | Home |
| P18 | Dense `gap-px` ServicesOverview vs airy `gap-8` elsewhere (design choice, but inconsistent). | MINOR | `home/ServicesOverview.tsx` (L21) | Decide one card rhythm site-wide (ties to P2). | Home |
| P19 | Mixed border weights (`border` vs `border-strong`) read as uneven dividers. | MINOR | `ui/Section.tsx`, `globals.css` | Standardize divider weight; reserve `strong` for interactive edges. | Design System |
| P20 | Heavy uppercase-mono aesthetic on nearly every label reads "cold/technical". | MINOR | `ui/Badge.tsx`, various | Introduce a tracked sans variant for softer secondary labels. | Design System |
| P21 | Mobile-menu / header seam — overlay is solid `bg-background` at `top-16` while scrolled header is `bg-background/90`. | MINOR | `layout/Nav.tsx` (L35-41, L123-128) | Force solid header bg while `mobileOpen`. | A11y |
| P22 | About page ends on "no open roles" careers block — soft dead-end for clients (has a "Get in touch" CTA, so not a true dead-end). | MINOR | `app/about/page.tsx` (L183-208) | Add a "View our work" link before careers. | Interior |
| P23 | HeroVisual mouse-follow is decorative eye-candy, unrelated to messaging. | MINOR | `home/HeroVisual.tsx` | Optional: add node "react" states near cursor, or leave as-is. | Home |
| P24 | Button hover language split — `primary` uses `btn-glow-hover`, `secondary` uses shadow only. | MINOR | `ui/Button.tsx` (L16-25) | Align hover feedback across conversion variants. | Design System |
| P25 | Some section descriptions bypass `SectionHeader`'s `leading-relaxed` pattern (e.g. Hero supporting text). | MINOR | `ui/Section.tsx`, `home/Hero.tsx` (L93) | Ensure descriptions use the standardized pattern. | Design System |

### REJECTED (false positives / non-issues)

| Source item | Why rejected |
|-------------|--------------|
| Visual: "`status-dot--active` lacks a glow container" | False — `globals.css` L335 already applies `box-shadow: 0 0 0 2px var(--accent-teal-subtle)`. Indigo/coral dots too. |
| Motion: "FinalCTA `secondary` variant blends into background" | False — it's overridden to a **white** button on a near-black gradient (Hero.tsx L186); highest-contrast element in the section. |
| Motion: "HeroVisual `aria-hidden` hides meaningful QA/AI/API labels" | Rejected — the SVG is decorative reinforcement; exposing "QA AI API CI DATA CORE" adds noise. `aria-hidden` is correct here. |
| A11y: "Color-only status indicators in HeroVisual" | Rejected — visual is `aria-hidden` decorative AND accompanied by the text "Operational"/"System status". Not conveying unique info by color. |
| A11y: "Header transitions not disabled for reduced motion" | Rejected — `globals.css` L127-139 globally forces `transition-duration: 0.01ms` under `prefers-reduced-motion`. Already covered. |
| Motion: "Reduced-motion fallback loses hierarchy (FadeIn)" | Rejected — `FadeIn` already snaps to `opacity:1, y:0` cleanly; no jarring motion. Working as intended. |
| UX: "Footer social links low contrast (`text-muted`)" | Rejected — links use `text-muted` (#6b6b6b ≈ 5:1), which passes AA. Visibility is a subjective preference, not a defect. |
| A11y: "Tablet services grid awkward (2 cols sm→lg)" | Rejected — 4 items in a 2×2 bordered grid is intentional and balanced at tablet widths. |

---

## 2. Priority Implementation Plan

### Phase 1 — Critical fixes (accessibility blockers)
1. **C1** Mobile menu focus trap + focus restore + `Escape` to close — *A11y* — `Nav.tsx`
2. **M1** Fix `--muted-light` contrast to ≥ AA — *Design System* — `globals.css`
3. **M3** Form `aria-live` success + submit pending state — *Forms* — `ContactForm.tsx`, `Button.tsx`
4. **M2** Raise sub-12px structural label sizes (incl. `RS` monogram) — *Design System*
5. **P1** Mobile toggle to 44px, **P21** solid header bg when menu open — *A11y*

### Phase 2 — Major UX / conversion improvements
6. **M4** Simplify/merge contact form questions; relax required fields — *Forms*
7. **M5** Real social proof (client names/logos + home testimonial) — *Home*
8. **M7** Add inline CTA to `HowWeWork`/`WhyUs` — *Home*
9. **M6** Enforce primary-accent hierarchy; curb rainbow usage — *Design System*
10. **P4** Standardize primary CTA label to "Start a project" — *Design System*
11. **P2/P3** Unify card language + strengthen service-card affordance — *Home*
12. **P6** Service-detail bottom back/next nav; **P8** metric alignment; **P5** H1 scale — *Interior*

### Phase 3 — Polish (minor)
13. Design System: **P9** inverted Button variant, **P15** underline weight, **P16** tracking, **P19** border weights, **P24** hover language, **P14** hero-mesh opacity, **P20/P25** type polish
14. Home: **P10** headline color, **P11** metric size, **P12** stagger timing, **P13** hero leading, **P17/P18** grid rhythm, **P23** hero-visual interaction
15. Interior: **P7** case-study scannability, **P22** about-page onward link

---

## 3. Ownership summary

- **Design System:** M1, M2, M6, P4, P9, P14, P15, P16, P19, P20, P24, P25
- **A11y:** C1, P1, P21
- **Forms:** M3, M4
- **Home:** M5, M7, P2, P3, P10, P11, P12, P13, P17, P18, P23
- **Interior:** P5, P6, P7, P8, P22

> No code changes were made — this document is the deliverable. Run `npm run build` after implementing any phase.
