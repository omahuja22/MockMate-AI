import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Landmark,
  School,
  UserRound,
  type LucideIcon,
} from 'lucide-react'

export const builtForCopy = {
  title: 'Built for every interview-readiness team',
  description:
    'MockMate AI supports the people preparing, coaching, reviewing, and hiring across the full interview journey.',
} as const

export type BuiltForAudience = {
  title: string
  description: string
  icon: LucideIcon
}

export const builtForAudiences: BuiltForAudience[] = [
  {
    title: 'Students',
    description: 'Practice with structure, clarity, and confidence before high-stakes interviews.',
    icon: UserRound,
  },
  {
    title: 'Study Abroad Applicants',
    description: 'Prepare for university, visa, embassy, and scholarship conversations.',
    icon: GraduationCap,
  },
  {
    title: 'Placement Cells',
    description: 'Help cohorts improve readiness before campus and off-campus interviews.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Universities',
    description: 'Support admission readiness and communication quality at scale.',
    icon: Landmark,
  },
  {
    title: 'Recruiters',
    description: 'Review candidate preparation signals with structured interview context.',
    icon: Building2,
  },
  {
    title: 'Coaching Institutes',
    description: 'Deliver consistent practice and teacher review across many learners.',
    icon: School,
  },
]
