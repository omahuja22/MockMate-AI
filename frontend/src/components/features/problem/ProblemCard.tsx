import { motion, type Variants } from 'framer-motion'

import { type ProblemItem } from '@/components/features/problem/problem.constants'

type ProblemCardProps = {
  item: ProblemItem
  variants: Variants
}

export function ProblemCard({ item, variants }: ProblemCardProps) {
  const Icon = item.icon

  return (
    <motion.article
      variants={variants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-xs)] transition-colors duration-200 hover:border-foreground/15 hover:bg-background"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
    </motion.article>
  )
}
