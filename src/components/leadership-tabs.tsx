"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const cultureTabData = [
  {
    id: 1,
    description:
      "Learn and Unlearn every day, the world is changing faster than our expectations and to be an expert in your field you have to learn something new every day, and at the same time, you need to figure out what you need to unlearn also.",
    imageName: "/placeholder.svg?height=1080&width=1920",
    empName: "Atul Bharat",
    empPosition: "CPO",
  },
  {
    id: 2,
    description:
      "Talented and Intelligent minds are the toughest to be managed, but not when you are a patient person and a good listener you can sustain the balance. People perform with excellence when they feel motivated at their Workplace, As an Hr I try my best to make this work an abode of Growth and satisfaction for everyone.",
    imageName: "/placeholder.svg?height=1080&width=1920",
    empName: "Tushar Pal",
    empPosition: "CEO",
  },
  {
    id: 3,
    description:
      "Its possible' Weather personal or professional life I have always preferred this attitude. Being a Test Architect this approach has helped me come along way when I look at bugs the only thing I got to do is to kill them.",
    imageName: "/placeholder.svg?height=1080&width=1920",
    empName: "Pratap Nair",
    empPosition: "COO",
  },
  {
    id: 4,
    description:
      "We don't just sell services; we build success stories. The vibrant culture and innovative spirit not only reflect in our projects but also in the personal and professional growth of each team member. Delivering Quality is our Marketing Strategy now whether it is our services, products or our work culture.",
    imageName: "/placeholder.svg?height=1080&width=1920",
    empName: "Mahwish Khan",
    empPosition: "CMO",
  },
];

const CultureTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="qt-culture-custom-tabs p-4 sm:p-6 bg-white">
      <div className="tabsContainer flex flex-col items-center pb-4 sm:pb-8">
        <div className="text-wrap relative text-center mb-4 sm:mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#083B73]">
            Meet Our Leaders
          </span>

          <div className="tabs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 sm:mt-6 ">
            {cultureTabData.map((tab) => (
              <div
                key={tab.id}
                className={`tab cursor-pointer border-[#083B73]/10 transition-all duration-300 hover:border-[#083B73]/50 hover:shadow-xl hover:shadow-[#083B73]/20 hover:-translate-y-1 ${
                  activeTab === tab.id
                    ? "bg-[#f0f0f0] text-black"
                    : "bg-[#f0f0f0]"
                } p-6 rounded-lg transform transition-all hover:scale-105 flex flex-col items-center`}
                onClick={() => handleTabClick(tab.id)}
              >
                <Image
                  src={tab.imageName || "/placeholder.svg"}
                  alt={tab.empName}
                  width={32}
                  height={32}
                  className={`tab-image ${
                    activeTab === tab.id
                      ? "border-4 border-[#7ED957]"
                      : "border-4 border-[#f0f0f0]"
                  } w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-[#7ED957]/10 mb-4`}
                />
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl text-black">
                  {tab.empName}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{tab.empPosition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tabContent mt-4 sm:mt-6">
        {cultureTabData.map((tab) => (
          <div
            key={tab.id}
            className={`tabPane ${activeTab === tab.id ? "block" : "hidden"}`}
          >
            <div className="container px-4 sm:px-5 py-2 mx-auto text-center">
              <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
                <div className="culture-title text-2xl sm:text-3xl font-semibold text-[#083B73] mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-500 mb-4 sm:mb-6 md:mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                </div>

                <div className="culture-description text-base sm:text-lg text-gray-600 mb-4 italic">
                  &quot;A company&apos;s true strength lies in the people who drive its
                  success. Together, we build something extraordinary.&quot;
                </div>

                <div className="small-boxes flex justify-center mt-2 sm:mt-4 space-x-2">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#083B73] rounded-full"></span>
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#083B73] rounded-full"></span>
                </div>

                <div className="tab-description mt-4 text-base sm:text-lg text-gray-700 mb-4">
                  {tab.description}
                </div>

                <div className="employee-name text-lg sm:text-xl font-medium text-[#083B73] mb-2">
                  {tab.empName}
                </div>

                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-1 mb-1"></span>

                {/* <h2 className="text-gray-800 font-medium title-font tracking-wider text-sm sm:text-base">
                  {tab.empName}
                </h2> */}
                <p className="text-gray-500 text-xs sm:text-sm">{tab.empPosition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureTabs;
