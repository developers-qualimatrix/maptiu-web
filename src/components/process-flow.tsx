"use client";

import { motion } from "framer-motion";
import { Rocket, Clock, Users, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function ProcessFlow() {
  const processes = [
    {
      icon: Clock,
      title: "Swift Response",
      description:
        "We respond to your talent needs within 24 hours, ensuring no time is wasted in your hiring process.",
      gradient: "from-[#083B73] to-[#083B73]",
    },
    {
      icon: Target,
      title: "Precise Matching",
      description:
        "Our AI-driven platform analyzes requirements to find the perfect candidate matches for your needs.",
      gradient: "from-[#083B73] to-[#083B73]",
    },
    {
      icon: Users,
      title: "Expert Screening",
      description:
        "Our recruitment experts conduct thorough assessments to ensure quality candidates.",
      gradient: "from-[#083B73] to-[#083B73]",
    },
    {
      icon: Rocket,
      title: "Quick Deployment",
      description:
        "Streamlined onboarding process gets your new talent operational in record time.",
      gradient: "from-[#083B73] to-[#083B73]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
                <div className="flex justify-center sm:justify-start">
                <Badge
                  variant="outline"
                  className="border-[#083B73] text-white bg-[#083B73]"
                >
                  Our Process Flow
                </Badge>
                </div>
              <h2 className="mt-6 font-heading text-4xl leading-tight text-black sm:text-5xl lg:text-6xl">
                We are a{" "}
                <span className="bg-gradient-to-r from-[#083B73] to-[#083B73] bg-clip-text text-transparent">
                  talent solutions
                </span>{" "}
                agency that combines expertise with technology.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Our streamlined process ensures efficient talent acquisition,
                combining human expertise with cutting-edge technology to
                deliver exceptional results.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Process Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden bg-white border-[#083B73]/10 transition-all duration-300 hover:border-[#083B73]/50 hover:shadow-xl hover:shadow-[#083B73]/20 hover:-translate-y-1 rounded-md shadow-lg">
                  <CardContent className="p-6 group-hover:h-auto h-48 transition-all">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-[#083B73]`}
                    >
                      <process.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading text-xl text-[#083B73]">
                      {process.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
