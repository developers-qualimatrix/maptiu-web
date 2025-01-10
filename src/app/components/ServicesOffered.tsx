"use client"
export default function ServicesOffered() {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Services Offered</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">End-to-end Hiring Solutions</h3>
              <p className="text-gray-700">We manage the entire recruitment process, from job posting to onboarding, ensuring a seamless experience for both employers and candidates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Customized Recruitment Strategies</h3>
              <p className="text-gray-700">Our team develops tailored recruitment strategies that align with your company &rsquo;s unique needs, culture, and goals.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  