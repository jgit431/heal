import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function NotFound() {
  useEffect(() => {
    document.title = `Page not found — ${site.legalName}`
  }, [])

  return (
    <section className="wrap notfound">
      <h1 className="notfound__title">That page is not here</h1>
      <p className="notfound__body">
        The link may be old, or the address slightly off. The timetable, the menu
        and our number are all a click away.
      </p>
      <p className="notfound__link">
        <Link className="link" to="/">
          Back to the home page
        </Link>
      </p>
    </section>
  )
}
