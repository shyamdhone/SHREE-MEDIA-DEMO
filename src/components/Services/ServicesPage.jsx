import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiActivity, FiArrowDown, FiArrowUpRight, FiBarChart2, FiCamera, 
  FiEdit3, FiFeather, FiFilm, FiImage, FiLayers, 
  FiMonitor, FiSearch, FiTarget, FiStar, FiShield, 
  FiGlobe, FiCheckCircle 
} from 'react-icons/fi'

const mainOfferings = [
  { 
    title: 'Omnichannel Social Scaling', 
    description: 'Data-backed content ecosystems engineered to capture high-retention audience attention and turn views into loyal brand advocates.', 
    icon: FiLayers, 
    badge: 'High Conversion', 
    metrics: '+450% Average Growth', 
    poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-pink-500/10 via-purple-500/10 to-indigo-500/10',
    borderGradient: 'group-hover:border-pink-500',
    accentColor: 'text-pink-600',
    badgeBg: 'bg-pink-600'
  },
  { 
    title: 'Cinematic Visual Production', 
    description: 'Thumb-stopping short-form reels, high-end commercials, and rich visual assets that instantly establish market authority.', 
    icon: FiFilm, 
    badge: '4K Production', 
    metrics: 'Studio Grade Quality', 
    poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-orange-500/10 via-amber-500/10 to-yellow-500/10',
    borderGradient: 'group-hover:border-orange-500',
    accentColor: 'text-orange-600',
    badgeBg: 'bg-orange-600'
  },
  { 
    title: 'Performance Paid Media', 
    description: 'Laser-targeted advertising architectures across Meta, Google, and emerging channels designed for aggressive, profitable scaling.', 
    icon: FiTarget, 
    badge: 'ROI Focused', 
    metrics: '5.2x Average ROAS', 
    poster: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-violet-500/10 via-purple-500/10 to-pink-500/10',
    borderGradient: 'group-hover:border-violet-500',
    accentColor: 'text-violet-600',
    badgeBg: 'bg-violet-600'
  },
  { 
    title: 'Enterprise Brand Architecture', 
    description: 'Distinctive visual identities, design systems, and positioning frameworks that make your business impossible to ignore.', 
    icon: FiFeather, 
    badge: 'Exclusive', 
    metrics: 'Unmatched Recall', 
    poster: 'https://images.unsplash.com/photo-1542744094-3a312433c4d0?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
    borderGradient: 'group-hover:border-emerald-500',
    accentColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-600'
  },
]

const boutiqueServices = [
  ['Viral Content Engineering', 'Short-form hooks and loops built to dominate algorithmic feeds.', FiEdit3, 'Engagement', 'from-pink-500/10 to-rose-500/5', 'hover:border-pink-500'],
  ['Commercial Photography', 'Immersive studio photography that elevates product and brand perception.', FiCamera, 'Visuals', 'from-purple-500/10 to-indigo-500/5', 'hover:border-purple-500'],
  ['Brand Videography', 'Story-driven brand films that build deep emotional resonance.', FiImage, 'Narrative', 'from-orange-500/10 to-amber-500/5', 'hover:border-orange-500'],
  ['Advanced SEO & Search', 'Dominating search engine results to capture high-intent organic traffic.', FiSearch, 'Visibility', 'from-cyan-500/10 to-blue-500/5', 'hover:border-cyan-500'],
  ['Bespoke Web Flagships', 'Lightning-fast digital platforms optimized specifically for high conversion rates.', FiMonitor, 'UI / UX', 'from-emerald-500/10 to-teal-500/5', 'hover:border-emerald-500'],
  ['Growth Strategy Sprints', 'Rigorous market audits and customized roadmaps for exponential scaling.', FiBarChart2, 'Analytics', 'from-violet-500/10 to-fuchsia-500/5', 'hover:border-violet-500'],
]

