'use client'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { HeroBackground } from '@/components/ui/hero-background'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const portfolioItems = [
  {
    title: 'Mobile App Design',
    image: '/images/Pic.png',
    category: 'UI Design',
  },
  {
    title: 'Web Design System',
    image: '/images/Pic.png',
    category: 'Design System',
  },
  {
    title: 'Brand Identity',
    image: '/images/Pic.png',
    category: 'Branding',
  },
  {
    title: 'Landing Page',
    image: '/images/Pic.png',
    category: 'Web Design',
  },
  {
    title: 'Design System',
    image: '/images/Pic.png',
    category: 'UI Kit',
  },
  {
    title: 'Mobile UI Kit',
    image: '/images/Pic.png',
    category: 'UI Kit',
  },
  {
    title: 'Dashboard Design',
    image: '/images/Pic.png',
    category: 'Web App',
  },
  {
    title: 'E-commerce App',
    image: '/images/Pic.png',
    category: 'Mobile App',
  },
  {
    title: 'NFT Marketplace',
    image: '/images/Pic.png',
    category: 'Web3',
  },
]

const baseLogoItems = [
  { name: 'Figma', src: '/logos/1.png' },
  { name: 'Framer', src: '/logos/2.png' },
  { name: 'Sketch', src: '/logos/3.png' },
  { name: 'UI8', src: '/logos/4.png' },
  { name: 'Dribbble', src: '/logos/5.png' },
  { name: 'Adobe', src: '/logos/1.png' },
]

// Duplicate items for seamless loop
const logoItems = [...baseLogoItems, ...baseLogoItems, ...baseLogoItems]

export function Hero() {
  const heroContentRef = useScrollAnimation({ threshold: 0.1 })
  const heroImageRef = useScrollAnimation({ threshold: 0.1 })
  const portfolioRef = useScrollAnimation({ threshold: 0.1 })
  const logosRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="relative pt-20 pb-16 min-h-[1000px] overflow-hidden bg-dark-bg">
      {/* Decorative illustration moved to Features section */}
      
      <Container>
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pt-[100px]">
          {/* Left Column - Text Content */}
          <div
            ref={heroContentRef.ref}
            className={`text-center lg:text-left fade-in-left ${heroContentRef.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              One fixed fee a month gets you
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text typewriter inline-block">unlimited design</span>{' '}
              goodness.
            </h2>
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto lg:mx-0">
              Your one-stop design solution for all your creative needs —
              we'll help you bring your projects to life.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Button variant="primary" size="xl">
                See our work
              </Button>
              <Link href="/cv/me">
                <Button variant="secondary" size="xl">
                  Xem hồ sơ năng lực
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Banner GIF */}
          <div
            ref={heroImageRef.ref}
            className={`hidden lg:block fade-in-right ${heroImageRef.isVisible ? 'visible' : ''}`}
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden ml-[50px]">
              <Image
                src="/banner/herobanner.gif"
                alt="Hero Banner Animation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Creative Design Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Transform your ideas into stunning visual experiences with our professional design services
          </p>
        </div>
        {/* Portfolio Grid */}
        <div
          ref={portfolioRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-stagger ${portfolioRef.isVisible ? 'visible' : ''}`}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="absolute bottom-6 left-6">
                  <span className="text-sm text-text-secondary mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by Section */}
        <div
          ref={logosRef.ref}
          className={`mt-24 text-center fade-in-up ${logosRef.isVisible ? 'visible' : ''}`}
        >
          <p className="text-text-secondary mb-10">Trusted by leading brands</p>
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={6}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
              }}
              speed={2000}
              loop={true}
              loopAdditionalSlides={6}
              allowTouchMove={false}
              centeredSlides={false}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
              className="logo-swiper"
            >
              {logoItems.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={40}
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Background */}
        <HeroBackground />
      </Container>
    </section>
  )
}