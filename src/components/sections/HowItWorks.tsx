import { Lightbulb } from 'lucide-react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useRef, type MouseEvent } from 'react'

import { Container } from '@/components/shared/Container'
import { FadeIn } from '@/components/shared/FadeIn'
import { steps } from '@/data/landing'
import { cn } from '@/lib/utils'
import stepBrowse from '@/assets/step-browse.png'
import stepCheckout from '@/assets/step-checkout.png'
import stepDelivered from '@/assets/step-delivered.png'

const stepImages: Record<(typeof steps)[number]['id'], string> = {
  '1': stepBrowse,
  '2': stepCheckout,
  '3': stepDelivered,
}

const TILT_MAX = 14

function StepTiltCard({
  step,
  image,
}: {
  step: (typeof steps)[number]
  image: string
}) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const rotateXValue = useMotionValue(0)
  const rotateYValue = useMotionValue(0)
  const rotateX = useSpring(rotateXValue, { stiffness: 220, damping: 22 })
  const rotateY = useSpring(rotateYValue, { stiffness: 220, damping: 22 })
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  function handleMove(event: MouseEvent<HTMLElement>) {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    rotateXValue.set((0.5 - y) * TILT_MAX * 2)
    rotateYValue.set((x - 0.5) * TILT_MAX * 2)
  }

  function handleLeave() {
    rotateXValue.set(0)
    rotateYValue.set(0)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduceMotion ? undefined : { transform, transformStyle: 'preserve-3d' }}
      className={cn(
        'flex h-full flex-col overflow-hidden',
        'rounded-[1.5rem] bg-black will-change-transform',
        'sm:rounded-[1.75rem]',
      )}
    >
      <div className="relative z-10 flex shrink-0 flex-col items-center px-5 pt-7 text-center sm:px-6 sm:pt-8">
        <span
          className={cn(
            'inline-flex rounded-full bg-drippo-lime px-3.5 py-1',
            'text-xs font-extrabold tracking-wide text-drippo-cta',
            'sm:px-4',
          )}
        >
          {step.step}
        </span>
        <h3 className="mt-3 max-w-[15rem] font-display text-lg font-bold leading-snug text-white sm:mt-3.5 sm:text-xl">
          {step.title}
        </h3>
      </div>

      <div className="mt-3 flex flex-1 items-end justify-center overflow-hidden px-4 sm:mt-4 sm:px-5">
        <img
          src={image}
          alt={`${step.step}: ${step.title}`}
          className="pointer-events-none mx-auto h-auto w-full max-w-[260px] select-none object-contain object-bottom"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    </motion.article>
  )
}

export function HowItWorks() {
  return (
    <section id="why-us" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full border-2 border-drippo-lime',
                'bg-white px-5 py-2 text-sm font-semibold text-drippo-lime',
              )}
            >
              <Lightbulb className="size-4 shrink-0" strokeWidth={2} fill="none" />
              How it works
            </span>

            <h2
              className={cn(
                'stories-stroke-heading mt-6 font-display text-[1.85rem] font-extrabold tracking-tight sm:mt-7',
                'sm:text-4xl lg:text-[2.85rem] lg:leading-[1.15]',
              )}
            >
              Simple steps to stress-free shopping
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-drippo-muted sm:mt-5 sm:text-base">
              Scroll, pick, and try it on at home. If it fits, keep it. If not,
              swap it instantly.
            </p>
          </div>
        </FadeIn>

        <div
          className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6"
          style={{ perspective: 1200 }}
        >
          {steps.map((step, index) => (
            <FadeIn key={step.id} delay={index * 0.08}>
              <StepTiltCard step={step} image={stepImages[step.id]} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
