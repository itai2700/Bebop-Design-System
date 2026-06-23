---
name: bebop-design
description: Use this skill to generate well-branded interfaces and assets for Bebop — a boutique GEO & SEO agency. Contains the locked Archivo-Black wordmark, full Lime + Magenta color system, type tokens, brand voice, and visual foundations for prototypes, mocks, decks, reports, social posts, and production code.
user-invocable: true
---

Read the `README.md` file within this skill, then explore:

- `Bebop Brand System.html` — the full brand system board (modes A/B/C, palette, type, scale, favicons, in-context applications, spelling lock).
- `colors_and_type.css` — tokens + the `.bb-wordmark` CSS-only component you can drop into any HTML.
- `assets/*.svg` — the wordmark in all three modes + mono + favicon.
- `preview/*.html` — small DS preview cards.
- `uploads/Bebop-Logo-Pack.pdf` — the original logo pack brief from the founder. **Source of truth.**

**Brand non-negotiables:**

1. The wordmark is always **`Bebop.`** — capital B, lowercase `ebop`, with the **period**. Never `BeBop`, `BEBOP`, `bebop`, `Be-Bop`, or `Bebop` without the period.
2. The mark is **English only**. Hebrew lives in supporting copy.
3. **Lime is the identity. Magenta is the pop. Never the other way around.** Lime appears in every Bebop appearance; Magenta only shows up on dark surfaces or in the Loud lockup.
4. **One accent moment** per appearance. The dot is the only ornament — no icons, no symbols, no graphic devices.
5. **Forbidden tropes:** magnifier, arrow-up, robot, brain, chatbot, globe, target, leaves, neural net, link chain, checkmark, badge, lock, database, folder, dashboard, emoji-as-UI, generic SaaS blue, navy+coral, neon glow, gradients-as-decoration.

**The three modes (always pick one):**

| Mode | Surface | Wordmark | Dot | When |
| --- | --- | --- | --- | --- |
| A · Primary | Paper | Ink Black | Lime | Default |
| B · Reversed | Ink Black | Paper | Magenta | Dark contexts |
| C · Loud | Lime | Ink Black | Magenta | Special moments |

**Wordmark construction (Archivo Black):**

- Font: Archivo Black, weight 400, the only weight
- Letter-spacing: `-3pt` (≈ `-0.024em` / `-8px` per 280px font-size)
- Accent: a filled circle at descender level, tight to the `p`, sized at `64px ⌀` per `280px` font-size (so ~23% of font-size)

Use the `.bb-wordmark` component from `colors_and_type.css`:

```html
<span class="bb-wordmark" style="--u: 1;">
  <span class="wm">Bebop</span><span class="dot"></span>
</span>
```

Override `--u` to scale (1 = 280px font-size). Use `.reversed`, `.loud`, `.mono`, `.mono-inv` classes for variants.

**Tone of voice:**

Senior growth strategist. Clear, fast, confident, never inflated. We/you, never I. Sentence case except wordmark and name treatments. Headlines often end with a period — it's a brand signature. No emoji. No "unleash" / "revolutionize" / "game-changer" / "AI-powered" as a brag. Real numbers beat marketing language.

**Bebop is an Israeli company.** Most of the surfaces will be in Hebrew.

- **The logo never changes language.** Always English `Bebop.`, even on Hebrew sites and Hebrew decks.
- **Display Hebrew (hero / big titles ONLY):** Tel Aviv Eclectic Hebrew No1 — boutique, characterful. **Use sparingly** — hero, occasional poster headline, nothing more.
- **Subheadings + body Hebrew (everywhere else):** **Polin** — 5+ weights, calm, clean, multi-script. H1, H2, H3, body, navigation, microcopy.
- **Use `dir="rtl"`** on the container for Hebrew content. Keep the wordmark element wrapped in `dir="ltr"` so it doesn't flip.
- **Classes** in `colors_and_type.css`: `.bb-he-display-1`, `.bb-he-h1`, `.bb-he-h2`, `.bb-he-body`, `.bb-he-meta`, `.bb-he-eyebrow`.
- When asked for English copy, write in the Bebop voice above. When asked for Hebrew, match the same tone: clear, fast, confident, never inflated. Avoid translated English idioms — rewrite for Hebrew rhythm.

**If creating visual artifacts** (slides, mocks, social posts, the brand site, internal reports, decks):

- Default to **Mode A · Primary** unless the surface naturally calls for B (dark hero, business card) or C (high-impact campaign moment).
- Inline `colors_and_type.css` or copy the variables — use the CSS custom properties (`--bb-ink`, `--bb-lime`, `--bb-magenta`, `--bb-paper`, `--bb-stone`).
- Use the `.bb-wordmark` component or copy an SVG from `assets/`.
- The favicon is a knockout B on Ink Black with a tiny Lime dot in the bottom-right.

**If working on production code:** copy the assets, tokens, and `.bb-wordmark` rules into the project. Use this README + the Brand System board as source of truth.

**If the user invokes this skill without further guidance,** ask:

1. What are we making — slide, landing page, internal report, social post, UI screen, email signature, business card, hero?
2. Light surface (Mode A), dark surface (Mode B), or loud (Mode C)?
3. English, Hebrew, or both?
4. Any specific copy already written, or should we draft it in the Bebop voice?

Then act as an expert designer and produce the artifact.
