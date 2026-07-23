import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiInstagram, FiStar, FiX } from 'react-icons/fi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import shree from "../../assets/images/shreeji jewelry.jpg"
import shiv from "../../assets/images/shivenetra (2).jpg"
import balaji from "../../assets/images/balaji traders.jpg"
import vighnaharta from "../../assets/images/vighnaharta.jpg"
import shreeHero from "../../assets/images/heroImage.jpg"

gsap.registerPlugin(ScrollTrigger)

const projects = {
  aurelia: {
    name: "Shreeji Jewellery",
    industry: "Luxury Jewellery",
    category: "Brand Identity • Social Media • Creative Direction",
    year: "2026",
    duration: "4 Months",
    team: "6 Specialists",
    platforms: ["Instagram", "Facebook", "Website"],
    objective: "Create a vibrant, high-converting digital identity that reflects the timeless elegance and modern craftsmanship of Shreeji Jewellery.",
    challenge: "Transform a traditional legacy jewellery business into a vibrant, trend-setting luxury brand with stellar organic engagement and modern social footprint.",
    gradient: "from-pink-600 via-purple-600 to-amber-500",
    heroImage: shreeHero,
    analytics: [
      ["120+", "Posts Engineered"],
      ["3.8M+", "Organic Views"],
      ["100%", "Brand Overhaul"],
      ["4", "Active Platforms"]
    ],
    results: [
      ["Social Posts", "120+", "+280% Reach"],
      ["Brand Identity", "100%", "Delivered"],
      ["Creative Campaigns", "25+", "+320% Revenue"],
      ["Client Satisfaction", "100%", "Success Rate"]
    ],
    testimonial: "The creative overhaul completely skyrocketed our digital presence. We went from being just another local jeweler to a vibrant luxury name recognized across regions!",
    person: "Shreeji Jewellery Management",
    role: "Founding Partner",
    related: ["Shivenetra Opticals", "Balaji Traders", "Vighnaharta"],
    gallery: [shree, shiv, balaji, vighnaharta],
    allWorks: [
      {
        title: "Shreeji Luxury Campaign",
        subtitle: "High-end gold & diamond showcase reel engineering",
        image: shree,
        tag: "Branding & Social",
        stats: "+280% Revenue"
      },
      {
        title: "Shivnetra Optical Launch",
        subtitle: "Viral frames showcase with cinematic product photography",
        image: shiv,
        tag: "Content Creation",
        stats: "3.8M Views"
      },
      {
        title: "Balaji Traders Flagship",
        subtitle: "Complete enterprise identity and responsive web architecture",
        image: balaji,
        tag: "Websites & Brand",
        stats: "2.5X Sales"
      },
      {
        title: "Vighnaharta Retail Sprint",
        subtitle: "Engaging festive reels design and high-converting ad copies",
        image: vighnaharta,
        tag: "Social Media",
        stats: "1M+ Reach"
      }
    ]
  }
}

function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-[0.7rem] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 font-medium">
          {copy}
        </p>
      )}
    </div>
  )
}

function Metric({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md shadow-lg">
      <p className="font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-[0.65rem] font-black uppercase tracking-widest text-white/80">
        {label}
      </p>
    </div>
  )
}

