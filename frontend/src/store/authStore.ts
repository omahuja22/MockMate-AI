import { create } from 'zustand'

import { authService } from '@/services/auth/authService'
import {
  type AuthError,
  type AuthRole,
  type AuthSession,
  type AuthStateStatus,
  type AuthUser,
  type LoginInput,
  type ResetPasswordInput,
  type SignupInput,
} from '@/types/auth'

type AuthStore = {
  user: AuthUser | null
  session: AuthSession | null
  status: AuthStateStatus
  loading: boolean
  error: AuthError | null
  role: AuthRole | null
  isAuthenticated: boolean
  initialize: () => Promise<void>
  login: (input: LoginInput) => Promise<void>
  signup: (input: SignupInput) => Promise<void>
  forgotPassword: (email: string) => Promise<void>
  resetPassword: (input: ResetPasswordInput) => Promise<void>
  verifyEmail: () => Promise<void>
  logout: () => Promise<void>
  clearError: () => void
}

function toAuthError(error: unknown): AuthError {
  if (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'message' in error
  ) {
    return error as AuthError
  }

  return {
    code: 'server_error',
    message: 'Something went wrong. Please try again.',
  }
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  session: null,
  status: 'idle',
  loading: false,
  error: null,
  role: null,
  isAuthenticated: false,

  initialize: async () => {
    set({ loading: true, status: 'loading', error: null })

    try {
      const result = await authService.getSession()

      if (!result) {
        set({
          user: null,
          session: null,
          role: null,
          isAuthenticated: false,
          loading: false,
          status: 'unauthenticated',
        })
        return
      }

      set({
        user: result.user,
        session: result.session,
        role: result.user.role,
        isAuthenticated: true,
        loading: false,
        status: 'authenticated',
      })
    } catch (error) {
      set({
        user: null,
        session: null,
        role: null,
        isAuthenticated: false,
        loading: false,
        status: 'unauthenticated',
        error: toAuthError(error),
      })
    }
  },

  login: async (input) => {
    set({ loading: true, error: null })

    try {
      const result = await authService.login(input)
      set({
        user: result.user,
        session: result.session,
        role: result.user.role,
        isAuthenticated: true,
        loading: false,
        status: 'authenticated',
      })
    } catch (error) {
      set({ loading: false, error: toAuthError(error), status: 'unauthenticated' })
      throw error
    }
  },

  signup: async (input) => {
    set({ loading: true, error: null })

    try {
      const result = await authService.signup(input)
      set({
        user: result.user,
        session: result.session,
        role: result.user.role,
        isAuthenticated: true,
        loading: false,
        status: 'authenticated',
      })
    } catch (error) {
      set({ loading: false, error: toAuthError(error), status: 'unauthenticated' })
      throw error
    }
  },

  forgotPassword: async (email) => {
    set({ loading: true, error: null })

    try {
      await authService.forgotPassword(email)
      set({ loading: false })
    } catch (error) {
      set({ loading: false, error: toAuthError(error) })
      throw error
    }
  },

  resetPassword: async (input) => {
    set({ loading: true, error: null })

    try {
      await authService.resetPassword(input)
      set({ loading: false })
    } catch (error) {
      set({ loading: false, error: toAuthError(error) })
      throw error
    }
  },

  verifyEmail: async () => {
    set({ loading: true, error: null })

    try {
      await authService.verifyEmail()
      set((state) => ({
        user: state.user ? { ...state.user, emailVerified: true } : state.user,
        loading: false,
      }))
    } catch (error) {
      set({ loading: false, error: toAuthError(error) })
      throw error
    }
  },

  logout: async () => {
    set({ loading: true, error: null })
    await authService.logout()
    set({
      user: null,
      session: null,
      role: null,
      isAuthenticated: false,
      loading: false,
      status: 'unauthenticated',
    })
  },

  clearError: () => set({ error: null }),
}))
