import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { BrandLogo } from './BrandLogo'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Closing unmounts the panel, so return focus to the toggle instead of dropping it to body.
  const closeMenu = useCallback(() => {
    setMobileOpen(false)
    toggleRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen, closeMenu])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
        scrolled
          ? 'border-b border-white/10 bg-ink/80 backdrop-blur-md py-4'
          : 'border-b border-transparent bg-transparent py-6',
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" aria-label="CALEBrated Virtual Services, home">
          <BrandLogo />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn('group relative text-sm font-medium transition-colors hover:text-white', isActive ? 'text-orange' : 'text-offwhite/85')
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span className={cn('absolute -bottom-1 left-0 h-px bg-orange transition-all duration-300 ease-premium group-hover:w-full', isActive ? 'w-full' : 'w-0')} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="relative inline-flex items-center border border-orange px-6 py-2.5 text-xs font-semibold uppercase tracking-widest2 text-orange transition-colors duration-300 hover:bg-orange hover:text-ink"
          >
            Let&rsquo;s Talk
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="text-offwhite lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      cn('block py-3 text-base font-medium border-b border-white/5', isActive ? 'text-orange border-orange' : 'text-offwhite/90')
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block border border-orange px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest2 text-orange"
                >
                  Let&rsquo;s Talk
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
