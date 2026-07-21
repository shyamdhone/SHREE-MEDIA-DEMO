import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowDown, FiArrowUpRight, FiPlay } from 'react-icons/fi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const proofPoints = [
  ['50+', 'Businesses trusted us'],
  ['30M+', 'Views generated'],
  ['250+', 'Creative projects'],
]

function ProofCard({ value, label }) {
  return <div className="min-w-[8.5rem] rounded-2xl border border-black/[0.06] bg-white/60 px-4 py-3 backdrop-blur-md"><p className="font-display text-lg font-semibold tracking-[-0.06em] text-ink">{value}</p><p className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.08em] text-muted">{label}</p></div>
}

function FloatingCard({ className = '', children }) {
  return <div data-float className={`absolute rounded-3xl border border-white/80 bg-white/65 p-4 shadow-[0_22px_55px_rgba(69,34,39,0.10)] backdrop-blur-xl ${className}`}>{children}</div>
}

function VisualComposition() {
  return <div data-visual className="relative mx-auto aspect-square w-full max-w-[38rem] select-none lg:max-w-none">
    <div data-parallax="-0.2" className="absolute left-[18%] top-[12%] size-[58%] rounded-full bg-gradient-to-br from-brand-pink/30 via-brand-red/20 to-brand-gold/35 blur-3xl" />
    <div data-parallax="0.25" className="absolute bottom-[5%] right-[2%] size-[44%] rounded-full bg-gradient-to-br from-brand-orange/25 to-brand-pink/15 blur-3xl" />
    <div className="absolute inset-[11%] rounded-[3.5rem] border border-white/80 bg-white/45 shadow-[0_35px_90px_rgba(94,46,46,0.10)] backdrop-blur-md" />
    <div data-phone data-parallax="0.12" className="absolute left-[32%] top-[16%] h-[62%] w-[35%] rounded-[2.1rem] border-[5px] border-ink bg-ink p-1.5 shadow-[0_30px_55px_rgba(17,17,17,0.25)]">
      <div className="relative h-full overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-brand-pink via-brand-red to-brand-orange"><div className="absolute left-1/2 top-2 h-3 w-[42%] -translate-x-1/2 rounded-full bg-ink" /><div className="absolute inset-x-3 top-9 rounded-2xl bg-white/20 p-3 backdrop-blur-sm"><span className="font-display text-[0.52rem] font-semibold tracking-[-0.04em] text-white">SHRII MEDIA</span><p className="mt-4 font-display text-lg font-semibold leading-none tracking-[-0.08em] text-white sm:text-2xl">Make it<br />magnetic.</p></div><div className="absolute bottom-4 left-3 right-3 flex items-center justify-between rounded-2xl bg-white/90 px-2.5 py-2 shadow-lg"><span className="grid size-5 place-items-center rounded-full bg-brand-pink font-display text-[0.55rem] font-bold text-white">S</span><span className="text-[0.45rem] font-semibold tracking-[0.1em] text-ink">CREATIVE DAILY</span></div></div>
    </div>
    <FloatingCard className="left-[1%] top-[13%] w-[42%] sm:left-[3%]"><p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">Instagram Growth</p><div className="mt-3 flex items-end justify-between"><span className="font-display text-3xl font-semibold tracking-[-0.08em] text-ink">+320%</span><span className="rounded-full bg-brand-pink/10 px-2 py-1 text-[0.62rem] font-semibold text-brand-pink">This month</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/5"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-brand-pink to-brand-orange" /></div></FloatingCard>
    <FloatingCard className="right-[0%] top-[8%] w-[31%] p-3.5"><div className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink to-brand-orange text-xs font-bold text-white">◎</div><p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">Reach</p><p className="mt-1 font-display text-xl font-semibold tracking-[-0.07em] text-ink">8.2M <span className="text-xs font-medium text-muted">Views</span></p></FloatingCard>
    <FloatingCard className="bottom-[10%] left-[5%] w-[36%] p-3.5"><p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">Brand Identity</p><div className="mt-3 flex gap-1.5"><span className="size-6 rounded-full bg-brand-pink" /><span className="size-6 rounded-full bg-brand-red" /><span className="size-6 rounded-full bg-brand-orange" /><span className="size-6 rounded-full bg-brand-gold" /></div></FloatingCard>
    <FloatingCard className="bottom-[4%] right-[4%] w-[39%] p-3.5"><div className="flex items-center justify-between"><p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted">Creative Strategy</p><FiPlay className="text-brand-pink" /></div><p className="mt-3 font-display text-base font-medium tracking-[-0.05em] text-ink">Ideas that create momentum.</p></FloatingCard>
    <div data-float className="absolute right-[14%] top-[45%] rounded-full border border-white/90 bg-white/80 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-ink shadow-lg backdrop-blur-xl">Performance</div>
    <div data-float className="absolute bottom-[28%] left-[30%] rounded-full border border-white/90 bg-white/80 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-ink shadow-lg backdrop-blur-xl">Video Production</div>
  </div>
}

