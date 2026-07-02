# Prompt Library Architecture

## Purpose

The prompts folder stores versioned prompt assets for analysis, interview generation, scoring, feedback, coaching, and guardrails. Prompts should be reviewed and tested like product logic because they directly affect user outcomes.

## Folder Structure

```text
prompts/
  resume-analysis/        Resume parsing, strengths, gaps, and personalization prompts
  sop-analysis/           Statement of Purpose analysis prompts
  ielts-analysis/         IELTS score interpretation and speaking readiness prompts
  interview-generation/   Personalized question generation prompts
  feedback/               Student-facing and teacher-facing feedback prompts
  evaluation/             Scoring and assessment prompts
  embassy-interview/      Embassy-specific interview prompts
  visa-interview/         Visa interview prompts
  ielts-interview/        IELTS interview prompts
  university-interview/   University admission interview prompts
  scholarship-interview/  Scholarship interview prompts
  internship-interview/   Internship interview prompts
  job-interview/          Job interview prompts
  ai-coach/               Coaching, practice, and improvement prompts
  system/                 System-level behavior prompts
  rubrics/                Scoring rubrics and evaluation criteria
  guardrails/             Safety, privacy, and policy prompts
  examples/               Few-shot examples and test prompt cases
```

## What Belongs Here

- Prompt templates
- Prompt version notes
- Evaluation rubrics
- Few-shot examples
- Guardrail instructions
- Prompt regression test cases

## Best Practices

- Version prompts and document why they changed.
- Keep prompts organized by business use case.
- Separate reusable rubrics from task-specific templates.
- Avoid putting secrets, API keys, or private student data in prompt files.
- Validate prompt changes through AI regression tests before release.
