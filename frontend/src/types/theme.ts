export const themeModes = ['light', 'dark'] as const

export type ThemeMode = (typeof themeModes)[number]

export const themeStorageKey = 'mockmate-theme'

export function isThemeMode(value: string): value is ThemeMode {
  return themeModes.includes(value as ThemeMode)
}