# MockMate AI Software Requirements Specification

Document owner: Product and Engineering  
Product: MockMate AI  
Document type: Software Requirements Specification  
Target release scope: Commercial SaaS platform  
Status: Draft master blueprint  
Last updated: 2026-06-26

## 1. Executive Summary

MockMate AI is an AI-powered interview preparation SaaS platform for students applying to study abroad and the institutes, teachers, and consultants who support them. The product helps students prepare for IELTS Speaking, university interviews, embassy interviews, visa interviews, scholarship interviews, internship interviews, and job interviews.

The platform uses student profile data, uploaded documents, target country, target university, course details, and academic information to generate personalized mock interview experiences. Its flagship capability is an AI-powered Video Interview Engine that evaluates verbal communication, answer quality, professional presence, and non-verbal presentation signals such as eye contact, facial expressions, and body language.

MockMate AI is designed as a multi-role, institute-ready SaaS product. Students practice and receive feedback. Teachers review performance and coach students. Institute Admins manage students, teachers, batches, and institute-level outcomes. Super Admins manage platform operations, institutes, configuration, and global product governance.

This SRS defines the functional, non-functional, AI, security, analytics, reporting, deployment, and operational requirements required to guide future product design and engineering implementation.

## 2. Vision Statement

MockMate AI will become the trusted AI interview preparation workspace for study-abroad institutes and students, helping learners practice realistic interviews, receive personalized feedback, improve communication confidence, and increase their readiness for high-stakes academic, visa, scholarship, and career interviews.

The product should combine the structure of an enterprise SaaS platform with the empathy of a personal interview coach.

## 3. Business Objectives

1. Enable study-abroad institutes to offer scalable, personalized interview preparation.
2. Reduce manual teacher workload for repetitive mock interviews and first-level feedback.
3. Improve student readiness through measurable, repeatable practice sessions.
4. Differentiate institutes by offering AI-enabled coaching and progress reports.
5. Create a subscription-based SaaS business that can support multiple institutes and user tiers.
6. Build a defensible product through AI evaluation workflows, interview datasets, rubrics, and institute analytics.
7. Support future expansion into employment, internship, corporate training, and language preparation markets.

## 4. Product Goals

### 4.1 Student Goals

- Upload relevant documents and profile information easily.
- Practice interviews tailored to personal goals and application context.
- Receive understandable feedback on communication and answer quality.
- Track progress across multiple practice sessions.
- Build confidence before real interviews.

### 4.2 Teacher Goals

- View student readiness and practice history.
- Identify students who need intervention.
- Review AI-generated feedback and add human coaching notes.
- Manage assigned students and batches efficiently.

### 4.3 Institute Admin Goals

- Manage students, teachers, batches, interview plans, and institute settings.
- Monitor institute-wide progress and engagement.
- Generate reports for students, counselors, and management.
- Standardize interview preparation quality across teachers.

### 4.4 Super Admin Goals

- Manage all institutes, subscriptions, platform configuration, AI settings, and operational health.
- Monitor usage, performance, errors, and abuse.
- Configure product plans, limits, and feature access.

## 5. Success Metrics and KPIs

### 5.1 Business KPIs

| KPI | Definition | Target Direction |
| --- | --- | --- |
| Monthly Active Institutes | Institutes with active student or teacher usage in a month | Increase |
| Monthly Active Students | Students who complete at least one meaningful action in a month | Increase |
| Interview Completion Rate | Started interviews that are completed successfully | Increase |
| Paid Conversion Rate | Trial or demo institutes converted to paid plans | Increase |
| Retention Rate | Institutes continuing subscription after renewal period | Increase |
| Churn Rate | Institutes canceling or becoming inactive | Decrease |
| Average Revenue Per Institute | Subscription and usage revenue per institute | Increase |

### 5.2 Product KPIs

| KPI | Definition | Target Direction |
| --- | --- | --- |
| Document Upload Completion | Students who finish required profile setup | Increase |
| AI Feedback Delivery Time | Time from interview submission to feedback availability | Decrease |
| Student Readiness Improvement | Score improvement across practice sessions | Increase |
| Teacher Review Completion | Pending reviews completed by teachers | Increase |
| Repeat Practice Rate | Students completing multiple interviews | Increase |
| Report Download Rate | Reports generated and downloaded by users | Increase |

### 5.3 Technical KPIs

| KPI | Definition | Target |
| --- | --- | --- |
| API Availability | Backend uptime excluding planned maintenance | 99.5 percent or higher for early production |
| Interview Processing Success | Interviews processed without system failure | 98 percent or higher |
| Page Load Performance | Core dashboard screens usable after load | Under 3 seconds on standard broadband |
| Error Rate | Failed requests excluding validation errors | Under 1 percent |
| AI Evaluation Reliability | AI output passes schema and quality checks | 99 percent or higher |

## 6. Stakeholders

| Stakeholder | Interest |
| --- | --- |
| Students | Practice, feedback, confidence, readiness |
| Teachers | Review workflow, student coaching, feedback quality |
| Institute Admins | Operational control, reporting, institute performance |
| Super Admins | Platform operations, tenant management, security, billing |
| Study Abroad Consultants | Student outcomes and value-added services |
| Product Team | Roadmap, adoption, usability, retention |
| Engineering Team | Scalable architecture, maintainability, performance |
| AI/ML Team | Prompt quality, evaluation accuracy, fairness, model monitoring |
| Support Team | Issue resolution, user guidance, account support |
| Business Team | Sales, subscriptions, partnerships, revenue |
| Legal/Compliance Advisors | Data privacy, consent, retention, user rights |

## 7. User Personas

### 7.1 Student Persona

Name: Aisha, Study Abroad Applicant  
Age range: 18-28  
Goal: Prepare for IELTS Speaking and university admission interviews.  
Needs: Personalized questions, simple feedback, practice confidence, mobile-friendly access.  
Pain points: Anxiety, unclear expectations, weak speaking fluency, limited teacher availability.  
Success outcome: Understands weaknesses, practices repeatedly, improves readiness score.

### 7.2 Teacher Persona

Name: Rohan, IELTS and Interview Trainer  
Goal: Coach many students without losing quality.  
Needs: Student performance overview, AI-assisted scoring, review queues, comments, reports.  
Pain points: Repetitive interviews, scattered notes, limited time, inconsistent tracking.  
Success outcome: Quickly identifies student needs and gives targeted coaching.

### 7.3 Institute Admin Persona

Name: Meera, Institute Operations Manager  
Goal: Run a structured interview preparation program.  
Needs: User management, batch management, analytics, teacher productivity, reports.  
Pain points: Manual tracking, inconsistent feedback, lack of institute-wide visibility.  
Success outcome: Higher student engagement, better reporting, operational efficiency.

### 7.4 Super Admin Persona

Name: Platform Operations Lead  
Goal: Manage the SaaS platform across institutes.  
Needs: Tenant management, plan limits, system monitoring, configuration, audit logs.  
Pain points: Support load, abuse prevention, model cost control, tenant isolation.  
Success outcome: Stable platform, controlled costs, secure operations, growing subscriptions.

## 8. Product Scope

### 8.1 In Scope

- Multi-role authentication and role-based access.
- Student profile and document intake.
- Resume, SOP, IELTS/PTE/TOEFL score, academic, university, course, and country data capture.
- Personalized interview question generation.
- Video interview recording workflow.
- AI evaluation for speech, answer quality, and professional presentation.
- Teacher review and feedback workflows.
- Student, teacher, institute admin, and super admin dashboards.
- Analytics and reporting.
- Notifications.
- Secure storage and audit-friendly activity tracking.

