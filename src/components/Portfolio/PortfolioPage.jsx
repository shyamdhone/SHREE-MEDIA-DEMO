import { useRef, useState } from 'react'
import { FiArrowUpRight, FiInstagram, FiX } from 'react-icons/fi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import shree from "../../assets/images/shreeji jewelry.jpg"
import shiv from "../../assets/images/shivenetra (2).jpg"
import balaji from "../../assets/images/balaji traders.jpg"
import vighnaharta from "../../assets/images/vighnaharta.jpg"

gsap.registerPlugin(ScrollTrigger)

const filters = ['All', 'Branding', 'Social Media', 'Content Creation', 'Websites']

const projects = [
  {
    id: "shreeji",
    client: "Shreeji Jewellers",
    image: shree,
    industry: "Luxury Jewellery",
    categories: ["Branding", "Social Media"],
    services: ["Social Media", "Product Photography", "Brand Identity"],
    duration: "6 Months",
    result: "+280% Revenue Growth",
    analytics: ["+280%", "120K Reach", "4.9 Rating"],
    gallery: "Luxury Jewellery Collection",
    instagram: "https://www.instagram.com/shreeji__jewellers_lonar/",
    accent: "from-pink-500/20 via-purple-500/10 to-indigo-500/5",
    borderHover: "group-hover:border-pink-500",
    badgeBg: "bg-pink-600",
    textColor: "text-pink-600"
  },
  {
    id: "shivnetra",
    client: "Shivnetra Opticals",
    image: shiv,
    industry: "Healthcare & Retail",
    categories: ["Branding", "Content Creation"],
    services: ["Content Creation", "Photography", "Social Media"],
    duration: "4 Months",
    result: "3.8M Organic Views",
    analytics: ["+180%", "95K Reach", "3.8M Views"],
    gallery: "Optical Brand Campaign",
    instagram: "https://www.instagram.com/shivnetra_optical_buldhana_02/",
    accent: "from-cyan-500/20 via-blue-500/10 to-purple-500/5",
    borderHover: "group-hover:border-cyan-500",
    badgeBg: "bg-cyan-600",
    textColor: "text-cyan-600"
  },
  {
    id: "balaji",
    client: "Balaji Traders",
    image: balaji,
    industry: "Enterprise Business",
    categories: ["Websites", "Branding"],
    services: ["Website Development", "Photography", "Brand Identity"],
    duration: "5 Months",
    result: "2.5X Sales Increase",
    analytics: ["+250%", "150 Leads", "2.5X Sales"],
    gallery: "Business Web Flagship",
    instagram: "https://www.instagram.com/balaji_traders_sultanpur/",
    accent: "from-orange-500/20 via-amber-500/10 to-yellow-500/5",
    borderHover: "group-hover:border-orange-500",
    badgeBg: "bg-orange-600",
    textColor: "text-orange-600"
  },
  {
    id: "vighnaharta",
    client: "Vighnaharta",
    industry: "Retail & Stationery",
    image: vighnaharta,
    categories: ["Social Media"],
    services: ["Reels Engineering", "Post Design", "Branding"],
    duration: "3 Months",
    result: "1M+ Total Reach",
    analytics: ["+320%", "1M Reach", "8K Followers"],
    gallery: "Retail Growth Campaign",
    instagram: "https://www.instagram.com/vighnaharta_stationary/",
    accent: "from-purple-500/20 via-pink-500/10 to-rose-500/5",
    borderHover: "group-hover:border-purple-500",
    badgeBg: "bg-purple-600",
    textColor: "text-purple-600"
  }
]

function CoverArt({ project }) {
  return (
    <div className="relative overflow-hidden h-[380px] w-full">
      <img
        src={project.image}
        alt={project.client}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
    </div>
  )
}

function PortfolioCard({ project, onOpen }) {
  return (
    <article data-portfolio-card className="group mb-6 break-inside-avoid">
      <button 
        type="button" 
        onClick={() => onOpen(project)} 
        className="block w-full text-left"
      >
        <div className={`relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-br ${project.accent} p-3 shadow-xl shadow-slate-900/5 transition-all duration-500 group-hover:-translate-y-2 ${project.borderHover} hover:shadow-2xl`}>
          
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60">
            <CoverArt project={project} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            
            <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/20 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white backdrop-blur-md">
              {project.industry}
            </span>

            <span className={`absolute top-4 right-4 ${project.badgeBg} text-white font-extrabold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg opacity-0 transition duration-500 group-hover:opacity-100`}>
              {project.result}
            </span>

            <span className="absolute bottom-4 right-4 grid size-12 translate-y-3 place-items-center rounded-full bg-white text-slate-900 shadow-xl opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <FiArrowUpRight className="text-xl" />
            </span>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 transition duration-300 group-hover:text-pink-600">
                  {project.client}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {project.duration} Partnership
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-700 shadow-sm border border-slate-200">
                {project.result}
              </span>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>{project.services.join(' · ')}</span>
              <span className="text-pink-600 group-hover:translate-x-1 transition">Explore →</span>
            </div>
          </div>

        </div>
      </button>
    </article>
  )
}

