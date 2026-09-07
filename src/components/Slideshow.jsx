import { useEffect, useRef, useState } from 'react'

/**
 * The home page hero.
 *
 * Slides crossfade over 1.8s and drift a fraction while they are on screen.
 * The caption on the right names the picture you are looking at, and the
 * hairlines under it let you move between slides yourself.
 *
 * Interval is deliberately long: the point of the page is that nothing hurries.
 */
export default function Slideshow({ slides, interval = 6500, children }) {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    if (slides.length <= 1) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return // hold on the first image instead of cycling

    timer.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, interval)

    return () => window.clearInterval(timer.current)
  }, [slides.length, interval, index])

  // Clicking a hairline jumps to that slide and restarts the clock.
  const goTo = (next) => {
    window.clearInterval(timer.current)
    setIndex(next)
  }

  return (
    <section className="hero">
      <div className="hero__media">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero__slide ${i === index ? 'is-current' : ''}`.trim()}
            aria-hidden={i !== index}
          >
            <img
              className="hero__img"
              src={slide.src}
              alt={i === index ? slide.caption : ''}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="hero__veil" />
      </div>

      <div className="wrap hero__inner">
        <div>{children}</div>

        <div className="hero__aside">
          <p className="hero__caption">{slides[index].caption}</p>
          <div className="hero__dots">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={`hero__dot ${i === index ? 'is-current' : ''}`.trim()}
                aria-label={`Show ${slide.caption}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
