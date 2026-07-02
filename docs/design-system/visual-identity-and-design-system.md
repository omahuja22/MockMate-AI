# MockMate AI Visual Identity and Design System

## 1. Brand Personality

MockMate AI should feel like a trusted interview coach inside a serious institute-grade platform. The product is AI-powered, but the interface should not feel experimental, gimmicky, or overly futuristic. It should feel calm, precise, credible, and quietly intelligent.

### Personality Traits

- Professional: suitable for IELTS institutes, consultants, teachers, and administrators.
- Supportive: students should feel guided, not judged.
- Clear: complex AI feedback must become understandable next steps.
- Premium: polished typography, spacing, and restraint rather than decoration.
- Trustworthy: privacy, evaluation, and progress reporting must feel secure and transparent.
- Focused: interview workflows should remove distraction and help users perform.

### Design Principles

- Clarity before decoration: every UI choice should improve understanding or action.
- Calm confidence: use restrained color, generous spacing, and precise hierarchy.
- Human-centered AI: AI outputs should be explainable, reviewable, and framed as coaching.
- Role-aware simplicity: students, teachers, institute admins, and super admins need different levels of density.
- Data with context: scores, charts, and reports should always explain what changed and what to do next.
- Enterprise-ready consistency: predictable layouts, controls, empty states, and validation patterns across the product.

## 2. Color Palette

The primary theme is light. Colors should avoid loud gradients, neon treatment, and generic blue-purple startup styling. Use color as a communication layer, not decoration.

### Primary Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Primary 900 | `#102A43` | High-emphasis text on light surfaces, premium brand anchor |
| Primary 800 | `#173B57` | Sidebar active states, strong headings where needed |
| Primary 700 | `#1F4E6B` | Primary actions, selected navigation |
| Primary 600 | `#2A6684` | Hover states, links, interactive emphasis |
| Primary 100 | `#E6F0F5` | Subtle selected backgrounds |
| Primary 50 | `#F4F8FA` | Light page accents and panels |

Primary direction: deep ink-teal. It gives the product a serious, study-abroad advisory feel without falling into saturated blue SaaS cliches.

### Secondary Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Secondary 800 | `#5A4632` | Warm emphasis, report highlights |
| Secondary 600 | `#8A6A45` | Secondary actions, tasteful accents |
| Secondary 200 | `#E7D7BF` | Soft tags, low-emphasis highlights |
| Secondary 50 | `#FAF6EF` | Warm background sections, coaching notes |

Secondary direction: muted bronze. Use sparingly for warmth and human coaching moments.

### Neutral Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Neutral 950 | `#111827` | Primary text |
| Neutral 800 | `#1F2937` | Headings, strong labels |
| Neutral 700 | `#374151` | Secondary text |
| Neutral 600 | `#4B5563` | Body copy and table text |
| Neutral 500 | `#6B7280` | Metadata and helper text |
| Neutral 400 | `#9CA3AF` | Placeholder text, disabled icons |
| Neutral 300 | `#D1D5DB` | Strong borders |
| Neutral 200 | `#E5E7EB` | Default borders and dividers |
| Neutral 100 | `#F3F4F6` | Page background bands |
| Neutral 50 | `#F9FAFB` | App background |
| White | `#FFFFFF` | Main surfaces |

### Semantic Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Success 700 | `#16794C` | Positive score changes, completed states |
| Success 100 | `#DFF5EA` | Success background |
| Warning 700 | `#A15C07` | Needs attention, moderate risk |
| Warning 100 | `#FEF0C7` | Warning background |
| Error 700 | `#B42318` | Errors, destructive states, failed checks |
| Error 100 | `#FEE4E2` | Error background |
| Info 700 | `#276A8C` | Informational notices |
| Info 100 | `#E6F3F8` | Info background |

### Color Usage Rules

- Use neutral surfaces for most of the UI.
- Use primary color for true actions, links, and active states.
- Use secondary color for coaching, guidance, and report accents only.
- Do not use gradients for core UI surfaces.
- Avoid using color alone to communicate status; pair with text, icons, or labels.
- Keep dashboard charts calm and readable with muted categorical palettes.

## 3. Typography System

Typography should carry the product. The interface should feel structured, intelligent, and easy to scan.