### 8.2 Out of Scope for Initial Release

- Payment gateway implementation unless prioritized for v1 business launch.
- Native mobile apps.
- Live human interviewer scheduling.
- Real-time human video calls.
- Guaranteed visa, admission, or IELTS outcome prediction.
- Legal immigration advice.
- Automated decision-making that cannot be reviewed by a human.

## 9. Assumptions and Constraints

### 9.1 Assumptions

- Institutes will manage groups of students and teachers.
- Students may access the platform from laptops and mobile devices.
- Video interview quality depends on user device permissions, camera, microphone, and network conditions.
- AI evaluations are advisory and must be presented as coaching feedback.
- Sensitive documents and media require consent, secure storage, and retention controls.

### 9.2 Constraints

- AI model costs must be controlled through rate limits, plan limits, and background processing.
- Video and audio processing may require asynchronous job queues.
- Some evaluation dimensions, especially body language and facial expression, may have accuracy limitations and must be framed responsibly.
- The system must support future multi-tenant scaling.

## 10. Functional Requirements by Module

## 10.1 Authentication and Account Management

### Description

The platform shall allow users to securely sign in, sign out, reset passwords, and access role-specific functionality.

### Business Value

Secure access enables institutes to manage real student data and protects platform trust.

### User Value

Users can access the correct workspace, continue practice, and protect personal information.

### Inputs

- Email address or username.
- Password or future SSO credential.
- Role assignment.
- Institute association.

### Outputs

- Authenticated session.
- Role-specific navigation and permissions.
- Account status and profile context.

### Dependencies

- User database.
- Email notification service.
- Authorization module.
- Audit logging.

### Functional Requirements

- The system shall support login and logout.
- The system shall support password reset through email.
- The system shall enforce active, inactive, suspended, and invited account states.
- The system shall associate users with one or more institutes when required.
- The system shall load permissions based on role and tenant context.
- The system shall expire sessions according to security policy.

### Acceptance Criteria

- A valid active user can log in and access their role dashboard.
- An invalid credential attempt returns a safe, non-revealing error message.
- A suspended user cannot access protected screens.
- Password reset links expire after a configured time window.
- User actions after login are tied to user and institute context in audit logs.

### Edge Cases

- User belongs to multiple institutes.
- Invitation expired before account setup.
- User is deleted or suspended during an active session.
- Password reset email is delayed or blocked.
- Multiple failed login attempts indicate possible abuse.

## 10.2 Role-Based Authorization

### Description

The platform shall enforce different capabilities for Student, Teacher, Institute Admin, and Super Admin roles.

### Business Value

Role separation enables enterprise sales and protects sensitive institute and student data.

### User Value

Users only see tools and data relevant to their responsibilities.

### Inputs

- User role.
- Institute membership.
- Resource ownership.
- Feature plan limits.

### Outputs

- Allowed actions.
- Denied actions with appropriate messaging.
- Role-specific UI and API behavior.

### Dependencies

- Authentication.
- User and tenant models.
- Audit logging.

### Functional Requirements

- The system shall enforce permissions on both frontend and backend.
- The backend shall be the final authority for access control.
- Students shall access only their own data unless explicitly shared.
- Teachers shall access students assigned to them or their batches.
- Institute Admins shall access users and data within their institute.
- Super Admins shall access platform-level operations across institutes.

### Acceptance Criteria

- A student cannot view another student's report by changing an identifier.
- A teacher cannot manage institute billing or global settings.
- An institute admin cannot access another institute's students.
- A super admin can view tenant-level operational data.

### Edge Cases

- User role changes while logged in.
- Teacher assigned to multiple batches.
- Student transferred between teachers or batches.
- Institute is suspended while users are active.

## 10.3 Institute and Tenant Management

### Description

Institute Admins and Super Admins shall manage institute profiles, settings, users, batches, and product access.

### Business Value

Tenant management supports SaaS sales, onboarding, governance, and future billing.

### User Value

Institutes can organize students and teachers in a way that matches real operations.

### Inputs

- Institute name, contact details, region, plan, status.
- Admin users, teacher users, student users.
- Batch and course groupings.
- Feature configuration.

### Outputs

- Institute workspace.
- Role assignments.
- Batch and user lists.
- Usage and status information.

### Dependencies

- Authentication.
- Authorization.
- Analytics.
- Notification service.

### Functional Requirements

- Super Admins shall create, update, suspend, and archive institutes.
- Institute Admins shall manage users within their institute.
- Institute Admins shall create batches and assign teachers and students.
- The system shall support institute-level settings such as allowed interview types and report branding.
- The system shall track institute usage and limits.

### Acceptance Criteria

- A new institute can be created and assigned an Institute Admin.
- An Institute Admin can invite teachers and students.
- A teacher can be assigned to one or more batches.
- Suspending an institute prevents new interviews while preserving data.

### Edge Cases

- Duplicate institute names.
- User invited to the wrong institute.
- Teacher removed from a batch with pending reviews.
- Institute reaches usage limit during active student onboarding.

## 10.4 Student Profile and Onboarding

### Description

Students shall provide personal, academic, and application information needed to generate personalized interview preparation.

### Business Value

Complete student profiles improve AI personalization and increase perceived product value.

### User Value

Students receive questions and feedback relevant to their actual study-abroad goals.

### Inputs

- Name, contact information, preferred language if applicable.
- Academic background.
- IELTS, PTE, TOEFL, or equivalent score.
- Target country.
- Target university.
- Target course.
- Application stage.
- Interview type goals.

### Outputs

- Student profile completeness score.
- Personalized interview context.
- Recommended next steps.

### Dependencies

- Document upload.
- AI document analysis.
- Interview generation.

### Functional Requirements

- The system shall provide a guided onboarding flow for students.
- The system shall show required and optional profile fields.
- The system shall validate score formats and academic details.
- The system shall calculate profile completeness.
- The system shall allow students and authorized staff to update profile information.

### Acceptance Criteria

- A student can complete onboarding with all required fields.
- Missing required fields are clearly shown.
- Profile changes affect future interview personalization.
- Teachers can view student profile context for assigned students.

### Edge Cases

- Student does not have a test score yet.
- Student applies to multiple universities or countries.
- Student changes target course after interviews have been completed.
- Academic information is incomplete or inconsistent.

## 10.5 Document Upload and Management

### Description

Students shall upload resumes, SOPs, test score documents, and optional supporting files for AI analysis and teacher review.

### Business Value

Document intake is the foundation for personalized questions and premium reports.

### User Value

Students can reuse existing application materials to receive more relevant practice.

### Inputs

- Resume file.
- SOP file.
- IELTS/PTE/TOEFL score file.
- Optional academic or admission documents.

### Outputs

- Uploaded file record.
- File processing status.
- Extracted text and metadata where applicable.
- AI analysis summary.

### Dependencies

- Storage service.
- Document analysis service.
- Security scanning.
- Notification service.

### Functional Requirements

- The system shall support configured file types such as PDF, DOC, DOCX, JPG, or PNG where appropriate.
- The system shall enforce file size limits.
- The system shall show upload progress and processing status.
- The system shall allow students to replace outdated documents.
- The system shall maintain document version history if enabled.
- The system shall prevent unauthorized access to stored files.

### Acceptance Criteria

- A valid resume upload is stored and marked for processing.
- Unsupported file types are rejected with clear guidance.
- A teacher can view documents for assigned students.
- A student can see whether each required document is missing, uploaded, processing, failed, or analyzed.

