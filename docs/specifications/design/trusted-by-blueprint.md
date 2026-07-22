# MockMate AI Trusted By UX Blueprint

## Design Direction

The Trusted By section should feel like quiet evidence. It should look credible enough for enterprise buyers and calm enough for students. The tone is Linear-like restraint with Stripe-like polish.

## Layout

- Full-width section with constrained inner container.
- Center-aligned heading block.
- Logo grid below the text.
- No dense background artwork.
- No testimonial cards in v1.

## Spacing

- Top padding: 56-72px mobile, 72-96px desktop.
- Bottom padding: 56-80px.
- Heading to subtext: 12px.
- Text block to logo grid: 28-40px.
- Logo grid gap: 12-16px mobile, 16-20px desktop.

## Logo Grid

- Six cells.
- Mobile: 2 columns.
- Tablet: 3 columns.
- Desktop: 6 columns when space allows.
- Each logo cell has:
  - Rounded container.
  - Subtle border.
  - Monochrome symbol or initials.
  - Text label.
  - Low shadow or no shadow.

## Animation

- Fade in when entering viewport.
- Stagger logo cells by 50-70ms.
- Use opacity and small vertical movement.
- Reduced-motion users receive immediate rendering.

## Hover Effects

- Subtle lift: 1-2px maximum.
- Slight border contrast increase.
- Slight background shift.
- No glow, shimmer, or animated gradient.

## Color Usage

- Use background, card, border, muted, foreground, and primary tokens.
- Keep icons and marks monochrome.
- Primary color may be used sparingly for tiny dots or active accents.
- Avoid colorful fake brand treatment.

## Typography

- Heading: 24-32px, semibold.
- Subtext: 14-16px, muted foreground.
- Logo labels: 13-14px, medium.
- Secondary descriptors: 11-12px if used.

## Mobile Layout

- Text block is centered but line length remains short.
- Logo cells are 2 columns.
- Touch targets are at least 44px high.
- No horizontal scrolling.

## Tablet Layout

- Text block max width around 560px.
- Logo grid becomes 3 columns.
- Maintain moderate whitespace so the section does not feel crowded.

## Desktop Layout

- Text block max width around 640px.
- Logo grid can be six columns.
- Section should align visually with Hero max width.

## Accessibility

- Text labels are always visible.
- Icons are decorative unless they add meaning.
- Focus state is visible if cells become links later.
- Contrast meets WCAG AA.
- Animation respects reduced motion.

## Dark Mode

- Card surfaces should use `card`.
- Borders should remain subtle but visible.
- Text contrast must stay high.
- Avoid luminous marks or bright outlines.

## Loading State

No remote logos are used in v1. If future logos load remotely, show the current text placeholder cell as fallback.

## Visual Rhythm

The section should be calmer than the Hero. It should read as an affirmation, not a second sales pitch.

## White Space

Use enough white space to let the logo grid breathe. Do not stack additional proof points around it.

## Design Tokens

- Radius: `rounded-xl` to `rounded-2xl`.
- Border: `border-border`.
- Surface: `bg-card`.
- Text: `text-foreground`, `text-muted-foreground`.
- Shadow: `shadow-xs` only if needed.
- Motion: 180-500ms.
