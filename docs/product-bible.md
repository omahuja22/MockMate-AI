# MockMate AI Product Bible

## 1. Executive Summary

MockMate AI is an enterprise AI SaaS platform that helps students become interview-ready through personalized mock interviews, structured feedback, and measurable progress insights.

### Product Overview

MockMate AI combines profile intelligence, document analysis, interview simulation, and AI plus human coaching into one product experience. It supports high-stakes preparation across university admissions, scholarships, internships, placements, embassy interviews, visa interviews, and job interviews.

### Vision

To become the most trusted interview readiness platform for students, institutions, and employers worldwide.

### Mission

Help students prepare for critical interviews through calm, intelligent, and personalized AI coaching while enabling institutions to scale outcomes with consistency.

### Target Audience

- Students
- Teachers
- Coaching institutes
- IELTS institutes
- Universities
- Placement cells
- Recruiters
- Enterprises

### Business Value

- Improves student readiness and confidence.
- Reduces teacher workload for repetitive review tasks.
- Standardizes coaching quality across batches and institutes.
- Creates measurable operational and learning outcomes.
- Enables scalable subscription revenue through institutional licensing.

---

## 2. Product Story

Interview preparation today is fragmented and inconsistent. Students rely on static question lists, ad-hoc mock sessions, and subjective feedback. Teachers are overloaded by repetitive coaching. Institutes struggle to deliver quality at scale. Recruiters and placement teams often receive candidates with uneven communication readiness.

MockMate AI exists to transform this process from manual, generic, and uncertain into a personalized, measurable, and repeatable coaching workflow.

Journey shift:

- From generic practice to profile-aware interview simulation.
- From delayed subjective comments to structured, actionable feedback.
- From one-time sessions to continuous improvement loops.
- From institution-level blind spots to role-specific analytics.
- From interview anxiety to confidence through guided preparation.

MockMate AI is not a chatbot novelty. It is a productized coaching platform engineered for reliability, trust, and outcomes.

---

## 3. Product Philosophy

### What the Product Believes

- Interview readiness can be learned and measured.
- Personalization materially improves outcomes.
- Users need clarity, not complexity.
- Human coaching and AI intelligence are complementary.

### What It Should Never Become

- A flashy, trend-driven AI demo.
- A black-box scoring system with no explainability.
- A feature-heavy interface that overwhelms users.
- A product that treats student data casually.

### Human-first AI Philosophy

- AI provides guidance, not final judgment.
- Teachers can review, annotate, and override.
- Confidence labels must accompany uncertain signals.
- Feedback must remain constructive and emotionally safe.

### Trust-first Philosophy

- Explain what is happening and why.
- Protect data with enterprise-grade security controls.
- Keep role boundaries strict and auditable.
- Make failures visible, recoverable, and respectful.

---

## 4. User Personas

### Student Persona

- Goals: pass interviews, improve communication confidence, get clear next steps.
- Pain points: generic prep, anxiety, unclear feedback quality.
- Motivations: admissions, scholarships, jobs, personal confidence.
- Success metrics: improved readiness scores, higher completion rate, reduced repeat mistakes.
- Typical workflow: onboarding -> upload documents -> choose interview type -> complete mock session -> review report -> practice again.

### Teacher Persona

- Goals: coach more students with consistent quality.
- Pain points: repetitive evaluations, limited time, scattered notes.
- Motivations: student outcomes, coaching effectiveness, workload control.
- Success metrics: review turnaround time, review completion rate, student score improvements.
- Typical workflow: open review queue -> inspect AI report -> add annotations -> mark reviewed -> monitor assigned cohort.

### Institute Admin Persona

- Goals: standardize coaching quality, monitor institute performance.
- Pain points: low visibility, inconsistent delivery across batches.
- Motivations: outcomes, reputation, operational efficiency.
- Success metrics: student engagement, interview completion, report review rates, institute-level readiness trend.
- Typical workflow: manage users and batches -> monitor dashboards -> enforce settings and limits -> share progress reports.

### Super Admin Persona

- Goals: operate platform stability, scalability, and tenant governance.
- Pain points: support complexity, cost control, incident management.
- Motivations: growth, uptime, security, enterprise trust.
- Success metrics: uptime, failure rates, tenant growth, churn, support SLA.
- Typical workflow: monitor platform health -> manage tenants and plans -> investigate alerts -> tune policies.

