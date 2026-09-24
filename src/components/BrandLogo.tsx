import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  tagline?: boolean
}

export function BrandLogo({ className, size = 'sm', tone = 'dark', tagline = true }: BrandLogoProps) {
  const large = size === 'lg'
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <img
        src="/brand/calebrated-mark.png"
        srcSet="/brand/calebrated-mark.png 1x, /brand/calebrated-mark@2x.png 2x"
        alt=""
        width={large ? 55 : 41}
        height={large ? 48 : 36}
        className={large ? 'h-12 w-auto' : 'h-9 w-auto'}
      />
      <span className="flex flex-col leading-none">
        <span className={cn('font-display font-bold tracking-tight', large ? 'text-3xl' : 'text-xl')}>
          <span className="text-orange">CALEB</span>
          <span className={tone === 'dark' ? 'text-white' : 'text-navy'}>rated</span>
        </span>
        {tagline && (
          <span
            className={cn(
              'mt-1 font-display font-medium uppercase',
              large ? 'text-[10px] tracking-[0.34em]' : 'text-[8px] tracking-[0.3em]',
              tone === 'dark' ? 'text-muted' : 'text-charcoal/70',
            )}
          >
            Virtual Services
          </span>
        )}
      </span>
    </span>
  )
}
