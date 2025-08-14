import React from "react";
import Image from "next/image";
import ManIcon from "../../../../public/man.svg";

const ChatMan = ({ title, desc, type }) => {
  return (
    <div className="flex items-end gap-4 animate-slideInUp w-full max-w-4xl">
      {/* Man Avatar */}
      <div className="flex-shrink-0 mb-2">
        <div className="relative group cursor-pointer">
          {/* Avatar Container with Border */}
          <div
            className="w-24 h-24 rounded-full bg-white border-4 border-gray-300 shadow-xl overflow-hidden
            transform group-hover:scale-105 transition-all duration-300"
          >
            <Image
              src={ManIcon}
              alt="Saudi Man"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Online Status Indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg"></div>
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="relative w-full group">
        {/* Main Chat Bubble */}
        <div
          className="relative bg-white rounded-[50px] w-full min-h-[120px] px-8 py-6
          shadow-2xl shadow-black/10 border border-gray-100
          transition-all duration-500 ease-out flex flex-col justify-center
          hover:shadow-2xl hover:shadow-black/15"
        >
          {/* Content */}
          <div className="relative z-10 text-right space-y-3">
            {/* Check Type: Text or Voice */}
            {type === "voice" ? (
              // Voice Message Container - مطابق للصورة تماماً
       
       <div className="w-full bg-gray-100 rounded-[30px] px-6 py-4 flex items-center gap-4">
                {/* Play Button */}
                
                <div className="w-12 h-12 bg-[#00DEB5] pr-1 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors duration-200">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                </div>

                {/* Audio Waveform */}
                <div className="flex-1 flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    {/* Waveform bars */}
                    <div className="w-1 bg-gray-400 rounded-full h-2"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-6"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-3"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-8"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-2"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-5"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-4"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-7"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-3"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-5"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-2"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-6"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-4"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-3"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-5"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-5"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-4"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-7"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-3"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-5"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-2"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-6"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-4"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-3"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-5"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-5"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-2"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-6"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-4"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-3"></div>
                    <div className="w-1 bg-gray-400 rounded-full h-5"></div>
                  </div>
                </div>

                {/* Duration */}
                <div className="text-gray-500 text-[18px] font-medium">1:05</div>
              </div>
            ) : (
              // Text Message
              <>
                {/* Title */}
                <h2 className="text-black text-2xl font-bold leading-tight tracking-wide">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-black text-lg font-normal leading-relaxed tracking-wide">
                  {desc}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Chat Bubble Tail - Left Side */}
        <div
          className="absolute bottom-6 -left-3 w-0 h-0 
          border-t-[15px] border-t-transparent
          border-r-[20px] border-r-white
          border-b-[15px] border-b-transparent
          drop-shadow-lg"
        ></div>
      </div>
    </div>
  );
};

export default ChatMan;
