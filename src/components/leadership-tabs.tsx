"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const cultureTabData = [
  {
    id: 1,
    description:
      "Its possible' Weather personal or professional life I have always preferred this attitude. Being a Test Architect this approach has helped me come along way when I look at bugs the only thing I got to do is to kill them.",
    imageName: "/placeholder.svg?height=1080&width=1920",
    empName: "Pratap Nair",
    empPosition: "COO",
  },
  {
    id: 2,
    description:
      "Learn and Unlearn every day, the world is changing faster than our expectations and to be an expert in your field you have to learn something new every day, and at the same time, you need to figure out what you need to unlearn also.",
    imageName: "/placeholder.svg?height=1080&width=1920",
    empName: "Atul Bharat",
    empPosition: "CPO",
  },
  {
    id: 3,
    description:
      "Talented and Intelligent minds are the toughest to be managed, but not when you are a patient person and a good listener you can sustain the balance. People perform with excellence when they feel motivated at their Workplace, As an Hr I try my best to make this work an abode of Growth and satisfaction for everyone.",
    imageName: "/placeholder.svg?height=1080&width=1920",
    empName: "Tushar Pal",
    empPosition: "CEO",
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
    <div className="qt-culture-custom-tabs p-6 bg-white rounded-lg shadow-md">
      <div className="tabsContainer flex flex-col items-center pb-8">
        <div className="text-wrap relative text-center mb-6">
          {/* <img
            src="/assets/culture/diagonal.svg"
            alt="diagonal svg"
            className="diagonal-img absolute top-[-10px] left-[-10px] w-1/2 opacity-20"
          /> */}
          <span className="text-4xl font-bold text-[#083B73]">
            Meet Our Leaders
          </span>

          <div className="tabs flex space-x-6 mt-6">
            {cultureTabData.map((tab) => (
              <div
                key={tab.id}
                className={`tab cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#f0f0f0] text-black"
                    : "bg-[#f0f0f0]"
                } p-8 rounded-lg transform transition-all hover:scale-105`}
                onClick={() => handleTabClick(tab.id)}
              >
                <Image
                  src={tab.imageName}
                  alt={tab.empName}
                  width={32}
                  height={32}
                  className={`tab-image ${
                    activeTab === tab.id
                      ? "border-4 border-[#7ED957]"
                      : "border-4 border-[#f0f0f0]"
                  } w-48 h-48 rounded-full object-cover border-4 border-[#7ED957]/10 mb-4`}
                />
                <h3 className="font-heading text-2xl text-blackk ">
                  {tab.empName}
                </h3>
                <p className="text-whitee text-sm">{tab.empPosition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tabContent mt-6">
        {cultureTabData.map((tab) => (
          <div
            key={tab.id}
            className={`tabPane ${activeTab === tab.id ? "block" : "hidden"}`}
          >
            <div className="tab-content text-center">
              <div className="culture-title text-3xl font-semibold text-[#083B73]">
                {/* OUR CULTURE */}
              </div>
              <div className="culture-description text-lg text-gray-600 mt-3">
                Accept or not; the employees make every organization reach the
                zenith of success.
              </div>
              <div className="small-boxes flex justify-center mt-4 space-x-2">
                <span className="small-box-1 w-3 h-3 bg-[#083B73] rounded-full"></span>
                <span className="small-box-2 w-3 h-3 bg-[#083B73] rounded-full"></span>
              </div>
              <div className="tab-description mt-4 text-lg text-gray-700">
                {tab.description}
              </div>
              <div className="employee-name text-xl font-medium mt-4">
                {tab.empName}
              </div>
              <div className="user-position text-sm text-gray-500">
                {tab.empPosition}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureTabs;
