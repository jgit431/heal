import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Cross-page fade.
 *
 * React Router swaps routes instantly, which makes navigation feel abrupt.
 * This hook keeps rendering the *previous* location for one fade-out, then
 * swaps in the new one and fades back up. It returns:
 *
 *   displayedLocation — pass this to <Routes location={...}>
 *   phase             — 'in' | 'out', mapped to .page--in / .page--out
 *
 * If the visitor has asked for reduced motion, the delay collapses to zero
 * and the CSS transitions are disabled, so the swap is immediate.
 */
export default function usePageTransition(duration = 320) {
  const location = useLocation()
  const [displayedLocation, setDisplayedLocation] = useState(location)
  const [phase, setPhase] = useState('in')

  useEffect(() => {
    // Same page (or a hash/search change only) — nothing to fade.
    if (location.pathname === displayedLocation.pathname) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setPhase('out')

    const timer = window.setTimeout(
      () => {
        setDisplayedLocation(location)
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        setPhase('in')
      },
      reduced ? 0 : duration
    )

    return () => window.clearTimeout(timer)
  }, [location, displayedLocation, duration])

  return { displayedLocation, phase }
}
