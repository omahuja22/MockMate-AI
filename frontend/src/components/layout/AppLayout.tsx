import { type ReactNode } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Logo } from '@/components/common/Logo'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Container } from '@/components/layout/Container'
import { appPaths } from '@/routes/paths'

type AppLayoutProps = {
  children?: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation()
  const content = children ?? <Outlet />
  const isHomePage = location.pathname === appPaths.home

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />
          <ThemeToggle />
        </Container>
      </header>

      <main className="flex-1">
        {isHomePage ? (
          content
        ) : (
          <Container className="py-10 sm:py-12">{content}</Container>
        )}
      </main>
    </div>
  )
}
