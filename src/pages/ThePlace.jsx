import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, thePlace } from '../data/site.js'

export default function ThePlace() {
  return (
    <>
      <PageHead title="The Place" lead={thePlace.lead} />

      <section className="wrap">
        <Reveal className="place-gallery">
          {thePlace.gallery.map((image) => (
            <figure className="place-gallery__figure" key={image.src}>
              <img
                className="place-gallery__img"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </Reveal>
      </section>

      <section className="wrap band-top">
        {thePlace.sections.map((block) => (
          <Reveal className="place-section" key={block.heading}>
            <h2 className="place-section__heading">{block.heading}</h2>
            <p className="place-section__body">{block.body}</p>
          </Reveal>
        ))}

        <Reveal className="place-section">
          <h2 className="place-section__heading">Finding us</h2>
          <p className="place-section__body">
            {site.address.line1}. {site.address.line2}. {site.address.city}{' '}
            {site.address.postcode}. The nearest parking is on the street behind;
            the garden door is the one that is usually open.
          </p>
        </Reveal>
      </section>
    </>
  )
}
