import Link from 'next/link'
import styles from '../law.module.css'

export default function SnellsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">💡 Optics</p>
          <h1>Snell's <span className="text-gradient-cyan">Law of Refraction</span></h1>
          <p style={{ maxWidth: 540, margin: '1rem auto 2rem' }}>
            Explore how light bends when crossing between different media — the principle behind lenses, prisms, rainbows, and fiber optics.
          </p>
          <Link href="/simulations/snells" className="btn btn-primary">▶ Interactive Animation</Link>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className={styles.contentCard}>

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>∿</span>
              <h3>Snell's Law of Refraction</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "When a wave passes from one medium to another, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant, equal to the ratio of the refractive indices."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>n₁ sin θ₁ = n₂ sin θ₂</span>
              <span className={styles.formulaLabel}>Law of refraction at a boundary</span>
            </div>
            <div className={styles.varGrid}>
              <div className={styles.varItem}><span>n₁</span><p>Refractive index of medium 1</p></div>
              <div className={styles.varItem}><span>n₂</span><p>Refractive index of medium 2</p></div>
              <div className={styles.varItem}><span>θ₁</span><p>Angle of incidence</p></div>
              <div className={styles.varItem}><span>θ₂</span><p>Angle of refraction</p></div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>✦</span>
              <h3>How Does Refraction Work?</h3>
            </div>
            <ul className={styles.bulletList}>
              <li>When light passes from one medium to another, it bends (refracts) at the boundary.</li>
              <li>The amount of bending depends on the <strong style={{ color: 'var(--accent-cyan-light)' }}>refractive index</strong> of each medium.</li>
              <li>A higher refractive index means light travels more slowly in that medium.</li>
              <li>Light bends <strong style={{ color: 'var(--accent-cyan-light)' }}>toward</strong> the normal when going into a denser medium, and <strong style={{ color: 'var(--accent-gold-light)' }}>away</strong> from it when going into a less dense medium.</li>
              <li>Total internal reflection occurs when light tries to pass from dense to less dense medium at too steep an angle.</li>
            </ul>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>◈</span>
              <h3>Common Refractive Indices</h3>
            </div>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}><h4>Vacuum</h4><p>n = 1.000 (by definition)</p></div>
              <div className={styles.infoItem}><h4>Air (STP)</h4><p>n = 1.000277</p></div>
              <div className={styles.infoItem}><h4>Water</h4><p>n = 1.333</p></div>
              <div className={styles.infoItem}><h4>Glass</h4><p>n = 1.50 – 1.90</p></div>
              <div className={styles.infoItem}><h4>Diamond</h4><p>n = 2.417</p></div>
              <div className={styles.infoItem}><h4>Silicon</h4><p>n = 3.877</p></div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>◎</span>
              <h3>Applications</h3>
            </div>
            <ul className={styles.bulletList}>
              <li>Camera lenses and eyeglasses — focusing light precisely</li>
              <li>Fiber optic cables — total internal reflection carries data at light speed</li>
              <li>Rainbows — different wavelengths refract at different angles through water droplets</li>
              <li>Prisms — splitting white light into its spectrum</li>
              <li>Microscopes and telescopes — magnifying distant or tiny objects</li>
              <li>Ray tracing in computer graphics — realistic rendering of transparent objects</li>
            </ul>
          </div>
        </div>

        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>Light is the messenger of the universe, and refraction is its grammar.</p>
          <p className={styles.quoteAuthor}>— Willebrord Snell (1621)</p>
        </div>

        <div className={styles.relatedRow}>
          <Link href="/laws/hookes" className={styles.relatedLink}>🌀 Hooke's Law →</Link>
          <Link href="/laws/coulomb" className={styles.relatedLink}>⚡ Coulomb's Law →</Link>
          <Link href="/laws" className="btn btn-outline">← All Laws</Link>
        </div>
      </div>
    </>
  )
}
