import Link from 'next/link'
import styles from '../law.module.css'

export default function HookesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">🌀 Elasticity</p>
          <h1>Hooke's <span className="text-gradient-violet">Law of Elasticity</span></h1>
          <p style={{ maxWidth: 540, margin: '1rem auto 2rem' }}>
            Experiment with springs, elastic forces, and deformation. The principle that underlies mechanical watches, suspension systems, and seismic sensors.
          </p>
          <Link href="/simulations/hookes" className="btn btn-primary">▶ Interactive Animation</Link>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className={styles.contentCard}>

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>∿</span>
              <h3>Hooke's Law</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "The force needed to extend or compress a spring by some distance is directly proportional to that distance. The more you stretch or compress something, the more force it pushes back with."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>F = −k × x</span>
              <span className={styles.formulaLabel}>Restoring force proportional to displacement</span>
            </div>
            <div className={styles.varGrid}>
              <div className={styles.varItem}><span>F</span><p>Restoring force (Newtons, N)</p></div>
              <div className={styles.varItem}><span>k</span><p>Spring constant (N/m)</p></div>
              <div className={styles.varItem}><span>x</span><p>Displacement from equilibrium (m)</p></div>
              <div className={styles.varItem}><span>−</span><p>Negative sign indicates restoring direction</p></div>
            </div>
            <p>The negative sign is crucial — the force always acts opposite to the displacement, pulling the spring back toward equilibrium. This is what creates oscillation.</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>◈</span>
              <h3>Spring Constant (k)</h3>
            </div>
            <p style={{ marginBottom: '1rem' }}>The spring constant k measures the stiffness of the spring. A higher k means a stiffer spring requiring more force for the same displacement.</p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}><h4>Soft spring</h4><p>k = 10–100 N/m<br/>Easy to compress</p></div>
              <div className={styles.infoItem}><h4>Car suspension</h4><p>k ≈ 10,000–30,000 N/m</p></div>
              <div className={styles.infoItem}><h4>Bone (compression)</h4><p>k ≈ 10⁷–10⁹ N/m</p></div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>★</span>
              <h3>Simple Harmonic Motion</h3>
            </div>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>T = 2π√(m/k)</span>
              <span className={styles.formulaLabel}>Period of oscillation</span>
            </div>
            <p>When a mass on a spring is displaced and released, it oscillates. This is <strong style={{ color: 'var(--accent-violet-light)' }}>Simple Harmonic Motion (SHM)</strong>. The period depends only on mass and spring constant — not on amplitude. This is why pendulum clocks are precise.</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>◎</span>
              <h3>Applications</h3>
            </div>
            <ul className={styles.bulletList}>
              <li>Mechanical watches — balance wheel oscillates with a spring to measure time</li>
              <li>Vehicle suspension — absorbs road shocks and vibrations</li>
              <li>Seismographs — detect ground motion through spring-mass systems</li>
              <li>Spring scales — measure force/weight by measuring extension</li>
              <li>Atomic force microscopy — measure forces at nanoscale</li>
              <li>Building design — earthquake-resistant structures use spring principles</li>
            </ul>
          </div>
        </div>

        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>As the extension, so the force.</p>
          <p className={styles.quoteAuthor}>— Robert Hooke, 1676 (originally written in Latin anagram: "ceiiinosssttuv")</p>
        </div>

        <div className={styles.relatedRow}>
          <Link href="/laws/newton" className={styles.relatedLink}>🍎 Newton's Laws →</Link>
          <Link href="/laws/snells" className={styles.relatedLink}>💡 Snell's Law →</Link>
          <Link href="/laws" className="btn btn-outline">← All Laws</Link>
        </div>
      </div>
    </>
  )
}
