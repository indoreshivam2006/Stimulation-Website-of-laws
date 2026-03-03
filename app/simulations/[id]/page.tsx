'use client'
import { use } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

// Map simulation IDs to their HTML file paths and titles
const simMap: Record<string, { file: string; title: string; law: string; lawHref: string; color: string }> = {
  'newton-law1': { file: '/sims/law1.html', title: "Newton's First Law — Inertia", law: "Newton's Laws", lawHref: '/laws/newton', color: '#7c3aed' },
  'newton-law2': { file: '/sims/law2.html', title: "Newton's Second Law — F = ma", law: "Newton's Laws", lawHref: '/laws/newton', color: '#7c3aed' },
  'newton-law3': { file: '/sims/law3.html', title: "Newton's Third Law — Action & Reaction", law: "Newton's Laws", lawHref: '/laws/newton', color: '#7c3aed' },
  'kepler-law1': { file: '/sims/Kepler_1.html', title: "Kepler's First Law — Law of Ellipses", law: "Kepler's Laws", lawHref: '/laws/kepler', color: '#06b6d4' },
  'kepler-law2': { file: '/sims/Kepler_2.html', title: "Kepler's Second Law — Equal Areas", law: "Kepler's Laws", lawHref: '/laws/kepler', color: '#06b6d4' },
  'kepler-law3': { file: '/sims/Kepler_3.html', title: "Kepler's Third Law — Harmonics", law: "Kepler's Laws", lawHref: '/laws/kepler', color: '#06b6d4' },
  'thermo': { file: '/sims/thermo.html', title: 'Thermodynamics — Heat & Energy', law: 'Thermodynamics', lawHref: '/laws/thermodynamics', color: '#f59e0b' },
  'snells': { file: '/sims/snells_anime.html', title: "Snell's Law — Light Refraction", law: "Snell's Law", lawHref: '/laws/snells', color: '#06b6d4' },
  'hookes': { file: '/sims/Hookes_anime.html', title: "Hooke's Law — Spring Oscillation", law: "Hooke's Law", lawHref: '/laws/hookes', color: '#a855f7' },
  'coulomb': { file: '/sims/Coulomb_anime.html', title: "Coulomb's Law — Electrostatics", law: "Coulomb's Law", lawHref: '/laws/coulomb', color: '#f59e0b' },
}

export default function SimulationPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const sim = simMap[resolvedParams.id]

  if (!sim) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h1>Simulation not found</h1>
        <p style={{ marginTop: '1rem' }}>The simulation "{resolvedParams.id}" does not exist.</p>
        <Link href="/laws" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
          ← Back to Laws
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {/* Header bar */}
      <div className={styles.header}>
        <Link href={sim.lawHref} className={styles.backBtn}>
          ← Back to {sim.law}
        </Link>
        <div className={styles.headerTitle}>
          <div className={styles.dot} style={{ background: sim.color, boxShadow: `0 0 10px ${sim.color}` }}/>
          <h1>{sim.title}</h1>
        </div>
        <Link href="/laws" className={styles.allLawsBtn}>All Laws →</Link>
      </div>

      {/* Iframe */}
      <div className={styles.iframeWrapper}>
        <iframe
          src={sim.file}
          className={styles.iframe}
          title={sim.title}
          allowFullScreen

        />
      </div>

      {/* Footer hint */}
      <div className={styles.hint}>
        <span>💡 Interact with the simulation above — adjust parameters, click, drag to explore</span>
        <Link href={sim.lawHref} className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
          Read Theory →
        </Link>
      </div>
    </div>
  )
}
