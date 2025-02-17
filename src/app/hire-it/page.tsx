"use client";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Search,
//   Users,
//   Briefcase,
//   Clock,
//   CheckCircle,
//   BarChart,
//   Zap,
//   Shield,
// } from "lucide-react";
// import Image from "next/image"
// import Link from "next/link";
import { useEffect } from "react";

export default function HireItPage() {
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
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Full-Page Overlay */}
      <div className="absolute inset-0 bg-opacity-40 backdrop-blur-md flex items-center justify-center z-40">
        <h1 className="text-black text-3xl md:text-5xl font-bold text-center">
          Coming Soon...
        </h1>
      </div>

      {/* <section className="container mx-auto py-24 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4">HireIt Solutions</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">
            Your Trusted Talent Acquisition Partner
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            End-to-end hiring solutions tailored to your organization&#39;s unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-md" style={{ backgroundColor: "#083B73" }}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-md">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-12">Our Comprehensive Approach</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col h-full">
              <Search className="h-12 w-12 text-[#083B73] mb-4" />
              <h3 className="font-heading text-xl mb-4">Talent Sourcing</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                We leverage advanced AI and human expertise to find the perfect candidates for your roles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>AI-powered candidate matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Extensive talent network</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Targeted recruitment campaigns</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col h-full">
              <Users className="h-12 w-12 text-[#083B73] mb-4" />
              <h3 className="font-heading text-xl mb-4">Screening & Assessment</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Our rigorous screening process ensures only the best candidates move forward.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Skills assessment tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Behavioral interviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Cultural fit evaluation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col h-full">
              <Briefcase className="h-12 w-12 text-[#083B73] mb-4" />
              <h3 className="font-heading text-xl mb-4">Onboarding Support</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                We ensure a smooth transition for new hires, setting them up for success from day one.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Customized onboarding plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>New hire integration assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#083B73]" />
                  <span>Performance tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-[#FFF5F0] py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl mb-12">Why Choose HireIt</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: "Extensive Database",
                description: "Access to a vast pool of pre-screened candidates",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced recruiters across industries",
              },
              {
                icon: Briefcase,
                title: "Industry Focus",
                description: "Specialized knowledge in key sectors",
              },
              {
                icon: Clock,
                title: "Quick Turnaround",
                description: "Efficient processes for faster hiring",
              },
              {
                icon: BarChart,
                title: "Data-Driven Insights",
                description: "Analytics to optimize your hiring process",
              },
              {
                icon: Zap,
                title: "AI-Powered Matching",
                description: "Advanced algorithms for perfect fit",
              },
              {
                icon: Shield,
                title: "Compliance Assured",
                description: "Stay compliant with hiring regulations",
              },
              {
                icon: CheckCircle,
                title: "Quality Guaranteed",
                description: "We stand behind our placements",
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
        <h2 className="text-center font-heading text-3xl mb-12">Our Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              company: "TechInnovate Inc.",
              position: "Senior Software Engineer",
              result: "Reduced time-to-hire by 40%",
              testimonial: "HireIt's AI-powered matching saved us weeks in our search for top tech talent.",
            },
            {
              company: "FinanceFirst Ltd.",
              position: "Risk Analyst",
              result: "100% candidate satisfaction",
              testimonial: "The quality of candidates provided by HireIt exceeded our expectations.",
            },
            {
              company: "HealthCare Solutions",
              position: "Medical Director",
              result: "Filled a critical role in record time",
              testimonial: "HireIt understood our unique needs and delivered outstanding results.",
            },
          ].map((story, index) => (
            <Card key={index} className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-heading text-xl mb-2">{story.company}</h3>
                <p className="text-muted-foreground mb-4">Position: {story.position}</p>
                <Badge className="mb-4 bg-[#083B73] text-white self-start">{story.result}</Badge>
                <p className="italic mt-auto">{story.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#083B73] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6">Ready to Transform Your Hiring?</h2>
            <p className="text-xl mb-8">Let HireIt be your partner in building exceptional teams.</p>
            <Button size="lg" variant="outline" className="bg-white text-[#083B73] hover:bg-white/90 rounded-md">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
