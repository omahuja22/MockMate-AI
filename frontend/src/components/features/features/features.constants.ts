import {
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  LayoutDashboard,
  UserCheck,
  Video,
  type LucideIcon,
} from 'lucide-react'

export const featuresCopy = {
  heading: 'Everything you need to prepare with confidence',
  description:
    'MockMate AI combines personalized AI interviews, structured feedback, and progress tracking into one calm preparation platform.',
} as const

export type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const featureItems: FeatureItem[] = [
  {
    title: 'Personalized Interview Generation',
    description:
      'Create interview sessions shaped around each student’s resume, goals, target country, university, and course.',
    icon: BrainCircuit,
  },
  {
    title: 'AI Feedback Engine',
    description:
      'Turn every answer into clear feedback on relevance, fluency, grammar, confidence, and professionalism.',
    icon: ClipboardCheck,
  },
  {
    title: 'Video Interview Simulation',
    description:
      'Help students practice in a focused video environment that mirrors real interview pressure.',
    icon: Video,
  },
  {
    title: 'Progress Tracking',
    description:
      'Show improvement over time with readable readiness signals and category-level performance trends.',
    icon: BarChart3,
  },
  {
    title: 'Teacher Review',
    description:
      'Give teachers a structured way to review AI feedback, add guidance, and support the students who need attention.',
    icon: UserCheck,
  },
  {
    title: 'Institute Dashboard',
    description:
      'Give institutes visibility into student readiness, interview activity, reviews, and program performance.',
    icon: LayoutDashboard,
  },
]
