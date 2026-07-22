import {
  type AuthError,
  type AuthResult,
  type AuthRole,
  type AuthSession,
  type AuthUser,
  type LoginInput,
  type ResetPasswordInput,
  type SignupInput,
} from '@/types/auth'

const authStorageKey = 'mockmate.auth.session'
const mockPassword = 'MockMate@123'

const demoUsers: AuthUser[] = [
  {
    id: 'student-demo',
    name: 'Aisha Student',
    email: 'student@mockmate.ai',
    role: 'student',
    emailVerified: true,
  },
  {
    id: 'teacher-demo',
    name: 'Rohan Teacher',
    email: 'teacher@mockmate.ai',
    role: 'teacher',
    emailVerified: true,
  },
  {
    id: 'institute-admin-demo',
    name: 'Meera Admin',
    email: 'admin@mockmate.ai',
    role: 'institute_admin',
    emailVerified: true,
  },
  {
    id: 'platform-admin-demo',
    name: 'Platform Admin',
    email: 'platform@mockmate.ai',
    role: 'platform_admin',
    emailVerified: true,
  },
]

type StoredAuth = AuthResult

function createAuthError(code: AuthError['code'], message: string): AuthError {
  return { code, message }
}

function createSession(rememberMe: boolean): AuthSession {
  const expiresInDays = rememberMe ? 30 : 1
  const expiresAt = new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000).toISOString()

  return {
    accessToken: `mock-session-${crypto.randomUUID()}`,
    expiresAt,
    rememberMe,
  }
}

function persistAuth(auth: StoredAuth) {
  window.localStorage.setItem(authStorageKey, JSON.stringify(auth))
}

function clearPersistedAuth() {
  window.localStorage.removeItem(authStorageKey)
}

function findUserByEmail(email: string) {
  return demoUsers.find((user) => user.email.toLowerCase() === email.toLowerCase())
}

async function wait() {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 450)
  })
}

export const authService = {
  async login(input: LoginInput): Promise<AuthResult> {
    await wait()

    if (input.email.toLowerCase().includes('network')) {
      throw createAuthError('network', 'Network error. Please check your connection and try again.')
    }

    if (input.email.toLowerCase().includes('server')) {
      throw createAuthError('server_error', 'Something went wrong on our side. Please try again.')
    }

    const user = findUserByEmail(input.email)
    if (!user) {
      throw createAuthError('user_not_found', 'No account was found for this email address.')
    }

    if (input.password !== mockPassword) {
      throw createAuthError('wrong_password', 'The password you entered is incorrect.')
    }

    const result = { user, session: createSession(input.rememberMe) }
    persistAuth(result)

    return result
  },

  async signup(input: SignupInput): Promise<AuthResult> {
    await wait()

    const user: AuthUser = {
      id: crypto.randomUUID(),
      name: input.name,
      email: input.email,
      role: input.role,
      emailVerified: false,
    }
    const result = { user, session: createSession(true) }
    persistAuth(result)

    return result
  },

  async forgotPassword(email: string): Promise<void> {
    await wait()

    if (email.toLowerCase().includes('network')) {
      throw createAuthError('network', 'Network error. Please check your connection and try again.')
    }
  },

  async resetPassword(input: ResetPasswordInput): Promise<void> {
    await wait()

    if (input.token.toLowerCase().includes('expired')) {
      throw createAuthError('expired_session', 'This reset link has expired. Request a new link.')
    }
  },

  async verifyEmail(): Promise<void> {
    await wait()
  },

  async getSession(): Promise<AuthResult | null> {
    await wait()
    const rawAuth = window.localStorage.getItem(authStorageKey)

    if (!rawAuth) {
      return null
    }

    const auth = JSON.parse(rawAuth) as StoredAuth
    if (new Date(auth.session.expiresAt).getTime() <= Date.now()) {
      clearPersistedAuth()
      throw createAuthError('expired_session', 'Your session expired. Please sign in again.')
    }

    return auth
  },

  async logout(): Promise<void> {
    await wait()
    clearPersistedAuth()
  },

  getDemoPassword() {
    return mockPassword
  },

  getRoleLabel(role: AuthRole) {
    const labels: Record<AuthRole, string> = {
      student: 'Student',
      teacher: 'Teacher',
      institute_admin: 'Institute Admin',
      platform_admin: 'Platform Admin',
    }

    return labels[role]
  },
}
