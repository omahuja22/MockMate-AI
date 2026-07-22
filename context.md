# MockMate AI Context

## Current Focus

Sprint 3.1 introduced the public home page Hero Section and the Trusted By trust section for MockMate AI.

## Product Direction

MockMate AI should feel calm, premium, minimal, and intelligent. The frontend should avoid generic AI visuals, robot illustrations, neon effects, and chatbot-style presentation.

## Frontend Status

- React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, Framer Motion, and React Router are active.
- The home page renders the new Hero Section.
- The Trusted By section appears immediately below the Hero with monochrome audience placeholders.
- The hero uses reusable feature components under `frontend/src/components/features/hero`.
- The Trusted By section uses reusable feature components under `frontend/src/components/features/trusted-by`.
- The hero is static and does not call APIs.
- The Trusted By section is static and does not call APIs or load remote logos.
- The hero supports reduced-motion preferences.
- The Trusted By section supports reduced-motion preferences.

## Latest Verification

- `npm run build` passed in `frontend`.

## Current Follow-Ups

- Add a dedicated public marketing layout.
- Make CTA routing auth-aware.
- Add visual regression and accessibility QA for Hero and Trusted By sections.
- Replace static preview data only when real product screens are ready.
