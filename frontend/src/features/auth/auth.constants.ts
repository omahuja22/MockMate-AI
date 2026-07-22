import { type AuthRole } from '@/types/auth'

export const roleOptions: Array<{ value: AuthRole; label: string; description: string }> = [
  {
    value: 'student',
    label: 'Student',
    description: 'Practice and improve with personalized interviews.',
  },
  {
    value: 'teacher',
    label: 'Teacher',
    description: 'Review reports and guide assigned students.',
  },
  {
    value: 'institute_admin',
    label: 'Institute Admin',
    description: 'Manage batches, teachers, students, and analytics.',
  },
  {
    value: 'platform_admin',
    label: 'Platform Admin',
    description: 'Operate the MockMate AI platform.',
  },
]

export const demoCredentials = {
  password: 'MockMate@123',
  users: ['student@mockmate.ai', 'teacher@mockmate.ai', 'admin@mockmate.ai', 'platform@mockmate.ai'],
} as const
