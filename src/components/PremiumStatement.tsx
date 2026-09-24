import { ArrowRight } from 'lucide-react'
import { AmbientBackground } from './motion/AmbientBackground'
import { AngularFrame } from './BrandGeometry'
import { MagneticButton } from './MagneticButton'
import { ScrollReveal } from './ScrollReveal'

export function PremiumStatement() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink">
      <AmbientBackground intensity="low" />

      <AngularFrame size={520} strokeWidth={1} color="rgba(255,84,0,0.14)" className="left-[-14%] top-[-16%]" />
      <AngularFrame
        size={220}
        strokeWidth={1.5}
        color="rgba(255,140,0,0.3)"
        className="right-[8%] bottom-[10%]"
        delay={0.3}
      />

      <div className="relative z-10 w-full border-y border-white/10 bg-soft/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-12 lg:py-28">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">More Than an Assistant</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-display-lg font-semibold text-white text-balance">
              Do More of What Moves{' '}
              <br />
              Your Business Forward.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
              We&rsquo;ll help handle what slows it down, so your time goes where it creates the most value.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex justify-center">
              <MagneticButton to="/contact" variant="solid">
                Book a Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
