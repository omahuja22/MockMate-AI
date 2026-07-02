# Database Architecture

## Purpose

The database folder contains PostgreSQL design artifacts, migrations, reusable SQL scripts, seed data, and database documentation.

## Folder Structure

```text
database/
  er-diagrams/            Entity relationship diagrams and source files
  sql/
    schema/               Hand-authored schema references
    views/                SQL views for reporting and analytics
    functions/            PostgreSQL functions and procedures
  migrations/             Ordered migration files managed by the backend migration tool
  seeds/                  Seed data grouped by environment
  docs/                   Database design notes, naming standards, and data dictionary
  backups/                Local backup notes or ignored backup placeholders
```

## What Belongs Here

- ER diagrams
- Data dictionaries
- Migration history
- Seed data for development, staging, and demos
- SQL views and functions
- Database operational notes

## Best Practices

- Treat migrations as the source of truth for schema evolution.
- Keep seed data safe and free of real personal student information.
- Document tenant boundaries and role relationships early.
- Use consistent naming for tables, constraints, indexes, and foreign keys.
- Keep analytics views separate from transactional schema design.
