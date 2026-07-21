import { motion, useReducedMotion } from 'framer-motion'

import { FadeIn } from '@/components/shared/FadeIn'
import { Container } from '@/components/shared/Container'
import heroPhones from '@/assets/Frame 2085658027.png'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black pt-36 pb-0 text-white sm:pt-40 lg:pt-44"
    >
      <Container className="relative z-10">
        <FadeIn>
          <h1 className="mx-auto max-w-4xl px-1 text-center font-display text-[2.15rem] leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-[4.5rem] lg:leading-[1.05]">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3">
              <span className="hero-stroke-heading">Fashion by</span>
              <span className="inline-flex items-center bg-drippo-lime px-2.5 py-0.5 text-drippo-cta sm:px-3 sm:py-1">
                Drippo
              </span>
            </span>
            <span className="mt-1 block text-white sm:mt-2">minutes!</span>
          </h1>

          <p className="mx-auto mt-8 text-center text-base font-medium text-drippo-muted sm:mt-10 sm:text-lg">
            Download the app now
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10 sm:mt-12">
          <motion.div
            className="mx-auto -mb-1 w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[760px]"
            whileHover={reduceMotion ? undefined : { scale: 1.03, y: -8 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <img
              src={heroPhones}
              alt="Drippo app shown on three smartphones"
              className="mx-auto block h-auto w-full select-none object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </motion.div>
        </FadeIn>
      </Container>
    </section>
  )
}