### Edge Cases

- Corrupted file.
- Password-protected PDF.
- Image quality too low for extraction.
- Duplicate upload.
- Upload succeeds but AI extraction fails.
- Student removes a document used in previous reports.

## 10.6 Document Analysis Module

### Description

The system shall analyze uploaded documents and structured profile data to extract relevant interview context.

### Business Value

Automated analysis reduces teacher workload and powers personalization at scale.

### User Value

Students receive interviews tailored to their real background and application.

### Inputs

- Resume text and metadata.
- SOP text and metadata.
- Test score information.
- Academic profile.
- University, course, and country.

### Outputs

- Resume summary.
- SOP intent and motivation summary.
- Strengths and risks.
- Suggested interview themes.
- Missing or inconsistent information alerts.

### Dependencies

- AI module.
- Storage.
- Student profile.
- Prompt library.

### Functional Requirements

- The system shall extract key education, experience, skills, achievements, goals, and gaps from resumes.
- The system shall extract motivation, course fit, country fit, career goals, and credibility signals from SOPs.
- The system shall identify likely interview topics based on student documents.
- The system shall flag contradictions between resume, SOP, scores, and profile fields.
- The system shall store analysis results for reuse in future interviews.

### Acceptance Criteria

- A processed resume produces structured summary fields.
- A processed SOP produces interview-relevant themes.
- AI analysis failures are recoverable and visible to authorized users.
- Future interview generation uses the latest available analysis.

### Edge Cases

- Very short SOP.
- Resume contains unrelated experience.
- SOP is generic or copied.
- Student has career gap.
- Multiple target universities create conflicting personalization context.

## 10.7 Interview Type Selection

### Description

Students or authorized staff shall select the interview type and context for each practice session.

### Business Value

Multiple interview types increase market coverage and product value.

### User Value

Students practice the exact interview format they are preparing for.

### Inputs

- Interview type.
- Difficulty level.
- Duration.
- Target institution or authority.
- Student profile and documents.

### Outputs

- Interview configuration.
- Generated interview plan.
- Session readiness checklist.

### Dependencies

- Interview generation.
- Student profile.
- Prompt templates.

### Functional Requirements

- The system shall support IELTS Speaking, university, embassy, visa, scholarship, internship, and job interview types.
- The system shall allow configured durations or question counts.
- The system shall generate interview flow based on selected type.
- The system shall show required readiness checks before starting a video interview.

### Acceptance Criteria

- A student can start an interview type allowed by their institute or plan.
- Interview type selection affects generated questions and evaluation rubric.
- Unavailable interview types are disabled or hidden based on plan and role.

### Edge Cases

- Student profile is incomplete for a selected interview type.
- Institute disables an interview type.
- User changes interview type after questions are generated.

## 10.8 AI Interview Generation

### Description

The system shall generate personalized interview questions using student context, selected interview type, and configured rubrics.

### Business Value

Personalization differentiates MockMate AI from generic question banks.

### User Value

Students practice questions that reflect their documents, goals, and likely interview scenarios.

### Inputs

- Student profile.
- Document analysis.
- Interview type.
- Difficulty level.
- Target country, university, course, role, or scholarship.
- Prior interview performance.

### Outputs

- Interview question set.
- Section structure.
- Question intent tags.
- Expected answer guidance for evaluation.

### Dependencies

- AI model provider.
- Prompt library.
- Profile and document analysis.
- Interview session module.

### Functional Requirements

- The system shall generate questions tailored to student-specific context.
- The system shall organize questions into sections appropriate to the interview type.
- The system shall avoid generating inappropriate, discriminatory, or irrelevant questions.
- The system shall support regeneration when profile context changes or generation fails.
- The system shall store generated questions for session auditability.

### Acceptance Criteria

- Generated questions reference student context where appropriate.
- The question set matches selected interview type and duration.
- The generated output passes structure validation before being shown.
- Failed generation returns a recoverable error and does not start a broken interview.

### Edge Cases

- AI provider timeout.
- Missing document analysis.
- Student context too sparse.
- Generated questions repeat excessively.
- Prompt output fails required schema.

## 10.9 Video Interview Engine

### Description

The Video Interview Engine shall guide students through a recorded mock interview using camera, microphone, questions, timers, and session controls.

### Business Value

Video interviews are the flagship feature and create the highest differentiation.

### User Value

Students experience realistic interview pressure and receive feedback on communication and presentation.

### Inputs

- Interview configuration.
- Generated questions.
- Camera stream.
- Microphone stream.
- User consent.
- Device permission status.

### Outputs

- Recorded video or segmented media.
- Audio track.
- Session metadata.
- Answer timestamps.
- Processing job for AI evaluation.

### Dependencies

- Browser media permissions.
- Storage.
- Video processing.
- Voice processing.
- AI evaluation engine.
- Notification module.

### Functional Requirements

- The system shall perform camera and microphone readiness checks before starting.
- The system shall display current question, timer, progress, and recording status.
- The system shall record answers according to configured interview flow.
- The system shall allow safe completion of the interview.
- The system shall upload recorded media securely.
- The system shall create a processing job after interview submission.
- The system shall show clear recovery states for permission, network, upload, or processing failures.

### Acceptance Criteria

- A student can complete a full video interview from readiness check to submission.
- Recording status is always visible during active recording.
- The session cannot be submitted without required media unless the interview mode permits it.
- A completed interview appears in the student's history with processing status.

### Edge Cases

- Camera permission denied.
- Microphone permission denied.
- Network drops during upload.
- Browser tab closed during recording.
- User device has no camera.
- Student pauses too long or abandons session.
- Uploaded video is corrupted.

## 10.10 Voice Processing Module

### Description

The system shall process interview audio for transcription, fluency, pronunciation, speaking pace, confidence indicators, and grammar evaluation.

### Business Value

Voice analysis provides measurable coaching data beyond basic question-answer review.

### User Value

Students understand how they sound and what to improve.

### Inputs

- Audio stream or extracted audio file.
- Question timestamps.
- Interview type rubric.
- Student language context if available.

### Outputs

- Transcript.
- Fluency indicators.
- Grammar observations.
- Pronunciation observations.
- Vocabulary analysis.
- Speaking confidence indicators.

### Dependencies

- Speech-to-text provider.
- AI evaluation engine.
- Media processing pipeline.

### Functional Requirements

- The system shall transcribe student answers.
- The system shall align transcripts to questions where possible.
- The system shall identify filler words, long pauses, speaking pace, and incomplete answers where reliable.
- The system shall provide pronunciation and fluency feedback within reasonable accuracy limits.
- The system shall preserve raw transcript and AI-reviewed transcript when correction is applied.

### Acceptance Criteria

- Completed interviews produce transcripts for each answer when audio quality is sufficient.
- Low audio quality is flagged and reflected in confidence of evaluation.
- Voice feedback appears in the final report.

### Edge Cases

- Background noise.
- Multiple speakers.
- Strong accent.
- Low microphone volume.
- Student switches languages.
- Speech-to-text provider returns partial transcript.

## 10.11 Video Processing Module

### Description

The system shall analyze video signals related to eye contact, facial expressions, posture, and body language where technically feasible and ethically appropriate.

### Business Value

Non-verbal feedback strengthens the flagship AI video interview value proposition.

### User Value

Students receive coaching on presentation habits that affect interview confidence.

### Inputs

- Video recording.
- Frame samples.
- Session timestamps.
- Consent and feature availability.

### Outputs

