# ClarityWorks Design System

A design system for **ClarityWorks**, an AI workflow automation and business
consulting firm under the **ClaritySRM** group, based in Sydney, Australia.

> **Tagline:** From Business Function to Built Solution.

This system supports a landing page and future product surfaces. It is designed
to feel like a **high-end management consultancy that also builds software** —
confident, refined, enterprise-credible, never flashy.

---

## Index

```
README.md                    ← you are here
SKILL.md                     ← portable skill manifest for Claude Code
colors_and_type.css          ← all tokens (CSS vars) + base type roles

assets/
  logo-wordmark.svg          ← primary horizontal lockup
  logo-wordmark-inverse.svg  ← for dark backgrounds
  logo-mark.svg              ← symbol-only
  pattern-prism.svg          ← background motif
  texture-paper.svg          ← warm grain overlay
  icons/                     ← curated Lucide subset used in the system

preview/                     ← Design System tab cards (registered)
  type-display.html
  type-body.html
  type-scale.html
  colors-brand.html          (navy + electric blue)
  colors-cream.html          (cream + paper backgrounds)
  colors-ink.html            (text + line neutrals)
  colors-semantic.html
  spacing-scale.html
  radii.html
  shadows.html
  buttons.html
  inputs.html
  metric-cards.html
  chips-badges.html
  process-step.html
  iconography.html
  brand-logo.html

ui_kits/
  landing/
    README.md
    index.html               ← the full landing page recreation
    Navbar.jsx
    Hero.jsx
    Services.jsx
    ProofMetrics.jsx
    EngagementProcess.jsx
    CaseStudies.jsx
    Differentiators.jsx
    ContactCTA.jsx
    Footer.jsx
    Primitives.jsx           ← shared Button, Card, Section, Eyebrow
```

---

## Sources

The user supplied a **written brief only** — no codebase, no Figma, no logo,
no font files were provided. All visual decisions in this system are
**original interpretation** of the brief. If real brand assets exist, they
should replace the placeholders in `assets/` and the wordmark in `logo-*.svg`.

> ⚠ **Font substitution flagged.** Display = `Instrument Serif`, body = `Geist`,
> mono = `Geist Mono` — all pulled from Google Fonts. If ClarityWorks has
> licensed typefaces (e.g. GT Sectra, Söhne, Tiempos) please supply the files
> and I'll swap them in.

---

## Brand context

**What ClarityWorks does.** Helps Australian businesses identify where AI and
automation will create the greatest operational impact — then builds and
delivers the solution. Not a generalist IT firm. They sit with the client,
understand how the work actually happens, and ship practical AI-powered systems
that remove manual effort and return time to the team.

**Three core services.**
1. **Fractional COO** — embed with leadership; surface where decisions stall.
2. **Workflow Automation** — document generation, approval routing, data entry, reporting.
3. **Custom Software Build** — bespoke internal tools where off-the-shelf fails. **IP transfers to the client at completion.**

**Target audience.** Australian SME owners, COOs, operations managers, and
department heads in construction, financial services, professional services,
and education. Time-poor, frustrated by manual processes, looking for
**practical ROI, not theory.**

**Proof points to use.**
- 12–23 hours saved per process after automation
- 0.3–1.2 FTE freed per month
- 65–85% of document content generated automatically
- Document turnaround: days → hours
- Active pilot with **Macquarie University**
- Clients across construction, financial services, professional services

**Engagement process — seven steps.**
1. Leadership Alignment & Scope
2. Operational Workshops
3. Workflow Mapping & Quantification
4. Opportunity Assessment
5. Prioritised Roadmap
6. Investment Thesis
7. Build & Delivery

**Differentiators.**
- Start from **business function**, not tooling
- **Quantify before we build**
- We build what we design — no handoff
- Phase for risk, not for billing
- **IP transfers to the client at completion**

---

## CONTENT FUNDAMENTALS

**Tone.** Confident, dry, operator-to-operator. Speaks like a senior consultant
who has done the work — not like marketing. Never breathless, never "exciting,"
never trend-chasing. Closer to *McKinsey Quarterly* than to a typical SaaS hero.

