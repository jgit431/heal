import { site, socials } from '../data/site.js'

/**
 * One line. The header is fixed and carries the navigation on every page, so
 * the footer does not need to repeat it — the address, hours and phone live on
 * the contact page.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer__bottom">
        <span>
          {site.legalName}, {year}
        </span>

        <span className="footer__socials">
          <a href={site.whatsapp.url} target="_blank" rel="noreferrer">
            WhatsApp
          </a>

          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.platform}
            </a>
          ))}
        </span>
      </div>
    </footer>
  )
}
