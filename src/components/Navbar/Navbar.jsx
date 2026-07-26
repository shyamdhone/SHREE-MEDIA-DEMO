import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FiArrowUpRight, FiMenu, FiX, FiInstagram, FiMessageCircle, FiLinkedin, FiMail } from 'react-icons/fi'
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

const socialLinks = [
  { icon: <FiInstagram className="text-base sm:text-lg" />, href: "https://www.instagram.com/shrii_media/", label: "Instagram" },
  { icon: <FiMessageCircle className="text-base sm:text-lg" />, href: "https://wa.me/918080275214", label: "WhatsApp" },
  { icon: <FiLinkedin className="text-base sm:text-lg" />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FiMail className="text-base sm:text-lg" />, href: "mailto:contact@shriimedia.com", label: "Email" },
]

function BrandMark({ className = "" }) {
  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      <img
        src={logo}
        alt="Shrii Media Logo"
        className="h-10 sm:h-12 lg:h-16 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scope = useRef(null)
  const menuPanel = useRef(null)
  const backdropRef = useRef(null)
  const ctaButtonRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { 
    setIsMenuOpen(false) 
  }, [location.pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { 
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Desktop Navbar Entrance & Magnetic Button Effect
  useGSAP(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline
      .from('[data-navbar-shell]', { autoAlpha: 0, y: -30, duration: 1, delay: 0.1 })
      .from('[data-nav-item]', { autoAlpha: 0, y: -12, duration: 0.6, stagger: 0.04, ease: 'power2.out' }, '-=0.6')

    const cta = ctaButtonRef.current
    if (!cta) return

    const handleMouseMove = (e) => {
      const rect = cta.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(cta, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: 'power3.out' })
    }

    const handleMouseLeave = () => {
      gsap.to(cta, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
    }

    cta.addEventListener('mousemove', handleMouseMove)
    cta.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cta.removeEventListener('mousemove', handleMouseMove)
      cta.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, { scope })

  // Fixed Sliding Side Drawer Animation Controller
  useGSAP(() => {
    const panel = menuPanel.current
    const backdrop = backdropRef.current
    if (!panel || !backdrop) return

    const menuItems = panel.querySelectorAll('[data-mobile-link]')
    const mobileElements = panel.querySelectorAll('[data-mobile-animate]')

    gsap.killTweensOf(panel)
    gsap.killTweensOf(backdrop)
    gsap.killTweensOf(menuItems)
    gsap.killTweensOf(mobileElements)

    if (isMenuOpen) {
      const tl = gsap.timeline()
      tl.to(backdrop, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' })
      .to(panel, { x: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
      .fromTo(menuItems, 
        { autoAlpha: 0, x: 20 }, 
        { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.03, ease: 'power3.out' }, 
        '-=0.3'
      )
      .fromTo(mobileElements, 
        { autoAlpha: 0, y: 15 }, 
        { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power3.out' }, 
        '-=0.25'
      )
    } else {
      const tl = gsap.timeline()
      tl.to(panel, { x: '100%', duration: 0.4, ease: 'power3.inOut' })
      .to(backdrop, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, '-=0.2')
    }
  }, { dependencies: [isMenuOpen], scope })

  const handleMobileNavigate = (e, to) => {
    e.preventDefault()
    setIsMenuOpen(false)
    setTimeout(() => {
      navigate(to)
    }, 350)
  }

  return (
    <header ref={scope} className="pointer-events-auto fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6">
      <nav 
        data-navbar-shell 
        aria-label="Primary navigation" 
        className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-4 py-3 transition-all duration-700 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 ${
          isScrolled 
            ? 'border border-white/85 bg-white/75 shadow-[0_20px_50px_rgba(17,17,17,0.12)] backdrop-blur-3xl scale-[0.98]' 
            : 'border border-black/[0.06] bg-white/50 shadow-[0_10px_30px_rgba(17,17,17,0.04)] backdrop-blur-2xl'
        }`}
      >
        <NavLink aria-label="Shrii Media home" to="/" data-nav-item>
          <BrandMark />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 xl:gap-3 lg:flex" data-nav-item>
          {navigation.map((item) => (
            <NavLink 
              key={item.to}
              end={item.to === '/'} 
              to={item.to} 
              className={({ isActive }) => `
                group relative inline-flex items-center font-display font-medium tracking-tight transition-all duration-300 py-2 px-3 lg:px-4 text-[0.82rem] xl:text-[0.88rem] rounded-full
                ${isActive ? 'bg-black/[0.04] text-ink shadow-sm' : 'text-muted hover:text-ink hover:bg-black/[0.02]'}
              `}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-x-2">
                    {item.label}
                  </span>
                  <span className={`absolute inset-x-3 bottom-1.5 h-px bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange transition-transform duration-500 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block" data-nav-item ref={ctaButtonRef}>
          <NavLink 
            to="/contact" 
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-[0_14px_32px_rgba(255,0,110,0.28)] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,0,110,0.45)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Free Call 
              <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </NavLink>
        </div>

        {/* Hamburger Menu Toggle */}
        <button 
          type="button" 
          aria-label="Open navigation menu" 
          aria-expanded={isMenuOpen} 
          onClick={() => setIsMenuOpen(true)} 
          className="relative z-[210] grid size-10 sm:size-12 place-items-center rounded-full border border-black/10 bg-white/95 text-ink backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white lg:hidden shadow-sm cursor-pointer"
        >
          <FiMenu className="text-xl sm:text-2xl pointer-events-none" />
        </button>
      </nav>

      {/* Backdrop Overlay */}
      <div 
        ref={backdropRef}
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 z-[190] bg-black/40 backdrop-blur-sm opacity-0 invisible"
      />

      {/* Corrected Sliding Side Navigation Drawer */}
      <div 
        ref={menuPanel} 
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile navigation" 
        className="fixed top-0 right-0 bottom-0 z-[200] flex w-full max-w-[320px] flex-col justify-between bg-white px-6 py-6 sm:px-8 sm:py-8 shadow-2xl overflow-y-auto"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Drawer Header */}
        <div data-mobile-animate className="flex items-center justify-between border-b border-black/[0.08] pb-4 shrink-0">
          <span className="font-display text-xs font-bold tracking-widest text-muted uppercase">Navigation</span>
          <button 
            type="button" 
            aria-label="Close navigation menu" 
            onClick={() => setIsMenuOpen(false)} 
            className="grid size-10 sm:size-11 place-items-center rounded-full border border-black/10 bg-zinc-100 text-ink transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            <FiX className="text-xl pointer-events-none" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex flex-col items-start gap-3 py-6 my-auto w-full">
          {navigation.map((item) => (
            <div key={item.to} data-mobile-link className="w-full overflow-hidden">
              <NavLink 
                end={item.to === '/'}
                to={item.to}
                onClick={(e) => handleMobileNavigate(e, item.to)}
                className={({ isActive }) => `
                  group relative flex items-center justify-between w-full font-display font-medium tracking-tight transition-all duration-300 py-2 text-xl sm:text-2xl
                  ${isActive ? 'text-brand-pink font-semibold' : 'text-ink/90 hover:text-brand-pink'}
                `}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
                <FiArrowUpRight className="text-lg opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </NavLink>
            </div>
          ))}
        </div>

        {/* Drawer Footer CTA & Socials */}
        <div className="space-y-4 pt-4 border-t border-black/[0.08] shrink-0">
          <div data-mobile-animate>
            <NavLink 
              onClick={(e) => handleMobileNavigate(e, '/contact')} 
              to="/contact" 
              className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange px-5 py-3.5 font-display text-sm font-semibold tracking-tight text-white shadow-[0_12px_25px_rgba(255,0,110,0.25)] transition-transform duration-300 active:scale-[0.98]"
            >
              <span>Book Strategy Call</span>
              <span className="grid size-8 place-items-center rounded-full bg-white/25">
                <FiArrowUpRight className="text-base pointer-events-none" />
              </span>
            </NavLink>
          </div>

          <div data-mobile-animate className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full border border-black/10 bg-zinc-50 text-ink transition-all duration-300 hover:border-brand-pink hover:bg-brand-pink hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-right">
              <p className="font-display text-[0.65rem] font-bold text-ink tracking-tight">© 2026 Shrii Media</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}