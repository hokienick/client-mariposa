# Design

## Color Strategy

Committed. Warm near-white surfaces carry the body; cherry red accent provides the 60s diner pop. Deep walnut handles the footer and select dark moments. No dark hero — this is a bright, welcoming parlor, not a bar.

Scene anchor: "A warm Sunday afternoon on Adams Avenue — the sun through the window, a scoop in hand, a place that hasn't changed in 26 years and doesn't need to."

## Palette

```css
--color-bg:       oklch(0.985 0.008 85);       /* warm near-white — soda fountain counter */
--color-surface:  oklch(0.965 0.012 85);       /* slightly deeper warm for section contrast */
--color-ink:      oklch(0.145 0.020 55);       /* warm chocolate brown-black */
--color-muted:    oklch(0.480 0.025 55);       /* warm mid-brown ≥4.5:1 on bg */
--color-dark:     oklch(0.235 0.045 55);       /* deep walnut — footer, nav scroll, dark moments */
--color-accent:   oklch(0.620 0.195 25);       /* cherry red / strawberry — the 60s pop */
--color-on-dark:  oklch(0.970 0.008 85);       /* warm white on walnut */
--color-on-accent: oklch(1.000 0.000 0);       /* white on cherry red */
--color-border:   oklch(0.910 0.016 85);       /* warm light border */
```

## Typography

Scene object: "A 1960s ice cream parlor menu — hand-set, confident, readable, warm. The kind of type that's been on the wall for decades."

Brand voice words: **neighborhood · permanent · welcoming**

- **Display / Headings**: Hoover (geometric slab serif) — mid-century American confidence. Permanent, no-nonsense, like a sign that's been on the wall since 1960. Weight 700. Via Fontshare CDN.
- **Body / UI**: General Sans (humanist grotesque) — clean, approachable, readable. Weights 400, 500, 600. Via Fontshare CDN.
- **Accent moments**: Chubbo (rounded display) — for flavor names, pull quotes, playful one-offs. Weight 700.

Reflex-reject cleared: Bitter, Barlow, Playfair Display, Outfit, Cabinet Grotesk — all banned.

CDN links:
```
https://api.fontshare.com/v2/css?f[]=hoover@700&display=swap
https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap
https://api.fontshare.com/v2/css?f[]=chubbo@700&display=swap
```

Scale: fluid clamp(), generous steps between heading levels.

## Layout

- DESIGN_VARIANCE: 7 — asymmetric compositions, offset photography, deliberate non-centered sections
- Split layouts as default for story/content sections
- Full-bleed photography in hero and feature sections
- Ruled lists for flavors (not card grids)
- Max body text width: 65ch
- Generous whitespace — VISUAL_DENSITY: 4

## Motion

MOTION_INTENSITY: 6. Scroll-triggered section reveals with real character (not just fade-in). Hero text entrance on load. Marquee strip on homepage. Staggered flavor list entrance. Playful hover states (scale, color shift). No bounce, no elastic. Respect prefers-reduced-motion at all times.

## Component Notes

- **Nav**: warm bg (--color-bg), Hoover logo wordmark in dark ink, sticky, minimal links in General Sans
- **Buttons**: primary = cherry red fill + white text; secondary = outlined dark; ghost = text-only with arrow
- **Marquee strip**: cherry red bg, white uppercase text, continuous scroll
- **Flavor rows**: ruled list, Chubbo flavor name, General Sans note + vegan tag
- **Press quotes**: large Hoover text, no quote-box styling, let the type do the work
- **Hours CTA band**: cherry red or surface bg, address + phone tappable + get directions
- **Footer**: deep walnut bg (--color-dark), warm white text, clean columns

## Photography

All photography from Mariposa's Instagram feed — real shop assets. No stock images unless a specific shot doesn't exist in the library (must be called out explicitly). Key assets in `/public/images/`:
- `lemon-sorbet.jpg` — hero candidate (lemon + sorbet, green bg)
- `cone-mar2026.jpg` — waffle cone hero shot
- `purple-cone.jpg` — berry/purple scoop on cone
- `blueberry-bowl.jpg` — blueberry ice cream + fresh blueberries
- `raspberry-ripple.jpg` — white chocolate raspberry ripple
- `jul-2025.jpg` — large format food shot
- `mar-2025.jpg` — food shot
- `may-2025-a.jpg`, `may-2025-b.jpg` — food shots
- `dec-2025-a.jpg`, `oct-2025.jpg` — food shots
- `storefront.jpg` — shop exterior
- `dick-owner.jpg` — Dick, the owner
- `sundae.jpg` — sundae
- `logo-orangeblue.jpg`, `logo-wood.jpg` — brand logos
