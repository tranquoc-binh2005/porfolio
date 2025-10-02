'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Container>
        <nav className="header-blur flex items-center justify-between py-4 px-6 rounded-full mt-4 relative w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-10">
            <div className="relative w-8 h-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z" 
                  fill="url(#logoGradient)"
                />
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M8 8H24C25.1046 8 26 8.89543 26 10V22C26 23.1046 25.1046 24 24 24H8C6.89543 24 6 23.1046 6 22V10C6 8.89543 6.89543 8 8 8ZM10 12C9.44772 12 9 12.4477 9 13V19C9 19.5523 9.44772 20 10 20H22C22.5523 20 23 19.5523 23 19V13C23 12.4477 22.5523 12 22 12H10Z" 
                  fill="white"
                />
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">Lavenes</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 z-10">
            <Link href="#about" className="nav-link text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#services" className="nav-link text-white/80 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#product" className="nav-link text-white/80 hover:text-white transition-colors">
              Product
            </Link>
            <Link href="#faq" className="nav-link text-white/80 hover:text-white transition-colors">
              FAQ
            </Link>
          </div>

          {/* Language Selector & CTA Button */}
          <div className="flex items-center space-x-4 z-10">
            {/* Language Selector */}
            <div className="hidden lg:flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="text-sm">English</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6,9 12,15 18,9"/>
              </svg>
            </div>

            {/* CTA Button */}
            <Button 
              variant="primary" 
              size="lg"
              className="px-6 py-2 flex items-center space-x-2"
            >
              <span>Contact us</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
