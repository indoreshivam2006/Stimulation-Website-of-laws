import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Animated Physics — Interactive Learning Platform',
  description: 'Discover physics through interactive simulations. Explore Newton\'s Laws, Kepler\'s Laws, Thermodynamics, Snell\'s Law, Hooke\'s Law, and Coulomb\'s Law with real-time animations.',
  keywords: 'physics, education, interactive, simulations, Newton, Kepler, thermodynamics, Snell, Hooke, Coulomb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <Navbar />
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
