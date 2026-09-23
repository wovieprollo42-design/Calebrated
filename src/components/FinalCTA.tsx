import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GridOverlay, NoiseOverlay } from './BrandGeometry'
import { MagneticButton } from './MagneticButton'
import { ScrollReveal } from './ScrollReveal'

export function FinalCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg, #0A0A0A 0%, #0A0A0A 38%, #25282C 62%, #FF5A00 145%)',
        }}
      />
      <GridOverlay className="opacity-30" />
      <NoiseOverlay opacity={0.05} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-36">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">Ready When You Are</p>
        </ScrollReveal>

        <div className="mt-6 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <ScrollReveal delay={0.1} className="max-w-2xl">
            <h2 className="font-display text-display-lg font-semibold text-white text-balance">
              Ready to Get More
              <br />
              Off Your Plate?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Tell us where your business needs support. We&rsquo;ll help you find a smarter way forward.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25} direction="left" className="flex flex-col items-start gap-5">
            <div className="flex flex-wrap items-center gap-5">
              <MagneticButton href="#contact" variant="solid" className="bg-ink text-white hover:bg-charcoal">
                Book a Free Consultation
                <motion.span
                  animate={reduceMotion ? {} : { x: [0, 5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline" className="border-ink/40 text-ink hover:border-ink hover:text-ink">
                Contact Us
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
