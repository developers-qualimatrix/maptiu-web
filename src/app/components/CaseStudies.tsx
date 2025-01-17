"use client"
import Link from 'next/link'

const caseStudies = [
  {
    title: "Scaling IT Team for Rapid Growth",
    company: "E-commerce Giant",
    description: "How we helped an e-commerce leader scale their IT team by 200% in 6 months to support rapid business growth.",
    link: "#"
  },
  {
    title: "Specialized Talent for Fintech Innovation",
    company: "Fintech Startup",
    description: "Sourcing specialized blockchain developers for a fintech startup, enabling them to launch a revolutionary product.",
    link: "#"
  },
  {
    title: "Flexible Staffing for Seasonal Demands",
    company: "Retail Chain",
    description: "Providing flexible staffing solutions for a retail chain to meet seasonal demands, resulting in 40% cost savings.",
    link: "#"
  }
]

export default function CaseStudies() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-2">{study.company}</p>
              <p className="text-gray-700 mb-4">{study.description}</p>
              <Link href={study.link} className="text-blue-600 hover:underline">
                Read full case study
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

