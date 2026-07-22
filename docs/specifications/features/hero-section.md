# MockMate AI Hero Section PRD

## Overview

The Hero Section is the first product statement on the MockMate AI public home page. It must communicate that MockMate AI is a calm, premium, intelligent interview preparation platform for study-abroad students and institutes. The section should feel closer to Apple, Stripe, Linear, Notion, and Vercel than to a generic AI landing page.

The hero must not use robot imagery, chatbot metaphors, neon cyberpunk styling, or generic AI gradient visuals.

## Purpose

- Establish immediate trust in MockMate AI as a serious interview preparation product.
- Explain the product in one clear sentence.
- Direct visitors toward the primary action without overwhelming them.
- Provide enough product evidence to make the platform feel real before deeper sections exist.

## Business Goal

Increase qualified visitor progression from the public home page into signup, demo, or institute evaluation flows.

## User Goal

Help students, teachers, and institute decision-makers quickly understand what MockMate AI does, who it is for, and why it is worth exploring.

## Success Metrics

| Metric | Goal |
| --- | --- |
| Primary CTA click-through rate | Increase over baseline |
| Secondary CTA click-through rate | Track institute evaluation intent |
| Hero bounce rate | Reduce after launch |
| Time to understand product | Under 5 seconds in usability review |
| Lighthouse accessibility score | 95+ |
| Largest Contentful Paint impact | Hero remains within frontend performance budget |

## Primary CTA

Label: Start practicing  
Destination: Student onboarding, signup, or dashboard route depending on auth state.

Intent: High-confidence action for students ready to begin.

## Secondary CTA

Label: View institute demo  
Destination: Demo, login, or future sales route.

Intent: Lower-pressure action for institutes, teachers, and evaluators.

## Target Audience

- Students preparing for IELTS Speaking, university, visa, embassy, scholarship, internship, or job interviews.
- Teachers who coach study-abroad applicants.
- Institute admins evaluating AI-enabled interview preparation.
- Study-abroad consultants seeking scalable practice and reporting.

## Value Proposition

MockMate AI turns each student's resume, SOP, scores, and study-abroad goals into personalized AI video interviews with clear feedback on communication, confidence, and answer quality.

## Trust Signals

- Built for study-abroad institutes.
- Personalized from student documents and goals.
- Supports IELTS, university, visa, scholarship, internship, and job interviews.
- Provides structured feedback, not generic chat responses.
- Designed around privacy-aware video and document workflows.

## Visual Hierarchy

1. Small product category badge.
2. Main headline.
3. Supporting value proposition.
4. Primary and secondary CTA pair.
5. Trust signal row.
6. Product preview panel showing realistic interview/readiness concepts.

## Copywriting Strategy

- Use precise, confident language.
- Avoid hype-heavy AI claims.
- Avoid fear-based interview messaging.
- Emphasize readiness, personalization, and coaching.
- Keep the headline short enough to scan on mobile.

Recommended headline:

> Personal interview practice for every study-abroad student.

Recommended body copy:

> MockMate AI creates tailored video interviews from each student's resume, SOP, scores, university, course, and country, then turns performance into clear coaching feedback.

## Content Blocks

- Product badge: AI interview preparation for study abroad.
- Headline: core value statement.
- Supporting paragraph: what the platform uses and what it produces.
- CTA group: primary and secondary actions.
- Trust metrics/signals: document-aware, video-ready, teacher-reviewable.
- Preview panel: interview readiness, evaluation categories, institute workflow.

## Animations

- Use subtle entrance animation for text and preview panel.
- Motion duration should stay between 160ms and 700ms.
- Avoid decorative looping animation.
- Respect reduced-motion preferences.
- Animate opacity and transform only.

## Accessibility

- Hero uses semantic `section` inside the page `main`.
- Main headline has a stable `h1`.
- CTAs are keyboard reachable and have visible focus states.
- Decorative visuals are hidden from assistive technology.
- Text contrast meets WCAG AA.
- Reduced motion is respected.

## Responsive Behaviour

- Mobile: single-column layout, text first, preview panel second.
- Tablet: maintain single column with wider preview.
- Desktop: two-column layout with content and product preview.
- Wide desktop: constrain content width; do not stretch text lines.

## Loading Behaviour

- Hero must render without remote assets.
- No blocking network media is required.
- Preview should be CSS/HTML-based so the page remains fast and stable.
- If future data is introduced, show static fallback copy first.

## Performance Budget

- No large hero images in v1.
- No auto-playing video.
- No heavy canvas/WebGL effects.
- Framer Motion usage limited to first-load micro animation.
- Keep hero implementation under a small component bundle footprint.

## SEO Considerations

- Use one clear `h1` describing the product.
- Include study-abroad interview preparation language in visible copy.
- Avoid hiding primary value proposition in images.
- Preserve semantic HTML for crawler readability.

## Acceptance Criteria

- Hero communicates product value within one viewport on desktop.
- Primary and secondary CTAs are visible above the fold.
- The section is responsive from 320px to wide desktop.
- The visual preview contains no robot, chatbot, neon, or generic AI imagery.
- The component passes TypeScript build.
- The component has no inline styles.
- Reduced-motion users receive non-animated rendering.
- Keyboard focus is visible on CTA links.

## Edge Cases

- Very narrow mobile viewport.
- Browser has reduced motion enabled.
- User changes to dark mode.
- Route targets are not yet backed by full product flows.
- Font loading is delayed.

## Future Improvements

- Auth-aware CTA destinations.
- Real product screenshots once the app exists.
- Institute-specific hero variant.
- A/B testing for headline and CTA language.
- Localized hero copy for target markets.

## Definition of Done

- Feature, design, and architecture specs are documented.
- Hero is implemented as reusable React components.
- Build passes.
- Accessibility, responsive behavior, and animation behavior are reviewed.
- Changelog and project context are updated.