function OurWorksSection({ project }) {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-24 sm:px-6 sm:py-32 relative overflow-hidden">
      {/* Decorative colored lights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/20 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-[0.65rem] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg">
            Portfolio Showcase
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
            Our Featured <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">Masterpieces</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Explore the exact visual assets, campaigns, and high-performance branding deliverables created during this partnership.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {project.allWorks.map((work, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(work.image)}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500" />
                
                <span className="absolute top-4 left-4 rounded-full bg-pink-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
                  {work.tag}
                </span>

                <span className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white/30">
                  {work.stats}
                </span>

                <span className="absolute bottom-4 right-4 grid size-12 place-items-center rounded-full bg-white text-slate-900 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                  <FiArrowUpRight className="text-xl" />
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 font-medium">
                  {work.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full bg-white text-slate-900 shadow-xl hover:bg-pink-600 hover:text-white transition"
            >
              <FiX className="text-xl" />
            </button>
            <img
              src={activeImage}
              alt="Enlarged preview"
              className="max-h-[85vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  )
}

function Comparison({ project }) {
  const [position, setPosition] = useState(50)

  return (
    <section className="bg-slate-50 px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="Before & After Transformation"
          title="From traditional identity to magnetic modern luxury."
          copy="Drag the slider across to see the stark visual transformation engineered for maximum audience appeal."
        />

        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl border border-slate-200">
          <img
            src={project.gallery[0]}
            alt="Before transformation"
            className="absolute inset-0 h-full w-full object-cover grayscale opacity-75"
          />

          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={project.heroImage}
              alt="After transformation"
              className="h-full w-full min-w-[900px] object-cover"
            />
          </div>

          <span className="absolute left-6 top-6 rounded-full bg-black/60 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
            Before Transformation
          </span>
          <span className="absolute right-6 top-6 rounded-full bg-pink-600 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
            After Upgrade
          </span>

          <div
            className="absolute inset-y-0 w-1 bg-white shadow-2xl"
            style={{ left: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-900 shadow-2xl">
              <FiChevronLeft className="absolute left-1 text-pink-600" />
              <FiChevronRight className="absolute right-1 text-pink-600" />
            </div>
          </div>

          <input
            type="range"
            min="5"
            max="95"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Comparison slider"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  )
}

function Dashboard({ project }) {
  const scope = useRef(null)

  useGSAP(() => {
    const section = scope.current
    const counters = section.querySelectorAll("[data-counter]")
    const cards = section.querySelectorAll("[data-dash-card]")
    const bars = section.querySelectorAll("[data-chart-bar]")
    const values = [120, 100, 25, 100]

    ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => {
        counters.forEach((counter, index) => {
          const obj = { value: 0 }
          gsap.to(obj, {
            value: values[index],
            duration: 1.5,
            delay: index * 0.1,
            ease: "power2.out",
            onUpdate: () => {
              counter.textContent = index === 1 ? `${Math.round(obj.value)}%` : `${Math.round(obj.value)}+`
            }
          })
        })
      }
    })

    gsap.from(cards, { opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 80%" } })
    gsap.from(bars, { scaleY: 0, transformOrigin: "bottom", stagger: 0.06, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 75%" } })
  }, { scope })

  return (
    <section ref={scope} className="bg-slate-950 px-4 py-24 text-white sm:px-6 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] relative z-10">
        <SectionIntro
          eyebrow="Performance Analytics"
          title={
            <>
              Growth you can <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                actually measure.
              </span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.results.map(([label, value, gain], index) => (
            <div key={label} data-dash-card className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6 backdrop-blur-xl shadow-xl">
              <p className="text-[0.65rem] font-black uppercase tracking-widest text-slate-400">{label}</p>
              <p data-counter className="mt-4 font-display text-4xl sm:text-5xl font-black text-white tracking-tight">0</p>
              <p className="mt-2 text-xs font-bold text-pink-400">{gain}</p>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <span className="block h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500" style={{ width: `${60 + (index * 10)}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <p className="font-display text-2xl font-bold tracking-tight text-white">Algorithmic Momentum & Engagement</p>
            <p className="text-xs font-bold text-pink-400 uppercase tracking-widest">Live Campaign Metrics</p>
          </div>
          <div className="mt-10 flex h-52 items-end gap-3">
            {[25, 40, 35, 55, 68, 60, 80, 75, 92, 88, 98, 100].map((height, index) => (
              <span key={index} data-chart-bar className="flex-1 rounded-t-2xl bg-gradient-to-t from-pink-600 via-purple-600 to-amber-500 shadow-lg" style={{ height: `${height}%`, opacity: 0.5 + (index / 20) }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CaseStudyPage() {
  const { slug = 'aurelia' } = useParams()
  const project = projects[slug] || projects.aurelia
  const scope = useRef(null)

  useGSAP(() => {
    gsap.from('[data-case-hero]', { autoAlpha: 0, y: 30, stagger: 0.12, duration: 0.85, ease: 'power3.out' })
  }, { scope })

  return (
    <main ref={scope} className="overflow-hidden bg-white pt-28 selection:bg-pink-500 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[85vh] px-4 pb-20 pt-10 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-pink-600/15 blur-[140px] pointer-events-none" />

        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center relative z-10">
          <div className="py-8">
            <Link
              data-case-hero
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-400 transition hover:-translate-x-1 mb-8"
            >
              <FiArrowLeft /> Back to all projects
            </Link>

            <div data-case-hero>
              <span className="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-widest text-pink-400 mb-4 shadow-sm">
                {project.industry}
              </span>

              <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                {project.category} · {project.year}
              </p>

              <h1 className="font-display text-5xl font-black tracking-tight sm:text-7xl xl:text-8xl leading-[0.95]">
                {project.name}
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300 font-medium">
                {project.objective}
              </p>
            </div>
          </div>

          <div data-case-hero className="relative overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl">
            <div className="relative min-h-[35rem] sm:min-h-[42rem] overflow-hidden rounded-[2.5rem]">
              <img
                src={project.heroImage}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.analytics.map(([value, label]) => (
                  <Metric key={label} value={value} label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="bg-slate-50 px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Project Overview"
            title="A new gold standard for digital luxury."
          />
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {[
              ["Client", project.name],
              ["Industry", project.industry],
              ["Duration", project.duration],
              ["Team Size", project.team],
              ["Platforms", project.platforms.join(" · ")],
              ["Primary Goal", project.objective]
            ].map(([label, value]) => (
              <div key={label} className="border-t border-slate-200 pt-4">
                <p className="text-[0.65rem] font-black uppercase tracking-widest text-slate-400">
                  {label}
                </p>
                <p className="mt-2 text-base font-bold text-slate-900">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section className="px-4 py-24 sm:px-6 sm:py-32 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <SectionIntro
            eyebrow="The Core Challenge"
            title={
              <>
                Exquisite craftsmanship. <br />
                <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Zero digital momentum.
                </span>
              </>
            }
            copy={project.challenge}
          />
          <div className="grid gap-4">
            {[
              "A crowded luxury market lacking distinctive digital personality.",
              "Traditional store traffic that failed to translate into high-value online inquiries.",
              "Exclusive premium jewellery collections needing viral social media amplification."
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 shadow-sm">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-pink-500/10 text-sm font-black text-pink-600">
                  0{index + 1}
                </span>
                <p className="text-sm sm:text-base font-semibold text-slate-700 self-center">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORKS SECTION (NEWLY ADDED WITH 4 IMAGES) */}
      <OurWorksSection project={project} />

      {/* DASHBOARD ANALYTICS */}
      <Dashboard project={project} />

      {/* BEFORE / AFTER COMPARISON */}
      <Comparison project={project} />

      {/* TESTIMONIAL SECTION */}
      <section className="bg-white px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 lg:grid-cols-[0.7fr_1.3fr] text-white shadow-2xl border border-white/10">
          <div className="grid aspect-square place-items-center rounded-[2.2rem] bg-gradient-to-br from-pink-600 via-purple-600 to-amber-500 shadow-xl">
            <span className="font-display text-8xl font-black text-white/90">S</span>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }, (_, i) => <FiStar key={i} fill="currentColor" className="text-lg" />)}
            </div>
            <blockquote className="mt-6 font-display text-2xl sm:text-3xl font-bold leading-snug">
              &ldquo;{project.testimonial}&rdquo;
            </blockquote>
            <p className="mt-6 font-bold text-lg text-pink-400">{project.person}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{project.role}</p>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="bg-slate-50 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro eyebrow="Explore More" title="More brands engineered for success." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {project.related.map((name, index) => (
              <Link key={name} to="/work" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-lg border border-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 via-purple-600/20 to-amber-500/30 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 grid place-items-center p-6 text-center">
                    <h3 className="font-display text-3xl font-black text-white tracking-tight">{name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 pb-20 pt-10 sm:px-6 bg-slate-50">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 rounded-[3rem] bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 px-8 py-14 text-white md:flex-row md:items-center md:justify-between shadow-2xl shadow-pink-500/20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Start Something Remarkable</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-black tracking-tight">
              Ready to elevate <br /> your brand?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-5 text-sm font-black uppercase tracking-wider text-slate-900 shadow-2xl transition hover:scale-105 hover:bg-slate-900 hover:text-white"
          >
            Book Free Strategy Call <FiArrowUpRight className="text-xl" />
          </Link>
        </div>
      </section>

    </main>
  )
}