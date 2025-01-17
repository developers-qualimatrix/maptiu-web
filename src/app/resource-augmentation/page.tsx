import ResourceAugmentationIntro from '../components/ResourceAugmentationIntro'
import OurApproach from '../components/OurApproach'
import IndustriesWeServe from '../components/IndustriesWeServe'
import WhyChooseOurResources from '../components/WhyChooseOurResources'
import CaseStudies from '../components/CaseStudies'
import ContactForm from '../components/ContactForm'

export default function ResourceAugmentation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ResourceAugmentationIntro />
      <OurApproach />
      <IndustriesWeServe />
      <WhyChooseOurResources />
      <CaseStudies />
      <ContactForm />
    </div>
  )
}

