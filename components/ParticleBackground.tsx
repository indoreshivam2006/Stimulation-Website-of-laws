'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
  pulse: number
  pulseSpeed: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const colors = ['#7c3aed', '#06b6d4', '#a855f7', '#22d3ee', '#f59e0b', '#ffffff']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const randomBetween = (a: number, b: number) => a + Math.random() * (b - a)

    const init = () => {
      const count = Math.floor((canvas.width * canvas.height) / 16000)
      particles = Array.from({ length: count }, () => ({
        x: randomBetween(0, canvas.width),
        y: randomBetween(0, canvas.height),
        vx: randomBetween(-0.2, 0.2),
        vy: randomBetween(-0.3, -0.05),
        radius: randomBetween(1, 3.5),
        opacity: randomBetween(0.2, 0.8),
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: randomBetween(0, Math.PI * 2),
        pulseSpeed: randomBetween(0.01, 0.03),
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Draw particle
        const p = particles[i]
        p.pulse += p.pulseSpeed
        const pulsedOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(')', `, ${pulsedOpacity})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace('rgba(', 'rgba(')

        // Use hex → parse
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16)
          const g = parseInt(hex.slice(3, 5), 16)
          const b = parseInt(hex.slice(5, 7), 16)
          return `rgba(${r},${g},${b},${alpha})`
        }

        ctx.fillStyle = hexToRgba(p.color.startsWith('#') ? p.color : '#7c3aed', pulsedOpacity)

        // Glow
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color

        ctx.fill()
        ctx.shadowBlur = 0

        // Update position
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < -10) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  )
}
