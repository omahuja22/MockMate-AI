import { type HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize
}

const containerSizes: Record<ContainerSize, string> = {
  sm: 'max-w-[var(--container-sm)]',
  md: 'max-w-[var(--container-md)]',
  lg: 'max-w-[var(--container-lg)]',
  xl: 'max-w-[var(--container-xl)]',
  full: 'max-w-none',
}

export function Container({ className, size = 'xl', ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        containerSizes[size],
        className,
      )}
      {...props}
    />
  )
}