### Font Families

| Role | Recommendation |
| --- | --- |
| Primary UI | Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif |
| Numeric/Data | Inter, tabular numeric settings where available |
| Document Preview | Source Serif 4 or Georgia for long-form document previews only |
| Code/API Docs | JetBrains Mono, SFMono-Regular, Consolas, monospace |

### Type Scale

| Token | Size | Line Height | Weight | Usage |
| --- | ---: | ---: | ---: | --- |
| Display | 40px | 48px | 650-700 | Rare marketing or executive report title |
| H1 | 32px | 40px | 650-700 | Page title |
| H2 | 24px | 32px | 600-650 | Section title |
| H3 | 20px | 28px | 600 | Panel title |
| H4 | 18px | 26px | 600 | Card title |
| Body Large | 16px | 24px | 400-500 | Primary readable body text |
| Body | 14px | 22px | 400-500 | Default UI text |
| Body Small | 13px | 20px | 400-500 | Dense tables, metadata |
| Caption | 12px | 16px | 400-500 | Helper text, labels, timestamps |
| Micro | 11px | 14px | 500-600 | Badges and compact labels |

### Typography Rules

- Use 14px as the default enterprise UI size.
- Keep line length comfortable, especially in feedback and reports.
- Use font weight for hierarchy before using color.
- Avoid all-caps except for tiny status labels where appropriate.
- Use tabular numbers for scores, percentages, timers, and analytics tables.
- Do not scale type based on viewport width.

## 4. Spacing System

Use a 4px base grid with 8px as the dominant spacing rhythm.

| Token | Value | Usage |
| --- | ---: | --- |
| 0 | 0px | No spacing |
| 1 | 4px | Tight icon/text spacing |
| 2 | 8px | Standard small gap |
| 3 | 12px | Form field inner rhythm |
| 4 | 16px | Default component padding |
| 5 | 20px | Compact section spacing |
| 6 | 24px | Card and panel spacing |
| 8 | 32px | Major section separation |
| 10 | 40px | Page-level spacing |
| 12 | 48px | Large dashboard groups |
| 16 | 64px | Major layout separation |

### Spacing Rules

- Use 24px page gutters on desktop dashboards, 16px on tablet, 12-16px on mobile.
- Use 16-24px internal padding for cards and panels.
- Keep form field vertical spacing predictable at 16px between fields.
- Use compact density for admin tables, but preserve readable row height.

## 5. Border Radius and Elevation

MockMate AI should feel precise and mature. Avoid oversized pill-like surfaces.

### Radius Tokens

| Token | Value | Usage |
| --- | ---: | --- |
| Radius XS | 4px | Inputs, small tags, table controls |
| Radius SM | 6px | Buttons, dropdowns, compact cards |
| Radius MD | 8px | Main cards, panels, modals |
| Radius LG | 12px | Large report previews or interview video containers only |
| Full | 999px | Avatars, progress dots, small badges only |

### Elevation Tokens

| Token | Shadow | Usage |
| --- | --- | --- |
| None | none | Most surfaces |
| Subtle | `0 1px 2px rgba(16, 24, 40, 0.06)` | Cards on white backgrounds |
| Raised | `0 4px 12px rgba(16, 24, 40, 0.08)` | Dropdowns, popovers |
| Overlay | `0 12px 32px rgba(16, 24, 40, 0.14)` | Modals, command menus |

### Elevation Rules

- Prefer borders over heavy shadows.
- Use elevation only for layering, not decoration.
- Cards should usually use a 1px neutral border and subtle shadow at most.
- Navigation should feel anchored through layout and borders, not depth.

## 6. Buttons

Buttons should be obvious, restrained, and consistent. Use icons where the action benefits from quick recognition.

### Variants

| Variant | Visual Style | Usage |
| --- | --- | --- |
| Primary | Primary 700 background, white text | Main action on a screen or modal |
| Secondary | White background, neutral border, neutral text | Common secondary actions |
| Tertiary | Transparent background, neutral text | Low-emphasis actions |
| Destructive | Error 700 background or error text | Delete, revoke, remove |
| Ghost Icon | Transparent, icon-only | Toolbar actions, compact controls |
| Link | Text-only, primary color | Inline navigation or low-friction actions |

