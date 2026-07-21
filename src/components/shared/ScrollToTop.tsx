import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

const SHOW_AFTER_PX = 480

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    const top = document.getElementById('top')
    if (top) {
      top.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
      return
    }
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          key="scroll-to-top"
          initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onClick={scrollUp}
          aria-label="Back to top"
          className={cn(
            'fixed z-50',
            'right-[max(1rem,env(safe-area-inset-right))]',
            'bottom-[max(1rem,env(safe-area-inset-bottom))]',
            'sm:right-[max(1.5rem,env(safe-area-inset-right))]',
            'sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]',
            'inline-flex size-14 items-center justify-center',
            'rounded-full border-2 border-drippo-lime bg-drippo-lime',
            'group shadow-[0_10px_28px_rgba(0,0,0,0.16)]',
            'transition hover:border-drippo-lime-dark hover:bg-drippo-lime-dark hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-drippo-black',
            'active:scale-[0.96]',
          )}
        >
          <ArrowUp
            className="size-6 shrink-0 text-drippo-cta group-hover:text-white"
            strokeWidth={2.75}
            aria-hidden
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