- Eye contact indicators.
- Facial expression observations.
- Body language observations.
- Confidence signals.
- Quality and reliability warnings.

### Dependencies

- Media processing pipeline.
- Computer vision provider or internal model.
- AI evaluation engine.
- Consent and privacy controls.

### Functional Requirements

- The system shall process video only when consent and feature access allow it.
- The system shall estimate eye contact based on camera-facing behavior where technically feasible.
- The system shall identify broad presentation patterns such as frequent looking away, low visibility, or excessive movement.
- The system shall avoid sensitive or unsupported claims about identity, emotion certainty, medical conditions, or personality.
- The system shall include confidence or reliability notes when video quality is poor.

### Acceptance Criteria

- A video interview report includes non-verbal feedback when video processing succeeds.
- Poor lighting or face not visible is reported as a quality limitation.
- The system does not block overall interview feedback if video analysis fails.

### Edge Cases

- Face not visible.
- Multiple faces in frame.
- Poor lighting.
- Camera angle is unusual.
- Student wears glasses or face covering.
- Video frame rate is too low.

## 10.12 AI Evaluation Engine

### Description

The AI Evaluation Engine shall score and explain interview performance across answer quality, language, communication, professionalism, and non-verbal dimensions.

### Business Value

Consistent AI evaluation enables scalable coaching and report generation.

### User Value

Students receive structured, actionable feedback after each interview.

### Inputs

- Interview questions.
- Student transcripts.
- Audio analysis.
- Video analysis.
- Student profile and documents.
- Interview type rubric.
- Prior performance data.

### Outputs

- Overall readiness score.
- Category scores.
- Strengths.
- Improvement areas.
- Question-level feedback.
- Recommended practice plan.
- Teacher review flags.

### Dependencies

- Prompt library.
- Rubric definitions.
- AI provider.
- Voice and video processing.
- Report generation.

### Functional Requirements

- The system shall evaluate answer relevance, completeness, structure, clarity, and professionalism.
- The system shall evaluate grammar, fluency, pronunciation, vocabulary, and speaking confidence based on available inputs.
- The system shall evaluate non-verbal presentation based on available video signals.
- The system shall provide category-level and overall scores.
- The system shall include plain-language feedback and next steps.
- The system shall indicate when confidence is reduced due to missing or poor-quality inputs.
- The system shall allow teacher review, correction, or annotation of AI results.

### Acceptance Criteria

- A completed interview generates a structured evaluation report.
- Scores are consistent with the selected interview rubric.
- The report includes actionable feedback, not only numeric scores.
- Low-confidence areas are clearly marked.
- Teachers can review AI feedback for assigned students.

### Edge Cases

- Transcript is incomplete.
- Student answers are off-topic.
- Student gives very short answers.
- AI output is inconsistent or malformed.
- Some processing modules fail while others succeed.
- Evaluation detects potential copied or memorized answer patterns.

## 10.13 Feedback and Coaching Module

### Description

The system shall present AI feedback and improvement suggestions in a student-friendly and teacher-reviewable format.

### Business Value

Actionable feedback drives repeat usage and measurable improvement.

### User Value

Students know exactly what to practice next.

### Inputs

- AI evaluation.
- Teacher notes.
- Prior performance.
- Interview type.

### Outputs

- Strengths.
- Improvement areas.
- Practice recommendations.
- Teacher comments.
- Next interview recommendation.

### Dependencies

- AI evaluation engine.
- Teacher review workflow.
- Notification service.

### Functional Requirements

- The system shall show feedback by category and question.
- The system shall prioritize the most important improvement areas.
- The system shall support teacher notes or overrides.
- The system shall generate recommended practice actions.
- The system shall show progress compared with prior interviews when available.

### Acceptance Criteria

- A student can view feedback after processing completes.
- Feedback uses clear language and avoids unexplained AI terminology.
- Teacher notes are visually distinguishable from AI feedback.
- Students can identify at least one concrete next action from the report.

### Edge Cases

- No prior interview for comparison.
- Teacher disagrees with AI score.
- Feedback cannot be generated for one category.
- Student disputes feedback.

## 10.14 Teacher Review Module

### Description

Teachers shall review assigned student interviews, inspect AI feedback, add notes, and mark review status.

### Business Value

Teacher review creates human trust and supports hybrid AI-human coaching.

### User Value

Students receive more credible feedback and teachers focus on higher-value coaching.

### Inputs

- Completed interview reports.
- AI evaluation.
- Student profile.
- Teacher comments.
- Review status.

### Outputs

- Reviewed report.
- Teacher feedback notes.
- Student notification.
- Review history.

### Dependencies

- Authorization.
- Reports.
- Notifications.
- Audit logging.

### Functional Requirements

- Teachers shall view a review queue for assigned students.
- Teachers shall filter by batch, status, interview type, score, and date.
- Teachers shall add comments at overall and question levels.
- Teachers shall mark a report as reviewed.
- Teachers shall flag a student for follow-up.

### Acceptance Criteria

- A teacher can open an assigned student's completed interview report.
- A teacher can add feedback and save it.
- A reviewed report updates the student's view and review status.
- Unauthorized teachers cannot access reports outside their assignment.

### Edge Cases

- Student is reassigned while review is pending.
- Report changes after teacher started reviewing.
- Teacher comment is saved but notification fails.

## 10.15 Dashboards

### Description

Each role shall have a dashboard tailored to its key workflows and decisions.

### Business Value

Dashboards increase engagement, operational visibility, and perceived platform value.

### User Value

Users quickly understand what needs attention.

### Inputs

- User role.
- Student activity.
- Interview results.
- Review status.
- Institute data.

### Outputs

- Role-specific summary cards.
- Action queues.
- Charts and lists.
- Alerts and recommendations.

### Dependencies

- Analytics.
- Reports.
- Authorization.

### Functional Requirements

- Students shall see upcoming or recommended interviews, readiness, recent feedback, and profile completion.
- Teachers shall see review queues, assigned students, and batch performance.
- Institute Admins shall see institute KPIs, usage, batches, teachers, and student progress.
- Super Admins shall see platform health, institute activity, usage, and operational alerts.

### Acceptance Criteria

- Each role lands on the correct dashboard after login.
- Dashboard data respects permissions and tenant boundaries.
- Empty states guide users toward the next action.
- Dashboard metrics match underlying records.

### Edge Cases

- New user has no activity.
- Large institute has thousands of records.
- Analytics aggregation is delayed.
- User has multiple roles or institute memberships.

## 10.16 Analytics Module

### Description

The platform shall provide analytics for student progress, teacher workload, institute performance, and platform operations.

### Business Value

Analytics help institutes prove value and help the SaaS team improve retention.

### User Value

Users can track progress and make better decisions.

### Inputs

- Interview sessions.
- Evaluation scores.
- User activity.
- Review status.
- Institute and batch metadata.

### Outputs

- Student progress trends.
- Batch performance.
- Teacher review workload.
- Institute engagement metrics.
- Platform usage metrics.

### Dependencies

- Event tracking.
- Reporting.
- Database aggregation.
- Authorization.

### Functional Requirements

- The system shall track interview starts, completions, processing outcomes, report views, and teacher reviews.
- The system shall provide student-level progress over time.
- The system shall provide batch and institute-level analytics.
- The system shall provide Super Admin operational analytics.
- The system shall support filtering by date range, interview type, batch, teacher, and status.

### Acceptance Criteria

- Institute Admins can view aggregate metrics for their institute only.
- Teachers can view assigned student and batch metrics.
- Students can view only their own progress.
- Super Admins can view platform-wide metrics.

