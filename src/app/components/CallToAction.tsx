"use client"
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Talent Acquisition?</h2>
        <p className="mb-8 text-xl">Join SkillAccess today and connect with top talent or find your dream opportunity.</p>
        <div className="space-x-4">
          <Link href="/contact-us" className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold inline-block hover:bg-gray-100 transition-colors">
            Get Started
          </Link>
          <Link href="/about-us" className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-bold inline-block hover:bg-blue-700 transition-colors">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

