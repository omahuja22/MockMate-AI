import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { aiReportPreviewCopy } from '@/components/features/ai-report-preview/aiReportPreview.constants'
import { ReportPreviewCard } from '@/components/features/ai-report-preview/ReportPreviewCard'
import {
  createItemVariants,
  createSectionVariants,
} from '@/components/features/landing/landingMotion'
import { Button } from '@/components/ui/button'
import { appPaths } from '@/routes/paths'

export function AiReportPreviewSection() {
  const shouldReduceMotion = Boolean(useReducedMotion())
  const sectionVariants = createSectionVariants(shouldReduceMotion)
  const itemVariants = createItemVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="ai-report-preview-title"
      className="bg-background px-4 py-18 sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16"
      >
        <motion.div variants={itemVariants} className="max-w-2xl">
          <h2
            id="ai-report-preview-title"
            className="whitespace-pre-line text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {aiReportPreviewCopy.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {aiReportPreviewCopy.description}
          </p>
          <Button asChild size="lg" className="mt-8 h-11 rounded-lg px-5 text-sm">
            <Link to={appPaths.dashboard}>
              {aiReportPreviewCopy.cta}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </motion.div>

        <ReportPreviewCard itemVariants={itemVariants} shouldReduceMotion={shouldReduceMotion} />
      </motion.div>
    </section>
  )
}