### Sizes

| Size | Height | Padding | Text |
| --- | ---: | --- | --- |
| Small | 32px | 12px horizontal | 13px |
| Medium | 40px | 16px horizontal | 14px |
| Large | 48px | 20px horizontal | 15-16px |

### Button Rules

- One primary action per surface whenever possible.
- Destructive actions require clear labels and confirmation for high-impact operations.
- Icon-only buttons must have accessible labels and tooltips for unfamiliar actions.
- Disabled buttons should explain why the action is unavailable when the reason is not obvious.
- Avoid rounded pill buttons for standard product UI.

## 7. Forms and Inputs

Forms must feel reliable because students will upload sensitive and high-value documents.

### Text Inputs

Default style:

- Height: 40px desktop, 44px mobile.
- Border: Neutral 300.
- Radius: 6px.
- Background: white.
- Label: 13px or 14px, medium weight.
- Helper text: 12-13px neutral 500.

States:

| State | Treatment |
| --- | --- |
| Default | Neutral border, white background |
| Hover | Neutral 400 border |
| Focus | Primary 600 border, 2px soft focus ring |
| Error | Error 700 border, error helper text |
| Success | Success 700 border only when confirmation is useful |
| Disabled | Neutral 100 background, neutral 400 text |
| Read-only | Neutral 50 background, neutral text, no editing affordance |

### Dropdowns and Selects

- Use native-like affordances with clear chevron icons.
- Support search for long lists such as university, country, course, institute, or teacher.
- Use grouped options where helpful.
- Show selected values clearly in multi-select controls.
- Keep dropdown panels aligned, bordered, and lightly elevated.

### Text Areas

- Minimum height: 96px.
- Use for SOP notes, teacher comments, feedback edits, and manual review.
- Include character count only when there is a meaningful limit.
- Auto-resize where helpful, but cap height to avoid layout jumps.

### Upload Components

Upload areas are central to the product and should feel secure.

- Use a bordered drop zone with 8px radius.
- Include accepted file types and maximum size.
- Show upload progress with filename, file size, and status.
- Support retry and remove actions.
- Show document privacy reassurance near sensitive uploads.
- Use clear error messages for unsupported formats, size limits, and failed scans.

### Validation Rules

- Validate on blur for field-level issues.
- Validate on submit for cross-field issues.
- Error messages should explain the fix, not only the problem.
- Do not rely on red alone; include icon and text.
- Preserve entered data after validation errors.

## 8. Cards for Dashboards and Reports

Cards should organize information, not decorate the page.

### Dashboard Cards

- Background: white.
- Border: 1px Neutral 200.
- Radius: 8px.
- Padding: 16-24px.
- Shadow: none or subtle.
- Header: title, optional supporting metric, optional action.

Use cards for:

- KPI summaries
- Student progress snapshots
- Upcoming interviews
- AI feedback highlights
- Report summaries
- Teacher review queues

Avoid cards for:

- Wrapping entire page sections unnecessarily
- Decorative marketing blocks inside the application
- Nesting multiple cards inside cards

### Report Cards

Report surfaces should feel more editorial and readable:

- Use stronger typographic hierarchy.
- Keep scores paired with plain-language interpretation.
- Use muted status colors.
- Separate AI observations, evidence, and recommendations.
- Include teacher override or review status where relevant.

## 9. Navigation Patterns

### Sidebar

Use for authenticated dashboards and role-based sections.

- Width: 240px desktop, collapsible to icon rail if needed.
- Background: white or Neutral 50.
- Border-right: Neutral 200.
- Active item: Primary 100 background, Primary 800 text.
- Include role-aware navigation groups.
- Keep labels concise.

Suggested sections:

- Dashboard
- Students
- Interviews
- Documents
- Reports
- Analytics
- Feedback
- Notifications
- Settings

### Top Bar

Use for global context and actions.

- Height: 56-64px.
- Contains page title or breadcrumb context, search, notifications, help, and user menu.
- Institute switcher may live here for admin roles.
- Keep top bar visually quiet.

### Breadcrumbs

Use on deeper pages such as student profile, interview report, or institute settings.

- Keep breadcrumb text small and neutral.
- Current page should be visible but not styled as a link.
- Avoid breadcrumbs on shallow dashboard pages.

