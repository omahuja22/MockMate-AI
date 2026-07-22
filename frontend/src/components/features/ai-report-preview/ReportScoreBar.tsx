import { motion, type Variants } from 'framer-motion'

import { cn } from '@/lib/utils'

type ReportScoreBarProps = {
  label: string
  value: number
  barClassName: string
  variants: Variants
}

export function ReportScoreBar({ label, value, barClassName, variants }: ReportScoreBarProps) {
  return (
    <motion.div variants={variants}>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-muted-foreground">{label}</span>
        <span className="font-semibold text-foreground">{value}</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-muted"
        role="meter"
        aria-label={`${label} score`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <motion.div
          className={cn('h-full origin-left rounded-full bg-foreground', barClassName)}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}
