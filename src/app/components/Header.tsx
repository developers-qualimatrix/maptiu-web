"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Maptiu</Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
            <li><Link href="/" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500">Home</Link></li>
            <li><Link href="/about-us" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500">About Us</Link></li>
            <li><Link href="/skill-access" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500">SkillAccess</Link></li>
            <li><Link href="/hire-it" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500">HireIt</Link></li>
            <li><Link href="/resource-augmentation" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500">Resource Augmentation</Link></li>
            <li><Link href="/careers" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500">Careers</Link></li>
            <li><Link href="/contact-us" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

