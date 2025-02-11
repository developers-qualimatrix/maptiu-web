"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Briefcase, Users, Zap, Heart, Globe, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-black py-20 pt-24 sm:py-24 md:py-28 lg:py-32 lg:pt-36 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 sm:mb-6" variant="outline">
                Careers at Maptiu
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
                Join Our{" "}
                <span className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                Be part of a team that&apos;s revolutionizing the future of work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12">
          Why Join Us
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Innovation-Driven",
              description:
                "Work on cutting-edge technologies and shape the future of talent acquisition.",
              icon: Zap,
            },
            {
              title: "Global Impact",
              description:
                "Your work will help businesses and professionals worldwide connect and grow.",
              icon: Globe,
            },
            {
              title: "Collaborative Culture",
              description:
                "Join a diverse team of experts who value teamwork and mutual growth.",
              icon: Users,
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20"
            >
              <CardContent className="p-6 sm:p-8">
                <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#083B73] mb-4" />
                <h3 className="font-heading text-lg sm:text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12">
          Current Openings
        </h2>
        <div className="flex justify-center items-center py-12 bg-white">
          <Card className="max-w-sm w-full rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-4">
                No Opening Right Now
              </h3>
              <p className="text-center text-gray-600 text-sm sm:text-base">
                We are not accepting new applications or requests at the moment.
                Please check back later!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-white">
            Employee Benefits
          </h2>
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
                <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#7ED957]" />
                <span className="text-base sm:text-lg text-white">
                  {benefit.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12">
          Life at Maptiu
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Innovative Culture",
              description:
                "Work in an environment that encourages creativity and innovation.",
              image: "/assets/innovative_culture.jpg",
            },
            {
              title: "Global Team",
              description:
                "Collaborate with talented individuals from around the world.",
              image: "/assets/global_teams.jpg",
            },
            {
              title: "Great Benefits",
              description:
                "Competitive compensation and comprehensive benefits package.",
              image: "/assets/great_banefits.jpg",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="aspect-video w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-heading text-lg sm:text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
              Ready to make an impact?
            </h2>
            <p className="mt-4 text-zinc-400">
              Join Maptiu and help shape the future of talent acquisition.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-[#7ED957] hover:bg-[#7ED957]/90 rounded-md"
            >
              <Link href="/careers">View All Openings</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
