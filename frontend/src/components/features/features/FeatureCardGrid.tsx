import { type Variants } from 'framer-motion'

import { FeatureCard } from '@/components/features/features/FeatureCard'
import { featureItems } from '@/components/features/features/features.constants'

type FeatureCardGridProps = {
  itemVariants: Variants
}

export function FeatureCardGrid({ itemVariants }: FeatureCardGridProps) {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {featureItems.map((item) => (
        <FeatureCard key={item.title} item={item} variants={itemVariants} />
      ))}
    </div>
  )
}
