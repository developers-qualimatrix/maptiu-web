"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const showcaseItems = [
  {
    value: "dashboard",
    title: "College Dashboard",
    description: "An overview of key academic performance metrics and insights",
    image: "/assets/skill_access/college_dashboard.png",
  },
  {
    value: "matching",
    title: "Develop Assessment",
    description:
      "Create and manage tailored assessments to evaluate skills effectively",
    image: "/assets/skill_access/college_assessment.png",
  },
  {
    value: "profiles",
    title: "Corporate Dashboard",
    description:
      "Monitor and manage candidate progress and skill assessments in real-time",
    image: "/assets/skill_access/corporate_dashboard.png",
  },
  {
    value: "analytics",
    title: "Student Evaluation",
    description:
      "Evaluate student performance and track academic progress seamlessly",
    image: "/assets/skill_access/student_evaluation.png",
  },
];

export function ProductShowcase() {
  return (
    <div
      className="space-y-4 px-4 sm:px-6 lg:px-8 xl:px-10"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="text-center">
        <Badge className="mb-2">SkillAccess Platform Glimpse</Badge>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Experience the future of hiring
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Our AI-driven platform streamlines your entire recruitment process
        </p>
      </div>

      <Tabs
        defaultValue="dashboard"
        className="w-full sm:w-[80vw] md:w-[70vw] lg:w-[50vw] mx-auto space-y-12 lg:space-y-12"
      >
        <TabsList className="grid w-full grid-cols-2 gap-2 bg-transparent xl:grid-cols-4 ">
          {showcaseItems.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="data-[state=active]:bg-[#083B73] data-[state=active]:text-white px-2 py-1 text-xs sm:text-sm md:text-sx rounded-md"
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
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
