import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, classes } from '../data/site.js'

export default function Classes() {
  return (
    <>
      <PageHead title="Classes" lead={classes.lead} />

      {/* What the three levels mean, before the timetable that uses them. */}
      <section className="wrap">
        <Reveal className="classes-levels">
          {classes.levels.map((level) => (
            <div key={level.name}>
              <p className="classes-level__name">{level.name}</p>
              <p className="classes-level__note">{level.note}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="wrap band">
        {classes.timetable.map((day) => (
          <Reveal className="classes-day" key={day.day}>
            <h2 className="classes-day__name">{day.day}</h2>
            <div className="classes-day__sessions">
              {day.sessions.map((session) => (
                <div
                  className="classes-session"
                  key={`${day.day}-${session.time}`}
                >
                  <span className="classes-session__time">{session.time}</span>
                  <span className="classes-session__name">{session.name}</span>
                  <span className="classes-session__level">{session.level}</span>
                  <span className="classes-session__teacher">
                    {session.teacher}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="wrap">
        <Reveal>
          <h2 className="section-heading">Prices</h2>
          <div className="classes-prices">
            {classes.prices.map((price) => (
              <div className="classes-price" key={price.name}>
                <span>
                  {price.name}
                  {price.note && (
                    <span className="classes-price__note">{price.note}</span>
                  )}
                </span>
                <span className="classes-price__amount">
                  {site.currency}
                  {price.price}
                </span>
              </div>
            ))}
          </div>

          <p className="form__actions">
            <a
              className="button"
              href={classes.bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              {classes.bookingLabel}
            </a>
          </p>
        </Reveal>
      </section>
    </>
  )
}
