"use client"

import Link from "next/link"
// import { Input } from "@/app/components/ui/input"
// import { Button } from "@/app/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="container py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-heading text-2xl">
              <Image src="/assets/maptiu_logo_white.png" alt="Maptiu Logo" width={108} height={64} />
            </Link>
            <p className="mt-4 text-sm text-zinc-400">Connecting companies with talent innovatively.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg">Solutions</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link
                href="/skill-access"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                SkillAccess
              </Link>
              <Link href="/hire-it" className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
                HireIt
              </Link>
              <Link
                href="/resource-augmentation"
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Resource Augmentation
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-heading text-lg">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/about-us" className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
                About
              </Link>
              <Link href="/careers" className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
                Careers
              </Link>
              <Link href="/contact-us" className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-heading text-lg">Newsletter</h3>
            <p className="mt-4 text-sm text-zinc-400">Subscribe to our newsletter for updates.</p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 text-white placeholder:text-zinc-400 w-full sm:w-auto"
              />
              <Button type="submit" className="bg-[#FF4500] hover:bg-[#FF4500]/90 w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Maptiu. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/" className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
              Terms of Service
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-zinc-400 transition-all duration-300 hover:bg-white/20 hover:text-white hover:-translate-y-1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUpRight className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}

