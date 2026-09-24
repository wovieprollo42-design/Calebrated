import { Quote } from 'lucide-react'
import { testimonialSlots } from '@/data/testimonials'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeader } from './ui/SectionHeader'
import { Marquee } from './ui/Marquee'
import { SnapCarousel } from './ui/SnapCarousel'

export function Testimonials() {
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
            <span className="font-semibold text-ink/[0.06]">CALEB</span>
            <span
              className="font-normal text-transparent"
              style={{ WebkitTextStroke: '1px rgba(10,10,10,0.14)' }}
            >
              rated
            </span>
          </span>
        ))}
      </Marquee>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Client Feedback" title="Trusted Support. Real Impact." tone="light" />

        <div className="mt-16">
          <SnapCarousel label="Client testimonials" tone="light" step={364}>
            {testimonialSlots.map((slot, i) => (
              <ScrollReveal
                key={slot.id}
                delay={Math.min(i, 2) * 0.1}
                amount={0.1}
                className="w-[300px] shrink-0 snap-start sm:w-[340px]"
              >
                <div className="flex h-full min-h-[280px] flex-col justify-between border border-ink/10 bg-offwhite p-8 transition-colors duration-300 hover:border-orange/50">
                  <Quote size={28} strokeWidth={1.25} className="text-orange/50" aria-hidden="true" />
                  <p className="mt-8 text-sm leading-relaxed text-charcoal/75">
                    Client testimonial coming soon. This slot is reserved for a real, attributed review from a
                    CALEBrated client.
                  </p>
                  <span className="mt-8 text-xs font-semibold uppercase tracking-widest2 text-charcoal/70">
                    Placeholder &mdash; awaiting client testimonial
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </SnapCarousel>
        </div>
      </div>
    </section>
  )
}
