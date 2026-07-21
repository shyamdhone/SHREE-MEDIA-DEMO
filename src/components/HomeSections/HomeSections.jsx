import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiBarChart2, FiCode, FiEdit3, FiLayers, FiPlayCircle, FiTarget } from 'react-icons/fi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  ['Social Media Management', 'A clear, consistent presence that turns attention into community.', FiLayers],
  ['Content Creation', 'Campaign-ready content with a point of view and a pulse.', FiEdit3],
  ['Reel Editing', 'Short-form stories designed to stop the scroll.', FiPlayCircle],
  ['Paid Advertising', 'Performance creative engineered for meaningful momentum.', FiTarget],
  ['Brand Identity', 'Distinctive systems that make your business instantly recognisable.', FiBarChart2],
  ['Website Development', 'Elegant digital experiences built to make every click count.', FiCode],
]

const work = [
  ['Luma Atelier', 'Beauty & Wellness', 'from-brand-pink via-brand-red to-brand-orange', 'A / 01'],
  ['Cinder House', 'Hospitality', 'from-brand-gold via-brand-orange to-brand-red', 'C / 02'],
  ['Forma Studio', 'Architecture', 'from-brand-orange via-brand-red to-brand-pink', 'F / 03'],
  ['Nōa Skin', 'Beauty & Wellness', 'from-brand-pink via-brand-orange to-brand-gold', 'N / 04'],
]

const metrics = [['50+', 'Happy clients'], ['250+', 'Projects'], ['30M+', 'Views generated'], ['10M+', 'Accounts reached'], ['98%', 'Client satisfaction']]

function Eyebrow({ children, light = false }) { return <p className={`mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${light ? 'text-white/65' : 'text-muted'}`}>{children}</p> }
function Heading({ children, light = false, className = '' }) { return <h2 className={`font-display text-4xl font-semibold leading-[0.94] tracking-[-0.075em] sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink'} ${className}`}>{children}</h2> }

export function ClientMarquee() {
  const logos = ['NORTH & CO.', 'LUMA', 'CINDER', 'MØRE', 'FORMA', 'NŌA', 'AVEA']
  return <section className="overflow-hidden border-y border-black/[0.06] bg-white py-8"><div className="mx-auto flex max-w-[1440px] items-center gap-9 px-4 sm:px-6"><p className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">Trusted by</p><div className="flex min-w-max animate-[pulse_8s_ease-in-out_infinite] items-center gap-10 sm:gap-16">{[...logos, ...logos].map((logo, index) => <span key={`${logo}-${index}`} className="font-display text-lg font-semibold tracking-[-0.06em] text-black/35 sm:text-xl">{logo}</span>)}</div></div></section>
}

export function ServicesSection() {
  const scope = useRef(null)
  useGSAP(() => {
    const cards = gsap.utils.toArray('article')
    const handlers = cards.map((card) => {
      const move = (event) => { const rect = card.getBoundingClientRect(); gsap.to(card, { rotationY: (event.clientX - rect.left - rect.width / 2) / 26, rotationX: -(event.clientY - rect.top - rect.height / 2) / 26, transformPerspective: 900, duration: 0.45, ease: 'power3.out', overwrite: 'auto' }) }
      const leave = () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.8, ease: 'power3.out' })
      card.addEventListener('pointermove', move); card.addEventListener('pointerleave', leave)
      return [card, move, leave]
    })
    return () => handlers.forEach(([card, move, leave]) => { card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', leave) })
  }, { scope })
  
  return <section className="bg-[#fafafa] px-4 py-24 sm:px-6 sm:py-32"><div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><Eyebrow>What we do</Eyebrow><Heading>Designed to make<br />your brand matter.</Heading></div><p className="max-w-xs text-sm leading-7 text-muted">A focused creative partnership for brands ready to grow with intention.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{services.map(([title, description, Icon], index) => <article key={title} className="group relative min-h-64 overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(255,0,110,0.13)]"><div className="absolute -right-10 -top-10 size-28 rounded-full bg-gradient-to-br from-brand-pink/0 via-brand-red/0 to-brand-orange/0 blur-2xl transition duration-500 group-hover:from-brand-pink/20 group-hover:via-brand-red/15 group-hover:to-brand-orange/20" /><div className="relative flex h-full flex-col"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-pink/10 via-brand-red/10 to-brand-orange/15 text-brand-pink"><Icon /></span><span className="font-display text-sm text-black/25">0{index + 1}</span></div><div className="mt-auto"><h3 className="font-display text-2xl font-medium tracking-[-0.06em] text-ink">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-muted">{description}</p></div></div></article>)}</div></div></section>
}

