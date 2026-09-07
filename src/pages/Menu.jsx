import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, menu } from '../data/site.js'

// Code to full wording, so a marker on an item and its legend entry can never
// drift apart: both come from menu.legend.
const LEGEND_LABEL = Object.fromEntries(
  menu.legend.map((entry) => [entry.code, entry.label])
)

export default function Menu() {
  return (
    <>
      <PageHead title="Menu" lead={menu.lead} />

      <section className="wrap">
        {/* The wrapper carries the closing hairline under the last group. */}
        <div className="menu-groups">
          {menu.groups.map((group) => (
            <Reveal className="menu-group" key={group.heading}>
              <h2 className="menu-group__heading">{group.heading}</h2>

              <div>
                {group.items.map((item) => (
                  <div className="menu-item" key={item.name}>
                    <span>
                      <span className="menu-item__name">{item.name}</span>

                      {item.tags && (
                        <span className="menu-tags">
                          {item.tags.map((tag) => (
                            <abbr
                              className="menu-tag"
                              key={tag}
                              title={LEGEND_LABEL[tag]}
                            >
                              {tag}
                            </abbr>
                          ))}
                        </span>
                      )}

                      {item.description && (
                        <span className="menu-item__description">
                          {item.description}
                        </span>
                      )}
                    </span>

                    <span className="menu-item__price">
                      {site.currency}
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="menu-legend">
            {menu.legend.map((entry) => (
              <span className="menu-legend__item" key={entry.code}>
                <span className="menu-tag">{entry.code}</span>
                {entry.label}
              </span>
            ))}
          </div>

          <p className="menu-footnote">{menu.footnote}</p>
        </Reveal>
      </section>
    </>
  )
}
