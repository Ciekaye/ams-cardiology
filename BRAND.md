# Vireo Cardiology — Brand Guidelines

> **Vireo Cardiology is a fictional brand** created for a portfolio case study. It is not a real medical practice.

**Tagline:** *Modern heart care, rooted in trust.*

---

## 1. Brand Voice

Warm, confident, contemporary, and evidence-based. We sound like a trusted specialist who explains things clearly — never corporate-stiff, never overly casual.

- **Do:** lead with reassurance and expertise; use plain language; be specific.
- **Don't:** use fear-based urgency, jargon without explanation, or hype.

---

## 2. Color Palette

Defined as Tailwind v4 theme tokens in [`src/app/globals.css`](src/app/globals.css) under `@theme` (this project uses Tailwind's CSS-first config — there is no `tailwind.config.js`). Each token is usable as `bg-brand-*`, `text-brand-*`, `border-brand-*`, etc.

| Token | Hex | Role |
|-------|-----|------|
| `brand.teal` | `#0F4C5C` | Primary — headers, footer, key surfaces |
| `brand.tealDark` | `#0A3742` | Hover/active states, gradient depth |
| `brand.coral` | `#E36F6F` | CTA accent, highlights |
| `brand.coralDark` | `#C95757` | CTA hover |
| `brand.mist` | `#E8F1F2` | Section backgrounds, card borders |
| `brand.charcoal` | `#1F2937` | Body text |
| `brand.white` | `#FFFFFF` | Base background, text on dark |

**Contrast:** Teal (`#0F4C5C`) on white and white on teal both exceed WCAG AA. Charcoal (`#1F2937`) on white meets AAA for body text. Coral is reserved for non-text accents and white-on-coral CTAs/labels.

---

## 3. Typography

Loaded via `next/font/google` in [`src/app/layout.tsx`](src/app/layout.tsx), exposed as CSS variables and wired into Tailwind's `font-serif` / `font-sans`.

| Use | Family | Variable | Tailwind | Weights |
|-----|--------|----------|----------|---------|
| Headings | **Fraunces** (variable, opsz) | `--font-fraunces` | `font-serif` | 500–700 |
| Body & UI | **Inter** | `--font-inter` | `font-sans` | 400 / 500 / 600 |

---

## 4. Logo

`<VireoLogo />` ([`src/components/ui/VireoLogo.tsx`](src/components/ui/VireoLogo.tsx)) — lowercase "vireo" wordmark in Fraunces; the dot of the "i" is a small coral heart glyph. Props:

- `variant="dark"` — teal wordmark, for light backgrounds (header).
- `variant="light"` — white wordmark, for dark backgrounds (footer).

The standalone heart mark also appears as the favicon ([`src/app/icon.svg`](src/app/icon.svg)).

---

## 5. Component Usage Rules

- **Primary CTA** ("Book / Request Appointment"): coral background, white text, `rounded-full`, soft shadow; coral-dark on hover.
- **Secondary CTA**: white outlined ghost button on dark; teal outline on light.
- **Navigation**: white background, charcoal links, teal hover.
- **Cards** (services/physicians): white surface, 1px mist border, mist hover; teal text on hover.
- **Dark sections** (footer, cardiac rehab): teal background with coral accents and white body text.
- **Focus state**: 2px teal outline, 2px offset on every interactive element (keyboard accessibility).
- **Motion**: subtle fade-up on scroll (`.reveal`) and an animated ECG pulse in the hero — all gated behind `prefers-reduced-motion`.

---

## 6. Disclaimer

A dismissible top banner ([`src/components/layout/DisclaimerBanner.tsx`](src/components/layout/DisclaimerBanner.tsx)) states the portfolio/fictional status on first visit; the dismissal is stored in `localStorage`.
