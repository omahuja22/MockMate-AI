import { useEffect, type PropsWithChildren } from 'react'

import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { useAuthStore } from '@/store/authStore'

export function AuthBootstrap({ children }: PropsWithChildren) {
  const initialize = useAuthStore((state) => state.initialize)
  const status = useAuthStore((state) => state.status)

  useEffect(() => {
    void initialize()
  }, [initialize])

  if (status === 'idle' || status === 'loading') {
    return (
      <div className="grid min-h-screen place-items-center bg-background text-foreground">
        <LoadingSpinner label="Restoring your session" size="lg" />
      </div>
    )
  }

  return <>{children}</>
}
