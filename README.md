# Bebop · Design System

**Bebop.** is a boutique **GEO & SEO agency** — *performance marketing that ranks · AI & search visibility*.

The brand is a **Y2K-revival pairing**: very heavy black wordmark, **Neon Lime** as the identity color, **Hot Magenta** reserved as the dark-context pop. The mark is the message. No symbol, no icon system, no flourish — just `Bebop.` set in Archivo Black with a single accent dot.

---

## What's in this project

| File | Purpose |
| --- | --- |
| `Bebop Brand System.html` | **Main deliverable.** Full system board — three lockups, full color system, type, wordmark scale, favicon set, in-context applications, spelling lock. |
| `colors_and_type.css` | All tokens + the `.bb-wordmark` CSS-only component. Drop into any HTML to use the brand. |
| `assets/` | Logo SVGs in all three modes + mono + favicon. |
| `preview/` | DS preview cards for the Design System tab. |
| `uploads/Bebop-Logo-Pack.pdf` | **Source of truth.** The brand brief PDF the founder provided. |
| `SKILL.md` | Agent Skill manifest — drops into Claude Code as `bebop-design`. |

---

## Brand basics

- **Founder:** Itai Bigaoui · *Founder · GEO & SEO Lead*
- **Email:** itai@bebop.co.il
- **Phone:** +972 50 000 0000
- **Address:** השלושה 2, תל אביב-יפו
- **Domain:** bebop.co.il
- **Tagline:** *Performance marketing that ranks · AI & search visibility*

---

## The wordmark — locked

The mark is always **`Bebop.`** — capital B + lowercase `ebop` + a colored dot.

- **Typeface:** Archivo Black (Google Fonts)
- **Weight:** 400 (the only weight that exists for Archivo Black — and the only weight the brand uses for display)
- **Letter-spacing:** `-3 pt` (≈ `-0.024em` at large sizes). Tight, confident.
- **Accent dot:** at descender level, tight to the `p`. Color depends on the mode (see below).

**Spelling lock:** always `Bebop.` with the period. Never `BeBop`, never `BEBOP`, never `bebop`, never `Be-Bop`, never `Bebop` without the period.

---

## The three lockups

| Mode | Surface | Wordmark | Dot | Where to use |
| --- | --- | --- | --- | --- |
| **A · Primary** | Paper `#F2F0E8` | Ink Black | **Lime** `#E0FF4F` | Default — most marketing & UI surfaces |
| **B · Reversed** | Ink Black `#0A0E10` | Paper | **Magenta** `#FF3D8B` | Dark contexts, hero sections, business cards |
| **C · Loud** | Lime `#E0FF4F` | Ink Black | **Magenta** `#FF3D8B` | Special moments — campaign hits, social, posters |

---

## Color system

| Role | Name | Hex | RGB | Use |
| --- | --- | --- | --- | --- |
| **Primary · Text** | Ink Black | `#0A0E10` | 10 14 16 | Wordmark, text, dark surfaces |
| **Accent · Identity** | Neon Lime | `#E0FF4F` | 224 255 79 | The identity dot, CTAs, highlights — **always** |
| **Pop · Dark only** | Hot Magenta | `#FF3D8B` | 255 61 139 | Dark-surface accent, the loud lockup |
| **Base · Surface** | Paper | `#F2F0E8` | 242 240 232 | Light backgrounds, neutral surfaces |
| **Neutral · Secondary** | Stone | `#2A2E30` | 42 46 48 | UI chrome, dividers, secondary surfaces |

> **The Law:** *Lime is the identity. Magenta is the pop. **Never** the other way around.*

---

## Hebrew companion

**Bebop is an Israeli company.** Most of the site, decks, reports, and proposals will be in Hebrew. The system supports both natively:

- **The logo is always English.** Never Hebrew letters. Use the same `Bebop.` wordmark in every Hebrew context.
- **Hebrew display & body:** **Heebo** (Google Fonts) — the closest weight match to Archivo Black.
  - **Display / H1 / H2 / eyebrows:** Heebo Black (900)
  - **Body / nav / microcopy:** Heebo 400 / 500 / 700
- **RTL:** set `dir="rtl"` on the container. The logo wordmark stays `dir="ltr"` inline so it doesn't flip.
- **Hebrew classes** in `colors_and_type.css`: `.bb-he-display-1`, `.bb-he-h1`, `.bb-he-h2`, `.bb-he-body`, `.bb-he-meta`, `.bb-he-eyebrow`. Same scale as the English type system, tuned for Hebrew letter rhythm (slightly looser line-height, lighter letter-spacing).
- **Mixed content:** English brand names, URLs, hex codes, and numbers stay LTR inline within RTL paragraphs — modern browsers handle this automatically when the source order is correct.
- **Hebrew tagline examples** (drop-in):
  - **שיווק ביצועים שמדרג** ("performance marketing that ranks")
  - **תופיעו בתשובה.** ("appear in the answer.")
  - **סוכנות בוטיק ל-GEO & SEO** ("boutique GEO & SEO agency")
  - **נראות במנועי חיפוש ו-AI**

---

## Content fundamentals

Bebop talks like a senior growth strategist — clear, fast, confident, never inflated.

