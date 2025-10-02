'use client'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import Image from 'next/image'

// Engagement models tailored for technical solutions projects
const plans = [
  {
    name: 'Discovery & Architecture',
    price: '3,500+',
    description: '2–3 week engagement to align on goals, risks and a pragmatic technical plan.',
    meta: {
      timeline: '2–3 weeks',
      bestFor: 'Founders/Teams before building',
    },
    features: [
      'Stakeholder workshops & requirements mapping',
      'System design and architecture diagram',
      'Tech stack and scalability recommendations',
      'Delivery plan, milestones and budget range',
      'Risk register & mitigation strategy',
    ],
  },
  {
    name: 'MVP / Feature Build',
    price: '12,000+',
    description: 'Design, build and ship a production-ready MVP or major feature with CI/CD.',
    meta: {
      timeline: '4–10 weeks',
      bestFor: 'Startups & product teams',
    },
    features: [
      'UX flows, UI system and accessible components',
      'API design, database schema, migrations',
      'Implementation with tests and monitoring',
      'Automated deployments (Preview/Prod)',
      'Hand-off docs and knowledge transfer',
    ],
    popular: true,
  },
  {
    name: 'Dedicated Engineering',
    price: '6,500/mo+',
    description: 'Ongoing development with a part-time squad to accelerate roadmap delivery.',
    meta: {
      timeline: 'Monthly retainer',
      bestFor: 'Teams needing velocity',
    },
    features: [
      'Roadmap planning and sprint execution',
      'Performance, security and accessibility upgrades',
      'Backlog triage and bug-fixing SLA',
      'Observability setup (logs, metrics, alerts)',
      'Quarterly architecture review',
    ],
  },
]

export function Pricing() {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const plansRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-12 bg-dark-bg relative overflow-hidden" id="engagement-models">
      {/* Decorative illustration in top-right corner */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none pr-[100px]">
        <Image
          src="/illu/vong-xoay.png"
          alt="Decorative illustration"
          width={540}
          height={540}
          className="opacity-15 hover:opacity-25 transition-opacity duration-300 scale-[3]"
          priority={false}
        />
      </div>


      <Container>
        <div 
          ref={headerRef.ref}
          className={`text-center mb-16 fade-in-up relative z-10 ${headerRef.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl font-bold mb-4">Engagement Models</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Project-based packages designed for modern technical solutions. Clear deliverables, predictable timelines, and collaboration built-in.</p>
        </div>

        <div 
          ref={plansRef.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-stagger relative z-10 ${plansRef.isVisible ? 'visible' : ''}`}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-dark-card/80 rounded-2xl p-8 transition-transform backdrop-blur-sm min-h-[520px] ${
                plan.popular
                  ? 'border border-accent-pink shadow-glow md:scale-[1.06] lg:scale-[1.08] p-10 z-10 md:min-h-[620px]'
                  : 'border-[0.5px] border-white/10'
              }`}
            >
              {plan.popular && (
                <>
                  {/* top glow */}
                  <div className="pointer-events-none absolute -inset-x-10 -top-24 h-40 bg-gradient-to-b from-accent-pink/50 to-transparent blur-2xl opacity-80" />
                  {/* ribbon badge */}
                  <div className="ribbon ribbon-shine">Most Popular</div>
                </>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-bold">From ${plan.price}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {('meta' in plan && (plan as any).meta?.timeline) && (
                  <span className="px-3 py-1 rounded-full bg-white/5 text-text-secondary border border-white/10 text-sm">Timeline: {(plan as any).meta.timeline}</span>
                )}
                {('meta' in plan && (plan as any).meta?.bestFor) && (
                  <span className="px-3 py-1 rounded-full bg-white/5 text-text-secondary border border-white/10 text-sm">Best for: {(plan as any).meta.bestFor}</span>
                )}
              </div>
              <p className="text-text-secondary mb-8">{plan.description}</p>
              
              <Button
                variant={plan.popular ? 'secondary' : 'tertiary'}
                className="w-full mb-8"
              >
                {plan.name === 'Dedicated Engineering' ? 'Book a call' : 'Request proposal'}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-success flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}