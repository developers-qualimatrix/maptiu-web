"use client";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
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
                    contact@maptiu.com
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#083B73] to-[#083B73] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20">
              <CardContent className="flex items-center gap-4 p-6">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
                <div>
                  <h3 className="font-heading text-lg sm:text-xl">Call Us</h3>
                  <p className="mt-1 text-sm sm:text-base">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#083B73] to-[#083B73] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20">
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />
                <div>
                  <h3 className="font-heading text-lg sm:text-xl">Visit Us</h3>
                  <p className="mt-1 text-sm sm:text-base">
                    New Broad Street House, 35 New Broad Street, London, UK,
                    EC2M 1NH
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
                question: "What services does Maptiu offer?",
                answer:
                  "Maptiu offers a range of talent acquisition services including AI-driven matching, end-to-end recruitment, and resource augmentation.",
              },
              {
                question: "How does Maptiu's AI matching work?",
                answer:
                  "Our AI analyzes job requirements and candidate profiles to find the best matches, considering skills, experience, and cultural fit.",
              },
              {
                question: "What industries does Maptiu serve?",
                answer:
                  "We serve a wide range of industries including tech, finance, healthcare, and more. Our solutions are adaptable to various sectors.",
              },
              {
                question: "How quickly can Maptiu find suitable candidates?",
                answer:
                  "Depending on the role and requirements, we typically present suitable candidates within 1-2 weeks of initiating the search.",
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

      <section className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-center">
          Our Offices
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              city: "London",
              address:
                "New Broad Street House, 35 New Broad Street, London, UK, EC2M 1NH",
              phone: "+44 20 1234 5678",
            },
            {
              city: "New York",
              address: "350 Fifth Avenue, New York, NY 10118, USA",
              phone: "+1 212 123 4567",
            },
            {
              city: "Singapore",
              address: "1 Raffles Place, #20-61 Tower 2, Singapore 048616",
              phone: "+65 6123 4567",
            },
          ].map((office, index) => (
            <Card
              key={index}
              className="rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-[#083B73]/10 hover:border-[#083B73]/50 hover:shadow-[#083B73]/20"
            >
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">{office.city}</h3>
                <p className="text-muted-foreground mb-2 text-sm sm:text-base">
                  {office.address}
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {office.phone}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-center">
          Our Location
        </h2>
        <Card className="overflow-hidden rounded-lg">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8974796330166!2d-0.08472508487059922!3d51.51714001772752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cad4b5b1e1d%3A0x9a7d1f3e9f7c6f9e!2sNew%20Broad%20Street%20House%2C%2035%20New%20Broad%20St%2C%20London%20EC2M%201NH%2C%20UK!5e0!3m2!1sen!2s!4v1645654524549!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maptiu Office Location"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
