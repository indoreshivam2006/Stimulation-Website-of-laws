import Link from 'next/link'
import styles from './LawCard.module.css'

interface LawCardProps {
  href: string
  icon: string
  title: string
  description: string
  color?: 'violet' | 'cyan' | 'gold' | 'rose' | 'green'
  formula?: string
  badge?: string
}

const colorMap = {
  violet: { bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.3)', text: '#a855f7', glow: 'rgba(124,58,237,0.35)' },
  cyan:   { bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)', text: '#22d3ee', glow: 'rgba(6,182,212,0.3)' },
  gold:   { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', text: '#fcd34d', glow: 'rgba(245,158,11,0.3)' },
  rose:   { bg: 'rgba(225,29,72,0.12)', border: 'rgba(225,29,72,0.3)', text: '#fb7185', glow: 'rgba(225,29,72,0.3)' },
  green:  { bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', text: '#34d399', glow: 'rgba(16,185,129,0.3)' },
}

export default function LawCard({ href, icon, title, description, color = 'violet', formula, badge }: LawCardProps) {
  const c = colorMap[color]
  return (
    <Link href={href} className={styles.card} style={{ '--card-bg': c.bg, '--card-border': c.border, '--card-text': c.text, '--card-glow': c.glow } as React.CSSProperties}>
      {formula && <span className={styles.formula}>{formula}</span>}
      {badge && <span className={styles.badge}>{badge}</span>}
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <span className={styles.cta}>
        Explore & Simulate
        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
      </span>
    </Link>
  )
}
