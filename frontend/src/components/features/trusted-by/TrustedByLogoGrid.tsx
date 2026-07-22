import { type Variants } from 'framer-motion'

import { TrustedByLogoCard } from '@/components/features/trusted-by/TrustedByLogoCard'
import { trustedByItems } from '@/components/features/trusted-by/trustedBy.constants'

type TrustedByLogoGridProps = {
  itemVariants: Variants
}

export function TrustedByLogoGrid({ itemVariants }: TrustedByLogoGridProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
      {trustedByItems.map((item) => (
        <TrustedByLogoCard key={item.label} item={item} variants={itemVariants} />
      ))}
    </ul>
  )
}
