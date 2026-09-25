import { Quote } from 'lucide-react'
import { testimonialSlots, type TestimonialSlot } from '@/data/testimonials'
import { container } from '@/lib/ui'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeader } from './ui/SectionHeader'
import { Marquee } from './ui/Marquee'
import { SnapCarousel } from './ui/SnapCarousel'

function isPlaceholderSlot(slot: TestimonialSlot) {
  return Boolean(slot.isPlaceholder) || !slot.quote
}

export function Testimonials() {
  if (testimonialSlots.every(isPlaceholderSlot)) return null

  return (
    <section className="overflow-hidden bg-offwhite pb-28 pt-16 lg:pb-36 lg:pt-20">
      <Marquee duration={40} className="mb-16 lg:mb-20">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="mx-6 whitespace-nowrap font-display uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
          >
            <span className="font-semibold text-navy/[0.07]">CALEB</span>
            <span
              className="font-normal text-transparent"
              style={{ WebkitTextStroke: '1px rgba(15,19,27,0.14)' }}
            >
              rated
            </span>
          </span>
        ))}
      </Marquee>

      <div className={container}>
        <SectionHeader eyebrow="Client Feedback" title="Trusted Support. Real Impact." tone="light" />

        <div className="mt-16">
          <SnapCarousel label="Client testimonials" tone="light" step={364}>
            {testimonialSlots.map((slot, i) => {
              const placeholder = isPlaceholderSlot(slot)
              return (
                <ScrollReveal
                  key={slot.id}
                  delay={Math.min(i, 2) * 0.1}
                  amount={0.1}
                  className="w-[300px] shrink-0 snap-start sm:w-[340px]"
                >
                  <div className="flex h-full min-h-[280px] flex-col justify-between border border-ink/10 bg-offwhite p-8 transition-colors duration-300 hover:border-orange/50">
                    <Quote size={28} strokeWidth={1.25} className="text-orange/50" aria-hidden="true" />
                    <p className="mt-8 text-body leading-relaxed text-charcoal/75">
                      {placeholder
                        ? 'Client testimonial coming soon. This slot is reserved for a real, attributed review from a CALEBrated client.'
                        : slot.quote}
                    </p>
                    <span className="mt-8 text-label font-semibold uppercase tracking-widest text-charcoal/70">
                      {placeholder
                        ? 'Placeholder, awaiting client testimonial'
                        : [slot.name, slot.role].filter(Boolean).join(', ')}
                    </span>
                  </div>
                </ScrollReveal>
              )
            })}
          </SnapCarousel>
        </div>
      </div>
    </section>
  )
}
