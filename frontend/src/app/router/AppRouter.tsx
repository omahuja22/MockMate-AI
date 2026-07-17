import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppLayout } from '@/components/layout/AppLayout'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { HomePage } from '@/pages/home/HomePage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { NotFoundPage } from '@/pages/errors/NotFoundPage'
import { SignupPage } from '@/pages/auth/SignupPage'
import { appPaths } from '@/routes/paths'

const appRouter = createBrowserRouter([
  {
    path: appPaths.home,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: appPaths.login.slice(1),
        element: <LoginPage />,
      },
      {
        path: appPaths.signup.slice(1),
        element: <SignupPage />,
      },
      {
        path: appPaths.dashboard.slice(1),
        element: <DashboardPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={appRouter} />
}

export { appRouter }