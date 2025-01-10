import HireItIntro from '../components/HireItIntro'
import ServicesOffered from '../components/ServicesOffered'
import WhyChooseUs from '../components/WhyChooseUs'
import ClientSuccessStories from '../components/ClientSuccessStories'
import ContactForm from '../components/ContactForm'

export default function HireIt() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HireItIntro />
      <ServicesOffered />
      <WhyChooseUs />
      <ClientSuccessStories />
      <ContactForm />
    </div>
  )
}

