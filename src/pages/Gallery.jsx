import { Fragment } from 'react'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import { socials, gallery } from '../data/site.js'

export default function Gallery() {
  // The line is assembled from the socials list, so adding or removing an
  // account in src/data/site.js updates this sentence and the footer together.
  const lead = (
    <>
      Find us on{' '}
      {socials.map((social, index) => (
        <Fragment key={social.platform}>
          {index > 0 && (index === socials.length - 1 ? ' and ' : ', ')}
          <a
            className="gallery-link"
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            {social.platform}
          </a>
        </Fragment>
      ))}
      !
    </>
  )

  return (
    <>
      <PageHead title="Gallery" lead={lead} />

      {/* Swap these for real photographs, or wire the grid to an Instagram
          feed later — the markup will not need to change. */}
      <section className="wrap">
        <Reveal className="gallery-grid">
          {gallery.map((image) => (
            <a
              className="gallery-grid__item"
              key={image.src}
              href={socials[0].url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="gallery-grid__img"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </a>
          ))}
        </Reveal>
      </section>
    </>
  )
}