## 10. Tables and Data Visualization

### Tables

Tables are essential for institutes and admins. They should be dense, readable, and easy to scan.

- Header height: 40px.
- Row height: 48-56px.
- Use sticky headers for long tables.
- Support sorting, filtering, search, pagination, and bulk actions where needed.
- Use status badges with muted backgrounds.
- Align numeric values right or use tabular numeric styling.
- Keep primary row action visible; move secondary actions to a menu.

### Data Visualization

Charts should support decisions, not impress visually.

- Use neutral axes and subtle gridlines.
- Use restrained color palettes with semantic meaning.
- Label charts directly when possible.
- Always include units and date ranges.
- Avoid 3D charts, decorative gradients, and excessive animation.
- Provide accessible alternatives or summaries for key insights.

Recommended chart types:

- Line charts for progress over time.
- Bar charts for comparison across students, batches, or skills.
- Stacked bars for category breakdowns where totals matter.
- Radar charts only for compact skill profiles, with caution.
- Score cards for high-level performance metrics.

## 11. Iconography

Use a clean outline icon set such as Lucide or Heroicons. Icons should be functional, not decorative clutter.

### Icon Rules

- Default size: 16px or 20px.
- Stroke width: consistent across the app.
- Use icons in navigation, buttons, status labels, upload states, and empty states.
- Pair icons with labels for navigation and unfamiliar actions.
- Avoid mixing filled, outline, and custom icon styles without a clear system.
- Use custom icons only for product-specific concepts that generic icons cannot express.

## 12. Motion and Animation

Motion should make the interface feel responsive and premium. It should never slow down serious work.

### Timing

| Motion Type | Duration | Usage |
| --- | ---: | --- |
| Micro | 100-150ms | Hover, focus, pressed states |
| UI Transition | 160-220ms | Dropdowns, tabs, side panels |
| Modal/Overlay | 180-240ms | Dialog entry and exit |
| Progress | Contextual | Upload, processing, AI evaluation |

### Motion Rules

- Use easing that feels natural and restrained.
- Animate opacity and transform where possible for performance.
- Avoid animated gradients and decorative motion.
- Interview room UI should minimize animation during recording.
- Respect reduced-motion preferences.
- Use progress indicators for AI processing and media uploads to reduce uncertainty.

## 13. Accessibility

Accessibility is a product quality requirement, not a later enhancement.

### Requirements

- Meet WCAG 2.1 AA contrast for text and interactive elements.
- All controls must be keyboard reachable.
- Visible focus states must be clear and consistent.
- Do not trap focus except inside active modals or menus.
- Use semantic labels for form controls and icon-only buttons.
- Provide captions or transcripts for interview audio/video wherever possible.
- Error messages must be programmatically associated with fields.
- Avoid color-only status communication.
- Support browser zoom to at least 200 percent without broken layouts.

### Focus State

Recommended focus treatment:

- 2px Primary 600 outline or ring.
- 2px offset where the component shape allows.
- Maintain visible focus on white and neutral backgrounds.

## 14. Theme Strategy

### Light Theme

Light theme is the default and primary product experience.

- App background: Neutral 50.
- Main surfaces: white.
- Text: Neutral 950 or Neutral 800.
- Borders: Neutral 200-300.
- Active states: Primary 100 and Primary 700.

### Future Dark Theme

Dark theme should be planned through tokens, not hard-coded colors.

- Define semantic tokens for background, surface, border, text, muted text, primary action, and status colors.
- Avoid using raw hex values directly in future UI code.
- Test charts, reports, video room, and form validation separately in dark mode.
- Do not simply invert the light palette; adjust contrast and saturation deliberately.

## 15. Dashboard Layout Principles

Dashboards should help each role answer their most important question quickly.

### Student Dashboard

Primary questions:

- What should I practice next?
- How am I improving?
- What feedback needs attention?

Layout:

- Top summary: upcoming interview, readiness score, recent improvement.
- Main area: recommended practice, latest feedback, document status.
- Secondary area: progress trends and coach suggestions.

### Teacher Dashboard

Primary questions:

- Which students need review?
- Who is improving or falling behind?
- What feedback is pending?

Layout:

