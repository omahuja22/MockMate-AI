import { motion, useReducedMotion, type Variants } from 'framer-motion'

import { TrustedByLogoGrid } from '@/components/features/trusted-by/TrustedByLogoGrid'
import { trustedByCopy } from '@/components/features/trusted-by/trustedBy.constants'

function createSectionVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: 'easeOut',
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  }
}

function createItemVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.36,
        ease: 'easeOut',
      },
    },
  }
}

export function TrustedBySection() {
  const prefersReducedMotion = useReducedMotion()
  const shouldReduceMotion = Boolean(prefersReducedMotion)
  const sectionVariants = createSectionVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="trusted-by-title"
      className="border-y border-border bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={sectionVariants}
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
          <h2
            id="trusted-by-title"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {trustedByCopy.headline}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            {trustedByCopy.subtext}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-9 lg:mt-10">
          <TrustedByLogoGrid itemVariants={itemVariants} />
        </motion.div>
      </motion.div>
    </section>
  )
}
