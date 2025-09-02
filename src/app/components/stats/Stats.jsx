import React, { useState } from "react";
import Image from "next/image";
import Card from "./card";
import BlackBot from "../../../../public/blackBot.svg";
import card1 from "../../../../public/card1.svg";
import card2 from "../../../../public/card2.svg";
import card3 from "../../../../public/card3.svg";
import { ArrowDown } from "lucide-react";

const Stats = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  const Data = [
    {
      id: 1,
      icon: card1,
      title: "Ai conversation analysis",
      desc: "Yes, the courses are designed for beginners as well as experienced professionals. They include both theoretical insights and practical applications.",
    },
    {
      id: 2,
      icon: card2,
      title: "Ai conversation analysis",
      desc: "Yes, the courses are designed for beginners as well as experienced professionals. They include both theoretical insights and practical applications.",
    },
    {
      id: 3,
      icon: card3,
      title: "Lightbox Signage & Storefront",
      desc: "Yes, the courses are designed for beginners as well as experienced professionals. They include both theoretical insights and practical applications.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-step relative overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full max-w-4xl text-center pb-5 sm:pb-8 lg:pb-12">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
          dir="rtl"
        >
          نتائج حقيقية لعملائنا
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFD23D] to-transparent mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-center lg:h-[600px] gap-8 lg:gap-0">
        
        {/* Left Section - Dropdowns */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="space-y-4 w-full max-w-md sm:max-w-lg lg:max-w-[500px]">
            {Data.map((item, index) => (
              <div key={index}>
                {/* Dropdown Card */}
                <div
                  className={`group bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden
                  hover:border-white transition-all duration-700 ease-in-out
                  hover:shadow-2xl hover:shadow-[#FFD23D]/10 hover:-translate-y-1 hover:scale-[1.02]
                  ${openIndex === index ? 'border-white/40 shadow-lg shadow-white/10 scale-[1.01]' : ''}`}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 text-right gap-10 max-[700px]:gap-[10px] flex items-center justify-between
                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset
                    transition-all duration-500 ease-in-out"
                  >
                    <div className="flex-1 ml-3 sm:ml-4">
                      <h3 className={`text-base sm:text-lg lg:text-xl font-semibold leading-tight
                        transition-all duration-500 ease-in-out
                        ${openIndex === index ? 'text-white scale-[1.02]' : 'text-white group-hover:text-white'}`}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-7 sm:w-10 sm:h-8 lg:w-[43px] lg:h-[36px] ml-2 bg-white rounded-[30px] lg:rounded-[44px] 
                        flex items-center justify-center transition-all duration-500 ease-in-out
                        group-hover:bg-white group-hover:shadow-lg group-hover:scale-110
                        ${openIndex === index ? 'rotate-180 bg-white shadow-lg scale-110' : ''}`}>
                        <ArrowDown className={`w-4 h-4 lg:w-5 lg:h-5 transition-all duration-500 ease-in-out
                          ${openIndex === index ? 'text-black' : 'text-black group-hover:text-black'}`} />
                      </div>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
                      <div className="w-full h-px bg-black/20 backdrop-blur-lg mb-4 sm:mb-6 transform transition-all duration-500 ease-in-out"></div>
                      <p className={`text-white leading-relaxed text-xs sm:text-sm lg:text-[13px] font-normal 
                        transition-all duration-500 ease-in-out transform
                        ${openIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div className={`h-1 bg-white transition-all duration-700 ease-in-out
                    ${openIndex === index ? 'opacity-100 shadow-lg shadow-white/50' : 'opacity-0'}`}></div>
                </div>

                {/* Mobile/Tablet Image - Shows directly under each dropdown when open */}
                <div className="lg:hidden">
                  {openIndex === index && (
                    <div className="mt-4 flex justify-center">
                      <div className="w-full max-w-sm h-auto p-4 sm:p-5 rounded-[20px] flex justify-center items-center bg-[#1D1D1D] 
                                    transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-white/10">
                        <div className="transition-all duration-700 ease-in-out transform">
                          <Image
                            src={Data[openIndex].icon}
                            alt={Data[openIndex].title}
                            className="object-contain w-full h-auto max-h-[200px] sm:max-h-[250px]
                                     transition-all duration-700 ease-in-out transform 
                                     hover:scale-105 animate-in fade-in zoom-in"
                            priority
                            key={`mobile-${openIndex}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Right Section - Image Display (hidden on mobile/tablet) */}
        <div className="hidden lg:flex w-1/2 h-max pt-5 pb-5 justify-center items-center">
          <div className="w-max h-max p-5 rounded-[20px] flex justify-center items-center bg-[#1D1D1D] 
                        transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-white/10">
            {openIndex !== null && (
              <div className="transition-all duration-700 ease-in-out transform">
                <Image
                  src={Data[openIndex].icon}
                  alt={Data[openIndex].title}
                  className="object-contain transition-all duration-700 ease-in-out transform 
                           hover:scale-105 animate-in fade-in zoom-in"
                  priority
                  key={`desktop-${openIndex}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
