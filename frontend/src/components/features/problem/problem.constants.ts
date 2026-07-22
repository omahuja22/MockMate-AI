import { CircleHelp, MessageSquareWarning, TrendingUp, type LucideIcon } from 'lucide-react'

export const problemCopy = {
  heading: "Interview preparation shouldn't feel like guesswork.",
  description:
    'Most students prepare with repeated questions, scattered notes, and unclear expectations. They rarely know whether their answers fit the university, visa context, role, or speaking habits they will actually be judged on.',
} as const

export type ProblemItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const problemItems: ProblemItem[] = [
  {
    title: 'Generic Practice',
    description:
      'Students often rehearse the same broad questions without knowing if the practice reflects their real interview situation.',
    icon: CircleHelp,
  },
  {
    title: 'No Personalized Feedback',
    description:
      'Advice is usually vague, delayed, or disconnected from the student’s profile, goals, documents, and communication style.',
    icon: MessageSquareWarning,
  },
  {
    title: 'No Progress Tracking',
    description:
      'Without a clear record of improvement, students cannot see what changed, what is still weak, or what to practice next.',
    icon: TrendingUp,
  },
]
