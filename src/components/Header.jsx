import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site, nav } from '../data/site.js'

/**
 * Fixed header.
 *
 * On the home page it sits transparent over the hero photograph (light type),
 * and settles onto a solid ground with a hairline once you scroll past it.
 * On every other page it is solid from the start.
 */
export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll() // set the correct state on first paint and on route change
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Stop the page scrolling behind the open panel.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Escape closes the panel.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const over = isHome && !scrolled && !menuOpen
  const solid = !over

  return (
    <>
      <header
        className={`header ${solid ? 'header--solid' : ''} ${
          over ? 'header--over' : ''
        }`.trim()}
      >
        <div className="wrap header__inner">
          <Link to="/" className="wordmark" aria-label={`${site.legalName}, home`}>
            <span className="wordmark__ring" aria-hidden="true" />
            <span className="wordmark__text">{site.name.toUpperCase()}</span>
          </Link>

          <nav className="nav" aria-label="Main">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav__link ${isActive ? 'is-active' : ''}`.trim()
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Three hairlines that fold into a cross when open. The word
              "Menu" was too easily read as the food menu. */}
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`.trim()}
            aria-expanded={menuOpen}
            aria-controls="nav-panel"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle__line" />
            <span className="nav-toggle__line" />
            <span className="nav-toggle__line" />
          </button>
        </div>
      </header>

      {/* Mobile panel. Hidden above 820px by CSS. */}
      <div
        id="nav-panel"
        className={`nav-panel ${menuOpen ? 'is-open' : ''}`.trim()}
        aria-hidden={!menuOpen}
      >
        <ul className="nav-panel__list">
          <li className="nav-panel__item">
            <Link to="/" className="nav-panel__link" tabIndex={menuOpen ? 0 : -1}>
              Home
            </Link>
          </li>
          {nav.map((item) => (
            <li className="nav-panel__item" key={item.to}>
              <Link
                to={item.to}
                className="nav-panel__link"
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="nav-panel__foot">
          {site.address.line1}
          <br />
          {site.phone}
        </p>
      </div>
    </>
  )
}
