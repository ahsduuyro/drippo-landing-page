import { Mail } from 'lucide-react'

import { Container } from '@/components/shared/Container'
import { cn } from '@/lib/utils'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.5 9.5H4V20h2.5V9.5zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.4c0-1.5-.6-2.4-1.9-2.4-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20H11V9.5h2.4v1.4c.5-.8 1.4-1.8 3.3-1.8 2.4 0 3.3 1.6 3.3 4.5V20z" />
    </svg>
  )
}

const linkClass =
  'text-sm font-semibold text-drippo-ink transition hover:text-drippo-black'

export function Footer() {
  return (
    <footer className="bg-drippo-fog pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pt-14 sm:pb-12">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-drippo-muted">Feel free to reach us at:</p>
          <a
            href="mailto:help@drippo.com"
            className={cn(
              'mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-200',
              'bg-drippo-card px-5 py-2.5 text-sm font-semibold text-drippo-ink',
              'transition hover:border-neutral-300 hover:text-drippo-black',
            )}
          >
            <Mail className="size-4 shrink-0 text-drippo-muted" strokeWidth={1.75} />
            help@drippo.com
          </a>
        </div>

        <div className="mt-10 border-t border-neutral-200/80 pt-10 sm:mt-12 sm:pt-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <p className="text-xs font-medium tracking-[0.08em] text-drippo-muted uppercase">
                Support
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="mailto:help@drippo.com" className={linkClass}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className={linkClass}>
                    Delete Account
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.08em] text-drippo-muted uppercase">
                Company
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className={linkClass}>
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:careers@drippo.com"
                    className="text-sm font-medium text-drippo-lime underline underline-offset-2 transition hover:text-drippo-lime-dark"
                  >
                    careers@drippo.com
                  </a>
                </li>
                <li className="pt-2">
                  <a href="#" className={linkClass}>
                    Join partnership
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.08em] text-drippo-muted uppercase">
                Legal
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className={linkClass}>
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className={linkClass}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className={linkClass}>
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:items-end lg:items-end">
              <div className="flex gap-2.5">
                {[
                  { Icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
                  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
                  {
                    Icon: InstagramIcon,
                    label: 'Instagram',
                    href: 'https://www.instagram.com/drippo.in/',
                  },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="inline-flex size-11 items-center justify-center rounded-full bg-drippo-black text-white transition hover:opacity-80"
                  >
                    <Icon className="size-3.5" />
                  </a>
                ))}
              </div>
              <p className="mt-auto pt-10 text-sm text-drippo-muted sm:pt-16">
                Drippo © 2026
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
