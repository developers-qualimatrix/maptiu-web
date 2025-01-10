"use client"
import Link from 'next/link'

export default function OurSolutions() {
  return (
    <section className="py-12 h-[60vh] content-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">SkillAccess</h3>
            <p className="mb-4">Connect top talent with leading corporates through our AI-driven platform.</p>
            <Link href="/skill-access" className="text-blue-600 hover:underline">Learn more</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">HireIt</h3>
            <p className="mb-4">Your trusted partner for end-to-end talent acquisition solutions.</p>
            <Link href="/hire-it" className="text-blue-600 hover:underline">Learn more</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Resource Augmentation</h3>
            <p className="mb-4">Scale your workforce with ease using our flexible engagement models.</p>
            <Link href="/resource-augmentation" className="text-blue-600 hover:underline">Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

