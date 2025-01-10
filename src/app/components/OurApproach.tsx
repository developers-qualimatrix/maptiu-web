"use client"
import { Search, Users, Briefcase } from 'lucide-react'

export default function OurApproach() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Search className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Understand Client Needs</h3>
            <p className="text-gray-700">We start by thoroughly understanding your project requirements and organizational culture.</p>
          </div>
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Skilled Professional Matching</h3>
            <p className="text-gray-700">We carefully select professionals whose skills and experience align perfectly with your needs.</p>
          </div>
          <div className="text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-700">Our professionals are prepared to integrate smoothly into your team and start contributing immediately.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

