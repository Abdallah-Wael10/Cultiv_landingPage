import React from "react";
import Image from "next/image";
import BotIcon from "../../../../public/bot.svg";

const ChatBot = ({ title, desc }) => {
  return (
    <div className="flex items-end animate-slideInUp w-full max-w-lg">
      {/* Chat Bubble */}
      <div className="relative w-full group">
        {/* Main Chat Bubble */}
        <div
          className="relative pr-10 bg-black/80 backdrop-blur-lg rounded-[40px] w-full h-32 px-4 py-3
          border-2 border-[#00DEB5] shadow-2xl shadow-[#00D4AA]/20 
          hover:shadow-[#00D4AA]/30 hover:border-[#00D4AA]/80
          transition-all duration-500 ease-out flex flex-col justify-center"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D4AA]/5 to-transparent rounded-[40px] pointer-events-none"></div>

          {/* Content */}
          <div className="relative h-max z-10 text-right flex flex-col gap-2.5 justify-end items-end space-y-1">
            {/* Title */}
            <h2 className="text-[#00DEB5] text-[22px] font-bold leading-tight tracking-wide drop-shadow-lg">
              {title}
            </h2>

            {/* Description */}
            <p className="text-white text-[16px] font-normal leading-snug tracking-wide drop-shadow-md">
              {desc}
            </p>
          </div>
        </div>

        {/* Chat Bubble Tail - من اليمين عند البوت */}
        <div
          className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/80 border-r-2 border-b-2 border-[#00DEB5] 
          transform rotate-45 shadow-lg shadow-[#00D4AA]/20"
        ></div>
      </div>

      <div className="flex-shrink-0 mb-1">
        <div className="relative group cursor-pointer">
          {/* Bot Image - حجم أكبر */}
          <Image
            src={BotIcon}
            alt="AI Bot"
            width={120}
            height={120}
            className="relative z-10 drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500 w-28 h-28"
          />

          {/* Pulsing Dots */}
          <div className="absolute top-2 -right-1 w-2 h-2 bg-[#00D4AA] rounded-full animate-pulse"></div>
          <div className="absolute -top-1 right-4 w-1.5 h-1.5 bg-[#00D4AA]/70 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
