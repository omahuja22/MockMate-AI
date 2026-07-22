export function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email)
}

export function getPasswordError(password: string) {
  if (password.length < 8) {
    return 'Password must be at least 8 characters.'
  }

  if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return 'Password must include an uppercase letter and a number.'
  }

  return null
}
