import { FeaturesSection } from '@/components/features/features'
import { HeroSection } from '@/components/features/hero'
import { ProblemSection } from '@/components/features/problem'
import { TrustedBySection } from '@/components/features/trusted-by'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ProblemSection />
      <FeaturesSection />
    </>
  )
}
