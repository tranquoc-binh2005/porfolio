import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: '#FF3366',
          50: '#FFE5EC',
          100: '#FFCCD9',
          200: '#FF99B3',
          300: '#FF668C',
          400: '#FF3366',
          500: '#FF0044',
          600: '#CC0036',
          700: '#990029',
          800: '#66001B',
          900: '#33000E',
        },
        // Background Colors
        background: {
          DEFAULT: '#0A0A1B',
          50: '#16162D',
          100: '#1E1E38',
          200: '#282844',
          300: '#323250',
          400: '#3C3C5C',
          500: '#464668',
          600: '#505074',
          700: '#5A5A80',
          800: '#64648C',
          900: '#6E6E98',
        },
        // Dark Background
        'dark-bg': '#0A0A1B',
        // Text Colors
        text: {
          DEFAULT: '#FFFFFF',
          primary: '#FFFFFF',
          secondary: '#8E8EA3',
          muted: '#6E6E89',
          disabled: '#4E4E65',
        },
        // Accent Colors
        accent: {
          blue: {
            DEFAULT: '#2E7DAF',
            light: '#3B8FC7',
            dark: '#256A95',
          },
          purple: {
            DEFAULT: '#7F56D9',
            light: '#9B7EE2',
            dark: '#6342C2',
          },
          pink: {
            DEFAULT: '#FF3366',
            light: '#FF668C',
            dark: '#E61E50',
          },
        },
        // Status Colors
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
        // Border Colors
        border: {
          DEFAULT: '#282844',
          light: '#323250',
          dark: '#1E1E38',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(180deg, #16162D 0%, #0A0A1B 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(22, 22, 45, 0.5), rgba(10, 10, 27, 0.5))',
        'gradient-glow': 'radial-gradient(circle at center, rgba(255, 51, 102, 0.15), transparent 70%)',
        'noise': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUAAAD8/vz08vT09PT8/Pz///+Yw9RMAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAkNJREFUOI0Vk4ty2yAQRaUGPwrYSp9hpk/wTJ/Aff//g7rLru20mbTD+OzuuXdZqbCId0r5R4k/hP1kInZIZR9pBjsHIoWRl1JhRDHgHq+UNu0p3y/3FJp4lXqj9FyKvuBrIxeqx1cuRH7hTsSv1aRxYSxEnp2JzHKEVnL6olRXL/eQ4iZoqWOpG1QKDCmwt1R/qXlx7dG0GEZGFWGrnhXEgRHxm6uD1dFK3FPNjqEXR89SyytTSiUwBKeJ8YR3uqcbB6lrlQWYwQhO/VMz2wMsZIZtcmn/8k5u4EzEXIgYxzDHHc5QqozW2cZ4g3iJQjwxB3OVv1Wqx3tGEcacMZBvlO4YZnDGJ0A+KN1zDsI5M5F5lSgQYiR+6YxPXKQPINdKL0AeXKQCsQWlF+JZxDvEK5EZiPtN6YGIBSJHIh4gfhK5APlNxALxRcQTxAMRO5DvRAogn4kUIF6IFCAeiRQgPhApQHwlsgDxQmQBYiayALEQWYBYiSxArEQWIDYiKxAbkRWIjcgKxEZkBWIjsgKxE1mB2ImsQOxEViB2IisQB5EViIPICsRBZAXiILICcRBZgTiJrECcRFYgTiIrECeRFYiLyArERWQF4iKyAnERWYG4iaxA3ERWIG4iKxA3kRWIm8gKxIPICsSDyArEg8gKxIPICsSTyArEk8gKxJPICsSTyArEk8gKxIvICsSLyArEi8gKxIvICsSLyArEQWQF4iCyAvFPZAXin8gKxD+RFYh/IisQryL/AQ1qwPvpns0WAAAAAElFTkSuQmCC')",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 51, 102, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'inner-glow': 'inset 0 2px 4px rgba(255, 255, 255, 0.05)',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config