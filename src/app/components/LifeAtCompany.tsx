"use client"
import Image from 'next/image'

export default function LifeAtCompany() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Life at Maptiu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Team at work"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Culture</h3>
            <p className="text-gray-700 mb-4">
              At Maptiu, we foster a culture of innovation, collaboration, and continuous learning. Our diverse team is passionate about solving complex problems and making a positive impact in the world of talent acquisition and workforce management.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Competitive salary and equity packages</li>
              <li>Flexible work arrangements</li>
              <li>Comprehensive health and wellness benefits</li>
              <li>Professional development opportunities</li>
              <li>Regular team building and social events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

