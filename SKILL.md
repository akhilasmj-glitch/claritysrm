---
name: clarityworks-design
description: Use this skill to generate well-branded interfaces and assets for ClarityWorks, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, you can copy assets and read the rules here to become an
expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts *or* production code, depending on the need.

## Key files

- `README.md` — brand context, voice, visual foundations, iconography rules
- `colors_and_type.css` — CSS variables (colors, type, spacing, radii, shadows, motion)
- `assets/` — logos and brand assets to copy into new work
- `ui_kits/landing/` — high-fidelity recreation of the marketing landing page,
  factored into reusable JSX components
- `preview/` — Design System tab cards (illustrative, not for production)

## Quick guardrails

- **Cream `#FBF7ED` is the default page background**, not white.
- **Navy `#0A1735` + electric blue `#2B5BFF`** are the brand colors. Electric
  blue is punctuation (CTAs, links), not paragraphs.
- **Type pairing:** `Instrument Serif` (display) + `Geist` (body) + `Geist Mono` (metrics).
- **No gradients** as primary backgrounds. **No emoji.** **No purple, teal, or pastel.**
- **Sentence case** for headings, buttons, nav. Australian English.
- Tone: confident, dry, operator-to-operator. Like a senior consultant who has
  done the work — not like marketing.
