import { processSteps } from '@/data/process'
import { container, sectionY } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { SectionHeader } from './ui/SectionHeader'

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className={cn('bg-white', sectionY)}>
      <div className={container}>
        <SectionHeader id="process-title" title="The Four Steps" />

        <ol className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative grid grid-cols-[2.5rem_1fr] gap-x-4 lg:block">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy font-display text-label font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-h3 font-semibold text-navy lg:mt-5">{step.title}</h3>
                <p className="mt-2 text-body text-gray-600">{step.description}</p>
              </div>
              {i < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-12 -bottom-8 w-px bg-gray-200 lg:left-12 lg:-right-6 lg:top-5 lg:bottom-auto lg:h-px lg:w-auto"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
