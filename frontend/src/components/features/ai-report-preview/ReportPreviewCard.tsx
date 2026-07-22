import { CheckCircle2, TrendingUp } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

import {
  improvementSuggestions,
  progressGraphBars,
  reportScores,
  reportStrengths,
} from '@/components/features/ai-report-preview/aiReportPreview.constants'
import { ReportScoreBar } from '@/components/features/ai-report-preview/ReportScoreBar'
import { useCountUp } from '@/components/features/ai-report-preview/useCountUp'

type ReportPreviewCardProps = {
  itemVariants: Variants
  shouldReduceMotion: boolean
}

export function ReportPreviewCard({ itemVariants, shouldReduceMotion }: ReportPreviewCardProps) {
  const readinessScore = useCountUp({ value: 86, enabled: !shouldReduceMotion })

  return (
    <motion.aside
      variants={itemVariants}
      aria-label="Sample AI interview report preview"
      className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-lg)] sm:p-5"
    >
      <div className="rounded-2xl border border-border bg-background p-5">
        <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Interview Readiness Report</p>
            <p className="mt-1 text-xs text-muted-foreground">University admission practice</p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-4 py-3 text-right">
            <p className="text-xs font-medium text-muted-foreground">Overall Readiness</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-foreground">
              {readinessScore}%
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.82fr]">
          <div className="space-y-4 rounded-2xl border border-border bg-card p-4">
            {reportScores.map((score) => (
              <ReportScoreBar
                key={score.label}
                {...score}
                variants={itemVariants}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">Progress Graph</p>
              <TrendingUp aria-hidden="true" className="size-4 text-muted-foreground" />
            </div>
            <div className="mt-5 flex h-28 items-end gap-2" aria-hidden="true">
              {progressGraphBars.map((height, index) => (
                <div key={`${height}-${index}`} className="flex-1 rounded-t-lg bg-foreground/80" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-medium text-foreground">Strengths</p>
            <ul className="mt-4 space-y-3">
              {reportStrengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-foreground" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-medium text-foreground">Improvement Suggestions</p>
            <ul className="mt-4 space-y-3">
              {improvementSuggestions.map((suggestion) => (
                <li key={suggestion} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground"
                    aria-hidden="true"
                  />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-medium text-foreground">Radar Snapshot</p>
            <div className="mx-auto mt-4 grid size-32 place-items-center rounded-full border border-border bg-background">
              <div className="grid size-20 place-items-center rounded-full border border-border">
                <div className="size-10 rounded-full bg-foreground/80" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-foreground p-5 text-background">
            <p className="text-sm font-semibold">Recommendation</p>
            <p className="mt-3 text-sm leading-6 text-background/80">
              Practice concise examples for motivation-based questions, then retake a focused
              university interview session.
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
