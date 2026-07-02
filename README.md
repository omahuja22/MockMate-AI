# MockMate AI

MockMate AI is an AI-powered personalized interview preparation platform for IELTS institutes, study abroad consultants, and students preparing for high-stakes interviews. The platform will analyze student documents and profile data to generate tailored mock interviews, feedback, scoring, and progress insights.

This repository is organized as a production-grade startup codebase. It is intentionally modular so the product can grow from an MVP into a public SaaS platform with multiple roles, AI workflows, analytics, payments, institute management, and operational tooling.

## Product Scope

MockMate AI will support personalized preparation for:

- IELTS interviews
- Embassy interviews
- Visa interviews
- University interviews
- Scholarship interviews
- Internship interviews
- Job interviews

The flagship experience is an AI video interview that can evaluate communication quality, answer relevance, confidence, body language, and professional presentation.

## Core Roles

- Student: uploads documents, takes interviews, reviews feedback, tracks progress.
- Teacher: reviews student performance, assigns practice, gives feedback.
- Institute Admin: manages teachers, students, batches, institute-level analytics, and settings.
- Super Admin: manages platform operations, institutes, billing, feature flags, and global configuration.

## Planned Features

- Student onboarding and profile collection
- Resume, SOP, IELTS score, university, course, and country analysis
- Personalized interview question generation
- AI video interview sessions
- Voice, fluency, grammar, vocabulary, and pronunciation evaluation
- Eye contact, facial expression, and body language analysis
- Role-based dashboards
- Teacher review workflow
- Institute management
- Reports and analytics
- Prompt library and AI evaluation rubrics
- Notifications and reminders
- Secure storage for student documents and interview media

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| Routing | React Router |
| Server State | React Query |
| HTTP Client | Axios |
| Client State | Context API initially; dedicated store if cross-feature state grows |
| Backend | Python, FastAPI |
| Database | PostgreSQL |
| AI Services | LLM APIs, prompt templates, document analysis, video and voice processing modules |
| Storage | Local development storage, future cloud object storage |
| Deployment | Docker, CI/CD, cloud-ready environment configuration |
| Testing | Unit, integration, API, AI regression, end-to-end, performance, security |

## Folder Structure

```text
MockMate-AI/
  assets/       Shared brand, media, sample, and design assets
  backend/      FastAPI backend application and server-side architecture
  database/     Database design, migrations, SQL scripts, seeds, and docs
  deployment/   Docker, environment, cloud, CI/CD, and release infrastructure
  docs/         Product, architecture, API, user, developer, and operational docs
  frontend/     React TypeScript frontend application architecture
  prompts/      Versioned AI prompt library, rubrics, examples, and guardrails
  testing/      Cross-application test strategy, fixtures, reports, and suites
  README.md     Project overview and operating guide
```

## Architecture Principles

- Keep features modular and role-aware.
- Keep API contracts explicit through schemas and documentation.
- Separate business logic from route handlers and UI components.
- Version prompts and evaluation rubrics like production artifacts.
- Treat AI behavior as testable product behavior, not hidden glue code.
- Store sensitive documents and media through controlled storage abstractions.
- Build observability, logging, and auditability into the backend from the start.
- Design for multi-tenant institutes even if the first release starts smaller.

## Installation

Implementation has not been generated yet. Once the application code is added, this section should include:

1. Required runtime versions.
2. Environment variable setup.
3. Frontend dependency installation.
4. Backend dependency installation.
5. Database setup and migrations.
6. Local development commands.

## Development

Recommended future workflow:

1. Create a feature branch from the main development branch.
2. Update or add architecture notes when changing boundaries.
3. Add tests for every meaningful behavior change.
4. Keep prompt changes reviewed and versioned.
5. Run linting, type checks, backend tests, and frontend tests before opening a pull request.

## Deployment

Deployment assets will live in `deployment/` and should cover:

- Frontend hosting configuration
- Backend service configuration
- PostgreSQL provisioning and migrations
- Docker images and compose files
- Environment variable templates
- CI/CD pipelines
- Monitoring and log collection
- Secret management process

## Contribution

Future contribution standards should include:

- Code style rules
- Branch naming
- Commit message guidance
- Pull request checklist
- Test requirements
- Security and privacy review expectations
- AI prompt review process

## License

License to be decided before public release.

## Future Roadmap

- MVP interview generation from uploaded student documents
- AI feedback reports for students and teachers
- Video and voice evaluation pipeline
- Institute dashboard and student management
- Multi-tenant administration
- Payment and subscription support
- Advanced analytics and benchmarking
- Mobile-responsive interview experience
- Compliance, retention, and audit controls
# MockMate-AI
