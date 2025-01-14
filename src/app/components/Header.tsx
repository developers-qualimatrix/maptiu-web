"use client"
import Link from 'next/link'
import { useState } from 'react'
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1550%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(163%2c 219%2c 178%2c 1)'%3e%3c/rect%3e%3cpath d='M0 0L195.73 0L0 158.05z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 158.05L195.73 0L483.46000000000004 0L0 353z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 353L483.46000000000004 0L615.6400000000001 0L0 388.65999999999997z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 388.65999999999997L615.6400000000001 0L1134.2 0L0 457.58z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L1367.84 560L1440 442.59000000000003z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 442.59000000000003L1367.84 560L1212.31 560L1440 215.01000000000002z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 215.01L1212.31 560L830.66 560L1440 188.44z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 188.44L830.6600000000001 560L360.50000000000006 560L1440 77.50999999999999z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1550'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.2
      }}
      />
      
      <nav className="container mx-auto px-4 py-4 relative">
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
            <li><Link href="/" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#22645B]">Home</Link></li>
            <li><Link href="/about-us" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#22645B]">About Us</Link></li>
            <li><Link href="/skill-access" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#22645B]">SkillAccess</Link></li>
            <li><Link href="/hire-it" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#22645B]">HireIt</Link></li>
            <li><Link href="/resource-augmentation" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#22645B]">Resource Augmentation</Link></li>
            <li><Link href="/careers" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#22645B]">Careers</Link></li>
            <li><Link href="/contact-us" className="block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#22645B]">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
