import { cn } from '@/lib/utils'
import { ScrollReveal } from '../ScrollReveal'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  intro?: string
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, intro, tone = 'dark', align = 'left', className }: SectionHeaderProps) {
  const isCenter = align === 'center'
  return (
    <ScrollReveal className={cn(isCenter && 'mx-auto text-center', className)}>
      <p className="text-xs font-semibold uppercase tracking-widest2 text-orange">{eyebrow}</p>
      <h2
        className={cn(
          'mt-5 max-w-3xl font-display text-display-md font-semibold text-balance',
          tone === 'dark' ? 'text-white' : 'text-ink',
          isCenter && 'mx-auto',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'mt-6 max-w-xl text-lg leading-relaxed',
            tone === 'dark' ? 'text-muted' : 'text-charcoal/75',
            isCenter && 'mx-auto',
          )}
        >
          {intro}
        </p>
      )}
    </ScrollReveal>
  )
}
