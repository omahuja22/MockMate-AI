import { useState, type InputHTMLAttributes } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/lib/utils'

type PasswordFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
  error?: string
}

export function PasswordField({ id, label, error, className, ...props }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false)
  const errorId = error && id ? `${id}-error` : undefined

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={cn(
            'h-11 w-full rounded-lg border border-border bg-background px-3 pr-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus-visible:ring-3 focus-visible:ring-ring/40',
            error ? 'border-destructive focus-visible:ring-destructive/20' : null,
            className,
          )}
          {...props}
        />
        <button
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          onClick={() => setVisible((current) => !current)}
          className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          {visible ? (
            <EyeOff aria-hidden="true" className="size-4" />
          ) : (
            <Eye aria-hidden="true" className="size-4" />
          )}
        </button>
      </div>
      {error ? (
        <p id={errorId} className="mt-2 text-sm leading-5 text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
