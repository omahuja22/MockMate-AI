import { BarChart3, Download, Layers3, UserCheck, UsersRound, type LucideIcon } from 'lucide-react'

export const institutionDashboardCopy = {
  title: 'Built for institutions,\nnot just students.',
  description:
    'Institutes, universities, placement cells, and coaching centers can manage hundreds of students from one focused dashboard.',
  cta: 'Request Institute Demo',
} as const

export type InstitutionBullet = {
  label: string
  icon: LucideIcon
}

export const institutionBullets: InstitutionBullet[] = [
  { label: 'Manage Batches', icon: Layers3 },
  { label: 'Assign Teachers', icon: UsersRound },
  { label: 'Track Readiness', icon: BarChart3 },
  { label: 'Review AI Reports', icon: UserCheck },
  { label: 'Export Analytics', icon: Download },
]

export const reviewQueue = [
  { name: 'Aarav S.', status: 'Teacher review', score: '84%' },
  { name: 'Meera P.', status: 'AI report ready', score: '79%' },
  { name: 'Rohan K.', status: 'Needs follow-up', score: '68%' },
] as const

export const batchMetrics = [
  { label: 'Active Students', value: '428' },
  { label: 'Reports Reviewed', value: '1,284' },
  { label: 'Avg. Readiness', value: '81%' },
] as const
