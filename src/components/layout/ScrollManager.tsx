import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { PAGE_ENTER_MS, PAGE_EXIT_MS } from './transition'

const HEADER_OFFSET = 96
// The outgoing page is fully transparent slightly before its exit finishes,
// so resetting scroll here avoids a visible jump while still landing ahead
// of the incoming page's mount.
const EXIT_SETTLE_MS = PAGE_EXIT_MS - 40

const INSTANT = 'instant' as ScrollBehavior

// Scroll offsets keyed by history entry, so Back and Forward land where the
// visitor left instead of at the top.
const positions = new Map<string, number>()

function scrollToHash(hash: string, behavior: ScrollBehavior) {
  const id = decodeURIComponent(hash.slice(1))
  if (!id) return
  const target = document.getElementById(id)
  if (!target) return
  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top: Math.max(top, 0), left: 0, behavior })
}

function restoreScroll(top: number) {
  const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
  window.scrollTo({ top: Math.min(top, max), left: 0, behavior: INSTANT })
}

// The outgoing page may be shorter than the saved offset, and with
// AnimatePresence mode="wait" the incoming page only mounts after the exit
// completes, so keep re-applying the offset each frame until it fits.
function settleScroll(top: number, deadline: number) {
  let frame = 0
  const tick = () => {
    restoreScroll(top)
    if (top - window.scrollY > 1 && performance.now() < deadline) {
      frame = window.requestAnimationFrame(tick)
    }
  }
  tick()
  return () => window.cancelAnimationFrame(frame)
}

export function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()
  const reduceMotion = useReducedMotion()
  const reduceMotionRef = useRef(reduceMotion)
  const previousPathname = useRef<string | null>(null)
  const previousKey = useRef<string | null>(null)

  useEffect(() => {
    reduceMotionRef.current = reduceMotion
  }, [reduceMotion])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    // The outgoing page is still on screen at this point, so scrollY is its offset.
    if (previousKey.current !== null) positions.set(previousKey.current, window.scrollY)

    const isFirstRender = previousPathname.current === null
    const pathChanged = !isFirstRender && previousPathname.current !== pathname
    previousPathname.current = pathname
    previousKey.current = key

    const saved = navigationType === 'POP' ? positions.get(key) : undefined
    const smooth: ScrollBehavior = reduceMotionRef.current ? 'auto' : 'smooth'
    const timeouts: number[] = []
    let frame = 0
    let cancelSettle: (() => void) | undefined

    if (pathChanged) {
      timeouts.push(
        window.setTimeout(() => {
          if (saved === undefined) {
            window.scrollTo({ top: 0, left: 0, behavior: INSTANT })
            return
          }
          cancelSettle = settleScroll(saved, performance.now() + PAGE_ENTER_MS)
        }, EXIT_SETTLE_MS),
      )
      if (hash && saved === undefined) {
        timeouts.push(window.setTimeout(() => scrollToHash(hash, smooth), PAGE_EXIT_MS + PAGE_ENTER_MS))
      }
    } else if (isFirstRender) {
      if (hash) {
        timeouts.push(window.setTimeout(() => scrollToHash(hash, smooth), PAGE_ENTER_MS))
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: INSTANT })
      }
    } else if (saved !== undefined) {
      restoreScroll(saved)
    } else if (hash) {
      frame = window.requestAnimationFrame(() => scrollToHash(hash, smooth))
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: smooth })
    }

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id))
      if (frame) window.cancelAnimationFrame(frame)
      cancelSettle?.()
    }
  }, [pathname, hash, key, navigationType])

  return null
}
