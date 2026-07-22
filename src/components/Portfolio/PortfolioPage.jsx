import { useRef, useState } from 'react'
import { FiArrowUpRight, FiExternalLink, FiInstagram, FiPlay, FiX } from 'react-icons/fi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import shree from "../../assets/images/shreeji jewelry.jpg";
import shiv from "../../assets/images/shivenetra (2).jpg";
import balaji from "../../assets/images/balaji traders.jpg";
import vighnaharta from "../../assets/images/vighnaharta.jpg";


gsap.registerPlugin(ScrollTrigger)

const filters = ['All', 'Branding', 'Social Media', 'Content Creation', 'Websites', 'Photography', 'Videography', 'Paid Ads']

const projects = [
  {
    id: "shreeji",
    client: "Shreeji Jewellers",
    image: shree,
    industry: "Jewellery",

    categories: ["Branding", "Social Media"],

    services: [
      "Social Media",
      "Product Photography",
      "Brand Identity"
    ],

    duration: "6 Months",

    result: "Luxury Brand Presence",

    analytics: [
      "+280%",
      "120K Reach",
      "4.9 Rating"
    ],

    gallery: "Luxury Jewellery Collection",

    instagram: "https://www.instagram.com/shreeji__jewellers_lonar/",
  

    links: ["Instagram", "Website", "Videos"]
  },

  {
    id: "shivnetra",
    client: "Shivnetra Opticals",
    image: shiv,
    industry: "Healthcare",

    categories: ["Branding", "Content Creation"],

    services: [
      "Content Creation",
      "Photography",
      "Social Media"
    ],

    duration: "4 Months",

    result: "Digital Growth",

    analytics: [
      "+180%",
      "95K Reach",
      "3.8M Views"
    ],

    gallery: "Optical Brand Campaign",

    instagram: "https://www.instagram.com/shivnetra_optical_buldhana_02/",
    

    links: ["Instagram", "Website"]
  },

  {
    id: "balaji",
    client: "Balaji Traders",
    image: balaji,
    industry: "Business",

    categories: ["Websites", "Branding"],

    services: [
      "Website Development",
      "Photography",
      "Brand Identity"
    ],

    duration: "5 Months",

    result: "Business Expansion",

    analytics: [
      "+250%",
      "150 Leads",
      "2.5X Sales"
    ],

    gallery: "Business Website",

    instagram: "https://www.instagram.com/balaji_traders_sultanpur/",
    
   

    links: ["Instagram", "Website"]
  },

  {
    id: "vighnaharta",
    client: "Vighnaharta",
    image: vighnaharta,
    industry: "Retail",

    categories: ["Social Media"],

    services: [
      "Reels",
      "Post Design",
      "Branding"
    ],

    duration: "3 Months",

    result: "Higher Engagement",

    analytics: [
      "+320%",
      "1M Reach",
      "8K Followers"
    ],

    gallery: "Retail Campaign",

    instagram: "https://www.instagram.com/vighnaharta_stationary/",
   

    links: ["Instagram", "Videos"]
  }
];

function CoverArt({ project, featured = false }) {
  return (
    <div
      className={`relative overflow-hidden ${
        featured
          ? "h-full min-h-[28rem] sm:min-h-[34rem]"
          : "h-[420px]"
      }`}
    >
      <img
        src={project.image}
        alt={project.client}
        className="absolute inset-0 h-full w-full object-cover transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>
  );
}

function PortfolioCard({ project, onOpen }) {
  return <article data-portfolio-card className="group mb-5 break-inside-avoid"><button type="button" onClick={() => onOpen(project)} className="block w-full text-left"><div className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white p-2 shadow-[0_15px_45px_rgba(0,0,0,.06)] transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_28px_60px_rgba(255,0,110,.16)]"><div className="relative overflow-hidden rounded-[1.55rem]"><CoverArt project={project} /><div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" /><span className="absolute left-4 top-4 rounded-full border border-white/45 bg-white/20 px-3 py-1.5 text-[.6rem] font-semibold uppercase tracking-[.12em] text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:opacity-100">View project</span><span className="absolute bottom-4 right-4 grid size-10 translate-y-3 place-items-center rounded-full bg-white text-ink opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><FiArrowUpRight /></span></div></div><div className="px-2 pb-1 pt-4"><div className="flex items-start justify-between gap-3"><div><p className="font-display text-2xl font-medium tracking-[-.065em] text-ink transition duration-300 group-hover:translate-x-1">{project.client}</p><p className="mt-1 text-sm text-muted">{project.industry}</p></div><span className="rounded-full bg-black/[.045] px-2.5 py-1 text-[.6rem] font-semibold uppercase tracking-[.1em] text-muted">{project.result}</span></div><p className="mt-3 text-xs leading-5 text-muted">{project.services.join(' · ')}</p></div></button></article>
}

