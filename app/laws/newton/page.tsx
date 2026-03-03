import Link from 'next/link'
import styles from '../law.module.css'

export default function NewtonPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">🍎 Mechanics</p>
          <h1>Newton's <span className="text-gradient-violet">Laws of Motion</span></h1>
          <p style={{ maxWidth: 540, margin: '1rem auto 2rem' }}>
            Explore the three fundamental laws that govern all motion and forces in the universe. From a falling apple to rocket propulsion.
          </p>
          <div className="flex-gap" style={{ justifyContent: 'center' }}>
            <Link href="/simulations/newton-law1" className="btn btn-primary">▶ Law 1 Animation</Link>
            <Link href="/simulations/newton-law2" className="btn btn-primary">▶ Law 2 Animation</Link>
            <Link href="/simulations/newton-law3" className="btn btn-primary">▶ Law 3 Animation</Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className={styles.contentCard}>
          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>01</span>
              <h3>1st Law: Law of Inertia</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "An object at rest stays at rest, and an object in motion continues in motion with the same speed and direction unless acted upon by an external force."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>F = 0</span>
              <span className={styles.formulaLabel}>Net force = 0 → constant velocity</span>
            </div>
            <p>If no external force is applied, an object will not change its state of motion. A stationary object will remain still, and a moving object will keep moving at a constant velocity. The tendency of an object to resist a change in its state of motion is called <strong style={{ color: 'var(--accent-violet-light)' }}>inertia</strong>.</p>
          </div>

          <div className={styles.divider}/>

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>02</span>
              <h3>2nd Law: Law of Acceleration</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>F = m × a</span>
              <span className={styles.formulaLabel}>Force = Mass × Acceleration</span>
            </div>
            <div className={styles.varGrid}>
              <div className={styles.varItem}><span>F</span><p>Force (Newton, N)</p></div>
              <div className={styles.varItem}><span>m</span><p>Mass (kilograms, kg)</p></div>
              <div className={styles.varItem}><span>a</span><p>Acceleration (m/s²)</p></div>
            </div>
            <p>A heavier object requires more force to accelerate than a lighter object. A car accelerates faster when more force is applied to the gas pedal.</p>
          </div>

          <div className={styles.divider}/>

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>03</span>
              <h3>3rd Law: Action and Reaction</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "For every action, there is an equal and opposite reaction."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>F<sub>AB</sub> = −F<sub>BA</sub></span>
              <span className={styles.formulaLabel}>Equal magnitude, opposite direction</span>
            </div>
            <p>If object A exerts force F<sub>AB</sub> on object B, then B exerts an equal and opposite force F<sub>BA</sub> on A. Rockets propel forward by ejecting gas backward. You push the Earth when you walk.</p>
          </div>
        </div>

        {/* Quote card */}
        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>If I have seen further, it is by standing on the shoulders of giants.</p>
          <p className={styles.quoteAuthor}>— Sir Isaac Newton</p>
        </div>

        {/* Related */}
        <div className={styles.relatedRow}>
          <Link href="/laws/kepler" className={styles.relatedLink}>🪐 Kepler's Laws →</Link>
          <Link href="/laws/thermodynamics" className={styles.relatedLink}>🔥 Thermodynamics →</Link>
          <Link href="/laws" className="btn btn-outline">← All Laws</Link>
        </div>
      </div>
    </>
  )
}
