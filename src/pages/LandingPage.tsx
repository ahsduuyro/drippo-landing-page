import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { DownloadCta } from '@/components/sections/DownloadCta'
import { Faq } from '@/components/sections/Faq'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { NgoImpact } from '@/components/sections/NgoImpact'
import { PromoMarquee } from '@/components/sections/PromoMarquee'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { Stories } from '@/components/sections/Stories'
import { Testimonials } from '@/components/sections/Testimonials'
import { ScrollToTop } from '@/components/shared/ScrollToTop'

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromoMarquee />
        <Stats />
        <Services />
        <HowItWorks />
        <NgoImpact />
        <Stories />
        <Testimonials />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
