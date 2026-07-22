# MockMate AI Hero Frontend Architecture

## Purpose

This document defines the frontend implementation architecture for the MockMate AI Hero Section.

## Folder Structure

```text
frontend/src/components/features/hero/
  HeroSection.tsx
  HeroContent.tsx
  HeroCtaGroup.tsx
  HeroProductPreview.tsx
  HeroTrustBar.tsx
  hero.constants.ts
  index.ts
```

## Components

### `HeroSection`

Owns the semantic section, responsive layout, animation coordination, and composition.

### `HeroContent`

Renders kicker, headline, supporting copy, CTA group, and trust signals.

### `HeroCtaGroup`

Renders primary and secondary CTAs using shadcn `Button` with `asChild` links.

### `HeroTrustBar`

Renders compact trust signals from static data.

### `HeroProductPreview`

Renders a lightweight product UI preview using semantic cards, not images.

## Props

Initial implementation can use static content from `hero.constants.ts`. Future props may support:

- `variant`: student, institute, enterprise.
- `primaryCtaPath`.
- `secondaryCtaPath`.
- `headline`.
- `supportingCopy`.
- `metrics`.

## State

No local business state is required. Animation state is handled by Framer Motion.

## Hooks

Use Framer Motion `useReducedMotion` in `HeroSection` to disable transform-heavy entrance animations for users who prefer reduced motion.

## Animations

- Use opacity and transform only.
- Keep animation durations under 700ms.
- Stagger small content groups.
- Disable movement for reduced-motion users.

## Accessibility

- Hero uses `section` with `aria-labelledby`.
- H1 is unique on the home page.
- CTA links are keyboard accessible.
- Decorative UI details are marked with `aria-hidden` when appropriate.
- Preview content remains readable for screen readers where it communicates value.

## Performance

- No remote hero images.
- No video, canvas, or WebGL.
- Small static data arrays.
- No runtime data fetching.
- Framer Motion limited to the hero component tree.

## Lazy Loading

Do not lazy load the Hero Section because it is above the fold. Future below-the-fold sections can be lazy loaded.

## Reusable Components

The CTA group, trust bar, and preview cards should be reusable within other landing page sections if needed.

## Future Extensibility

- Auth-aware CTA destinations.
- CMS-driven hero copy.
- Enterprise variant with institute-specific messaging.
- Real dashboard screenshot once product UI matures.
- A/B tested copy variants.

## Testing Strategy

- TypeScript build.
- Visual review at mobile, tablet, desktop.
- Keyboard navigation review.
- Reduced-motion review.
- Dark and light theme review.
- Lighthouse accessibility review.

## Potential Risks

- Over-animating the first viewport.
- Making the preview look like a fake product promise.
- CTA destinations changing when auth flow matures.
- Tailwind arbitrary classes becoming hard to maintain.
- Hero becoming too marketing-heavy for the calm product philosophy.

## Dependencies

- React 19.
- TypeScript.
- Tailwind CSS v4.
- shadcn/ui Button.
- Framer Motion.
- Lucide React.
- React Router.

## Acceptance Criteria

- Component is split into clear subcomponents.
- No inline styles.
- No business logic.
- No data fetching.
- No duplicated content arrays outside constants.
- Build passes.
- Responsive layout works from mobile to desktop.
