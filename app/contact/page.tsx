'use client'
import { useState } from 'react'
import styles from './page.module.css'

const faqs = [
  { icon: '🎓', title: 'Educational Use', desc: 'Yes! Our simulations are free to use for educational purposes in classrooms and personal learning.' },
  { icon: '💻', title: 'Technical Support', desc: 'Having issues? Contact us with details about your browser and operating system.' },
  { icon: '💡', title: 'Feature Requests', desc: 'We welcome suggestions! Share your ideas for new simulations or improvements.' },
  { icon: '🤝', title: 'Contribute', desc: "Interested in contributing? We're open to collaborations and partnerships." },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formState
    window.open(`mailto:indoreshivam2006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`)
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      <div className="page-hero">
        <div className="container text-center">
          <p className="section-eyebrow">✉ Contact</p>
          <h1>Get in <span className="text-gradient-cyan">Touch</span></h1>
          <p style={{ maxWidth: 480, margin: '1rem auto 0' }}>
            Have questions, suggestions, or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>

        {/* FAQs */}
        <div className={styles.faqGrid}>
          {faqs.map((f, i) => (
            <div key={i} className={styles.faqCard}>
              <span className={styles.faqIcon}>{f.icon}</span>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Main contact area */}
        <div className={styles.contactGrid}>
          {/* Form */}
          <div className={styles.formCard}>
            <h2>✉ Send Us a Message</h2>
            {sent ? (
              <div className={styles.successMsg}>
                <span>✓</span>
                Message opened in your email client. Thank you!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" className="form-input" value={formState.name} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="your.email@example.com" className="form-input" value={formState.email} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" required placeholder="What is this about?" className="form-input" value={formState.subject} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Write your message here..." className="form-input" rows={5} value={formState.message} onChange={handleChange} style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  ✈ Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className={styles.infoCard}>
            <h2>📍 Contact Information</h2>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>✉</span>
                <div>
                  <h4>Email</h4>
                  <p>indoreshivam2006@gmail.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🌐</span>
                <div>
                  <h4>Website</h4>
                  <p>www.animatedphysics.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⏱</span>
                <div>
                  <h4>Response Time</h4>
                  <p>We typically respond within 24–48 hours</p>
                </div>
              </div>
            </div>

            <div className={styles.divider}/>
            <h3>Connect With Us</h3>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/in/shivam-indore-52a947312/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/indoreshivam2006" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </div>

            <div className={styles.formulaDecor}>
              <span>∇ · E = ρ/ε₀</span>
              <span>F = ma</span>
              <span>E = hν</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
