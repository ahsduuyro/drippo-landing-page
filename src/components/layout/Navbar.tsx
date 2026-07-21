import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import drippoLogo from '@/assets/drippo-logo.png'
import { Container } from '@/components/shared/Container'
import { navLinks } from '@/data/landing'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', open)
    return () => {
      document.documentElement.classList.remove('nav-open')
    }
  }, [open])

  return (
    <header
      className={cn(
        'pointer-events-none fixed inset-x-0 top-0 z-50',
        'pt-[max(1rem,env(safe-area-inset-top))] sm:pt-[max(1.25rem,env(safe-area-inset-top))]',
      )}
    >
      <Container>
        <nav
          className={cn(
            'pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full bg-white px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 sm:gap-6 sm:px-8 sm:py-3.5',
            scrolled && 'shadow-[0_10px_36px_rgba(0,0,0,0.12)]',
          )}
          aria-label="Primary"
        >
          <a
            href="#top"
            className="inline-flex min-h-11 min-w-0 shrink-0 items-center"
          >
            <img
              src={drippoLogo}
              alt="Drippo — Fashion at Your Doorstep"
              className="h-9 w-auto sm:h-10"
              width={234}
              height={116}
              decoding="async"
            />
          </a>

          <ul className="hidden items-center gap-6 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-drippo-black transition-colors hover:opacity-70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-neutral-200 text-drippo-black md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open ? (
          <div
            id="mobile-nav"
            className="pointer-events-auto mt-3 max-h-[min(70vh,calc(100dvh-6rem))] overflow-y-auto rounded-3xl bg-white p-4 shadow-xl md:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-11 items-center rounded-xl px-3 py-3 text-sm font-semibold text-drippo-black hover:bg-neutral-50"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </header>
  )
}
