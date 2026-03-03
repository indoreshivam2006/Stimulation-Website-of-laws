import Link from 'next/link'
import styles from './page.module.css'

const content = [
  {
    icon: '🚀',
    title: 'Our Mission',
    body: `At <strong>Animated Physics</strong>, we believe that learning physics should be an exciting and visual journey. Our mission is to transform complex physical concepts into interactive, engaging experiences that make science accessible to everyone—from curious students to passionate educators and lifelong learners.`,
    quote: '"Physics is not just about equations; it\'s about understanding the universe through observation and experimentation."',
  },
]

const offerings = [
  { icon: '🔬', title: 'Interactive Simulations', desc: 'Real-time physics simulations that respond to your inputs instantly.' },
  { icon: '📖', title: 'Comprehensive Explanations', desc: 'Detailed breakdowns of fundamental physics laws with clear examples.' },
  { icon: '👁', title: 'Visual Demonstrations', desc: 'Animated visualizations of Newton, Kepler, Hooke, Snell, and more.' },
  { icon: '📊', title: 'Dynamic Graphs', desc: 'Watch physics principles come alive through real-time graphical representations.' },
  { icon: '🎓', title: 'Educational Resources', desc: 'Curated learning materials, video tutorials, and practice problems.' },
  { icon: '👥', title: 'Community Driven', desc: 'Built for students, educators, and physics enthusiasts worldwide.' },
]

const keyFeatures = [
  { icon: '▶', title: 'Interactive Controls', desc: 'Adjust parameters in real-time and observe how physical systems respond instantly.' },
  { icon: '📱', title: 'Responsive Design', desc: 'Access simulations seamlessly on desktop, tablet, or mobile devices.' },
  { icon: '🎨', title: 'Modern Interface', desc: 'Clean, intuitive design that enhances learning without distraction.' },
  { icon: '💻', title: 'Open Source', desc: 'Explore the code, contribute, and customize for your own projects.' },
  { icon: '⏱', title: 'Learn at Your Pace', desc: 'Pause, rewind, and replay simulations as many times as you need.' },
  { icon: '💡', title: 'Conceptual Clarity', desc: 'Visual aids that make abstract concepts concrete and understandable.' },
]

const laws = [
  { href: '/laws/newton', icon: '🍎', name: "Newton's Laws" },
  { href: '/laws/kepler', icon: '🪐', name: "Kepler's Laws" },
  { href: '/laws/hookes', icon: '🌀', name: "Hooke's Law" },
  { href: '/laws/snells', icon: '💡', name: "Snell's Law" },
  { href: '/laws/coulomb', icon: '⚡', name: "Coulomb's Law" },
  { href: '/laws/thermodynamics', icon: '🔥', name: 'Thermodynamics' },
]

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">◎ Our Story</p>
          <h1>About <span className="text-gradient-violet">Animated Physics</span></h1>
          <p style={{ maxWidth: 560, margin: '1rem auto 0' }}>Where Science Meets Visualization — bringing physics to life through stunning interactive experiences.</p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>

        {/* Mission */}
        <div className={styles.card}>
          <h2>🚀 Our Mission</h2>
          <p style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
            At <strong style={{ color: 'white' }}>Animated Physics</strong>, we believe that learning physics should be an exciting and visual journey. Our mission is to transform complex physical concepts into interactive, engaging experiences that make science accessible to everyone—from curious students to passionate educators and lifelong learners.
          </p>
          <blockquote className={styles.blockquote}>
            "Physics is not just about equations; it's about understanding the universe through observation and experimentation."
          </blockquote>
        </div>

        {/* What We Offer */}
        <div className={styles.card}>
          <h2>🎁 What We Offer</h2>
          <div className={styles.offerGrid}>
            {offerings.map((o, i) => (
              <div key={i} className={styles.offerItem}>
                <span className={styles.offerIcon}>{o.icon}</span>
                <div>
                  <h4>{o.title}</h4>
                  <p>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className={styles.card}>
          <h2>★ Key Features</h2>
          <div className={styles.featGrid}>
            {keyFeatures.map((f, i) => (
              <div key={i} className={styles.featItem}>
                <div className={styles.featIcon}>{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Laws Covered */}
        <div className={styles.card}>
          <h2>⚛ Physics Laws Covered</h2>
          <div className={styles.lawsGrid}>
            {laws.map((law) => (
              <Link key={law.href} href={law.href} className={styles.lawItem}>
                <span className={styles.lawIcon}>{law.icon}</span>
                <span>{law.name}</span>
                <span className={styles.lawArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaCard}>
          <h2>🧭 Start Your Physics Journey</h2>
          <p>Dive into the fascinating world of physics through interactive simulations and animations.</p>
          <div className="flex-gap" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link href="/laws" className="btn btn-primary">⚛ Explore Physics Laws</Link>
            <Link href="/resources" className="btn btn-secondary">🎓 Learning Resources</Link>
            <Link href="/contact" className="btn btn-outline">✉ Get in Touch</Link>
          </div>
        </div>
      </div>
    </>
  )
}
