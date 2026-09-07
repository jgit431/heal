import { useEffect } from 'react'
import Reveal from './Reveal.jsx'
import { site } from '../data/site.js'

/**
 * The opening block on every page except home: title, optional lead line,
 * and the document title for the browser tab (a single-page app has to set
 * that itself).
 */
export default function PageHead({ title, lead }) {
  useEffect(() => {
    document.title = `${title} — ${site.legalName}`
  }, [title])

  return (
    <section className="wrap page-head">
      <Reveal>
        <h1 className="page-head__title">{title}</h1>
        {lead && <p className="page-head__lead">{lead}</p>}
      </Reveal>
    </section>
  )
}