### Recruiter Persona

- Goals: evaluate candidate communication readiness efficiently.
- Pain points: inconsistent candidate preparation quality.
- Motivations: better hiring outcomes, reduced interview waste.
- Success metrics: candidate quality trend, interview-to-offer quality ratio.
- Typical workflow: review candidate readiness summaries -> provide interview focus recommendations -> track outcomes.

---

## 5. Complete User Journey

### Student Journey

Landing page -> signup/login -> profile setup -> academic/application details -> resume upload -> SOP upload -> score document upload -> profile completeness review -> choose interview type -> select difficulty and duration -> AI analysis -> question generation -> readiness check -> camera/microphone permissions -> interview session -> upload and processing -> AI evaluation -> report ready notification -> report review -> recommendations -> next mock interview -> progress dashboard.

### Teacher Journey

Login -> teacher dashboard -> assigned students list -> filter review queue -> open student report -> inspect transcript and AI scoring -> add comments and corrections -> mark review complete -> trigger student notification -> track cohort trends.

### Institute Admin Journey

Login -> admin dashboard -> invite teachers/students -> create batches -> assign users to batches -> configure allowed interview types -> monitor usage and limits -> review institute analytics -> track completion and readiness -> manage escalation issues.

### Super Admin Journey

Login -> platform dashboard -> create/suspend institutes -> configure plans and feature flags -> monitor AI and media pipeline health -> review alerts and audit logs -> enforce policy updates -> coordinate release-level operational reviews.

### Recruiter Journey

Login or secure invite -> candidate readiness overview -> role-specific readiness indicators -> communication and professionalism summaries -> recommendation snapshot for interview panel -> post-interview feedback loop.

---

## 6. Information Architecture

### Public

- Landing
- Product Overview
- How It Works
- Security and Trust
- Pricing
- Contact and Demo
- Login
- Signup

### Core Authenticated Areas

- Dashboard
- Interviews
- Reports
- Analytics
- Profile
- Notifications
- Settings

### Student Domain

- Student Dashboard
- Onboarding Checklist
- Profile Management
- Documents
- Interview Setup
- Interview Session Room
- Interview History
- Reports
- Progress Trends

### Teacher Domain

- Teacher Dashboard
- Assigned Students
- Student Detail
- Review Queue
- Report Review
- Batch Performance

### Institute Admin Domain

- Institute Dashboard
- User Management
- Batch Management
- Institute Analytics
- Reports
- Institute Settings
- Usage and Limits

### Super Admin Domain

- Platform Dashboard
- Institute Management
- Plan and Feature Controls
- AI Processing Monitor
- Audit and Logs
- Global Settings

### Shared System Areas

- Notifications Center
- Account Settings
- Help and Support
- Error and Access State Screens

---

## 7. Screen Inventory

### 7.1 Landing Page

- Purpose: communicate value and convert.
- User: public visitors.
- Primary CTA: start practicing or request demo.
- Secondary CTA: watch demo.
- Navigation: product anchors, auth links.
- Components: hero, trust strip, feature blocks, CTA.
- Validations: none.
- Loading states: skeleton for async content.
- Empty states: n/a.
- Error states: degraded content fallback.
- Permissions: public.
- Success state: CTA click-through to signup/demo.

### 7.2 Signup

- Purpose: create account.
- User: student, teacher, admin invitees.
- Primary CTA: create account.
- Secondary CTA: login.
- Navigation: auth shell.
- Components: form, validation messages, password requirements.
- Validations: email format, password strength, invite token validity.
- Loading states: submit progress.
- Empty states: n/a.
- Error states: duplicate email, invalid invite.
- Permissions: public.
- Success state: account created and redirected.

### 7.3 Login

- Purpose: authenticated access.
- User: all roles.
- Primary CTA: sign in.
- Secondary CTA: forgot password.
- Components: login form, remember session option.
- Validations: required fields.
- Loading states: sign-in spinner.
- Error states: invalid credentials, suspended account.
- Permissions: public.
- Success state: role-based dashboard routing.

### 7.4 Forgot Password

