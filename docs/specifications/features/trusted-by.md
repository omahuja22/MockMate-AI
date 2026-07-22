# MockMate AI Trusted By Section PRD

## Overview

The Trusted By section appears immediately after the completed Hero Section. Its job is to build credibility without resorting to loud social proof, fake logos, or exaggerated marketing claims. The section should feel calm, premium, and believable, reinforcing that MockMate AI serves the people and organizations involved in interview readiness.

## Purpose

- Establish trust directly after the hero value proposition.
- Show that MockMate AI is designed for a broad interview-readiness ecosystem.
- Help students and institutional buyers quickly recognize themselves in the product.
- Create a credible bridge from first impression to deeper product exploration.

## Business Goal

Increase confidence among students, IELTS institutes, coaching institutes, placement cells, universities, and recruiters so more visitors continue into signup, demo, or evaluation flows.

## User Goal

Visitors should understand that MockMate AI is not a generic AI tool. It is a serious platform for students and institutions that shape successful interviews.

## Layout

- Section sits directly below the Hero.
- Uses a centered heading and supporting sentence.
- Logo placeholders appear in a responsive monochrome grid.
- Grid contains six audience categories:
  - University
  - IELTS Institute
  - Coaching Institute
  - Placement Cell
  - Recruiter
  - Enterprise
- Section width aligns with the Hero max-width rhythm.

## Content Strategy

Headline:

> Trusted by the people shaping successful interviews

Subtext:

> Used by students, teachers, coaching institutes, and placement teams.

Logo labels should be audience-category placeholders, not fictional company names. This avoids implying real customer relationships before they exist.

## Visual Hierarchy

1. Small contextual line or eyebrow may be omitted to keep the section quiet.
2. Main heading centered.
3. Supporting text.
4. Logo grid.

The logo grid should be secondary to the message, not a flashy visual centerpiece.

## Responsive Behaviour

- Mobile: 2-column logo grid, compact spacing.
- Tablet: 3-column grid.
- Desktop: 6-column or balanced 3x2 grid depending available width.
- Maintain generous vertical spacing from the Hero.

## Accessibility

- Use semantic `section` with `aria-labelledby`.
- Each logo placeholder should expose a readable label.
- Do not rely on visual marks alone.
- Hover effects must not be required to understand content.
- Contrast must meet WCAG AA in light and dark modes.
- Animation must respect reduced-motion preferences.

## Empty States

Because real customer logos may not exist at launch, use neutral category placeholders. If future logos are unavailable or loading fails, fall back to text labels in the same containers.

## Future Expansion

- Replace category placeholders with approved real customer logos.
- Add industry grouping for institutes, universities, and employers.
- Add "Trusted by X learners" after verified usage exists.
- Add region-specific customer proof.
- Add link to case studies when available.

## Definition of Done

- PRD, UX blueprint, and architecture docs are complete.
- Section is implemented below the Hero.
- Section uses reusable components and static constants.
- Logo placeholders are monochrome and believable.
- Build passes.
- Accessibility and responsive behavior are reviewed.
- QA checklist and implementation review are documented.

## Acceptance Criteria

- Appears immediately below the Hero on the home page.
- Uses the required headline and subtext exactly.
- Includes six monochrome placeholder logo items.
- Does not use fake colorful logos, glow effects, robot visuals, or AI gimmicks.
- Is responsive across mobile, tablet, and desktop.
- Uses semantic HTML and keyboard-friendly focus states.
- Uses subtle scroll fade/stagger animation and hover lift.
- Respects reduced-motion preferences.
- Does not modify the Hero implementation.
