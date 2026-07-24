import { useRef } from 'react'
import { Link } from 'react-router-dom'
import ceoImage from "../../assets/images/Bio.jpg";
import { 
  FiArrowDown, 
  FiArrowUpRight, 
  FiPlay, 
  FiInstagram, 
  FiMessageCircle, 
  FiLinkedin, 
  FiMail, 
  FiCode, 
  FiTrendingUp, 
  FiLayout, 
  FiVideo, 
  FiCheckCircle
} from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const proofPoints = [
  ['50+', 'Businesses trusted us'],
  ['30M+', 'Views generated'],
  ['250+', 'Creative projects'],
]

const servicesList = [
  {
    icon: <FiTrendingUp className="text-xl" />,
    title: "Social Media Growth",
    description: "Scale your brand footprint organically and through high-converting paid acquisition.",
    tag: "01 / STRATEGY"
  },
  {
    icon: <FiLayout className="text-xl" />,
    title: "Brand Identity & Design",
    description: "Crafting iconic visual languages that evoke emotion and build lasting equity.",
    tag: "02 / DESIGN"
  },
  {
    icon: <FiVideo className="text-xl" />,
    title: "Video Production",
    description: "Cinematic storytelling and short-form content engineered to stop the scroll.",
    tag: "03 / PRODUCTION"
  },
  {
    icon: <FiCode className="text-xl" />,
    title: "Digital Experiences",
    description: "High-performance websites and immersive web applications that convert visitors.",
    tag: "04 / DEVELOPMENT"
  }
]

function ProofCard({ value, label }) {
  return (
    <div className="min-w-[7.5rem] sm:min-w-[8.5rem] rounded-2xl border border-black/[0.06] bg-white/60 px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
      <p className="font-display text-base sm:text-lg font-semibold tracking-[-0.06em] text-ink">{value}</p>
      <p className="mt-0.5 text-[0.58rem] sm:text-[0.62rem] font-medium uppercase tracking-[0.08em] text-muted">{label}</p>
    </div>
  )
}

