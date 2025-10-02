import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PageBackground } from '@/components/ui/page-background'
import { Header } from '@/components/ui/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Design Subscription Landing Page',
  description: 'A beautiful landing page for design subscription service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-slate-950">
        <Header />
        <main className="min-h-screen relative">
          {/* <PageBackground /> */}
          {children}
        </main>
      </body>
    </html>
  )
}
