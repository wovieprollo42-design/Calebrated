import { valueStatements } from '@/data/values'
import { container, sectionY } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { SectionHeader } from './ui/SectionHeader'

export function ValueDifference() {
  return (
    <section id="difference" aria-labelledby="difference-title" className={cn('bg-offwhite', sectionY)}>
      <div className={container}>
        <SectionHeader
          id="difference-title"
          title="What Changes When You Work With Us"
          intro="Here's what's different once CALEBrated is part of your team."
        />

        <dl className="mt-10 border-t border-gray-200 sm:mt-12">
          {valueStatements.map((value) => (
            <div
              key={value.title}
              className="grid gap-2 border-b border-gray-200 py-6 sm:grid-cols-12 sm:gap-8 sm:py-8"
            >
              <dt className="font-display text-h3 font-semibold text-navy sm:col-span-4">{value.title}</dt>
              <dd className="text-body text-gray-600 sm:col-span-8">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
