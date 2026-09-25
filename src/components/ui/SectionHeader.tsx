import { eyebrowDark, eyebrowLight } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '../ScrollReveal'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  intro?: string
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  id?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, intro, tone = 'light', align = 'left', id, className }: SectionHeaderProps) {
  const isCenter = align === 'center'
  return (
    <ScrollReveal className={cn(isCenter && 'mx-auto text-center', className)}>
      {eyebrow && <p className={tone === 'dark' ? eyebrowDark : eyebrowLight}>{eyebrow}</p>}
      <h2
        id={id}
        className={cn(
          'max-w-3xl font-display text-h2 font-medium text-balance',
          eyebrow && 'mt-3',
          tone === 'dark' ? 'text-white' : 'text-navy',
          isCenter && 'mx-auto',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'mt-4 max-w-prose text-body',
            tone === 'dark' ? 'text-white/80' : 'text-gray-600',
            isCenter && 'mx-auto',
          )}
        >
          {intro}
        </p>
      )}
    </ScrollReveal>
  )
}
