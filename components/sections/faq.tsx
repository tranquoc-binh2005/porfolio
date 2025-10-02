'use client'

import { Container } from '@/components/ui/container'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'

const faqs = [
  {
    question: 'What type of designs can I request?',
    answer: 'You can request any type of design including websites, mobile apps, logos, branding materials, social media graphics, and more. Our team is versatile and can handle various design needs.'
  },
  {
    question: 'How fast will I receive my designs?',
    answer: 'Delivery time varies by plan. Standard plan delivers in ~48h, Premium in ~24h, and Premium+ in ~12h per request. Complex projects may take longer.'
  },
  {
    question: 'What if I don\'t like the design?',
    answer: 'No problem! We offer unlimited revisions until you\'re completely satisfied with the design. Just provide your feedback and we\'ll make the necessary changes.'
  },
  {
    question: 'Can I pause or cancel my subscription?',
    answer: 'Yes, you can pause or cancel your subscription at any time. You\'ll continue to have access until the end of your current billing period.'
  },
  {
    question: 'Do you offer custom illustrations?',
    answer: 'Yes, custom illustrations are included in our Premium and Premium+ plans. Standard plan members can request illustrations for an additional fee.'
  },
  {
    question: 'What files will I receive?',
    answer: 'You\'ll receive all source files in their native formats (Figma, Sketch, etc.) along with exported assets in common formats like PNG, JPG, SVG, and PDF.'
  },
  {
    question: 'How many brands can I add?',
    answer: 'All plans include support for unlimited brands. You can manage multiple brand profiles and request designs for any of them.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const faqsRef = useScrollAnimation({ threshold: 0.1 })
  const ctaRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-12 bg-dark-bg">
      <Container>
        <div 
          ref={headerRef.ref}
          className={`text-center mb-16 fade-in-up ${headerRef.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Everything you need to know about our design subscription service
          </p>
        </div>

        <div 
          ref={faqsRef.ref}
          className={`max-w-3xl mx-auto divide-y divide-dark-border fade-in ${faqsRef.isVisible ? 'visible' : ''}`}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="h-6 w-6 text-accent-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={cn(
                  'mt-4 text-text-secondary',
                  openIndex === index ? 'block' : 'hidden'
                )}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div 
            ref={ctaRef.ref}
            className={`bg-dark-card rounded-2xl p-12 max-w-3xl mx-auto border border-dark-border fade-in-scale ${ctaRef.isVisible ? 'visible' : ''}`}
          >
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-8">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <Button variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
