"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Data-Driven Matching",
      description:
        "AI-powered algorithms that understand the nuances of talent matching",
    },
    {
      number: "02",
      title: "Human Excellence",
      description: "Expert recruiters who bring the human touch to technology",
    },
    {
      number: "03",
      title: "Cost Effective",
      description:
        "Optimized recruitment process that saves time and resources",
    },
    {
      number: "04",
      title: "Swift Delivery",
      description: "Rapid talent acquisition without compromising quality",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#7ED957]/20 opacity-90" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Grid */}
          <div className="grid gap-8 sm:grid-cols-2 p-1 m-1 order-2 sm:order-2 lg:order-1">
            {" "}
            {/* order-2 by default on mobile */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden bg-black border-[#7ED957]/20 relative transition-all duration-300 hover:border-[#7ED957]/50 hover:shadow-xl hover:shadow-[#7ED957]/20 hover:-translate-y-1 rounded-md shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <span className="font-mono text-lg font-bold text-[#7ED957]">
                        {feature.number}
                      </span>
                      <h3 className="font-heading text-xl text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Text */}
          <div className="lg:pl-12 order-1 sm:order-1 lg:order-2">
            {" "}
            {/* order-1 by default on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex justify-center sm:justify-start">
                {" "}
                <Badge
                  variant="outline"
                  className="bg-[#7ED957] border-[#7ED957] text-white"
                >
                  Why Choose Us
                </Badge>
              </div>
              <h2 className="font-heading text-4xl  text-white sm:text-5xl lg:text-6xl">
                We are{" "}
                <span className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent leading-3 ">
                  talent experts
                </span>{" "}
                <span className="lg:leading-[70px]">
                  who believe in excellence.
                </span>
              </h2>
              <p className="text-lg text-zinc-400 ">
                Nothing less. Nothing more.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