- Purpose: recover access.
- User: all roles.
- Primary CTA: send reset link.
- Secondary CTA: back to login.
- Components: email input, confirmation banner.
- Validations: valid registered email.
- Loading states: request progress.
- Error states: delivery failure.
- Success state: reset email queued.

### 7.5 Student Onboarding Checklist

- Purpose: complete profile readiness.
- User: student.
- Primary CTA: continue setup.
- Secondary CTA: skip optional items.
- Components: checklist, completeness score, required field prompts.
- Validations: required fields, score format checks.
- Loading states: form autosave indicator.
- Empty states: no data entered.
- Error states: save failure.
- Permissions: student only.
- Success state: onboarding complete.

### 7.6 Student Profile

- Purpose: maintain personal and academic context.
- User: student, authorized teacher view.
- Primary CTA: save profile.
- Secondary CTA: cancel changes.
- Components: profile form sections.
- Validations: domain-specific field validation.
- Loading states: section save loader.
- Empty states: incomplete profile guidance.
- Error states: invalid input, update failure.
- Permissions: owner edit, authorized read.
- Success state: updated context reflected.

### 7.7 Document Upload

- Purpose: collect interview-relevant documents.
- User: student.
- Primary CTA: upload file.
- Secondary CTA: replace file.
- Components: upload zone, file list, processing statuses.
- Validations: file type, file size, duplicate checks.
- Loading states: upload progress and processing progress.
- Empty states: no documents uploaded.
- Error states: unsupported type, extraction failure.
- Permissions: owner upload, authorized read.
- Success state: file stored and processing queued.

### 7.8 Interview Type Selection

- Purpose: configure interview practice context.
- User: student or authorized staff.
- Primary CTA: generate interview.
- Secondary CTA: back.
- Components: interview type cards, duration selector, difficulty selector.
- Validations: required profile readiness.
- Loading states: generation in progress.
- Empty states: no eligible interview types.
- Error states: generation failure.
- Permissions: role and plan aware.
- Success state: interview session generated.

### 7.9 Interview Readiness Check

- Purpose: verify device and environment readiness.
- User: student.
- Primary CTA: start interview.
- Secondary CTA: retry checks.
- Components: camera/mic status, network status.
- Validations: mandatory permission and device checks.
- Loading states: diagnostics running.
- Error states: permission denied, unsupported browser.
- Permissions: student.
- Success state: session starts.

### 7.10 Interview Session Room

- Purpose: conduct mock interview.
- User: student.
- Primary CTA: submit interview.
- Secondary CTA: pause or end session.
- Components: question panel, timer, recording indicator, progress tracker.
- Validations: required responses and media capture rules.
- Loading states: media buffering indicator.
- Error states: recording interruption, upload interruption.
- Permissions: student owner only.
- Success state: submission accepted and processing started.

### 7.11 Processing Status Screen

- Purpose: provide transparent post-interview state.
- User: student.
- Primary CTA: view report when ready.
- Secondary CTA: return to dashboard.
- Components: stage tracker and ETA hints.
- Loading states: pipeline progress.
- Error states: processing failed with retry/support pathway.
- Permissions: student owner.
- Success state: report ready.

### 7.12 Student Report Detail

- Purpose: show AI plus teacher feedback.
- User: student, assigned teacher, admins by permission.
- Primary CTA: start next practice.
- Secondary CTA: download report (future), ask for teacher review.
- Components: score sections, strengths, improvements, question-level feedback.
- Validations: n/a display.
- Loading states: report retrieval skeleton.
- Empty states: report pending.
- Error states: report unavailable.
- Permissions: role and ownership checks.
- Success state: actionable next plan visible.

### 7.13 Student Progress Analytics

- Purpose: track performance trajectory.
- User: student.
- Primary CTA: schedule next interview.
- Secondary CTA: view report history.
- Components: trend charts, recurring gap insights.
- Loading states: chart placeholder.
- Empty states: no interviews completed yet.
- Error states: analytics fetch failure.
- Permissions: student own data.
- Success state: trend interpretation visible.

### 7.14 Teacher Dashboard

- Purpose: workload and student oversight.
- User: teacher.
- Primary CTA: open review queue.
- Secondary CTA: view assigned students.
- Components: pending reviews widget, batch summary, at-risk students.
- Loading states: dashboard skeleton.
- Empty states: no pending reviews.
- Error states: data load error.
- Permissions: teacher role.
- Success state: clear prioritized queue.

