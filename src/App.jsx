import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SmoothScrollProvider } from './components/SmoothScrollProvider'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { SiteLayout } from './components/layout/SiteLayout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  return (
    <SmoothScrollProvider>
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
