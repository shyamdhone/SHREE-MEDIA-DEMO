import { Hero } from '../components/Hero/Hero'
import { CaseStudiesSection, ClientMarquee, MetricsSection, ServicesSection, WorkSection } from '../components/HomeSections/HomeSections'

export default function Home() {
  return <>
    <Hero />
    <ClientMarquee />
    <ServicesSection />
    <WorkSection />
    <MetricsSection />
    <CaseStudiesSection />
  </>
}
