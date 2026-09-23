import { AngularFrame, NoiseOverlay, SpotlightGlow } from './BrandGeometry'
import { ScrollReveal } from './ScrollReveal'

export function PremiumStatement() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111214 50%, #0A0A0A 100%)' }}
      />
      <NoiseOverlay opacity={0.05} />
      <SpotlightGlow className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <AngularFrame size={520} strokeWidth={1} color="rgba(255,90,0,0.14)" className="left-[-14%] top-[-16%]" />
      <AngularFrame
        size={220}
        strokeWidth={1.5}
        color="rgba(255,157,0,0.3)"
        className="right-[8%] bottom-[10%]"
        delay={0.3}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
        <ScrollReveal>
          <h2 className="font-display text-display-lg font-semibold text-white text-balance">
            Do More of What Moves
            <br />
            Your Business Forward.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted">We&rsquo;ll help handle what slows it down.</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
