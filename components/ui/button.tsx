'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', loading, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
          {
            // Variants
            // primary (image 1): pink gradient with wedge + shimmer
            'ribbon-cta-pink bg-[linear-gradient(90deg,#ff6a8a_0%,#ff3c6f_100%)] text-white shadow-[0_12px_24px_rgba(255,60,111,0.35)] ring-1 ring-pink-400/40 hover:brightness-110': variant === 'primary',
            // secondary (image 2): yellow ribbon style
            'ribbon-cta bg-[linear-gradient(90deg,#ffd86b_0%,#ffbe55_50%,#ffa63f_100%)] text-[#0b0b17] shadow-[0_12px_24px_rgba(255,166,63,0.35)] ring-1 ring-amber-300/40 hover:brightness-105': variant === 'secondary',
            // tertiary (image 3): subtle outline pill
            'bg-transparent text-white/90 border border-white/10 hover:border-white/20 hover:bg-white/5': variant === 'tertiary',
            
            // Sizes
            'h-9 px-5 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'default',
            'h-12 px-8 text-lg': size === 'lg',
            'h-14 px-10 text-lg': size === 'xl',

            // Loading state
            'relative !text-transparent transition-none hover:!text-transparent': loading,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {loading && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }