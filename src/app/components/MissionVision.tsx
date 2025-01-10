"use client"
export default function MissionVision() {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission and Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                Bridging the gap between companies, talent, and resources. We strive to create innovative solutions that connect businesses with the right talent, fostering growth and success for all parties involved.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading partner in workforce solutions and talent acquisition. We aim to revolutionize the way companies and talent connect, creating a more efficient and effective ecosystem for the global job market.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  