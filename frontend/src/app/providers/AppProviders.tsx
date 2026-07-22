import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { AuthBootstrap } from '@/features/auth/AuthBootstrap'
import { useTheme } from '@/hooks/useTheme'

import { queryClient } from './queryClient'

function ThemeBootstrap({ children }: PropsWithChildren) {
  useTheme()

  return <>{children}</>
}

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeBootstrap>
        <AuthBootstrap>{children}</AuthBootstrap>
      </ThemeBootstrap>
    </QueryClientProvider>
  )
}
