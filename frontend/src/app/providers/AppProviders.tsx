import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { useTheme } from '@/hooks/useTheme'

import { queryClient } from './queryClient'

function ThemeBootstrap({ children }: PropsWithChildren) {
  useTheme()

  return <>{children}</>
}

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeBootstrap>{children}</ThemeBootstrap>
    </QueryClientProvider>
  )
}