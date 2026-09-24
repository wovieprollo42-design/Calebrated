import { cn } from '@/lib/utils'
import { GridOverlay, NoiseOverlay } from '../BrandGeometry'

interface AmbientBackgroundProps {
  className?: string
  intensity?: 'low' | 'high'
  scrim?: number
}

export function AmbientBackground({ className, intensity = 'high', scrim = 0 }: AmbientBackgroundProps) {
  const strong = intensity === 'high'
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111214 100%)' }} />

      <div
        className="absolute -right-[10%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full blur-[110px] md:will-change-transform animate-drift max-md:[animation:none]"
        style={{
          background: `radial-gradient(circle, rgba(255,90,0,${strong ? 0.28 : 0.16}) 0%, rgba(255,90,0,0) 65%)`,
        }}
      />
      <div
        className="absolute -bottom-[25%] -left-[15%] h-[55vmax] w-[55vmax] rounded-full blur-[120px] md:will-change-transform animate-drift-slow max-md:[animation:none]"
        style={{
          background: `radial-gradient(circle, rgba(255,157,0,${strong ? 0.16 : 0.1}) 0%, rgba(255,157,0,0) 65%)`,
        }}
      />
      <div
        className="absolute left-[35%] top-[30%] h-[40vmax] w-[40vmax] rounded-full blur-[130px] md:will-change-transform animate-drift max-md:[animation:none]"
        style={{
          animationDelay: '-12s',
          background: 'radial-gradient(circle, rgba(37,40,44,0.9) 0%, rgba(37,40,44,0) 65%)',
        }}
      />

      <GridOverlay className={strong ? 'opacity-60' : 'opacity-40'} />
      <NoiseOverlay opacity={0.04} />

      {scrim > 0 && <div className="absolute inset-0" style={{ background: `rgba(10,10,10,${scrim})` }} />}
    </div>
  )
}
