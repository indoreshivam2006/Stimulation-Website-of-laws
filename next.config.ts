import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Sim files in public/sims/ are served as-is and need to be embeddable in iframes
  // Headers are managed via vercel.json for production
}

export default nextConfig
