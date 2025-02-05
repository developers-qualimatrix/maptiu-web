"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { toast } from "@/hooks/use-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // URL of your Google Apps Script Web App
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbyLP3M552zbJHbY6798wu9ulQ5_Qzj8E2C7kcU_8W1flqrNN3IGa1sHoYpZc25Oz4C6/exec';

    try {
      // Attempt to send data to the Google Apps Script Web App
      await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Send the request with JSON format
      },
      mode: "no-cors",
      body: JSON.stringify(formData), // Send the form data as JSON
      });

      // If successful, show a success message
      toast({
      title: 'Success',
      description: 'Form submitted successfully!',
      variant: 'default',
      duration: 5000,
      className: 'bg-black text-white',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
      title: 'Error',
      description: 'Error submitting form',
      variant: 'destructive',
      duration: 5000,
      className: 'bg-black text-white',
      });
    }

    // Reset the form after submission
    setFormData({
      firstName: '',
      email: '',
      phone: '',
      description: '',
    });
  };
  
  return (
    <Card className="w-full bg-white shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <Input
            type="text"
            name="firstName"
            placeholder="Your Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73] block w-full p-2.5"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73] block w-full p-2.5"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73] block w-full p-2.5"
          />
          <Textarea
            name="description"
            placeholder="Please provide a short introduction about yourself."
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73] block w-full p-2.5"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#083B73] to-[#083B73] hover:from-[#083B73]/90 hover:to-[#FF8C00]/90 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}



// 'use client';

// import { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     // lastName: '',
//     email: '',
//     phone: '',
//     description: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
  
//     // The URL of your Google Apps Script Web App
//     const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbyLP3M552zbJHbY6798wu9ulQ5_Qzj8E2C7kcU_8W1flqrNN3IGa1sHoYpZc25Oz4C6/exec'; 
  
//     try {
//       // Attempt to send data to Google Apps Script Web App
//       await fetch(googleScriptUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json', // Correct Content-Type header
//         },
//         mode: "no-cors", // Allows you to send the request without waiting for a response
//         body: JSON.stringify(formData), // Send the form data as JSON
//       });

//       // If successful, show a success message
//       alert('Form submitted successfully!');
      
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Error submitting form');
//     }
  
//     // Reset the form after submission
//     setFormData({
//       firstName: '',
//       // lastName: '',
//       email: '',
//       phone: '',
//       description: '',
//     });
//   };
  

//   return (
//     <section className="p-4 sm:p-8 md:p-16 bg-gradient-to-br from-[#9FD6AE] via-[#d1e1d4] to-[#E7F2E9] text-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
//           <div className="w-full lg:w-1/2">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#184640] text-center lg:text-left">Get in Touch</h2>
//             <p className="mb-6 sm:mb-8 text-[#222] text-sm sm:text-base text-center lg:text-left">
//               If you are interested in becoming a Maptiu affiliate or learning more about our services, 
//               please fill out the form and our team will contact you as soon as possible.
//             </p>
//             <div className="space-y-6 text-gray-400">
//               <ul className="space-y-4">
//                 <li className="flex flex-col items-center">
//                   <span className="material-icons text-[#286059] bg-[] mr-3">schedule</span>
//                   <span className='text-[#222]'>24/5 for Emails and Live Chat</span>
//                 </li>
//                 <li className="flex flex-col items-center">
//                   <span className="material-icons text-[#286059] bg-[] mr-3">place</span>
//                   <span className='text-[#222]'>New Broad Street House, 35 New Broad Street, London, UK, EC2M 1NH</span>
//                 </li>
//                 <li className="flex flex-col items-center">
//                   <span className="material-icons text-[#286059] bg-[] mr-3">email</span>
//                   <span className='text-[#222]'>partnerships@maptiu.com</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2">
//             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full p-2 sm:p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
//                     required
//                   />
//                   {/* <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500"
//                     required
//                   /> */}
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 sm:p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Your Phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full p-2 sm:p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500 text-sm sm:text-base"
//                   required
//                 />
//                 <textarea
//                   name="description"
//                   placeholder="Please provide a short introduction about yourself."
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="w-full p-2 sm:p-3 bg-white/20 text-gray-800 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#409084] focus:border-transparent placeholder-gray-500 resize-none text-sm sm:text-base"
//                   rows={5}
//                   required
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="w-full md:w-auto inline-flex justify-center text-white bg-green-700 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-green-600 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//   // return (
//   //   <section className=" flex items-center justify-center p-4">
//   //     <div className="w-full max-w-4xl rounded-3xl overflow-hidden relative bg-[#A5DCB4]">
//   //       {/* Circular gradient overlay */}
//   //       <div className="absolute inset-0 bg-gradient-radial bg-gradient-to-br from-[#9FD6AE] via-[#d1e1d4] to-[#E7F2E9]" />
        
//   //       <div className="relative z-10 p-12 md:p-16">
//   //         <div className="grid md:grid-cols-2 gap-12">
//   //           {/* Left content */}
//   //           <div className="text-[#262626]">
//   //             <h1 className="text-5xl font-bold mb-6">Contact us</h1>
//   //             <p className="text-lg leading-relaxed opacity-90">
//   //             If you are interested in becoming a Maptiu affiliate or learning more about our services, please fill out the form and our team will contact you as soon as possible.
//   //             </p>
//   //           </div>
  
//   //           {/* Right content - Form */}
//   //           <div>
//   //             <form onSubmit={handleSubmit} className="space-y-6">
//   //               <div className="space-y-6">
//   //                 <div className="relative">
//   //                   <input
//   //                     type="text"
//   //                     name="firstName"
//   //                     value={formData.firstName}
//   //                     onChange={handleChange}
//   //                     className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/70 focus:border-white/30 focus:outline-none focus:bg-transparent"
//   //                     placeholder="Name"
//   //                     required
//   //                   />
//   //                 </div>
                  
//   //                 <div className="relative">
//   //                   <input
//   //                     type="email"
//   //                     name="email"
//   //                     value={formData.email}
//   //                     onChange={handleChange}
//   //                     className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/70 focus:border-white/30 focus:outline-none focus:bg-transparent"
//   //                     placeholder="Email"
//   //                     required
//   //                   />
//   //                 </div>
  
//   //                 <div className="relative">
//   //                   <input
//   //                     type="tel"
//   //                     name="phone"
//   //                     value={formData.phone}
//   //                     onChange={handleChange}
//   //                     className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/70 focus:border-white/30 focus:outline-none focus:bg-transparent"
//   //                     placeholder="Phone"
//   //                     required
//   //                   />
//   //                 </div>
  
//   //                 <div className="relative">
//   //                   <textarea
//   //                     name="description"
//   //                     value={formData.description}
//   //                     onChange={handleChange}
//   //                     className="w-full bg-transparent border-b-2 border-white/30 px-0 py-3 text-white placeholder-white/70 focus:border-white/30 focus:outline-none focus:bg-transparent resize-none"
//   //                     placeholder="Your Message"
//   //                     rows={4}
//   //                     required
//   //                   />
//   //                 </div>
//   //               </div>
  
//   //               <div className="flex justify-end">
//   //                 <button
//   //                   type="submit"
//   //                   className=" px-8 py-3 bg-[#2A5F57] hover:bg-[#234E48] text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#409084] focus:ring-offset-2 transform hover:scale-[0.99]rounded-lg  hover:bg-white/90 "
//   //                 >
//   //                   SUBMIT
//   //                 </button>
//   //               </div>
//   //             </form>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </section>
//   // );
