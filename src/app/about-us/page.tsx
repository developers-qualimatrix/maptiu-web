"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-black py-20 pt-24 text-white md:py-32">
        <div className="absolute left-0 top-0 h-full w-full opacity-50">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="About Hero Background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="outline">
                About Maptiu
              </Badge>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">
                Your Partner in{" "}
                <span className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent">
                  Talent and Growth
                </span>
              </h1>
              <p className="mt-6 text-xl text-zinc-400">
                We&#39;re on a mission to revolutionize how companies connect
                with talent and manage their workforce.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Our Vision",
              content:
                "To be the leading talent solutions partner, connecting skills with opportunities and empowering growth for individuals and businesses worldwide.",
            },
            {
              title: "Our Mission",
              content:
                "To simplify talent discovery through smart assessments, seamless staffing, and strategic hiring—helping people and organizations reach their full potential.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden h-full rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 sm:p-8">
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-[#083B73]/20" />
                  <h2 className="font-heading text-2xl sm:text-3xl mb-4">{item.title}</h2>
                  <p className="text-base sm:text-lg text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <Badge className="mb-4">Our Culture</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">Building Tomorrow&apos;s Workforce Today</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Our culture is built on innovation, collaboration, and a commitment to excellence.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Excellence and Growth",
                description:
                  "We are passionate about delivering exceptional results with our valuable teamwork and continuous learnings.",
                image: "/assets/innovation_first.jpg",
              },
              {
                title: "Integrity and Inclusivity",
                description: "We prioritize transparency, fostering a diverse and supportive environment.",
                image: "/assets/global_mindset.png",
              },
              {
                title: "People-Centric",
                description: "We believe in creating lasting relationships built on trust and mutual success.",
                image: "/assets/people_centric.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full object-cover h-48"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <Badge className="mb-4">Work Process</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">We design. You grow</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Our process is as simple as possible.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Understand",
              description:
                "We begin by fully understanding your unique requirements to deliver the best talent solutions.",
              icon: Target,
            },
            {
              number: "02",
              title: "Execute",
              description:
                "We create custom strategies and move quickly to implement them, ensuring timely, effective results.",
              icon: Users,
            },
            {
              number: "03",
              title: "Support",
              description:
                "We provide continuous support and prioritize finding the right talent that aligns with your business goals.",
              icon: Heart,
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < 2 && (
                <div className="absolute right-0 top-1/2 hidden w-24 -translate-y-1/2 lg:block">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20224015-JNsZ1eVSg2jKw2Wj5k9PtVc9c8KWJN.png"
                    alt="Arrow"
                    width={96}
                    height={24}
                    className="w-full"
                  />
                </div>
              )}
              <Card className="relative overflow-hidden h-full rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="absolute right-2 top-2 text-6xl font-bold text-muted/10">{step.number}</div>
                  <step.icon className="h-12 w-12 text-[#083B73]" />
                  <h3 className="mt-4 font-heading text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl text-center">
        <Badge className="bg-[#083B73] text-white px-3 py-1 text-sm rounded-full">Join Us</Badge>
        <h2 className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl text-[#083B73]">
          Ready to Transform Your Workforce?
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Partner with us to find the right talent, drive growth, and build high-performing teams.
        </p>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#083B73] mb-4">Our Solutions:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white text-[#083B73] border border-[#083B73] py-2 px-4 rounded-lg text-lg font-medium hover:bg-[#083B73] hover:text-white cursor-pointer transition-all duration-300 hover:shadow-lg">
              Map It - SkillAccess
            </div>
            <div className="bg-white text-[#083B73] border border-[#083B73] py-2 px-4 rounded-lg text-lg font-medium hover:bg-[#083B73] hover:text-white cursor-pointer transition-all duration-300 hover:shadow-lg">
              Hire It
            </div>
            <div className="bg-white text-[#083B73] border border-[#083B73] py-2 px-4 rounded-lg text-lg font-medium hover:bg-[#083B73] hover:text-white cursor-pointer transition-all duration-300 hover:shadow-lg">
              Staff It
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#083B73] text-white hover:bg-[#083B73]/90 rounded-md transition-all duration-300 text-lg px-8 py-3"
            asChild
          >
            <Link href="/contact-us">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
    </div>
  );
}
