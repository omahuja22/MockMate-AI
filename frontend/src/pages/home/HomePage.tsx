import { lazy, Suspense } from 'react'

import { FeaturesSection } from '@/components/features/features'
import { HeroSection } from '@/components/features/hero'
import { ProblemSection } from '@/components/features/problem'
import { TrustedBySection } from '@/components/features/trusted-by'

const HowItWorksSection = lazy(() =>
  import('@/components/features/how-it-works/HowItWorksSection').then((module) => ({
    default: module.HowItWorksSection,
  })),
)
const AiReportPreviewSection = lazy(() =>
  import('@/components/features/ai-report-preview/AiReportPreviewSection').then((module) => ({
    default: module.AiReportPreviewSection,
  })),
)
const InstitutionDashboardSection = lazy(() =>
  import('@/components/features/institution-dashboard/InstitutionDashboardSection').then((module) => ({
    default: module.InstitutionDashboardSection,
  })),
)
const BuiltForSection = lazy(() =>
  import('@/components/features/built-for/BuiltForSection').then((module) => ({
    default: module.BuiltForSection,
  })),
)
const FaqSection = lazy(() =>
  import('@/components/features/faq/FaqSection').then((module) => ({
    default: module.FaqSection,
  })),
)
const FinalCtaSection = lazy(() =>
  import('@/components/features/final-cta/FinalCtaSection').then((module) => ({
    default: module.FinalCtaSection,
  })),
)
const FooterSection = lazy(() =>
  import('@/components/features/footer/FooterSection').then((module) => ({
    default: module.FooterSection,
  })),
)

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ProblemSection />
      <FeaturesSection />
      <Suspense fallback={<div className="sr-only">Loading more landing page sections</div>}>
        <HowItWorksSection />
        <AiReportPreviewSection />
        <InstitutionDashboardSection />
        <BuiltForSection />
        <FaqSection />
        <FinalCtaSection />
        <FooterSection />
      </Suspense>
    </>
  )
}