function ProjectDialog({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.client} project details`}
    >
      <div
        data-project-panel
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2.5rem] bg-white p-6 sm:p-10 shadow-2xl border border-pink-500/20"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 z-10 grid size-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-md transition hover:scale-105 hover:bg-pink-50 hover:text-pink-600"
        >
          <FiX className="text-xl" />
        </button>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-md">
            <CoverArt project={project} />
          </div>

          <div>
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-pink-500/10 text-pink-600 border border-pink-500/20">
              {project.industry} • {project.duration}
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {project.client}
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              A high-impact digital campaign engineered for maximum algorithmic visibility, audience retention, and explosive revenue growth.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {project.analytics.map((metric) => (
                <div key={metric} className="rounded-2xl bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-orange-500/5 p-4 border border-pink-500/10 text-center shadow-sm">
                  <p className="font-display text-lg sm:text-xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {metric}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Executed Services</p>
              <p className="text-sm font-bold text-slate-800">{project.services.join(" • ")}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.instagram && (
                <a
                  href={project.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-105"
                >
                  <FiInstagram className="text-lg" /> Visit Live Instagram Feed
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const scope = useRef(null)

  const visibleProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter((project) => project.categories.includes(activeFilter))

  useGSAP(() => { 
    gsap.from('[data-work-reveal]', { autoAlpha: 0, y: 25, duration: 0.8, stagger: 0.12, ease: 'power3.out' }) 
    gsap.from('[data-portfolio-card]', { autoAlpha: 0, y: 35, duration: 0.7, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '[data-portfolio-grid]', start: 'top 80%' } }) 
  }, { scope, dependencies: [activeFilter] })

  useGSAP(() => { 
    if (selectedProject) {
      gsap.fromTo('[data-project-panel]', { y: 40, autoAlpha: 0, scale: 0.98 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power3.out' }) 
    }
  }, { dependencies: [selectedProject] })

  return (
    <main ref={scope} className="overflow-hidden bg-white pb-24 pt-36 sm:pt-40 relative selection:bg-pink-500 selection:text-white">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/10 via-pink-500/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Heading Section */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="mx-auto max-w-[1440px]">
          <span
            data-work-reveal
            className="inline-block mb-3 px-4 py-1.5 rounded-full text-[0.65rem] font-extrabold uppercase tracking-[0.2em] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 text-pink-700 border border-pink-500/30 shadow-sm"
          >
            Selected Projects
          </span>

          <div className="mt-4 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <h1
              data-work-reveal
              className="font-display text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.95] tracking-tight text-slate-900"
            >
              OUR <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">WORK</span>
            </h1>

            <p
              data-work-reveal
              className="max-w-md text-sm sm:text-base leading-relaxed text-slate-600"
            >
              Every project tells a distinct brand story. Explore our high-impact campaigns engineered for cultural relevance and explosive revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Hero Project Card */}
      <section data-work-reveal className="px-4 py-16 sm:px-6 relative z-10">
        <div className="mx-auto max-w-[1440px]">
          <a
            href={projects[0].instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[550px] sm:h-[620px] w-full overflow-hidden rounded-[2.5rem] border border-pink-500/30 text-left shadow-2xl shadow-pink-500/10"
          >
            <img
              src={projects[0].image}
              alt={projects[0].client}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />

            <div className="absolute inset-x-8 top-8 bottom-8 flex flex-col justify-between text-white">
              <div className="flex justify-between items-center">
                <span className="w-fit rounded-full border border-white/30 bg-white/25 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md shadow-sm">
                  ★ Featured Flagship Project
                </span>
                <span className="hidden sm:inline-block rounded-full bg-pink-600 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                  {projects[0].result}
                </span>
              </div>

              <div className="max-w-2xl">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-pink-400">
                  {projects[0].industry} • {projects[0].duration}
                </p>
                <h2 className="mt-2 font-display text-4xl sm:text-6xl font-black tracking-tight">
                  {projects[0].client}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-200">
                  {projects[0].services.join(" • ")}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-xl transition group-hover:bg-pink-600 group-hover:text-white">
                  Visit Live Instagram <FiInstagram className="text-lg" />
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-md">
                {projects[0].analytics.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md border border-white/20 text-center font-display font-black text-sm sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Filter Buttons & Portfolio Grid */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="mx-auto max-w-[1440px]">
          
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition duration-300 shadow-sm ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white shadow-md shadow-pink-500/20"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div
            data-portfolio-grid
            className="mt-12 columns-1 gap-6 md:columns-2 xl:columns-3"
          >
            {visibleProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </div>

        </div>
      </section>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </main>
  )
}