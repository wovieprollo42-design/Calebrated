import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
  size?: 'sm' | 'lg'
  tone?: 'dark' | 'light'
  layout?: 'inline' | 'stacked'
  tagline?: boolean
}

const TAGLINE = 'VIRTUAL SERVICES'.split('')

function JustifiedTagline({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('flex w-full justify-between font-display font-medium', className)}>
      {TAGLINE.map((char, i) => (
        <span key={i} className={char === ' ' ? 'w-[0.4em]' : undefined}>
          {char === ' ' ? '' : char}
        </span>
      ))}
    </span>
  )
}

export function BrandLogo({ className, size = 'sm', tone = 'dark', layout = 'inline', tagline = true }: BrandLogoProps) {
  const large = size === 'lg'
  const rated = tone === 'dark' ? 'text-white' : 'text-[#555]'
  const taglineTone = tone === 'dark' ? 'text-muted' : 'text-[#555]'

  if (layout === 'stacked') {
    return (
      <span className={cn('inline-flex flex-col items-center gap-1.5', className)}>
        <img
          src="/brand/calebrated-mark.png"
          srcSet="/brand/calebrated-mark.png 1x, /brand/calebrated-mark@2x.png 2x"
          alt=""
          width={large ? 64 : 41}
          height={large ? 56 : 36}
          className={cn('w-auto', large ? 'h-16' : 'h-11')}
        />
        <span className="inline-flex flex-col items-stretch leading-none">
          <span className={cn('font-display font-bold tracking-tight', large ? 'text-2xl' : 'text-lg')}>
            <span className="text-orange">CALEB</span>
            <span className={rated}>rated</span>
          </span>
          {tagline && <JustifiedTagline className={cn('mt-1.5', large ? 'text-[9px]' : 'text-[7px]', taglineTone)} />}
        </span>
      </span>
    )
  }

  return (
    <span className={cn('inline-flex items-center', large ? 'gap-4' : 'gap-3', className)}>
      <img
        src="/brand/calebrated-mark.png"
        srcSet="/brand/calebrated-mark.png 1x, /brand/calebrated-mark@2x.png 2x"
        alt=""
        width={large ? 64 : 50}
        height={large ? 56 : 44}
        className={cn('w-auto', large ? 'h-14' : 'h-11')}
      />
      <span className="inline-flex flex-col items-stretch leading-none">
        <span className={cn('font-display font-bold tracking-tight', large ? 'text-[32px]' : 'text-[26px]')}>
          <span className="text-orange">CALEB</span>
          <span className={rated}>rated</span>
        </span>
        {tagline && (
          <JustifiedTagline className={cn(large ? 'mt-2 text-[13px]' : 'mt-1.5 text-[11px]', taglineTone)} />
        )}
      </span>
    </span>
  )
}
