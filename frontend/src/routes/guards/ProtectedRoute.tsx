import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { appPaths } from '@/routes/paths'
import { useAuthStore } from '@/store/authStore'

export function ProtectedRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={appPaths.login} replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
