# MockMate AI Problem Section UX Blueprint

## Design Intent

The Problem Section should feel like a calm acknowledgement of the student's reality. It should be premium, editorial, and emotionally precise. Avoid panic, exaggeration, or dramatic visuals.

## Layout

- Full-width section.
- Constrained max-width aligned with Hero and Trusted By.
- Heading and paragraph appear first.
- Three cards sit below in a responsive grid.
- Desktop can use a centered text block or slightly left-weighted editorial block; v1 should use centered text for continuity.

## Spacing

- Section padding: 72px mobile vertical, 96px desktop vertical.
- Heading to paragraph: 16px.
- Paragraph to cards: 40px mobile, 48px desktop.
- Card padding: 24px.
- Card gap: 16px mobile, 20px desktop.

## Card Design

- White or token card surface.
- Soft border using `border-border`.
- Rounded corners around 16-24px.
- Minimal shadow or no shadow.
- Small icon container.
- Title and description text.
- No nested cards.
- No flashy gradients.

## Typography

- Heading: 30-40px, semibold, tight tracking.
- Paragraph: 16-18px, muted foreground, relaxed line height.
- Card title: 16px, medium/semibold.
- Card body: 14px, muted foreground, 22px line height.

## Animation

- Section fades in on scroll.
- Cards stagger in subtly.
- Hover lift should be 2px or less.
- Use opacity and transform only.
- Disable movement for reduced-motion users.

## Color

- Background can use `muted/30` or `background` to separate from Trusted By.
- Cards use `card`.
- Icons use monochrome foreground or muted foreground.
- Primary color should be minimal or absent.

## Hover

- Card lifts slightly.
- Border becomes a little stronger.
- Icon surface becomes slightly more pronounced.
- No glow, shimmer, or scale-heavy animation.

## Accessibility

- Icons are decorative.
- Cards are not focusable unless they become links.
- Text contrast must pass WCAG AA.
- Motion respects reduced-motion preferences.
- Layout supports 200% zoom without overlap.

## Responsive Behaviour

- Mobile: one column.
- Tablet: three cards can remain one column until enough width; two-column is acceptable but v1 should use one column under `md`.
- Desktop: three columns.
- Cards should maintain equal visual weight.

## Dark Mode

- Use token surfaces and borders.
- Avoid high-glow accents.
- Make card boundaries visible without harsh contrast.
- Keep muted copy readable.

## White Space

White space should carry the section. Keep copy concise, cards uncluttered, and avoid decorative filler.

## Visual Rhythm

This section should slow the page down slightly after the trust strip. It should create emotional resonance before later solution-oriented sections.
