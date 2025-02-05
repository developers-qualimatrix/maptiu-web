"use client";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Scale,
//   Zap,
//   Shield,
//   Users,
//   CheckCircle,
//   Clock,
//   Target,
//   Briefcase,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
import { useEffect } from "react";

export default function StaffItPage() {
  // Disable scrolling when the component mounts
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";

    // Clean up on unmount to restore scrolling if needed
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    // bg-[#FFF5F0]
    <div className="min-h-screen overflow-hidden">
      {/* Full-Page Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md flex items-center justify-center z-40">
        <h1 className="text-black text-5xl font-bold">Coming Soon...</h1>
      </div>
      {/* <section className="container mx-auto py-24 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4">StaffIt Augmentation</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Scale Your Workforce with Ease</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Flexible and scalable resource augmentation solutions to meet your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-md" style={{ backgroundColor: "#083B73" }}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-md">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-12">Our Approach</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="font-heading text-xl mb-4">Understand</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                We begin by thoroughly understanding your specific requirements and challenges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Requirement analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Skill mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Timeline planning</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="font-heading text-xl mb-4">Provide</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                We source and provide the right professionals for your needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Skilled professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Quick deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Ongoing support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="font-heading text-xl mb-4">Support</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                We ensure smooth integration and continuous support.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Regular check-ins</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Performance tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Resource optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[#FFF5F0] py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl mb-12">Why Choose Our Resources</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Scale,
                title: "Flexible Models",
                description: "Choose from various engagement models that suit your needs",
              },
              {
                icon: Zap,
                title: "Quick Scaling",
                description: "Rapidly scale your team up or down as needed",
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Pre-vetted professionals with proven expertise",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Continuous support and resource management",
              },
              {
                icon: Clock,
                title: "Time Efficiency",
                description: "Reduce time-to-hire and onboarding time",
              },
              {
                icon: Target,
                title: "Skill-Matched",
                description: "Resources aligned with your specific requirements",
              },
              {
                icon: Briefcase,
                title: "Industry Expertise",
                description: "Professionals with relevant industry experience",
              },
              {
                icon: Zap,
                title: "Cost-Effective",
                description: "Optimize your budget with flexible hiring options",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-[#083B73]/10 hover:border-[#083B73]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-md"
              >
                <CardContent className="flex flex-col items-center p-6 text-center h-full">
                  <feature.icon className="h-12 w-12 text-[#083B73] mb-4" />
                  <h3 className="font-heading text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-12">Our Resource Augmentation Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "IT & Software Development",
              description: "Access top-tier developers, architects, and IT professionals.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Data Science & Analytics",
              description: "Leverage the power of data with our skilled data experts.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Design & Creative",
              description: "Enhance your creative capabilities with our talented designers.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Project Management",
              description: "Ensure project success with our experienced project managers.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Digital Marketing",
              description: "Boost your online presence with our digital marketing experts.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Customer Support",
              description: "Provide excellent customer service with our support professionals.",
              image: "/placeholder.svg?height=200&width=300",
            },
          ].map((service, index) => (
            <Card key={index} className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={300}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#083B73] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6">Ready to Augment Your Team?</h2>
            <p className="text-xl mb-8">Let&#39;s discuss how we can help you scale your workforce efficiently.</p>
            <Button size="lg" variant="outline" className="bg-white text-[#083B73] hover:bg-white/90 rounded-md">
              <Link href="/contact-us">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-12">Frequently Asked Questions</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              question: "How quickly can you provide resources?",
              answer:
                "We typically can provide resources within 2-4 weeks, depending on the specific skills required and project complexity.",
            },
            {
              question: "What if the resource doesn't meet our expectations?",
              answer:
                "We offer a replacement guarantee. If you're not satisfied with a resource, we'll work to find a suitable replacement as quickly as possible.",
            },
            {
              question: "Can we hire the resource permanently?",
              answer:
                "Yes, we offer a 'hire-to-permanent' option. After a specified period, you can choose to hire the resource as a full-time employee.",
            },
            {
              question: "How do you ensure the quality of your resources?",
              answer:
                "We have a rigorous vetting process that includes technical assessments, soft skills evaluation, and background checks to ensure high-quality resources.",
            },
          ].map((faq, index) => (
            <Card key={index} className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </div>
  );
}
