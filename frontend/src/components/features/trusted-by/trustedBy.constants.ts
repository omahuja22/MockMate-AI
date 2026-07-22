import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Landmark,
  School,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'

export const trustedByCopy = {
  headline: 'Trusted by the people shaping successful interviews',
  subtext: 'Used by students, teachers, coaching institutes, and placement teams.',
} as const

export type TrustedByItem = {
  label: string
  descriptor: string
  mark: string
  icon: LucideIcon
}

export const trustedByItems: TrustedByItem[] = [
  {
    label: 'University',
    descriptor: 'Admission teams',
    mark: 'UN',
    icon: Landmark,
  },
  {
    label: 'IELTS Institute',
    descriptor: 'Speaking coaches',
    mark: 'IELTS',
    icon: School,
  },
  {
    label: 'Coaching Institute',
    descriptor: 'Study-abroad mentors',
    mark: 'CI',
    icon: GraduationCap,
  },
  {
    label: 'Placement Cell',
    descriptor: 'Career readiness',
    mark: 'PC',
    icon: UsersRound,
  },
  {
    label: 'Recruiter',
    descriptor: 'Hiring teams',
    mark: 'RC',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Enterprise',
    descriptor: 'Training programs',
    mark: 'ENT',
    icon: Building2,
  },
]
