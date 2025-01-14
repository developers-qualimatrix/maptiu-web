"use client";

import React from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel.tsx";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from 'lucide-react'
import { Card, Carousel } from "./ui/apple-cards-carousel";
// import { InView } from "react-intersection-observer"; 

// Data for products (SkillAccess, HireIt, Resource Augmentation)
const data = [
  {
    category: "HireIt",
    title: "Streamline your hiring process.",
    src: "/assets/hireIt.png",
    hoverContent: "Your trusted partner for end-to-end talent acquisition solutions. We streamline the hiring process with customized recruitment strategies and comprehensive candidate assessments.",
    content: (
      <div className="relative group">
        <div className="absolute inset-0 bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Simplifying recruitment.
            </span>{" "}
            HireIt is your trusted partner in streamlining talent acquisition with customized strategies, assessments, and more. Accelerate your hiring with us!
          </p>
          <Link
            href="/hire-it"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
          >
            <span className="text-lg uppercase tracking-wider">Learn More</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          <Image
            src="/assets/hireIt.png"
            alt="Hire It"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    ),
  },  
  {
    category: "Skill Access",
    title: "You can do more with AI.",
    src: "/assets/SkillAccess1.png", // Replace with the actual image path
    hoverContent: "Connect top talent with leading corporates through our AI-driven platform. Our advanced matching system ensures the perfect fit for both employers and candidates.",
    content: (
      <div className="relative group">
        <div className="absolute inset-0 bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Empower your business with AI-driven talent solutions.
            </span>{" "}
            SkillAccess connects top talent with companies using AI matching to ensure the perfect fit. Maximize efficiency with the power of automation.
          </p>
          <Link
            href="/skill-access"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
          >
            <span className="text-lg uppercase tracking-wider">Learn More</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          <Image
            src="/assets/SkillAccess.png"
            alt="Skill Access"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    ),
  },
  {
    category: "Resource Augmentation",
    title: "Boost your team with skilled professionals.",
    src: "/assets/ResourceAugmentation.png",
    hoverContent: "Scale your workforce with ease using our flexible engagement models. Get access to skilled professionals who can seamlessly integrate into your team and contribute immediately.",
    content: (
      <div className="relative group">
        <div className="absolute inset-0 bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Scaling your workforce effortlessly.
            </span>{" "}
            Resource Augmentation helps you scale your team quickly with qualified professionals who can integrate seamlessly into your projects.
          </p>
          <Link
            href="/resource-augmentation"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
          >
            <span className="text-lg uppercase tracking-wider">Learn More</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          <Image
            src="/assets/ResourceAugmentation.png"
            alt="Resource Augmentation"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    ),
  },
];

