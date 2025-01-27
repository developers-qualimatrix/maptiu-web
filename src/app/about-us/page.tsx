"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Lightbulb, Rocket, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4" variant="outline">
                About Maptiu
              </Badge>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">
                Transforming the Future of{" "}
                <span className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent">Work</span>
              </h1>
              <p className="mt-6 text-xl text-zinc-400">
                We&#39;re on a mission to revolutionize how companies connect with talent and manage their workforce.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden h-full rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-[#083B73]/10" />
                <h2 className="font-heading text-2xl">Our Vision</h2>
                <p className="mt-4 text-muted-foreground">
                  To be the leading partner in workforce solutions and talent acquisition, setting new standards for
                  innovation and excellence. We envision a future where:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-[#083B73] shrink-0" />
                    <span>Every company has access to the perfect talent match</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="h-6 w-6 text-[#083B73] shrink-0" />
                    <span>Geographic boundaries no longer limit career opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Rocket className="h-6 w-6 text-[#083B73] shrink-0" />
                    <span>Innovation drives continuous improvement in recruitment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden h-full rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-[#083B73]/10" />
                <h2 className="font-heading text-2xl">Our Mission</h2>
                <p className="mt-4 text-muted-foreground">
                  Bridging the gap between companies and talent through innovative solutions that empower growth and
                  success. We achieve this by:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-[#083B73] shrink-0" />
                    <span>Building lasting partnerships with clients and candidates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 text-[#083B73] shrink-0" />
                    <span>Leveraging cutting-edge technology for better matches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-[#083B73] shrink-0" />
                    <span>Maintaining a people-first approach in everything we do</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Our Culture</Badge>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl">Building Tomorrow&#39;s Workforce Today</h2>
          <p className="mt-4 text-muted-foreground">
            Our culture is built on innovation, collaboration, and a commitment to excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Innovation First",
              description: "We embrace new technologies and methodologies to stay ahead of industry trends.",
              image: "/assets/innovation_first.jpg",
            },
            {
              title: "Global Mindset",
              description: "Our diverse team brings perspectives from around the world to solve complex challenges.",
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
              <Card className="overflow-hidden rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Work Process</Badge>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl">We design. You grow</h2>
          <p className="mt-4 text-muted-foreground">Our process is as simple as possible.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Subscribe",
              description:
                "Select your plan that fits your needs, get access to Trello board within 24 hours, and start listing your requests.",
              icon: Target,
            },
            {
              number: "02",
              title: "Receive",
              description:
                "Start receiving your designs within 2-3 business days, or even sooner for smaller tasks. Yes, it can be that fast.",
              icon: Users,
            },
            {
              number: "03",
              title: "Continue",
              description:
                "Approve designs or request revisions; we're not done until you're thrilled. Your satisfaction is our commitment.",
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
              <Card className="relative overflow-hidden rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="absolute right-2 top-2 text-6xl font-bold text-muted/10">{step.number}</div>
                  <step.icon className="h-12 w-12 text-[#083B73]" />
                  <h3 className="mt-4 font-heading text-xl">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Join Us</Badge>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-muted-foreground">Partner with us and experience the future of talent acquisition.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-[#083B73] hover:bg-[#083B73]/90 rounded-md">
              <Link href="/contact-us">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-md">
            <Link href="/contact-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

