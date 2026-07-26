import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SmoothScrollProvider } from './components/SmoothScrollProvider'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { SiteLayout } from './components/layout/SiteLayout'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Contact = lazy(() => import('./pages/Contact'))

function ScrollToTopAndRefresh() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 1. Instantly move window back to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })

    // 2. Safely check and reset custom smooth scroll provider if present
    if (window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo(0, { immediate: true })
    }

    // 3. Kill and refresh ScrollTriggers to prevent layout/blank-screen bugs on page switches
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    ScrollTrigger.refresh()
  }, [pathname])

  return null
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <ScrollToTopAndRefresh />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </SmoothScrollProvider>
  )
}