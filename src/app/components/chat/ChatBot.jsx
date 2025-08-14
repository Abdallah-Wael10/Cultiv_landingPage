import React from "react";
import Image from "next/image";
import BotIcon from "../../../../public/bot.svg";

const ChatBot = ({ title, desc }) => {
  return (
    <div className="flex items-end animate-slideInUp w-full max-w-2xl ml-auto">
      {/* Chat Bubble */}
      <div className="relative w-full group order-1">
        {/* Main Chat Bubble */}
        <div
          className="relative pr-4 sm:pr-6 lg:pr-10 bg-black/80 backdrop-blur-lg rounded-[30px] sm:rounded-[40px] 
          w-full min-h-[100px] sm:min-h-[120px] lg:h-32 px-3 sm:px-4 py-3
          border-2 border-[#00DEB5] shadow-2xl shadow-[#00D4AA]/20 
          hover:shadow-[#00D4AA]/30 hover:border-[#00D4AA]/80
          transition-all duration-500 ease-out flex flex-col justify-center"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D4AA]/5 to-transparent rounded-[30px] sm:rounded-[40px] pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 text-right flex flex-col gap-2 sm:gap-2.5 justify-center items-end">
            {/* Title */}
            <h2 className="text-[#00DEB5] text-lg sm:text-xl lg:text-[22px] font-bold leading-tight tracking-wide drop-shadow-lg">
              {title}
            </h2>

            {/* Description */}
            <p className="text-white text-sm sm:text-base lg:text-[16px] font-normal leading-snug tracking-wide drop-shadow-md">
              {desc}
            </p>
          </div>
        </div>

        {/* Chat Bubble Tail - من اليمين عند البوت */}
        <div
          className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-black/80 border-r-2 border-b-2 border-[#00DEB5] 
          transform rotate-45 shadow-lg shadow-[#00D4AA]/20"
        ></div>
      </div>

      {/* Bot Avatar */}
      <div className="flex-shrink-0 mb-1 order-2 ml-2 sm:ml-4">
        <div className="relative group cursor-pointer">
          {/* Bot Image */}
          <Image
            src={BotIcon}
            alt="AI Bot"
            width={120}
            height={120}
            className="relative z-10 drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500 
              w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28"
          />

          {/* Pulsing Dots */}
          <div className="absolute top-1 sm:top-2 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00D4AA] rounded-full animate-pulse"></div>
          <div className="absolute -top-1 right-2 sm:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#00D4AA]/70 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
