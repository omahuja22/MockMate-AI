import { motion, type Variants } from 'framer-motion'

import { type TrustedByItem } from '@/components/features/trusted-by/trustedBy.constants'

type TrustedByLogoCardProps = {
  item: TrustedByItem
  variants: Variants
}

export function TrustedByLogoCard({ item, variants }: TrustedByLogoCardProps) {
  const Icon = item.icon

  return (
    <motion.li
      variants={variants}
      whileHover={{ y: -2, scale: 1.015 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="group flex min-h-32 flex-col justify-between rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-xs)] transition-colors duration-200 hover:border-foreground/15 hover:bg-muted/40"
      aria-label={`${item.label}: ${item.descriptor}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-border bg-background px-2 text-xs font-semibold tracking-tight text-foreground">
          {item.mark}
        </span>
        <Icon
          aria-hidden="true"
          className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-foreground">{item.label}</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.descriptor}</p>
      </div>
    </motion.li>
  )
}
