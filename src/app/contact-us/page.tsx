import ContactForm from '../components/ContactForm'
import ContactInfo from "../components/ContactInfo";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <ContactInfo />
      <ContactForm />
    </div>
  )
}

