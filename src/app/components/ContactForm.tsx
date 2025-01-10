'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
    });
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center content-center gap-4">
        {/* Left Section */}
        <div className="w-2/3 mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="mb-8 text-gray-400">
          If you are interested in becoming a Maptiu affiliate or learning more about our services, please fill out the form and our team will contact you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-400">
          <ul className="mb-6 space-y-4">
              <div className='flex flex-col'>
              {/* <Image/> */}
              <li className="flex flex-col items-left">
                <span className=" text-purple-500 mr-3">Hours</span>
                <span>24/5 for Emails and Live Chat</span>
              </li>
              </div>
              <div className='flex flex-col'>
              {/* <Image/> */}
              <li className="flex flex-col items-left">
                <span className=" text-purple-500 mr-3">place</span>
                <span>New Broad Street House, 35 New Broad Street, London, UK, EC2M 1NH</span>
              </li>
              </div>
              <div className='flex flex-col'>
              {/* <Image/> */}
              <li className="flex flex-col items-left">
                <span className=" text-purple-500 mr-3">email</span>
                <span>partnerships@maptiu.com</span>
              </li>
              </div>
          </ul>
          </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mx-6 px-8 py-8  bg-gray-800 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="description"
              placeholder="Please provide a short introduction about yourself."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-purple-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  );
}
