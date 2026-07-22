import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

import { Logo } from '@/components/common/Logo'

type AuthCardProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
  footer?: ReactNode
}

export function AuthCard({ eyebrow, title, description, children, footer }: AuthCardProps) {
  return (
    <motion.section
      aria-labelledby="auth-title"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
      className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-lg)] sm:p-8"
    >
      <div className="mb-8">
        <Logo compact />
        <p className="mt-6 text-sm font-medium text-primary">{eyebrow}</p>
        <h1 id="auth-title" className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      </div>

      {children}

      {footer ? <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div> : null}
    </motion.section>
  )
}
