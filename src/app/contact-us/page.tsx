"use client"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      <section className="relative overflow-hidden bg-black py-20 pt-24 text-white md:py-32">
        <div className="absolute left-0 top-0 h-full w-full opacity-50">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">Get in Touch</h1>
            <p className="mt-6 text-xl text-zinc-400">
              Have questions? We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl">Contact Information</h2>
            <Card className="bg-gradient-to-br from-[#FF4500] to-[#FF8C00] text-white rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="h-8 w-8" />
                <div>
                  <h3 className="font-heading text-xl">Email Us</h3>
                  <p className="mt-1">contact@maptiu.com</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#FF4500] to-[#FF8C00] text-white rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex items-center gap-4 p-6">
                <Phone className="h-8 w-8" />
                <div>
                  <h3 className="font-heading text-xl">Call Us</h3>
                  <p className="mt-1">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#FF4500] to-[#FF8C00] text-white rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="h-8 w-8" />
                <div>
                  <h3 className="font-heading text-xl">Visit Us</h3>
                  <p className="mt-1">New Broad Street House, 35 New Broad Street, London, UK, EC2M 1NH</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="font-heading text-3xl mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-8 md:grid-cols-2">
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
                className="bg-zinc-900 border-zinc-800 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl mb-2 text-[#FF4500]">{faq.question}</h3>
                  <p className="text-zinc-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl mb-8 text-center">Our Offices</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              city: "London",
              address: "New Broad Street House, 35 New Broad Street, London, UK, EC2M 1NH",
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
            <Card key={index} className="rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl mb-2">{office.city}</h3>
                <p className="text-muted-foreground mb-2">{office.address}</p>
                <p className="text-muted-foreground">{office.phone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl mb-8 text-center">Our Location</h2>
        <Card className="overflow-hidden rounded-md">
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

      <section className="bg-black text-white py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl mb-8 text-center">Connect with Us</h2>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: LinkedIn, href: "https://linkedin.com" },
              { icon: Instagram, href: "https://instagram.com" },
            ].map((social, index) => (
              <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-8 w-8 text-[#FF4500] hover:text-[#FF4500]/80 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

