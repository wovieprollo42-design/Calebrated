import { container, sectionY } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { SectionHeader } from './ui/SectionHeader'
import { TextLink } from './ui/Button'

interface AboutProps {
  teaser?: boolean
}

export function About({ teaser = false }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-title" className={cn('bg-white', sectionY)}>
      <div className={container}>
        <SectionHeader
          id="about-title"
          title={teaser ? 'Support That Gives You Room To Grow' : 'One Team For All Your Business Support Needs'}
        />
        <div className="mt-4 max-w-prose space-y-4 text-body text-gray-600">
          {teaser ? (
            <p>
              CALEBrated helps busy owners hand off the work that eats their week, admin, marketing, and website
              work, so they can spend their time where it matters most.
            </p>
          ) : (
            <>
              <p>
                CALEBrated Virtual Services works with business owners and growing teams who need extra help
                without the cost of another hire. We handle admin and operations, marketing and growth, and
                websites and automation, all from one remote team.
              </p>
              <p>
                Engagements start small and scale with you, from a few hours a week to ongoing support across
                your business. You get one team that learns how you work and keeps things moving, so you can
                focus on the work only you can do.
              </p>
            </>
          )}
        </div>
        {teaser && (
          <div className="mt-8">
            <TextLink to="/about">More about CALEBrated</TextLink>
          </div>
        )}
      </div>
    </section>
  )
}
