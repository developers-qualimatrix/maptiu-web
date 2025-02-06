"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "End-to-End Solutions",
      description:
        "From skill assessments to staffing and hiring, we cover the entire talent lifecycle.",
    },
    {
      number: "02",
      title: "Speed Meets Precision",
      description: "Expert recruiters who bring the human touch to technology.",
    },
    {
      number: "03",
      title: "Tailored for You",
      description:
        "Customized talent strategies that align with your unique business needs.",
    },
    {
      number: "04",
      title: "Seamless Connections",
      description:
        "A strong network of students, colleges, and corporates for unmatched opportunities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#7ED957]/20 opacity-90" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left Column - Grid */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 p-1 m-1 order-2 lg:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden h-auto sm:h-48 bg-black border-[#7ED957]/20 relative transition-all duration-300 hover:border-[#7ED957]/50 hover:shadow-xl hover:shadow-[#7ED957]/20 hover:-translate-y-1 rounded-md shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-2">
                      <span className="font-mono text-base sm:text-lg font-bold text-[#7ED957]">
                        {feature.number}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl text-white">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Text */}
          <div className="lg:pl-6 xl:pl-12 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex justify-center sm:justify-start">
                <Badge
                  variant="outline"
                  className="bg-[#7ED957] border-[#7ED957] text-white text-xs sm:text-sm"
                >
                  Why Choose Us
                </Badge>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Because{" "}
                <span className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent">
                  Talent Deserves
                </span>{" "}
                <span className="block sm:inline">
                  the <br className="hidden sm:inline" /> Right Match.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-400">
                We don&apos;t just connect people—we create opportunities. Our
                talent solutions are designed to help businesses grow and
                individuals thrive, with a focus on efficiency, quality, and the
                perfect fit every time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