### 7.15 Teacher Review Queue

- Purpose: prioritize and process reviews.
- User: teacher.
- Primary CTA: open report.
- Secondary CTA: apply filters.
- Components: sortable table, filters by batch/status/date.
- Empty states: no items matching filter.
- Error states: query timeout.
- Permissions: assigned student data only.
- Success state: selected report opened.

### 7.16 Teacher Report Review Screen

- Purpose: human quality overlay.
- User: teacher.
- Primary CTA: save comments and mark reviewed.
- Secondary CTA: save draft.
- Components: AI report view, annotation panel, status controls.
- Validations: required fields for completion status.
- Loading states: save in progress.
- Error states: save failed, conflict state.
- Permissions: assigned teacher and admins.
- Success state: review complete and notification sent.

### 7.17 Institute Admin Dashboard

- Purpose: institute-level operations and KPI visibility.
- User: institute admin.
- Primary CTA: manage users or batches.
- Secondary CTA: view reports.
- Components: active students, completion, readiness trends, teacher workload.
- Empty states: new institute onboarding prompts.
- Error states: analytics latency fallback.
- Permissions: institute scope only.
- Success state: actionable institute snapshot.

### 7.18 User Management (Institute)

- Purpose: manage users and roles.
- User: institute admin.
- Primary CTA: invite user.
- Secondary CTA: update role.
- Components: user table, invite modal, role controls.
- Validations: email uniqueness and role constraints.
- Error states: invite failure, permission conflict.
- Permissions: institute admin.
- Success state: user invited/updated.

### 7.19 Batch Management

- Purpose: create and manage cohorts.
- User: institute admin.
- Primary CTA: create batch.
- Secondary CTA: assign students/teachers.
- Components: batch list, assignment matrix.
- Validations: assignment constraints.
- Empty states: no batches created.
- Error states: assignment failure.
- Permissions: institute admin.
- Success state: batch updates persisted.

### 7.20 Institute Settings

- Purpose: control institute-level capabilities.
- User: institute admin.
- Primary CTA: save settings.
- Secondary CTA: revert changes.
- Components: interview type toggles, branding placeholders, usage limits view.
- Validations: valid combinations and limits.
- Error states: policy conflict.
- Permissions: institute admin.
- Success state: settings applied.

### 7.21 Super Admin Dashboard

- Purpose: platform operations visibility.
- User: super admin.
- Primary CTA: manage tenants.
- Secondary CTA: inspect incidents.
- Components: platform KPIs, error rates, active institutes.
- Loading states: observability data loader.
- Error states: monitoring source unavailable.
- Permissions: super admin only.
- Success state: operational health at a glance.

### 7.22 Institute Management (Super Admin)

- Purpose: tenant lifecycle control.
- User: super admin.
- Primary CTA: create institute.
- Secondary CTA: suspend/archive tenant.
- Components: tenant table, status controls, plan metadata.
- Validations: duplicate names, required fields.
- Error states: state transition conflict.
- Permissions: super admin only.
- Success state: tenant lifecycle updated.

### 7.23 Platform Settings and Feature Flags

- Purpose: global configuration governance.
- User: super admin.
- Primary CTA: publish configuration.
- Secondary CTA: rollback to prior configuration.
- Components: flag matrix, policy editor, audit notes.
- Validations: incompatible combinations blocked.
- Error states: publish failure.
- Permissions: super admin only.
- Success state: configuration active and logged.

### 7.24 Notifications Center

- Purpose: centralized event awareness.
- User: all roles.
- Primary CTA: open event context.
- Secondary CTA: mark all read.
- Components: notification list, category filters.
- Empty states: no notifications.
- Error states: retrieval failure.
- Permissions: role and ownership scoped.
- Success state: notification statuses updated.

### 7.25 Settings (User)

- Purpose: profile and preference control.
- User: all roles.
- Primary CTA: save preferences.
- Secondary CTA: reset defaults.
- Components: account profile, notification preferences.
- Validations: profile field rules.
- Error states: update failed.
- Permissions: account owner.
- Success state: settings persisted.

### 7.26 Access Denied Screen

