"use client";
import { ProductShowcase } from "@/components/product-showcase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  BarChart,
  Zap,
  CheckCircle,
  GraduationCap,
  School,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MapItPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-black py-20 pt-24 text-white md:py-32 md:pt-36">
        <div className="absolute left-0 top-0 h-full w-full opacity-50">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          /> */}
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
                SkillAccess Platform
              </Badge>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">
                Explore the Power of{" "}
                <span className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent">
                  SkillAccess
                </span>
              </h1>
              <p className="mt-6 text-xl text-zinc-400">
                SkillAccess unlocks endless possibilities for skill development
                and learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center">
            <Badge className="w-fit mb-4 text-sm sm:text-base">
              SkillAccess Platform
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              AI-Driven Talent Acquisition for Universities, Colleges, and
              Corporates
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              Our comprehensive platform connects students, educational
              institutions, and companies through advanced AI-powered
              assessments and matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#083B73] hover:bg-[#083B73]/90 rounded-md text-white"
                asChild
              >
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-md border-[#083B73] text-[#083B73] hover:bg-[#083B73]/10"
                asChild
              >
                <Link href="https://calendly.com/hrishiraj">Schedule Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -left-4 -top-4 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full bg-[#083B73]/10 lg:-left-8 lg:-top-8" />
            <Image
              src="/assets/skill_access/skillaccess_dashboard.png"
              alt="SkillAccess Platform Interface"
              width={600}
              height={400}
              className="relative rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* ProductShowcase Section (Light) */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <ProductShowcase />
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16">
          How It Works
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-lg transition-all duration-300 hover:shadow-lg border-[#083B73]/10 hover:border-[#083B73]/50  hover:shadow-[#083B73]/20 hover:-translate-y-1">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl mb-4">
                For Corporates
              </h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Access a pool of highly skilled students.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Customizable test templates
                  </span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Real-time monitoring
                  </span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Comprehensive analytics
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20 ">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl mb-4">
                For Colleges
              </h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Provide students with access to top opportunities.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Applicant evaluation
                  </span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Automated admissions
                  </span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">College listing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl mb-4">
                For Students
              </h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Discover internships and job openings.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Easy test registration
                  </span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Instant result access
                  </span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#083B73] flex-shrink-0" />
                  <span className="text-sm sm:text-base">College matching</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SkillAccess Overview Section */}
      <section className="bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4">SkillAccess Platform</Badge>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Revolutionizing Talent Acquisition
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
              Our AI-driven platform connects universities, colleges, students,
              and companies, streamlining the entire talent acquisition process.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Universities",
                description: "Create and manage AI-proctored assessments",
              },
              {
                icon: School,
                title: "Colleges",
                description: "Streamline admissions with pre-assessed profiles",
              },
              {
                icon: User,
                title: "Students",
                description: "Take assessments and connect with opportunities",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 text-white relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                  <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#083B73] mb-4" />
                  <h3 className="font-heading text-lg sm:text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 sm:mt-16">
            <Button
              size="lg"
              className="bg-[#083B73] hover:bg-[#083B73]/90 text-white px-6 py-3 text-sm sm:text-base"
              asChild
            >
              <Link href="/mapIt">Learn More About SkillAccess</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16">
            Key Features
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "AI-driven Matching",
                description:
                  "Advanced algorithms for perfect candidate-opportunity fit",
              },
              {
                icon: BarChart,
                title: "Performance Analytics",
                description: "In-depth insights for all stakeholders",
              },
              {
                icon: Zap,
                title: "Dedicated support",
                description: "Track student participation and test progress",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-[#083B73]/10 hover:border-[#083B73]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-md hover:shadow-[#083B73]/20"
              >
                <CardContent className="flex flex-col items-center p-6 sm:p-8 text-center h-full">
                  <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#083B73] mb-4" />
                  <h3 className="font-heading text-lg sm:text-xl mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16">
          Success Stories
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Protonshub Technologies",
              role: "",
              image: "/assets/reviews/protonshub_technologies_logo.jpg",
              quote:
                "With Skillaccess, we’ve saved so much time on screening candidates. The automated evaluations and insightful reports made it easy to identify top candidates and streamline our hiring.",
            },
            {
              name: "Acropolis Institute of Technology & Research",
              role: "",
              image: "/assets/reviews/acropolis_logo.jpg",
              quote:
                "For hiring from a pool of 300 candidates, Skillaccess was invaluable. The platform’s detailed assessments and easy candidate tracking features helped us efficiently hire the right people for the roles we needed to fill.",
            },
            {
              name: "Qualimatrix Technologies",
              role: "",
              image: "/assets/reviews/qualimatrix_logo.jpg",
              quote:
                "Skillaccess has made recruitment much more efficient for us. The platform’s accurate skill assessments and seamless integration with our existing systems have allowed us to hire the right people faster and more effectively",
            },
          ].map((story, index) => (
            <Card
              key={index}
              className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20"
            >
              <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4 sm:mb-6"
                />
                <h3 className="font-heading text-lg sm:text-xl mb-2">
                  {story.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {story.role}
                </p>
                <p className="text-sm sm:text-base italic">{story.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#083B73] text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
              Ready to Transform Your Talent Acquisition?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Join SkillAccess today and connect with the best talent in your
              industry.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[#083B73] hover:bg-white/90 hover:text-[#083B73] rounded-lg text-base sm:text-lg px-6 py-3 transition-all duration-300"
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
