"use client"
import React from 'react';
import Image from 'next/image';
import BotIcon from "../../../../public/bot.svg";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD23D]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00DEB5]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#967509]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main loading container */}
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Bot Icon with animations */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-transparent border-t-[#FFD23D] border-r-[#FFD23D]/50 animate-spin"></div>
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-2 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-transparent border-l-[#00DEB5] border-b-[#00DEB5]/50 animate-spin animate-reverse"></div>
          
          {/* Inner glowing circle */}
          <div className="absolute inset-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#FFD23D]/20 to-[#00DEB5]/20 animate-pulse"></div>
          
          {/* Bot icon */}
          <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
            <Image
              src={BotIcon}
              alt="Loading Bot"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl animate-bounce"
              priority
            />
          </div>
          
          {/* Floating dots around bot */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-[#FFD23D] rounded-full animate-ping"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#00DEB5] rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 left-0 w-2.5 h-2.5 bg-[#967509] rounded-full animate-ping delay-700"></div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-4">
          <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wider">
            جاري التحميل
            <span className="inline-block animate-pulse">.</span>
            <span className="inline-block animate-pulse delay-300">.</span>
            <span className="inline-block animate-pulse delay-700">.</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            يرجى الانتظار بينما نقوم بإعداد كل شيء لك
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-80 h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#FFD23D] via-[#00DEB5] to-[#967509] rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading steps */}
        <div className="flex space-x-4 rtl:space-x-reverse">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#FFD23D] flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs text-gray-400">التحقق</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#00DEB5] animate-spin border-2 border-transparent border-t-white">
            </div>
            <span className="text-xs text-gray-400">التحميل</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 animate-pulse delay-1000">
            </div>
            <span className="text-xs text-gray-400">الإعداد</span>
          </div>
        </div>
      </div>

      {/* Bottom brand text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-500 text-sm font-medium">
          Powered by <span className="text-[#FFD23D] font-bold">Bureau AI</span>
        </p>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
        
        .animate-reverse {
          animation: reverse 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;