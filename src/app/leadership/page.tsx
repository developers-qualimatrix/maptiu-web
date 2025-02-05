"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import CultureTabs from "@/components/leadership-tabs";

// interface LeaderProps {
//   name: string;
//   position: string;
//   image: string;54
//   quote: string;
//   description: string;
// }

// const LeaderCard: React.FC<LeaderProps> = ({
//   name,
//   position,
//   image,
//   quote,
//   description,
// }) => {
//   return (
//     <motion.div
//       className="relative overflow-hidden rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#083B73]/15 hover:-translate-y-1"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="h-full">
//         <CardContent className="p-8">
//           <div className="flex flex-col items-center">
//             <img
//               src={image}
//               alt={name}
//               className="w-48 h-48 rounded-full object-cover border-4 border-[#7ED957] mb-4"
//             />
//             <h3 className="font-heading text-2xl text-black">{name}</h3>
//             <p className="text-[#083B73] text-sm">{position}</p>
//             {/* <p className="italic text-black mt-4">"{quote}"</p> */}
//             {/* <p className="text-[#083B73] mt-4">{description}</p> */}
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: "Atul Bharat",
      position: "CPO",
      image: "/images/alice-johnson.jpg",
      quote: "Efficiency and teamwork drive results.",
      description:
        "Alice specializes in optimizing operations and fostering a culture of collaboration.",
    },
    {
      name: "Tushar Pal",
      position: "CEO",
      image: "/images/john-doe.jpg",
      quote: "Innovation is the key to success.",
      description:
        "John has over 20 years of experience in leading tech companies and driving innovation.",
    },
    {
      name: "Pratap Nair",
      position: "COO",
      image: "/images/bob-brown.jpg",
      quote: "Financial discipline ensures sustainable growth.",
      description:
        "Bob brings a wealth of financial expertise and strategic planning to the team.",
    },
    {
      name: "Mahwish Khan",
      position: "CMO",
      image: "/images/jane-smith.jpg",
      quote: "Technology empowers us to achieve the impossible.",
      description:
        "Jane is a visionary technologist with a passion for building scalable and impactful solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 pt-24 text-white md:py-32">
        <div className="absolute left-0 top-0 h-full w-full opacity-50">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Leadership Hero Background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="outline">
                Leadership
              </Badge>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">
                Meet the Team Shaping Our Future
              </h1>
              <p className="mt-6 text-xl text-zinc-400">
                These are the visionary minds who drive our success and
                innovation every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Tab Section Starts */}
      <section>
        <div className="py-20">
          <div className="row">
            <CultureTabs />
          </div>
        </div>
      </section>
      {/* Culture Tab Section Ends */}

      {/* Leadership Grid Section
      <section className="container py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-heading text-[#083B73] mb-8">
            Meet Our Leaders
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </div>
      </section> */}

      {/* Testimonial Section */}
      <section className="container py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Leadership Insights</Badge>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl">
            Hear From Our Leaders
          </h2>
          <p className="mt-4 text-muted-foreground">
            Insights and wisdom from the minds driving our organization forward.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-black italic">&quot;{leader.quote}&quot;</p>
              <p className="mt-4 text-[#083B73]">
                - {leader.name}, {leader.position}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className=" py-16 px-4 sm:px-6 lg:px-8 bg-black  text-white text-center">
        <h2 className="text-4xl font-heading mb-4">Join Us on Our Journey</h2>
        <p className="text-xl mb-8">
          Be part of a team that’s transforming the future.
        </p>
        <button className="bg-[#7ED957] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#6BC446] transition-all">
          Explore Careers
        </button>
      </section>
    </div>
  );
};

export default Leadership;
