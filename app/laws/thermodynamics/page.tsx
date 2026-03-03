import Link from 'next/link'
import styles from '../law.module.css'

export default function ThermodynamicsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">🔥 Heat & Energy</p>
          <h1>Laws of <span className="text-gradient-gold">Thermodynamics</span></h1>
          <p style={{ maxWidth: 560, margin: '1rem auto 2rem' }}>
            Understanding heat, energy transfer, and entropy — the four laws that govern every engine, every chemical reaction, and the ultimate fate of the universe.
          </p>
          <Link href="/simulations/thermo" className="btn btn-primary">▶ Interactive Animation</Link>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className={styles.contentCard}>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'white' }}>Thermodynamics</strong> is the branch of physics dealing with heat, work, temperature, and their relation to energy, entropy, and physical properties of matter. Its four laws convey quantitative descriptions using measurable macroscopic quantities.
          </p>

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>0</span>
              <h3>Zeroth Law: Thermal Equilibrium</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "If two systems are each in thermal equilibrium with a third system, they are also in thermal equilibrium with each other."
            </blockquote>
            <p>This seemingly obvious law is the basis for temperature measurement. It allows thermometers to work — they reach equilibrium with what you're measuring, then you read their temperature.</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>01</span>
              <h3>First Law: Conservation of Energy</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "In a process without transfer of matter, the change in internal energy of a system equals energy gained as heat minus thermodynamic work done by the system."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>ΔU = Q − W</span>
              <span className={styles.formulaLabel}>Internal energy = Heat added − Work done</span>
            </div>
            <div className={styles.varGrid}>
              <div className={styles.varItem}><span>ΔU</span><p>Change in internal energy</p></div>
              <div className={styles.varItem}><span>Q</span><p>Heat added to system</p></div>
              <div className={styles.varItem}><span>W</span><p>Work done by system</p></div>
            </div>
            <p>Energy cannot be created or destroyed, only transformed from one form to another. Every perpetual motion machine of the first kind violates this law.</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>02</span>
              <h3>Second Law: Entropy Always Increases</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "Heat does not spontaneously flow from a colder body to a hotter body."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>ΔS ≥ 0</span>
              <span className={styles.formulaLabel}>Total entropy of an isolated system never decreases</span>
            </div>
            <p>This law introduces the concept of <strong style={{ color: 'var(--accent-gold-light)' }}>entropy</strong> — a measure of disorder. Natural processes tend toward higher entropy. No heat engine can be 100% efficient. Time itself has a preferred direction because of this law.</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>03</span>
              <h3>Third Law: Absolute Zero</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "As the temperature of a system approaches absolute zero, all processes cease and the entropy of the system approaches a minimum value."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>S → 0 as T → 0 K</span>
              <span className={styles.formulaLabel}>Absolute zero (0 K = −273.15°C) is unreachable</span>
            </div>
            <p>Absolute zero is the coldest possible temperature. In practice, it can be approached but never fully reached. Near absolute zero, quantum effects dominate and materials exhibit remarkable properties like superconductivity.</p>
          </div>
        </div>

        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>Thermo-dynamics is the subject of the relation of heat to forces acting between contiguous parts of bodies, and the relation of heat to electrical agency.</p>
          <p className={styles.quoteAuthor}>— Lord Kelvin, 1854</p>
        </div>

        <div className={styles.relatedRow}>
          <Link href="/laws/newton" className={styles.relatedLink}>🍎 Newton's Laws →</Link>
          <Link href="/laws/coulomb" className={styles.relatedLink}>⚡ Coulomb's Law →</Link>
          <Link href="/laws" className="btn btn-outline">← All Laws</Link>
        </div>
      </div>
    </>
  )
}
