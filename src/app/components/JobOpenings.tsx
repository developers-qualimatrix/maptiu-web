"use client"
export default function JobOpenings() {
    const jobs = [
      { title: 'Software Engineer', department: 'Engineering', location: 'Remote' },
      { title: 'Product Manager', department: 'Product', location: 'New York' },
      { title: 'Data Scientist', department: 'Analytics', location: 'San Francisco' },
      { title: 'UX Designer', department: 'Design', location: 'London' },
    ]
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Current Job Openings</h2>
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">Department: {job.department}</p>
                <p className="text-gray-600 mb-4">Location: {job.location}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  