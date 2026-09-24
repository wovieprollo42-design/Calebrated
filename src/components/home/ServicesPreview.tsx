import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '@/data/services'
import { GridOverlay } from '@/components/BrandGeometry'
import { MagneticButton } from '@/components/MagneticButton'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

const previewServices = services.slice(0, 4)

export function ServicesPreview() {
  return (
    <section id="services-preview" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Services"
          title="Expert Support. Exactly Where You Need It."
          intro="From calendar and email management to CRM support and lead generation, our virtual assistant services cover the operational work that keeps a business moving."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {previewServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <Link
                to="/services"
                className="group block transition-transform duration-500 ease-premium hover:-translate-y-1"
              >
                <div
                  className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden p-7"
                  style={{
                    clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 8% 100%)',
                    background: 'linear-gradient(160deg, #283036 0%, #0F131B 100%)',
                  }}
                >
                  <GridOverlay />
                  <span className="relative font-display text-6xl font-semibold text-orange/25 transition-colors duration-500 group-hover:text-orange/50">
                    {service.index}
                  </span>
                  <h3 className="relative mt-3 font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-5">
            <MagneticButton to="/services" variant="outline">
              View All Services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <p className="text-sm text-muted">Eight service areas, one team that already knows your workflow.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