function ProjectDialog({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-end bg-black/35 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.client} project details`}
    >
      <div
        data-project-panel
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white p-5 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white transition hover:scale-105"
        >
          <FiX />
        </button>

        <div className="grid gap-7 md:grid-cols-[.9fr_1.1fr]">

          {/* Image */}
          <div className="overflow-hidden rounded-[1.5rem]">
            <CoverArt project={project} />
          </div>

          {/* Content */}
          <div className="py-2">

            <p className="text-[.64rem] font-semibold uppercase tracking-[.16em] text-muted">
              {project.industry} • {project.duration}
            </p>

            <h2 className="mt-3 font-display text-5xl font-semibold">
              {project.client}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              A distinct brand world shaped for cultural relevance and measurable
              growth.
            </p>

            {/* Analytics */}
            <div className="mt-8 grid grid-cols-3 gap-2">
              {project.analytics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl bg-black/[.035] p-3"
                >
                  <p className="font-display text-lg font-semibold">
                    {metric}
                  </p>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-[.62rem] font-semibold uppercase tracking-[.14em] text-muted">
                  Services
                </p>

                <p className="mt-2 text-sm leading-6">
                  {project.services.join(" • ")}
                </p>
              </div>

              <div>
                <p className="text-[.62rem] font-semibold uppercase tracking-[.14em] text-muted">
                  Gallery
                </p>

                <p className="mt-2 text-sm leading-6">
                  {project.gallery}
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              {project.instagram && (
                <a
                  href={project.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:bg-pink-500 hover:text-white"
                >
                  <FiInstagram />
                  Instagram
                </a>
              )}

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
                >
                  <FiExternalLink />
                  Website
                </a>
              )}

              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:bg-red-600 hover:text-white"
                >
                  <FiPlay />
                  Video
                </a>
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const scope = useRef(null)
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.categories.includes(activeFilter))
  useGSAP(() => { gsap.from('[data-work-reveal]', { autoAlpha: 0, y: 25, duration: 0.8, stagger: 0.12, ease: 'power3.out' }); gsap.from('[data-portfolio-card]', { autoAlpha: 0, y: 35, duration: 0.7, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '[data-portfolio-grid]', start: 'top 80%' } }) }, { scope, dependencies: [activeFilter] })
  useGSAP(() => { if (selectedProject) gsap.fromTo('[data-project-panel]', { y: 40, autoAlpha: 0, scale: 0.98 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power3.out' }) }, { dependencies: [selectedProject] })
return (
  <main ref={scope} className="overflow-hidden bg-white pb-24 pt-32 sm:pt-40">

    {/* Heading */}
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1440px]">
        <p
          data-work-reveal
          className="text-[.66rem] font-semibold uppercase tracking-[.18em] text-muted"
        >
          Selected Projects
        </p>

        <div className="mt-6 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <h1
            data-work-reveal
            className="font-display text-[clamp(4rem,10vw,10rem)] font-semibold leading-[.78] tracking-[-.1em] text-ink"
          >
            Our <span className="text-gradient">Work</span>
          </h1>

          <p
            data-work-reveal
            className="max-w-xs text-sm leading-7 text-muted"
          >
            Every project tells a story.
            <br />
            Every brand has a journey.
          </p>
        </div>
      </div>
    </section>

    {/* Featured Project */}
    <section
  data-work-reveal
  className="px-4 pb-24 pt-16 sm:px-6"
>
  <div className="mx-auto max-w-[1440px]">

    <a
      href={projects[0].instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-[650px] w-full overflow-hidden rounded-[2.25rem] text-left shadow-[0_28px_70px_rgba(34,16,25,.13)]"
    >

      <img
        src={projects[0].image}
        alt={projects[0].client}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

      <div className="absolute inset-x-8 top-8 bottom-8 flex flex-col justify-between text-white">

        <span className="w-fit rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs uppercase tracking-widest backdrop-blur">
          Featured Project
        </span>

        <div>

          <p className="text-sm text-white/70">
            {projects[0].industry} • {projects[0].duration}
          </p>

          <h2 className="mt-3 font-display text-6xl font-bold">
            {projects[0].client}
          </h2>

          <p className="mt-4 max-w-lg text-white/80">
            {projects[0].services.join(" • ")}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 font-semibold">
            Visit Instagram
            <FiInstagram className="text-xl" />
          </span>

        </div>

        <div className="grid grid-cols-3 gap-3">

          {projects[0].analytics.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white/15 px-4 py-3 backdrop-blur"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </a>

  </div>
</section>

    {/* Filter Buttons */}
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-[1440px]">

        <div className="flex gap-2 overflow-x-auto pb-4">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-medium transition duration-300 ${
                activeFilter === filter
                  ? "bg-ink text-white"
                  : "border border-black/10 bg-white text-muted"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        <div
          data-portfolio-grid
          className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3"
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
);}
