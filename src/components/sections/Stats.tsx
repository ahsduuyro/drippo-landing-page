import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { Container } from '@/components/shared/Container'
import { FadeIn } from '@/components/shared/FadeIn'
import { stats } from '@/data/landing'

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })

    return () => controls.stop()
  }, [inView, reduceMotion, value])

  return (
    <article
      className="rounded-[1.5rem] px-6 py-9 text-center sm:rounded-[1.75rem] sm:px-8 sm:py-11"
      style={{
        backgroundColor: '#F4F7F9',
        backgroundImage:
          'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
        backgroundSize: '12px 12px',
      }}
    >
      <p
        ref={ref}
        className="font-display text-3xl font-extrabold tracking-tight text-drippo-black tabular-nums sm:text-4xl"
      >
        {display.toLocaleString('en-US')}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-drippo-muted sm:text-base">
        {label}
      </p>
    </article>
  )
}

export function Stats() {
  return (
    <section
      id="about"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <FadeIn>
          <h2 className="stories-stroke-heading mx-auto max-w-4xl text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            On-demand fashion, delivered to your doorstep
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-drippo-muted sm:mt-6 sm:text-base">
            Stop worrying about size and fit. With Drippo, try your outfits at
            delivery and instantly exchange if needed.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
