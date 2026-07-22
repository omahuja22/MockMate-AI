import { motion, type Variants } from 'framer-motion'

import {
  heroPreviewCards,
  heroPreviewMetrics,
  heroPreviewSignals,
} from '@/components/features/hero/hero.constants'
import { cn } from '@/lib/utils'

type HeroProductPreviewProps = {
  itemVariants: Variants
}

export function HeroProductPreview({ itemVariants }: HeroProductPreviewProps) {
  return (
    <motion.aside
      variants={itemVariants}
      aria-label="MockMate AI product preview"
      className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-lg)] sm:p-5"
    >
      <div className="rounded-xl border border-border bg-background p-4">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="text-sm font-semibold text-foreground">Student readiness report</p>
            <p className="mt-1 text-xs text-muted-foreground">Visa interview practice</p>
          </div>
          <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Ready
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {heroPreviewMetrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs font-medium text-muted-foreground">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-3 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-foreground">Evaluation signals</p>
            <p className="text-xs text-muted-foreground">AI + teacher review</p>
          </div>
          {heroPreviewSignals.map((signal) => (
            <div key={signal.label}>
              <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                <span className="font-medium text-muted-foreground">{signal.label}</span>
                <span className="font-semibold text-foreground">{signal.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                <div className={cn('h-full rounded-full bg-primary', signal.barClassName)} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {heroPreviewCards.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-4">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">{title}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  )
}
