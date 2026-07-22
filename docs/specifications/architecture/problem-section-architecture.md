# MockMate AI Problem Section Frontend Architecture

## Purpose

Define the frontend architecture for the landing page Problem Section.

## Folder Structure

```text
frontend/src/components/features/problem/
  ProblemSection.tsx
  ProblemCardGrid.tsx
  ProblemCard.tsx
  problem.constants.ts
  index.ts
```

## Components

### `ProblemSection`

Owns semantic section, heading block, scroll animation setup, and composition.

### `ProblemCardGrid`

Maps static problem items to cards and controls responsive grid layout.

### `ProblemCard`

Renders one problem card with icon, title, and description.

## Props

Initial implementation is static. Future props may support:

- `items`
- `headline`
- `description`
- `variant`
- `audience`

## Animation Strategy

- Use Framer Motion.
- Section fades in while entering viewport.
- Cards stagger in with a small vertical offset.
- Cards use subtle hover lift.
- Use `useReducedMotion` to disable movement for users who prefer reduced motion.

## Accessibility

- Section uses `aria-labelledby`.
- Heading has a stable id.
- Cards are readable text blocks.
- Icons are decorative.
- Cards are not keyboard-focusable because they are not interactive.

## Performance

- No remote assets.
- No data fetching.
- Static constants only.
- Use existing Lucide dependency.
- Use opacity and transform animation only.

## Testing Strategy

- TypeScript build.
- Responsive visual QA at mobile, tablet, and desktop.
- Reduced-motion QA.
- Light/dark theme QA.
- Screen reader heading and card text review.
- Pattern check for inline styles and unsafe HTML.

## Scalability

The section can later support:

- Audience-specific problem variants.
- CMS-managed copy.
- A/B tested card order.
- Clickable cards linking to deeper explanations.

## Future Improvements

- Add user research quotes after validation.
- Add country or interview-type variants.
- Add analytics events for scroll visibility.
- Add visual regression tests.
