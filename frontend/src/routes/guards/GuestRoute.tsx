import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { appPaths } from '@/routes/paths'
import { useAuthStore } from '@/store/authStore'

export function GuestRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const location = useLocation()
  const redirectTo = typeof location.state === 'object' && location.state !== null && 'from' in location.state
    ? String(location.state.from)
    : appPaths.dashboard

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }

  return <Outlet />
}