### Edge Cases

- Insufficient data for trends.
- Student deleted or archived.
- Time zone differences.
- Delayed processing affects recent analytics.

## 10.17 Report Generation Module

### Description

The system shall generate readable interview reports for students, teachers, and institute admins.

### Business Value

Reports create shareable value, support coaching, and improve institute credibility.

### User Value

Students and teachers can review progress outside the live interview flow.

### Inputs

- AI evaluation results.
- Teacher comments.
- Student profile.
- Interview metadata.
- Institute branding configuration.

### Outputs

- Web report.
- Downloadable PDF report in future or configured release.
- Score summary.
- Category breakdown.
- Question-level feedback.
- Recommended actions.

### Dependencies

- AI evaluation.
- Analytics.
- Document rendering.
- Storage.

### Functional Requirements

- The system shall display reports in the application.
- The system shall support report status such as processing, ready, reviewed, failed, and archived.
- The system shall support teacher comments in reports.
- The system shall support institute branding when configured.
- The system shall support PDF export when prioritized.

### Acceptance Criteria

- A completed evaluation creates a report record.
- A student can view a ready report.
- A teacher can review and annotate an assigned report.
- A failed report shows a clear retry or support path.

### Edge Cases

- Evaluation partially complete.
- PDF generation fails.
- Teacher updates notes after student has downloaded report.
- Institute branding is incomplete.

## 10.18 Notification Module

### Description

The system shall notify users about important events such as invitations, upload failures, completed reports, review requests, and admin alerts.

### Business Value

Notifications increase engagement and reduce support burden.

### User Value

Users know when action is required or results are ready.

### Inputs

- Event triggers.
- User preferences.
- Role and tenant context.
- Notification templates.

### Outputs

- Email notifications.
- In-app notifications.
- Future SMS or messaging integrations.

### Dependencies

- User account module.
- Email provider.
- Event logging.

### Functional Requirements

- The system shall send invitations and password reset emails.
- The system shall notify students when reports are ready.
- The system shall notify teachers about pending reviews.
- The system shall notify admins about important institute events.
- The system shall support notification read and unread states for in-app notifications.
- The system shall respect notification preferences where applicable.

### Acceptance Criteria

- A student receives notification when interview feedback is ready.
- A teacher sees pending review notifications.
- Failed notification delivery is logged for retry or support review.
- Notification content does not expose sensitive details unnecessarily.

### Edge Cases

- Email provider outage.
- User unsubscribes from non-essential emails.
- Duplicate event triggers.
- Notification sent to deactivated user.

## 10.19 Search, Filter, and Sorting

### Description

The platform shall provide search, filter, and sort capabilities for students, interviews, reports, teachers, batches, and institutes.

### Business Value

Operational usability improves for institutes with large user bases.

### User Value

Users can quickly find the records they need.

### Inputs

- Search query.
- Filters.
- Sort field and direction.
- Pagination state.

### Outputs

- Filtered and sorted results.
- Result count.
- Empty state when no records match.

### Dependencies

- Database indexing.
- Authorization.
- Role-specific data access.

### Functional Requirements

- The system shall support search by relevant names and identifiers.
- The system shall support filters by role-specific attributes.
- The system shall support pagination for large datasets.
- The system shall preserve filters where useful during navigation.

### Acceptance Criteria

- A teacher can filter assigned students by batch and status.
- An Institute Admin can search users in their institute.
- A Super Admin can search institutes.
- Unauthorized records are never returned in search results.

### Edge Cases

- Special characters in search query.
- Very large result sets.
- Deleted or archived records.
- User search across tenant boundaries.

## 10.20 Admin Configuration

### Description

Admins shall configure institute and platform-level settings such as allowed interview types, usage limits, plans, branding, and AI behavior controls.

### Business Value

Configuration enables monetization, governance, and operational flexibility.

### User Value

Institutes can adapt the product to their programs.

### Inputs

- Feature flags.
- Plan limits.
- Branding settings.
- Interview type availability.
- AI processing settings.

### Outputs

- Effective configuration for users.
- Audit history of changes.

### Dependencies

- Authorization.
- Tenant management.
- AI modules.
- Audit logging.

### Functional Requirements

- Institute Admins shall manage allowed institute-level settings.
- Super Admins shall manage platform-level settings.
- The system shall record configuration changes.
- The system shall apply configuration consistently across UI and backend.

### Acceptance Criteria

- Disabling an interview type prevents new sessions of that type.
- Plan limits are enforced before costly AI operations.
- Configuration changes are visible in audit logs.

### Edge Cases

- Setting changed during active interview.
- Invalid configuration combination.
- Feature enabled for institute but unavailable globally.

## 11. User Stories

### 11.1 Student Stories

- As a student, I want to upload my resume and SOP so that my interview questions are personalized.
- As a student, I want to choose an interview type so that I can practice the right scenario.
- As a student, I want to complete a video mock interview so that I can experience real interview pressure.
- As a student, I want to receive feedback on speaking, grammar, fluency, and confidence so that I know what to improve.
- As a student, I want to view my progress over time so that I can see whether I am improving.
- As a student, I want clear upload and processing statuses so that I know what is happening.

### 11.2 Teacher Stories

- As a teacher, I want to see students assigned to me so that I can manage my coaching workload.
- As a teacher, I want to review AI feedback so that I can add human guidance.
- As a teacher, I want to filter pending reviews by batch so that I can prioritize work.
- As a teacher, I want to view question-level answers so that I can give targeted feedback.
- As a teacher, I want to flag students who need extra support so that the institute can intervene.

### 11.3 Institute Admin Stories

- As an Institute Admin, I want to invite teachers and students so that my institute can use the platform.
- As an Institute Admin, I want to organize students into batches so that reporting matches our operations.
- As an Institute Admin, I want institute-level analytics so that I can measure program performance.
- As an Institute Admin, I want to generate reports so that I can share progress with students and stakeholders.
- As an Institute Admin, I want to configure available interview types so that the platform matches our services.

### 11.4 Super Admin Stories

- As a Super Admin, I want to create and manage institutes so that I can operate the SaaS business.
- As a Super Admin, I want to monitor platform usage so that I can manage costs and growth.
- As a Super Admin, I want to configure feature access so that plans and subscriptions can be enforced.
- As a Super Admin, I want audit logs so that I can investigate issues and support customers.
- As a Super Admin, I want to monitor AI processing failures so that I can maintain service quality.

## 12. Acceptance Criteria Summary

Global acceptance criteria apply across all modules:

- All protected actions require authentication.
- All resource access is checked against role, tenant, and ownership rules.
- User-facing errors are clear, safe, and actionable.
- Long-running operations show status and do not leave users uncertain.
- AI outputs are structured, validated, and recoverable when generation fails.
- Sensitive files and media are only accessible to authorized users.
- Dashboards and reports display data consistent with backend records.
- Empty, loading, error, and success states exist for all major workflows.
- Critical actions are logged.
- Features degrade gracefully when optional processing modules fail.

## 13. Feature Prioritization - MoSCoW

### Must Have - v1 Foundation

- Authentication and role-based authorization.
- Institute and user management.
- Student profile onboarding.
- Document upload and management.
- Resume and SOP analysis.
- Interview type selection.
- Personalized interview question generation.
- Video interview recording workflow.
- Audio transcription.
- Core AI evaluation for answers, grammar, fluency, vocabulary, and relevance.
- Student report view.
- Teacher review workflow.
- Role-specific dashboards.
- Basic analytics.
- Email and in-app notifications for core events.
- Security, tenant isolation, audit logging, and error handling.

