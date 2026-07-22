import { motion, type Variants } from 'framer-motion'

import {
  batchMetrics,
  reviewQueue,
} from '@/components/features/institution-dashboard/institutionDashboard.constants'

type InstitutionDashboardMockupProps = {
  variants: Variants
}

export function InstitutionDashboardMockup({ variants }: InstitutionDashboardMockupProps) {
  return (
    <motion.aside
      variants={variants}
      aria-label="Institution dashboard preview"
      className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-lg)] sm:p-5"
    >
      <div className="rounded-2xl border border-border bg-background p-5">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="text-sm font-semibold text-foreground">Institution Dashboard</p>
            <p className="mt-1 text-xs text-muted-foreground">Batch analytics and review workflow</p>
          </div>
          <span className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Live overview
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {batchMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-border bg-card p-4">
              <p className="text-xs font-medium text-muted-foreground">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-medium text-foreground">Teacher Review Queue</p>
            <div className="mt-4 space-y-3">
              {reviewQueue.map((student) => (
                <div
                  key={student.name}
                  className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-3 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{student.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{student.status}</p>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{student.score}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="text-sm font-medium text-foreground">Student Progress</p>
              <div className="mt-5 space-y-3" aria-hidden="true">
                <div className="h-2 rounded-full bg-foreground/85" />
                <div className="h-2 w-10/12 rounded-full bg-foreground/70" />
                <div className="h-2 w-8/12 rounded-full bg-foreground/55" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-foreground p-4 text-background">
              <p className="text-sm font-medium">Batch Analytics</p>
              <p className="mt-2 text-xs leading-5 text-background/75">
                Identify readiness gaps before final interviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
