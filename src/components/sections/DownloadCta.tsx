import { Container } from '@/components/shared/Container'
import { FadeIn } from '@/components/shared/FadeIn'
import ctaPhoneLeft from '@/assets/cta-phone-left.png'
import ctaPhoneCenter from '@/assets/cta-phone-center.png'
import ctaPhoneRight from '@/assets/cta-phone-right.png'
import badgeGooglePlay from '@/assets/badge-google-play.png'
import badgeAppStore from '@/assets/badge-app-store.png'

export function DownloadCta() {
  return (
    <section id="download" className="overflow-x-clip bg-white py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="relative mx-auto mb-6 w-full max-w-[560px] overflow-x-clip sm:mb-8 sm:max-w-[680px] lg:max-w-[760px]">
            <div
              className="relative flex items-end justify-center"
              style={{
                maskImage:
                  'linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)',
              }}
            >
              {/* Left phone — tucked behind, angled in */}
              <div className="relative z-0 -mr-[10%] hidden w-[36%] -rotate-3 sm:block lg:-mr-[12%] lg:-rotate-6">
                <img
                  src={ctaPhoneLeft}
                  alt="Drippo app product page"
                  className="h-auto w-full select-none object-contain drop-shadow-lg"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>

              {/* Center phone — front */}
              <div className="relative z-10 w-[70%] max-w-[280px] sm:w-[42%] sm:max-w-none">
                <img
                  src={ctaPhoneCenter}
                  alt="Drippo app home feed"
                  className="h-auto w-full select-none object-contain drop-shadow-xl"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>

              {/* Right phone — tucked behind, angled in */}
              <div className="relative z-0 -ml-[10%] hidden w-[36%] rotate-3 sm:block lg:-ml-[12%] lg:rotate-6">
                <img
                  src={ctaPhoneRight}
                  alt="Drippo app store browse"
                  className="h-auto w-full select-none object-contain drop-shadow-lg"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            </div>

            {/* Extra soft white wash over the fade zone */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[40%] bg-gradient-to-t from-white from-15% via-white/70 to-transparent sm:h-[42%]"
              aria-hidden
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="stories-stroke-heading mx-auto max-w-3xl px-1 text-center font-display text-[1.75rem] font-extrabold tracking-tight sm:text-4xl">
            Get your favorite outfits in minutes.
            <br />
            Download Drippo!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-drippo-muted sm:mt-5 sm:text-base">
            Thousands already trust us for fast, stress-free fashion.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#"
              className="inline-flex min-h-11 items-center transition hover:opacity-90"
              aria-label="Get it on Google Play"
            >
              <img
                src={badgeGooglePlay}
                alt="Get it on Google Play"
                className="h-11 w-auto select-none sm:h-12"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </a>
            <a
              href="#"
              className="inline-flex min-h-11 items-center transition hover:opacity-90"
              aria-label="Download on the App Store"
            >
              <img
                src={badgeAppStore}
                alt="Download on the App Store"
                className="h-11 w-auto select-none sm:h-12"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
