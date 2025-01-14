import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import FeatureCards from "./components/FeatureCard";
import Hero from "./components/hero";
import OurSolutions from "./components/OurSolutions";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div>
      <FeatureCards />
      </div>
      <div className="py-8">
        <AboutUs />
      </div>
      <div className="py-8">
        <OurSolutions />
      </div>
      <div className="py-8">
        <ContactForm />
      </div>
    </div>
  )
}