# Fynix Design System

A working document for how the Fynix website is designed and built. Owned by the team, not by any one tool. If a component or page doesn't align with this, one of them is wrong — decide, then update.

---

## 1. Purpose & Voice

Fynix positions itself as a **cybersecurity growth partner**. Every design and copy decision should reinforce three qualities:

1. **Trust-first** — the reader is an enterprise cybersecurity buyer who's careful, senior, and skeptical. Nothing playful, no exclamation-driven marketing.
2. **Editorial** — reads like a design annual or a boutique consulting quarterly, not a SaaS landing page.
3. **Measured** — every claim defends itself against a business outcome (pipeline, conversion, ranking, retention).

**Tone rules**
- No em dashes anywhere (colons, commas, or split sentences instead).
- No exclamation marks in Fynix voice. Verbatim client quotes stay as-said.
- No hype words: *revolutionary*, *cutting-edge*, *unleash*, *supercharge*.
- Sentence case for headings by default; title case only for proper nouns.
- Serif for headlines, sans for body, mono for eyebrows/labels.

---

## 2. Palette

| Token | Value | Usage |
|---|---|---|
| `--background` | `#FCFCFB` | Page background (warm cream) |
| `--background-soft` | `#F6F5F2` | Secondary surfaces, alternate sections |
| `--foreground` | `#1D2125` | Body text default |
| `--text-muted` | `#565D64` | Secondary text, labels |
| `--primary` | `#0C1E2E` | Dark navy — buttons, headings, footer |
| `--primary-hover` | `#172D40` | Primary hover state |
| `--accent` | `#A47E3B` | Aged gold — the only accent color |
| `--accent-hover` | `#B4924A` | Accent hover state |
| `--border` | `#E8E7E3` | Hairlines, card borders, dividers |

**Palette rules**
- Aged gold is **accent only** — eyebrows, active states, small metrics, links, gradient highlights. Never fill a button or a large surface with gold.
- Primary buttons stay navy. Gold-on-gold reads cheap.
- The palette is warm; no cool greys, no pure white. Every neutral has cream in it.

---

## 3. Typography

| Family | Role | Font | Fallback |
|---|---|---|---|
| Serif | Headlines, big numerals, italic accents | Lora | Georgia |
| Sans | Body copy, UI, buttons | Figtree | system-ui |
| Mono | Eyebrows, labels, counters, ticks | ui-monospace | SFMono-Regular |

**Scale (Tailwind, common uses)**
- `text-7xl` — hero H1 (desktop)
- `text-5xl` – `text-6xl` — section H2 and large metrics
- `text-3xl` – `text-4xl` — sub-section H2
- `text-xl` – `text-2xl` — card headings, blockquotes
- `text-base` – `text-lg` — body copy
- `text-sm` – `text-xs` — captions, dense meta, eyebrows

**Rules**
- Headlines: `font-serif`, `font-normal` weight, tight `leading-[1.08]` on the very largest.
- Italic + accent-gold is the "expressive" pattern reserved for the emotional pivot of a headline (e.g. *Growth Partner*, *Not Copywriters.*).
- Mono is uppercase, `tracking-widest`, ~10–12px. Never running text.
- Body copy is `font-light` when set on cream, `font-normal` on white cards.

---

## 4. Layout & Spacing

- **Container**: `max-w-7xl` for full-width pages, `max-w-4xl` – `max-w-5xl` for text-forward pages (FAQs, Contact, Case Study detail).
- **Section padding**: `py-24 md:py-32` for headline sections, `py-20 md:py-28` for CTA/utility rows.
- **Horizontal padding**: `px-6 md:px-12`.
- **Grid**: default to 12-col grids for the hero and heavy layout sections; simple 3–4 col for card grids.
- **Vertical rhythm**: every top-level section is separated by `border-b border-border`. The last section before the footer omits the border.

---

## 5. Motion System

One easing, one duration family, one principle: **premium easing = slow settle at the end**.

- **Signature curve**: `cubic-bezier(0.22, 1, 0.36, 1)` (Awwwards-standard easeOutQuint). Used by Reveal, CountUp, TestimonialsRail slide transitions.
- **Durations**: 700–1000ms for scroll reveals; 1600–1800ms for CountUp; 200–300ms for hover states.
- **`prefers-reduced-motion: reduce`** is honored globally — see `globals.css`. Any component with JS animation must also fall back cleanly (snap to final state).

### Reveal (`components/Reveal.tsx`)
Wraps any content block. Uses IntersectionObserver, fires once, then disconnects.

Props:
- `variant`: `"up"` (default), `"left"`, `"right"`, `"scale"` — directional entrance.
- `delay`, `duration`, `distance` — tuning per element.
- `blur`: adds a 6px→0 filter blur for the "focus arriving" effect.

**Rules**
- Use `variant="up"` for card grids so items stagger uniformly.
- Use `left` + `right` on paired columns for scissor-open composition (hero, contact, case study detail).
- Stagger card grids by 100–120ms per item.

### CountUp (`components/CountUp.tsx`)
Client component that animates any numeric string from 0 to its final value on viewport entry. Parses format (prefix, decimals, suffix) automatically. Wrapped element must have `tabular-nums` to prevent horizontal jitter during count.

### Lenis (`components/SmoothScroll.tsx`)
Global smooth-scroll wrapper. Disabled entirely for reduced-motion users. Never combine with CSS `scroll-behavior: smooth` (double-interpolation).

