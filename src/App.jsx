import { useState, useMemo } from 'react'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import TallyBar from './components/TallyBar'
import EventCard from './components/EventCard'
import eventsData from './data/events'
import styles from './App.module.css'

const FILTER_LABELS = {
  all: 'All Events',
  tabletop: 'Tabletop',
  fps: 'FPS',
  rts: 'Strategy',
  rpg: 'RPG',
  fighting: 'Fighting',
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredEvents = useMemo(() => {
    if (activeFilter === 'all') return eventsData
    return eventsData.filter(e => e.type === activeFilter)
  }, [activeFilter])

  return (
    <div className={styles.boardRoot}>
      <Header />
      <FilterBar active={activeFilter} onChange={setActiveFilter} />
      <TallyBar events={filteredEvents} />
      <main className={styles.gridSection}>
        <p className={styles.sectionLabel}>
          {FILTER_LABELS[activeFilter] || 'Events'} &mdash; June 2026
        </p>
        {filteredEvents.length === 0 ? (
          <p className={styles.emptyState}>No events found for this category.</p>
        ) : (
          <div className={styles.cardsGrid}>
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