export function Hero() {
  const scope = useRef(null)

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline.from('[data-hero-line]', { yPercent: 115, duration: 1, stagger: 0.14, delay: 0.15 }).from('[data-hero-subtitle]', { autoAlpha: 0, y: 18, duration: 0.7 }, '-=0.48').from('[data-hero-action]', { autoAlpha: 0, y: 14, duration: 0.55, stagger: 0.1 }, '-=0.35').from('[data-proof]', { autoAlpha: 0, y: 12, duration: 0.45, stagger: 0.08 }, '-=0.25').from('[data-visual]', { autoAlpha: 0, scale: 0.92, duration: 1.1 }, '-=0.85')
    if (reduceMotion) return undefined
    const floatingCards = gsap.utils.toArray('[data-float]')
    floatingCards.forEach((card, index) => gsap.to(card, { y: index % 2 ? -11 : 11, rotation: index % 2 ? 1.5 : -1, duration: 3.6 + index * 0.35, repeat: -1, yoyo: true, ease: 'sine.inOut' }))
    gsap.to('[data-phone]', { y: -8, rotation: 2.5, transformOrigin: '50% 50%', duration: 4.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.utils.toArray('[data-blob]').forEach((blob, index) => gsap.to(blob, { x: index ? -28 : 32, y: index ? 24 : -18, scale: index ? 1.08 : 0.94, duration: 8 + index * 2, repeat: -1, yoyo: true, ease: 'sine.inOut' }))
    const magneticHandlers = gsap.utils.toArray('a[data-hero-action]').map((button) => {
      const move = (event) => { const bounds = button.getBoundingClientRect(); gsap.to(button, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.17, y: (event.clientY - bounds.top - bounds.height / 2) * 0.2, scale: 1.05, duration: 0.35, ease: 'power3.out', overwrite: 'auto' }) }
      const leave = () => gsap.to(button, { x: 0, y: 0, scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.45)' })
      button.addEventListener('pointermove', move); button.addEventListener('pointerleave', leave)
      return [button, move, leave]
    })
    const visual = scope.current.querySelector('[data-visual]')
    const handlePointer = (event) => {
      const { left, top, width, height } = visual.getBoundingClientRect()
      const x = (event.clientX - left - width / 2) / width
      const y = (event.clientY - top - height / 2) / height
      visual.querySelectorAll('[data-parallax]').forEach((layer) => gsap.to(layer, { x: x * 36 * Number(layer.dataset.parallax), y: y * 36 * Number(layer.dataset.parallax), duration: 1.1, ease: 'power3.out', overwrite: 'auto' }))
    }
    visual.addEventListener('pointermove', handlePointer)
    return () => { visual.removeEventListener('pointermove', handlePointer); magneticHandlers.forEach(([button, move, leave]) => { button.removeEventListener('pointermove', move); button.removeEventListener('pointerleave', leave) }) }
  }, { scope })

  return <section ref={scope} aria-labelledby="hero-title" className="relative isolate min-h-screen overflow-hidden bg-white px-4 pb-28 pt-32 sm:px-6 lg:flex lg:items-center lg:pb-20 lg:pt-28">
    <div data-blob aria-hidden="true" className="absolute -left-32 top-1/4 -z-10 size-80 rounded-full bg-brand-pink/[0.06] blur-3xl" />
    <div data-blob aria-hidden="true" className="absolute -right-24 top-8 -z-10 size-96 rounded-full bg-brand-gold/[0.08] blur-3xl" />
    <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-20">
      <div className="relative z-10 lg:pb-10"><p data-hero-action className="mb-6 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-muted">Social media · Branding · Digital</p><h1 id="hero-title" className="font-display text-[clamp(3.2rem,6.2vw,6.9rem)] font-semibold leading-[0.88] tracking-[-0.085em] text-ink"><span className="block overflow-hidden"><span data-hero-line className="block">We Build Brands</span></span><span className="block overflow-hidden"><span data-hero-line className="block text-gradient">That People Remember.</span></span></h1><p data-hero-subtitle className="mt-7 max-w-md text-sm leading-7 text-muted sm:text-base">Helping ambitious brands grow through social media, creative storytelling, branding, and digital experiences.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link data-hero-action to="/work" className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(17,17,17,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_18px_35px_rgba(17,17,17,0.23)]">View Our Work <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link><Link data-hero-action to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-brand-pink/30 hover:shadow-[0_16px_30px_rgba(255,0,110,0.10)]">Book Free Strategy Call <FiArrowUpRight className="text-brand-pink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div><div className="mt-10 flex gap-3 overflow-x-auto pb-1 sm:mt-12">{proofPoints.map(([value, label]) => <span data-proof key={label}><ProofCard value={value} label={label} /></span>)}</div></div>
      <VisualComposition />
    </div>
    <div data-hero-action className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted lg:flex"><span className="grid h-8 w-5 place-items-start rounded-full border border-black/20 p-1"><span className="size-1.5 animate-bounce rounded-full bg-brand-pink" /></span><span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em]">Scroll to Explore</span><FiArrowDown className="text-xs" /></div>
  </section>
}
