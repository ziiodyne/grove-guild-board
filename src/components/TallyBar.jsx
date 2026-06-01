import styles from './TallyBar.module.css'

export default function TallyBar({ events }) {
  const spots = events.reduce((acc, e) => acc + e.spots, 0)
  const prize = events.reduce((acc, e) => {
    const n = parseInt(e.prize.replace(/[^0-9]/g, '')) || 0
    return acc + n
  }, 0)

  return (
    <div className={styles.tallyBar}>
      <div className={styles.tallyItem}>
        <span className={styles.tallyNum}>{events.length}</span>
        <span className={styles.tallyLabel}>Events</span>
      </div>
      <div className={styles.tallyItem}>
        <span className={styles.tallyNum}>{spots}</span>
        <span className={styles.tallyLabel}>Open Spots</span>
      </div>
      <div className={styles.tallyItem}>
        <span className={styles.tallyNum}>
          {prize ? '$' + prize.toLocaleString() : 'Glory'}
        </span>
        <span className={styles.tallyLabel}>Prize Pool</span>
      </div>
    </div>
  )
}
