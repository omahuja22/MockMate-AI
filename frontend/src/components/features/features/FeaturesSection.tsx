import { motion, useReducedMotion, type Variants } from 'framer-motion'

import { FeatureCardGrid } from '@/components/features/features/FeatureCardGrid'
import { featuresCopy } from '@/components/features/features/features.constants'

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
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
      },
    },
  }
}

function createItemVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 14,
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

export function FeaturesSection() {
  const prefersReducedMotion = useReducedMotion()
  const shouldReduceMotion = Boolean(prefersReducedMotion)
  const sectionVariants = createSectionVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="features-title"
      className="bg-background px-4 py-18 sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <h2
            id="features-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {featuresCopy.heading}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {featuresCopy.description}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 lg:mt-12">
          <FeatureCardGrid itemVariants={itemVariants} />
        </motion.div>
      </motion.div>
    </section>
  )
}
