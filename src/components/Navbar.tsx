import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Menu, X } from 'lucide-react'
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
      setScrolled(window.scrollY > 24)
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
        'sticky top-0 z-50 bg-[linear-gradient(90deg,#161B22_0%,#1E232B_55%,#2A2F37_100%)] transition-shadow duration-500 ease-premium',
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]' : 'shadow-none',
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-24 max-w-[1140px] items-center justify-between px-6">
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
                  cn(
                    'group relative py-2 font-display text-[15px] uppercase transition-colors duration-300',
                    isActive ? 'text-orange' : 'text-white/85 hover:text-orange',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 h-0.5 bg-orange transition-all duration-300 ease-premium group-hover:w-full',
                        isActive ? 'w-full' : 'w-0',
                      )}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-md border border-orange px-7 py-3 font-display text-[15px] text-orange transition-colors duration-300 hover:bg-orange hover:text-white"
          >
            Contact Us
            <Mail size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="overflow-hidden border-t border-white/10 bg-[#1B2027] lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      cn(
                        'block border-b py-3 font-display text-base uppercase',
                        isActive ? 'border-orange text-orange' : 'border-white/10 text-white/90',
                      )
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
                  className="flex items-center justify-center gap-3 rounded-md border border-orange px-6 py-3 font-display text-orange"
                >
                  Contact Us
                  <Mail size={17} />
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
