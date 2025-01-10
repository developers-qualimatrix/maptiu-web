import SkillAccessIntro from '../components/SkillAccessIntro'
import HowItWorks from '../components/HowItWorks'
import KeyFeatures from '../components/KeyFeatures'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

export default function SkillAccess() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SkillAccessIntro />
      <HowItWorks />
      <KeyFeatures />
      <Testimonials />
      <CallToAction />
    </div>
  )
}