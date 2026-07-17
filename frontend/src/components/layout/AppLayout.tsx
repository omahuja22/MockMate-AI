import { type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/common/Logo'
import { ThemeToggle } from '@/components/common/ThemeToggle'

type AppLayoutProps = {
  children?: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />
          <ThemeToggle />
        </Container>
      </header>

      <main className="flex-1 py-10 sm:py-12">
        <Container>{children ?? <Outlet />}</Container>
      </main>
    </div>
  )
}