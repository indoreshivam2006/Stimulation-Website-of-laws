'use client'
import { useEffect, useState, useRef } from 'react'

interface StatItem {
  icon: string
  value: number
  suffix?: string
  label: string
}

const stats: StatItem[] = [
  { icon: '⚛', value: 6, label: 'Physics Laws' },
  { icon: '▶', value: 12, label: 'Simulations' },
  { icon: '👥', value: 1000, suffix: '+', label: 'Active Learners' },
  { icon: '★', value: 100, suffix: '%', label: 'Free Access' },
]

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsCounter() {
  return (
    <section style={{ padding: '5rem 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(15,15,40,0.6)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
            className="stat-card"
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.75rem',
                lineHeight: 1,
              }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 800,
                background: i % 2 === 0 ? 'var(--gradient-violet)' : 'var(--gradient-cyan)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
