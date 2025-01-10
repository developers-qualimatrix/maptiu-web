"use client"
import { Database, Zap, Building } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Database className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Extensive Talent Database</h3>
            <p className="text-gray-700">Access a vast pool of pre-screened candidates across various industries and skill sets.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Streamlined Recruitment Process</h3>
            <p className="text-gray-700">Our efficient process reduces time-to-hire without compromising on quality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Building className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
            <p className="text-gray-700">Our recruiters have deep knowledge across various sectors, ensuring the right fit for your organization.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