### Should Have - v1.5 or v2

- PDF report export.
- Advanced non-verbal video analysis.
- Batch-level analytics.
- Teacher workload analytics.
- Institute branding for reports.
- Interview retake recommendations.
- Prompt regression testing workflow.
- Configurable plan limits.
- Admin-controlled interview type availability.

### Could Have - Later Releases

- SSO for enterprise institutes.
- Payment and subscription management.
- SMS or WhatsApp notifications.
- Mobile app.
- Live teacher interview scheduling.
- Advanced benchmarking against institute averages.
- AI coach practice drills between interviews.
- Multi-language feedback.

### Won't Have Initially

- Guaranteed admission or visa prediction.
- Fully automated legal or immigration advice.
- Native mobile applications.
- Real-time human interview calls.
- Public marketplace of teachers.

## 14. User Flow Diagrams - Textual

### 14.1 Student Onboarding Flow

1. Student receives invitation or creates account.
2. Student verifies account and logs in.
3. Student lands on onboarding checklist.
4. Student enters academic and application information.
5. Student uploads resume, SOP, and score documents.
6. System validates files and starts document processing.
7. System shows profile completeness and readiness for interviews.
8. Student proceeds to interview selection.

### 14.2 Student Video Interview Flow

1. Student selects interview type.
2. System checks required profile and document context.
3. System generates personalized questions.
4. Student reviews interview instructions and grants camera/microphone permission.
5. System runs readiness checks.
6. Student starts interview.
7. System displays questions, timer, progress, and recording state.
8. Student completes all questions.
9. System uploads recording and creates processing job.
10. System processes transcript, voice, video, and AI evaluation.
11. Student receives notification when report is ready.
12. Student views feedback and recommended next steps.

### 14.3 Teacher Review Flow

1. Teacher logs in.
2. Teacher views review queue.
3. Teacher filters by batch, interview type, or status.
4. Teacher opens student report.
5. Teacher reviews AI scores, transcript, and feedback.
6. Teacher adds comments or corrections.
7. Teacher marks report as reviewed.
8. Student is notified of reviewed feedback.

### 14.4 Institute Admin Management Flow

1. Institute Admin logs in.
2. Admin creates batches and invites teachers.
3. Admin imports or invites students.
4. Admin assigns students to batches and teachers.
5. Admin monitors completion and readiness metrics.
6. Admin exports or views reports for program tracking.

### 14.5 Super Admin Tenant Flow

1. Super Admin logs in.
2. Super Admin creates institute tenant.
3. Super Admin configures plan, limits, and feature access.
4. Super Admin assigns initial Institute Admin.
5. Super Admin monitors tenant activity and platform health.
6. Super Admin investigates alerts or support issues through logs and audit history.

## 15. Screen Inventory

### 15.1 Public and Auth Screens

- Landing or product entry page.
- Login.
- Forgot password.
- Reset password.
- Invitation acceptance.
- Account setup.
- Unauthorized access.
- Error pages.

### 15.2 Student Screens

- Student dashboard.
- Onboarding checklist.
- Profile details.
- Academic information.
- Document upload and document status.
- Interview type selection.
- Interview setup and readiness check.
- Video interview room.
- Interview processing status.
- Interview history.
- Report detail.
- Progress analytics.
- Notifications.
- Settings.

### 15.3 Teacher Screens

- Teacher dashboard.
- Assigned students.
- Student profile detail.
- Review queue.
- Interview report review.
- Batch overview.
- Teacher analytics.
- Notifications.
- Settings.

### 15.4 Institute Admin Screens

- Institute admin dashboard.
- Student management.
- Teacher management.
- Batch management.
- Invitations.
- Institute analytics.
- Reports.
- Institute settings.
- Branding settings.
- Usage and limits.
- Notifications.

### 15.5 Super Admin Screens

- Super admin dashboard.
- Institute management.
- Institute detail.
- Global user management.
- Plan and feature configuration.
- Platform analytics.
- AI processing monitor.
- System logs and audit trails.
- Notification templates.
- Global settings.

## 16. Module Breakdown

| Module | Primary Responsibility |
| --- | --- |
| Auth | Login, logout, reset, sessions, account states |
| Authorization | RBAC, tenant isolation, ownership checks |
| User Management | Users, roles, invitations, assignments |
| Institute Management | Tenants, batches, settings, feature access |
| Student Profile | Academic and application context |
| Document Management | Uploads, storage, versions, statuses |
| Document Analysis | Resume, SOP, scores, profile extraction |
| Interview Generation | Personalized question creation and interview plans |
| Video Interview | Recording, timers, media upload, session state |
| Voice Processing | Transcription, fluency, pronunciation, grammar inputs |
| Video Processing | Eye contact, facial expression, body language inputs |
| AI Evaluation | Scoring, feedback, recommendations, rubrics |
| Teacher Review | Review queues, notes, overrides, follow-up flags |
| Reports | Report display, export, history, status |
| Analytics | Student, teacher, institute, platform metrics |
| Notifications | Email and in-app event messaging |
| Admin Configuration | Feature flags, plans, limits, branding |
| Storage | Secure file and media storage |
| Logging and Monitoring | Errors, audit trail, health, processing observability |

## 17. Permissions Matrix

| Capability | Student | Teacher | Institute Admin | Super Admin |
| --- | --- | --- | --- | --- |
| View own dashboard | Yes | Yes | Yes | Yes |
| Manage own profile | Yes | Limited | Limited | Limited |
| Upload own documents | Yes | No | Optional assisted upload | No |
| View own reports | Yes | No | No | No |
| Start own interview | Yes | No | No | No |
| View assigned student profiles | No | Yes | Yes | Yes |
| View assigned student reports | No | Yes | Yes | Yes |
| Add teacher feedback | No | Yes | Optional | No |
| Manage assigned batches | No | Limited | Yes | Yes |
| Invite students | No | Optional | Yes | Yes |
| Invite teachers | No | No | Yes | Yes |
| Manage institute settings | No | No | Yes | Yes |
| View institute analytics | No | Limited | Yes | Yes |
| Manage all institutes | No | No | No | Yes |
| Configure platform features | No | No | No | Yes |
| View platform operations | No | No | No | Yes |
| Access audit logs | No | No | Limited institute logs | Yes |
| Suspend users | No | No | Institute users only | Yes |
| Delete or archive data | Limited own requests | No | Limited by policy | Yes by policy |

Notes:

- Backend authorization is mandatory for every protected resource.
- Tenant isolation applies to all non-super-admin data access.
- Deletion may be soft-delete or archive depending on retention requirements.

## 18. AI Module Specifications

### 18.1 AI Architecture Requirements

The AI system shall be modular, auditable, and testable. Prompt templates, rubrics, model settings, and output schemas shall be versioned as product assets.

### 18.2 AI Capabilities

- Resume analysis.
- SOP analysis.
- Test score interpretation.
- Interview question generation.
- Answer evaluation.
- Feedback generation.
- Practice recommendations.
- Report summarization.

### 18.3 AI Inputs

- Student profile.
- Uploaded document text.
- Interview type.
- Rubric.
- Prior performance.
- Teacher notes where applicable.

### 18.4 AI Outputs

- Structured analysis.
- Structured question sets.
- Structured scoring results.
- Human-readable feedback.
- Confidence and limitation notes.
- Teacher review flags.

### 18.5 AI Governance Requirements

