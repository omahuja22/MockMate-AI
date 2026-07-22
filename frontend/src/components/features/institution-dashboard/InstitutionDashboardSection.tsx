import { ArrowRight, Check } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { InstitutionDashboardMockup } from '@/components/features/institution-dashboard/InstitutionDashboardMockup'
import {
  institutionBullets,
  institutionDashboardCopy,
} from '@/components/features/institution-dashboard/institutionDashboard.constants'
import {
  createItemVariants,
  createSectionVariants,
} from '@/components/features/landing/landingMotion'
import { Button } from '@/components/ui/button'
import { appPaths } from '@/routes/paths'

export function InstitutionDashboardSection() {
  const shouldReduceMotion = Boolean(useReducedMotion())
  const sectionVariants = createSectionVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="institution-dashboard-title"
      className="bg-muted/30 px-4 py-18 sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
      >
        <InstitutionDashboardMockup variants={itemVariants} />

        <motion.div variants={itemVariants} className="max-w-2xl">
          <h2
            id="institution-dashboard-title"
            className="whitespace-pre-line text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {institutionDashboardCopy.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {institutionDashboardCopy.description}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {institutionBullets.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                <span>{label}</span>
                <Check aria-hidden="true" className="ml-auto size-4 text-muted-foreground" />
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="mt-8 h-11 rounded-lg px-5 text-sm">
            <Link to={appPaths.login}>
              {institutionDashboardCopy.cta}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