**Voice.** "We" for ClarityWorks, "you" for the reader. First-person plural is
the default — it implies a team, a partnership, accountability. The reader is
addressed as a peer (an owner, a COO), not a target.

> "We sit with your leadership team. We map how work actually moves. Then we
> quantify what's worth automating before a single line of code gets written."

**Casing.**
- Headlines: **sentence case** in the serif. Title case feels too marketing.
- Eyebrows / section labels: **UPPERCASE** in mono, +0.16em tracking.
- Buttons: **Sentence case** ("Book a discovery call", not "Book A Discovery Call").
- Navigation: **Sentence case** single words ("Services", "Approach", "Work").

**Numbers and metrics.** Always written numerically with units (`12–23 hrs`,
`0.3–1.2 FTE`, `65–85%`). Use en-dashes for ranges. Use mono font for any
metric so digits align. Australian English (`organisation`, `programme`,
`customised`).

**No-go words.**
- "Revolutionary," "game-changing," "AI-powered" (used as adjective marketing)
- "Solutions" as a noun on its own ("we deliver solutions" — too generic)
- "Empower," "unlock," "supercharge," "leverage" (consultancy slop)
- Emoji — **never** in product copy. Mono symbols (`→`, `·`, `—`) only.

**Sentence shape.** Short. Declarative. One idea per sentence. Lead with the
verb when you can. End sections with a number, not a flourish.

**Examples (use these as the bar).**

> *Hero:* From business function to built solution.
> *Hero sub:* We embed with Australian operations teams, find where manual
> work compounds, and build the AI-powered systems that take it back.

> *Service line:* We don't sell tools. We sell time you get back, measured.

> *Case study lede:* ICG's tender review used to take three to four days.
> Now it takes hours.

> *CTA:* Book a discovery call →

---

## VISUAL FOUNDATIONS

### Color

- **Primary surface (light):** cream `#FBF7ED`. Warm, paper-like. This is the
  default page background — not pure white. It signals "considered,"
  "physical," "not another SaaS site."
- **Primary surface (dark):** navy `#0A1735`. Used for inverse sections
  (hero alternates, footer, premium pull-quotes).
- **Primary text on light:** ink `#0C1220` (very near-black, slight blue cast).
- **Accent:** electric blue `#2B5BFF`. Used **sparingly** — CTAs, link
  underlines, accent micro-elements only. The system reads navy-and-cream;
  electric blue is the punctuation, not the paragraph.
- **No gradients** as backgrounds. The single allowed gradient is a subtle
  *protection gradient* on dark hero imagery (navy 950 → transparent, 0–40%).
- **No purple, no teal, no pastel.** Restraint is the brand.

### Type

- **Display:** `Instrument Serif`, regular and italic. Used for h1/h2 and pull
  quotes. Italic is reserved for the second half of a turn-of-phrase
  ("From business function to **built solution**" / the *Works* in the
  wordmark) — it gives the serif personality without being theatrical.
- **Body:** `Geist`, weights 400/500/600. Workhorse for everything UI.
- **Mono:** `Geist Mono`, used for metrics, eyebrows, step numbers, code-like
  affordances. Mono carries the "we measure things" signal.
- **No more than two typefaces visible in a single composition** (serif + sans
  is the pair; mono is treated as a system label, not a third face).

### Spacing

4-based scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160. Section vertical
rhythm on the landing page is **96px → 128px → 160px** for top-level sections.
Card internal padding is **32px**. Content gutters are generous —
this is an editorial layout, not a dashboard.

### Backgrounds & texture

- Default: solid cream. No gradients.
- Inverse sections: solid navy 900.
- A subtle **paper texture / grain** (3–5% opacity) sits over cream surfaces
  on hero and key sections only — never over content cards.
- The **prism mark** from the logo recurs as an oversized,
  low-contrast watermark on a couple of section corners (8–12% opacity).
- No stock photography. Imagery, when present, is restrained editorial b/w
  with a slight warm cream paper backing — never flat or saturated.

### Borders & lines

