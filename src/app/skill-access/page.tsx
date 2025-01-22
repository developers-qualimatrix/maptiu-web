"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain,
  Users,
  BarChart,
  Zap,
  Briefcase,
  CheckCircle,
  Shield,
  GraduationCap,
  Globe, } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SkillAccessPage() {
  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      <section className="container mx-auto py-24 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <Badge className="w-fit mb-4">SkillAccess Platform</Badge>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">
              AI-Driven Talent Acquisition for Universities, Colleges, and Corporates
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our comprehensive platform connects students, educational institutions, and companies through advanced
              AI-powered assessments and matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-[#FF4500] hover:bg-[#FF4500]/90 rounded-md" asChild>
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-md">
              <Link href="/contact-us">Schedule Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -left-4 top-4 h-72 w-72 rounded-full bg-[#FF4500]/10 lg:-left-8" />
            <Image
              src="/assets/skillAccess.png"
              alt="SkillAccess Platform Interface"
              width={600}
              height={400}
              className="relative rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-12">How It Works</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl mb-4">For Universities</h3>
              <p className="text-muted-foreground mb-4">
                Create and manage online assessments with AI-powered proctoring.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Customizable test templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Real-time monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Comprehensive analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl mb-4">For Colleges</h3>
              <p className="text-muted-foreground mb-4">
                Streamline admissions with access to pre-assessed student profiles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Applicant evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Automated admissions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>College listing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl mb-4">For Students</h3>
              <p className="text-muted-foreground mb-4">
                Take AI-proctored assessments and connect with colleges and companies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Easy test registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Instant result access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>College matching</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="font-heading text-xl mb-4">For Companies</h3>
              <p className="text-muted-foreground mb-4">
                Access pre-assessed candidates and streamline your hiring process.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>AI-powered matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Efficient candidate screening</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FF4500]" />
                  <span>Continuous skill tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[#FFF5F0] py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl mb-12">Key Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Brain,
                title: "AI-driven Matching",
                description: "Advanced algorithms for perfect candidate-opportunity fit",
              },
              {
                icon: Users,
                title: "Multi-User Platform",
                description: "Seamless integration for universities, colleges, students, and companies",
              },
              {
                icon: Shield,
                title: "Secure Assessments",
                description: "AI-powered proctoring with anti-cheating measures",
              },
              {
                icon: BarChart,
                title: "Comprehensive Analytics",
                description: "In-depth insights for all stakeholders",
              },
              {
                icon: Zap,
                title: "Real-time Monitoring",
                description: "Track student participation and test progress",
              },
              {
                icon: Briefcase,
                title: "Automated Admissions",
                description: "Streamlined application processing for colleges",
              },
              {
                icon: GraduationCap,
                title: "Skill Assessments",
                description: "Evaluate and showcase student abilities",
              },
              {
                icon: Globe,
                title: "Cross-Flow Communication",
                description: "Seamless interaction between all platform users",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-[#FF4500]/10 hover:border-[#FF4500]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-md"
              >
                <CardContent className="flex flex-col items-center p-6 text-center h-full">
                  <feature.icon className="h-12 w-12 text-[#FF4500] mb-4" />
                  <h3 className="font-heading text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-12">Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "Software Engineer",
              // company: "Tech Innovators Inc.",
              image: "/assets/white_placeholder.png",
              quote: "SkillAccess helped me land my dream job right out of college!",
            },
            {
              name: "Acme Corporation",
              role: "Hiring Manager",
              image: "/assets/white_placeholder.png",
              quote: "We've reduced our time-to-hire by 40% using SkillAccess.",
            },
            {
              name: "University of Excellence",
              role: "Career Services Director",
              image: "/assets/white_placeholder.png",
              quote: "SkillAccess has significantly improved our placement rates.",
            },
          ].map((story, index) => (
            <Card key={index} className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <h3 className="font-heading text-xl mb-2">{story.name}</h3>
                <p className="text-muted-foreground mb-4">{story.role}</p>
                {/* {story.company && <p className="text-muted-foreground mb-4">{story.company}</p>} */}
                <p className="italic">{story.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#FF4500] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6">
              Ready to Transform Your Talent Acquisition?
            </h2>
            <p className="text-xl mb-8">Join SkillAccess today and connect with the best talent in your industry.</p>
            <Button size="lg" variant="outline" className="bg-white text-[#FF4500] hover:bg-white/90 rounded-md">
              <Link href="/contact-us">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}