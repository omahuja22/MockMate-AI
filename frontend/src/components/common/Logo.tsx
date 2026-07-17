import { Link } from 'react-router-dom'

import { appPaths } from '@/routes/paths'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  compact?: boolean
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to={appPaths.home}
      className={cn('inline-flex items-center gap-3 rounded-lg focus-visible:outline-none', className)}
      aria-label="MockMate AI home"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-[var(--shadow-sm)]">
        M
      </span>
      {compact ? null : (
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-foreground">MockMate AI</span>
          <span className="text-xs text-muted-foreground">Frontend foundation</span>
        </span>
      )}
    </Link>
  )
}