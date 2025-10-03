'use client'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { SkillIcon } from '@/components/ui/skill-icons'
import Link from 'next/link'

type SkillCategory = {
  title: string
  level: number
  skills: string[]
}

// Capabilities tailored for technical solutions services
const CATEGORIES: SkillCategory[] = [
  { title: 'Web Platforms', level: 92, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'] },
  { title: 'APIs & Data', level: 80, skills: ['Node.js', 'REST/GraphQL', 'Prisma', 'PostgreSQL', 'Caching'] },
  { title: 'Cloud & DevOps', level: 76, skills: ['Vercel', 'Docker', 'CI/CD', 'Monitoring', 'SRE basics'] },
  { title: 'UX & Accessibility', level: 85, skills: ['Design Systems', 'A11y (WCAG)', 'Responsive', 'Motion UI'] },
]

export function SkillsNeo() {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const gridRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-16 relative overflow-hidden bg-dark-bg">
      <Container>
        {/* Header */}
        <div
          ref={headerRef.ref}
          className={`mb-10 fade-in-up ${headerRef.isVisible ? 'visible' : ''}`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Capabilities</h2>
              <p className="text-text-secondary mt-2 max-w-2xl">Modern web solutions focused on performance, scalability, and user experience — from architecture to deployment.</p>
            </div>
            <Link href="/cv/me">
              <Button variant="secondary" size="lg">View Capability Profile</Button>
            </Link>
          </div>
        </div>

        {/* Neo layout */}
        <div
          ref={gridRef.ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in-stagger ${gridRef.isVisible ? 'visible' : ''}`}
        >
          {/* Left: Simple overview panel (clean, minimal) */}
          <div className="rounded-3xl p-6 md:p-8 bg-white/5 border border-white/10 relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">Core Capabilities</h3>
            </div>
            <p className="text-text-secondary mb-6">
              Focus on web platforms, APIs & data, cloud operations, and user experience.
            </p>
            <ul className="space-y-2 text-white/80">
              <li>• Web Platforms (React, Next.js, TypeScript)</li>
              <li>• APIs & Data (Node.js, REST/GraphQL, PostgreSQL)</li>
              <li>• Cloud & DevOps (Vercel, Docker, CI/CD)</li>
              <li>• UX & Accessibility (Design Systems, Responsive)</li>
            </ul>
          </div>

          {/* Right: slim stacked cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="rounded-3xl p-6 md:p-7 bg-white/5 border border-white/10">
                <span className="text-text-secondary text-sm font-medium">Category</span>
                <h3 className="text-2xl font-bold mt-1">{cat.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <div key={s} className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/90">
                      <SkillIcon skill={s} className="w-4 h-4" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>


    </section>
  )
}


