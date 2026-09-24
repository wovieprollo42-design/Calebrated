import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SnapCarouselProps {
  children: ReactNode
  className?: string
  trackClassName?: string
  step?: number
  tone?: 'dark' | 'light'
}

export function SnapCarousel({ children, className, trackClassName, step = 360, tone = 'dark' }: SnapCarouselProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  function scroll(dir: 1 | -1) {
    ref.current?.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const btn =
    tone === 'dark'
      ? 'border-white/15 bg-ink text-offwhite hover:border-orange hover:bg-orange hover:text-ink disabled:hover:border-white/15 disabled:hover:bg-ink disabled:hover:text-offwhite'
      : 'border-ink/15 bg-offwhite text-ink hover:border-orange hover:bg-orange hover:text-ink disabled:hover:border-ink/15 disabled:hover:bg-offwhite disabled:hover:text-ink'

  return (
    <div className={cn('relative', className)}>
      <div
        ref={ref}
        onScroll={update}
        className={cn(
          'flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          trackClassName,
        )}
      >
        {children}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous"
          disabled={!canPrev}
          onClick={() => scroll(-1)}
          className={cn(
            'flex h-11 w-11 items-center justify-center border transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-30',
            btn,
          )}
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="Next"
          disabled={!canNext}
          onClick={() => scroll(1)}
          className={cn(
            'flex h-11 w-11 items-center justify-center border transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-30',
            btn,
          )}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}
