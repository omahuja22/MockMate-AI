# Trusted By Section QA Checklist

QA role: Senior QA Engineer  
Feature: Trusted By landing-page section  
Date: 2026-07-17

## Accessibility

| Check | Pass Criteria | Result |
| --- | --- | --- |
| Semantic section | Section uses a meaningful heading relationship with `aria-labelledby` | Pending manual QA |
| Heading order | Trusted By heading follows the Hero `h1` as a section heading | Pending manual QA |
| Text contrast | Heading, subtext, labels, and descriptors meet WCAG AA | Pending manual QA |
| Non-visual meaning | Each placeholder logo has visible text and accessible label | Pending manual QA |
| Reduced motion | Motion is removed or minimized when reduced motion is enabled | Pending manual QA |

## Animations

| Check | Pass Criteria | Result |
| --- | --- | --- |
| Scroll reveal | Section fades in once when entering viewport | Pending manual QA |
| Stagger | Logo cells reveal with subtle stagger | Pending manual QA |
| Excessive motion | No looping, glow, shimmer, or distracting animation | Pending manual QA |
| Reduced motion | No vertical movement when reduced-motion preference is active | Pending manual QA |

## Responsive Behaviour

| Breakpoint | Pass Criteria | Result |
| --- | --- | --- |
| Mobile 320px | No horizontal scroll; logo grid remains readable | Pending manual QA |
| Mobile 375px | Two-column grid is balanced | Pending manual QA |
| Tablet 768px | Three-column grid renders cleanly | Pending manual QA |
| Desktop 1024px+ | Six-column grid fits and aligns with Hero rhythm | Pending manual QA |
| Wide desktop | Content remains constrained and does not stretch awkwardly | Pending manual QA |

## Performance

| Check | Pass Criteria | Result |
| --- | --- | --- |
| Build | `npm run build` passes | Passed |
| Remote assets | No remote logo or image dependency | Passed |
| Bundle risk | Uses existing dependencies only | Passed |
| Layout shift | Static placeholders avoid image loading shifts | Pending browser QA |

## Keyboard Navigation

| Check | Pass Criteria | Result |
| --- | --- | --- |
| Focus states | Logo cards show visible focus when tabbed | Pending manual QA |
| Tab order | Focus order follows visual order | Pending manual QA |
| No traps | Keyboard user can move through and past the section | Pending manual QA |

## Screen Readers

| Check | Pass Criteria | Result |
| --- | --- | --- |
| Section announcement | Screen reader announces section heading | Pending manual QA |
| Card labels | Each placeholder announces label and descriptor | Pending manual QA |
| Decorative icons | Icons do not create noisy duplicate announcements | Pending manual QA |

## Hover Effects

| Check | Pass Criteria | Result |
| --- | --- | --- |
| Hover lift | Card lift is subtle and premium | Pending manual QA |
| Hover color | Border/background shift remains restrained | Pending manual QA |
| No glow | No glowing, neon, or shimmer effects appear | Pending manual QA |

## Dark Mode

| Check | Pass Criteria | Result |
| --- | --- | --- |
| Surface contrast | Cards remain distinct from background | Pending manual QA |
| Text contrast | Labels and descriptors remain readable | Pending manual QA |
| Hover state | Hover remains visible without becoming luminous | Pending manual QA |

## Edge Cases

| Check | Pass Criteria | Result |
| --- | --- | --- |
| Long text | Descriptors do not overflow containers | Pending manual QA |
| Font loading delay | Layout remains stable with fallback font | Pending browser QA |
| Zoom 200% | Section remains usable without content overlap | Pending manual QA |

## Cross-Browser Compatibility

| Browser | Pass Criteria | Result |
| --- | --- | --- |
| Chrome | Layout, hover, motion, and focus states work | Pending manual QA |
| Edge | Layout, hover, motion, and focus states work | Pending manual QA |
| Firefox | Layout, hover, motion, and focus states work | Pending manual QA |
| Safari | Layout, hover, motion, and focus states work | Pending manual QA |