- Review queue first.
- Batch filters and student search highly visible.
- Performance summaries compact and actionable.

### Institute Admin Dashboard

Primary questions:

- How is the institute performing?
- Are teachers and students active?
- Which cohorts need attention?

Layout:

- KPI row for active students, interviews completed, average readiness, pending reviews.
- Cohort and teacher comparison tables.
- Alerts for inactivity, failed uploads, or low readiness.

### Super Admin Dashboard

Primary questions:

- Is the platform healthy?
- Which institutes are active?
- Are there operational or billing issues?

Layout:

- Operational metrics and tenant health.
- Institute list and usage analytics.
- System alerts and admin actions.

## 16. Interview Room Layout Principles

The interview room is the highest-focus experience in the product. It should feel calm, private, and performance-oriented.

### Desktop Layout

- Main video area should dominate the screen.
- AI question panel should be readable but not distracting.
- Timer, recording status, and connection status must be visible.
- Controls should sit in a predictable bottom toolbar.
- Notes or tips should be collapsible.
- Avoid dense analytics during live recording; show feedback after completion.

### Key Areas

- Video preview or recording area.
- Current question.
- Progress through interview sections.
- Timer and recording indicator.
- Microphone and camera status.
- End interview and pause controls where supported.
- Privacy reminder or consent status when needed.

### Interview Room Rules

- Use minimal color during recording.
- Make critical controls impossible to miss.
- Prevent accidental destructive actions with confirmation.
- Show clear recovery states for camera, microphone, network, or permission issues.
- Keep AI coaching subtle during live answers to avoid distracting the student.

## 17. Mobile Responsiveness

Mobile support matters for students, but complex admin workflows may remain optimized for tablet and desktop.

### Breakpoints

| Breakpoint | Width | Guidance |
| --- | ---: | --- |
| Mobile | 320-767px | Single column, bottom or drawer navigation |
| Tablet | 768-1023px | Two-column where useful, collapsible sidebar |
| Desktop | 1024-1439px | Standard dashboard layout |
| Wide | 1440px+ | Increase content width carefully, do not stretch tables excessively |

### Mobile Rules

- Use 44px minimum touch targets.
- Convert tables to stacked rows or priority columns on small screens.
- Keep upload flows simple and resilient.
- Interview controls should remain thumb-accessible.
- Avoid horizontal scrolling except for intentional data tables.
- Keep forms in one column.
- Preserve clear page titles and back navigation.

## 18. Design Do's and Don'ts

### Do

- Use whitespace and typography to create hierarchy.
- Keep dashboards dense but calm.
- Make AI feedback explainable and actionable.
- Use muted status colors and clear labels.
- Design for role-specific workflows.
- Keep forms trustworthy and forgiving.
- Use consistent card, table, and navigation patterns.
- Prioritize accessibility from the first screen.
- Use design tokens for color, spacing, radius, shadows, and typography.

### Don't

- Do not use flashy gradients, neon colors, or glassmorphism.
- Do not overuse blue-purple palettes.
- Do not use oversized rounded corners for enterprise UI surfaces.
- Do not bury important student feedback inside decorative cards.
- Do not show complex analytics during live interview recording.
- Do not use color alone for scores or validation.
- Do not create inconsistent button styles for each feature.
- Do not nest cards inside cards.
- Do not make admin screens look like marketing pages.
- Do not treat AI output as unquestionable; support review, context, and correction.

## Recommended Design Tokens Summary

```text
Color
  primary: deep ink-teal
  secondary: muted bronze
  neutral: warm enterprise gray
  semantic: success, warning, error, info

Typography
  primary: Inter or equivalent modern sans-serif
  default body: 14px / 22px
  page title: 32px / 40px

Spacing
  base grid: 4px
  dominant rhythm: 8px
  card padding: 16-24px
  page gutters: 24px desktop, 16px tablet, 12-16px mobile

Radius
  controls: 4-6px
  cards: 8px
  large media containers: 12px maximum

Elevation
  default: border-first
  overlays: restrained shadows
```

## Product Feel Check

A finished MockMate AI interface should feel like a serious workspace for interview preparation: calm enough for students under pressure, powerful enough for institutes managing many learners, and polished enough for a public SaaS product.
