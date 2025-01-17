"use client";

export default function AboutUs() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Dot Background */}
      <div className="absolute inset-0 h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center">
        {/* Radial gradient mask for the dot background */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Purple circle - positioned partially off-screen on the left */}
      <div 
        className="absolute w-[22vw] aspect-square max-w-[400px] min-w-[200px]" 
        style={{
          background: '#16A34A', // Slack purple
          borderRadius: '50%',
          left: '-15vw',
          top: '10vh',
        }}
      />
      
      {/* Green circle - positioned partially off-screen on the right */}
      <div 
        className="absolute w-[22vw] aspect-square max-w-[400px] min-w-[200px]" 
        style={{
          background: '#93E3AB', // Slack green
          borderRadius: '50%',
          right: '-15vw',
          top: '55vh',
        }}
      />
      
      {/* Content */}
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex min-h-screen flex-col items-center justify-center">
          {/* Main text content */}
          <div className="text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              About Us
            </h1>
            
            <div className="mx-auto mt-6 max-w-3xl">
              <p className="text-base sm:text-lg lg:text-xl">
              Together, we can shape the future of work.
              </p>
              
              <p className="mt-4 text-sm text-gray-600 sm:text-base lg:text-lg">
                We bridge the gap between companies, talent, and resources, offering cutting-edge workforce solutions. Our mission is to provide businesses with access to top talent and help individuals discover meaningful career opportunities.
              </p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <a href="#learn-more" className="inline-flex text-white bg-green-700 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Learn More
            </a>
            <a href="#get-started" className="inline-flex text-green-700 bg-white border-2 border-green-700 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </a>
          </div>

          {/* About Us Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Connecting Companies with Talent Innovatively</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              We are dedicated to transforming the way businesses find talent. Our innovative solutions are designed to connect companies with highly skilled professionals, ensuring success for all parties involved.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-12 w-full max-w-4xl lg:mt-16">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:gap-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold sm:text-5xl lg:text-6xl">200K+</div>
                <div className="mt-2 text-sm text-gray-600">
                  paid<br />customers
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold sm:text-5xl lg:text-6xl">77</div>
                <div className="mt-2 text-sm text-gray-600">
                  of the Fortune 100<br />use our services
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold sm:text-5xl lg:text-6xl">150+</div>
                <div className="mt-2 text-sm text-gray-600">
                  countries have<br />daily active users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// import Image from "next/image";
// import { InView } from "react-intersection-observer";
// import { useState } from "react";
// export default function AboutUs() {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleVisibilityChange = (inView:any) => {
//     if (inView) {
//       setIsVisible(true);
//     }
//   };
//   return (
//     <section className="bg-gray-50">
//       {/* Top Section */}
//       <div className="bg-[#EDF8F0] py-12 m-4 rounded-lg relative h-[40vh]">
//   <div className="bg-[radial-gradient(#184640_2px,transparent_2px)] [background-size:12px_12px] absolute top-4 left-4 w-32 h-32 opacity-40"></div>
//   <div className="container mx-auto px-4 text-center h-full flex items-center justify-center">
//     <div className="animate-slideUp">
//       <h1 className="text-4xl font-bold text-[#0B151C]">About Us</h1>
//       <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//         At Maptiu, we are dedicated to bridging the gap between companies,
//         talent, and resources. Our mission is to provide innovative
//         workforce solutions and talent acquisition services, becoming the
//         trusted partner for businesses and individuals aiming for success.
//       </p>
//       <p className="text-[#184640] text-bold mt-4">Home → About</p>
//     </div>
//   </div>
//   <div className="bg-[radial-gradient(#184640_2px,transparent_2px)] [background-size:12px_12px] absolute bottom-4 right-4 w-32 h-32 opacity-40"></div>
// </div>

// <style>{`
//   @keyframes slideUp {
//     0% {
//       transform: translateY(50px);
//       opacity: 0;
//     }
//     100% {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   }

//   .animate-slideUp {
//     animation: slideUp 1s ease-out forwards;
//   }

//   .animate-slideUp h1 {
//     animation-delay: 0.2s;
//   }

//   .animate-slideUp p {
//     animation-delay: 0.4s;
//   }
// `}</style>


//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-16 pb-0 h-auto">
//         <div className="flex flex-wrap items-center">
          
//           {/* Left Section: Image */}
//             <div className="w-full md:w-[45%] relative mb-8 md:mb-0 pr-4">
//               <div className="relative h-[400px]">
//                 <div className="bg-[radial-gradient(#22645B_2px,transparent_2px)] [background-size:16px_16px] absolute inset-0 opacity-20"></div>
//                 <div className="relative z-10 h-full">
//                   <Image
//                     src="/assets/aboutus_workculture.jpg"
//                     alt="aboutus_workculture"
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             </div>

