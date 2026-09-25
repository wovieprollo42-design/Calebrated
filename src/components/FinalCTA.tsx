import { CALENDLY_URL } from '@/data/home'
import { container, darkBand, sectionY } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { ScrollReveal } from './ScrollReveal'
import { ButtonLink, TextLink } from './ui/Button'

export function FinalCTA() {
  return (
    <section className={cn(darkBand, sectionY)}>
      <div className={cn(container, 'flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16')}>
        <ScrollReveal className="max-w-2xl">
          <h2 className="font-display text-h2 font-medium text-balance">
            <span className="block text-white">Ready To Get More</span>{' '}
            <span className="block text-orange">Off Your Plate?</span>
          </h2>
          <p className="mt-4 max-w-prose text-body text-white/80">
            Tell us where your business needs support. We can start with a free call.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-3 sm:items-start">
          <ButtonLink href={CALENDLY_URL}>Book a Free Consultation</ButtonLink>
          <TextLink to="/contact" tone="dark">
            or send us a message
          </TextLink>
        </div>
      </div>
    </section>
  )
}
