import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BookingBadge } from '@/components/BookingBadge'
import { ScrollManager } from '@/components/layout/ScrollManager'
import { usePageVariants } from '@/components/layout/PageTransition'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Process from '@/pages/Process'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

export default function App() {
  const location = useLocation()
  const pageVariants = usePageVariants()
  // Focusing the incoming page's landmark once it has entered gives keyboard users
  // a sensible tab start point and lets screen readers announce the route change.
  // With initial={false} the first mount never animates, so this skips page load.
  const mainRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollManager />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          ref={mainRef}
          id="main"
          key={location.pathname}
          tabIndex={-1}
          className="focus-visible:outline-none"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationComplete={(definition) => {
            if (definition === 'animate') mainRef.current?.focus({ preventScroll: true })
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BookingBadge />
    </div>
  )
}