---

## 6. Components

### Buttons

Every CTA-shaped element is `rounded-full`.

- **Primary**: `bg-primary text-white ... rounded-full shadow-sm` — dark navy pill.
- **Secondary**: `rounded-full border border-border bg-white` — outlined pill.
- **Ghost text link**: no border, `text-text-muted hover:text-primary`.

Form inputs are NOT pill-shaped — they use `rounded` (small radius). Pill inputs read as search bars.

### Cards

Two card families:
- **Surface cards**: `rounded-lg` or `rounded-xl`, `bg-white` or `bg-background-soft`, `border-border`. Used for content (case studies, team members, engagement models).
- **Frosted cards** (hero illustration): semi-transparent white gradient, subtle border, layered depth.

Never mix card families in one section.

### Section headings

Every section leads with a three-part header:
1. **Eyebrow** — `text-xs uppercase tracking-widest text-accent font-mono`
2. **Heading** — `font-serif text-3xl md:text-4xl text-primary font-normal`
3. **(Optional) Description** — `text-text-muted font-light leading-relaxed`

Use `SectionHeading` component where possible for consistency.

### TestimonialsRail

Single-card carousel pattern. Client component. Prev/Next circular buttons, dot indicators (active = 40px accent bar, inactive = 6px circle), slide counter `01 / 06`, keyboard arrow support, `role="region" aria-roledescription="carousel"`. Auto-advance intentionally disabled — it reads salesy.

### ProcessTimeline

Alternating zig-zag layout (`variant="left"` odd, `variant="right"` even). Vertical spine on the left on mobile, center on desktop. Each step is a self-contained card with duration, activities, and deliverable.

---

## 7. Editorial Motifs

Three signature elements that make the site feel authored:

1. **Corner tick marks** — 4 × 4 `border-l border-t border-border` marks at all four corners of the hero. Swiss/architectural signature.
2. **Dot grid backdrop** — `radial-gradient` at 3.5% opacity, radially masked so it fades at edges. Structural grid, never dominates.
3. **Ambient gold glow** — one soft `blur-3xl` `bg-accent/12` circle in the top-right of the hero. Sole ambient light source.

**Rules**
- These belong to the hero only. Don't apply them to sub-pages.
- Never add more than these three motifs at once. Restraint > decoration.

---

## 8. Accessibility

Minimum bar: **WCAG 2.2 AA**. Non-negotiable.

- **Contrast**: gold accent (`#A47E3B`) passes AA on cream (`#F6F5F2`) at 16px semibold. On any smaller/lighter treatment, deepen to `#8B6A2E`.
- **Focus**: default browser outline is fine on inputs. Buttons and links MUST have a visible focus state (not `outline-none` unless replaced with a ring).
- **Landmarks**: `<header>`, `<main>`, `<footer>`, `<nav aria-label>`, `<aside aria-label>` used correctly.
- **Interactive patterns**:
  - `ActsTabs` uses `role="tablist" / "tab" / "tabpanel"` with `aria-selected` and `aria-controls`.
  - `FaqAccordion` uses `aria-expanded` + `aria-controls` + `role="region"` on the panel.
  - `TestimonialsRail` uses `role="region" aria-roledescription="carousel"` with `aria-live="polite"` on the active slide and `aria-current="true"` on the active dot.
  - `CountUp` uses `aria-label={finalValue}` so screen readers hear the final value, not intermediate digits.
- **Reduced motion**: honored by Reveal, CountUp, Lenis, and the global `*` selector in `globals.css`. Test with system setting on before shipping any animation.
- **Alt text**: decorative SVGs and glyphs are `aria-hidden`. Meaningful images (rare — most of our composition is SVG or type) require descriptive alt.

---

## 9. Content Sourcing

- Testimonials, client names, and case studies live in `lib/content.ts`. Do NOT hard-code in components.
- Testimonial quotes are copied verbatim from fynix.digital — never paraphrase real people's words.
- Case study metrics use the format `"+N% Label"`, `"#N Label"`, or `"N× Label"` so the CountUp parser can handle them.

---

## 10. Do / Don't

**Do**
- Reach for the accent color sparingly. If more than 8% of the fold is gold, reduce.
- Use `SectionHeading` and `Reveal` as your defaults for new sections.
- Prefer editorial motifs (corner marks, running heads, dot grids) over icons and stock illustrations.
- Ship every number wrapped in `CountUp` + `tabular-nums`.

**Don't**
- Use em dashes anywhere. Not in copy, not in metadata, not in titles.
- Use exclamation marks — anywhere.
- Use icon libraries with 24×24 rounded-corner "modern" iconography. Prefer minimal inline SVGs sized to context.
- Ship stock 3D renders or Freepik-style illustrations. If we need an illustration, we build it in-brand as SVG or commission it.
- Add auto-advance to carousels, toast notifications, or animated backgrounds. They fight the editorial tone.
- Introduce a third font family, a fourth palette color, or a second easing curve without updating this document first.

---

## 11. When Something Doesn't Fit

If a request doesn't fit the system:
1. First try to reframe the request into an existing pattern.
2. If it still needs a new pattern, propose it and update this file **before** shipping.
3. If it needs a new palette color, font, or easing, that's a system-level change — pause and discuss.

The system is here so decisions get faster and more consistent, not so we ship worse work.
