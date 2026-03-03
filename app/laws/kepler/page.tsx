import Link from 'next/link'
import styles from '../law.module.css'

export default function KeplerPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">🪐 Orbital Mechanics</p>
          <h1>Kepler's <span className="text-gradient-cyan">Laws of Planetary Motion</span></h1>
          <p style={{ maxWidth: 540, margin: '1rem auto 2rem' }}>
            Discover the elegant laws that describe how planets orbit the Sun — from elliptical paths to the harmony of orbital periods.
          </p>
          <div className="flex-gap" style={{ justifyContent: 'center' }}>
            <Link href="/simulations/kepler-law1" className="btn btn-primary">▶ Law 1 Animation</Link>
            <Link href="/simulations/kepler-law2" className="btn btn-primary">▶ Law 2 Animation</Link>
            <Link href="/simulations/kepler-law3" className="btn btn-primary">▶ Law 3 Animation</Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className={styles.contentCard}>

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>01</span>
              <h3>First Law: Law of Ellipses</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "All the planets revolve around the Sun in elliptical orbits, with the Sun at one of the foci."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>r = a(1 − e²) / (1 + e·cosθ)</span>
              <span className={styles.formulaLabel}>Polar equation of an ellipse</span>
            </div>
            <p>Unlike the common assumption of circular orbits, planets trace ellipses. The Sun isn't at the centre — it occupies one <strong style={{ color: 'var(--accent-cyan-light)' }}>focus</strong>. The eccentricity (e) describes how elongated the ellipse is. Earth's orbit is nearly circular (e ≈ 0.017), while comets can be highly eccentric.</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>02</span>
              <h3>Second Law: Law of Equal Areas</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "A planet moves faster when closer to the Sun and slower when farther away, such that the line between the planet and the Sun sweeps equal areas in equal time intervals."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>dA/dt = L / 2m = constant</span>
              <span className={styles.formulaLabel}>Angular momentum is conserved</span>
            </div>
            <p>This law is a direct consequence of conservation of angular momentum. When Earth is at perihelion (closest to the Sun), it moves fastest (~30.3 km/s). At aphelion (furthest), it slows to ~29.3 km/s.</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>03</span>
              <h3>Third Law: Law of Harmonics</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "The square of a planet's orbital period is proportional to the cube of the semi-major axis of its orbit."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>T² ∝ a³</span>
              <span className={styles.formulaLabel}>T = period, a = semi-major axis</span>
            </div>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h4>Earth</h4>
                <p>T = 1 year, a = 1 AU</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Mars</h4>
                <p>T = 1.88 years, a = 1.52 AU</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Jupiter</h4>
                <p>T = 11.86 years, a = 5.2 AU</p>
              </div>
            </div>
            <p>This law allows astronomers to calculate orbital periods from distances alone. It later became the foundation for Newton's law of universal gravitation.</p>
          </div>
        </div>

        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>I used to measure the heavens, now I shall measure the shadows of Earth. Sky-bound was my mind, Earth-bound my body rests.</p>
          <p className={styles.quoteAuthor}>— Johannes Kepler</p>
        </div>

        <div className={styles.relatedRow}>
          <Link href="/laws/newton" className={styles.relatedLink}>🍎 Newton's Laws →</Link>
          <Link href="/laws/thermodynamics" className={styles.relatedLink}>🔥 Thermodynamics →</Link>
          <Link href="/laws" className="btn btn-outline">← All Laws</Link>
        </div>
      </div>
    </>
  )
}
