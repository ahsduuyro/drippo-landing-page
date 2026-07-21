import { Smile } from 'lucide-react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { useRef, type MouseEvent, type ReactNode } from 'react'

import { Container } from '@/components/shared/Container'
import { FadeIn } from '@/components/shared/FadeIn'
import { ngoPillars } from '@/data/landing'
import { cn } from '@/lib/utils'
import missionDonateBox from '@/assets/mission-donate-box.png'
import missionBeneficiary from '@/assets/mission-beneficiary.png'
import missionHeadline from '@/assets/mission-headline.png'
import pillarCollection from '@/assets/pillar-collection.png'
import pillarCuration from '@/assets/pillar-curation.png'
import pillarDistribution from '@/assets/pillar-distribution.png'

const pillarIconImages = [
  pillarCollection,
  pillarCuration,
  pillarDistribution,
] as const
const TILT_MAX = 12

function TiltPhoto({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const rotateXValue = useMotionValue(0)
  const rotateYValue = useMotionValue(0)
  const rotateX = useSpring(rotateXValue, { stiffness: 220, damping: 22 })
  const rotateY = useSpring(rotateYValue, { stiffness: 220, damping: 22 })
  const transform = useMotionTemplate`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  function handleMove(event: MouseEvent<HTMLDivElement>) {
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
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        reduceMotion
          ? undefined
          : {
              transform,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }
      }
      className={cn('isolate will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}

function MissionCopy({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col items-center text-center',
        compact ? 'max-w-[280px]' : 'max-w-lg',
      )}
    >
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full border-2 border-drippo-lime',
          'bg-white px-5 py-2 text-sm font-semibold text-drippo-lime',
        )}
      >
        <Smile className="size-4 shrink-0" strokeWidth={2} fill="none" />
        Drippo mission
      </span>

      <h2 className={cn('w-full', compact ? 'mt-4' : 'mt-8 sm:mt-10')}>
        <img
          src={missionHeadline}
          alt="Your extra can be their everything. Give your unused clothes a second life. Your donation reaches the right people, tracked with live updates."
          className={cn(
            'mx-auto h-auto w-full select-none',
            compact ? 'max-w-[260px]' : 'max-w-[420px] sm:max-w-[480px]',
          )}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </h2>

      <a
        href="#download"
        className={cn(
          'inline-flex items-center justify-center rounded-full',
          'bg-drippo-lime text-sm font-bold text-drippo-cta',
          'transition hover:bg-drippo-lime-dark hover:text-white',
          compact ? 'mt-5 h-11 min-h-11 px-6 text-sm' : 'mt-8 h-12 min-h-12 px-8 sm:mt-10',
        )}
      >
        Start Your Donation
      </a>
    </div>
  )
}

export function NgoImpact() {
  return (
    <section
      id="ngo"
      className="bg-white pt-8 pb-4 text-drippo-black sm:pt-10 sm:pb-5 lg:pt-12 lg:pb-4"
    >
      <FadeIn>
        {/* Desktop: equal-height row — side images set the height */}
        <div className="overflow-x-clip">
          <div className="relative mx-auto hidden w-full max-w-[1280px] items-start gap-4 px-6 pb-0 lg:grid lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)_minmax(0,280px)] xl:grid-cols-[minmax(0,300px)_minmax(0,1fr)_minmax(0,300px)] xl:gap-6 xl:px-8">
            <TiltPhoto className="-rotate-3 justify-self-start pt-10 xl:-rotate-6">
              <img
                src={missionDonateBox}
                alt="Drippo cloth mission donation box being handed over"
                className="block h-auto w-full max-w-[300px] select-none [clip-path:inset(0_0_1.5px_0)]"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </TiltPhoto>

            <div className="flex -translate-y-2 items-start justify-center self-stretch px-2 sm:-translate-y-3 lg:-translate-y-4">
              <MissionCopy compact />
            </div>

            <TiltPhoto className="rotate-2 justify-self-end pt-10 xl:rotate-3">
              <img
                src={missionBeneficiary}
                alt="Beneficiary receiving donated clothes with a smile"
                className="block h-auto w-full max-w-[300px] select-none [clip-path:inset(0_0_1.5px_0)]"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </TiltPhoto>
          </div>
        </div>

        {/* Mobile / tablet */}
        <div className="overflow-x-clip lg:hidden">
          <Container>
            <MissionCopy />
            <div className="mt-6 grid grid-cols-2 items-start gap-3 pb-0">
              <TiltPhoto className="-rotate-3">
                <img
                  src={missionDonateBox}
                  alt="Drippo cloth mission donation box being handed over"
                  className="block h-auto w-full select-none [clip-path:inset(0_0_1.5px_0)]"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </TiltPhoto>
              <TiltPhoto className="rotate-2">
                <img
                  src={missionBeneficiary}
                  alt="Beneficiary receiving donated clothes with a smile"
                  className="block h-auto w-full select-none [clip-path:inset(0_0_1.5px_0)]"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </TiltPhoto>
            </div>
          </Container>
        </div>
      </FadeIn>

      <div className="mt-0 bg-white py-3 sm:py-4 lg:py-4">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {ngoPillars.map((pillar, index) => {
              const iconSrc = pillarIconImages[index]
              return (
                <FadeIn key={pillar.title} delay={index * 0.06}>
                  <article className="mx-auto max-w-[280px] text-center">
                    <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-drippo-card sm:mb-5 sm:size-16">
                      <img
                        src={iconSrc}
                        alt=""
                        className="size-7 object-contain sm:size-8"
                        aria-hidden
                      />
                    </div>
                    <h3 className="font-serif text-[0.95rem] font-bold text-drippo-lime sm:text-base">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-drippo-muted">
                      {pillar.description}
                    </p>
                  </article>
                </FadeIn>
              )
            })}
          </div>
        </Container>
      </div>
    </section>
  )
}
