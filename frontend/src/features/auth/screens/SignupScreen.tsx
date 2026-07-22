import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthAlert } from '@/features/auth/components/AuthAlert'
import { AuthButton } from '@/features/auth/components/AuthButton'
import { AuthCard } from '@/features/auth/components/AuthCard'
import { AuthCheckbox } from '@/features/auth/components/AuthCheckbox'
import { AuthLayout } from '@/features/auth/components/AuthLayout'
import { AuthTextField } from '@/features/auth/components/AuthTextField'
import { PasswordField } from '@/features/auth/components/PasswordField'
import { RoleSelection } from '@/features/auth/components/RoleSelection'
import { getPasswordError, isValidEmail } from '@/features/auth/validation'
import { appPaths } from '@/routes/paths'
import { useAuthStore } from '@/store/authStore'
import { type AuthRole } from '@/types/auth'

type SignupErrors = {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
  terms?: string
}

export function SignupScreen() {
  const navigate = useNavigate()
  const signup = useAuthStore((state) => state.signup)
  const loading = useAuthStore((state) => state.loading)
  const error = useAuthStore((state) => state.error)
  const clearError = useAuthStore((state) => state.clearError)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState<AuthRole>('student')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [errors, setErrors] = useState<SignupErrors>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    clearError()

    const nextErrors: SignupErrors = {}
    if (!name.trim()) {
      nextErrors.name = 'Name is required.'
    }
    if (!isValidEmail(email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    const passwordError = getPasswordError(password)
    if (passwordError) {
      nextErrors.password = passwordError
    }
    if (password !== confirmPassword) {
      nextErrors.confirmPassword = 'Passwords must match.'
    }
    if (!termsAccepted) {
      nextErrors.terms = 'You must accept the terms to continue.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }

    try {
      await signup({ name: name.trim(), email, password, role })
      navigate(appPaths.verifyEmail, { replace: true })
    } catch {
      // Store handles the user-facing error state.
    }
  }

  return (
    <AuthLayout>
      <AuthCard
        eyebrow="Create account"
        title="Start your interview workspace"
        description="Choose your role so MockMate AI can prepare the right experience."
        footer={
          <>
            Already have an account?{' '}
            <Link className="font-medium text-foreground hover:underline" to={appPaths.login}>
              Sign in
            </Link>
          </>
        }
      >
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          {error ? <AuthAlert tone="error" title="Unable to create account" message={error.message} /> : null}

          <AuthTextField
            id="signup-name"
            label="Name"
            autoComplete="name"
            value={name}
            error={errors.name}
            onChange={(event) => setName(event.target.value)}
          />
          <AuthTextField
            id="signup-email"
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            error={errors.email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <PasswordField
            id="signup-password"
            label="Password"
            autoComplete="new-password"
            value={password}
            error={errors.password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <PasswordField
            id="signup-confirm-password"
            label="Confirm Password"
            autoComplete="new-password"
            value={confirmPassword}
            error={errors.confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <RoleSelection value={role} onChange={setRole} />

          <div>
            <AuthCheckbox
              id="terms"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
              label="I agree to the terms, privacy policy, and responsible AI evaluation guidelines."
            />
            {errors.terms ? (
              <p className="mt-2 text-sm leading-5 text-destructive">{errors.terms}</p>
            ) : null}
          </div>

          <AuthButton loading={loading} loadingLabel="Creating account">
            Create Account
          </AuthButton>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
