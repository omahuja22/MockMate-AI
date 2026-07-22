import { AlertCircle, CheckCircle2 } from 'lucide-react'

type AuthAlertProps = {
  tone: 'error' | 'success' | 'info'
  title: string
  message: string
}

export function AuthAlert({ tone, title, message }: AuthAlertProps) {
  const Icon = tone === 'success' ? CheckCircle2 : AlertCircle
  const role = tone === 'error' ? 'alert' : 'status'

  return (
    <div
      role={role}
      className="rounded-2xl border border-border bg-muted/40 p-4 text-sm shadow-[var(--shadow-xs)]"
    >
      <div className="flex gap-3">
        <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-foreground" />
        <div>
          <p className="font-medium text-foreground">{title}</p>
          <p className="mt-1 leading-6 text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  )
}
