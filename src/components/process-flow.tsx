"use client"
import { motion } from "framer-motion"
import { ClipboardCheck, Network, Users, UserCheck } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export function ProcessFlow() {
  const processes = [
    {
      icon: ClipboardCheck,
      title: "Skill Assessment",
      description:
        "Students showcase their abilities through targeted assessments, highlighting their strengths and potential.",
      gradient: "from-[#083B73] to-[#083B73]",
    },
    {
      icon: Network,
      title: "Talent Marketplace Integration",
      description:
        "Seamlessly connect with a vast network of colleges and corporates, creating diverse opportunities for growth.",
      gradient: "from-[#083B73] to-[#083B73]",
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description:
        "Quickly scale your tech teams with on-demand, skilled professionals tailored to your project needs.",
      gradient: "from-[#083B73] to-[#083B73]",
    },
    {
      icon: UserCheck,
      title: "Recruitment Solutions",
      description:
        "End-to-end hiring support to match businesses with candidates who fit their goals and culture perfectly.",
      gradient: "from-[#083B73] to-[#083B73]",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left Column - Text */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center sm:justify-start">
                <Badge variant="outline" className="border-[#083B73] text-white bg-[#083B73] text-xs sm:text-sm">
                  Our Process Flow
                </Badge>
              </div>
              <h2 className="mt-4 sm:mt-6 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
                One Platform,{" "}
                <span className="bg-gradient-to-r from-[#083B73] to-[#083B73] bg-clip-text text-transparent">
                  Endless <br className="hidden sm:inline" /> Possibilities:
                </span>{" "}
                <br className="hidden sm:inline" />
                Assess Talent. <br className="hidden sm:inline" />
                Staff Smart.
                <br className="hidden sm:inline" /> Hire Right.
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
                We help you find the right people, a smart way. From assessing skills to building strong tech teams and
                hiring top talent, our platform makes the entire process simple, seamless, and effective.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Process Cards */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden bg-white border-[#083B73]/10 transition-all duration-300 hover:border-[#083B73]/50 hover:shadow-xl hover:shadow-[#083B73]/20 hover:-translate-y-1 rounded-md shadow-lg">
                  <CardContent className="p-4 sm:p-6 group-hover:h-auto h-auto sm:h-52 transition-all">
                    <div
                      className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#083B73]`}
                    >
                      <process.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl text-[#083B73] mt-2 sm:mt-3">{process.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