- AI outputs shall be validated before persistence.
- AI outputs shall avoid unsupported claims.
- AI outputs shall not guarantee visas, admissions, scholarships, or jobs.
- AI feedback shall be explainable enough for student and teacher review.
- Prompt changes shall be versioned.
- AI failures shall be logged with safe diagnostic information.
- Sensitive student data shall not be used outside approved processing flows.

### 18.6 AI Quality Controls

- Schema validation for generated outputs.
- Rubric alignment checks.
- Prompt regression test sets.
- Random sample review by internal team or teachers.
- Monitoring for repetitive, generic, or low-quality feedback.
- Flags for low-confidence evaluations.

## 19. Video Interview Module Specification

### 19.1 Interview Session States

| State | Description |
| --- | --- |
| Draft | Interview configured but not started |
| Ready Check | Device and permission checks in progress |
| Generated | Questions generated and session ready |
| In Progress | Student is actively recording |
| Uploading | Media is being uploaded |
| Submitted | Interview complete and queued for processing |
| Processing | AI and media analysis running |
| Report Ready | Feedback available |
| Reviewed | Teacher has reviewed or annotated |
| Failed | Interview or processing failed |
| Archived | Session preserved but no longer active |

### 19.2 Required UI Behaviors

- Show camera and microphone permission status.
- Show recording indicator during recording.
- Show current question and progress.
- Show timer or answer time remaining when configured.
- Provide clear end interview action.
- Prevent accidental loss of recording where possible.
- Show processing status after submission.

### 19.3 Processing Requirements

- Media upload shall be resumable or recoverable where feasible.
- Processing shall run asynchronously for long media files.
- Processing failures shall not delete uploaded source media automatically unless policy requires it.
- Students shall be notified when processing completes or fails.

## 20. AI Evaluation Engine Specification

### 20.1 Evaluation Dimensions

| Dimension | Description |
| --- | --- |
| Eye Contact | Camera-facing attention and gaze consistency where detectable |
| Facial Expressions | Broad presentation expressiveness, with caution and confidence limits |
| Body Language | Posture, movement, visibility, and professional presence indicators |
| Speaking Confidence | Pace, hesitation, clarity, and delivery consistency |
| Fluency | Continuity, pauses, filler words, and answer flow |
| Grammar | Sentence correctness and clarity |
| Pronunciation | Understandability and pronunciation concerns where detectable |
| Vocabulary | Word choice, range, appropriateness, and repetition |
| Answer Quality | Relevance, completeness, structure, examples, and specificity |
| Professionalism | Tone, preparedness, clarity, and interview suitability |

### 20.2 Scoring Requirements

- Each dimension shall support a score and explanatory feedback.
- Overall score shall be calculated using interview-type-specific weights.
- Score calculations shall be transparent enough to document.
- Reports shall distinguish measured signals from AI interpretation.
- Missing inputs shall reduce confidence instead of forcing false precision.

### 20.3 Feedback Requirements

- Feedback shall include strengths.
- Feedback shall include top improvement areas.
- Feedback shall include question-level notes where possible.
- Feedback shall include recommended practice actions.
- Feedback shall be appropriate for student emotional safety and confidence.

## 21. Analytics Module Specification

### 21.1 Student Analytics

- Readiness score over time.
- Category score trends.
- Interview completion history.
- Improvement areas repeated across sessions.
- Practice recommendations.

### 21.2 Teacher Analytics

- Assigned students.
- Pending reviews.
- Average student readiness by batch.
- Students at risk.
- Review completion activity.

### 21.3 Institute Analytics

- Active students.
- Interviews started and completed.
- Average readiness score.
- Batch comparison.
- Teacher workload.
- Student engagement.
- Report completion and review rates.

### 21.4 Platform Analytics

- Active institutes.
- Active users.
- AI processing volume.
- Failure rates.
- Storage usage.
- Feature usage.
- Plan and limit utilization.

## 22. Report Generation Module Specification

### 22.1 Report Sections

- Student and interview summary.
- Overall readiness score.
- Category score breakdown.
- Question-level answer feedback.
- Language and communication feedback.
- Non-verbal presentation feedback where available.
- Strengths.
- Improvement priorities.
- Recommended next practice plan.
- Teacher comments.
- Processing limitations or confidence notes.

### 22.2 Report Requirements

- Reports shall be available in-app for v1.
- PDF export should be supported when prioritized.
- Reports shall preserve the evaluation version used.
- Reports shall indicate whether teacher review is pending or complete.
- Reports shall support institute branding where configured.

## 23. Notification Module Specification

### 23.1 Notification Events

- Account invitation.
- Password reset.
- Document upload failed.
- Document analysis completed.
- Interview report ready.
- Teacher review requested.
- Teacher review completed.
- Student follow-up flagged.
- Institute usage limit warning.
- System or processing failure requiring admin attention.

### 23.2 Notification Channels

- Email for account and important workflow events.
- In-app notifications for product activity.
- Future SMS or messaging channels when prioritized.

### 23.3 Notification Requirements

- Notifications shall be role-aware.
- Sensitive data shall not be exposed unnecessarily in notification previews.
- Failed notifications shall be logged.
- Duplicate notifications shall be prevented where possible.

## 24. Non-Functional Requirements

### 24.1 Reliability

- The system shall recover gracefully from AI provider and media processing failures.
- The system shall preserve user progress during long-running workflows where feasible.
- The system shall support retry for failed background jobs.

### 24.2 Maintainability

- The system shall use modular architecture by domain.
- Business logic shall be separated from route handlers and UI views.
- AI prompt assets shall be versioned and reviewable.
- Configuration shall be environment-based.

### 24.3 Usability

- Core workflows shall be understandable without training.
- Student feedback shall be written in plain language.
- Empty states shall guide next actions.
- Admin screens shall support efficient scanning and filtering.

### 24.4 Compatibility

- The web application shall support current stable versions of major browsers.
- Video interview functionality shall clearly detect unsupported browsers or devices.
- Mobile responsiveness shall support key student workflows.

## 25. Security Requirements

- All protected endpoints and screens shall require authentication.
- Role-based access shall be enforced server-side.
- Tenant isolation shall be mandatory for institute data.
- Files and media shall be stored securely and accessed through authorized flows.
- Passwords shall be hashed using secure industry-standard methods.
- Sessions and tokens shall have expiration and revocation strategy.
- Sensitive data shall be encrypted in transit.
- Encryption at rest shall be used for production storage where supported.
- Audit logs shall track critical admin and data access actions.
- The system shall prevent common web vulnerabilities such as injection, XSS, CSRF where applicable, and insecure direct object references.
- Rate limits shall protect authentication and costly AI operations.
- Real secrets shall never be committed to the repository.
- Data retention and deletion policies shall be defined before production launch.

## 26. Performance Requirements

- Authenticated dashboard initial load should become usable within 3 seconds on standard broadband.
- Common API requests should respond within 500ms to 1.5s excluding AI and media processing.
- AI and video processing shall run asynchronously when expected to exceed normal request time.
- Upload progress shall be visible for large files and videos.
- Tables shall support pagination or virtualization for large datasets.
- The system shall avoid blocking UI during background processing.
- Processing queues shall be monitored for backlog.

## 27. Accessibility Requirements

- The application shall target WCAG 2.1 AA.
- Interactive controls shall be keyboard accessible.
- Focus states shall be visible.
- Form fields shall have labels and accessible validation messages.
- Color shall not be the only way to communicate status.
- Video interview controls shall have accessible labels.
- Reports shall use readable typography and sufficient contrast.
- The UI shall support browser zoom up to at least 200 percent without core workflow failure.
- Reduced-motion preferences shall be respected for non-essential animation.

