"use client";
import Image from "next/image";
import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Hero() {
  const words = [
    {
      text: "Connecting",
    },
    {
      text: "Companies",
    },
    {
      text: "with",
      className: "leading-relaxed",
    },
    {
      text: "Talent",
    },
    {
      text: "Innovatively.",
      className: "text-green-700 dark:text-green-700", // Adjusted text color to match the new theme
    },
  ];
  return (
    <section className="relative bg-[#A5DCB4] text-gray-800 py-8 md:py-16 lg:py-24 min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Circular Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial bg-gradient-to-br from-[#9FD6AE] via-[#d1e1d4] to-[#E7F2E9]" />

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-5 py-8 md:py-24 relative z-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 lg:max-w-lg mb-8 md:mb-0">
          <Image
            className="object-cover object-center rounded-lg"
            alt="Hero Animation"
            src="/assets/InteractionDesignpana.png"
            width={500}
            height={400}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:pl-24 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="title-font text-3xl sm:text-4xl md:text-5xl mb-6 font-bold text-gray-800 max-w-2xl mx-auto">
            <TypewriterEffect words={words} className="text-3xl md:text-4xl lg:text-5xl" />
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700 opacity-90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto md:mx-0 animate-fadeIn">
            Discover our innovative solutions for workforce management and
            talent acquisition. Empower your business with our tailored tools
            for a better workforce experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn w-full">
            <Link
              href="/about-us"
              aria-label="About Us"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-green-600 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              Learn More
            </Link>
            <Link
              href="/contact-us"
              aria-label="Contact Us"
              className="inline-flex text-green-700 bg-white border-2 border-green-700 py-2 px-4 sm:px-6 focus:outline-none hover:bg-gray-200 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in forwards;
        }

        .animate-fadeIn:hover {
          animation: none;
        }

        @font-face {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>
    </section>
  );
}




    // <section
    //   classNameName="bg-gradient-to-r from-[#64B28D] via-[#3B9B68] to-[#2D6A47] w-full text-white py-16 rounded-lg md:py-24 h-[80vh] flex items-center  relative"
    //   style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    // >
    //   <div classNameName="container px-4 w-full md:w-1/2 flex flex-col justify-start text-left">
    //     <h1 classNameName="animate-slideUp text-4xl text-white md:text-5xl lg:text-6xl font-semibold mb-6">
    //       Connecting Companies with Talent Innovatively
    //     </h1>
    //     <p classNameName="animate-slideUp text-lg md:text-xl text-white opacity-80 mb-10 max-w-3xl">
    //       Discover our innovative solutions for workforce management and talent acquisition. Empower your business with our tailored tools for a better workforce experience.
    //     </p>
    //     <div classNameName="space-y-4 md:space-y-0 md:space-x-6 flex flex-col justify-center md:flex-row">
    //       <Link
    //         href="/about-us"
    //         classNameName="animate-slideUp inline-block bg-white text-[#2D6A47] border border-transparent hover:border-[#0B151C] px-8 py-3 rounded-full font-semibold shadow-md transition-all ease-in-out duration-300 transform hover:scale-105"
    //       >
    //         Learn More
    //       </Link>
    //       <Link
    //         href="/contact-us"
    //         classNameName="animate-slideUp inline-block text-[#2D6A47] border-2 border-[#2D6A47] px-8 py-3 rounded-full font-semibold shadow-md transition-all ease-in-out duration-300 transform hover:scale-105"
    //       >
    //         Get Started
    //       </Link>
    //     </div>
    //   </div>

    //   <div classNameName="absolute right-0 w-1/4 flex justify-center items-center">
    //     <div classNameName="relative w-full max-w-lg mx-auto">
    //       <Image
    //         src="/assets/InteractionDesignpana.png"
    //         alt="Hero Animation"
    //         classNameName="w-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
    //         width={500}
    //         height={400}
    //       />
    //     </div>
    //   </div>

    //   <style jsx>{`
    //     @keyframes slideUp {
    //       0% {
    //         transform: translateY(50px);
    //         opacity: 0;
    //       }
    //       100% {
    //         transform: translateY(0);
    //         opacity: 1;
    //       }
    //     }

    //     .animate-slideUp {
    //       animation: slideUp 1s ease-out forwards;
    //       animation-delay: 0.3s; /* Slight delay for smoother sequence */
    //     }

    //     /* Hover animation for buttons */
    //     .animate-slideUp:hover {
    //       animation: none; /* Prevent hover animations from triggering */
    //     }
    //   `}</style>
    // </section>