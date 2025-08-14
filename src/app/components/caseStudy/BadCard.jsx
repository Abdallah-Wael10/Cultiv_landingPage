import React from "react";
import BotIcon from "../../../../public/bot.svg";
import Image from "next/image";
import CheckIcon from "../../../../public/badCheck.svg";

const BadCard = ({ title, text1, text2, text3, text4 }) => {
  return (
    <div
      className="group w-full max-w-[600px] bg-[#353535] rounded-[20px] p-8 
      shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 
      transition-all duration-500 ease-out  
      hover:bg-[#383838] border border-gray-600/30 hover:border-red-500/30"
    >
      {/* Header Section */}
      <div className="w-full flex flex-col justify-center items-center mb-8">
        {/* Bot Icon */}
        <div className="relative mb-6">
          <div
            className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-xl 
            opacity-0 group-hover:opacity-70 transition-opacity duration-500"
          ></div>
          <div className="relative">
            <Image
              src={BotIcon}
              alt="Bot Icon"
              width={120}
              height={120}
              className="transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-white text-xl font-bold text-center leading-tight tracking-wide
          group-hover:text-red-300 transition-colors duration-500 drop-shadow-lg"
        >
          {title}
        </h2>

        {/* Decorative Line under title */}
        <div
          className="w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent 
          rounded-full mt-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </div>

      {/* Features Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature 1 */}
        <div
          className="flex flex-row-reverse items-center gap-2 p-4 rounded-lg bg-black/20 hover:bg-black/30 
          transition-all duration-300 group/item border border-gray-600/20 hover:border-red-500/30"
        >
          <div className="relative flex-shrink-0">
            <div
              className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm opacity-0 
              group-hover/item:opacity-100 transition-opacity duration-300"
            ></div>
            <Image
              src={CheckIcon}
              alt="Check Icon"
              width={24}
              height={24}
              className="relative z-10 transform group-hover/item:scale-110 transition-transform duration-300"
            />
          </div>
          <p
            className="flex-1 text-white text-center text-sm font-normal leading-relaxed
            group-hover/item:text-gray-100 transition-colors duration-300 m-0"
          >
            {text1}
          </p>
        </div>

        {/* Feature 2 */}
        <div
          className="flex flex-row-reverse items-center gap-2 p-4 rounded-lg bg-black/20 hover:bg-black/30 
          transition-all duration-300 group/item border border-gray-600/20 hover:border-red-500/30"
        >
          <div className="relative flex-shrink-0">
            <div
              className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm opacity-0 
              group-hover/item:opacity-100 transition-opacity duration-300"
            ></div>
            <Image
              src={CheckIcon}
              alt="Check Icon"
              width={24}
              height={24}
              className="relative z-10 transform group-hover/item:scale-110 transition-transform duration-300"
            />
          </div>
          <p
            className="flex-1 text-white text-center text-sm font-normal leading-relaxed
            group-hover/item:text-gray-100 transition-colors duration-300 m-0"
          >
            {text2}
          </p>
        </div>

        {/* Feature 3 */}
        <div
          className="flex flex-row-reverse items-center gap-2 p-4 rounded-lg bg-black/20 hover:bg-black/30 
          transition-all duration-300 group/item border border-gray-600/20 hover:border-red-500/30"
        >
          <div className="relative flex-shrink-0">
            <div
              className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm opacity-0 
              group-hover/item:opacity-100 transition-opacity duration-300"
            ></div>
            <Image
              src={CheckIcon}
              alt="Check Icon"
              width={24}
              height={24}
              className="relative z-10 transform group-hover/item:scale-110 transition-transform duration-300"
            />
          </div>
          <p
            className="flex-1 text-white text-center text-sm font-normal leading-relaxed
            group-hover/item:text-gray-100 transition-colors duration-300 m-0"
          >
            {text3}
          </p>
        </div>

        {/* Feature 4 */}
        <div
          className="flex flex-row-reverse items-center gap-2 p-4 rounded-lg bg-black/20 hover:bg-black/30 
          transition-all duration-300 group/item border border-gray-600/20 hover:border-red-500/30"
        >
          <div className="relative flex-shrink-0">
            <div
              className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm opacity-0 
              group-hover:item:opacity-100 transition-opacity duration-300"
            ></div>
            <Image
              src={CheckIcon}
              alt="Check Icon"
              width={24}
              height={24}
              className="relative z-10 transform group-hover:item:scale-110 transition-transform duration-300"
            />
          </div>
          <p
            className="flex-1 text-white text-center text-sm font-normal leading-relaxed
            group-hover/item:text-gray-100 transition-colors duration-300 m-0"
          >
            {text4}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BadCard;
