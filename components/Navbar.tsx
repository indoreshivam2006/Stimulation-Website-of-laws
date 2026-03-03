'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/', label: 'Home', icon: '⌂' },
  { href: '/about', label: 'About', icon: '◎' },
  { href: '/laws', label: 'Laws', icon: '⚛' },
  { href: '/resources', label: 'Resources', icon: '◈' },
  { href: '/contact', label: 'Contact', icon: '✉' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <circle cx="20" cy="20" r="3" fill="#06b6d4"/>
              <ellipse cx="20" cy="20" rx="17" ry="7" stroke="#7c3aed" strokeWidth="1.5" fill="none" transform="rotate(0 20 20)"/>
              <ellipse cx="20" cy="20" rx="17" ry="7" stroke="#06b6d4" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)"/>
              <ellipse cx="20" cy="20" rx="17" ry="7" stroke="#a855f7" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)"/>
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Animated</span>
            <span className={styles.logoSub}>Physics</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href="/laws" className={`btn btn-primary ${styles.ctaBtn}`}>
          Explore Laws →
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ''}`}
          >
            <span className={styles.mobileLinkIcon}>{link.icon}</span>
            {link.label}
          </Link>
        ))}
        <Link href="/laws" className="btn btn-primary" style={{ margin: '0.5rem 1.5rem' }}>
          Explore Laws →
        </Link>
      </div>
    </nav>
  )
}
