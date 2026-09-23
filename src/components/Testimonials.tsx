import { Quote } from 'lucide-react'
import { testimonialSlots } from '@/data/testimonials'
import { ScrollReveal } from './ScrollReveal'

export function Testimonials() {
  return (
    <section className="bg-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">Client Feedback</p>
          <h2 className="mt-5 max-w-3xl font-display text-display-md font-semibold text-ink text-balance">
            Trusted Support. Real Impact.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
          {testimonialSlots.map((slot, i) => (
            <ScrollReveal key={slot.id} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between bg-offwhite p-10">
                <Quote size={28} strokeWidth={1.25} className="text-orange/50" aria-hidden="true" />
                <p className="mt-8 text-sm leading-relaxed text-charcoal/60">
                  Client testimonial coming soon. This slot is reserved for a real, attributed review from a
                  CALEBrated client.
                </p>
                <span className="mt-8 text-xs font-semibold uppercase tracking-widest2 text-muted">
                  Placeholder &mdash; awaiting client testimonial
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