- **Voice:** professional, smart, direct, a touch confident-cool, loves the work, explains complexity plainly. Never condescending. Never selling magic.
- **Person:** "we" for the agency, "you" for the reader. Never "I." Never "us at Bebop."
- **Casing:** sentence case everywhere except the wordmark and ITAI BIGAOUI-style ALL-CAPS in business-card/name treatments. Headlines often get a **period** — it's the brand's signature.
  - *Examples:* `Performance marketing that ranks.` · `AI & search visibility.` · `Book a call.`
- **Hebrew/English:** the mark is **English only**. Hebrew lives in subtitle copy and contact info.
- **Emoji:** no. Not in product, not on the site, not in reports. The lime dot is the only "icon" the brand needs.
- **Numbers & data:** real, precise, never decorative. "Ranked #1 for 14 of 22 pillar queries" — not "🚀 massive SEO wins 📈".
- **Forbidden tropes:** "unleash", "revolutionize", "game-changer", "AI-powered" (as a brag), "your secret weapon", any superlative without a number behind it.

---

## Visual foundations

### Backgrounds
- Default: warm off-white **Paper** (`#F2F0E8`).
- Dark sections: **Ink Black**, not pure black.
- Magenta surfaces: reserved for the **Loud** lockup — campaign hits, social, posters.
- **No gradients** in chrome. **No textures.** **No 3D, no glass, no neon glow.** The flat color *is* the look.

### Type
- **Display:** Archivo Black 400 — the same family as the wordmark.
- **Text:** Archivo 400/500/600/700.
- **Mono:** JetBrains Mono — hex codes, URLs, code blocks only.
- Headlines often end with a period; tracking on the wordmark is `-3pt`, on H1/H2 about `-0.02em`, body `0`, eyebrows `+0.20em uppercase`.

### Spacing
4px base. Tokens `--bb-s-1` (4) → `--bb-s-10` (128). Layouts breathe.

### Corner radii
Geometric. Cards `--bb-radius-lg` (18). Buttons `--bb-radius-pill` (999). Business cards `--bb-radius-xs` (6). Favicons `--bb-radius-md` to `--bb-radius-lg` depending on size.

### Shadows
Three steps, subtle. No theatrical glows, no colored shadows. See `--bb-shadow-1/2/3`.

### Animation
- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` (out) — calm.
- Durations: 140 / 220 / 420 ms.
- **Hover:** lift 1–2px **or** opacity 0.85 **or** swap accent. Never all three.
- **Press:** scale 0.985, no color flash.

### Cards
- Background: Paper.
- Border: `1px solid var(--bb-rule)`.
- Radius: `--bb-radius-lg`.
- Shadow: `--bb-shadow-1` at rest, `--bb-shadow-2` on hover.

### Transparency / blur
Sticky navigation may use `backdrop-filter: saturate(140%) blur(12px)` over Paper. Never use for "glassmorphic" decoration.

### Imagery vibe
Warm-leaning monochrome, plenty of negative space, real product screenshots and human craft. Never AI-generated stock, never sparkly tech illustrations. When a hero image is needed, full-bleed photography at low saturation — let the Lime dot be the only burst of color in the frame.

---

## Iconography

**No icon system ships with the v1 logo pack.** The brand explicitly avoids generic SEO/marketing iconography (magnifier, arrow-up, robot, chatbot, target, graph, brain, etc.).

When the product surfaces (site / dashboard) need icons:

- **System:** [Lucide](https://lucide.dev) — 1.5px stroke, geometric, calm, free.
- **Stroke weight:** 1.5px. Never filled. Never duotone.
- **Color:** inherit (`currentColor`). The Lime accent is reserved for one icon per view at most.
- **Sizes:** 16 / 20 / 24 px grid only.
- **Forbidden:** emoji as UI signal, animated icons, the entire avoid-list above.

---

## Index

```
.
├── README.md                   ← you are here
├── SKILL.md                    ← Claude / Claude Code skill manifest
├── colors_and_type.css         ← tokens + .bb-wordmark component
├── Bebop Brand System.html     ← MAIN — full brand system board
├── assets/
│   ├── bebop-primary.svg       ← Ink + Lime on Paper (default)
│   ├── bebop-reversed.svg      ← Paper + Magenta on Ink (dark)
│   ├── bebop-loud.svg          ← Ink + Lime on Magenta (loud)
│   ├── bebop-mono.svg          ← pure black & white
│   └── bebop-favicon.svg       ← knockout B on Ink
├── preview/
│   ├── palette.html
│   ├── wordmark-modes.html
│   ├── spelling-lock.html
│   ├── type-scale.html
│   ├── header-usage.html
│   └── favicon-scales.html
└── uploads/
    └── Bebop-Logo-Pack.pdf     ← source brief from the founder
```

---

## Caveats & open questions

- **Archivo Black** is from Google Fonts. The wordmark uses it natively; no custom modifications. The single dot accent is geometric and reproducible at any size — the SVG assets render cleanly without the font file (assuming Archivo Black is available; falls back to Arial Black).
- **No live website or app exists yet.** Once a product surface appears, this design system can absorb its UI kit.
- **Hebrew companion type:** recommend **Heebo Black** as the Hebrew partner — closest weight match to Archivo Black, and Bebop's contact info already uses Hebrew. Once chosen, log here.
- **Business-card / email signature** mockups in the main board use realistic founder info from the brief. Replace with production-ready phone before printing.
