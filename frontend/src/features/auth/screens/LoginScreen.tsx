import { useState, type FormEvent } from 'react'
import { Chrome } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { AuthAlert } from '@/features/auth/components/AuthAlert'
import { AuthButton } from '@/features/auth/components/AuthButton'
import { AuthCard } from '@/features/auth/components/AuthCard'
import { AuthCheckbox } from '@/features/auth/components/AuthCheckbox'
import { AuthLayout } from '@/features/auth/components/AuthLayout'
import { AuthTextField } from '@/features/auth/components/AuthTextField'
import { PasswordField } from '@/features/auth/components/PasswordField'
import { demoCredentials } from '@/features/auth/auth.constants'
import { isValidEmail } from '@/features/auth/validation'
import { appPaths } from '@/routes/paths'
import { useAuthStore } from '@/store/authStore'

type LoginErrors = {
  email?: string
  password?: string
}

function getRedirectPath(state: unknown) {
  if (typeof state === 'object' && state !== null && 'from' in state) {
    return String(state.from)
  }

  return appPaths.dashboard
}

export function LoginScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const login = useAuthStore((state) => state.login)
  const loading = useAuthStore((state) => state.loading)
  const error = useAuthStore((state) => state.error)
  const clearError = useAuthStore((state) => state.clearError)
  const [email, setEmail] = useState('student@mockmate.ai')
  const [password, setPassword] = useState(demoCredentials.password)
  const [rememberMe, setRememberMe] = useState(true)
  const [errors, setErrors] = useState<LoginErrors>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    clearError()

    const nextErrors: LoginErrors = {}
    if (!isValidEmail(email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!password) {
      nextErrors.password = 'Password is required.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }

    try {
      await login({ email, password, rememberMe })
      navigate(getRedirectPath(location.state), { replace: true })
    } catch {
      // Store handles the user-facing error state.
    }
  }

  return (
    <AuthLayout>
      <AuthCard
        eyebrow="Welcome back"
        title="Sign in to MockMate AI"
        description="Continue to your interview readiness workspace."
        footer={
          <>
            New to MockMate AI?{' '}
            <Link className="font-medium text-foreground hover:underline" to={appPaths.signup}>
              Create an account
            </Link>
          </>
        }
      >
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          {error ? <AuthAlert tone="error" title="Unable to sign in" message={error.message} /> : null}

          <AuthTextField
            id="login-email"
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            error={errors.email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <PasswordField
            id="login-password"
            label="Password"
            autoComplete="current-password"
            value={password}
            error={errors.password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className="flex items-center justify-between gap-4">
            <AuthCheckbox
              id="remember-me"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              label="Remember me"
            />
            <Link
              to={appPaths.forgotPassword}
              className="text-sm font-medium text-foreground hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <AuthButton loading={loading} loadingLabel="Signing in">
            Sign In
          </AuthButton>

          <Button
            type="button"
            variant="outline"
            size="lg"
            className="h-11 w-full rounded-lg text-sm"
            onClick={() => {
              clearError()
            }}
          >
            <Chrome aria-hidden="true" className="size-4" />
            Continue with Google
          </Button>

          <p className="text-xs leading-5 text-muted-foreground">
            Demo password: <span className="font-medium text-foreground">{demoCredentials.password}</span>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
