import JobOpenings from '../components/JobOpenings'
import LifeAtCompany from '../components/LifeAtCompany'

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Careers</h1>
      <JobOpenings />
      <LifeAtCompany />
    </div>
  )
}

