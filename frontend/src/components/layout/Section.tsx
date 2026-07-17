import { type HTMLAttributes, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionProps = HTMLAttributes<HTMLElement> & {
  title?: string
  description?: string
  kicker?: string
  actions?: ReactNode
}

export function Section({
  className,
  title,
  description,
  kicker,
  actions,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('space-y-6', className)} {...props}>
      {(kicker || title || description || actions) && (
        <header className="space-y-3">
          {kicker ? (
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {kicker}
            </p>
          ) : null}
          {title ? (
            <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
          ) : null}
          {description ? (
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </header>
      )}
      {children}
    </section>
  )
}