# MockMate AI Hero UX Blueprint

## Design Direction

The Hero Section should feel calm, premium, minimal, and intelligent. The visual language is Apple clarity, Linear precision, Stripe credibility, Notion calm, and Vercel restraint.

## Layout

Use a two-zone composition:

- Left zone: copy, CTAs, trust signals.
- Right zone: structured product preview, not an illustration.

Mobile and tablet collapse to a single column. Copy always appears before the preview.

## Spacing

- Mobile section padding: 64px top, 40px bottom.
- Desktop section padding: 96px top, 80px bottom.
- Content block spacing: 24px between headline and supporting copy.
- CTA spacing: 12px mobile stacked, 12-16px desktop inline.
- Trust signal spacing: 12px row gap and column gap.

## Typography

- Kicker: 13-14px, medium, calm primary color.
- H1: 44-64px desktop, 36-44px tablet, 36px or below mobile.
- H1 weight: semibold, not black.
- Body: 16-18px, relaxed line height.
- Supporting metadata: 12-14px.

## Grid

- Desktop container max width: approximately 1200-1280px.
- Desktop columns: 1.02fr content, 0.98fr preview.
- Grid gap: 48-72px depending on viewport.
- Preview panel should not exceed copy height by much.

## Responsive Behaviour

- 320-767px: single column, compact preview, stacked CTAs.
- 768-1023px: single column, wider text, preview centered.
- 1024px+: two columns, vertically centered.
- 1440px+: preserve max width and increase empty space, not element size.

## CTA Hierarchy

- Primary CTA: filled shadcn button, high contrast, label "Start practicing".
- Secondary CTA: outline or ghost button, label "View institute demo".
- Primary appears first in DOM and visual order.
- Both CTAs use clear focus rings and touch-friendly heights.

## Information Hierarchy

1. Kicker badge: category.
2. H1: product promise.
3. Body: input-to-output explanation.
4. CTA group.
5. Trust signals.
6. Preview panel.

## Scroll Behaviour

- Hero should occupy a strong first viewport but allow the next section to appear naturally after scroll.
- Do not trap scroll.
- Avoid sticky hero content in v1.

## Animation Timing

- Text group entrance: 480-600ms.
- Preview entrance: 600-700ms with slight delay.
- Trust signal entrance: staggered 60-80ms.
- Hover transitions: 150-200ms.
- Reduced motion: disable transform animation and use immediate opacity.

## Micro Interactions

- CTA hover: subtle lift or background state, no dramatic movement.
- Preview cards: no hover requirement in v1; keep stable.
- Trust pills: slight border/background change on hover if interactive in future.
- Focus state: visible ring from design tokens.

## Hover Effects

- Primary CTA: slight upward translation and darker background.
- Secondary CTA: subtle background fill.
- Product preview: static by default to preserve performance and calmness.

## Accessibility

- One `h1`.
- CTA links have readable text.
- Decorative preview details are either readable or marked decorative.
- Contrast meets WCAG AA in light and dark modes.
- Reduced motion is respected.
- Touch targets should be at least 44px high.

## Dark Mode

Dark mode should feel like a quiet product workspace:

- Background: deep neutral.
- Surface: low-contrast card.
- Border: subtle white alpha.
- Primary: softened blue/teal token.
- Avoid bright glows.

## Light Mode

Light mode is primary:

- Background: near-white.
- Surface: white.
- Border: warm neutral.
- Primary: deep professional blue-teal token.
- Preview uses quiet contrast and data-like panels.

## Glassmorphism Usage

Use little to none. If used, restrict to very subtle backdrop blur on the preview surface. Do not create glass cards stacked over gradients.

## Illustrations

Do not use robot illustrations or generic AI visuals. Prefer abstracted product UI: interview readiness panel, evaluation dimensions, document inputs, and report preview.

## Icons

Use Lucide icons only where they clarify meaning:

- Video for interview.
- FileText for document intelligence.
- BarChart for analytics.
- ShieldCheck for privacy/trust.

## Visual Rhythm

Alternate between strong text blocks and quiet structured UI surfaces. Let empty space do most of the premium work.

## Empty Space Usage

Use generous empty space around the headline and CTA area. Do not fill every corner with decoration.

## Design Tokens

- Radius: 8-16px depending on surface scale.
- Shadows: subtle only.
- Border: 1px token border.
- Text: foreground, muted foreground, primary.
- Motion: fast and normal duration tokens.

## Color Philosophy

Use neutral surfaces, restrained primary accents, and low-saturation support colors. Color should communicate state and product structure, not spectacle.
