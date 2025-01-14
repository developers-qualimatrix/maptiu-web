'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    // lastName: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    // The URL of your Google Apps Script Web App
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbyLP3M552zbJHbY6798wu9ulQ5_Qzj8E2C7kcU_8W1flqrNN3IGa1sHoYpZc25Oz4C6/exec'; 
  
    try {
      // Attempt to send data to Google Apps Script Web App
      await fetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Correct Content-Type header
        },
        mode: "no-cors", // Allows you to send the request without waiting for a response
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      // If successful, show a success message
      alert('Form submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  
    // Reset the form after submission
    setFormData({
      firstName: '',
      // lastName: '',
      email: '',
      phone: '',
      description: '',
    });
  };
  
  return (
    <section className=" flex items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden relative bg-[#A5DCB4]">
        {/* Circular gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial bg-gradient-to-br from-[#9FD6AE] via-[#d1e1d4] to-[#E7F2E9]" />
        
        <div className="relative z-10 p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left content */}
            <div className="text-[#262626]">
              <h1 className="text-5xl font-bold mb-6">Contact us</h1>
              <p className="text-lg leading-relaxed opacity-90">
              If you are interested in becoming a Maptiu affiliate or learning more about our services, please fill out the form and our team will contact you as soon as possible.
              </p>
            </div>
  
            {/* Right content - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/70 focus:border-white/30 focus:outline-none focus:bg-transparent"
                      placeholder="Name"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/70 focus:border-white/30 focus:outline-none focus:bg-transparent"
                      placeholder="Email"
                      required
                    />
                  </div>
  
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/70 focus:border-white/30 focus:outline-none focus:bg-transparent"
                      placeholder="Phone"
                      required
                    />
                  </div>
  
                  <div className="relative">
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/70 focus:border-white/30 focus:outline-none focus:bg-transparent resize-none"
                      placeholder="Your Message"
                      rows={4}
                      required
                    />
                  </div>
                </div>
  
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className=" px-8 py-3 bg-[#2A5F57] hover:bg-[#234E48] text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#409084] focus:ring-offset-2 transform hover:scale-[0.99]rounded-lg  hover:bg-white/90 "
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  

  // return (
  //   // <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
  //   <section className="p-16 rounded-lg mx-24 bg-gradient-to-br from-[#9FD6AE] via-[#d1e1d4] to-[#E7F2E9] text-white">

  //     <div className="container mx-auto px-4">
  //       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
  //         {/* Left Section */}
  //         <div className="w-full md:w-1/2">
  //           <h2 className="text-5xl font-bold mb-6 text-[#184640] flex items-center justify-center">Get in Touch</h2>
  //           <p className="mb-8 text-[#222] flex text-center">
  //             If you are interested in becoming a Maptiu affiliate or learning more about our services, 
  //             please fill out the form and our team will contact you as soon as possible.
  //           </p>
  //           <div className="space-y-6 text-gray-400">
  //             <ul className="space-y-4">
  //               <li className="flex flex-col items-center">
  //                 <span className="material-icons text-[#286059] bg-[] mr-3">schedule</span>
  //                 <span className='text-[#222]'>24/5 for Emails and Live Chat</span>
  //               </li>
  //               <li className="flex flex-col items-center">
  //                 <span className="material-icons text-[#286059] bg-[] mr-3">place</span>
  //                 <span className='text-[#222]'>New Broad Street House, 35 New Broad Street, London, UK, EC2M 1NH</span>
  //               </li>
  //               <li className="flex flex-col items-center">
  //                 <span className="material-icons text-[#286059] bg-[] mr-3">email</span>
  //                 <span className='text-[#222]'>partnerships@maptiu.com</span>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>

  //         {/* Right Section */}
  //         <div className="w-full md:w-1/2">
  //           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
  //             <form onSubmit={handleSubmit} className="space-y-6">
  //               <div className="flex flex-col sm:flex-row gap-4">
  //                 <input
  //                   type="text"
  //                   name="firstName"
  //                   placeholder="First Name"
  //                   value={formData.firstName}
  //                   onChange={handleChange}
  //                   className="w-full p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500"
  //                   required
  //                 />
  //                 <input
  //                   type="text"
  //                   name="lastName"
  //                   placeholder="Last Name"
  //                   value={formData.lastName}
  //                   onChange={handleChange}
  //                   className="w-full p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500"
  //                   required
  //                 />
  //               </div>
  //               <input
  //                 type="email"
  //                 name="email"
  //                 placeholder="Your Email"
  //                 value={formData.email}
  //                 onChange={handleChange}
  //                 className="w-full p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500"
  //                 required
  //               />
  //               <input
  //                 type="tel"
  //                 name="phone"
  //                 placeholder="Your Phone"
  //                 value={formData.phone}
  //                 onChange={handleChange}
  //                 className="w-full p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500"
  //                 required
  //               />
  //               <textarea
  //                 name="description"
  //                 placeholder="Please provide a short introduction about yourself."
  //                 value={formData.description}
  //                 onChange={handleChange}
  //                 className="w-full p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500 resize-none"
  //                 rows={5}
  //                 required
  //               ></textarea>
  //               <button
  //                 type="submit"
  //                 className="w-full p-3 bg-[#2A5F57] hover:bg-[#234E48] text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#409084] focus:ring-offset-2 transform hover:scale-[0.99]"
  //               >
  //                 Submit
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}

