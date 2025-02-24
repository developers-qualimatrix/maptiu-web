"use client";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Map, Clock, MapPinned } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24 md:py-28 lg:py-32 text-white">
        <div className="absolute inset-0">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50 mix-blend-overlay"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="container relative px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 sm:mb-6" variant="outline">
                Contact Maptiu
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
                Get in{" "}
                <span className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-400">
                Have questions? We&apos;d love to hear from you. Send us a
                message and we&apos;ll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl">
              Contact Information
            </h2>
            <Card className="bg-gradient-to-br from-[#083B73] to-[#083B73] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20">
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
                <div>
                  <h3 className="font-heading text-lg sm:text-xl">Email Us</h3>
                  <p className="mt-1 text-sm sm:text-base">
                    support@maptiu.com
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#083B73] to-[#083B73] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20">
              <CardContent className="flex items-center gap-4 p-6">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
                <div>
                  <h3 className="font-heading text-lg sm:text-xl">Call Us</h3>
                  <p className="mt-1 text-sm sm:text-base">+91 9993158721</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#083B73] to-[#083B73] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20">
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                <div>
                  <h3 className="font-heading text-lg sm:text-xl">Visit Us</h3>
                  <p className="mt-1 text-sm sm:text-base">
                    505-506 , Cliffton Corporate, Vijay Nagar, Indore, Madhya
                    Pradesh 452010
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              {
                question:
                  "Is there a demo or trial version available before full implementation?",
                answer:
                  "Yes, SkilAccess provides a three-month free trial with full access to all features, allowing you to explore the platform's complete functionality before committing.",
              },
              {
                question:
                  "Can companies filter candidates based on their skills and eligibility after receiving nominations?",
                answer:
                  "Yes, companies can filter candidates based on the skills listed in their resumes and the information provided by colleges during nominations.",
              },
              {
                question:
                  "Can we customize tests for specific skill sets or job roles?",
                answer:
                  "Yes, you can customize tests based on specific skills related to the job you are posting.",
              },
              {
                question:
                  "Can companies extend deadlines for applications or tests if needed?",
                answer:
                  "Yes, companies can extend the deadlines for applications or tests as per their requirements for the job.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg sm:text-xl mb-2 text-[#7ED957]">
                    {faq.question}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24 px-4">
        <h2 className="font-heading text-4xl lg:text-5xl mb-16 text-center text-black">
          Our Location
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full transform -translate-x-12 translate-y-12 opacity-50" />

            {/* Main Content */}
            <div className="relative p-8 lg:p-12">
              {/* Location Pin Badge */}
              <div className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible">
                <div className="bg-white p-4 rounded-full shadow-lg border-4 border-blue-100 transition-transform duration-300 hover:rotate-12">
                  <MapPinned size={48} className="text-blue-600" />
                </div>
              </div>

              {/* City Name */}
              <h3 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mt-16 mb-8 text-blue-900">
                Indore
              </h3>

              {/* Info Grid */}
              <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-1">
                {/* Address */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mb-3" />
                  <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    505-506 , Cliffton Corporate, Vijay Nagar, Indore, Madhya
                    Pradesh 452010
                  </p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                    <Phone className="w-6 h-6 text-blue-600 mb-3" />
                    <p className="text-gray-700">+91 9993158721</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                    <Clock className="w-6 h-6 text-blue-600 mb-3" />
                    <p className="text-gray-700">Mon-Fri: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <div className="mt-12 flex justify-center">
                <a
                  href="https://maps.app.goo.gl/dbkbLTU223Y6Yqjv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-[#083B73] text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:bg-[#083B73]/90 hover:shadow-xl hover:scale-105"
                >
                  <Map className="w-6 h-6 transition-transform group-hover:rotate-12" />
                  <span>View on Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
