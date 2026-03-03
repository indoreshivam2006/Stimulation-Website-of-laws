import Link from 'next/link'
import styles from './Footer.module.css'

const lawLinks = [
  { href: '/laws/newton', label: "Newton's Laws" },
  { href: '/laws/kepler', label: "Kepler's Laws" },
  { href: '/laws/thermodynamics', label: 'Thermodynamics' },
  { href: '/laws/snells', label: "Snell's Law" },
  { href: '/laws/hookes', label: "Hooke's Law" },
  { href: '/laws/coulomb', label: "Coulomb's Law" },
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/laws', label: 'Physics Laws' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow}/>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <circle cx="20" cy="20" r="3" fill="#06b6d4"/>
                <ellipse cx="20" cy="20" rx="17" ry="7" stroke="#7c3aed" strokeWidth="1.5" fill="none" transform="rotate(0 20 20)"/>
                <ellipse cx="20" cy="20" rx="17" ry="7" stroke="#06b6d4" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)"/>
                <ellipse cx="20" cy="20" rx="17" ry="7" stroke="#a855f7" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)"/>
              </svg>
              <span className={styles.logoText}>Animated Physics</span>
            </Link>
            <p className={styles.tagline}>
              Making physics education interactive, visual, and accessible for everyone. Explore the universe through simulations.
            </p>
            <div className={styles.socials}>
              <a href="https://github.com/indoreshivam2006" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/shivam-indore-52a947312/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:indoreshivam2006@gmail.com" className={styles.socialLink} title="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map(l => (
                <li key={l.href}><Link href={l.href} className={styles.link}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Physics Laws */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Physics Laws</h4>
            <ul className={styles.linkList}>
              {lawLinks.map(l => (
                <li key={l.href}><Link href={l.href} className={styles.link}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>indoreshivam2006@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                <span>www.animatedphysics.com</span>
              </div>
            </div>
            <div className={styles.formula}>E = mc²</div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Animated Physics. All rights reserved. Made with ❤️ for physics enthusiasts.</p>
          <p className={styles.bottomRight}>
            <Link href="/laws">Explore Laws</Link> · <Link href="/resources">Resources</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
