'use client'

import { Container } from '@/components/ui/container'
import { Background, BackgroundBlur } from '@/components/ui/background'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'

const features = [
  {
    title: 'Top Quality',
    description: 'A design wizard that delivers top-notch masterpieces whenever you crave it!',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 32 32">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3l4.326 8.557L29 12.938l-6.5 6.175L24 27l-8-4.105L8 27l1.5-7.887L3 12.937l8.674-1.38L16 3z"/>
      </svg>
    ),
  },
  {
    title: 'Super Speedy',
    description: 'Transform your design into review-ready perfection in only a 3-5 business days, on average.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 32 32">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11z"/>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 9v7l4.5 4.5"/>
      </svg>
    ),
  },
  {
    title: 'Fix Monthly Rate',
    description: 'No more hidden fees or surprise charges - you\'ll pay the exact same amount every single month.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 32 32">
        <rect x="8" y="8" width="4" height="16" rx="1" fill="currentColor"/>
        <rect x="14" y="12" width="4" height="12" rx="1" fill="currentColor"/>
        <rect x="20" y="6" width="4" height="18" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Flexible',
    description: 'Upgrade, downgrade, cancel, or hit pause of subscription services, always ready to accommodate your ever-changing needs.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 32 32">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v16M8 16h16"/>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l8 8-8 8M16 24l-8-8 8-8"/>
      </svg>
    ),
  },
  {
    title: 'Trello Collabs',
    description: 'Invite us to your Trello board, and we\'ll be your ultimate collaboration BFFs. Working alongside you like we\'re in the same room.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 32 32">
        <rect x="6" y="6" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Money-back guarantee',
    description: 'We\'re pretty sure this won\'t happen, but if it doesn\'t tickle your fancy within a week, we\'ll gladly give your money back.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 32 32">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2L4 8v8c0 8 4 12 12 12s12-4 12-12V8l-12-6z"/>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16l4 4 8-8"/>
      </svg>
    ),
  },
]

export function Features() {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const featuresRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-12 relative overflow-hidden bg-dark-bg">

      <Container>
        {/* Header with fade in effect */}
        <div 
          ref={headerRef.ref}
          className={`text-center mb-16 fade-in-up ${headerRef.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold mb-4">
            Awesome Membership Perks
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            With a DIVADSGN subscription, you'll get stress-free design like magic, delivering consistent quality at a steady price.
          </p>
        </div>

        {/* Features grid with staggered animation */}
        <div 
          ref={featuresRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-stagger ${featuresRef.isVisible ? 'visible' : ''}`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-glow border border-cyan-400/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}