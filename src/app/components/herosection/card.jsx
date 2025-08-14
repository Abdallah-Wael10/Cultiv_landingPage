import React from "react";

const Card = ({ text, desc }) => {
  return (
    <div
      className="w-[244px] h-[95px] flex flex-col backdrop-blur-sm justify-center items-center gap-2 rounded-2xl p-4  rounded-br-none border border-white/10 bg-transparent  shadow-none    transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:backdrop-blur-sm"
    >
      {/* العنوان + الدائرة */}
      <div className="w-full flex justify-center items-center gap-[22px]">
        <h3 className="text-white text-sm font-medium drop-shadow-lg">
          {text}
        </h3>
        <div
          className="w-[27px] h-[27px] flex items-center justify-center bg-white/10 
          backdrop-blur-none rounded-full border border-white/20 shadow-none"
        >
          {/* أيقونة أو محتوى جوه الدائرة */}
        </div>
      </div>

      {/* الوصف */}
      <div className="w-full flex justify-center items-center">
        <p className="text-white/90 text-xs leading-relaxed text-center drop-shadow-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
