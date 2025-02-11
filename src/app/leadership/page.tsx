"use client"

import type React from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import CultureTabs from "@/components/leadership-tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Leadership: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-16 pt-20 sm:py-20 md:py-24 lg:py-32 text-white">
        <div className="absolute left-0 top-0 h-full w-full opacity-50">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Leadership Hero Background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-2 sm:mb-4" variant="outline">
                Leadership
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Meet the Team Shaping  <span className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent">Our Future </span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-400">
                These are the visionary minds who drive our success and innovation every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Tab Section Starts */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <CultureTabs />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-2 sm:mb-4">Join Us on Our Journey</h2>
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
          Be part of a team that&#39;s transforming the future.
        </p>
        <Button className="bg-[#7ED957] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6BC446] transition-all text-sm sm:text-base">
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}

export default Leadership

