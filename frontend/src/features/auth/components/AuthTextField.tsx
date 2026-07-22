import { type InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type AuthTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function AuthTextField({ id, label, error, className, ...props }: AuthTextFieldProps) {
  const errorId = error && id ? `${id}-error` : undefined

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(
          'mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus-visible:ring-3 focus-visible:ring-ring/40',
          error ? 'border-destructive focus-visible:ring-destructive/20' : null,
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm leading-5 text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
