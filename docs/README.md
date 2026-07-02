# Documentation Architecture

## Purpose

The docs folder stores product, architecture, operational, API, user, and developer documentation. It should help future engineers, institute stakeholders, and operators understand the system without reading every source file.

## Folder Structure

```text
docs/
  srs/                    Software Requirements Specification
  architecture/           System design, diagrams, and architecture decisions
  api/                    API documentation and contract notes
  deployment/             Deployment and release guides
  user-manual/            Role-specific usage documentation
  developer-guide/        Local setup, coding standards, and workflows
  database-design/        Data model, ERD explanations, and retention notes
  design-system/          Visual identity, UI guidelines, and design tokens
  ui-wireframes/          Wireframes and UX flows
  roadmap/                Product roadmap and milestone planning
  changelog/              Release notes and change history
  security/               Security model and threat notes
  compliance/             Privacy, retention, and operational compliance notes
```

## What Belongs Here

- Requirements and scope documents
- Architecture diagrams and decisions
- API usage and contract documentation
- User manuals by role
- Developer onboarding guides
- Database design explanations
- Visual identity and design system specifications
- Wireframes and product flows
- Release notes and roadmap planning

## Best Practices

- Keep docs close to decisions, not only final outcomes.
- Record meaningful architecture decisions in `architecture/decisions/`.
- Keep user-facing documentation non-technical.
- Keep developer documentation precise and repeatable.
- Update docs in the same pull request as architecture or behavior changes.

## Key Documents

- [Software Requirements Specification](srs/software-requirements-specification.md)
- [Visual Identity and Design System](design-system/visual-identity-and-design-system.md)

