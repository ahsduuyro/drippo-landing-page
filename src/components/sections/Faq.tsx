import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CircleHelp, Minus, Plus } from 'lucide-react'
import { useState } from 'react'

import { Container } from '@/components/shared/Container'
import { FadeIn } from '@/components/shared/FadeIn'
import { faqs } from '@/data/landing'
import { cn } from '@/lib/utils'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(-1)
  const reduceMotion = useReducedMotion()

  return (
    <section id="faq" className="bg-white py-14 sm:py-16 lg:py-20">
      <Container className="max-w-3xl">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full border-2 border-drippo-lime',
                'bg-white px-5 py-2 text-sm font-semibold text-drippo-lime',
              )}
            >
              <CircleHelp className="size-4 shrink-0" strokeWidth={2} />
              FAQ&apos;s
            </span>
            <h2 className="stories-stroke-heading mt-5 font-display text-3xl font-extrabold tracking-tight sm:mt-6 sm:text-4xl lg:text-[2.75rem]">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 space-y-3 lg:mt-12">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <FadeIn key={faq.question} delay={index * 0.04}>
                <div className="overflow-hidden rounded-2xl bg-drippo-card">
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    <span className="text-sm font-semibold text-drippo-black sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        'flex size-10 shrink-0 items-center justify-center rounded-full',
                        'bg-drippo-black text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]',
                      )}
                    >
                      {open ? (
                        <Minus className="size-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="size-4" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        key="content"
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={
                          reduceMotion
                            ? undefined
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-drippo-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
