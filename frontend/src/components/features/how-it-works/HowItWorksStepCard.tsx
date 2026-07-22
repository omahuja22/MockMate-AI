import { motion, type Variants } from 'framer-motion'

import { type HowItWorksStep } from '@/components/features/how-it-works/howItWorks.constants'

type HowItWorksStepCardProps = {
  step: HowItWorksStep
  variants: Variants
}

export function HowItWorksStepCard({ step, variants }: HowItWorksStepCardProps) {
  const Icon = step.icon

  return (
    <motion.article
      variants={variants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="relative z-10 flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-sm)] transition-colors duration-200 hover:border-foreground/15 hover:bg-background"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-muted-foreground">{step.step}</span>
        <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground">
          <Icon aria-hidden="true" className="size-5" />
        </span>
      </div>
      <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground">{step.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
    </motion.article>
  )
}
