import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, contact } from '../data/site.js'

/**
 * The form posts the message straight to a form service, which mails it to
 * hello@. Nothing opens on the visitor's machine and nothing is left for them
 * to send themselves.
 *
 * The endpoint is `contact.formEndpoint` in src/data/site.js. Until it is
 * filled in, submitting says so rather than pretending to send.
 */

const STATUS_MESSAGE = {
  incomplete: 'Add your email and a message so we can reply.',
  unconfigured: 'Sending is not connected yet. Call or message us instead.',
  sending: 'Sending…',
  sent: 'Sent. We answer within a day.',
  error: 'That did not send. Try again in a minute, or call us.'
}

const EMPTY_FORM = {
  name: '',
  email: '',
  subject: contact.subjects[0],
  message: ''
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle')

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    // Clear a stale result as soon as they start editing again.
    if (status !== 'idle' && status !== 'sending') setStatus('idle')
  }

  const handleSend = async () => {
    if (!form.email.trim() || !form.message.trim()) {
      setStatus('incomplete')
      return
    }

    if (!contact.formEndpoint) {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (!response.ok) throw new Error(`Endpoint returned ${response.status}`)

      setStatus('sent')
      setForm(EMPTY_FORM)
    } catch (error) {
      console.error('Contact form:', error)
      setStatus('error')
    }
  }

  return (
    <>
      <PageHead title="Contact" lead={contact.lead} />

      <section className="wrap">
        <div className="contact-grid">
          <Reveal>
            <div className="contact-block">
              <p className="contact-block__label">Address</p>
              <p className="contact-block__value">
                {site.address.line1}
                <br />
                {site.address.city} {site.address.postcode}
              </p>
              <p className="note">{site.address.line2}</p>
            </div>

            <div className="contact-block">
              <p className="contact-block__label">Phone</p>
              <p className="contact-block__value">
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </p>
            </div>

            <div className="contact-block">
              <p className="contact-block__label">WhatsApp</p>
              <p className="contact-block__value">
                <a href={site.whatsapp.url} target="_blank" rel="noreferrer">
                  {site.whatsapp.label}
                </a>
              </p>
            </div>

            <div className="contact-block">
              <p className="contact-block__label">Email</p>
              <p className="contact-block__value">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="form">
              <div className="field">
                <label className="field__label" htmlFor="contact-name">
                  Your name
                </label>
                <input
                  id="contact-name"
                  className="field__input"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={update('name')}
                />
              </div>

              <div className="field">
                <label className="field__label" htmlFor="contact-email">
                  Your email
                </label>
                <input
                  id="contact-email"
                  className="field__input"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update('email')}
                />
              </div>

              <div className="field">
                <label className="field__label" htmlFor="contact-subject">
                  What it is about
                </label>
                <select
                  id="contact-subject"
                  className="field__select"
                  value={form.subject}
                  onChange={update('subject')}
                >
                  {contact.subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label className="field__label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="field__textarea"
                  value={form.message}
                  onChange={update('message')}
                />
              </div>

              <div className="form__actions">
                <button
                  type="button"
                  className="button"
                  onClick={handleSend}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending' : 'Write to us'}
                </button>

                {/* One line, in place, for whatever the last attempt did. */}
                {STATUS_MESSAGE[status] && (
                  <span
                    className={`form__status ${
                      status === 'sent' ? 'form__status--sent' : ''
                    }`.trim()}
                    role="status"
                  >
                    {STATUS_MESSAGE[status]}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Second row on the same column structure: hours, then the map.
            The embed is lazy, so it costs nothing until scrolled to. */}
        <div className="contact-grid contact-grid--second">
          <Reveal>
            <div className="contact-block">
              <p className="contact-block__label">Open</p>
              {site.hours.map((row) => (
                <p className="note" key={row.days}>
                  {row.days}: {row.cafe}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="contact-map">
            <iframe
              className="contact-map__frame"
              src={contact.mapEmbedUrl}
              title={`${site.legalName} on the map`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
