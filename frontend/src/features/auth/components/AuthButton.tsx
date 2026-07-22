import { type ButtonHTMLAttributes } from 'react'

import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Button } from '@/components/ui/button'

type AuthButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  loadingLabel?: string
}

export function AuthButton({
  children,
  loading = false,
  loadingLabel = 'Please wait',
  disabled,
  ...props
}: AuthButtonProps) {
  return (
    <Button
      type="submit"
      size="lg"
      className="h-11 w-full rounded-lg text-sm"
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <LoadingSpinner label={loadingLabel} size="sm" /> : null}
      <span>{loading ? loadingLabel : children}</span>
    </Button>
  )
}
