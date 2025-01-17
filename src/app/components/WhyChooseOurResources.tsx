"use client"
import { Sliders, TrendingUp, DollarSign } from 'lucide-react'

export default function WhyChooseOurResources() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Resources?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Sliders className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Flexible Engagement Models</h3>
            <p className="text-gray-700">Choose from various engagement models to suit your project needs and budget.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TrendingUp className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">On-demand Scalability</h3>
            <p className="text-gray-700">Quickly scale your team up or down based on project requirements and timelines.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Cost-effective Solutions</h3>
            <p className="text-gray-700">Reduce overhead costs associated with full-time hiring while maintaining high-quality output.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

