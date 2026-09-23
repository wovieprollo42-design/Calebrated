import { Quote } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { AngularFrame } from './BrandGeometry'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-offwhite py-28 lg:py-36">
      <AngularFrame
        size={280}
        strokeWidth={1}
        color="rgba(255,90,0,0.18)"
        className="left-[-6%] top-[-8%]"
        animate={false}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">About CALEBrated</p>
            <h2 className="mt-5 font-display text-display-md font-semibold text-ink text-balance">
              Support That Creates Space for Bigger Things.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/80">
              CALEBrated helps business owners and teams remove operational pressure and focus their attention on
              the priorities that move the business forward. We take on the work that has to get done, so you can
              spend your time on the work only you can do.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative border-l-2 border-orange bg-ink px-8 py-12 sm:px-14 sm:py-16">
              <Quote
                className="absolute right-6 top-6 text-orange/25 sm:right-10 sm:top-8"
                size={72}
                strokeWidth={1}
                aria-hidden="true"
              />
              <p className="relative font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
                Leading the charge in redefining business norms, driving operational efficiency, collaborative
                synergy, and extraordinary growth.
              </p>
              <div className="mt-8 h-px w-16 bg-orange" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
