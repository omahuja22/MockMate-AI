import { useEffect, useState } from 'react'

type UseCountUpOptions = {
  value: number
  duration?: number
  enabled?: boolean
}

export function useCountUp({ value, duration = 900, enabled = true }: UseCountUpOptions) {
  const [displayValue, setDisplayValue] = useState(enabled ? 0 : value)

  useEffect(() => {
    if (!enabled) {
      setDisplayValue(value)
      return
    }

    let animationFrame = 0
    const start = performance.now()

    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      setDisplayValue(Math.round(value * progress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update)
      }
    }

    animationFrame = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [duration, enabled, value])

  return displayValue
}
