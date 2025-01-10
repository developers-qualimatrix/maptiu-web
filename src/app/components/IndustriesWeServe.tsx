"use client"
export default function IndustriesWeServe() {
    const industries = ['IT', 'Healthcare', 'Finance', 'Manufacturing', 'E-commerce', 'Telecommunications']
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-lg font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  