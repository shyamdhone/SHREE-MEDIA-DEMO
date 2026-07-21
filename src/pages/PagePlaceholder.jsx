import { motion } from 'framer-motion'
import { SectionContainer } from '../components/ui/SectionContainer'

export function PagePlaceholder({ title }) {
  return <SectionContainer className="min-h-[60vh] pt-28"><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}><p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">SHRII MEDIA</p><h1 className="font-display text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">{title}</h1></motion.div></SectionContainer>
}
