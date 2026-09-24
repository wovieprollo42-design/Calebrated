import { ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from './ScrollReveal'
import { AngularFrame } from './BrandGeometry'

interface AboutProps {
  teaser?: boolean
}

export function About({ teaser = false }: AboutProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-offwhite py-28 lg:py-36">
      <AngularFrame
        size={280}
        strokeWidth={1}
        color="rgba(255,84,0,0.18)"
        className="left-[-6%] top-[-8%]"
        animate={false}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-orange-deep">{teaser ? 'About CALEBrated' : 'Who We Are'}</p>
            <h2 className="mt-5 font-display text-display-md font-semibold text-navy text-balance">
              {teaser
                ? 'Support That Creates Space for Bigger Things.'
                : 'One Partner for the Work That Keeps Your Business Running.'}
            </h2>
            {teaser ? (
              <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/80">
                CALEBrated helps business owners and teams remove operational pressure through dependable virtual
                business support, so they can focus their attention on the priorities that move the business forward.
                We take on the work that has to get done, so you can spend your time on the work only you can do.
              </p>
            ) : (
              <div className="mt-6 max-w-md space-y-5 text-base leading-relaxed text-charcoal/80">
                <p>
                  CALEBrated Virtual Services works with business owners, small business teams, and growing companies
                  that need reliable help without the cost of another hire. Our virtual assistant services cover
                  administrative support, calendar and email management, customer service, social media, data entry,
                  CRM support, lead generation, and research and reporting, delivered remotely inside the systems and
                  schedules you already rely on.
                </p>
                <p>
                  Engagements start small and scale with you, from a few hours each week to dedicated, ongoing
                  business operations support. You get one accountable partner who learns how your business runs,
                  takes ownership of the recurring work, and keeps operations moving while you spend your time on the
                  work only you can do.
                </p>
              </div>
            )}
            {teaser && (
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-charcoal/80 transition-colors hover:text-orange-deep"
              >
                More about CALEBrated
                <ArrowRight size={14} />
              </Link>
            )}
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