const executionSteps = [
  ['01', 'Deep Diagnostic', 'We analyze your current metrics, infrastructure, bottlenecks, and competitive gaps.', 'from-pink-500/10 via-rose-500/5 to-transparent', 'border-pink-200 text-pink-600'],
  ['02', 'Blueprint Engineering', 'Designing custom creative angles, funnel architectures, and media mixes.', 'from-purple-500/10 via-indigo-500/5 to-transparent', 'border-purple-200 text-purple-600'],
  ['03', 'Asset Production', 'Shooting, editing, and building elite cinematic assets and high-converting pages.', 'from-orange-500/10 via-amber-500/5 to-transparent', 'border-orange-200 text-orange-600'],
  ['04', 'Omnichannel Launch', 'Deploying synchronized campaigns across ad networks and organic social feeds.', 'from-cyan-500/10 via-blue-500/5 to-transparent', 'border-cyan-200 text-cyan-600'],
  ['05', 'Scale & Optimize', 'Real-time performance iterations, budget scaling, and continuous creative loops.', 'from-emerald-500/10 via-teal-500/5 to-transparent', 'border-emerald-200 text-emerald-600'],
]

const showcaseWorks = [
  {
    title: 'Aura Luxury Flagship Redesign',
    category: 'Web Design & Brand Identity',
    outcome: '+540% Revenue Growth in 90 Days',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    stat: '6.4x ROAS',
    gradient: 'from-pink-500/15 via-rose-500/5 to-transparent'
  },
  {
    title: 'Verve Fitness Content Ecosystem',
    category: 'Short-Form Video & Social Growth',
    outcome: '1.5M+ Organic Reach & Full Booking Pipeline',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    stat: '4.2M Views',
    gradient: 'from-purple-500/15 via-indigo-500/5 to-transparent'
  },
  {
    title: 'NexGen FinTech Acquisition Funnel',
    category: 'Paid Media & Conversion Rate Optimization',
    outcome: '$5.2M Pipeline Generated via Meta Ads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    stat: '45% Lower CAC',
    gradient: 'from-orange-500/15 via-amber-500/5 to-transparent'
  }
]

const clientFeedback = [
  { 
    quote: "Shrii Media completely overhauled our digital presence. Our monthly revenue doubled within 60 days of partnering with them.", 
    name: "Aarav Sharma", 
    title: "Managing Director, Aura Luxury", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    gradient: 'from-pink-500/10 via-purple-500/5 to-transparent'
  },
  { 
    quote: "Their standard of creative execution and media buying discipline is unmatched. They feel like a true extension of our founding team.", 
    name: "Neha Kapoor", 
    title: "Founder, Verve Fitness", 
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    gradient: 'from-orange-500/10 via-pink-500/5 to-transparent'
  },
]

const frequentlyAsked = [
  ['What type of businesses do you typically partner with?', 'We partner with ambitious scaling brands, e-commerce leaders, luxury enterprises, and tech companies looking to dominate their market category through modern creative and performance marketing.'],
  ['How fast can we launch our campaigns after onboarding?', 'Our standard onboarding and discovery sprint takes 10 to 14 business days, after which initial content systems and paid media campaigns go live.'],
  ['Do you handle both creative asset production and media buying?', 'Yes. We provide a fully integrated service model covering everything from high-end video production and design systems to precise media buying and revenue tracking.']
]

function SectionHeading({ tag, title, subtitle, centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[0.2em] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 text-pink-700 border border-pink-500/30 shadow-sm">
        {tag}
      </span>
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">{subtitle}</p>}
    </div>
  )
}

