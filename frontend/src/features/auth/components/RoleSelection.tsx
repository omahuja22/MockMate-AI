import { Check } from 'lucide-react'

import { roleOptions } from '@/features/auth/auth.constants'
import { cn } from '@/lib/utils'
import { type AuthRole } from '@/types/auth'

type RoleSelectionProps = {
  value: AuthRole
  onChange: (role: AuthRole) => void
}

export function RoleSelection({ value, onChange }: RoleSelectionProps) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">Role</legend>
      <div className="mt-2 grid gap-2">
        {roleOptions.map((role) => {
          const selected = role.value === value

          return (
            <label
              key={role.value}
              className={cn(
                'flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background p-3 transition hover:bg-muted/40',
                selected ? 'border-primary/40 bg-primary/5' : null,
              )}
            >
              <input
                type="radio"
                name="role"
                value={role.value}
                checked={selected}
                onChange={() => onChange(role.value)}
                className="sr-only"
              />
              <span
                className={cn(
                  'mt-0.5 inline-flex size-5 items-center justify-center rounded-full border',
                  selected ? 'border-primary bg-primary text-primary-foreground' : 'border-border',
                )}
                aria-hidden="true"
              >
                {selected ? <Check className="size-3" /> : null}
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">{role.label}</span>
                <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                  {role.description}
                </span>
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
