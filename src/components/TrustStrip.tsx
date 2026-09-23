import { ScrollReveal } from './ScrollReveal'

const POINTS = ['Reliable Support', 'Smarter Operations', 'Flexible Solutions', 'Growth-Focused']

export function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <ScrollReveal>
          <p className="max-w-3xl font-display text-xl font-medium text-offwhite/90 sm:text-2xl">
            Built for businesses that need more than just an extra pair of hands.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            {POINTS.map((point, i) => (
              <div key={point} className="flex items-center gap-8">
                <span className="text-sm font-semibold uppercase tracking-widest2 text-muted">{point}</span>
                {i < POINTS.length - 1 && <span className="hidden h-4 w-px bg-white/15 sm:block" />}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