## 28. Scalability Considerations

- The architecture shall support multiple institutes with tenant isolation.
- Long-running AI, video, and voice processing shall use background workers or equivalent asynchronous processing.
- Storage architecture shall support growth in uploaded documents and videos.
- Analytics should use aggregation strategies as data volume grows.
- AI provider usage should be controlled through queues, quotas, caching, and plan limits.
- Database indexes shall support common filters such as institute, user, batch, interview status, and date.
- The system shall support horizontal scaling of stateless web services.
- Feature flags and configuration shall support gradual rollout.

## 29. Deployment Requirements

- The system shall support separate development, staging, and production environments.
- Environment variables shall configure secrets, database URLs, storage providers, AI provider keys, email providers, and feature flags.
- Deployment shall support frontend, backend, database, worker, and storage components.
- Database migrations shall be part of the release process.
- CI/CD shall run tests and checks before deployment.
- Production shall include health checks for API, workers, database connectivity, and external dependencies.
- Rollback strategy shall be defined for failed deployments.
- Logs and metrics shall be available after deployment.

## 30. Error Handling Strategy

### 30.1 User-Facing Errors

- Errors shall be clear, concise, and actionable.
- Errors shall not reveal sensitive system details.
- Validation errors shall appear close to the relevant field.
- Long-running failures shall show retry or support options.

### 30.2 System Errors

- Backend errors shall be logged with request context.
- AI provider failures shall be captured with safe metadata.
- Media processing failures shall preserve job state for retry or investigation.
- External service outages shall degrade gracefully where possible.

### 30.3 Common Error States

- Invalid login.
- Unauthorized access.
- Upload failed.
- Unsupported file type.
- Document processing failed.
- Interview generation failed.
- Camera or microphone unavailable.
- Media upload interrupted.
- AI evaluation failed.
- Report generation failed.

## 31. Logging and Monitoring Strategy

### 31.1 Application Logging

- Log authentication events, excluding secrets.
- Log role and permission failures.
- Log file upload and processing transitions.
- Log interview session state transitions.
- Log AI request lifecycle with safe identifiers.
- Log report generation status.
- Log notification delivery status.

### 31.2 Audit Logging

Audit logs shall capture:

- User creation, invitation, suspension, and role changes.
- Institute creation and settings changes.
- Access to sensitive reports or documents where required.
- Configuration changes.
- Data deletion or archive events.

### 31.3 Monitoring

The system shall monitor:

- API availability and latency.
- Error rate.
- Queue backlog.
- AI provider failure rate.
- Media processing success rate.
- Storage usage.
- Email delivery failures.
- Database performance.
- Tenant usage thresholds.

### 31.4 Alerting

Alerts should be configured for:

- High error rates.
- AI processing backlog.
- Video processing failure spikes.
- Authentication abuse patterns.
- Storage threshold warnings.
- Database connectivity issues.
- Critical background worker failures.

## 32. Data and Privacy Requirements

- Student documents, transcripts, videos, and reports are sensitive data.
- Consent shall be captured before recording or video analysis.
- Users shall be informed how media and documents are used.
- Access to student data shall be limited by role and assignment.
- Data retention rules shall be configurable or documented by policy.
- Production data shall not be used in development environments without approved anonymization.
- AI processing shall follow approved data handling practices.
- Downloaded reports shall avoid exposing unnecessary sensitive data.

## 33. Compliance and Ethical AI Considerations

- AI evaluations shall be presented as coaching guidance, not final decisions.
- The system shall avoid making legally sensitive immigration or admission guarantees.
- Non-verbal analysis shall avoid unsupported emotional, personality, health, or identity claims.
- Bias and fairness risks shall be reviewed for scoring and feedback patterns.
- Students should be able to receive human review where institutes support it.
- The system shall include confidence or limitation notes when input quality affects evaluation.

## 34. Dependencies and Integrations

Potential integrations include:

- AI model provider.
- Speech-to-text provider.
- Video processing or computer vision provider.
- Email provider.
- Cloud object storage.
- PostgreSQL database.
- Monitoring and logging tools.
- Future payment provider.
- Future SSO identity provider.

Each integration shall be abstracted to allow replacement or multi-provider strategy where practical.

## 35. Future Roadmap

### v1 - Commercial MVP

Focus: Core institute-ready interview preparation workflow.

- Multi-role authentication and tenant model.
- Student onboarding and document upload.
- Resume and SOP analysis.
- Personalized question generation.
- Video interview recording.
- Audio transcription.
- Core AI evaluation.
- Student reports.
- Teacher review workflow.
- Basic institute dashboard.
- Notifications.
- Security, audit logging, and deployment foundation.

### v2 - Advanced Institute Platform

Focus: Stronger analytics, configurability, and reporting.

- Advanced video analysis.
- PDF reports with institute branding.
- Batch and teacher analytics.
- Plan limits and subscription-ready configuration.
- Prompt regression testing pipeline.
- AI coach practice drills.
- Admin-configurable interview templates.
- Usage analytics and operational dashboards.
- Improved mobile interview experience.

### v3 - Scaled SaaS and Market Expansion

Focus: Enterprise, automation, and new markets.

- SSO and enterprise identity support.
- Payment and billing integration.
- Multi-language feedback and interviews.
- Mobile apps or progressive web app enhancements.
- Benchmarking across cohorts and institutes.
- Live teacher scheduling integration.
- Corporate job interview training modules.
- API integrations with institute CRMs or LMS platforms.
- Advanced compliance, retention, and data governance tooling.

## 36. Open Questions

- Which AI providers will be approved for production use?
- What exact data retention policy will institutes require?
- Will students be allowed to self-register, or only join through institute invitations?
- Which interview types are mandatory for the first paid release?
- Is PDF export required for v1 sales demos?
- What billing model will be used: per institute, per student, per interview, or hybrid?
- What level of human teacher review is mandatory before students see reports?
- Which countries or regulatory requirements must be considered first?

## 37. Definition of Ready for Feature Development

A feature is ready for design and engineering when:

- Business objective is clear.
- Target role and workflow are defined.
- Inputs and outputs are documented.
- Permissions are defined.
- Acceptance criteria are written.
- Edge cases are identified.
- Analytics events are defined where relevant.
- Security and privacy considerations are reviewed.
- AI behavior and prompt requirements are specified if applicable.

## 38. Definition of Done for Production Features

A feature is production-ready when:

- Functional requirements are implemented and tested.
- Role-based permissions are enforced server-side.
- Loading, empty, error, and success states exist.
- Logs and relevant metrics are emitted.
- Accessibility basics are satisfied.
- Sensitive data handling is reviewed.
- AI outputs are validated and recoverable.
- Documentation is updated.
- QA has verified primary workflows and key edge cases.

## 39. Appendix - Core Data Concepts

Primary product entities expected in future implementation:

- User.
- Role.
- Institute.
- Batch.
- Student Profile.
- Academic Profile.
- Document.
- Document Analysis.
- Interview Type.
- Interview Session.
- Interview Question.
- Answer Recording.
- Transcript.
- Voice Analysis.
- Video Analysis.
- AI Evaluation.
- Report.
- Teacher Review.
- Notification.
- Audit Log.
- Feature Configuration.
- Usage Record.

This SRS is the master product blueprint for MockMate AI. Future design documents, API specifications, database models, prompts, and implementation plans should trace back to the requirements defined here.
