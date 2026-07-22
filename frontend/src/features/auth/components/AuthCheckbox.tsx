import { type InputHTMLAttributes, type ReactNode } from 'react'

type AuthCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: ReactNode
}

export function AuthCheckbox({ id, label, ...props }: AuthCheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 size-4 rounded border-border text-primary focus-visible:ring-3 focus-visible:ring-ring/40"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}