//           {/* Right Section: Content */}
//           <div
//       className="w-full md:w-[55%] border rounded-lg md:border-spacing-4 md:border-r-4 p-6 bg-[]"
//       style={{ opacity: isVisible ? 1 : 0 }}
//     >
//       <InView as="div" onChange={(inView) => handleVisibilityChange(inView)}>
//         <h2
//           className={`text-3xl font-bold text-[#184640] mb-4 ${
//             isVisible ? "animate-slideInText" : ""
//           }`}
//         >
//           Empowering Talent and Transforming Businesses
//         </h2>
//         <p
//           className={`text-gray-600 mb-8 ${isVisible ? "animate-slideInText" : ""}`}
//         >
//           At Maptiu, we believe in creating a brighter future by connecting
//           the right people with the right opportunities. Our comprehensive
//           solutions are designed to empower individuals and organizations to
//           achieve their goals seamlessly.
//         </p>

//         <div className="grid grid-cols-2 gap-6">
//           <div className={isVisible ? "animate-slideInText" : ""}>
//             <div className="flex items-center">
//               <svg
//                 className="w-6 h-6 text-[#184640]"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M9 12l2 2 4-4" />
//                 <path
//                   d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//               </svg>
//               <span className="ml-3 text-gray-700 font-medium">
//                 Tailored Talent Solutions
//               </span>
//             </div>
//             <p className="text-gray-500 mt-2">
//               We provide workforce solutions customized to your business needs,
//               ensuring a seamless talent acquisition process.
//             </p>
//           </div>

//           <div className={isVisible ? "animate-slideInText" : ""}>
//             <div className="flex items-center">
//               <svg
//                 className="w-6 h-6 text-[#184640]"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M9 12l2 2 4-4" />
//                 <path
//                   d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//               </svg>
//               <span className="ml-3 text-gray-700 font-medium">
//                 Expert Coaching & Training
//               </span>
//             </div>
//             <p className="text-gray-500 mt-2">
//               Our certified coaches and mentors provide unparalleled guidance,
//               equipping professionals with the skills needed for growth.
//             </p>
//           </div>

//           <div className={isVisible ? "animate-slideInText" : ""}>
//             <div className="flex items-center">
//               <svg
//                 className="w-6 h-6 text-[#184640]"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M9 12l2 2 4-4" />
//                 <path
//                   d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//               </svg>
//               <span className="ml-3 text-gray-700 font-medium">
//                 Innovative Workforce Planning
//               </span>
//             </div>
//             <p className="text-gray-500 mt-2">
//               We assist businesses in planning and executing innovative
//               strategies for workforce management and development.
//             </p>
//           </div>

//           <div className={isVisible ? "animate-slideInText" : ""}>
//             <div className="flex items-center">
//               <svg
//                 className="w-6 h-6 text-[#184640]"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M9 12l2 2 4-4" />
//                 <path
//                   d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//               </svg>
//               <span className="ml-3 text-gray-700 font-medium">
//                 Commitment to Excellence
//               </span>
//             </div>
//             <p className="text-gray-500 mt-2">
//               With a focus on quality and precision, we deliver results that
//               exceed expectations every time.
//             </p>
//           </div>
//         </div>
//       </InView>
//     </div>
  
// <style global>{`
//   @keyframes slideInFromRight {
//     0% {
//       transform: translateX(100%);
//       opacity: 0;
//     }
//     100% {
//       transform: translateX(0);
//       opacity: 1;
//     }
//   }

//   @keyframes slideInText {
//     0% {
//       transform: translateX(50px);
//       opacity: 0;
//     }
//     100% {
//       transform: translateX(0);
//       opacity: 1;
//     }
//   }

//   .animate-slideInFromRight {
//     animation: slideInFromRight 1s ease-out forwards;
//   }

//   .animate-slideInText {
//     animation: slideInText 0.8s ease-out forwards;
//   }

//   .animate-slideInText:nth-child(1) {
//     animation-delay: 0.2s;
//   }
//   .animate-slideInText:nth-child(2) {
//     animation-delay: 0.4s;
//   }
//   .animate-slideInText:nth-child(3) {
//     animation-delay: 0.6s;
//   }
//   .animate-slideInText:nth-child(4) {
//     animation-delay: 0.8s;
//   }
// `}</style>
//         </div>
//       </div>

//       {/* Contact Button */}
//       <div className="text-center py-8">
//         <button className="bg-[#1c3f3a] text-white px-6 py-3 rounded-lg shadow hover:bg-[#1c3f3a]">
//           Contact Us
//         </button>
//       </div>
//     </section>
//   );
// }
