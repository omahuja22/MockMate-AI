import { Navigate, Outlet } from 'react-router-dom'

import { appPaths } from '@/routes/paths'
import { useAuthStore } from '@/store/authStore'
import { type AuthRole } from '@/types/auth'

type RoleRouteProps = {
  allowedRoles: AuthRole[]
}

export function RoleRoute({ allowedRoles }: RoleRouteProps) {
  const role = useAuthStore((state) => state.role)

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to={appPaths.dashboard} replace />
  }

  return <Outlet />
}