- Purpose: explain permission restrictions.
- User: any unauthorized attempt.
- Primary CTA: return to allowed dashboard.
- Secondary CTA: contact admin.
- Components: message panel and navigation shortcut.
- Success state: user redirected safely.

### 7.27 System Error Screen

- Purpose: graceful recovery from unrecoverable UI errors.
- User: all roles.
- Primary CTA: retry.
- Secondary CTA: go to dashboard.
- Components: error summary, support reference id.
- Success state: user restored to stable state.

---

## 8. Complete Feature Specification

### 8.1 Authentication

- Purpose: secure role-aware access.
- Workflow: signup/invite -> verification -> login -> dashboard routing.
- Inputs: email, password, invite token.
- Outputs: session, role context, tenant context.
- Business rules: account states enforced.
- Permissions: public entry, protected app access.
- Edge cases: expired invites, suspended users.
- Failure cases: invalid credentials, token expiration.

### 8.2 Student Features

- Purpose: personalized preparation flow.
- Workflow: onboarding -> documents -> interview config -> session -> report -> progression.
- Inputs: profile and documents.
- Outputs: sessions, reports, progress metrics.
- Business rules: readiness preconditions for certain interview types.
- Permissions: owner-centric data boundaries.
- Edge cases: missing test scores, multi-target applications.
- Failure cases: processing interruptions, upload failures.

### 8.3 Teacher Features

- Purpose: scalable human coaching.
- Workflow: queue triage -> report review -> annotation -> completion.
- Inputs: AI report, transcript, student context.
- Outputs: teacher comments, review status.
- Business rules: only assigned students.
- Permissions: teacher scope.
- Edge cases: reassignment mid-review.
- Failure cases: stale state conflicts.

### 8.4 Institute Features

- Purpose: operational management and quality oversight.
- Workflow: manage users/batches -> configure settings -> monitor KPIs.
- Inputs: user data, policy settings.
- Outputs: assignments, analytics, institute controls.
- Business rules: institute-level boundaries and plan limits.
- Permissions: institute admin.
- Edge cases: limit reached during onboarding.
- Failure cases: policy conflicts, assignment failures.

### 8.5 Admin Features (Super Admin)

- Purpose: platform governance and reliability.
- Workflow: tenant management -> policy control -> incident review.
- Inputs: tenant metadata, system health signals.
- Outputs: platform settings, tenant states.
- Business rules: global authority with audit trails.
- Permissions: super admin only.
- Edge cases: emergency suspension events.
- Failure cases: invalid configuration rollout.

### 8.6 AI Features

- Purpose: personalized and structured coaching intelligence.
- Workflow: context assembly -> prompt execution -> schema validation -> scoring synthesis.
- Inputs: profile, documents, transcripts, media signals.
- Outputs: structured question sets, evaluations, recommendations.
- Business rules: unsafe output blocking and confidence labels.
- Permissions: downstream outputs role-filtered.
- Edge cases: sparse context, provider timeout.
- Failure cases: malformed outputs, schema mismatch.

### 8.7 Reports Features

- Purpose: interpretable feedback artifact.
- Workflow: evaluation output -> report assembly -> status transitions -> display.
- Inputs: AI and teacher feedback data.
- Outputs: report sections and status fields.
- Business rules: report states controlled and auditable.
- Permissions: owner and role-based read controls.
- Edge cases: partial processing available.
- Failure cases: rendering failure and retry path.

### 8.8 Analytics Features

- Purpose: trend visibility across roles.
- Workflow: event capture -> aggregation -> KPI rendering.
- Inputs: sessions, reviews, statuses, usage events.
- Outputs: role-specific metrics and trends.
- Business rules: tenant isolation and role filtering.
- Edge cases: low data volume windows.
- Failure cases: delayed aggregation.

### 8.9 Settings Features

- Purpose: user and organizational control.
- Workflow: edit preferences/config -> validate -> apply -> log.
- Inputs: configuration changes.
- Outputs: active settings.
- Business rules: restricted settings by role.
- Edge cases: conflicting settings.
- Failure cases: invalid combination rejection.

### 8.10 Notifications Features

- Purpose: timely workflow communication.
- Workflow: event trigger -> routing -> channel dispatch -> delivery tracking.
- Inputs: domain events and recipient rules.
- Outputs: notifications with status.
- Business rules: deduplication and preference compliance.
- Edge cases: deactivated user event target.
- Failure cases: provider outage and retry queueing.

