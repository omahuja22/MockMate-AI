import { type Variants } from 'framer-motion'

export function createSectionVariants(shouldReduceMotion: boolean): Variants {
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

export function createItemVariants(shouldReduceMotion: boolean): Variants {
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
