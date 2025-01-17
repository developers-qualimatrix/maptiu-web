import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Hero from "./components/hero";
import OurSolutions from "./components/OurSolutions";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="py-">
        <AboutUs />
      </div>
      <div className="py-">
        <OurSolutions />
      </div>
      <div className="py-">
        <ContactForm />
      </div>
    </div>
  );
}

// console.log(hello)
// console.log(hello)
