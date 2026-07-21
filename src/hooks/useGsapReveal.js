import { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function useGsapReveal(options = {}) {
  const scope = useRef(null)
  const { selector = '[data-reveal]', delay = 0, y = 24 } = options
  useGSAP(() => { gsap.from(selector, { autoAlpha: 0, y, duration: 0.8, delay, stagger: 0.1, ease: 'power3.out' }) }, { scope })
  return scope
}

export function usePrefersReducedMotion() {
  const reducedMotion = useRef(false)
  useLayoutEffect(() => { reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches }, [])
  return reducedMotion
}
