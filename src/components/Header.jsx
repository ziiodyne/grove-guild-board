import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.headerBand}>
      <div className={styles.runeRow}>
        <span>&#9670;</span>
        <span>&#9670;</span>
        <span>&#9670;</span>
        <span>&#9670;</span>
        <span>&#9670;</span>
      </div>
      <h1 className={styles.title}>The Grove Guild Board</h1>
      <p className={styles.sub}>Gaming Events &amp; Tournaments</p>
      <div className={styles.leafDivider}>
        <div className={styles.leafLine} />
        <div className={styles.gem} />
        <div className={`${styles.gem} ${styles.gemSmall}`} />
        <div className={styles.gem} />
        <div className={`${styles.leafLine} ${styles.leafLineR}`} />
      </div>
    </header>
  )
}
