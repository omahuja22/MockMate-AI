# MockMate AI Trusted By Frontend Architecture

## Purpose

Define the frontend architecture for the Trusted By landing-page section.

## Folder Structure

```text
frontend/src/components/features/trusted-by/
  TrustedBySection.tsx
  TrustedByLogoGrid.tsx
  TrustedByLogoCard.tsx
  trustedBy.constants.ts
  index.ts
```

## Components

### `TrustedBySection`

Owns semantic section, heading block, animation orchestration, and layout.

### `TrustedByLogoGrid`

Renders the responsive grid and maps trusted-by items to cards.

### `TrustedByLogoCard`

Renders one monochrome placeholder logo cell.

## Props

Initial implementation uses static constants. Future props may include:

- `items`
- `headline`
- `subtext`
- `variant`
- `showDescriptors`

## Animations

- Framer Motion viewport fade-in.
- Staggered logo card reveal.
- Hover lift on each card.
- Reduced-motion support through `useReducedMotion`.

## Performance

- No remote images.
- No network calls.
- Static data only.
- Use lightweight icons from Lucide.
- Keep animation transform/opacity based.

## Accessibility

- Section uses `aria-labelledby`.
- Logo placeholders are readable text, not image-only.
- Decorative icons use `aria-hidden`.
- Hover states are not required for comprehension.
- Focusable only if future logo links are added.

## Future Scalability

- Replace placeholder labels with real approved customer logos.
- Support linked customer case studies.
- Support CMS-driven logo sets.
- Support audience-specific variants for institute and enterprise campaigns.

## Testing Strategy

- TypeScript build.
- Responsive QA at mobile, tablet, desktop.
- Keyboard navigation check.
- Reduced-motion check.
- Dark mode visual review.
- Screen reader label review.

## Potential Risks

- Placeholder logos may be mistaken for real customers if labeled incorrectly.
- Too much animation could make the section feel gimmicky.
- Overuse of color could violate the premium monochrome direction.
- Future remote logo loading could hurt performance if not optimized.

## Acceptance Criteria

- Component is split into reusable parts.
- Static content is centralized.
- No duplicated logo data.
- No remote image dependency.
- No Hero files are modified.
- Build passes.
- Section renders immediately below the Hero.
