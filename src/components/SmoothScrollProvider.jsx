import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.5 })
    let frameId
    const raf = (time) => { lenis.raf(time); frameId = requestAnimationFrame(raf) }
    frameId = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(frameId); lenis.destroy() }
  }, [])
  return children
}
