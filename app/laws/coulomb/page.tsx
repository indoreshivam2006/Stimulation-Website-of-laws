import Link from 'next/link'
import styles from '../law.module.css'

export default function CoulombPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">⚡ Electrostatics</p>
          <h1>Coulomb's <span className="text-gradient-gold">Law of Electrostatics</span></h1>
          <p style={{ maxWidth: 540, margin: '1rem auto 2rem' }}>
            Discover the electrostatic force between charged particles — the foundation of electricity, chemistry, and all of matter's interactions.
          </p>
          <Link href="/simulations/coulomb" className="btn btn-primary">▶ Interactive Animation</Link>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className={styles.contentCard}>

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>⚡</span>
              <h3>Coulomb's Law</h3>
            </div>
            <blockquote className={styles.blockquote}>
              "The electrostatic force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them. Like charges repel; opposite charges attract."
            </blockquote>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>F = k · |q₁ · q₂| / r²</span>
              <span className={styles.formulaLabel}>Coulomb's inverse-square law</span>
            </div>
            <div className={styles.varGrid}>
              <div className={styles.varItem}><span>F</span><p>Electrostatic force (N)</p></div>
              <div className={styles.varItem}><span>k</span><p>Coulomb constant ≈ 8.99 × 10⁹ N·m²/C²</p></div>
              <div className={styles.varItem}><span>q₁, q₂</span><p>Charges (Coulombs, C)</p></div>
              <div className={styles.varItem}><span>r</span><p>Distance between charges (m)</p></div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>✦</span>
              <h3>Key Principles</h3>
            </div>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h4>Inverse Square Law</h4>
                <p>Double the distance → force decreases by 4×. The force falls off rapidly with distance — like gravity.</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Like Charges Repel</h4>
                <p>Two positive or two negative charges push each other away. F is positive when both charges have the same sign.</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Unlike Charges Attract</h4>
                <p>Opposite charges are pulled toward each other. This holds atoms together in molecules.</p>
              </div>
              <div className={styles.infoItem}>
                <h4>Superposition</h4>
                <p>The total force on a charge is the vector sum of forces from all other charges — they act independently.</p>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>◈</span>
              <h3>Real-World Examples</h3>
            </div>
            <ul className={styles.bulletList}>
              <li><strong style={{ color: 'white' }}>Static electricity:</strong> Rubbing a balloon on hair charges it; it then sticks to walls via attraction to induced opposite charges.</li>
              <li><strong style={{ color: 'white' }}>Lightning:</strong> Massive charge separation in clouds creates a strong field — discharge occurs when potential becomes too large.</li>
              <li><strong style={{ color: 'white' }}>Chemical bonding:</strong> Ionic bonds (NaCl) form via Coulombic attraction between cations and anions.</li>
              <li><strong style={{ color: 'white' }}>Capacitors:</strong> Store energy by separating opposite charges on parallel plates.</li>
              <li><strong style={{ color: 'white' }}>Van de Graaff generators:</strong> Build up massive static charge illustrating Coulomb's principles dramatically.</li>
            </ul>
          </div>

          <div className={styles.divider} />

          <div className={styles.lawBlock}>
            <div className={styles.lawHeader}>
              <span className={styles.lawNumber}>∇</span>
              <h3>Electric Field</h3>
            </div>
            <div className={styles.formulaBox}>
              <span className={styles.formula}>E = k · q / r²</span>
              <span className={styles.formulaLabel}>Electric field from a point charge</span>
            </div>
            <p>The electric field describes the force per unit charge at any point in space. Field lines point outward from positive charges and inward toward negative charges. Coulomb's Law is the foundation of classical electrostatics and connects to Maxwell's equations in electrodynamics.</p>
          </div>
        </div>

        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>The electric fluid is attracted to pointed conductors and dispersed from them with greater ease than from any other form.</p>
          <p className={styles.quoteAuthor}>— Charles-Augustin de Coulomb, 1785</p>
        </div>

        <div className={styles.relatedRow}>
          <Link href="/laws/snells" className={styles.relatedLink}>💡 Snell's Law →</Link>
          <Link href="/laws/hookes" className={styles.relatedLink}>🌀 Hooke's Law →</Link>
          <Link href="/laws" className="btn btn-outline">← All Laws</Link>
        </div>
      </div>
    </>
  )
}
