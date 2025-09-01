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
      <div className="w-full h-[600px] flex justify-center items-center">
        <div className="w-1/2 h-full flex justify-center items-center gap-5">
          <div className="space-y-4">
            {Data.map((item, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border max-w-[500px]  border-gray-700/50 rounded-lg overflow-hidden
                hover:border-white  transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-[#FFD23D]/10 hover:-translate-y-1"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 lg:px-8 lg:py-8 text-right flex items-center justify-between
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset
                  transition-all duration-300 ease-out"
                >
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg lg:text-xl font-semibold text-white leading-tight
                      group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className={`w-[43px] h-[36px] ml-2 bg-white rounded-[44px] 
                      flex items-center justify-center transition-all duration-500 ease-out
                      group-hover:bg-white   group-hover:shadow-lg 
                      ${openIndex === index ? 'rotate-180 bg-white' : ''}`}>
                      <ArrowDown className={`w-5 h-5 transition-colors duration-300
                        ${openIndex === index ? 'text-black' : 'text-black group-hover:text-black'}`} />
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-out
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 lg:px-8 lg:pb-8">
                    <div className="w-full h-px bg-black/20 backdrop-blur-lg  mb-6"></div>
                    <p className="text-white leading-relaxed text-[13px] font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className={`h-1 bg-white
                  transition-opacity duration-500 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 h-max pt-5 pb-5 flex justify-center items-center">
            <div className="w-max  h-max p-5 rounded-[20px] flex justify-center items-center bg-[#1D1D1D]">
                {openIndex !== null && (
                  <Image
                    src={Data[openIndex].icon}
                    alt={Data[openIndex].title}
                    className="object-contain"
                    priority
                  />
                )}
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Stats;
