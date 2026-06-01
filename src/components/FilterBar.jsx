import styles from './FilterBar.module.css'

const FILTERS = [
  { key: 'all', label: 'All Events' },
  { key: 'tabletop', label: 'Tabletop' },
  { key: 'fps', label: 'FPS' },
  { key: 'rts', label: 'Strategy' },
  { key: 'rpg', label: 'RPG' },
  { key: 'fighting', label: 'Fighting' },
]

export default function FilterBar({ active, onChange }) {
  return (
    <div className={styles.filterBar}>
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`${styles.filterBtn} ${active === key ? styles.active : ''}`}
          onClick={() => onChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
