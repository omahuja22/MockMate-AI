import { type ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-9rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
      <div className="hidden lg:block">
        <p className="text-sm font-medium text-primary">Enterprise interview readiness</p>
        <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-foreground">
          Calm authentication for a serious AI interview platform.
        </h2>
        <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
          Student, teacher, institute, and platform teams enter the same secure product
          foundation with role-aware access.
        </p>
      </div>
      <div className="flex justify-center lg:justify-end">{children}</div>
    </div>
  )
}
