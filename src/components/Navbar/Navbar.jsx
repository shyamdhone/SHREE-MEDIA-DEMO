import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import logo from '../../assets/images/media.jpg'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Case Studies', to: '/case-study' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function BrandMark() {
  return (
    <img
      src={logo}
      alt="Shrii Media Logo"
      className="h-10 w-auto object-contain"
    />
  )
}

function NavigationLink({ item, mobile = false, onNavigate }) {
  return <NavLink end={item.to === '/'} onClick={onNavigate} to={item.to} className={({ isActive }) => `nav-link group relative inline-flex font-display font-medium tracking-[-0.035em] transition-colors duration-300 ${mobile ? 'py-2 text-4xl sm:text-5xl' : 'py-2 text-[0.78rem]'} ${isActive ? 'text-ink' : 'text-muted hover:text-ink'}`}>
    {({ isActive }) => <>
      <span className="relative z-10 transition-[color,background] duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:via-brand-red group-hover:to-brand-orange group-hover:bg-clip-text group-hover:text-transparent">{item.label}</span>
      <span className={`absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange transition-transform duration-500 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
    </>}
  </NavLink>
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scope = useRef(null)
  const menuPanel = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  useGSAP(() => {
    gsap.from('[data-navbar-shell]', { autoAlpha: 0, y: -20, duration: 0.85, ease: 'power3.out' })
    gsap.from('[data-nav-item]', { autoAlpha: 0, y: -8, duration: 0.55, stagger: 0.055, delay: 0.22, ease: 'power2.out' })
  }, { scope })

  useGSAP(() => {
    if (!menuPanel.current) return undefined
    const menuItems = menuPanel.current.querySelectorAll('[data-mobile-link], [data-mobile-cta]')
    if (isMenuOpen) {
      const timeline = gsap.timeline()
      timeline.set(menuPanel.current, { display: 'flex' }).fromTo(menuPanel.current, { yPercent: -105 }, { yPercent: 0, duration: 0.72, ease: 'power4.inOut' }).fromTo(menuItems, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.055, ease: 'power3.out' }, '-=0.25')
      return undefined
    }
    if (gsap.getProperty(menuPanel.current, 'display') !== 'none') gsap.to(menuPanel.current, { yPercent: -105, duration: 0.5, ease: 'power3.inOut', onComplete: () => gsap.set(menuPanel.current, { display: 'none' }) })
    return undefined
  }, { dependencies: [isMenuOpen], scope })

  return <header ref={scope} className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
    <nav data-navbar-shell aria-label="Primary navigation" className={`pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-5 py-4 transition-[background-color,box-shadow,border-color] duration-500 sm:px-7 ${isScrolled ? 'border border-white/70 bg-white/80 shadow-[0_16px_45px_rgba(17,17,17,0.09)] backdrop-blur-2xl' : 'border border-transparent bg-transparent'}`}>
      <NavLink aria-label="Shrii Media home" to="/"><BrandMark /></NavLink>
      <div className="hidden items-center gap-5 xl:gap-7 2xl:gap-8 lg:flex">{navigation.map((item) => <span data-nav-item key={item.to}><NavigationLink item={item} /></span>)}</div>
      <div className="hidden lg:block" data-nav-item><NavLink to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange px-5 py-3 text-xs font-semibold text-white shadow-[0_12px_26px_rgba(255,0,110,0.22)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_16px_32px_rgba(255,0,110,0.36)]">Book Free Call <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></NavLink></div>
      <button type="button" aria-label="Open navigation menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(true)} className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/65 text-ink backdrop-blur-lg transition hover:scale-105 lg:hidden"><FiMenu className="text-xl" /></button>
    </nav>

    <div ref={menuPanel} role="dialog" aria-modal="true" aria-label="Mobile navigation" className="pointer-events-auto fixed inset-0 hidden min-h-dvh flex-col bg-[#fcfcfc] px-6 pb-8 pt-6 sm:px-10" style={{ transform: 'translateY(-105%)' }}>
      <div className="flex items-center justify-between"><NavLink aria-label="Shrii Media home" to="/"><BrandMark /></NavLink><button type="button" aria-label="Close navigation menu" onClick={() => setIsMenuOpen(false)} className="grid size-11 place-items-center rounded-full border border-black/10 text-ink transition hover:scale-105"><FiX className="text-xl" /></button></div>
      <div className="my-auto flex flex-col items-start gap-1">{navigation.map((item) => <span data-mobile-link key={item.to}><NavigationLink item={item} mobile onNavigate={() => setIsMenuOpen(false)} /></span>)}</div>
      <NavLink data-mobile-cta onClick={() => setIsMenuOpen(false)} to="/contact" className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange px-5 py-4 font-display text-lg font-medium tracking-[-0.04em] text-white shadow-[0_16px_35px_rgba(255,0,110,0.22)]">Book Free Call <FiArrowUpRight /></NavLink>
    </div>
  </header>
}
