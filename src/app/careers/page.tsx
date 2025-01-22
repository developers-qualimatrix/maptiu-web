"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Briefcase, Users, Zap, Heart, Globe, Coffee } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      <section className="container py-24 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4">Careers at Maptiu</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">Join Our Team</h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Be part of a team that&#39;s revolutionizing the future of work.
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-8">Why Join Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Innovation-Driven",
              description: "Work on cutting-edge technologies and shape the future of talent acquisition.",
              icon: Zap,
            },
            {
              title: "Global Impact",
              description: "Your work will help businesses and professionals worldwide connect and grow.",
              icon: Globe,
            },
            {
              title: "Collaborative Culture",
              description: "Join a diverse team of experts who value teamwork and mutual growth.",
              icon: Users,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <item.icon className="h-12 w-12 text-[#FF4500] mb-4" />
                <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <h2 className="text-center font-heading text-3xl mb-8">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "Innovation", description: "We embrace new ideas and technologies" },
            { value: "Integrity", description: "We act with honesty and transparency" },
            { value: "Collaboration", description: "We achieve more together" },
            { value: "Excellence", description: "We strive for the highest quality in everything we do" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-heading text-xl mb-2 text-[#FF4500]">{item.value}</h3>
              <p className="text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-8">Current Openings</h2>
        <div className="grid gap-8">
          {[
            {
              title: "Senior Software Engineer",
              department: "Engineering",
              location: "Remote",
              type: "Full-time",
            },
            {
              title: "Product Manager",
              department: "Product",
              location: "New York",
              type: "Full-time",
            },
            {
              title: "UI/UX Designer",
              department: "Design",
              location: "Remote",
              type: "Full-time",
            },
            {
              title: "Technical Recruiter",
              department: "HR",
              location: "London",
              type: "Full-time",
            },
          ].map((job, index) => (
            <Card key={index} className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-heading text-xl">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="secondary">{job.location}</Badge>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                </div>
                <Button style={{ backgroundColor: "#FF4500" }} className="rounded-md">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF5F0]">
        <h2 className="text-center font-heading text-3xl mb-8">Employee Benefits</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Competitive Salary", icon: Briefcase },
            { title: "Health Insurance", icon: Heart },
            { title: "Flexible Work Hours", icon: Coffee },
            { title: "Professional Development", icon: Users },
            { title: "Remote Work Options", icon: Globe },
            { title: "Stock Options", icon: Zap },
          ].map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4">
              <benefit.icon className="h-8 w-8 text-[#FF4500]" />
              <span className="text-lg">{benefit.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl mb-8">Life at Maptiu</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Image
              src="/assets/innovative_culture.jpg"
              alt="Office Culture"
              width={400}
              height={300}
              className="aspect-video w-full object-cover"
            />
            <CardContent className="p-6">
              <h3 className="font-heading text-xl">Innovative Culture</h3>
              <p className="mt-2 text-muted-foreground">
                Work in an environment that encourages creativity and innovation.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Image
              src="/assets/global_teams.jpg"
              alt="Team Collaboration"
              width={400}
              height={300}
              className="aspect-video w-full object-cover"
            />
            <CardContent className="p-6">
              <h3 className="font-heading text-xl">Global Team</h3>
              <p className="mt-2 text-muted-foreground">Collaborate with talented individuals from around the world.</p>
            </CardContent>
          </Card>
          <Card className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Image
              src="/assets/great_banefits.jpg"
              alt="Benefits"
              width={400}
              height={300}
              className="aspect-video w-full object-cover"
            />
            <CardContent className="p-6">
              <h3 className="font-heading text-xl">Great Benefits</h3>
              <p className="mt-2 text-muted-foreground">Competitive compensation and comprehensive benefits package.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-black text-white py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">Ready to make an impact?</h2>
            <p className="mt-4 text-zinc-400">Join Maptiu and help shape the future of talent acquisition.</p>
            <Button size="lg" className="mt-8 bg-[#FF4500] hover:bg-[#FF4500]/90 rounded-md">
              View All Openings
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

