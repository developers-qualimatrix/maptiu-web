"use client"
import Image from 'next/image'

const testimonials = [
  {
    name: "John Doe",
    role: "HR Manager, Tech Corp",
    image: "/placeholder.svg?height=100&width=100",
    quote: "SkillAccess has revolutionized our hiring process. We've found amazing talent that fits perfectly with our company culture."
  },
  {
    name: "Jane Smith",
    role: "Recent Graduate",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Thanks to SkillAccess, I landed my dream job right out of college. The platform made it easy to showcase my skills to top companies."
  },
  {
    name: "Mike Johnson",
    role: "Dean, University of Innovation",
    image: "/placeholder.svg?height=100&width=100",
    quote: "SkillAccess has been a game-changer for our students. It's opened up incredible opportunities and improved our job placement rates significantly."
  }
]

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What People Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

