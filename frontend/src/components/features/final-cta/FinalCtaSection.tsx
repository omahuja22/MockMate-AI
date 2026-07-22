import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

import {
  createItemVariants,
  createSectionVariants,
} from '@/components/features/landing/landingMotion'
import { Button } from '@/components/ui/button'
import { appPaths } from '@/routes/paths'

export function FinalCtaSection() {
  const shouldReduceMotion = Boolean(useReducedMotion())
  const sectionVariants = createSectionVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="final-cta-title"
      className="bg-background px-4 py-18 sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl"
      >
        <motion.div
          variants={itemVariants}
          className="overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,var(--card),var(--muted))] px-6 py-14 text-center shadow-[var(--shadow-md)] sm:px-10 lg:px-16 lg:py-18"
        >
          <h2
            id="final-cta-title"
            className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Ready to practice your next interview with confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Start your first personalized mock interview today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 rounded-lg px-5 text-sm">
              <Link to={appPaths.dashboard}>
                Start Practicing
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 rounded-lg px-5 text-sm">
              <Link to={appPaths.login}>Request Institute Demo</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
