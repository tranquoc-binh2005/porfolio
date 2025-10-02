'use client'

import { Container } from '@/components/ui/container'
import { Background, BackgroundBlur } from '@/components/ui/background'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const testimonials = [
  {
    content: "The quality and speed of delivery is outstanding. They've become an essential part of our design workflow.",
    author: {
      name: 'Alex Rivera',
      role: 'Product Designer at Dropbox',
      image: '/images/Pic.png',
      rating: 5
    }
  },
  {
    content: "What I love most is their attention to detail and understanding of our brand. Every design is spot-on.",
    author: {
      name: 'Sarah Chen',
      role: 'Creative Director at Stripe',
      image: '/images/Pic.png',
      rating: 5
    }
  },
  {
    content: "The unlimited design model is perfect for our needs. We get high-quality designs without the overhead.",
    author: {
      name: 'Michael Park',
      role: 'Founder at TechStart',
      image: '/images/Pic.png',
      rating: 5
    }
  },
  {
    content: "Exceptional design quality and incredible turnaround time. They've transformed our brand completely.",
    author: {
      name: 'Emily Johnson',
      role: 'Marketing Director at Shopify',
      image: '/images/Pic.png',
      rating: 5
    }
  },
  {
    content: "Working with this team has been a game-changer. Their creativity and professionalism are unmatched.",
    author: {
      name: 'David Kim',
      role: 'CEO at StartupXYZ',
      image: '/images/Pic.png',
      rating: 5
    }
  },
  {
    content: "The best design service we've ever used. Fast, reliable, and the results speak for themselves.",
    author: {
      name: 'Lisa Wang',
      role: 'Brand Manager at Adobe',
      image: '/images/Pic.png',
      rating: 5
    }
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-warning' : 'text-background-200'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const headerRef = useScrollAnimation({ threshold: 0.1 })
  const testimonialsRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-12 relative overflow-hidden bg-dark-bg">
      <Container>
        <div 
          ref={headerRef.ref}
          className={`text-center mb-16 fade-in-up ${headerRef.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl font-bold mb-4">
            What clients say about us
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div 
          ref={testimonialsRef.ref}
          className={`fade-in ${testimonialsRef.isVisible ? 'visible' : ''}`}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="glass-card rounded-2xl p-8 hover-glow h-full">
                  <StarRating rating={testimonial.author.rating} />
                  <blockquote className="mt-6 mb-8">
                    <p className="text-lg leading-relaxed">"{testimonial.content}"</p>
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-border">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonial.author.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Background variant="gradient-1" intensity="light" className="rotate-180" />
          <Background variant="gradient-3" intensity="light" />
          <Background variant="dots" className="opacity-20" />
          <BackgroundBlur />
        </div>
      </Container>
    </section>
  )
}