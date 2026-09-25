import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CALENDLY_URL } from '@/data/home'
import { chrome, container } from '@/lib/ui'
import { cn } from '@/lib/utils'
import { BrandLogo } from './BrandLogo'
import { ButtonLink } from './ui/Button'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/process' },
  { label: 'About', to: '/about' },
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
        'sticky top-0 z-50 transition-shadow duration-200',
        chrome,
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]' : 'shadow-none',
      )}
    >
      <nav aria-label="Primary" className={cn(container, 'flex h-20 items-center justify-between lg:h-24')}>
        <Link to="/" aria-label="CALEBrated Virtual Services, home">
          <BrandLogo />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'group relative inline-flex min-h-11 items-center font-display text-nav font-medium uppercase transition-colors duration-200',
                    isActive ? 'text-white' : 'text-white/80 hover:text-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={cn(
                        'absolute bottom-1.5 left-0 h-0.5 bg-orange transition-[width] duration-200 group-hover:w-full',
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
          <ButtonLink href={CALENDLY_URL} size="sm" full={false}>
            Book a Free Consultation
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 bg-[#161B22] lg:hidden"
          >
            <ul className={cn(container, 'flex flex-col py-4')}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      cn(
                        'flex min-h-12 items-center border-b border-white/10 font-display text-nav font-medium uppercase',
                        isActive ? 'border-l-2 border-orange pl-3 text-white' : 'text-white/90',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pb-2 pt-6">
                <ButtonLink href={CALENDLY_URL} size="md" full>
                  Book a Free Consultation
                </ButtonLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
