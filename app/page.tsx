import React from 'react'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { HowItWorks } from '@/components/sections/how-it-works'
import { SkillsNeo } from '@/components/sections/skills-neo'
import { Testimonials } from '@/components/sections/testimonials'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Hero />

      <Features />

      <SkillsNeo />

      <Testimonials />

      <Pricing />

      <FAQ />

      <Footer />
    </>
  )
}
