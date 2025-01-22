"use client"

import { motion } from "framer-motion"
import { Badge } from "./ui/badge"

export function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Data-Driven Matching",
      description: "AI-powered algorithms that understand the nuances of talent matching",
    },
    {
      number: "02",
      title: "Human Excellence",
      description: "Expert recruiters who bring the human touch to technology",
    },
    {
      number: "03",
      title: "Cost Effective",
      description: "Optimized recruitment process that saves time and resources",
    },
    {
      number: "04",
      title: "Swift Delivery",
      description: "Rapid talent acquisition without compromising quality",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#FF4500]/20 opacity-90" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="space-y-2">
                  <span className="font-mono text-lg font-bold text-[#FF4500]">{feature.number}</span>
                  <h3 className="font-heading text-xl text-white">{feature.title}</h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Text */}
          <div className="lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge variant="outline" className="border-[#FF4500] text-[#FF4500]">
                Why Choose Us
              </Badge>
              <h2 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                We are{" "}
                <span className="bg-gradient-to-r from-[#FF4500] to-[#FF8C00] bg-clip-text text-transparent">
                  talent experts
                </span>{" "}
                who believe in excellence.
              </h2>
              <p className="text-lg text-zinc-400">Nothing less. Nothing more.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

