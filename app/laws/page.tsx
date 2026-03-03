import LawCard from '@/components/LawCard'
import styles from './page.module.css'

const laws = [
  { href: '/laws/newton', icon: '🍎', title: "Newton's Laws of Motion", description: "Three fundamental laws describing motion, force, and inertia governing all physical objects.", color: 'violet' as const, formula: 'F=ma', badge: 'Mechanics' },
  { href: '/laws/kepler', icon: '🪐', title: "Kepler's Laws", description: "Three laws governing planetary orbits around the Sun and orbital mechanics.", color: 'cyan' as const, formula: 'T²∝a³', badge: 'Orbital' },
  { href: '/laws/thermodynamics', icon: '🔥', title: "Laws of Thermodynamics", description: "Four laws describing heat, energy, and entropy relationships in physical systems.", color: 'gold' as const, formula: 'ΔU=Q-W', badge: 'Heat' },
  { href: '/laws/snells', icon: '💡', title: "Snell's Law", description: "The law of refraction, describing how light bends when crossing between different media.", color: 'cyan' as const, formula: 'n₁sinθ₁', badge: 'Optics' },
  { href: '/laws/hookes', icon: '🌀', title: "Hooke's Law", description: "Spring force and elastic deformation — the force is proportional to displacement.", color: 'rose' as const, formula: 'F=-kx', badge: 'Elasticity' },
  { href: '/laws/coulomb', icon: '⚡', title: "Coulomb's Law", description: "The electrostatic force between charged particles, following an inverse-square relationship.", color: 'gold' as const, formula: 'F=kq₁q₂/r²', badge: 'Electro' },
]

const whyStudy = [
  { icon: '🧠', title: 'Build Deep Understanding', desc: 'Physics laws form the foundation for understanding how the universe works at every scale.' },
  { icon: '🚀', title: 'Real World Applications', desc: 'From space travel to medical imaging — these laws power modern innovation.' },
  { icon: '🔬', title: 'Interactive Learning', desc: 'Our simulations make complex concepts easier to visualize and intuitively understand.' },
  { icon: '🎓', title: 'Academic Excellence', desc: 'Master these fundamental principles for success in physics and engineering.' },
]

export default function LawsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">⚛ Interactive Simulations</p>
          <h1>Explore <span className="text-gradient-violet">Physics Laws</span></h1>
          <p style={{ maxWidth: 560, margin: '1rem auto 0' }}>
            Click on any law to dive into interactive simulations, detailed explanations, and real-world applications. Physics brought to life.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        {/* Laws grid */}
        <div className={styles.lawsGrid}>
          {laws.map((law) => (
            <LawCard key={law.href} {...law} />
          ))}
        </div>

        {/* Why Study */}
        <div className={styles.whySection}>
          <div className="divider"/>
          <div className={styles.whyHeader}>
            <h2 className="section-title">Why Study <span className="highlight">Physics Laws?</span></h2>
            <p>These laws aren't abstract math — they explain everything from why planets orbit stars to how your phone screen works.</p>
          </div>
          <div className={styles.whyGrid}>
            {whyStudy.map((item, i) => (
              <div key={i} className={styles.whyCard}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