### 8.11 Payments Features

- Purpose: monetize institutional usage.
- Workflow: plan assignment -> entitlement checks -> usage metering.
- Inputs: tenant plans and feature usage.
- Outputs: entitlement decisions and billing signals.
- Business rules: enforce limits before expensive AI operations.
- Edge cases: plan change mid-cycle.
- Failure cases: metering sync issues.

### 8.12 Future Features

- SSO and enterprise IAM integration.
- PDF exports with branding.
- Benchmarking and advanced recommendations.
- Marketplace and partner ecosystem capabilities.

---

## 9. Dashboard Design

### Student Dashboard Widgets

- Profile readiness score.
- Next recommended interview card.
- Recent report summary.
- Readiness trend graph.
- Pending actions list.

### Teacher Dashboard Widgets

- Pending review count.
- Overdue review queue.
- Assigned students snapshot.
- Batch performance trend.
- Student risk flags.

### Institute Admin Dashboard Widgets

- Active student count.
- Interview completion rate.
- Average readiness score.
- Teacher review turnaround KPI.
- Batch comparison graph.
- Usage and plan limit meter.

### Super Admin Dashboard Widgets

- Active institutes.
- Platform request and error rates.
- AI processing success rate.
- Queue backlog status.
- Incident feed.
- Tenant health ranking.

### KPI Principles

- Every KPI needs definition and time window.
- Every graph must include context and actionability.
- No vanity metrics without operational meaning.

---

## 10. AI Modules

### Resume Analysis

- Purpose: extract interview-relevant professional context.
- Input: resume document text and metadata.
- Output: structured summary, strengths, potential gaps.
- Prompt strategy: schema-driven extraction with domain-specific rubric.
- Future improvements: multilingual parsing and confidence scoring.

### SOP Analysis

- Purpose: infer motivation and consistency signals.
- Input: SOP text.
- Output: intent summary, alignment cues, contradiction flags.
- Prompt strategy: argumentative and consistency analysis prompts.
- Future improvements: plagiarism and originality indicators.

### Question Generator

- Purpose: produce personalized question set.
- Input: profile, analysis context, interview type, difficulty.
- Output: structured sections and question items.
- Prompt strategy: interview-type templates with strict output schema.
- Future improvements: adaptive sequencing based on prior performance.

### Feedback Engine

- Purpose: convert evaluations into actionable guidance.
- Input: scoring outputs plus context.
- Output: strengths, improvements, practice tasks.
- Prompt strategy: concise coaching style with emotional safety constraints.
- Future improvements: personalized practice plan generator.

### Interview Evaluator

- Purpose: score answers and communication quality.
- Input: questions, transcripts, voice and video signals.
- Output: category scores and explanation objects.
- Prompt strategy: rubric-weighted evaluation with confidence fields.
- Future improvements: calibrate with reviewed outcomes and scoring audits.

### Voice Analysis

- Purpose: evaluate fluency and speech quality indicators.
- Input: audio and timestamps.
- Output: transcript alignment, pacing, pauses, fluency indicators.
- Prompt strategy: combine signal extraction with LLM interpretation.
- Future improvements: accent-aware robustness and multilingual support.

### Video Analysis

- Purpose: infer non-verbal presentation cues.
- Input: sampled frames and session video metadata.
- Output: visibility, engagement, stability observations with confidence.
- Prompt strategy: constrained interpretation with prohibited claim classes.
- Future improvements: reliability scoring by quality conditions.

### Confidence Analysis

- Purpose: estimate confidence of model outputs.
- Input: quality metadata and model certainty indicators.
- Output: confidence labels and warning notes.
- Prompt strategy: deterministic confidence rule layer before narrative generation.
- Future improvements: calibration against human-reviewed outcomes.

### Communication Analysis

- Purpose: evaluate clarity, structure, relevance, and professionalism.
- Input: transcript, question context, rubric.
- Output: communication score breakdown.
- Prompt strategy: rubric-guided decomposition and evidence snippets.
- Future improvements: role-specific communication standards.

### Recommendation Engine

