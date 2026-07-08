# Hero Section Plan — Runtime Studio

Verified against the live codebase on 2026-07-08. Every verdict below was checked
against the actual hero component source, not the audit summary alone. Verdicts are
limited to **KEEP / SIMPLIFY / MERGE / REMOVE**.

---

## Executive summary

The site has **nine route-level heroes** built on two patterns:

1. **Bespoke animated heroes** — `HeroSection` (home), `WorkHero` (work),
   `ServiceIntro` (service detail), the `ImmersiveCaseStudy` hero (case study
   detail), the `AboutPageContent` hero (about), and the inline hero in
   `contact/page.tsx`. All of these use `GenerativeBackground` + Framer Motion.
2. **Shared typographic `PageHero`** (`src/components/ui/PageHero.tsx`) — used by
   the services overview, insights hub, and insights article. It is a pure
   server component (no `GenerativeBackground` of its own), supports
   `size="hero" | "section"`, `align="left" | "center"`, and an optional `cta`.

The heroes are visually strong and largely on-brand. The real problems are
**consistency and repetition**, not structure:

- The **services overview** hero is the biggest outlier: centered/narrow, has
  conversion CTAs before the visitor has seen any service, no
  `GenerativeBackground`, and its copy is immediately echoed by the section
  header below it.
- The **about** hero repeats `company.about.intro` verbatim (it renders in the
  hero *and* again in the Philosophy section) and reuses the home positioning
  headline.
- The **insights hub** hero uses off-brand poetic copy ("Latent Field",
  "provoke") that clashes with the otherwise professional engineering voice.
- The **contact** hero and the form intro below it both open with "tell us what
  you're building" framing — mergeable.

Everything else is either a keeper or needs only light copy alignment.

**Rejected false positives** (confirmed against code, no action taken):

- **`heroImage` for service detail** — there is no image asset pipeline and no
  `heroImage` field anywhere in `ServiceIntro` or `content/services`. Adding one
  violates scope. Rejected.
- **In-hero CTA on the case study** — `ImmersiveCaseStudy` already ends with a
  result banner ("Discuss a similar project") and a full CTA section. A hero CTA
  would add friction to long-form reading. Rejected.
- **Author / excerpt fields on the insights article hero** — the article content
  model has no author field; the masthead correctly shows category, title, date,
  and reading time. Rejected.

No content-file breaking changes, no cards, static export + `basePath /runtimeStudio`
preserved, and the shared `PageHero` is reused wherever a typographic masthead
fits.

---

## Heroes to KEEP (with tweaks)

