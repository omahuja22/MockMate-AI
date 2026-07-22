# Changelog

## 2026-07-17

### Added

- Added Trusted By PRD at `docs/specifications/features/trusted-by.md`.
- Added Trusted By UX Blueprint at `docs/specifications/design/trusted-by-blueprint.md`.
- Added Trusted By Frontend Architecture at `docs/specifications/architecture/trusted-by-architecture.md`.
- Added Trusted By QA checklist at `docs/audits/trusted-by-testing-checklist.md`.
- Added Trusted By implementation review at `docs/audits/trusted-by-review.md`.
- Added production-ready Trusted By component set under `frontend/src/components/features/trusted-by`.
- Added Hero Section PRD at `docs/specifications/features/hero-section.md`.
- Added Hero UX Blueprint at `docs/specifications/design/hero-blueprint.md`.
- Added Hero Frontend Architecture at `docs/specifications/architecture/hero-architecture.md`.
- Added implementation review at `docs/audits/hero-section-review.md`.
- Added Sprint 3.1 summary at `docs/sprint-3.1-summary.md`.
- Added production-ready Hero Section component set under `frontend/src/components/features/hero`.

### Changed

- Updated home page to render the Trusted By section immediately below the Hero.
- Updated home page to render the Hero Section through the feature barrel export.
- Updated app layout to allow the home page to use a full-width hero composition.
- Removed the global decorative body gradient for a calmer product foundation.

### Verified

- Frontend build passed with `npm run build`.