- Hairlines are **1px**, warm `#E5DBC0` on cream, cool `#D9DEEA` on white,
  `#1F2D4A` on navy.
- Strong rules (under section eyebrows, above footer) are 1px in ink.
- **No dashed or dotted lines** anywhere.

### Corner radii

Restrained. The brand reads structured, not playful.
- Inputs: `4px`
- Buttons: `4px`
- Cards: `8px`
- Large media containers: `12px`
- Pill (rare — only for status chips): `999px`
- **Default to sharper corners** when in doubt.

### Shadows / elevation

Soft, low-contrast, never colored. Three tiers:
- `shadow-1` — hairline + 2px blur (resting cards)
- `shadow-2` — hairline + 16px blur (hovered cards, dropdowns)
- `shadow-3` — 40px blur, used once on the contact form to lift it off cream
- **Inset hairlines** are preferred over outer shadows for default state on
  cream — they read as paper relief, not a UI box.

### Hover & press states

- **Buttons:** primary darkens from `#2B5BFF` → `#1A47F0`, no transform.
  Ghost / secondary buttons get a `cream-100` fill on hover.
- **Links:** underline-on-hover with a 1px line in electric blue.
- **Cards:** lift by translating up `2px` and swapping `shadow-1 → shadow-2`.
- **Press:** all interactive elements drop opacity to `0.92` for `120ms`.
  No scale-down transforms — too playful for the brand.

### Motion

- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` (out) for most.
  `cubic-bezier(0.65, 0, 0.35, 1)` (in-out) for layout shifts.
- Durations: 140ms (micro), 220ms (default), 420ms (page-level).
- **No bounces. No springs.** Movement is decisive, then settled.
- Section reveals: 12px translate-Y + opacity, staggered by 60ms, once.

### Transparency & blur

Rare. The only blur in the system is on the **sticky nav** when scrolled:
`backdrop-filter: blur(14px)` over a 70% cream tint. No frosted glass cards,
no acrylic surfaces.

### Layout rules

- Max content width **1140px** for landing-page sections; narrow editorial
  passages **880px**.
- **Sticky nav** that swaps from transparent → tinted on scroll past 60px.
- Hero stays full-width but content is left-aligned to a 12-column grid.
- Footer is full-bleed navy.

### Imagery vibe

Cool but warm-toned overall. Editorial b&w → cream paper. Never saturated,
never gradient-overlaid, never photo-stock-people-pointing-at-screens.
Macquarie University imagery (if used) should be architectural / institutional,
not portraiture.

---

## ICONOGRAPHY

No icon set was provided with the brief. The system uses a **curated subset of
[Lucide](https://lucide.dev)** (1.75px stroke, rounded line caps) — flagged as
a substitution. Lucide pairs well with editorial serif + clean sans: its line
weight is light enough to read as "drawn," not "UI."

**Rules:**
- All icons rendered at `1.75px` stroke, **never filled**.
- Default size in body copy: `18px`; in feature cards: `24px`; in nav: `20px`.
- Stroke color follows text: `currentColor` always.
- **No emoji anywhere in product copy or UI.** Mono unicode arrows
  (`→`, `↗`, `·`, `—`) are acceptable as inline glyphs.
- No two-tone, no filled, no duo-stroke icons.

**Selected icons in use** (copied into `assets/icons/` for offline reference):
`arrow-right`, `arrow-up-right`, `check`, `chevron-down`, `chevron-right`,
`circle-check`, `clock`, `file-text`, `git-branch`, `layers`, `line-chart`,
`map`, `target`, `workflow`, `users`.

**Logos / brand assets in `assets/`:**
- `logo-wordmark.svg` — primary horizontal lockup (light backgrounds)
- `logo-wordmark-inverse.svg` — for navy / dark backgrounds
- `logo-mark.svg` — symbol-only (favicon, mark-only contexts)
- `pattern-prism.svg` — oversized watermark motif
- `texture-paper.svg` — grain overlay (3–5% opacity)

If real ClarityWorks brand assets exist (logo, custom illustrations,
photography), they should be dropped into `assets/` to replace these
placeholders.
