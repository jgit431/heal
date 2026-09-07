import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Slideshow from '../components/Slideshow.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, heroSlides, home } from '../data/site.js'

export default function Home() {
  useEffect(() => {
    document.title = `${site.legalName} — ${site.tagline}`
  }, [])

  return (
    <>
      {/* Hero: photography, one line set low and left, caption on the right. */}
      <Slideshow slides={heroSlides}>
        <h1 className="hero__line">{home.heroLine}</h1>
        <p className="hero__note">{home.heroNote}</p>
      </Slideshow>

      {/* Studio and cafe, mirrored so the eye crosses the page. */}
      <section className="wrap band-top home-halves">
        {home.halves.map((half, index) => (
          <Reveal
            key={half.key}
            className={`home-half ${index % 2 === 1 ? 'home-half--flip' : ''}`.trim()}
          >
            <figure className="home-half__figure">
              <img
                className="home-half__img"
                src={half.image}
                alt={half.imageAlt}
                loading="lazy"
              />
            </figure>
            <div>
              <h2 className="home-half__heading">{half.heading}</h2>
              <p className="home-half__body">{half.body}</p>
              <div className="home-half__link">
                <Link className="link" to={half.to}>
                  {half.linkLabel}
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Hours for both sides of the room. */}
      <section className="wrap band home-hours">
        <Reveal>
          {site.hours.map((row) => (
            <div className="home-hours__row" key={row.days}>
              <p className="home-hours__days">{row.days}</p>
              <p>
                <span className="home-hours__label">Cafe</span>
                {row.cafe}
              </p>
              <p>
                <span className="home-hours__label">Studio</span>
                {row.studio}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="wrap home-closing">
        <Reveal>
          <figure className="home-closing__figure">
            <img
              className="home-closing__img"
              src={home.closingImage}
              alt="The room from the garden door"
              loading="lazy"
            />
          </figure>
          <p className="home-closing__line">{home.closingLine}</p>
        </Reveal>
      </section>
    </>
  )
}
