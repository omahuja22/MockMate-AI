import { motion, useReducedMotion } from 'framer-motion'

import { builtForAudiences, builtForCopy } from '@/components/features/built-for/builtFor.constants'
import { BuiltForCard } from '@/components/features/built-for/BuiltForCard'
import { LandingSectionHeader } from '@/components/features/landing/LandingSectionHeader'
import {
  createItemVariants,
  createSectionVariants,
} from '@/components/features/landing/landingMotion'

export function BuiltForSection() {
  const shouldReduceMotion = Boolean(useReducedMotion())
  const sectionVariants = createSectionVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="built-for-title"
      className="bg-background px-4 py-18 sm:px-6 lg:px-8 lg:py-24"
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
            id="built-for-title"
            title={builtForCopy.title}
            description={builtForCopy.description}
          />
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {builtForAudiences.map((audience) => (
            <BuiltForCard
              key={audience.title}
              audience={audience}
              variants={itemVariants}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
