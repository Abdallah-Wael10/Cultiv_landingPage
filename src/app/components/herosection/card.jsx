import React from "react";

const Card = ({ text, desc }) => {
  return (
    <div
      className="w-[55%] h-[95px] max-[900px]:w-full flex flex-col backdrop-blur-sm justify-center items-center gap-2 rounded-2xl p-4  rounded-br-none border border-white/10 bg-transparent  shadow-none    transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:backdrop-blur-sm"
    >
      {/* العنوان + الدائرة */}
      <div className="w-full flex justify-center items-center gap-[22px]">
        <h3 className="text-white text-[18px] font-medium drop-shadow-lg">
          {text}
        </h3>
        <div
          className="w-[27px] h-[27px] flex items-center justify-center bg-transparent backdrop-blur-lg border border-[#FFD23D] 
           rounded-full  shadow-none"
        >
          {/* أيقونة أو محتوى جوه الدائرة */}
        </div>
      </div>


    </div>
  );
};

export default Card;
