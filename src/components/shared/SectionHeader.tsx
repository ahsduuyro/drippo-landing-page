import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold tracking-[0.12em] text-drippo-lime uppercase sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-display text-3xl font-extrabold tracking-tight text-drippo-black sm:text-4xl lg:text-[2.75rem]',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-drippo-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
