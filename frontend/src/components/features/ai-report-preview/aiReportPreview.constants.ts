export const aiReportPreviewCopy = {
  title: 'Your interview.\nBroken down into insights that matter.',
  description:
    'MockMate AI analyzes every interview and provides actionable coaching instead of generic scores.',
  cta: 'View Sample Report',
} as const

export const reportScores = [
  { label: 'Confidence', value: 84, barClassName: 'w-[84%]' },
  { label: 'Communication', value: 78, barClassName: 'w-[78%]' },
  { label: 'Fluency', value: 81, barClassName: 'w-[81%]' },
  { label: 'Body Language', value: 74, barClassName: 'w-[74%]' },
] as const

export const reportStrengths = [
  'Clear motivation for the chosen course',
  'Strong examples from academic background',
  'Professional tone throughout the interview',
] as const

export const improvementSuggestions = [
  'Make answers more concise in follow-up questions',
  'Reduce filler words during longer explanations',
  'Add more specific outcomes when describing projects',
] as const
