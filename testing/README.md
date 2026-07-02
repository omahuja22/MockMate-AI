# Testing Architecture

## Purpose

The testing folder defines the cross-application quality strategy for frontend, backend, APIs, AI behavior, integrations, end-to-end flows, performance, and security.

## Folder Structure

```text
testing/
  frontend/               Unit, component, and browser-level frontend tests
  backend/                Unit, integration, and API backend tests
  ai/                     Prompt regression, rubrics, and evaluation datasets
  integration/            Cross-service workflow tests
  end-to-end/             Full user journey tests
  performance/            Load, stress, and scalability tests
  security/               Security checks and abuse-case tests
  fixtures/               Shared test files, sample resumes, SOPs, and profiles
  reports/                Generated test reports and quality evidence
```

## What Belongs Here

- Test strategy documents
- Shared fixtures
- Prompt evaluation datasets
- End-to-end journey definitions
- Performance test plans
- Security test plans
- Generated reports when useful for QA review

## Best Practices

- Test backend business logic below API routes.
- Test frontend behavior through user-visible outcomes.
- Maintain AI regression datasets for prompt and scoring changes.
- Keep fixtures synthetic and privacy-safe.
- Add performance baselines before public launch.
- Include role-based access and tenant isolation in integration tests.
