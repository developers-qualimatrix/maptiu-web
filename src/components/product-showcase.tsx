"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const showcaseItems = [
  {
    value: "dashboard",
    title: "Intuitive Dashboard",
    description: "Powerful analytics and insights at your fingertips",
    image: "/assets/skillaccess_dashboard.png",
  },
  {
    value: "matching",
    title: "AI-Powered Matching",
    description: "Smart algorithms that connect the perfect candidates",
    image: "/assets/skillaccess_matching.png",
  },
  {
    value: "profiles",
    title: "Talent Profiles",
    description: "Comprehensive candidate profiles with verified skills",
    image: "/assets/skillaccess_talentprofiles.png",
  },
  {
    value: "analytics",
    title: "Advanced Analytics",
    description: "Track and optimize your hiring process",
    image: "/assets/skillaccess_analytics.png",
  },
]

export function ProductShowcase() {
  return (
    <div
      className="space-y-4 px-4 sm:px-6 lg:px-8"
      style={{ width: "85vw", height: "50%", overflow: "hidden", position: "relative" }}
    >
      <div className="text-center">
        <Badge className="mb-2">SkillAccess Platform</Badge>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl">Experience the future of hiring</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Our AI-driven platform streamlines your entire recruitment process
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="w-[50vw] mx-auto space-y-6">
        <TabsList className="grid w-full grid-cols-2 gap-2 bg-transparent md:grid-cols-4">
          {showcaseItems.map((item) => (
        <TabsTrigger
          key={item.value}
          value={item.value}
          className="data-[state=active]:bg-[#083B73] data-[state=active]:text-white px-2 py-1 text-sm rounded-md"
        >
          {item.title}
        </TabsTrigger>
          ))}
        </TabsList>
        {showcaseItems.map((item) => (
          <TabsContent key={item.value} value={item.value} className="mt-6">
        <div className="overflow-hidden rounded-md border bg-gradient-to-b from-muted/50 to-muted p-0.5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
            }}
            className="overflow-hidden rounded-xl"
          >
            <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={1200}
          height={600}
          className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="p-4">
            <h3 className="font-heading text-xl">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}