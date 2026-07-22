import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { heroCopy } from '@/components/features/hero/hero.constants'

export function HeroCtaGroup() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button
        asChild
        size="lg"
        className="h-11 rounded-lg px-5 text-sm shadow-[var(--shadow-sm)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        <Link to={heroCopy.primaryCta.to}>
          {heroCopy.primaryCta.label}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="h-11 rounded-lg px-5 text-sm"
      >
        <Link to={heroCopy.secondaryCta.to}>{heroCopy.secondaryCta.label}</Link>
      </Button>
    </div>
  )
}
