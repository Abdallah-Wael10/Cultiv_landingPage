import React from "react";
import Image from "next/image";
import Card from "./card";
import BlackBot from "../../../../public/blackBot.svg";
import DollarIcon from "../../../../public/dollar.svg";
import RoiIcon from "../../../../public/roi.svg";
import ClockIcon from "../../../../public/clock.svg";

const Stats = () => {
  const Data = [
    {
      id: 1,
      icon: DollarIcon,
      title: "توفير من تكاليف التوظيف",
      desc: "تخفيض في تكلفة التعيين بحوالي 950 ريال سعودي شهرياً",
      percentage: "31%",
    },
    {
      id: 2,
      icon: RoiIcon,
      title: "أعلى في العائد على الاستثمار",
      desc: "زيادة العائد 4 أضعاف خلال أول 3 أشهر",
      percentage: "4x",
    },
    {
      id: 3,
      icon: ClockIcon,
      title: " تقليل في مدة التوظيف",
      desc: "تخفيض مدة التعيين من 30 يوم لأقل من 10 أيام",
      percentage: "66%",
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
          كيف يعمل نظام التوظيف الذكي؟
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed drop-shadow-md max-w-2xl mx-auto px-4"
          dir="rtl"
        >
          بوت التوظيف من Bureau مدرَّب على أكثر من 1000 سيرة ذاتية من مجالات و
          مستويات خبرات مختلف يفرز السير الذاتية ، يسوي
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex justify-center items-center">
        {/* Desktop Layout (901px+) */}
        <div className="hidden min-[901px]:block w-full">
          <div className="w-full h-max pb-5 pt-5 flex justify-center items-center">
            <div className="w-[50%] h-max pb-5 flex flex-col gap-10">
              {/* White Card */}
              <div className="w-full h-max flex justify-end items-center pr-5">
                <div
                  className="w-[349px] h-max min-h-[136px] flex justify-center items-center bg-white rounded-[24px] rounded-tr-none hover:shadow-[#FFD23D]/20 
                  transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2"
                >
                  <div className="w-full h-max flex flex-col justify-center items-center">
                    <div className="w-full h-max flex justify-center items-center gap-4">
                      <h1
                        className="h-max pt-2 text-black font-extrabold text-[20px]"
                        dir="rtl"
                      >
                        استقبال وفرز السير الذاتية
                      </h1>
                      <Image src={BlackBot} alt="Black Bot" />
                    </div>
                    <div
                      className="w-full h-max pt-5 pr-5 flex justify-center items-center text-center"
                      dir="rtl"
                    >
                      <p>
                        يقرأ كل طلب جديد ويختار الأنسب تلقائيًايقرأ كل طلب جديد
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards Container */}
              <div className="w-[70%] h-max pb-5 pt-5 flex flex-col gap-10 justify-center items-center bg-[#353535] rounded-[25px] rounded-tl-none max-[1100px]:w-full">
                {Data.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout (0-900px) */}
        <div className="min-[901px]:hidden w-full max-w-2xl mx-auto">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* White Card - Mobile */}
            <div className="w-full flex justify-center items-center">
              <div
                className="w-full max-w-[349px] h-max min-h-[120px] sm:min-h-[136px] flex justify-center items-center bg-white rounded-[20px] sm:rounded-[24px] hover:shadow-[#FFD23D]/20 
                transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 mx-4"
              >
                <div className="w-full h-max flex flex-col justify-center items-center px-4 py-4">
                  <div className="w-full h-max flex justify-center items-center gap-3 sm:gap-4 mb-3">
                    <h1
                      className="text-center text-black font-extrabold text-base sm:text-lg md:text-[20px]"
                      dir="rtl"
                    >
                      استقبال وفرز السير الذاتية
                    </h1>
                    <Image
                      src={BlackBot}
                      alt="Black Bot"
                      className="w-8 h-8 sm:w-auto sm:h-auto"
                    />
                  </div>
                  <div
                    className="w-full h-max flex justify-center items-center text-center px-2"
                    dir="rtl"
                  >
                    <p className="text-sm sm:text-base">
                      يقرأ كل طلب جديد ويختار الأنسب تلقائيًايقرأ كل طلب جديد
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards Container - Mobile */}
            <div className="w-full flex flex-col gap-6 sm:gap-8 justify-center items-center bg-[#353535] rounded-[20px] sm:rounded-[25px] max-[900px]:pt-5 max-[900px]:pb-5">
              {Data.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
