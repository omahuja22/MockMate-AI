# MockMate AI Problem Section PRD

## Overview

The Problem Section appears after the Hero and Trusted By sections. Its purpose is to emotionally connect with students, study-abroad applicants, placement students, and job seekers by naming the frustrations they experience during interview preparation.

This section must not introduce MockMate AI as the solution. It should stay focused on the user's current pain: uncertainty, generic practice, lack of personalized feedback, and no clear progress signal.

## Purpose

- Make visitors feel understood before presenting solutions.
- Clarify the real-world preparation gaps students face today.
- Create emotional momentum for later product sections.
- Communicate seriousness without fear-based messaging.

## Business Goal

Increase visitor engagement by making the problem feel specific, credible, and urgent enough to continue exploring the landing page.

## Emotional Goal

Students should feel: "This is exactly what happens when I try to prepare." The tone should be empathetic, calm, and grounded, not dramatic or anxiety-inducing.

## Copywriting Strategy

- Speak directly to the student experience.
- Avoid blaming students for poor preparation.
- Avoid introducing product features or product names.
- Use precise pain language: guesswork, generic advice, unclear feedback, no progress signal.
- Keep the main heading memorable and plain.

Required heading:

> Interview preparation shouldn't feel like guesswork.

Paragraph direction:

Explain that most students prepare with repeated questions, scattered notes, unclear expectations, and feedback that does not reflect their target university, visa context, role, or speaking habits.

## Layout

- Full-width section with constrained inner container.
- Left or centered text block depending viewport.
- Three-card grid below the copy.
- Cards represent:
  - Generic Practice
  - No Personalized Feedback
  - No Progress Tracking

## Visual Hierarchy

1. Section heading.
2. Supporting paragraph.
3. Three problem cards.
4. Card icon, title, and concise description.

The section should feel quieter than a sales section and more editorial than promotional.

## Accessibility

- Use semantic `section` with `aria-labelledby`.
- Use a proper heading hierarchy after the Hero `h1`.
- Cards should use readable text and not rely on icons alone.
- Decorative icons should be hidden from assistive technology.
- Text contrast must meet WCAG AA.
- Animations must respect reduced-motion preferences.

## Responsive Design

- Mobile: single-column cards.
- Tablet: cards may remain single column or become three columns if space allows.
- Desktop: three-column card grid.
- Maintain readable line lengths and generous spacing.

## Success Metrics

| Metric | Goal |
| --- | --- |
| Scroll depth past Problem Section | Increase |
| Time spent on landing page | Increase |
| CTA conversion after viewing section | Improve over baseline |
| Qualitative user testing | Users recognize their pain within 5 seconds |
| Accessibility checks | WCAG AA compliant |

## Acceptance Criteria

- Section appears after Hero and Trusted By on the home page.
- Required heading is used exactly.
- Section does not mention MockMate AI as the solution.
- Includes exactly three premium problem cards.
- Cards use the required titles.
- Cards include small icons, soft borders, rounded corners, hover lift, and subtle animation.
- Section is responsive across mobile, tablet, and desktop.
- Section respects reduced-motion preferences.
- No previous section implementation files are modified.
- Frontend build passes.

## Definition of Done

- PRD, UX blueprint, and architecture docs are complete.
- Engineer reads the docs before implementation.
- Standalone Problem Section components are implemented.
- Section is placed in the home page below existing sections.
- Build and basic pattern checks pass.
- Component is ready for future QA and visual review.
