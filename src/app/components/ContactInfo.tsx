"use client"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <MapPin className="w-6 h-6 text-blue-500 mr-2" />
          <span>123 Business Street, Tech City, 12345</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-6 h-6 text-blue-500 mr-2" />
          <span>+1 (123) 456-7890</span>
        </div>
        <div className="flex items-center">
          <Mail className="w-6 h-6 text-blue-500 mr-2" />
          <span>contact@maptiu.com</span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Office Location</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729599!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

