import { Sparkles } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

import { HeroCtaGroup } from '@/components/features/hero/HeroCtaGroup'
import { HeroTrustBar } from '@/components/features/hero/HeroTrustBar'
import { heroCopy } from '@/components/features/hero/hero.constants'

type HeroContentProps = {
  itemVariants: Variants
}

export function HeroContent({ itemVariants }: HeroContentProps) {
  return (
    <div className="max-w-3xl">
      <motion.div variants={itemVariants}>
        <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-primary shadow-[var(--shadow-xs)]">
          <Sparkles aria-hidden="true" className="size-4" />
          {heroCopy.kicker}
        </p>
      </motion.div>

      <motion.h1
        id="hero-title"
        variants={itemVariants}
        className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.04]"
      >
        {heroCopy.headline}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
      >
        {heroCopy.body}
      </motion.p>

      <motion.div variants={itemVariants} className="mt-8">
        <HeroCtaGroup />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8">
        <HeroTrustBar />
      </motion.div>
    </div>
  )
}