- Purpose: prescribe prioritized next actions.
- Input: current report plus historical trends.
- Output: targeted practice plan and interview suggestions.
- Prompt strategy: rank improvements by impact and feasibility.
- Future improvements: adaptive curriculum pathways.

---

## 11. Business Rules

- Maximum uploads per required document type can be configured by plan.
- Allowed file types include PDF, DOC, DOCX, JPG, PNG.
- File size limits are enforced before upload completion.
- Duplicate file handling uses hash and metadata checks.
- Interview type visibility depends on role, institute settings, and plan.
- Readiness checks must pass before starting video interviews unless mode allows exceptions.
- Interview cannot be submitted without required media for mandatory modes.
- Report generation requires successful evaluation pipeline completion.
- Teacher review can only be applied to assigned students.
- Unauthorized cross-tenant access is always denied.
- Retry limits are enforced for expensive processing tasks.
- Notifications must respect preference settings where applicable.
- Suspended institutes cannot initiate new interviews.
- Plan limits are checked before high-cost AI operations.

---

## 12. Notifications

### Notification Catalog

- Account invitation sent.
- Invitation accepted.
- Password reset requested.
- Password reset completed.
- Document upload failed.
- Document analysis completed.
- Interview generation failed.
- Interview submission received.
- Interview report ready.
- Teacher review requested.
- Teacher review completed.
- Usage limit warning.
- System incident affecting workflow.

### Notification Format

- Trigger: domain event.
- Recipient: role and ownership scoped.
- Message: clear and action-oriented.
- Priority: critical, high, medium, low.

---

## 13. Error Handling

### Network Errors

- User sees retry action and safe status message.

### Upload Errors

- User sees reason, accepted formats, and retry option.

### Authentication Errors

- Non-revealing credential messages.
- Account state guidance for suspended or inactive users.

### AI Errors

- Recoverable messaging with retry queue status.
- No exposure of sensitive provider internals.

### Permission Errors

- Clear access denied explanation and redirect to permitted area.

### Rate Limit Errors

- Friendly throttling messages with wait guidance.

### Storage Errors

- Upload preservation status and support path.

### Video and Voice Errors

- Device troubleshooting guidance.
- Alternate action pathways if capture fails.

### System Failure Principles

- Never blame user for system faults.
- Keep messages specific, safe, and actionable.
- Preserve progress whenever possible.

---

## 14. UX Writing

### Buttons

- Start Practicing
- Continue Setup
- Upload Document
- Generate Interview
- Mark as Reviewed
- Retry Processing

### Empty States

- "No interviews yet. Start your first mock interview to build your readiness baseline."
- "No pending reviews. You are all caught up for now."

### Success Messages

- "Profile updated successfully."
- "Interview submitted. We are processing your feedback now."
- "Review saved and shared with the student."

### Error Messages

- "We could not upload this file. Please check size and file type, then try again."
- "Your session expired. Please sign in again to continue."
- "We could not complete AI processing right now. Please retry in a few minutes."

### Loading Text

- "Analyzing your documents..."
- "Generating personalized questions..."
- "Processing your interview feedback..."

### Tooltips

- "Readiness score reflects your current interview preparedness based on recent sessions."
- "Confidence labels indicate the reliability of AI interpretation for this category."

### Dialogs

- "Are you sure you want to end this interview? Unsaved progress may be lost."
- "This action will suspend institute access to new interviews. Continue?"

---

## 15. API Interaction Flow

### Screen to Service Interaction Model

- Signup/login screens interact with auth service.
- Onboarding and profile screens interact with profile service.
- Document screens interact with upload service and analysis orchestration service.
- Interview setup screen interacts with interview config and question generation services.
- Interview room interacts with session state and media upload services.
- Processing status screen interacts with evaluation status service.
- Report screens interact with report read service and teacher annotation service.
- Dashboards interact with analytics aggregation service.
- Notifications center interacts with notification service.
- Admin screens interact with tenant and configuration services.

Cross-cutting:

- Every protected call includes auth and tenant context.
- Every service interaction emits relevant logs and analytics events.

---

## 16. Analytics

### Student KPIs

- Interview completion rate.
- Readiness score trend.
- Category-level improvement trend.
- Average processing time experienced.

### Teacher KPIs

- Reviews completed per period.
- Average review turnaround time.
- Pending queue aging.
- Student improvement under assigned cohorts.

