"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ManIcon from "../../../../public/man.svg";

const ChatMan = ({ title, desc, type }) => {
  const [screenWidth, setScreenWidth] = useState(768); // Default value for SSR

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Add resize listener
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define waveform data based on screen width
  const getWaveformData = () => {
    if (screenWidth < 480) {
      return [3, 8, 4, 10, 3, 7, 5, 9, 4, 7, 3, 8, 5, 4, 6, 7, 4, 8, 3, 6]; // More bars for mobile
    } else {
      return [
        2, 6, 3, 8, 2, 5, 4, 7, 3, 5, 2, 6, 4, 3, 5, 5, 4, 7, 3, 5, 2, 6, 4, 3,
        5, 5, 2, 6, 4, 3, 5,
      ];
    }
  };

  const getMaxHeight = () => {
    if (screenWidth < 480) return "28px"; // Increased from 16px
    if (screenWidth < 768) return "32px"; // Increased from 20px
    return "36px"; // Increased from 24px
  };

  const getBarWidth = () => {
    if (screenWidth < 480) return "w-1"; // Increased from w-0.5
    return "w-1"; // Keep same for larger screens
  };

  return (
    <div className="flex items-end gap-2 sm:gap-4 animate-slideInUp w-full max-w-2xl mr-auto">
      {/* Man Avatar */}
      <div className="flex-shrink-0 mb-2 order-1">
        <div className="relative group cursor-pointer">
          {/* Avatar Container with Border */}
          <div
            className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white border-2 sm:border-4 border-gray-300 shadow-xl overflow-hidden
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
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-3 border-white shadow-lg"></div>
        </div>
      </div>

      {/* Chat Bubble */}
      <div className="relative w-full group order-2">
        {/* Main Chat Bubble */}
        <div
          className="relative bg-white rounded-[20px] xs:rounded-[25px] sm:rounded-[40px] lg:rounded-[50px] w-full min-h-[80px] xs:min-h-[90px] sm:min-h-[120px] 
          px-3 xs:px-4 sm:px-6 lg:px-8 py-3 xs:py-4 sm:py-6
          shadow-2xl shadow-black/10 border border-gray-100
          transition-all duration-500 ease-out flex flex-col justify-center
          hover:shadow-2xl hover:shadow-black/15 max-[1100px]:w-[75%]" 
        >
          {/* Content */}
          <div className="relative z-10 text-right space-y-1.5 xs:space-y-2 sm:space-y-3">
            {/* Check Type: Text or Voice */}
            {type === "voice" ? (
              // Voice Message Container
              <div className="w-full bg-gray-100 rounded-[15px] xs:rounded-[18px] sm:rounded-[25px] lg:rounded-[30px] px-3 xs:px-4 sm:px-4 lg:px-6 py-3 xs:py-4 sm:py-4 flex items-center gap-2 xs:gap-3 sm:gap-4">
                {/* Play Button */}
                <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#00DEB5] pr-0.5 sm:pr-1 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors duration-200 flex-shrink-0">
                  <svg
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white ml-0.5 sm:ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                </div>

                {/* Audio Waveform */}
                <div className="flex-1 flex items-center justify-center min-w-0 overflow-hidden py-2  ">
                  <div className="flex items-center gap-1 xs:gap-1.5 max-w-full">
                    {/* Waveform bars - responsive heights and count */}
                    {getWaveformData().map((height, index) => (
                      <div
                        key={index}
                        className={`${getBarWidth()} bg-gray-500 rounded-full flex-shrink-0 transition-all duration-300 hover:bg-[#00DEB5]`}
                        style={{
                          height: `${Math.max(height * 2.5, 8)}px`, // Increased multiplier from 1.5 to 2.5
                          maxHeight: getMaxHeight(),
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="text-gray-600 text-sm xs:text-base sm:text-base lg:text-[18px] font-semibold flex-shrink-0">
                  1:05
                </div>
              </div>
            ) : (
              // Text Message
              <>
                {/* Title */}
                <h2 className="text-black text-sm xs:text-base sm:text-xl lg:text-2xl font-bold leading-tight tracking-wide">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-black text-xs xs:text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-wide">
                  {desc}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Chat Bubble Tail - Left Side */}
        <div
          className="absolute bottom-3 xs:bottom-4 sm:bottom-6 -left-1.5 xs:-left-2 sm:-left-3 w-0 h-0 
          border-t-[8px] xs:border-t-[10px] sm:border-t-[15px] border-t-transparent
          border-r-[12px] xs:border-r-[15px] sm:border-r-[20px] border-r-white
          border-b-[8px] xs:border-b-[10px] sm:border-b-[15px] border-b-transparent
          drop-shadow-lg"
        ></div>
      </div>
    </div>
  );
};

export default ChatMan;
