import { motion, type Variants } from 'framer-motion'

import { type FeatureItem } from '@/components/features/features/features.constants'

type FeatureCardProps = {
  item: FeatureItem
  variants: Variants
}

export function FeatureCard({ item, variants }: FeatureCardProps) {
  const Icon = item.icon

  return (
    <motion.article
      variants={variants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="group flex h-full min-h-64 flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-xs)] transition-colors duration-200 hover:border-foreground/15 hover:bg-muted/30"
    >
      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <div className="mt-6">
        <h3 className="text-base font-semibold leading-6 text-foreground">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
      </div>
    </motion.article>
  )
}
