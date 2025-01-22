"use client"

import { ArrowRight, Users, Target, Briefcase, Rocket, GraduationCap, School, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProcessFlow } from "@/components/process-flow"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProductShowcase } from "@/components/product-showcase"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { GradientCTA } from "@/components/gradient-cta"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section (Dark) */}
      <section className="relative overflow-hidden bg-black py-20 pt-24 h-[700px] text-white md:py-32">
        <div className="absolute left-0 top-0 h-full w-full opacity-50">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-[800px] text-center px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge variant="outline" className="mb-4 border-white/30 text-white">
                Innovative Talent Solutions
              </Badge>
              <h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Connecting Companies with{" "}
                <span className="bg-gradient-to-r from-[#FF4500] to-[#FF8C00] bg-clip-text text-transparent">
                  Top Talent
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-[600px] text-lg text-zinc-400 sm:text-xl">
                Our subscription-based talent solutions give you access to a dedicated team of recruitment experts.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" className="w-full sm:w-auto bg-[#FF4500] hover:bg-[#FF4500]/90 rounded-md" asChild>
                <Link href="/about-us">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/20 rounded-md"
                asChild
              >
                <Link href="/contact-us">Book a Call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ProcessFlow Section (Light) */}
      <section className="bg-[#FFF5F0]">
        <ProcessFlow />
      </section>

      {/* WhyChooseUs Section (Dark) */}
      <WhyChooseUs />

      {/* ProductShowcase Section (Light) */}
      <section className="bg-[#FFF5F0] py-12 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <ProductShowcase />
        </div>
      </section>

      {/* How It Works Section (Dark) */}
      <section className="bg-black text-white py-20 md:py-32 overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#FF4500] text-white">How It Works</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">We connect. You grow.</h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Our process is designed to be simple, efficient, and effective. Here&#39;s how we help you find the perfect
                talent for your needs.
              </p>
            </motion.div>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Connect",
                description: "Schedule a call with our team to discuss your talent needs and requirements.",
                icon: Users,
              },
              {
                number: "02",
                title: "Match",
                description: "We match you with pre-vetted candidates that fit your requirements perfectly.",
                icon: Target,
              },
              {
                number: "03",
                title: "Grow",
                description: "Scale your team efficiently with our ongoing support and management.",
                icon: Rocket,
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-zinc-900 border-zinc-800 h-full rounded-md">
                  <CardContent className="p-6">
                    <div className="absolute right-2 top-2 text-6xl font-bold text-[#FF4500]/10">{step.number}</div>
                    <div className="mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF4500]">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions Section (Light) */}
      <section className="bg-[#FFF5F0] py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <Badge className="mb-4">Our Solutions</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">Expert solutions for every hiring need</h2>
            <p className="mt-4 text-muted-foreground">Get expert solutions for every talent acquisition requirement</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SkillAccess",
                description: "AI-driven platform connecting universities, colleges, students, and companies",
                icon: Users,
                href: "/skill-access",
                image: "/assets/skillaccess_test.webp",
              },
              {
                title: "HireIt",
                description: "End-to-end recruitment process from job posting to onboarding",
                icon: Target,
                href: "/hire-it",
                image: "/assets/hireit_image.webp",
                comingSoon: true,
              },
              {
                title: "Resource Augmentation",
                description: "Flexible and scalable workforce solutions for your business",
                icon: Briefcase,
                href: "/resource-augmentation",
                image: "/assets/resource_augmentation_test.webp",
                comingSoon: true,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer relative rounded-md"
                  onClick={() => (window.location.href = service.href)}
                >
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 bg-[#FF4500] text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                      Coming Soon
                    </div>
                  )}
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <CardContent className="flex h-full flex-col p-6">
                    <service.icon className="h-12 w-12 text-[#FF4500]" />
                    <h3 className="mt-4 font-heading text-xl">{service.title}</h3>
                    <p className="mt-2 flex-1 text-muted-foreground">{service.description}</p>
                    <div className="mt-4 flex items-center text-[#FF4500]">
                      <Link href={service.href} className="flex items-center">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SkillAccess Overview Section */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">SkillAccess Platform</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">Revolutionizing Talent Acquisition</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Our AI-driven platform connects universities, colleges, students, and companies, streamlining the entire
              talent acquisition process.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GraduationCap, title: "Universities", description: "Create and manage AI-proctored assessments" },
              { icon: School, title: "Colleges", description: "Streamline admissions with pre-assessed profiles" },
              { icon: User, title: "Students", description: "Take assessments and connect with opportunities" },
              { icon: Briefcase, title: "Companies", description: "Access pre-vetted talent pool" },
            ].map((item, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 text-white relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <item.icon className="h-12 w-12 text-[#FF4500] mb-4" />
                  <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#FF4500] hover:bg-[#FF4500]/90" asChild>
              <Link href="/skill-access">Learn More About SkillAccess</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Dark) */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">What our clients say</h2>
            <p className="mt-4 text-zinc-400">Don&#39;t just take our word for it</p>
          </div>
          <div className="mt-16">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {[
                  {
                    quote:
                      "Maptiu has revolutionized our hiring process. Their AI-driven platform made finding the right talent effortless and efficient. The quality of candidates and support we receive is exceptional.",
                    author: "Sarah Chen",
                    role: " ",
                    image: "/assets/review_placeholder.png",
                  },
                  {
                    quote:
                      "The quality of candidates and the speed of hiring has improved significantly since we started working with Maptiu. Their team's dedication to understanding our needs sets them apart.",
                    author: "Michael Rodriguez",
                    role: " ",
                    image: "/assets/review_placeholder.png",
                  },
                  {
                    quote:
                      "Maptiu's resource augmentation service has been a game-changer for our project scaling needs. Their ability to quickly provide qualified talent has accelerated our growth significantly.",
                    author: "Emily Watson",
                    role: " ",
                    image: "/assets/review_placeholder.png",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                    <div className="p-6">
                      <Card className="border border-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-zinc-900 rounded-md">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <p className="text-2xl font-heading tracking-wide text-center leading-relaxed text-white">
                              &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="flex flex-col items-center gap-4">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.author}
                                width={80}
                                height={80}
                                className="rounded-full"
                              />
                              <div className="text-center">
                                <p className="font-heading text-xl text-white">{testimonial.author}</p>
                                <p className="text-zinc-400">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="relative translate-y-0 bg-[#FF4500] hover:bg-[#FF4500]/90 text-white" />
                <CarouselNext className="relative translate-y-0 bg-[#FF4500] hover:bg-[#FF4500]/90 text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* GradientCTA Section (Light) */}
      <section className="bg-[#FFF5F0] py-12 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <GradientCTA />
        </div>
      </section>

      {/* Final CTA Section (Dark) */}
      {/* <section className="bg-black text-white py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">Ready to transform your hiring?</h2>
            <p className="mt-4 text-zinc-400">Get started with Maptiu today and see the difference.</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" className="w-full sm:w-auto bg-[#FF4500] hover:bg-[#FF4500]/90 rounded-md" asChild>
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/20 rounded-md"
                asChild
              >
                <Link href="/contact-us">Book a Call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

