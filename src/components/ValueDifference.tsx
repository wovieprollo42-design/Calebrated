import { valueStatements } from '@/data/values'
import { ScrollReveal } from './ScrollReveal'

export function ValueDifference() {
  return (
    <section id="difference" className="border-t border-ink/10 bg-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-orange-deep">The CALEBrated Difference</p>
          <h2 className="mt-5 max-w-3xl font-display text-display-md font-semibold text-navy text-balance">
            Your Business Shouldn&rsquo;t Depend on You Doing Everything.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">
            Whether you need a virtual assistant for small business tasks or ongoing remote administrative support
            for a growing team, the difference shows up in four places.
          </p>
        </ScrollReveal>

        <div className="mt-20 border-t border-ink/10">
          {valueStatements.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <div className="group grid grid-cols-1 items-center gap-4 border-b border-ink/10 py-10 transition-colors duration-300 sm:grid-cols-12 sm:gap-8">
                <span className="font-display text-sm font-semibold text-orange-deep sm:col-span-1">{value.index}</span>
                <h3 className="font-display text-2xl font-semibold text-navy transition-transform duration-500 ease-premium group-hover:translate-x-2 sm:col-span-4 lg:text-3xl">
                  {value.title}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-charcoal/75 sm:col-span-7">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
