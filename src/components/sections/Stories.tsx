import { MapPin, Play } from 'lucide-react'

import { AssetPlaceholder } from '@/components/shared/AssetPlaceholder'
import { Container } from '@/components/shared/Container'
import { FadeIn } from '@/components/shared/FadeIn'
import { ngoStories } from '@/data/landing'
import { cn } from '@/lib/utils'
import story1 from '@/assets/story-1.png'
import story2 from '@/assets/story-2.png'
import story3 from '@/assets/story-3.png'
import story4 from '@/assets/story-4.png'
import story5 from '@/assets/story-5.png'

const storyImages: Partial<Record<string, string>> = {
  'story-1.png': story1,
  'story-2.png': story2,
  'story-3.png': story3,
  'story-4.png': story4,
  'story-5.png': story5,
}

export function Stories() {
  return (
    <section className="overflow-x-clip bg-white pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pb-24">
      <Container>
        <FadeIn>
          <h2 className="mx-auto max-w-4xl px-1 text-center font-display text-[1.75rem] font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            <span className="stories-stroke-heading">Stories from our</span>{' '}
            <span className="inline-block bg-drippo-lime px-2.5 py-0.5 text-drippo-cta sm:px-3">
              donation
            </span>
          </h2>
        </FadeIn>
      </Container>

      {/* Mobile / tablet: horizontal snap scroller */}
      <div className="relative mt-6 lg:hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12"
          aria-hidden
        />
        <div
          className={cn(
            'flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain',
            'scroll-px-4 px-4 pb-1 sm:gap-4 sm:scroll-px-6 sm:px-6',
            '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          )}
        >
          {ngoStories.map((story, index) => {
            const imageSrc = storyImages[story.asset]
            return (
              <FadeIn
                key={`${story.asset}-${story.name}-scroll`}
                delay={index * 0.04}
                className="w-[42vw] max-w-[200px] shrink-0 snap-start sm:w-[180px]"
              >
                <StoryCard story={story} imageSrc={imageSrc} />
              </FadeIn>
            )
          })}
        </div>
      </div>

      {/* Desktop: full grid */}
      <Container className="mt-6 hidden lg:mt-8 lg:block">
        <div className="grid grid-cols-5 gap-4">
          {ngoStories.map((story, index) => {
            const imageSrc = storyImages[story.asset]
            return (
              <FadeIn key={`${story.asset}-${story.name}`} delay={index * 0.05}>
                <StoryCard story={story} imageSrc={imageSrc} />
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

function StoryCard({
  story,
  imageSrc,
}: {
  story: (typeof ngoStories)[number]
  imageSrc?: string
}) {
  return (
    <article className="group relative overflow-hidden rounded-[1.25rem]">
      {imageSrc ? (
        <button
          type="button"
          className="relative block w-full"
          aria-label={`Play story: ${story.name}`}
        >
          <img
            src={imageSrc}
            alt={`${story.name} — ${story.location}`}
            className="aspect-[9/16] h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </button>
      ) : (
        <>
          <AssetPlaceholder
            label={story.asset}
            aspect="aspect-[9/16]"
            className="from-neutral-700 to-neutral-900"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          <button
            type="button"
            className={cn(
              'absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2',
              'items-center justify-center rounded-full border-2 border-white/90',
              'bg-white/10 backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] transition group-hover:scale-105',
            )}
            aria-label={`Play story: ${story.name}`}
          >
            <Play className="size-4 fill-drippo-lime text-drippo-lime" />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-3 text-white">
            <p className="text-sm font-semibold">{story.name}</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-white/85">
              <MapPin className="size-3 shrink-0" aria-hidden />
              {story.location}
            </p>
          </div>
        </>
      )}
    </article>
  )
}
