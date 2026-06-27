# Design

## Color Strategy

Committed. Deep eggplant/blackberry primary carries 40–60% of the surface (hero, dark panels, footer). Pure white background lets food photography do all the warmth. Warm amber accent for calls-to-action and highlights.

Scene anchor: "A summer evening closing time on Adams Avenue — shop lights warm against the dark, a hand-lettered sign, ice cream half-melted in a cone."

## Palette

```css
--color-bg:       oklch(1.000 0.000 0);        /* pure white — food carries the warmth */
--color-surface:  oklch(0.965 0.004 290);      /* near-white with faint violet hint */
--color-ink:      oklch(0.155 0.025 290);      /* near-black, slightly violet-tinted */
--color-muted:    oklch(0.480 0.030 290);      /* mid violet-gray, ≥4.5:1 on white */
--color-primary:  oklch(0.295 0.115 290);      /* deep blackberry/eggplant */
--color-accent:   oklch(0.720 0.130 55);       /* warm amber/honey — shop light */
--color-on-primary: oklch(1.000 0.000 0);      /* white text on primary fills */
--color-on-accent:  oklch(0.155 0.025 290);    /* dark ink on accent fills (L>0.72) */
```

## Typography

Scene object: "A 1960s diner menu hand-set in a shop that's been here forever — confident, readable, no-nonsense, slightly worn."

Brand voice words: **neighborhood · permanent · unassuming**

- **Display / Headings:** Bitter (slab serif) — carries the diner-menu permanence, warmth without costume. Not editorial-magazine, not rustic-western. Weight 700.
- **Body / UI:** Barlow (humanist grotesque) — clean, approachable, San Diego outdoor-community energy. Weights 400, 500, 600.

Reflex-reject cleared: Playfair Display, Fraunces, Outfit, Lora — all banned and avoided.

Scale: fluid clamp(), 1.333 ratio minimum between heading steps.

## Layout

- Asymmetric compositions where possible. Not everything centered.
- Full-bleed dark (primary) sections alternate with white sections for rhythm.
- Image-led hero: photography fills the fold, headline overlaid.
- No card grids as default. Use ruled lists, split layouts, or editorial blocks.
- Max body text width: 65ch.

## Motion

MOTION_INTENSITY: 3. Subtle, intentional. Page-load hero text reveal. Scroll-triggered fades on content (not every section — only where the content earns it). No bounce, no elastic. Respect prefers-reduced-motion at all times.

## Component Notes

- Nav: pure white bg, blackberry logo mark, sticky
- Buttons: primary = blackberry fill + white text; secondary = outlined blackberry; CTA = amber fill + dark ink text
- Flavor cards: ruled list format, not icon-cards
- Press quotes: large, typographic, no quote-box styling
- Footer: blackberry bg (primary), white/muted text
