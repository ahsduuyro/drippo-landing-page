import { Quote, Smile } from 'lucide-react'
import { useRef } from 'react'

import { Container } from '@/components/shared/Container'
import { FadeIn } from '@/components/shared/FadeIn'
import { testimonials } from '@/data/landing'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="overflow-x-clip bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full border-2 border-drippo-lime',
                'bg-white px-5 py-2 text-sm font-semibold text-drippo-lime',
              )}
            >
              <Smile className="size-4 shrink-0" strokeWidth={2} />
              Our Testimonials
            </span>
            <h2 className="stories-stroke-heading mt-5 font-display text-[1.75rem] font-extrabold tracking-tight sm:mt-6 sm:text-4xl lg:text-[2.75rem]">
              Loved by shoppers like you
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-drippo-muted sm:mt-5 sm:text-base">
              Thousands already trust us for fast, stress-free fashion.
            </p>
          </div>
        </FadeIn>
      </Container>

      <div className="relative mt-10 overflow-hidden lg:mt-12">
        {/* Soft edge washes into the page */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/85 to-transparent sm:w-20 lg:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/85 to-transparent sm:w-20 lg:w-28"
          aria-hidden
        />

        <div
          ref={scrollerRef}
          className={cn(
            'flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain',
            'scroll-px-4 px-4 pb-2 sm:gap-5 sm:scroll-px-6 sm:px-6 lg:scroll-px-8 lg:px-8',
            '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          )}
        >
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.location}`}
              className={cn(
                'w-[min(82vw,300px)] shrink-0 snap-start rounded-[1.5rem] p-5 sm:w-[320px] sm:p-6',
                'stats-card',
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-drippo-black text-sm font-bold text-white"
                    aria-hidden
                  >
                    {item.name.slice(0, 1)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-drippo-black">
                      {item.name}
                    </p>
                    <p className="truncate text-xs text-drippo-muted">
                      {item.location}
                    </p>
                  </div>
                </div>
                <Quote
                  className="size-7 shrink-0 fill-drippo-black text-drippo-black sm:size-8"
                  aria-hidden
                />
              </div>

              <div className="my-4 h-px bg-neutral-200" />

              <p className="text-sm leading-relaxed text-drippo-ink">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
