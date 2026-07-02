# Backend Architecture

## Purpose

The backend is the FastAPI service responsible for API contracts, authentication, authorization, business workflows, AI orchestration, document analysis, interview generation, evaluation, reporting, notifications, and persistence.

## Folder Structure

```text
backend/
  app/
    api/                  API versioning, route registration, dependencies
    core/                 Configuration, security, logging, middleware, exceptions
    models/               Database models
    schemas/              Request and response schemas
    services/             Business services and use-case orchestration
    repositories/         Database access abstractions
    db/                   Database session, migrations, and connection management
    auth/                 Authentication and authorization modules
    ai/                   LLM clients, AI chains, embeddings, and evaluation helpers
    interview_engine/     Question generation, sessions, scoring, and feedback logic
    document_analysis/    Resume, SOP, IELTS, and profile analysis modules
    video_processing/     Eye contact, facial expression, and body language modules
    voice_processing/     Transcription, pronunciation, and fluency modules
    analytics/            Metrics, dashboards, and aggregate insights
    reports/              Report generation and export workflows
    notifications/        Email, in-app, and future notification channels
    storage/              Local and cloud storage adapters
    prompts/              Backend prompt loading and template integration
    utils/                Shared backend helpers
    workers/              Background jobs and async processing workers
  tests/                  Backend unit, integration, API tests, and fixtures
  scripts/                Operational scripts for development and maintenance
```

## What Belongs Here

- FastAPI application setup
- Versioned API route modules
- Pydantic schemas
- Database models and repositories
- Service-layer business logic
- Auth, RBAC, and middleware
- AI orchestration and evaluation modules
- Document, voice, and video processing services
- Analytics, report, notification, and storage abstractions
- Background worker definitions

## Best Practices

- Keep route handlers small and delegate business logic to services.
- Use schemas for all external API boundaries.
- Keep authorization checks explicit and role-aware.
- Isolate third-party AI and storage vendors behind adapters.
- Version APIs under `api/v1` so future breaking changes are manageable.
- Keep prompt loading separate from prompt content.
- Use structured logging and request correlation from the start.
- Design services to support asynchronous processing for long-running video, voice, and AI tasks.
