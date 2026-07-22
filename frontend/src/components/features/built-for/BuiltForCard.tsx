import { motion, type Variants } from 'framer-motion'

import { type BuiltForAudience } from '@/components/features/built-for/builtFor.constants'

type BuiltForCardProps = {
  audience: BuiltForAudience
  variants: Variants
  shouldReduceMotion: boolean
}

export function BuiltForCard({ audience, variants, shouldReduceMotion }: BuiltForCardProps) {
  const Icon = audience.icon

  return (
    <motion.article
      variants={variants}
      whileHover={{ y: shouldReduceMotion ? 0 : -2 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="group h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-xs)] transition-colors duration-200 hover:border-foreground/15 hover:bg-background"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-foreground">{audience.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{audience.description}</p>
    </motion.article>
  )
}
