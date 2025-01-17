"use client"
import { Users, Building2, GraduationCap } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Building2 className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">For Corporates</h3>
            <p className="text-gray-700">Access a pool of highly skilled students ready to contribute to your projects and potentially join your workforce.</p>
          </div>
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">For Colleges</h3>
            <p className="text-gray-700">Provide your students with access to top opportunities, enhancing their career prospects and your institutions reputation.</p>
          </div>
          <div className="text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">For Students</h3>
            <p className="text-gray-700">Discover internships and job openings that match your skills and aspirations, kickstarting your career journey.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

