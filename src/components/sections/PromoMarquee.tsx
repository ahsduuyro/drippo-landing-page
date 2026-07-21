const PROMO_TEXT =
  'The more you shop, the more you save. Get 20% off on 2 items, 30% on 3, and 40% on 4 or more.'

export function PromoMarquee() {
  return (
    <section
      aria-label="Promotional offer"
      className="overflow-hidden border-y border-black/5 bg-[#FAFFE5]"
    >
      <div className="relative w-full py-2.5 sm:py-3">
        <p className="animate-promo-marquee-once whitespace-nowrap px-6 text-sm font-medium text-drippo-black sm:text-lg">
          {PROMO_TEXT}
        </p>
      </div>
    </section>
  )
}
