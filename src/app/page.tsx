"use client";

import { Users, ClipboardCheck, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProcessFlow } from "@/components/process-flow";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GradientCTA } from "@/components/gradient-cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section (Dark) */}
      <section className="relative overflow-hidden bg-black py-12 sm:py-16 md:py-24 lg:py-24 lg:pt-32 min-h-[500px] sm:min-h-[600px] md:min-h-[400px] text-white">
        <div className="absolute left-0 top-0 h-full w-full opacity-50">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="container relative h-full flex items-center">
          <div className="mx-auto max-w-[800px] text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-3 sm:mb-4 border-white/30 text-white text-xs sm:text-sm"
              >
                Skill. Scale. Succeed.
              </Badge>
              <h1 className=" font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
                <span className="leading-[90px]"> Bridging Skills, </span>
                <span className=" bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent">
                  Talent, and Opportunities
                </span>
              </h1>
              <p className="mx-auto mt-4 sm:mt-6 max-w-[600px] text-base sm:text-lg md:text-xl text-zinc-400">
                We bridge the gap between talent and opportunity, empowering
                growth for individuals and organizations alike.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#7ED957] hover:bg-[#7ED957]/90 rounded-md text-sm sm:text-base"
                asChild
              >
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/20 rounded-md text-sm sm:text-base"
                asChild
              >
                <Link href="https://calendly.com/hrishiraj">Book a Call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ProcessFlow Section (Light) */}
      <section className="bg-white">
        <ProcessFlow />
      </section>

      {/* WhyChooseUs Section (Dark) */}
      <WhyChooseUs />

      {/* How It Works Section (Dark) */}
      {/* <section className="bg-black text-white py-20 md:py-32 overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-[#7ED957] hover:bg-[#7ED957] text-white">
                How It Works
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
                We connect. You grow.
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Our process is designed to be simple, efficient, and effective.
                Here&#39;s how we help you find the perfect talent for your
                needs.
              </p>
            </motion.div>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Connect",
                description:
                  "Schedule a call with our team to discuss your talent needs and requirements.",
                icon: Users,
              },
              {
                number: "02",
                title: "Match",
                description:
                  "We match you with pre-vetted candidates that fit your requirements perfectly.",
                icon: Target,
              },
              {
                number: "03",
                title: "Grow",
                description:
                  "Scale your team efficiently with our ongoing support and management.",
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
                <Card className="relative overflow-hidden transition-all duration-300 hover:border-[#7ED957] hover:shadow-xl hover:-translate-y-1 bg-zinc-900 border-zinc-800 h-full rounded-md">
                  <CardContent className="p-6">
                    <div className="absolute right-2 top-2 text-6xl font-bold text-[#7ED957]/30">
                      {step.number}
                    </div>
                    <div className="mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7ED957]">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Solutions Section (Light) */}
      <section className="bg-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <Badge className="mb-2 sm:mb-4">Our Solutions</Badge>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Expert solutions for every hiring need
            </h2>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
              Get expert solutions for every talent acquisition requirement
            </p>
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Map It - Skill Access Platform",
                description:
                  "A dynamic marketplace where students showcase their skills through assessments, connecting with colleges and corporates for endless opportunities.",
                icon: ClipboardCheck,
                href: "/mapIt",
                image: "/assets/our_solutions/skillaccess_test.webp",
              },
              {
                title: "Hire It",
                description:
                  "End-to-end recruitment support to help companies find talent that aligns with their goals and culture",
                icon: UserCheck,
                href: "/hire-it",
                image: "/assets/our_solutions/hireit_image.webp",
                comingSoon: true,
              },
              {
                title: "Staff It",
                description:
                  "Flexible staff augmentation solutions to help you quickly scale your tech teams with the right talent.",
                icon: Users,
                href: "/staffIt",
                image: "/assets/our_solutions/resource_augmentation_test.webp",
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
                  className="h-full overflow-hidden  duration-300  hover:scale-[1.02] border-[#083B73]/10 transition-all  hover:border-[#083B73]/50 hover:shadow-xl hover:shadow-[#083B73]/10 hover:-translate-y-1 cursor-pointer relative rounded-md"
                  onClick={() => (window.location.href = service.href)}
                >
                  {service.comingSoon && (
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#083B73] text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                      Coming Soon
                    </div>
                  )}
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardContent className="flex h-full flex-col p-4 sm:p-6">
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#083B73]" />
                    <h3 className="mt-2 sm:mt-4 font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs sm:text-sm md:text-base text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Dark) */}
      <section className="bg-black text-white py-8 md:py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[700px] text-center">
            <Badge className="mb-2 bg-[#7ED957] hover:bg-[#7ED957]">
              Testimonials
            </Badge>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl">
              What our clients say
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Don&#39;t just take our word for it
            </p>
          </div>
          <div className="mt-8">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {[
                  {
                    quote:
                      "With Skillaccess, we’ve saved so much time on screening candidates. The automated evaluations and insightful reports made it easy to identify top candidates and streamline our hiring.",
                    author: "Protonshub Technologies",
                    role: "",
                    image: "/assets/reviews/protonshub_technologies_logo.jpg",
                  },
                  {
                    quote:
                      "Skillaccess has made recruitment much more efficient for us. The platform’s accurate skill assessments and seamless integration with our existing systems have allowed us to hire the right people faster and more effectively.",
                    author: "Qualimatrix Technologies",
                    role: "",
                    image: "/assets/reviews/qualimatrix_logo.jpg",
                  },
                  {
                    quote:
                      "For hiring from a pool of 300 candidates, Skillaccess was invaluable. The platform’s detailed assessments and easy candidate tracking features helped us efficiently hire the right people for the roles we needed to fill.",
                    author: "Acropolis Institute of Technology & Research",
                    role: "",
                    image: "/assets/reviews/acropolis_logo.jpg",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/1 lg:basis-1/1"
                  >
                    <div className="p-3 sm:p-4">
                      <Card className="border border-zinc-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-zinc-900 rounded-md">
                        <CardContent className="p-5 sm:p-6">
                          <div className="space-y-3 sm:space-y-4">
                            <p className="text-base sm:text-lg font-heading tracking-wide text-center leading-relaxed text-white">
                              &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="flex flex-col items-center gap-2">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.author}
                                width={80}
                                height={80}
                                className="rounded-full"
                              />
                              <div className="text-center">
                                <p className="font-heading text-sm sm:text-base text-white">
                                  {testimonial.author}
                                </p>
                                <p className="text-xs sm:text-sm text-zinc-400">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative bg-[#7ED957] hover:bg-[#7ED957]/90 text-white" />
                <CarouselNext className="relative bg-[#7ED957] hover:bg-[#7ED957]/90 text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* GradientCTA Section (Light) */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <GradientCTA />
        </div>
      </section>
    </div>
  );
}
