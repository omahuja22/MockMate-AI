import { motion, useReducedMotion, type Variants } from 'framer-motion'

import { HeroContent } from '@/components/features/hero/HeroContent'
import { HeroProductPreview } from '@/components/features/hero/HeroProductPreview'

function createContainerVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.48,
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  }
}

function createItemVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: 'easeOut',
      },
    },
  }
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const shouldReduceMotion = Boolean(prefersReducedMotion)
  const containerVariants = createContainerVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" aria-hidden="true" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16"
      >
        <HeroContent itemVariants={itemVariants} />
        <HeroProductPreview itemVariants={itemVariants} />
      </motion.div>
    </section>
  )
}
