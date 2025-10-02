'use client'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { RadarChart } from '@/components/ui/radar-chart'
import { Background, BackgroundBlur, BackgroundGrid } from '@/components/ui/background'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'

type SkillCategory = {
  title: string
  level: number
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    level: 90,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    level: 75,
    skills: ['Node.js', 'Express', 'REST', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'DevOps & Tools',
    level: 70,
    skills: ['Git/GitHub', 'Vercel', 'Docker (basic)', 'CI/CD', 'Testing'],
  },
  {
    title: 'UI/UX',
    level: 80,
    skills: ['Responsive Design', 'Design Systems', 'Accessibility (a11y)', 'Motion'],
  },
]

export function HowItWorks() {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const gridRef = useScrollAnimation({ threshold: 0.1 })
  const ctaRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-12 relative overflow-hidden bg-dark-bg">
      <Container>
        <div
          ref={headerRef.ref}
          className={`text-center mb-16 fade-in-up ${headerRef.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl font-bold mb-4">Web Developer Skills</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A balanced stack across frontend, backend, and product thinking
          </p>
        </div>

        <div
          ref={gridRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 fade-in-stagger ${gridRef.isVisible ? 'visible' : ''}`}
        >
          {/* Radar Card */}
          <div className="glass-card rounded-2xl p-8 md:col-span-2 lg:col-span-1 relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold">Main Skills</h3>
              <Button variant="tertiary" className="backdrop-blur-sm">See more</Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <RadarChart
                  metrics={[
                    { label: 'Frontend', value: 92 },
                    { label: 'Backend', value: 76 },
                    { label: 'DevOps', value: 64 },
                    { label: 'UI/UX', value: 84 },
                    { label: 'Testing', value: 70 },
                  ]}
                  levels={5}
                  size={320}
                  centerValue={64}
                />
              </div>
              <div className="flex-1 w-full grid grid-cols-2 gap-3">
                <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/15 text-emerald-300 border border-emerald-400/20 inline-flex items-center gap-2">
                  Balance
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/15 text-emerald-300 border border-emerald-400/20 inline-flex items-center gap-2">
                  Flexibility
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="col-span-2 px-4 py-2 rounded-xl bg-emerald-500/15 text-emerald-200 border border-emerald-400/20 flex items-center justify-between">
                  <span>Stealth</span>
                  <span className="text-right"><span className="text-2xl font-bold">2</span> points</span>
                </span>
              </div>
            </div>
          </div>

          {/* Category cards */}
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 hover-glow">
              <div className="mb-6">
                <span className="inline-block text-primary text-sm font-semibold mb-2">Category</span>
                <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-secondary">Proficiency</span>
                    <span className="text-sm font-semibold">{cat.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"
                      style={{ width: `${cat.level}%` }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/90"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div
            ref={ctaRef.ref}
            className={`glass-card rounded-2xl p-12 text-center max-w-3xl mx-auto fade-in-scale ${ctaRef.isVisible ? 'visible' : ''}`}
          >
            <h3 className="text-2xl font-bold mb-4">Need a developer for your project?</h3>
            <p className="text-text-secondary mb-8">Let's collaborate to ship fast, accessible, and beautiful web apps.</p>
            <Button variant="primary" size="xl">Contact me</Button>
          </div>

          <div className="absolute -top-12 -left-12">
            <div className="relative w-24 h-24">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                <circle cx="48" cy="48" r="48" fill="url(#paint0_radial)" fillOpacity="0.2"/>
                <defs>
                  <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48 48) rotate(90) scale(48)">
                    <stop stopColor="#FF3366"/>
                    <stop offset="1" stopColor="#FF3366" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8">
            <div className="relative w-16 h-16">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#paint1_radial)" fillOpacity="0.2"/>
                <defs>
                  <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 32) rotate(90) scale(32)">
                    <stop stopColor="#7F56D9"/>
                    <stop offset="1" stopColor="#7F56D9" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <Background variant="gradient-2" className="opacity-30" />
          <Background variant="lines" className="opacity-20" />
          <BackgroundGrid className="opacity-10" />
          <BackgroundBlur />
        </div>
      </Container>
    </section>
  )
}