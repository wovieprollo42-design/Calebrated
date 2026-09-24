import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  layout?: 'inline' | 'stacked'
  tagline?: boolean
}

export function BrandLogo({ className, size = 'sm', tone = 'dark', layout = 'inline', tagline = true }: BrandLogoProps) {
  const large = size === 'lg'
  const stacked = layout === 'stacked'
  return (
    <span className={cn('inline-flex', stacked ? 'flex-col items-center gap-1.5' : 'items-center gap-3', className)}>
      <img
        src="/brand/calebrated-mark.png"
        srcSet="/brand/calebrated-mark.png 1x, /brand/calebrated-mark@2x.png 2x"
        alt=""
        width={large ? 64 : 41}
        height={large ? 56 : 36}
        className={cn('w-auto', stacked ? (large ? 'h-16' : 'h-11') : large ? 'h-12' : 'h-9')}
      />
      <span className={cn('flex flex-col leading-none', stacked && 'items-center')}>
        <span className={cn('font-display font-bold tracking-tight', large ? 'text-2xl' : stacked ? 'text-lg' : 'text-xl')}>
          <span className="text-orange">CALEB</span>
          <span className={tone === 'dark' ? 'text-white' : 'text-[#555]'}>rated</span>
        </span>
        {tagline && (
          <span
            className={cn(
              'mt-1 font-display font-medium uppercase',
              large ? 'text-[9px] tracking-[0.32em]' : 'text-[7px] tracking-[0.3em]',
              tone === 'dark' ? 'text-white/70' : 'text-[#555]',
            )}
          >
            Virtual Services
          </span>
        )}
      </span>
    </span>
  )
}
