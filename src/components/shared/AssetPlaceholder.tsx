import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type AssetPlaceholderProps = {
  label: string
  className?: string
  aspect?: string
}

/**
 * TODO: Replace with the exported Figma asset named in `label`.
 * Drop the file into `src/assets/` and swap this component for an <img>/<picture>.
 */
export function AssetPlaceholder({
  label,
  className,
  aspect = 'aspect-[4/5]',
}: AssetPlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-neutral-200 to-neutral-300 text-center',
        aspect,
        className,
      )}
      role="img"
      aria-label={`Missing asset: ${label}`}
    >
      <ImageIcon className="size-8 text-neutral-500" aria-hidden />
      <p className="max-w-[12rem] px-3 text-[11px] font-medium leading-snug text-neutral-600">
        TODO: {label}
      </p>
    </div>
  )
}
