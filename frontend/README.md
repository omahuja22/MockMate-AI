# Frontend Architecture

## Purpose

The frontend is the React TypeScript application used by students, teachers, institute admins, and super admins. It owns user experience, routing, dashboards, interview screens, upload flows, feedback views, and client-side integration with backend APIs.

## Folder Structure

```text
frontend/
  public/                 Static files served directly by Vite
  src/
    app/                  App bootstrap, providers, router wiring
    assets/               Frontend-specific images, icons, and styles
    components/           Reusable UI components shared across features
    layouts/              Page shells for auth, dashboard, and public screens
    pages/                Route-level screens grouped by user role
    routes/               Route definitions, guards, and lazy loading strategy
    features/             Business-domain modules with local components and logic
    hooks/                Shared React hooks
    services/             API clients and browser-side service adapters
    context/              Context providers for auth, theme, tenant, and preferences
    store/                Optional scalable client state if Context becomes insufficient
    types/                Shared TypeScript models and API response types
    utils/                Pure helper functions
    constants/            Stable app constants, route names, limits, labels
    config/               Frontend runtime configuration
    lib/                  Third-party library wrappers
    test/                 Frontend test setup and shared test utilities
  docs/                   Frontend-specific architecture notes
```

## What Belongs Here

- React components and layouts
- Role-specific pages and dashboards
- Feature modules such as interviews, reports, documents, and analytics
- Axios API client setup
- React Query hooks for server state
- Context providers for authentication and application-wide settings
- TypeScript interfaces shared across UI flows
- Tailwind configuration and global styles when implementation begins

## Best Practices

- Keep route pages thin; put feature logic inside `features/`.
- Use React Query for server state, caching, refetching, and mutations.
- Use Context for stable app-wide state such as auth and tenant context.
- Introduce a dedicated store only when state becomes complex across many features.
- Keep reusable UI in `components/`; keep business-specific UI in `features/`.
- Define API types close to contracts and reuse them across services and components.
- Use route guards for role-based access control.
- Keep dashboard, interview, and AI components separated so they can evolve independently.