### 1. Home — `src/components/home/HeroSection.tsx` — KEEP
Gold-standard hero: `GenerativeBackground`, `StatusIndicator` ("Accepting
projects"), gradient headline ("Systems engineered for *confidence.*"), dual
CTAs, and a "Core capabilities" strip driven by `services`. Sets the brand bar.

- Tweak (optional): current subtitle is "A senior engineering studio for quality
  engineering, AI systems, and modern software delivery." If "AI-native" is a
  brand priority, fold it into this line for consistency with the insights voice.
- The capabilities strip overlaps `ServicesSection` further down the page, but it
  earns its place by making the offer scannable at the fold. No change.

### 4. Work overview — `src/components/work/WorkHero.tsx` — KEEP
Consistent with home: `GenerativeBackground`, `label-mono` "Selected Work",
`heading-hero`, strong subtitle. No CTAs, but `PortfolioList` follows immediately.

- Tweak (optional): align copy with the "confidence" brand line used on home.
- Tweak (optional, low priority): add a `#portfolio` anchor to the
  `PortfolioList` section so the hero can offer a "View case studies" jump link.
  Note: `PortfolioList`'s `<section>` currently has **no `id`** — one must be
  added if this jump link is implemented.

### 5. Case study detail — hero in `src/components/work/ImmersiveCaseStudy.tsx` — KEEP
Rich, correct masthead: "Case Study" label, industry `Badge`, `heading-display`
title, summary, headline metric, and client. Conversion happens at the page
bottom (result banner + CTA section), which is the right place for long-form.

- No changes. Reject the "add a CTA to the hero" suggestion (false positive).

### 8. Insights article — `PageHero size="section"` in `src/app/insights/[slug]/page.tsx` — KEEP
Compact article masthead: category pretitle (color-coded), title, and a
date · reading-time subtitle. Appropriate density for a reading flow.

- Keep `size="section"` so it stays compact. No structural change.
- Reject author/excerpt additions (no author data exists in the content model).

---

## Heroes to SIMPLIFY (specific changes)

### 2. Services overview — `PageHero` in `src/app/services/page.tsx` — SIMPLIFY
Current state: `PageHero` with `align="center"` (narrow, centered), **dual CTAs**
(`/contact` + `/work`), **no `GenerativeBackground`**, and a `SectionHeader`
directly below ("Four ways we help teams ship") that restates the hero's intent.

Changes:
- **Remove the hero CTAs.** The job here is to orient, not convert; the visitor
  hasn't seen a single service yet. Conversion already lives in `ServiceCTA` at
  the bottom of the page.
- **Match the `WorkHero` pattern**: left-aligned, `label` (pretitle) +
  `heading-hero` + subtitle. Switch `PageHero` to `align="left"`.
- **Add a `GenerativeBackground` wrapper** so this page is visually consistent
  with home / work / contact / insights. Wrap the `PageHero` the same way the
  insights hub does (`relative isolate` container with an absolutely-positioned
  `GenerativeBackground` behind a `z-10` `PageHero`).
- **De-duplicate copy**: since the hero now carries the positioning line, tighten
  the `SectionHeader` below to a functional label only (e.g. keep "What we do" +
  the description, drop the competing "Four ways we help teams ship" headline or
  reframe it so it doesn't echo the hero).
- Align hero copy with the home voice.

### 3. Service detail — `src/components/services/ServiceIntro.tsx` — SIMPLIFY
Current state: accent `heroWash`, giant `service.number`, `service.title`,
`service.shortDescription`, **and** `service.intro` (a third paragraph) all
stacked in the hero before the service nav/body.

Changes:
- **Move `service.intro` out of the hero** into the first body section (below the
  hero), OR trim the hero to `title` + `shortDescription` only. This shortens the
  hero and gets the reader to the service content faster. Rendering the same
  `service.intro` field in a different location is **not** a content-file change.
- Reject `heroImage` (false positive — no assets, out of scope).

### 6. About — hero in `src/components/about/AboutPageContent.tsx` — SIMPLIFY
Current state: hero renders `company.tagline` (eyebrow), a headline built from
`company.hero.headline` (the same "better software" positioning used elsewhere),
`company.about.intro`, and **dual CTAs** (`primaryCta` + `secondaryCta`). The
**exact same `company.about.intro` string is rendered again** in the Philosophy
section (line ~98). This makes the hero read like a second homepage.

Changes:
- **Reframe the headline for an About context** (team / philosophy / who we are)
  instead of reusing the home positioning line. `company.hero.headline` is only
  consumed by the About hero, but rather than mutate a shared-looking field,
  **add an additive `company.about.headline`** field (additive = non-breaking)
  and read from it here.
- **Remove `company.about.intro` from the hero** and keep the single instance in
  the Philosophy section (this eliminates the verbatim duplication).
- **Keep a single primary CTA** ("Start a project"); drop the secondary
  "Explore our work" CTA, which duplicates nav/footer routes.

### 7. Insights hub — `PageHero` in `src/app/insights/page.tsx` — SIMPLIFY
Current state: page-level `GenerativeBackground` (good), but the `PageHero` copy
is off-brand: title "Insights from the *Latent Field*" and subtitle ending in
"…inform, inspire, and provoke."

Changes:
- **Replace "Latent Field"** with a professional thought-leadership framing that
  matches the engineering voice used everywhere else.
- **Tighten the subtitle** — drop "provoke"/casual phrasing; keep it to one clear
  sentence about the topics covered (AI-native software, quality engineering,
  modern delivery).
- Keep the hero compact and CTA-free. No structural change.

### 9. Contact — inline hero in `src/app/contact/page.tsx` — SIMPLIFY / MERGE
Current state: strong hero (`GenerativeBackground`, "Tell us what *you're
building*", one-business-day subtitle, direct email link). The form section
below opens with its own intro ("Share a few details about your project,
timeline…") that thematically repeats the hero's ask.

Changes:
- **Merge the redundant framing** between the hero subtitle and the form intro so
  each says something distinct (hero = value + email; form intro = a short "what
  to include" nudge, or removed entirely).
- **Add a smooth-scroll anchor** from the hero to the form. The form section
  currently has **no `id`** — add `id="contact-form"` to the form `<section>` (in
  `contact/page.tsx`) and give the hero a "Send a message" jump link to
  `#contact-form`.
- Keep the `GenerativeBackground` hero and the direct email link (both useful).

---

## Heroes to REMOVE or MERGE

- **REMOVE:** none. Every page benefits from a hero for orientation and brand
  consistency; removing any would create an abrupt entry.
- **MERGE:** the **contact hero + form intro copy** (covered in #9 above) is the
  only true merge — collapse the duplicated "tell us what you're building"
  message into a single voice split across hero (value/email) and form (nudge).

---

## Implementation priority order (page groups)

Ordered by impact-to-effort. Groups 1–2 are the substantive consistency fixes;
3–6 are copy/anchor polish.

1. **Services overview** (`src/app/services/page.tsx`) — highest impact: remove
   CTAs, add `GenerativeBackground`, switch to left-aligned `WorkHero` pattern,
   de-duplicate the section header.
2. **About hero** (`src/components/about/AboutPageContent.tsx` + additive
   `company.about.headline` in `src/content/company.ts`) — remove duplicated
   intro, reframe headline, drop secondary CTA.
3. **Insights hub** (`src/app/insights/page.tsx`) — replace "Latent Field",
   tighten subtitle (copy only).
4. **Service detail** (`src/components/services/ServiceIntro.tsx`) — relocate or
   trim `service.intro`.
5. **Contact** (`src/app/contact/page.tsx` + `ContactForm` section id) — merge
   copy, add `#contact-form` anchor + jump link.
6. **Home + Work polish** (`HeroSection.tsx`, `WorkHero.tsx`, `PortfolioList.tsx`)
   — optional "AI-native"/"confidence" copy alignment and optional `#portfolio`
   anchor. Lowest priority.

---

## Per-page change checklist

### Home — `src/components/home/HeroSection.tsx` (KEEP)
- [ ] (Optional) Fold "AI-native" into `heroContent.subtitle` if it's a brand
      priority (`src/content/home.ts`).
- [ ] No structural changes; keep capabilities strip.

### Services overview — `src/app/services/page.tsx` (SIMPLIFY)
- [ ] Remove the `cta` prop passed to `PageHero` (drop contact + work buttons).
- [ ] Set `PageHero` `align="left"`.
- [ ] Wrap the hero in a `relative isolate` container with an absolutely
      positioned `GenerativeBackground` behind a `z-10` `PageHero` (mirror the
      insights hub layout).
- [ ] Reframe/soften the `SectionHeader` below so it no longer restates the hero
      ("Four ways we help teams ship" → functional label + description only).
- [ ] Align hero copy to the home voice.

### About — `src/components/about/AboutPageContent.tsx` (SIMPLIFY)
- [ ] Add additive `company.about.headline` in `src/content/company.ts` (no
      existing field removed/renamed).
- [ ] Point the hero `<h1>` at `company.about.headline` (About-context framing).
- [ ] Delete the hero's `company.about.intro` paragraph (keep the one in the
      Philosophy section).
- [ ] Remove the secondary CTA; keep the single primary "Start a project" CTA.

### Insights hub — `src/app/insights/page.tsx` (SIMPLIFY)
- [ ] Replace "Latent Field" title with professional thought-leadership copy.
- [ ] Tighten the subtitle; remove "provoke"/casual phrasing.
- [ ] Keep the page-level `GenerativeBackground` and the CTA-free `PageHero`.

### Service detail — `src/components/services/ServiceIntro.tsx` (SIMPLIFY)
- [ ] Either move the `service.intro` `<p>` into the first body section after the
      hero, or trim the hero to `title` + `shortDescription` only.
- [ ] Do **not** add a `heroImage` (rejected false positive).

### Contact — `src/app/contact/page.tsx` (SIMPLIFY / MERGE)
- [ ] Merge the hero subtitle and the form-intro copy so they don't repeat "tell
      us what you're building".
- [ ] Add `id="contact-form"` to the form `<section>`.
- [ ] Add a "Send a message" jump link in the hero pointing to `#contact-form`.
- [ ] Keep the `GenerativeBackground` hero and the direct email link.

### Work overview — `src/components/work/WorkHero.tsx` (KEEP)
- [ ] (Optional) Align copy with the "confidence" brand line.
- [ ] (Optional, low priority) Add a `#portfolio` jump link — requires adding
      `id="portfolio"` to the `<section>` in `PortfolioList.tsx`.

### Case study detail — `src/components/work/ImmersiveCaseStudy.tsx` (KEEP)
- [ ] No changes. Do **not** add a hero CTA (rejected false positive).

### Insights article — `src/app/insights/[slug]/page.tsx` (KEEP)
- [ ] Keep `PageHero size="section"`. No changes.
- [ ] Do **not** add author/excerpt fields (rejected false positive).

---

## Global constraints honored
- **Static export** and **`basePath /runtimeStudio`** untouched (all links keep
  using `withBasePath`; no new runtime data).
- **21 pages** unchanged in count — no routes added or removed.
- **No cards** introduced; all heroes stay typographic / full-bleed.
- **No content-file breaking changes** — only one *additive*
  `company.about.headline` field; relocating `service.intro` reuses the existing
  field.
- **Professional copy** throughout; off-brand phrasing removed.
- **Shared `PageHero`** reused for the services overview, insights hub, and
  insights article rather than adding new hero components.
