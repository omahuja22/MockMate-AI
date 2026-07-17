export const appPaths = {
  home: '/',
  login: '/login',
  signup: '/signup',
  dashboard: '/dashboard',
} as const

export type AppPath = (typeof appPaths)[keyof typeof appPaths]