import {
  BarChart3,
  FileText,
  GraduationCap,
  ShieldCheck,
  Video,
  type LucideIcon,
} from 'lucide-react'

import { appPaths } from '@/routes/paths'

export const heroCopy = {
  kicker: 'AI interview preparation for study abroad',
  headline: 'Personal interview practice for every study-abroad student.',
  body: "MockMate AI creates tailored video interviews from each student's resume, SOP, scores, university, course, and country, then turns performance into clear coaching feedback.",
  primaryCta: {
    label: 'Start practicing',
    to: appPaths.dashboard,
  },
  secondaryCta: {
    label: 'View institute demo',
    to: appPaths.login,
  },
} as const

export type HeroTrustSignal = {
  label: string
  description: string
  icon: LucideIcon
}

export const heroTrustSignals: HeroTrustSignal[] = [
  {
    label: 'Document-aware',
    description: 'Resume, SOP, scores, goals',
    icon: FileText,
  },
  {
    label: 'Video-ready',
    description: 'Confidence and delivery review',
    icon: Video,
  },
  {
    label: 'Institute-safe',
    description: 'Built for teacher review',
    icon: ShieldCheck,
  },
]

export type HeroPreviewMetric = {
  label: string
  value: string
  detail: string
}

export const heroPreviewMetrics: HeroPreviewMetric[] = [
  {
    label: 'Readiness',
    value: '82%',
    detail: 'Strong progress',
  },
  {
    label: 'Interview type',
    value: 'Visa',
    detail: 'Personalized',
  },
]

export type HeroPreviewSignal = {
  label: string
  value: string
  barClassName: string
}

export const heroPreviewSignals: HeroPreviewSignal[] = [
  {
    label: 'Answer relevance',
    value: '88',
    barClassName: 'w-[88%]',
  },
  {
    label: 'Speaking confidence',
    value: '76',
    barClassName: 'w-[76%]',
  },
  {
    label: 'Fluency',
    value: '81',
    barClassName: 'w-[81%]',
  },
]

export const heroPreviewCards = [
  {
    title: 'Interview intelligence',
    description: 'Tailored questions from student context',
    icon: GraduationCap,
  },
  {
    title: 'Progress analytics',
    description: 'Readable signals for students and teachers',
    icon: BarChart3,
  },
] as const
