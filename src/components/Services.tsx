import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '@/data/services'
import { ScrollReveal } from './ScrollReveal'
import { GridOverlay } from './BrandGeometry'
import { SnapCarousel } from './ui/SnapCarousel'

export function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">Services</p>
          <h2 className="mt-5 max-w-3xl font-display text-display-md font-semibold text-white text-balance">
            Expert Support. Exactly Where You Need It.
          </h2>
        </ScrollReveal>

        {/* Desktop interactive list */}
        <div className="mt-20 hidden gap-16 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ul className="border-t border-white/10">
              {services.map((service, i) => {
                const isActive = active === i
                return (
                  <li key={service.title} className="border-b border-white/10">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="group relative flex w-full items-center gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-display text-sm font-semibold tabular-nums transition-colors duration-300 ${
                          isActive ? 'text-orange' : 'text-muted'
                        }`}
                      >
                        {service.index}
                      </span>
                      <span
                        className={`font-display text-2xl font-medium transition-colors duration-300 xl:text-3xl ${
                          isActive ? 'text-white' : 'text-muted group-hover:text-offwhite/80'
                        }`}
                      >
                        {service.title}
                      </span>
                      <motion.span
                        className="ml-auto h-px bg-orange"
                        animate={{ width: isActive ? 56 : 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden"
                style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 8% 100%)' }}
              >
                <div
                  className="h-full w-full"
                  style={{ background: 'linear-gradient(160deg, #25282C 0%, #0A0A0A 100%)' }}
                />
                <GridOverlay />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col justify-end p-10"
                  >
                    <span className="font-display text-7xl font-semibold text-orange/25">
                      {services[active].index}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                      {services[active].title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{services[active].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet snap cards */}
        <div className="mt-14 lg:hidden">
          <SnapCarousel label="Services" step={296}>
            {services.map((service, i) => (
              <ScrollReveal
                key={service.title}
                delay={Math.min(i, 2) * 0.08}
                amount={0.1}
                className="w-[272px] shrink-0 snap-start"
              >
                <div
                  className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden p-7"
                  style={{
                    clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 8% 100%)',
                    background: 'linear-gradient(160deg, #25282C 0%, #0A0A0A 100%)',
                  }}
                >
                  <GridOverlay />
                  <span className="relative font-display text-6xl font-semibold text-orange/25">{service.index}</span>
                  <h3 className="relative mt-3 font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </SnapCarousel>
        </div>
      </div>
    </section>
  )
}
