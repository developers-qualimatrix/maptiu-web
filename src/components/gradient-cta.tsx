"use client"

import { motion } from "framer-motion"
// import { Button } from "@/app/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function GradientCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-black p-8 md:p-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/10 to-[#FF8C00]/10 blur-3xl" />
      <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="space-y-4">
          <h2 className="bg-gradient-to-r from-[#FF4500] to-[#FF8C00] bg-clip-text font-heading text-3xl text-transparent sm:text-4xl md:text-5xl">
            You bring the talent,
            <br />
            we make it happen!
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400">
            Schedule a discovery call with our talent experts and discuss your hiring needs in detail.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-[#FF4500] to-[#FF8C00] transition-all hover:shadow-xl hover:shadow-[#FF4500]/20"
        >
          <Link href="/contact-us" className="flex items-center gap-2">
            Let&#39;s Talk
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

