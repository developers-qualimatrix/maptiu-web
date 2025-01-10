"use client";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="bg-gray-50">
      {/* Top Section */}
      <div className="bg-blue-100 py-12 rounded-b-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Maptiu, we are dedicated to bridging the gap between companies,
            talent, and resources. Our mission is to provide innovative
            workforce solutions and talent acquisition services, becoming the
            trusted partner for businesses and individuals aiming for success.
          </p>
          <p className="text-blue-500 mt-4">Home → About</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 pb-0">
        <div className="flex flex-wrap items-center">
          {/* Left Section: Image */}
          <div className="w-full relative mb-8 md:mb-0 md:w-1/2">
            <div className="relative">
              <Image
                src="/assets/aboutus_workculture.jpg" // Remove 'public' from the path
                alt="aboutus_workculture"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Empowering Talent and Transforming Businesses
            </h2>
            <p className="text-gray-600 mb-8">
              At Maptiu, we believe in creating a brighter future by connecting
              the right people with the right opportunities. Our comprehensive
              solutions are designed to empower individuals and organizations to
              achieve their goals seamlessly.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700 font-medium">
                    Tailored Talent Solutions
                  </span>
                </div>
                <p className="text-gray-500 mt-2">
                  We provide workforce solutions customized to your business
                  needs, ensuring a seamless talent acquisition process.
                </p>
              </div>

              <div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700 font-medium">
                    Expert Coaching & Training
                  </span>
                </div>
                <p className="text-gray-500 mt-2">
                  Our certified coaches and mentors provide unparalleled
                  guidance, equipping professionals with the skills needed for
                  growth.
                </p>
              </div>

              <div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700 font-medium">
                    Innovative Workforce Planning
                  </span>
                </div>
                <p className="text-gray-500 mt-2">
                  We assist businesses in planning and executing innovative
                  strategies for workforce management and development.
                </p>
              </div>

              <div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700 font-medium">
                    Commitment to Excellence
                  </span>
                </div>
                <p className="text-gray-500 mt-2">
                  With a focus on quality and precision, we deliver results that
                  exceed expectations every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center py-8">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
          Contact Us
        </button>
      </div>
    </section>
  );
}
