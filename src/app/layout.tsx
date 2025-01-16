import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maptiu - Connecting Companies with Talent Innovatively',
  description: 'Maptiu bridges the gap between companies, talent, and resources, offering innovative solutions like SkillAccess, HireIt, and Resource Augmentation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Font link here */}
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

