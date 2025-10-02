'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Background, BackgroundBlur, BackgroundGrid } from '@/components/ui/background'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { RadarChart } from '@/components/ui/radar-chart'
import { Modal } from '@/components/ui/modal'
import { SkillIcon } from '@/components/ui/skill-icons'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
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
              <p className="text-text-secondary mt-2 max-w-2xl">Giải pháp web hiện đại tập trung vào hiệu năng, khả năng mở rộng và trải nghiệm người dùng — từ kiến trúc đến triển khai.</p>
            </div>
            <Button variant="secondary" size="lg">Xem hồ sơ năng lực</Button>
          </div>
        </div>

        {/* Neo layout */}
        <div
          ref={gridRef.ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in-stagger ${gridRef.isVisible ? 'visible' : ''}`}
        >
          {/* Left: Large radar panel */}
          <div className="rounded-3xl p-6 md:p-8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] border border-white/10 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)] relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">Core Capabilities</h3>
              <Button 
                variant="tertiary" 
                className="backdrop-blur-sm"
                onClick={() => setIsModalOpen(true)}
              >
                Chi tiết
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <RadarChart
                metrics={[
                  { label: 'Web Platforms', value: 92 },
                  { label: 'APIs & Data', value: 80 },
                  { label: 'Cloud & DevOps', value: 76 },
                  { label: 'UX & A11y', value: 85 },
                  { label: 'Quality', value: 72 },
                ]}
                levels={5}
                size={360}
                centerValue={68}
              />
            </div>
            <div className="absolute left-6 bottom-6 flex gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">Performance</span>
              <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">Scalability</span>
            </div>
            {/* Removed playful score badge for a more professional tone */}
          </div>

          {/* Right: slim stacked cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="rounded-3xl p-6 md:p-7 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] border border-white/10 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
                <span className="text-accent-pink text-sm font-semibold">Category</span>
                <h3 className="text-2xl font-bold mt-1">{cat.title}</h3>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                    <span>Proficiency</span>
                    <span className="text-white/80 font-semibold">{cat.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-[linear-gradient(90deg,#ff6cf6_0%,#b968ff_50%,#6ea8ff_100%)] rounded-full" style={{ width: `${cat.level}%` }} />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
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

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Background variant="gradient-2" className="opacity-30" />
          <Background variant="lines" className="opacity-10" />
          <BackgroundGrid className="opacity-10" />
          <BackgroundBlur />
        </div>
      </Container>

      {/* Skills Detail Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Chi tiết Năng lực Kỹ thuật"
      >
        <div className="space-y-8">
          {/* Overview */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Tổng quan Năng lực</h3>
            <p className="text-text-secondary">
              Chuyên gia phát triển web full-stack với kinh nghiệm 5+ năm, tập trung vào các giải pháp hiện đại, 
              hiệu năng cao và trải nghiệm người dùng tối ưu.
            </p>
          </div>

          {/* Detailed Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.map((category) => (
              <div key={category.title} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold">{category.title}</h4>
                  <span className="text-2xl font-bold text-accent-pink">{category.level}%</span>
                </div>
                
                <div className="mb-4">
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-[linear-gradient(90deg,#ff6cf6_0%,#b968ff_50%,#6ea8ff_100%)] rounded-full transition-all duration-1000" 
                      style={{ width: `${category.level}%` }} 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-accent-pink">Kỹ năng chuyên môn:</h5>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill} 
                        className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20 text-white/90"
                      >
                        <SkillIcon skill={skill} className="w-4 h-4" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience details based on category */}
                <div className="mt-4 text-sm text-text-secondary">
                  {category.title === 'Web Platforms' && (
                    <p>Kinh nghiệm xây dựng ứng dụng web responsive, tối ưu SEO và performance với React ecosystem.</p>
                  )}
                  {category.title === 'APIs & Data' && (
                    <p>Thiết kế và phát triển API RESTful/GraphQL, quản lý database và caching strategies.</p>
                  )}
                  {category.title === 'Cloud & DevOps' && (
                    <p>Triển khai và quản lý infrastructure trên cloud, CI/CD pipelines và monitoring systems.</p>
                  )}
                  {category.title === 'UX & Accessibility' && (
                    <p>Thiết kế giao diện thân thiện, đảm bảo accessibility và responsive design.</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-accent-pink/10 to-accent-blue/10 rounded-2xl p-6 border border-accent-pink/20">
            <h4 className="text-lg font-bold mb-3">Điểm mạnh nổi bật</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-pink mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold">Performance Optimization</h5>
                  <p className="text-sm text-text-secondary">Tối ưu hóa tốc độ tải trang và trải nghiệm người dùng</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold">Scalable Architecture</h5>
                  <p className="text-sm text-text-secondary">Thiết kế kiến trúc có thể mở rộng và bảo trì dễ dàng</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold">Modern Technologies</h5>
                  <p className="text-sm text-text-secondary">Cập nhật và áp dụng các công nghệ mới nhất</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold">Code Quality</h5>
                  <p className="text-sm text-text-secondary">Viết code sạch, có cấu trúc và dễ đọc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  )
}


