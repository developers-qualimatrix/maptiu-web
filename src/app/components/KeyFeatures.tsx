"use client"
import { Brain, BarChart2, HeadphonesIcon } from 'lucide-react'

export default function KeyFeatures() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Brain className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">AI-driven Matching System</h3>
            <p className="text-gray-700">Our advanced AI algorithms ensure the perfect match between talent and opportunities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart2 className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
            <p className="text-gray-700">Gain insights into student performance and corporate hiring trends with our comprehensive analytics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <HeadphonesIcon className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-700">Our team provides continuous support for students, colleges, and corporates throughout the process.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

