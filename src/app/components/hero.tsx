"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Remove dynamic import, use VideoPlayer directly
export default function Hero() {
  return (
    <section
      className="bg-white text-white m-4 py-12 rounded-lg md:py-20 h-[80vh] content-center items-center flex"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1550%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(163%2c 219%2c 178%2c 1)'%3e%3c/rect%3e%3cpath d='M0 0L195.73 0L0 158.05z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 158.05L195.73 0L483.46000000000004 0L0 353z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 353L483.46000000000004 0L615.6400000000001 0L0 388.65999999999997z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 388.65999999999997L615.6400000000001 0L1134.2 0L0 457.58z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L1367.84 560L1440 442.59000000000003z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 442.59000000000003L1367.84 560L1212.31 560L1440 215.01000000000002z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 215.01L1212.31 560L830.66 560L1440 188.44z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 188.44L830.6600000000001 560L360.50000000000006 560L1440 77.50999999999999z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1550'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 text-center my-auto w-3/4">
        <h1 className="animate-slideUp delay-200 text-3xl text-[#0B151C] md:text-4xl lg:text-5xl font-bold mb-4">
          Connecting Companies with Talent Innovatively
        </h1>
        <p className="animate-slideUp text-lg md:text-xl text-[#0B151C] mb-8">
          Discover our innovative solutions for workforce management and talent acquisition
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/about-us"
            className="animate-slideUp inline-block bg-white text-[#2A5F57] border hover:border-[#0B151C] px-6 py-2 rounded-full font-bold mb-2 md:mb-0"
          >
            Learn More
          </Link>
          <Link
            href="/contact-us"
            className="animate-slideUp inline-block text-[#0B151C] border-2 border-[#0B151C] px-6 py-2 rounded-full font-bold"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="container w-1/4 flex justify-center items-center">
        {/* Video Component */}
        <VideoPlayer src="/Hero_AnimationV.webm" width={400} height={400} />
      </div>
      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          animation-delay: 1s;
          animation-iteration-count: 1;
        }

        /* Add delay for each element to create staggered animations */
        h1 {
          animation-delay: 0.2s;
        }
        p {
          animation-delay: 0.4s;
        }
        button {
          animation-delay: 0.6s;
        }

        /* Trigger animation every 5 seconds */
        @keyframes repeatAnimation {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards,
            repeatAnimation 10s 1s infinite;
        }
      `}</style>
    </section>
  );
}

// Define VideoPlayer component with proper types
type VideoPlayerProps = {
  src: string;
  width: number;
  height: number;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width, height }) => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{ width, height }}
      className="rounded-lg shadow-xl"
    >
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};
