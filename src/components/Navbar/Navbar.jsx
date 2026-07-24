import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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
  { icon: <FiInstagram className="text-lg" />, href: "https://www.instagram.com/shrii_media/", label: "Instagram" },
  { icon: <FiMessageCircle className="text-lg" />, href: "https://wa.me/918080275214", label: "WhatsApp" },
  { icon: <FiLinkedin className="text-lg" />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FiMail className="text-lg" />, href: "mailto:contact@shriimedia.com", label: "Email" },
]

function BrandMark({ className = "" }) {
  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      <img
        src={logo}
        alt="Shrii Media Logo"
        className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  )
}

function NavigationLink({ item, mobile = false, onNavigate }) {
  return (
    <NavLink 
      end={item.to === '/'} 
      onClick={onNavigate} 
      to={item.to} 
      className={({ isActive }) => `
        group relative inline-flex items-center font-display font-medium tracking-tight transition-all duration-300
        ${mobile ? 'py-1 text-3xl sm:text-4xl lg:text-[46px]' : 'py-2 px-3 lg:px-4 text-[0.82rem] xl:text-[0.88rem] rounded-full'}
        ${!mobile && isActive ? 'bg-black/[0.04] text-ink shadow-sm' : ''}
        ${!mobile && !isActive ? 'text-muted hover:text-ink hover:bg-black/[0.02]' : ''}
        ${mobile && isActive ? 'text-brand-pink font-semibold' : ''}
        ${mobile && !isActive ? 'text-ink/90 hover:text-brand-pink' : ''}
      `}
    >
      {({ isActive }) => (
        <>
          <span className="relative z-10 transition-all duration-300 group-hover:translate-x-2">
            {item.label}
          </span>
          {!mobile && (
            <span className={`absolute inset-x-3 bottom-1.5 h-px bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange transition-transform duration-500 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          )}
        </>
      )}
    </NavLink>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scope = useRef(null)
  const menuPanel = useRef(null)
  const ctaButtonRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
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

  // Fullscreen Luxury Mobile Menu Animation Timeline with explicit visibility fixes
  useGSAP(() => {
    if (!menuPanel.current) return undefined
    const menuItems = menuPanel.current.querySelectorAll('[data-mobile-link]')
    const mobileElements = menuPanel.current.querySelectorAll('[data-mobile-animate]')

    if (isMenuOpen) {
      gsap.set(menuPanel.current, { display: 'flex', pointerEvents: 'auto' })
      const tl = gsap.timeline()
      tl.fromTo(menuPanel.current, 
        { opacity: 0, scale: 0.98, yPercent: -100 }, 
        { opacity: 1, scale: 1, yPercent: 0, duration: 0.75, ease: 'power4.inOut' }
      )
      .fromTo(menuItems, 
        { autoAlpha: 0, y: 30, skewY: 3 }, 
        { autoAlpha: 1, y: 0, skewY: 0, duration: 0.5, stagger: 0.04, ease: 'power3.out' }, 
        '-=0.4'
      )
      .fromTo(mobileElements, 
        { autoAlpha: 0, y: 15 }, 
        { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out' }, 
        '-=0.35'
      )
      return undefined
    }

    if (gsap.getProperty(menuPanel.current, 'display') !== 'none') {
      gsap.to(menuPanel.current, { 
        opacity: 0, 
        scale: 0.98, 
        yPercent: -100, 
        duration: 0.5, 
        ease: 'power3.inOut', 
        onComplete: () => gsap.set(menuPanel.current, { display: 'none', pointerEvents: 'none' }) 
      })
    }
    return undefined
  }, { dependencies: [isMenuOpen], scope })

  return (
    <header ref={scope} className="pointer-events-auto fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <nav 
        data-navbar-shell 
        aria-label="Primary navigation" 
        className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-6 py-3.5 transition-all duration-700 sm:px-8 lg:py-4 ${
          isScrolled 
            ? 'border border-white/85 bg-white/75 shadow-[0_20px_50px_rgba(17,17,17,0.12)] backdrop-blur-3xl scale-[0.98]' 
            : 'border border-black/[0.06] bg-white/50 shadow-[0_10px_30px_rgba(17,17,17,0.04)] backdrop-blur-2xl'
        }`}
      >
        <NavLink aria-label="Shrii Media home" to="/" data-nav-item>
          <BrandMark />
        </NavLink>

        <div className="hidden items-center gap-2 xl:gap-3 lg:flex" data-nav-item>
          {navigation.map((item) => (
            <span key={item.to}>
              <NavigationLink item={item} />
            </span>
          ))}
        </div>

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

        <button 
          type="button" 
          aria-label="Open navigation menu" 
          aria-expanded={isMenuOpen} 
          onClick={() => setIsMenuOpen(true)} 
          className="grid size-12 place-items-center rounded-full border border-black/10 bg-white/90 text-ink backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white lg:hidden shadow-sm cursor-pointer"
        >
          <FiMenu className="text-2xl" />
        </button>
      </nav>

      {/* Luxury Fullscreen Mobile Navigation Drawer */}
      <div 
        ref={menuPanel} 
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile navigation" 
        className="fixed inset-0 z-[100] hidden min-h-[100dvh] flex-col justify-between bg-white px-6 pb-6 pt-5 sm:px-12 sm:pb-8 sm:pt-6 backdrop-blur-3xl overflow-y-auto" 
        style={{ transform: 'translateY(-100%)', display: 'none' }}
      >
        <div data-mobile-animate className="flex items-center justify-between border-b border-black/[0.08] pb-4 shrink-0">
          <NavLink aria-label="Shrii Media home" to="/" onClick={() => setIsMenuOpen(false)}>
            <BrandMark />
          </NavLink>
          <button 
            type="button" 
            aria-label="Close navigation menu" 
            onClick={() => setIsMenuOpen(false)} 
            className="grid size-12 sm:size-14 place-items-center rounded-full border border-black/10 bg-zinc-100 text-ink transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        <div className="flex flex-col items-start gap-1.5 py-4 my-auto">
          {navigation.map((item) => (
            <div key={item.to} data-mobile-link className="overflow-hidden">
              <NavigationLink item={item} mobile onNavigate={() => setIsMenuOpen(false)} />
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-4 border-t border-black/[0.08] shrink-0">
          <div data-mobile-animate>
            <NavLink 
              data-mobile-cta 
              onClick={() => setIsMenuOpen(false)} 
              to="/contact" 
              className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange px-6 py-4 font-display text-base sm:text-lg font-semibold tracking-tight text-white shadow-[0_16px_35px_rgba(255,0,110,0.28)] transition-transform duration-300 active:scale-[0.98]"
            >
              <span>Book Free Strategy Call</span>
              <span className="grid size-9 place-items-center rounded-full bg-white/20">
                <FiArrowUpRight className="text-lg" />
              </span>
            </NavLink>
          </div>

          <div data-mobile-animate className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-black/10 bg-zinc-50 text-ink transition-all duration-300 hover:border-brand-pink hover:bg-brand-pink hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-right">
              <p className="font-display text-[0.7rem] font-bold text-ink tracking-tight">© 2026 Shrii Media</p>
              <p className="text-[0.55rem] font-medium text-muted uppercase tracking-widest mt-0.5">Creating Digital Experiences</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}