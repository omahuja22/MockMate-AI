export type AuthRole = 'student' | 'teacher' | 'institute_admin' | 'platform_admin'

export type AuthUser = {
  id: string
  name: string
  email: string
  role: AuthRole
  emailVerified: boolean
}

export type AuthSession = {
  accessToken: string
  expiresAt: string
  rememberMe: boolean
}

export type AuthStateStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated'

export type AuthErrorCode =
  | 'network'
  | 'wrong_password'
  | 'user_not_found'
  | 'server_error'
  | 'expired_session'
  | 'validation'

export type AuthError = {
  code: AuthErrorCode
  message: string
}

export type LoginInput = {
  email: string
  password: string
  rememberMe: boolean
}

export type SignupInput = {
  name: string
  email: string
  password: string
  role: AuthRole
}

export type ResetPasswordInput = {
  token: string
  password: string
}

export type AuthResult = {
  user: AuthUser
  session: AuthSession
}

export const authRoleLabels: Record<AuthRole, string> = {
  student: 'Student',
  teacher: 'Teacher',
  institute_admin: 'Institute Admin',
  platform_admin: 'Platform Admin',
}
