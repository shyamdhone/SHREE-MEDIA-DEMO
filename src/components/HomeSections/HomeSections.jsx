import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiBarChart2, FiCode, FiEdit3, FiLayers, FiPlayCircle, FiTarget, FiCheckCircle } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import shree from "../../assets/images/shreeji jewelry.jpg"
import shiv from "../../assets/images/shivenetra (2).jpg"
import balaji from "../../assets/images/balaji traders.jpg"
import vighnaharta from "../../assets/images/vighnaharta.jpg"
import socialMediaImg from "../../assets/images/social.jpg"
import contentImg from "../../assets/images/content.jpg"
import reelImg from "../../assets/images/editing.jpg"
import adsImg from "../../assets/images/ad.jpg"
import brandingImg from "../../assets/images/brand.jpg"
import websiteImg from "../../assets/images/web.jpg"
import ceoImage from "../../assets/images/Bio.jpg"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Social Media Management",
    description: "A clear, consistent presence that turns attention into community.",
    icon: FiLayers,
    image: socialMediaImg,
  },
  {
    title: "Content Creation",
    description: "Campaign-ready content with a point of view and a pulse.",
    icon: FiEdit3,
    image: contentImg,
  },
  {
    title: "Reel Editing",
    description: "Short-form stories designed to stop the scroll.",
    icon: FiPlayCircle,
    image: reelImg,
  },
  {
    title: "Paid Advertising",
    description: "Performance creative engineered for meaningful momentum.",
    icon: FiTarget,
    image: adsImg,
  },
  {
    title: "Brand Identity",
    description: "Distinctive systems that make your business instantly recognisable.",
    icon: FiBarChart2,
    image: brandingImg,
  },
  {
    title: "Website Development",
    description: "Elegant digital experiences built to make every click count.",
    icon: FiCode,
    image: websiteImg,
  },
]

const work = [
  {
    name: "Shreeji Jewellers",
    industry: "Jewellery",
    image: shree,
    code: "A / 01",
  },
  {
    name: "Vighnaharta Stationary",
    industry: "Stationery",
    image: vighnaharta,
    code: "B / 02",
  },
  {
    name: "Balaji Traders",
    industry: "Trading",
    image: balaji,
    code: "C / 03",
  },
  {
    name: "Shivnetra Optical",
    industry: "Optical",
    image: shiv,
    code: "D / 04",
  },
]

const metrics = [['50+', 'Happy clients'], ['250+', 'Projects'], ['30M+', 'Views generated'], ['10M+', 'Accounts reached'], ['98%', 'Client satisfaction']]

function Eyebrow({ children, light = false }) { 
  return <p className={`mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${light ? 'text-white/65' : 'text-muted'}`}>{children}</p> 
}

function Heading({ children, light = false, className = '' }) { 
  return <h2 className={`font-display text-4xl font-semibold leading-[0.94] tracking-[-0.075em] sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink'} ${className}`}>{children}</h2> 
}