export function WorkSection() {
  return <section className="bg-white px-4 py-24 sm:px-6 sm:py-32"><div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><Eyebrow>Selected work</Eyebrow><Heading>Built to be<br /><span className="text-gradient">impossible to ignore.</span></Heading></div><Link to="/work" className="group inline-flex items-center gap-2 self-start rounded-full border border-black/10 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-brand-pink/30">Explore all work <FiArrowUpRight className="text-brand-pink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div><div className="mt-14 grid gap-5 md:grid-cols-2">{work.map(([name, industry, gradient, code], index) => <article key={name} className={`group overflow-hidden rounded-[2rem] ${index === 0 || index === 3 ? 'md:mt-12' : ''}`}><div className={`relative aspect-[1.16] overflow-hidden bg-gradient-to-br ${gradient} p-6 transition duration-700 group-hover:scale-[1.02]`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,.65),transparent_26%),radial-gradient(circle_at_70%_70%,rgba(17,17,17,.18),transparent_36%)]" /><div className="absolute left-[18%] top-[18%] size-[55%] rounded-[34%] border border-white/30 bg-white/15 shadow-[inset_0_1px_30px_rgba(255,255,255,.35)] backdrop-blur-sm transition duration-700 group-hover:rotate-6 group-hover:scale-110" /><div className="absolute right-[13%] top-[12%] grid size-[32%] place-items-center rounded-full border border-white/35 bg-white/25 font-display text-3xl font-semibold tracking-[-0.1em] text-white/90 backdrop-blur-md">{code.split(' ')[0]}</div><span className="absolute bottom-6 left-6 rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">Brand world</span><span className="absolute right-6 top-6 text-[0.65rem] font-semibold tracking-[0.16em] text-white/80">{code}</span></div><div className="flex items-center justify-between px-2 pb-2 pt-5"><div><h3 className="font-display text-2xl font-medium tracking-[-0.06em]">{name}</h3><p className="mt-1 text-sm text-muted">{industry}</p></div><Link aria-label={`View ${name} project`} to="/case-study" className="grid size-10 place-items-center rounded-full border border-black/10 transition duration-300 group-hover:bg-ink group-hover:text-white"><FiArrowUpRight /></Link></div></article>)}</div></div></section>
}

export function MetricsSection() {
  const scope = useRef(null)
  useGSAP(() => { gsap.from('[data-metric]', { autoAlpha: 0, y: 25, stagger: 0.09, duration: 0.65, scrollTrigger: { trigger: scope.current, start: 'top 78%' } }) }, { scope })
  useGSAP(() => {
    const counters = scope.current.querySelectorAll('[data-metric] p:first-child')
    const values = [50, 250, 30, 10, 98]
    const suffixes = ['+', '+', 'M+', 'M+', '%']
    const tween = { progress: 0 }
    ScrollTrigger.create({ trigger: scope.current, start: 'top 72%', once: true, onEnter: () => gsap.to(tween, { progress: 1, duration: 1.7, ease: 'power2.out', onUpdate: () => counters.forEach((counter, index) => { counter.textContent = `${Math.round(values[index] * tween.progress)}${suffixes[index]}` }) }) })
    gsap.to('[data-metric]', { y: -5, duration: 2.7, stagger: 0.13, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
  }, { scope })
  return <section ref={scope} className="relative overflow-hidden bg-gradient-to-br from-brand-pink via-brand-red to-brand-orange px-4 py-20 sm:px-6 sm:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,255,255,.26),transparent_25%),radial-gradient(circle_at_85%_90%,rgba(255,193,7,.45),transparent_30%)]" /><div className="relative mx-auto max-w-[1440px]"><Eyebrow light>Results that resonate</Eyebrow><Heading light>Creative growth,<br />made measurable.</Heading><div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-5">{metrics.map(([value, label]) => <div data-metric key={label} className="border-t border-white/35 pt-4"><p className="font-display text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl">{value}</p><p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/70">{label}</p></div>)}</div></div></section>
}

export function CaseStudiesSection() {
  return <section className="bg-[#fafafa] px-4 py-24 sm:px-6 sm:py-32"><div className="mx-auto max-w-[1440px]"><div className="max-w-2xl"><Eyebrow>Case studies</Eyebrow><Heading>Strategy with<br />a point of proof.</Heading></div><div className="mt-14 grid gap-5 lg:grid-cols-2"><article className="rounded-[2rem] border border-black/[0.06] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-8"><div className="flex items-start justify-between"><div><p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-muted">Luma Atelier</p><h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.07em]">A 4.8× rise in<br />social engagement.</h3></div><span className="rounded-full bg-brand-pink/10 px-3 py-2 text-xs font-semibold text-brand-pink">+380%</span></div><div className="mt-10 flex h-28 items-end gap-2">{[30, 38, 35, 51, 48, 67, 61, 83, 76, 94, 88, 100].map((height, i) => <span key={i} className="flex-1 rounded-t-full bg-gradient-to-t from-brand-pink to-brand-orange" style={{ height: `${height}%`, opacity: 0.38 + i / 20 }} />)}</div><div className="mt-5 flex justify-between border-t border-black/[0.06] pt-4 text-xs text-muted"><span>Instagram analytics</span><span>Last 90 days</span></div></article><article className="rounded-[2rem] border border-black/[0.06] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-8"><div className="flex items-start justify-between"><div><p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-muted">Cinder House</p><h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.07em]">Turning local<br />attention into bookings.</h3></div><span className="rounded-full bg-brand-orange/10 px-3 py-2 text-xs font-semibold text-brand-orange">+218%</span></div><div className="mt-10 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-black/[0.035] p-4"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted">Reach</p><p className="mt-2 font-display text-3xl font-semibold tracking-[-0.07em]">1.6M</p></div><div className="rounded-2xl bg-black/[0.035] p-4"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted">Bookings</p><p className="mt-2 font-display text-3xl font-semibold tracking-[-0.07em]">+74%</p></div></div><Link to="/case-study" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">Read case study <FiArrowUpRight className="text-brand-pink" /></Link></article></div></div></section>
}
