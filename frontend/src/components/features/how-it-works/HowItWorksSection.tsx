import { motion, useReducedMotion } from 'framer-motion'

import { LandingSectionHeader } from '@/components/features/landing/LandingSectionHeader'
import {
  createItemVariants,
  createSectionVariants,
} from '@/components/features/landing/landingMotion'
import { HowItWorksStepCard } from '@/components/features/how-it-works/HowItWorksStepCard'
import {
  howItWorksCopy,
  howItWorksSteps,
} from '@/components/features/how-it-works/howItWorks.constants'

export function HowItWorksSection() {
  const shouldReduceMotion = Boolean(useReducedMotion())
  const sectionVariants = createSectionVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="how-it-works-title"
      className="bg-muted/30 px-4 py-18 sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div variants={itemVariants}>
          <LandingSectionHeader
            id="how-it-works-title"
            title={howItWorksCopy.title}
            description={howItWorksCopy.subtitle}
          />
        </motion.div>

        <div className="relative mt-12">
          <div
            className="absolute left-1/2 top-0 hidden h-px w-[72%] -translate-x-1/2 bg-border lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute left-5 top-0 h-full w-px bg-border lg:hidden"
            aria-hidden="true"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <HowItWorksStepCard key={step.step} step={step} variants={itemVariants} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