function FloatingCard({ className = '', children }) {
  return (
    <div data-float className={`absolute rounded-2xl sm:rounded-3xl border border-white/80 bg-white/65 p-3 sm:p-4 shadow-[0_22px_55px_rgba(69,34,39,0.10)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  )
}

function VisualComposition() {
  return (
    <div data-visual className="relative mx-auto aspect-square w-full max-w-[28rem] sm:max-w-[38rem] select-none lg:max-w-none">
      <div data-parallax="-0.2" className="absolute left-[18%] top-[12%] size-[58%] rounded-full bg-gradient-to-br from-brand-pink/30 via-brand-red/20 to-brand-gold/35 blur-3xl" />
      <div data-parallax="0.25" className="absolute bottom-[5%] right-[2%] size-[44%] rounded-full bg-gradient-to-br from-brand-orange/25 to-brand-pink/15 blur-3xl" />
      <div className="absolute inset-[11%] rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/80 bg-white/45 shadow-[0_35px_90px_rgba(94,46,46,0.10)] backdrop-blur-md" />
      <div data-phone data-parallax="0.12" className="absolute left-[32%] top-[16%] h-[62%] w-[35%] rounded-[1.8rem] sm:rounded-[2.1rem] border-[4px] sm:border-[5px] border-ink bg-ink p-1 shadow-[0_30px_55px_rgba(17,17,17,0.25)]">
        <div className="relative h-full overflow-hidden rounded-[1.4rem] sm:rounded-[1.65rem] bg-gradient-to-br from-brand-pink via-brand-red to-brand-orange">
          <div className="absolute left-1/2 top-2 h-2.5 sm:h-3 w-[42%] -translate-x-1/2 rounded-full bg-ink" />
          <div className="absolute inset-x-2.5 sm:inset-x-3 top-8 sm:top-9 rounded-2xl bg-white/20 p-2.5 sm:p-3 backdrop-blur-sm">
            <span className="font-display text-[0.45rem] sm:text-[0.52rem] font-semibold tracking-[-0.04em] text-white">SHRII MEDIA</span>
            <p className="mt-2 sm:mt-4 font-display text-base sm:text-2xl font-semibold leading-none tracking-[-0.08em] text-white">Make it<br />magnetic.</p>
          </div>
          <div className="absolute bottom-3 sm:bottom-4 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between rounded-xl sm:rounded-2xl bg-white/90 px-2 sm:px-2.5 py-1.5 sm:py-2 shadow-lg">
            <span className="grid size-4 sm:size-5 place-items-center rounded-full bg-brand-pink font-display text-[0.45rem] sm:text-[0.55rem] font-bold text-white">S</span>
            <span className="text-[0.4rem] sm:text-[0.45rem] font-semibold tracking-[0.1em] text-ink">CREATIVE DAILY</span>
          </div>
        </div>
      </div>
      <FloatingCard className="left-[1%] top-[13%] w-[42%] sm:left-[3%]">
        <p className="text-[0.55rem] sm:text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">Instagram Growth</p>
        <div className="mt-2 sm:mt-3 flex items-end justify-between">
          <span className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.08em] text-ink">+320%</span>
          <span className="rounded-full bg-brand-pink/10 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[0.55rem] sm:text-[0.62rem] font-semibold text-brand-pink">This month</span>
        </div>
        <div className="mt-2 sm:mt-3 h-1.5 overflow-hidden rounded-full bg-black/5">
          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-brand-pink to-brand-orange" />
        </div>
      </FloatingCard>
      <FloatingCard className="right-[0%] top-[8%] w-[31%] p-3 sm:p-3.5">
        <div className="flex size-7 sm:size-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink to-brand-orange text-[0.6rem] sm:text-xs font-bold text-white">◎</div>
        <p className="mt-3 sm:mt-4 text-[0.55rem] sm:text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">Reach</p>
        <p className="mt-0.5 sm:mt-1 font-display text-lg sm:text-xl font-semibold tracking-[-0.07em] text-ink">8.2M <span className="text-[0.6rem] sm:text-xs font-medium text-muted">Views</span></p>
      </FloatingCard>
      <FloatingCard className="bottom-[10%] left-[5%] w-[36%] p-3 sm:p-3.5">
        <p className="text-[0.55rem] sm:text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">Brand Identity</p>
        <div className="mt-2.5 sm:mt-3 flex gap-1 sm:gap-1.5">
          <span className="size-5 sm:size-6 rounded-full bg-brand-pink" />
          <span className="size-5 sm:size-6 rounded-full bg-brand-red" />
          <span className="size-5 sm:size-6 rounded-full bg-brand-orange" />
          <span className="size-5 sm:size-6 rounded-full bg-brand-gold" />
        </div>
      </FloatingCard>
      <FloatingCard className="bottom-[4%] right-[4%] w-[39%] p-3 sm:p-3.5">
        <div className="flex items-center justify-between">
          <p className="text-[0.55rem] sm:text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">Creative Strategy</p>
          <FiPlay className="text-brand-pink text-xs sm:text-sm" />
        </div>
        <p className="mt-2 sm:mt-3 font-display text-sm sm:text-base font-medium tracking-[-0.05em] text-ink">Ideas that create momentum.</p>
      </FloatingCard>
      <div data-float className="absolute right-[14%] top-[45%] rounded-full border border-white/90 bg-white/80 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[0.55rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-ink shadow-lg backdrop-blur-xl">Performance</div>
      <div data-float className="absolute bottom-[28%] left-[30%] rounded-full border border-white/90 bg-white/80 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[0.55rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-ink shadow-lg backdrop-blur-xl">Video Production</div>
    </div>
  )
}

function FounderSection() {
  const founderRef = useRef(null)

  useGSAP(() => {
    const el = founderRef.current
    gsap.fromTo(el.querySelectorAll('[data-reveal]'), {
      y: 40,
      autoAlpha: 0
    }, {
      y: 0,
      autoAlpha: 1,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      }
    })
  }, { scope: founderRef })

  return (
    <section ref={founderRef} className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
        
        <div data-reveal className="relative p-5 sm:p-8 lg:p-10 rounded-[2.2rem] sm:rounded-[3rem] bg-zinc-100/70 border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] backdrop-blur-sm">
          <div className="relative mx-auto max-w-sm lg:max-w-none aspect-[4/5] rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-black/5 bg-white">
            <img 
               src={ceoImage}
               alt="Shrikant Awchar - Founder & Creative Director" 
               className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white">
              <span className="inline-block px-3 py-1 mb-2 rounded-full bg-white/20 backdrop-blur-md text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-widest">Leadership</span>
              <h3 className="font-display text-lg sm:text-2xl font-bold tracking-tight">Shrikant Awchar</h3>
              <p className="text-white/80 text-xs sm:text-sm">Founder & Creative Director, Shrii Media</p>
            </div>
          </div>

          <div className="absolute -bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-2xl sm:rounded-3xl bg-white/95 border border-white p-4 sm:p-6 shadow-2xl backdrop-blur-xl max-w-[180px] sm:max-w-[210px]">
            <p className="font-display text-2xl sm:text-3xl font-bold text-ink">100%</p>
            <p className="mt-1 text-[0.65rem] sm:text-xs font-medium text-muted uppercase tracking-wider">Commitment to Creative Excellence</p>
          </div>
        </div>

        <div data-reveal className="space-y-6 sm:space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">The Visionary</span>
            <h2 className="mt-2 sm:mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.15]">
              Shaping the future of digital storytelling.
            </h2>
          </div>

          <p className="text-muted leading-relaxed text-sm sm:text-base lg:text-lg">
            At Shrii Media, we believe true digital dominance is built on the intersection of raw creativity and systematic data strategy. Founded by Shrikant Awchar, our agency is driven by a relentless passion to turn ambitious businesses into unforgettable category leaders.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-brand-pink/10 p-1 text-brand-pink shrink-0"><FiCheckCircle /></div>
              <div>
                <h4 className="font-semibold text-ink text-sm">Vision & Strategy</h4>
                <p className="text-xs text-muted mt-0.5">Holistic roadmaps designed for long-term equity.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-brand-pink/10 p-1 text-brand-pink shrink-0"><FiCheckCircle /></div>
              <div>
                <h4 className="font-semibold text-ink text-sm">Creative Storytelling</h4>
                <p className="text-xs text-muted mt-0.5">Narratives that grip attention and drive loyalty.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-brand-pink/10 p-1 text-brand-pink shrink-0"><FiCheckCircle /></div>
              <div>
                <h4 className="font-semibold text-ink text-sm">Web & Digital Dev</h4>
                <p className="text-xs text-muted mt-0.5">High-performance digital experiences that convert.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-brand-pink/10 p-1 text-brand-pink shrink-0"><FiCheckCircle /></div>
              <div>
                <h4 className="font-semibold text-ink text-sm">Social Scaling</h4>
                <p className="text-xs text-muted mt-0.5">Omnipresence across top-tier platforms.</p>
              </div>
            </div>
          </div>

          <div className="pt-2 sm:pt-4 flex flex-wrap gap-3 sm:gap-4 items-center">
            <a 
              href="https://www.instagram.com/shrii_media/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-ink text-white text-xs font-semibold uppercase tracking-wider transition-transform duration-300 hover:scale-105 shadow-md"
            >
              <FiInstagram className="text-sm sm:text-base" /> Instagram
            </a>
            <a 
              href="https://wa.me/918080275214" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-brand-pink text-white text-xs font-semibold uppercase tracking-wider transition-transform duration-300 hover:scale-105 shadow-md"
            >
              <FiMessageCircle className="text-sm sm:text-base" /> WhatsApp
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full border border-black/10 hover:border-brand-pink transition-colors text-ink"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-base sm:text-lg" />
            </a>
            <a 
              href="mailto:contact@shriimedia.com" 
              className="p-2.5 sm:p-3 rounded-full border border-black/10 hover:border-brand-pink transition-colors text-ink"
              aria-label="Email"
            >
              <FiMail className="text-base sm:text-lg" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

function ServicesSection() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray('[data-service-card]')
    gsap.fromTo(cards, {
      y: 40,
      autoAlpha: 0
    }, {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%'
      }
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50/50">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink">Our Expertise</span>
            <h2 className="mt-2 sm:mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              Capabilities built for impact.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 max-w-md text-muted text-sm sm:text-base">
            We combine strategic depth with elite execution to build brands that dominate their markets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              data-service-card
              className="group relative rounded-3xl border border-black/[0.06] bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-brand-pink/5 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-125" />
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="p-3 rounded-2xl bg-brand-pink/10 text-brand-pink transition-colors group-hover:bg-brand-pink group-hover:text-white">
                  {service.icon}
                </span>
                <span className="text-[0.65rem] font-semibold tracking-widest text-muted">{service.tag}</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink mb-2.5 sm:mb-3">{service.title}</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">{service.description}</p>
              <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs font-semibold text-ink group-hover:text-brand-pink transition-colors">
                <span>Explore capability</span>
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Hero() {
  const scope = useRef(null)

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline
      .from('[data-hero-line]', { yPercent: 115, duration: 1, stagger: 0.14, delay: 0.15 })
      .from('[data-hero-subtitle]', { autoAlpha: 0, y: 18, duration: 0.7 }, '-=0.48')
      .from('[data-hero-action]', { autoAlpha: 0, y: 14, duration: 0.55, stagger: 0.1 }, '-=0.35')
      .from('[data-proof]', { autoAlpha: 0, y: 12, duration: 0.45, stagger: 0.08 }, '-=0.25')
      .from('[data-visual]', { autoAlpha: 0, scale: 0.92, duration: 1.1 }, '-=0.85')

    // Desktop only scroll snapping between sections (Removed route redirection completely)
    const isDesktop = window.innerWidth >= 1024

    if (isDesktop && !reduceMotion) {
      ScrollTrigger.create({
        trigger: scope.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        snap: {
          snapTo: 1,
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: 'power3.inOut'
        }
      })
    }

    if (reduceMotion) return undefined

    const floatingCards = gsap.utils.toArray('[data-float]')
    floatingCards.forEach((card, index) => 
      gsap.to(card, { y: index % 2 ? -9 : 9, rotation: index % 2 ? 1.2 : -0.8, duration: 3.6 + index * 0.35, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    )

    gsap.to('[data-phone]', { y: -6, rotation: 2, transformOrigin: '50% 50%', duration: 4.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.utils.toArray('[data-blob]').forEach((blob, index) => 
      gsap.to(blob, { x: index ? -22 : 26, y: index ? 18 : -14, scale: index ? 1.05 : 0.95, duration: 8 + index * 2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    )

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    let magneticHandlers = []

    if (!isTouchDevice) {
      magneticHandlers = gsap.utils.toArray('a[data-hero-action]').map((button) => {
        const move = (event) => { 
          const bounds = button.getBoundingClientRect()
          gsap.to(button, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.17, y: (event.clientY - bounds.top - bounds.height / 2) * 0.2, scale: 1.05, duration: 0.35, ease: 'power3.out', overwrite: 'auto' }) 
        }
        const leave = () => gsap.to(button, { x: 0, y: 0, scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.45)' })
        button.addEventListener('pointermove', move)
        button.addEventListener('pointerleave', leave)
        return [button, move, leave]
      })
    }

    const visual = scope.current.querySelector('[data-visual]')
    const handlePointer = (event) => {
      const { left, top, width, height } = visual.getBoundingClientRect()
      const x = (event.clientX - left - width / 2) / width
      const y = (event.clientY - top - height / 2) / height
      visual.querySelectorAll('[data-parallax]').forEach((layer) => 
        gsap.to(layer, { x: x * 24 * Number(layer.dataset.parallax), y: y * 24 * Number(layer.dataset.parallax), duration: 1.1, ease: 'power3.out', overwrite: 'auto' })
      )
    }
    visual.addEventListener('pointermove', handlePointer)

    return () => { 
      visual.removeEventListener('pointermove', handlePointer)
      if (!isTouchDevice) {
        magneticHandlers.forEach(([button, move, leave]) => { 
          button.removeEventListener('pointermove', move)
          button.removeEventListener('pointerleave', leave) 
        })
      }
    }
  }, { scope })

  return (
    <>
      <section ref={scope} aria-labelledby="hero-title" className="relative isolate min-h-screen overflow-hidden bg-white px-4 pb-24 pt-28 sm:px-6 lg:flex lg:items-center lg:pb-20 lg:pt-28">
        <div data-blob aria-hidden="true" className="absolute -left-32 top-1/4 -z-10 size-72 sm:size-80 rounded-full bg-brand-pink/[0.06] blur-3xl" />
        <div data-blob aria-hidden="true" className="absolute -right-24 top-8 -z-10 size-80 sm:size-96 rounded-full bg-brand-gold/[0.08] blur-3xl" />
        
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-20">
          <div className="relative z-10 lg:pb-10">
            <p data-hero-action className="mb-4 sm:mb-6 text-[0.62rem] sm:text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-muted">Social media · Branding · Digital</p>
            <h1 id="hero-title" className="font-display text-[clamp(2.7rem,8vw,6.9rem)] font-semibold leading-[0.92] sm:leading-[0.88] tracking-[-0.085em] text-ink">
              <span className="block overflow-hidden"><span data-hero-line className="block">We Build Brands</span></span>
              <span className="block overflow-hidden"><span data-hero-line className="block text-gradient">That People Remember.</span></span>
            </h1>
            <p data-hero-subtitle className="mt-5 sm:mt-7 max-w-md text-xs sm:text-sm lg:text-base leading-6 sm:leading-7 text-muted">
              Helping ambitious brands grow through social media, creative storytelling, branding, and digital experiences.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link data-hero-action to="/work" className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-xs sm:text-sm font-medium text-white shadow-[0_14px_30px_rgba(17,17,17,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_18px_35px_rgba(17,17,17,0.23)]">
                View Our Work <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link data-hero-action to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-xs sm:text-sm font-medium text-ink backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-brand-pink/30 hover:shadow-[0_16px_30px_rgba(255,0,110,0.10)]">
                Book Free Strategy Call <FiArrowUpRight className="text-brand-pink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="mt-8 sm:mt-10 flex gap-3 overflow-x-auto pb-2 sm:pb-1 scrollbar-none">
              {proofPoints.map(([value, label]) => (
                <span data-proof key={label}><ProofCard value={value} label={label} /></span>
              ))}
            </div>
          </div>
          <VisualComposition />
        </div>

        <div data-hero-action className="absolute bottom-4 sm:bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 sm:gap-2 text-muted lg:flex">
          <span className="grid h-7 sm:h-8 w-4 sm:w-5 place-items-start rounded-full border border-black/20 p-1">
            <span className="size-1.5 animate-bounce rounded-full bg-brand-pink" />
          </span>
          <span className="text-[0.52rem] sm:text-[0.58rem] font-semibold uppercase tracking-[0.18em]">Scroll to Explore</span>
          <FiArrowDown className="text-[10px] sm:text-xs" />
        </div>
      </section>

      <FounderSection />
      <ServicesSection />
    </>
  )
}