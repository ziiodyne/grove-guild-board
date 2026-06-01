import { useState } from 'react'
import styles from './EventCard.module.css'

const TYPE_STYLES = {
  tabletop: { card: styles.cardTabletop, tag: styles.tagTabletop },
  fps:      { card: styles.cardFps,      tag: styles.tagFps },
  rts:      { card: styles.cardRts,      tag: styles.tagRts },
  rpg:      { card: styles.cardRpg,      tag: styles.tagRpg },
  fighting: { card: styles.cardFighting, tag: styles.tagFighting },
}

export default function EventCard({ event }) {
  const ts = TYPE_STYLES[event.type] || TYPE_STYLES.tabletop
  const [imgError, setImgError] = useState(false)

  return (
    <div className={`${styles.card} ${ts.card}`}>
      <div className={styles.imgWrapper}>
        {!imgError ? (
          <img
            src={event.image}
            alt={event.title}
            className={styles.cardImg}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.imgFallback}>
            <i className="ti ti-device-gamepad-2" aria-hidden="true" />
          </div>
        )}
        <div className={styles.imgOverlay} />
        <span className={`${styles.tag} ${ts.tag}`}>{event.tag}</span>
      </div>

      <div className={styles.cardInner}>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.desc}>{event.desc}</p>
        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <i className="ti ti-calendar" aria-hidden="true" />
            {event.date} &mdash; {event.time}
          </div>
          <div className={styles.metaRow}>
            <i className="ti ti-map-pin" aria-hidden="true" />
            {event.location}
          </div>
          <div className={styles.metaRow}>
            <i className="ti ti-users" aria-hidden="true" />
            {event.spots} spots open
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.prize}>{event.prize}</span>
        <button className={styles.registerBtn}>Register</button>
      </div>
    </div>
  )
}
