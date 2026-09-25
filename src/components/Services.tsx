import { serviceGroups } from '@/data/services'
import { container, sectionY } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { SectionHeader } from './ui/SectionHeader'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className={cn('bg-white', sectionY)}>
      <div className={container}>
        <SectionHeader id="services-title" title="Every Service, In Three Groups" />

        {serviceGroups.map((group) => (
          <div
            key={group.id}
            id={group.id}
            className="mt-12 grid gap-6 border-t border-gray-200 pt-10 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-4">
              <h3 className="font-display text-h3 font-semibold text-navy">{group.name}</h3>
              <p className="mt-2 text-body text-gray-600">{group.intro}</p>
            </div>
            <ul className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8 lg:col-span-8">
              {group.services.map((service) => (
                <li key={service.slug} id={service.slug}>
                  <h4 className="font-display text-h4 font-semibold text-navy">{service.title}</h4>
                  <p className="mt-1 text-body text-gray-600">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