export function ClientMarquee() {
  return (
    <section className="overflow-hidden border-y border-black/[0.06] bg-white py-8 snap-start min-h-[20vh] flex items-center">
      <div className="mx-auto flex max-w-[1440px] items-center gap-9 px-4 sm:px-6 w-full">
        <p className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted">Trusted by</p>
        <div className="flex min-w-max animate-[pulse_8s_ease-in-out_infinite] items-center gap-10 sm:gap-16">
          {['NORTH & CO.', 'LUMA', 'CINDER', 'MØRE', 'FORMA', 'NŌA', 'AVEA', 'NORTH & CO.', 'LUMA', 'CINDER', 'MØRE', 'FORMA', 'NŌA', 'AVEA'].map((logo, index) => (
            <span key={`${logo}-${index}`} className="font-display text-lg font-semibold tracking-[-0.06em] text-black/35 sm:text-xl">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 sm:py-32 border-b border-black/[0.06] snap-start min-h-screen flex items-center">
      <div className="mx-auto max-w-[1440px] relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative flex justify-center group">
            <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-brand-pink/20 via-brand-red/10 to-brand-orange/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative overflow-hidden rounded-[36px] border border-black/10 shadow-[0_25px_60px_rgba(0,0,0,0.08)] bg-white p-4 w-full max-w-[480px] flex items-center justify-center">
              <img
                src={ceoImage}
                alt="Founder & Creative Director"
                className="w-full h-auto max-h-[650px] object-contain rounded-[24px]"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-ink font-semibold text-sm tracking-wide shadow-sm">
              <FiCheckCircle size={14} className="text-brand-pink" /> About Us
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-6 tracking-tight text-ink leading-[1.15]">
              Meet the Founder of{" "}
              <span className="text-gradient">
                Shrii Media
              </span>
            </h2>

            <div className="mt-6">
              <h3 className="font-display text-2xl font-semibold text-ink">Shrikant Awchar</h3>
              <p className="text-brand-pink font-medium text-base mt-1">Founder & Creative Director, Shrii Media</p>
            </div>

            <p className="mt-6 text-muted leading-relaxed text-lg font-normal">
              At <strong className="text-ink font-semibold">Shrii Media</strong>, we believe every business deserves an exceptional digital presence. Our mission is to transform ideas into impactful brands through modern website development, creative design, branding, social media marketing, and digital innovation.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.instagram.com/shrii_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:opacity-95 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg"
              >
                <FaInstagram size={20} />
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/918080275214?text=Hello%20Shrii%20Media,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg"
              >
                <FaWhatsapp size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const scope = useRef(null)
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('article')
    const handlers = cards.map((card) => {
      const move = (event) => { 
        const rect = card.getBoundingClientRect(); 
        gsap.to(card, { 
          rotationY: (event.clientX - rect.left - rect.width / 2) / 26, 
          rotationX: -(event.clientY - rect.top - rect.height / 2) / 26, 
          transformPerspective: 900, 
          duration: 0.45, 
          ease: 'power3.out', 
          overwrite: 'auto' 
        }) 
      }
      const leave = () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.8, ease: 'power3.out' })
      card.addEventListener('pointermove', move); 
      card.addEventListener('pointerleave', leave)
      return [card, move, leave]
    })
    return () => handlers.forEach(([card, move, leave]) => { 
      card.removeEventListener('pointermove', move); 
      card.removeEventListener('pointerleave', leave) 
    })
  }, { scope })
  
  return (
    <section ref={scope} id="services-page" className="bg-[#fafafa] px-4 py-24 sm:px-6 sm:py-32 min-h-screen flex flex-col justify-center snap-start">
      <div className="mx-auto max-w-[1440px] w-full">

        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <Heading>
              We handle everything
              <br />
              you only focus on your business.
            </Heading>
          </div>

          <p className="max-w-xs text-sm leading-7 text-muted">
            A focused creative partnership for brands ready to grow with intention.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative min-h-[420px] overflow-hidden rounded-[2rem] cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
                <span className="absolute right-6 top-6 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  0{index + 1}
                </span>
                <div className="relative flex h-full flex-col justify-between p-8 text-white">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur-lg">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-xs leading-7 text-white/80">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export function WorkSection() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 snap-start min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-[1440px] w-full">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <Heading>
              Built to be
              <br />
              <span className="text-gradient">impossible to ignore.</span>
            </Heading>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-black/10 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-brand-pink/30"
          >
            Explore all work
            <FiArrowUpRight className="text-brand-pink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {work.map((item, index) => (
            <article
              key={item.name}
              className={`group overflow-hidden rounded-[2rem] ${
                index === 0 || index === 3 ? "md:mt-12" : ""
              }`}
            >
              <div className="relative aspect-[1.16] overflow-hidden rounded-[2rem]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute right-5 top-5 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  {item.code}
                </span>
                <span className="absolute bottom-5 left-5 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {item.industry}
                </span>
              </div>

              <div className="flex items-center justify-between pt-5">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.05em] text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {item.industry}
                  </p>
                </div>

                <Link
                  to="/case-study"
                  aria-label={`View ${item.name}`}
                  className="grid h-12 w-12 place-items-center rounded-full border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:text-white"
                >
                  <FiArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MetricsSection() {
  const scope = useRef(null)
  
  useGSAP(() => { 
    gsap.from('[data-metric]', { autoAlpha: 0, y: 25, stagger: 0.09, duration: 0.65, scrollTrigger: { trigger: scope.current, start: 'top 78%' } }) 
  }, { scope })

  useGSAP(() => {
    const counters = scope.current.querySelectorAll('[data-metric] p:first-child')
    const values = [50, 250, 30, 10, 98]
    const suffixes = ['+', '+', 'M+', 'M+', '%']
    const tween = { progress: 0 }
    
    ScrollTrigger.create({ 
      trigger: scope.current, 
      start: 'top 72%', 
      once: true, 
      onEnter: () => gsap.to(tween, { progress: 1, duration: 1.7, ease: 'power2.out', onUpdate: () => counters.forEach((counter, index) => { counter.textContent = `${Math.round(values[index] * tween.progress)}${suffixes[index]}` }) }) 
    })
  }, { scope })

  return (
    <section ref={scope} className="relative overflow-hidden bg-gradient-to-br from-brand-pink via-brand-red to-brand-orange px-4 py-20 sm:px-6 sm:py-24 snap-start min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,255,255,.26),transparent_25%),radial-gradient(circle_at_85%_90%,rgba(255,193,7,.45),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1440px] w-full">
        <Eyebrow light>Results that resonate</Eyebrow>
        <Heading light>Creative growth,<br />made measurable.</Heading>
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-5">
          {metrics.map(([value, label]) => (
            <div data-metric key={label} className="border-t border-white/35 pt-4">
              <p className="font-display text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl">{value}</p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudiesSection() {
  return (
    <section className="bg-[#fafafa] px-4 py-24 sm:px-6 sm:py-32 snap-start min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-[1440px] w-full">
        <div className="max-w-2xl">
          <Eyebrow>Case studies</Eyebrow>
          <Heading>Strategy with<br />a point of proof.</Heading>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-black/[0.06] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-muted">Luma Atelier</p>
                <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.07em]">A 4.8× rise in<br />social engagement.</h3>
              </div>
              <span className="rounded-full bg-brand-pink/10 px-3 py-2 text-xs font-semibold text-brand-pink">+380%</span>
            </div>
            <div className="mt-10 flex h-28 items-end gap-2">
              {[30, 38, 35, 51, 48, 67, 61, 83, 76, 94, 88, 100].map((height, i) => (
                <span key={i} className="flex-1 rounded-t-full bg-gradient-to-t from-brand-pink to-brand-orange" style={{ height: `${height}%`, opacity: 0.38 + i / 20 }} />
              ))}
            </div>
            <div className="mt-5 flex justify-between border-t border-black/[0.06] pt-4 text-xs text-muted">
              <span>Instagram analytics</span>
              <span>Last 90 days</span>
            </div>
          </article>
          <article className="rounded-[2rem] border border-black/[0.06] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-muted">Cinder House</p>
                <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.07em]">Turning local<br />attention into bookings.</h3>
              </div>
              <span className="rounded-full bg-brand-orange/10 px-3 py-2 text-xs font-semibold text-brand-orange">+218%</span>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-black/[0.035] p-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted">Reach</p>
                <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.07em]">1.6M</p>
              </div>
              <div className="rounded-2xl bg-black/[0.035] p-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted">Bookings</p>
                <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.07em]">+74%</p>
              </div>
            </div>
            <Link to="/case-study" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
              Read case study <FiArrowUpRight className="text-brand-pink" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}

export function PageScrollWrapper({ children }) {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen w-full">
      {children}
    </div>
  )
}