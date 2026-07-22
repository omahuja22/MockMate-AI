import { BarChart3, FileText, Video, type LucideIcon } from 'lucide-react'

export const howItWorksCopy = {
  title: 'How MockMate AI Works',
  subtitle: 'Three simple steps to prepare with confidence.',
} as const

export type HowItWorksStep = {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Upload Your Profile',
    description:
      'Upload your resume, SOP, academic scores, university, destination country, and career goals.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Practice Smart Interviews',
    description:
      'Receive AI-generated interview questions personalized specifically for your profile and chosen interview type.',
    icon: Video,
  },
  {
    step: '03',
    title: 'Improve With Feedback',
    description:
      'Receive structured AI feedback, teacher reviews, confidence analysis, and personalized improvement recommendations.',
    icon: BarChart3,
  },
]
