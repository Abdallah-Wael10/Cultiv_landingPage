import React from "react";
import Image from "next/image";

const Card = ({ title, desc, icon, percentage }) => {
  return (
    <div
      className="group w-[90%] max-w-lg bg-[#2A2A2A]  p-4 sm:p-6 border border-gray-700/50 max-[900px]:w-[95%]
      shadow-2xl shadow-black/20 hover:shadow-[#FFD23D]/20 
      transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2
      hover:bg-[#2E2E2E] hover:border-[#FFD23D]/30"
    >
      {/* الجزء الأول: Icon + Percentage + Title في سطر واحد */}
      <div className="w-full h-max flex items-center justify-between mb-3 sm:mb-4">
        <div className="text-right flex-1 min-w-0">
          <h1
            className="text-base max-[1300px]:text-[15px]   font-bold text-white leading-tight tracking-wide 
            group-hover:text-[#FFD23D] transition-colors duration-500 drop-shadow-lg"
          >
            {title}
          </h1>
        </div>
        <div className="text-center px-2 sm:px-4 flex-shrink-0">
          <span
            className="text-2xl sm:text-3xl font-bold text-gray-400 group-hover:text-[#FFD23D] 
            transition-colors duration-500 drop-shadow-lg"
          >
            {percentage}
          </span>
        </div>
        {/* Icon - اليمين */}
        <div className="relative flex-shrink-0">
          <div
            className="absolute -inset-2 bg-gradient-to-r from-[#FFD23D]/20 to-[#967509]/20 rounded-full blur-lg 
            opacity-0 group-hover:opacity-70 transition-opacity duration-500"
          ></div>
          <div
            className="relative w-10 h-10 sm:w-12 sm:h-12  border border-[#FFD23D] rounded-full 
            flex items-center justify-center shadow-lg group-hover:shadow-[#FFD23D]/30 
            transition-shadow duration-500"
          >
            <Image
              src={icon}
              alt={title}
              width={20}
              height={20}
              className="sm:w-6 sm:h-6 transform group-hover:scale-110 transition-transform duration-500 filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* الجزء التاني: Description لوحدها */}
      <div className="w-full h-max text-right">
        <p
          className="text-gray-300 text-sm sm:text-base leading-relaxed tracking-wide 
          group-hover:text-white transition-colors duration-500 drop-shadow-md"
        >
          {desc}
        </p>
      </div>

      {/* Decorative Bottom Line */}
      <div
        className="w-full h-1 bg-gradient-to-r from-transparent via-[#FFD23D]/50 to-transparent 
        rounded-full mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
    </div>
  );
};

export default Card;