### Institute KPIs

- Active students.
- Interview starts vs completions.
- Review completion ratio.
- Average readiness score by batch.
- Usage against plan limits.

### Business KPIs

- Monthly active institutes.
- Monthly active users by role.
- Retention and churn.
- Conversion from trial to paid.
- Cost per evaluated interview.
- Gross margin trend on AI operations.

---

## 17. Success Metrics

- Monthly Active Users by role.
- Monthly Active Institutes.
- Interview Completion Rate.
- Feedback Delivery Time.
- Student Readiness Improvement Rate.
- Teacher Review Completion Rate.
- Report Consumption Rate.
- Platform Uptime.
- Processing Success Rate.
- Error Rate.
- Retention and churn.
- Revenue growth.
- Average revenue per institute.

---

## 18. Competitive Analysis

### Pramp

- Strengths: peer mock interview model, practical interview practice.
- Weaknesses: less institution-focused, limited enterprise workflow depth.
- MockMate edge: multi-role SaaS operations and analytics.

### Interviewing.io

- Strengths: realistic technical interview simulation.
- Weaknesses: narrower domain and role focus.
- MockMate edge: broader interview types and educational context personalization.

### Yoodli

- Strengths: speech coaching and communication signals.
- Weaknesses: less integrated institutional workflow.
- MockMate edge: end-to-end interview pipeline with teacher and admin layers.

### Google Interview Warmup

- Strengths: accessible lightweight practice.
- Weaknesses: limited personalization and governance.
- MockMate edge: deeper personalization, report structure, and multi-tenant controls.

### Big Interview

- Strengths: training content breadth and interview prep resources.
- Weaknesses: lower AI-native evaluation depth and institutional telemetry.
- MockMate edge: AI-first evaluation plus enterprise operation readiness.

---

## 19. Monetization Strategy

### Pricing Model

- Institution-first subscription model.
- Tiered plans by active students, interview volume, and feature depth.

### Plan Structure

- Starter: small institutes and pilot programs.
- Growth: mid-size institutes with analytics and expanded limits.
- Enterprise: advanced governance, integration readiness, premium support.

### Institution Licensing

- Annual and monthly options.
- Seat-based plus usage-based hybrid options.

### Enterprise Strategy

- Custom contracts with SSO, compliance, and SLA add-ons.
- Dedicated onboarding and reporting support.

### Future Marketplace

- Optional marketplace for premium interview packs, rubrics, and specialized coaching modules.

---

## 20. Future Vision

### 2-Year Vision

- Category-defining institutional interview readiness platform.
- Proven outcomes with strong retention and expansion motion.

### 5-Year Vision

- Multi-region enterprise footprint.
- Integration ecosystem with education and hiring systems.
- Advanced readiness intelligence and predictive coaching pathways.

### 10-Year Vision

- Global standard for interview readiness measurement and coaching operations.
- Cross-domain assessment intelligence beyond interviews into broader career communication readiness.

---

## 21. Appendix

### Glossary

- Readiness Score: composite indicator of interview preparedness.
- Interview Session: configured mock interview attempt.
- Review Queue: pending report evaluation list for teachers.
- Tenant: institute-level logical partition.

### Terminology

- AI Evaluation: structured model-generated scoring and feedback.
- Confidence Label: reliability indicator for an AI output segment.
- Processing Pipeline: async workflow from media submission to report.

### Abbreviations

- RBAC: role-based access control.
- KPI: key performance indicator.
- SLA: service level agreement.
- UAT: user acceptance testing.

### Assumptions

- Institutions adopt role-based workflows.
- Users consent to media processing where required.
- AI providers and storage services remain available via abstracted integrations.

### Open Questions

- Which regions and compliance regimes are first priority?
- What billing model is final for early commercial launch?
- What level of teacher review is mandatory before student visibility?

### Future Ideas

- AI coach drills between interview sessions.
- Cohort benchmarking and longitudinal readiness pathways.
- Recruiter-facing readiness APIs and integrations.
- Scenario simulation for industry-specific interview contexts.

---

This Product Bible is the canonical product blueprint for MockMate AI. Product, design, engineering, AI, QA, and go-to-market decisions should trace back to this document and update it when significant scope or strategy changes occur.