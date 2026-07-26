import { useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function SiteLayout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)

  // Smooth fade-in and slide-up transition applied ONLY to the main content area
  useGSAP(() => {
    gsap.fromTo(
      mainRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', clearProps: 'all' }
    )
  }, { dependencies: [pathname], scope: mainRef })

  return (
    <div className="site-shell flex flex-col min-h-screen">
      <Navbar />
      <main ref={mainRef} id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}