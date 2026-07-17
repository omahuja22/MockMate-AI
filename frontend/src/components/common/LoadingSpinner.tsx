import { type HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type LoadingSpinnerProps = HTMLAttributes<HTMLDivElement> & {
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const spinnerSizes: Record<NonNullable<LoadingSpinnerProps['size']>, string> = {
  sm: 'size-4 border-2',
  md: 'size-5 border-2',
  lg: 'size-6 border-[3px]',
}

export function LoadingSpinner({
  className,
  label = 'Loading',
  size = 'md',
  ...props
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn('inline-flex items-center justify-center', className)}
      {...props}
    >
      <span
        className={cn(
          'animate-spin rounded-full border-current/20 border-t-current text-primary',
          spinnerSizes[size],
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}