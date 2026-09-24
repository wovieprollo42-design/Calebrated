import { proofItems, trustPoints } from '@/data/proof'
import { PlusAccent } from './BrandGeometry'
import { ScrollReveal } from './ScrollReveal'
import { Marquee } from './ui/Marquee'

export function ProofStrip() {
  return (
    <section className="border-y border-white/10 bg-soft">
      <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl font-display text-xl font-medium text-offwhite/90 sm:text-2xl">
              Built for businesses that need more than just an extra pair of hands.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustPoints.map((point, i) => (
                <div key={point} className="flex items-center gap-6">
                  <span className="text-xs font-semibold uppercase tracking-widest2 text-muted">{point}</span>
                  {i < trustPoints.length - 1 && <span className="hidden h-3 w-px bg-white/15 sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="none" className="mt-10 border-t border-white/10">
        <Marquee duration={38} pauseOnHover className="py-6">
          {proofItems.map((item) => (
            <div key={item} className="flex items-center gap-10 pr-10">
              <span className="whitespace-nowrap font-display text-2xl font-medium text-offwhite/70 sm:text-3xl">
                {item}
              </span>
              <PlusAccent size={14} color="#FF5A00" />
            </div>
          ))}
        </Marquee>
      </ScrollReveal>
    </section>
  )
}
