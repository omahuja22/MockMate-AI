import { type Variants } from 'framer-motion'

import { ProblemCard } from '@/components/features/problem/ProblemCard'
import { problemItems } from '@/components/features/problem/problem.constants'

type ProblemCardGridProps = {
  itemVariants: Variants
}

export function ProblemCardGrid({ itemVariants }: ProblemCardGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
      {problemItems.map((item) => (
        <ProblemCard key={item.title} item={item} variants={itemVariants} />
      ))}
    </div>
  )
}
