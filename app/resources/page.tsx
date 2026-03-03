import Link from 'next/link'
import styles from './page.module.css'

const simulations = [
  { href: '/laws/newton', icon: '🍎', title: "Newton's Laws", desc: 'Explore motion and forces with 3 interactive simulations' },
  { href: '/laws/kepler', icon: '🪐', title: "Kepler's Laws", desc: 'Planetary motion visualization with orbital mechanics' },
  { href: '/laws/thermodynamics', icon: '🔥', title: 'Thermodynamics', desc: 'Heat, energy, and entropy systems in action' },
  { href: '/laws/snells', icon: '💡', title: "Snell's Law", desc: 'Light refraction simulation with draggable beam' },
  { href: '/laws/hookes', icon: '🌀', title: "Hooke's Law", desc: 'Spring oscillation and elastic force mechanics' },
  { href: '/laws/coulomb', icon: '⚡', title: "Coulomb's Law", desc: 'Electrostatic charge interaction and field visualization' },
]

const externalResources = [
  { name: 'PhET Interactive Simulations', desc: 'Free interactive math and science simulations from the University of Colorado Boulder.', url: 'https://phet.colorado.edu/', tag: 'Recommended' },
  { name: 'Khan Academy Physics', desc: 'Comprehensive physics courses covering mechanics, electricity, waves, and thermodynamics.', url: 'https://www.khanacademy.org/science/physics', tag: 'Free' },
  { name: 'HyperPhysics', desc: 'Exploration environment for concepts in physics with interconnected concept maps.', url: 'http://hyperphysics.phy-astr.gsu.edu/', tag: 'Reference' },
  { name: 'The Physics Classroom', desc: 'High school physics tutorial with detailed explanations and practice problems.', url: 'https://www.physicsclassroom.com/', tag: 'Tutorial' },
]

const studyTips = [
  { icon: '✏️', title: 'Practice Regularly', desc: 'Work through problems daily to reinforce concepts and build problem-solving skills.' },
  { icon: '👥', title: 'Study Groups', desc: 'Collaborate with peers to discuss concepts and solve challenging problems together.' },
  { icon: '💡', title: 'Visualize Concepts', desc: 'Use our interactive simulations to see physics principles in action.' },
  { icon: '❓', title: 'Ask Questions', desc: "Don't hesitate to seek help from teachers, tutors, or online communities." },
]

export default function ResourcesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">◈ Learning Resources</p>
          <h1>Explore & <span className="text-gradient-cyan">Learn</span></h1>
          <p style={{ maxWidth: 540, margin: '1rem auto 0' }}>
            A curated collection of interactive simulations, external resources, and study tips to deepen your physics understanding.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>

        {/* Simulations */}
        <div className={styles.sectionCard}>
          <div className={styles.cardHeader}>
            <h2>🔬 Interactive Simulations</h2>
            <p>Explore physics laws through our hands-on simulations. Click any card to dive in.</p>
          </div>
          <div className={styles.simGrid}>
            {simulations.map((sim, i) => (
              <Link key={i} href={sim.href} className={styles.simCard}>
                <div className={styles.simIcon}>{sim.icon}</div>
                <h4>{sim.title}</h4>
                <p>{sim.desc}</p>
                <span className={styles.simCta}>Open →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* External Resources */}
        <div className={styles.sectionCard}>
          <div className={styles.cardHeader}>
            <h2>🔗 External Resources</h2>
            <p>Trusted external platforms to supplement your physics learning journey.</p>
          </div>
          <div className={styles.extList}>
            {externalResources.map((r, i) => (
              <div key={i} className={styles.extItem}>
                <div className={styles.extInfo}>
                  <div className={styles.extTitle}>
                    <h4>{r.name}</h4>
                    <span className={styles.extTag}>{r.tag}</span>
                  </div>
                  <p>{r.desc}</p>
                </div>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flexShrink: 0 }}>
                  Visit →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Study Tips */}
        <div className={styles.sectionCard}>
          <div className={styles.cardHeader}>
            <h2>📚 Study Tips</h2>
            <p>Strategies to maximize your physics learning and retention.</p>
          </div>
          <div className={styles.tipGrid}>
            {studyTips.map((tip, i) => (
              <div key={i} className={styles.tipCard}>
                <div className={styles.tipIcon}>{tip.icon}</div>
                <h4>{tip.title}</h4>
                <p>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
