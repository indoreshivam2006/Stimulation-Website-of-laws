import ParticleBackground from '@/components/ParticleBackground'
import StatsCounter from '@/components/StatsCounter'
import LawCard from '@/components/LawCard'
import Link from 'next/link'
import styles from './page.module.css'

const laws = [
  { href: '/laws/newton', icon: '🍎', title: "Newton's Laws", description: "Explore the three fundamental laws of motion governing all objects in the universe.", color: 'violet' as const, formula: 'F=ma', badge: 'Mechanics' },
  { href: '/laws/kepler', icon: '🪐', title: "Kepler's Laws", description: "Visualize planetary orbits and the elegant mathematics of orbital mechanics.", color: 'cyan' as const, formula: 'T²=a³', badge: 'Orbital' },
  { href: '/laws/thermodynamics', icon: '🔥', title: "Thermodynamics", description: "Understand heat, energy, entropy, and the laws driving all thermodynamic processes.", color: 'gold' as const, formula: 'ΔU=Q-W', badge: 'Heat' },
  { href: '/laws/snells', icon: '💡', title: "Snell's Law", description: "Watch light bend and refract as it passes between different optical media.", color: 'cyan' as const, formula: 'n₁sinθ₁', badge: 'Optics' },
  { href: '/laws/hookes', icon: '🌀', title: "Hooke's Law", description: "Experiment with spring forces: compress, stretch, and feel the elastic restoring force.", color: 'rose' as const, formula: 'F=-kx', badge: 'Elasticity' },
  { href: '/laws/coulomb', icon: '⚡', title: "Coulomb's Law", description: "Explore electrostatic attraction and repulsion between charged particles.", color: 'gold' as const, formula: 'F=kq/r²', badge: 'Electro' },
]

const features = [
  { icon: '▶', title: 'Real-Time Simulations', desc: 'Adjust parameters on the fly and watch physics respond instantly to your inputs.' },
  { icon: '🎯', title: 'Deep Understanding', desc: 'Step-by-step visual explanations that connect equations to physical intuition.' },
  { icon: '📱', title: 'Any Device', desc: 'Fully responsive — explore simulations seamlessly on desktop, tablet, or mobile.' },
  { icon: '🆓', title: 'Free Forever', desc: 'No paywalls, no subscriptions. Pure, open access to quality physics education.' },
]

export default function HomePage() {
  return (
    <>
      <ParticleBackground />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}/>
              Interactive Physics Education Platform
            </div>

            <h1 className={`${styles.heroTitle} glitch`} data-text="Physics in Motion">
              Physics in <span className="text-gradient-violet">Motion</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Discover the universe's fundamental laws through breathtaking interactive simulations.
              Not just equations — <em>experiences</em>.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/laws" className="btn btn-primary btn-lg">
                <span>⚛</span> Explore Laws
              </Link>
              <Link href="/about" className="btn btn-secondary btn-lg">
                <span>◎</span> Learn More
              </Link>
            </div>

            <div className={styles.heroFormulas}>
              <span>F = ma</span>
              <span>E = mc²</span>
              <span>∇²φ = ρ/ε₀</span>
              <span>ΔS ≥ 0</span>
            </div>
          </div>

          {/* Orbiting atom decorative */}
          <div className={styles.heroAtom}>
            <div className={styles.nucleus}>
              <div className={styles.nucleusCore}/>
            </div>
            <div className={`${styles.orbit} ${styles.orbit1}`}><div className={styles.electron}/></div>
            <div className={`${styles.orbit} ${styles.orbit2}`}><div className={styles.electron}/></div>
            <div className={`${styles.orbit} ${styles.orbit3}`}><div className={styles.electron}/></div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}/>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsCounter />

      {/* ── LAWS GRID ── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="section-eyebrow">⚛ Interactive Simulations</p>
            <h2 className="section-title">
              <span className="highlight">6 Laws</span> of Physics
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Each law is paired with real-time interactive animations you can control, manipulate, and explore at your own pace.
            </p>
          </div>
          <div className={styles.lawsGrid}>
            {laws.map((law) => (
              <LawCard key={law.href} {...law} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section" style={{ background: 'rgba(124,58,237,0.03)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p className="section-eyebrow">★ Why Us</p>
              <h2 className="section-title">
                Why <span className="highlight">Animated Physics?</span>
              </h2>
              <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
                Physics shouldn't be a wall of equations. We believe understanding comes from seeing — from watching forces interact, orbits trace, and electrons dance. Our simulations make abstract concepts viscerally clear.
              </p>
              <ul className={styles.featureList}>
                {['Visual Learning — See physics, don\'t just read it', 'Hands-On Exploration — Adjust every parameter', 'Instant Feedback — Results update in real time', 'Self-Paced — Go as fast or slow as you need', 'Open Access — Free for students, educators, and curious minds'].map((item, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureCheck}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/resources" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Explore Resources →
              </Link>
            </div>

            <div className={styles.featuresCardGrid}>
              {features.map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <h4 className={styles.featureTitle}>{f.title}</h4>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <div className={styles.ctaGlow}/>
            <p className="section-eyebrow" style={{ justifyContent: 'center' }}>🚀 Ready?</p>
            <h2>Start Your Physics Journey</h2>
            <p>Join thousands of students exploring physics through interactive animations and real-time simulations.</p>
            <div className="flex-gap" style={{ justifyContent: 'center', marginTop: '2rem' }}>
              <Link href="/laws" className="btn btn-primary btn-lg">
                ⚛ Explore All Laws
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">
                ✉ Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