export default function OurSolutions() {
  const cards = data.map((card, index) => (
    <div key={index} className="w-full md:w-1/3 p-4">
      <div className="relative group cursor-pointer">
        {/* Category Title */}
        <h3 className="text-xl font-semibold text-center group-hover:text-lg md:text-3xl text-neutral-800 dark:text-neutral-200 mb-2 transition-all duration-300 ease-in-out">
          {card.category}
        </h3>

        {/* Content & Hovered Text */}
        <div className="overflow-hidden rounded-3xl shadow-lg transition-all duration-300 ease-in-out">
          {card.content}
          <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {/* {card.hoverContent} */}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-full py-20 bg-gray-50 dark:bg-neutral-900">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
        Our Solutions
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-neutral-600 dark:text-neutral-400 text-center mt-6">
        We provide innovative solutions that connect top talent with leading companies through cutting-edge platforms.
      </p>
      <div className="mt-12 flex flex-wrap justify-center">
        {cards}
      </div>
    </div>
  );
}  
  // return (
  //   <div className="container mx-auto px-4 py-16">
  //     {/* Section Heading */}
  //     <div className="text-center mb-16">
  //       <h2 className="text-3xl font-semibold text-gray-900">Our Solutions</h2>
  //       <p className="mt-4 text-lg text-gray-600">
  //         We provide innovative solutions to connect top talent with leading companies.
  //       </p>
  //     </div>

  //     {/* Card Grid Layout */}
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //       {/* Left Card: Skill Access */}
  //       <div className="relative group h-[522px] overflow-hidden rounded-2xl">
  //         <Image
  //           src="/assets/SkillAccess.png"
  //           alt="Skill Access"
  //           fill
  //           className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
  //         />
  //         <div className="absolute inset-0 p-8 flex flex-col justify-end">
  //           <h3 className="text-3xl font-bold text-white mb-4">SKILL ACCESS</h3>
  //           <p className="text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
  //             Connect top talent with leading corporates through our AI-driven platform. Our advanced matching system ensures the perfect fit for both employers and candidates.
  //           </p>
  //           <Link 
  //             href="https://www.skillaccess.in/" 
  //             className="inline-flex items-center text-white hover:opacity-80 transition-opacity"
  //           >
  //             <span className="text-lg uppercase tracking-wider">View Projects</span>
  //             <ArrowRight className="ml-2 h-5 w-5" />
  //           </Link>
  //         </div>
  //       </div>

  //       {/* Right Column: HireIt and Resource Augmentation */}
  //       <div className="flex flex-col gap-6">
  //         {/* HireIt Card */}
  //         <div className="relative group h-[522px] overflow-hidden rounded-2xl">
  //           <Image
  //             src="/assets/hireIt.png"
  //             alt="HireIt"
  //             fill
  //             className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
  //           />
  //           <div className="absolute inset-0 p-8 flex flex-col justify-end">
  //             <h3 className="text-3xl font-bold text-white mb-4">HIREIT</h3>
  //             <p className="text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
  //               Your trusted partner for end-to-end talent acquisition solutions. We streamline the hiring process with customized recruitment strategies and comprehensive candidate assessments.
  //             </p>
  //             <Link 
  //               href="/app-design" 
  //               className="inline-flex items-center text-white hover:opacity-80 transition-opacity"
  //             >
  //               <span className="text-lg uppercase tracking-wider">View Projects</span>
  //               <ArrowRight className="ml-2 h-5 w-5" />
  //             </Link>
  //           </div>
  //         </div>

  //         {/* Resource Augmentation Card */}
  //         <div className="relative group h-[522px] overflow-hidden rounded-2xl">
  //           <Image
  //             src="/assets/ResourceAugmentation.png"
  //             alt="Resource Augmentation"
  //             fill
  //             className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-500"
  //           />
  //           <div className="absolute inset-0 p-8 flex flex-col justify-end">
  //             <h3 className="text-3xl font-bold text-white mb-4">RESOURCE AUGMENTATION</h3>
  //             <p className="text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
  //               Scale your workforce with ease using our flexible engagement models. Get access to skilled professionals who can seamlessly integrate into your team and contribute immediately.
  //             </p>
  //             <Link 
  //               href="/graphic-design" 
  //               className="inline-flex items-center text-white hover:opacity-80 transition-opacity"
  //             >
  //               <span className="text-lg uppercase tracking-wider">View Projects</span>
  //               <ArrowRight className="ml-2 h-5 w-5" />
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
// 
// 
// 
//   
  // return (
//     <section className="py-16 min-h-screen bg-[#EDF8F0] m-4 rounded-lg">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-[#184640]">
//           Our Solutions
//         </h2>

//         <div>
//           {/* First Solution */}
//           <InView triggerOnce>
//             {({ inView, ref }) => (
//               <div
//                 ref={ref}
//                 className={`flex flex-col md:flex-row items-center gap-8 rounded-lg transition-all ${
//                   inView ? "animate-slideFromRight" : ""
//                 }`}
//               >
//                 <div className="w-full md:w-1/2 rounded-lg overflow-hidden flex justify-center items-center">
//                   <Image
//                     src="/assets/aboutus_workculture.jpg"
//                     alt="skillaccess_logo"
//                     width={400}
//                     height={400}
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
//                   <h3 className="text-3xl font-bold mb-4 text-[#184640]">
//                     SkillAccess
//                   </h3>
//                   <p className="mb-6 text-gray-600">
//                     Connect top talent with leading corporates through our AI-driven platform. Our advanced matching system ensures the perfect fit for both employers and candidates.
//                   </p>
//                   <Link
//                     href="/skill-access"
//                     className="inline-flex items-center px-4 py-2 bg-[#234E48] text-white rounded-lg hover:bg-[#1c3f3a] transition-colors"
//                   >
//                     Learn more
//                     <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </InView>

//           <div className="py-3"></div>

//           {/* Second Solution */}
//           <InView triggerOnce>
//             {({ inView, ref }) => (
//               <div
//                 ref={ref}
//                 className={`flex flex-col md:flex-row-reverse items-center gap-8 rounded-lg transition-all ${
//                   inView ? "animate-slideFromLeft" : ""
//                 }`}
//               >
//                 <div className="w-full md:w-1/2 rounded-lg overflow-hidden flex justify-center items-center">
//                   <Image
//                     src="/assets/aboutus_workculture.jpg"
//                     alt="hireit_logo"
//                     width={400}
//                     height={400}
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
//                   <h3 className="text-3xl font-bold mb-4 text-[#184640]">
//                     HireIt
//                   </h3>
//                   <p className="mb-6 text-gray-600">
//                     Your trusted partner for end-to-end talent acquisition solutions. We streamline the hiring process with customized recruitment strategies and comprehensive candidate assessments.
//                   </p>
//                   <Link
//                     href="/hire-it"
//                     className="inline-flex items-center justify-center px-4 py-2 bg-[#234E48] text-white rounded-lg hover:bg-[#1c3f3a] transition-colors"
//                   >
//                     Learn more
//                     <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </InView>

//           <div className="py-3"></div>

//           {/* Third Solution */}
//           <InView triggerOnce>
//             {({ inView, ref }) => (
//               <div
//                 ref={ref}
//                 className={`flex flex-col md:flex-row items-center gap-8 rounded-lg transition-all ${
//                   inView ? "animate-slideFromRight" : ""
//                 }`}
//               >
//                 <div className="w-full md:w-1/2 rounded-lg overflow-hidden flex justify-center items-center">
//                   <Image
//                     src="/assets/aboutus_workculture.jpg"
//                     alt="resource_augmentation_logo"
//                     width={400}
//                     height={400}
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center text-center">
//                   <h3 className="text-3xl font-bold mb-4 text-[#184640]">
//                     Resource Augmentation
//                   </h3>
//                   <p className="mb-6 text-gray-600">
//                     Scale your workforce with ease using our flexible engagement models. Get access to skilled professionals who can seamlessly integrate into your team and contribute immediately.
//                   </p>
//                   <Link
//                     href="/resource-augmentation"
//                     className="inline-flex items-center px-4 py-2 bg-[#234E48] text-white rounded-lg hover:bg-[#1c3f3a] transition-colors"
//                   >
//                     Learn more
//                     <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </InView>
//         </div>
//       </div>
//       <style>
//         {`@keyframes slideFromRight {
//   0% {
//     transform: translateX(100%);
//     opacity: 0;
//   }
//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// @keyframes slideFromLeft {
//   0% {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// /* Animation classes with smoother, longer duration and delay for sequential animations */
// .animate-slideFromRight {
//   animation: slideFromRight 1.5s ease-in-out forwards;
// }

// .animate-slideFromLeft {
//   animation: slideFromLeft 1.5s ease-in-out forwards;
// }
// `}
//       </style>
//     </section>
//   );