export function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <main className="overflow-hidden bg-white text-slate-900 pt-36 sm:pt-40 selection:bg-pink-500 selection:text-white relative">
      
      {/* Background Grids & Vibrant Multi-color Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/15 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative isolate px-4 pb-16 pt-4 sm:px-6 sm:pb-24 bg-transparent">
        <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 border border-pink-500/20 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-slate-800 mb-6 shadow-sm">
              <span className="size-2 rounded-full bg-pink-500 animate-pulse" /> SHRII MEDIA • ELITE DIGITAL AGENCY
            </div>
            
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-slate-900">
              WE ENGINEER <br />
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                HIGH-IMPACT GROWTH
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 mx-auto lg:mx-0">
              Stop settling for average creative and wasted ad spend. We combine cinematic brand storytelling with aggressive performance marketing frameworks to maximize your revenue.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 px-8 py-4 text-sm font-bold text-white shadow-[0_15px_30px_rgba(236,72,153,0.3)] transition hover:scale-105">
                Book Strategy Call <FiArrowUpRight className="text-lg transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a href="#offerings" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md px-8 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50">
                Explore Solutions <FiArrowDown className="text-sm text-pink-600" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-[2.5rem] border border-pink-500/20 bg-gradient-to-br from-white via-pink-50/40 to-purple-50/30 p-8 shadow-2xl shadow-pink-500/10 flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-orange-500/10 -z-10" />
              
              <div className="flex justify-between items-center text-slate-700">
                <span className="text-xs uppercase font-extrabold tracking-widest bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Growth Dashboard</span>
                <span className="grid size-10 place-items-center rounded-full bg-white text-pink-600 shadow-md border border-pink-100"><FiActivity className="animate-spin text-pink-600" /></span>
              </div>
              
              <div className="my-auto grid grid-cols-2 gap-4 text-left">
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-pink-500/20 shadow-lg shadow-pink-500/5 transition hover:scale-105 duration-300">
                  <p className="font-display text-3xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent tracking-tight">100+</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 uppercase">Projects</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-purple-500/20 shadow-lg shadow-purple-500/5 transition hover:scale-105 duration-300">
                  <p className="font-display text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">50+</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 uppercase">Global Clients</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-orange-500/20 shadow-lg shadow-orange-500/5 transition hover:scale-105 duration-300">
                  <p className="font-display text-3xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent tracking-tight">98%</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 uppercase">Retention</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-emerald-500/20 shadow-lg shadow-emerald-500/5 transition hover:scale-105 duration-300">
                  <p className="font-display text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent tracking-tight">5.2x</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 uppercase">Avg ROAS</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200/85 pt-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white/90 px-4 py-2 rounded-xl shadow-sm border border-emerald-200">
                  <span className="size-2 rounded-full bg-emerald-500 animate-ping" /> Systems Fully Operational
                </div>
                <span className="text-xs font-mono bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent font-bold">Live Status</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST METRICS BAR */}
      <section className="py-8 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-orange-500/5 border-y border-pink-500/20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-amber-500"><FiStar className="fill-amber-500" /><FiStar className="fill-amber-500" /><FiStar className="fill-amber-500" /><FiStar className="fill-amber-500" /><FiStar className="fill-amber-500" /></div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">★★★★★ Rated</span>
          </div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center justify-center gap-2">
            <FiCheckCircle className="text-pink-600 text-base" /> 100+ Projects Done
          </div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center justify-center gap-2">
            <FiGlobe className="text-orange-500 text-base" /> Global Reach
          </div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center justify-center gap-2">
            <FiShield className="text-purple-600 text-base" /> Enterprise Security
          </div>
        </div>
      </section>

      {/* 2. CORE OFFERINGS SECTION */}
      <section id="offerings" className="px-4 py-20 sm:px-6 sm:py-24 bg-white relative">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading 
            tag="Core Solutions" 
            title="The pillars of your digital domination." 
            subtitle="Built to generate absolute market authority and secure measurable return on investment."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {mainOfferings.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br ${item.gradient} p-8 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 ${item.borderGradient} hover:shadow-2xl flex flex-col justify-between`}>
                  
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/60 shadow-md">
                    <img src={item.poster} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {item.metrics}
                    </span>
                    <span className={`absolute top-4 right-4 ${item.badgeBg} text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md`}>
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="grid size-14 place-items-center rounded-2xl bg-white text-slate-900 shadow-md border border-slate-200 group-hover:bg-gradient-to-br group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-orange-500 group-hover:text-white transition duration-300">
                        <Icon className="text-2xl" />
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">{item.description}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-pink-700 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">Active System</span>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-pink-600 transition">
                      Inquire Now <FiArrowUpRight />
                    </Link>
                  </div>

                </div>
              )
            })}
          </div>

          {/* Boutique Capabilities Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boutiqueServices.map(([name, desc, Icon, tag, gradClass, hoverBorder]) => (
              <div key={name} className={`rounded-[2rem] border border-slate-200 bg-gradient-to-br ${gradClass} p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 ${hoverBorder} hover:shadow-xl hover:bg-white`}>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-white text-pink-600 shadow-md border border-slate-200">
                    <Icon className="text-lg" />
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-700 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 shadow-sm">{tag}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-slate-900 tracking-tight">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. EXECUTION ROADMAP */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 bg-gradient-to-b from-slate-50/50 via-pink-50/20 to-slate-50/50 border-y border-pink-500/20">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading 
            tag="Roadmap" 
            title="Our precision execution framework." 
            subtitle="A systematic, battle-tested roadmap designed to eliminate guesswork and scale efficiently."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {executionSteps.map(([num, title, desc, bgGrad, borderClass]) => (
              <div key={num} className={`rounded-[2.25rem] border border-slate-200 bg-gradient-to-b ${bgGrad} p-8 relative overflow-hidden shadow-md flex flex-col justify-between hover:border-pink-500 transition duration-300`}>
                <div>
                  <span className={`font-display text-4xl font-black block mb-4 border-b pb-3 ${borderClass}`}>{num}</span>
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">{title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                  Step 0{num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES / WORK */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading 
            tag="Proven Work" 
            title="Real transformations, real returns." 
            subtitle="Explore select client case studies that demonstrate our capacity for exponential scaling."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {showcaseWorks.map((work) => (
              <div key={work.title} className={`group rounded-[2.5rem] border border-slate-200 bg-gradient-to-br ${work.gradient} overflow-hidden shadow-lg shadow-slate-900/5 flex flex-col justify-between hover:border-pink-500 hover:shadow-2xl transition-all duration-300`}>
                <div className="relative aspect-video overflow-hidden border-b border-slate-200">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {work.category}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-lg">
                    {work.stat}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between bg-white/60 backdrop-blur-md">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight">{work.title}</h3>
                    <p className="mt-2 text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{work.outcome}</p>
                  </div>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-pink-600 transition">
                    View Case Study <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 bg-gradient-to-tr from-purple-500/5 via-pink-500/5 to-orange-500/5 border-y border-pink-500/20">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading 
            tag="Testimonials" 
            title="Trusted by forward-thinking founders." 
            subtitle="Hear directly from leaders who scaled their enterprises with Shrii Media."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {clientFeedback.map((test) => (
              <div key={test.name} className={`rounded-[2.5rem] border border-pink-500/20 bg-gradient-to-br ${test.gradient} p-8 sm:p-10 shadow-xl shadow-pink-500/5 flex flex-col justify-between backdrop-blur-md bg-white/90`}>
                <div>
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-amber-500 text-sm" />)}
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-700 italic">"{test.quote}"</p>
                </div>
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-200/80">
                  <img src={test.avatar} alt={test.name} className="size-12 rounded-full object-cover border-2 border-pink-500 shadow-md" />
                  <div>
                    <p className="font-display font-bold text-slate-900">{test.name}</p>
                    <p className="text-xs bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold">{test.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQS */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl">
          <SectionHeading 
            tag="FAQ" 
            title="Frequently asked questions." 
            subtitle="Everything you need to know before joining forces with our team."
            centered={true}
          />

          <div className="mt-12 space-y-4">
            {frequentlyAsked.map(([question, answer], i) => {
              const isOpen = activeFaq === i
              return (
                <div key={question} className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50/50 to-pink-50/20 overflow-hidden transition duration-300 shadow-sm">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-900 text-base sm:text-lg"
                  >
                    <span>{question}</span>
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full bg-white text-pink-600 border border-slate-200 shadow-sm transition-transform duration-300 ${isOpen ? 'rotate-45 bg-gradient-to-r from-pink-600 to-purple-600 text-white border-transparent' : ''}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 pt-4 bg-white/50">
                      {answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 bg-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 p-10 sm:p-16 text-center text-white shadow-2xl shadow-pink-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[0.2em] bg-white/20 text-white backdrop-blur-md border border-white/20">
                Accelerate Today
              </span>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">
                Ready to scale your brand to new heights?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
                Book a confidential strategy call with our leadership team today and discover how our integrated growth engine can transform your revenue.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-xl transition hover:scale-105">
                  Book Strategy Call <FiArrowUpRight className="text-lg text-pink-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}