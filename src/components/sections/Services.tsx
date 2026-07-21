import { Star } from 'lucide-react'

import { Container } from '@/components/shared/Container'
import { FadeIn } from '@/components/shared/FadeIn'
import { cn } from '@/lib/utils'
import deliveryCardImg from '@/assets/service-30-mins-delivery.png'
import aiFitCardImg from '@/assets/service-ai-fit-check.png'
import exchangeCardImg from '@/assets/service-instant-exchange.png'
import tryAtDeliveryImg from '@/assets/service-try-at-delivery.png'

function ServiceTitle({ children }: { children: string }) {
  return (
    <h3 className="mt-3 text-center text-base font-bold text-drippo-black sm:mt-4 sm:text-lg">
      {children}
    </h3>
  )
}

function ServiceCard({
  src,
  alt,
  title,
}: {
  src: string
  alt: string
  title: string
}) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
        <img
          src={src}
          alt={alt}
          className="aspect-[4/5] h-auto w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
      <ServiceTitle>{title}</ServiceTitle>
    </article>
  )
}

const cards = [
  {
    id: 'delivery',
    node: (
      <ServiceCard
        src={deliveryCardImg}
        alt="30 Mins Delivery — Your style, delivered in just 30 minutes"
        title="30 mins delivery"
      />
    ),
  },
  {
    id: 'ai-fit',
    node: (
      <ServiceCard
        src={aiFitCardImg}
        alt="AI Fit Check — scan body measurements and get recommended size with fit confidence"
        title="AI Fit Check"
      />
    ),
  },
  {
    id: 'exchange',
    node: (
      <ServiceCard
        src={exchangeCardImg}
        alt="Instant Exchange — wrong size, instant exchange at your doorstep"
        title="Instant Exchange"
      />
    ),
  },
  {
    id: 'try',
    node: (
      <ServiceCard
        src={tryAtDeliveryImg}
        alt="Try at Delivery — try outfits at your doorstep and keep only what fits"
        title="Try at Delivery"
      />
    ),
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-drippo-fog py-14 sm:py-16 lg:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full border-2 border-drippo-lime',
                'bg-white px-5 py-2 text-sm font-semibold text-drippo-lime',
              )}
            >
              <Star className="size-4 shrink-0" strokeWidth={2} fill="none" />
              Our Services
            </span>
            <h2 className="stories-stroke-heading mt-5 font-display text-[1.75rem] font-extrabold tracking-tight sm:mt-6 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              Shopping, reimagined for you
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-drippo-muted sm:mt-5 sm:text-base">
              Find styles nearby, try them at delivery, and keep only what fits
              perfectly.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {cards.map((card, index) => (
            <FadeIn
              key={card.id}
              delay={index * 0.06}
              className="transition duration-300 hover:-translate-y-1"
            >
              {card.node}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
