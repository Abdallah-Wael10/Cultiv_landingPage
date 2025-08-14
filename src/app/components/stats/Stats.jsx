import React from "react";
import Image from "next/image";
import Card from "./card";
import BlackBot from "../../../../public/blackBot.svg";
import DollarIcon from "../../../../public/dollar.svg"
import RoiIcon from "../../../../public/roi.svg"
import ClockIcon from "../../../../public/clock.svg"
const Stats = () => {
  const Data = [
    {
      id : 1,
      icon : DollarIcon,
      title : "توفير من تكاليف التوظيف",
      desc : "تخفيض في تكلفة التعيين بحوالي 950 ريال سعودي شهرياً",
      percentage: "31%",
    },
    {
      id : 2,
      icon : RoiIcon,
      title : "أعلى في العائد على الاستثمار",
      desc : "زيادة العائد 4 أضعاف خلال أول 3 أشهر",
      percentage: "4x",
    },
    {
      id : 3,
      icon : ClockIcon,
      title : " تقليل في مدة التوظيف",
      desc : "تخفيض مدة التعيين من 30 يوم لأقل من 10 أيام",
      percentage: "66%",
    }
  ]
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-step relative overflow-hidden py-16 pt-7 gap-20">
      {/* Header */}
      <div className="w-full max-w-4xl text-center pb-5 pt-5 ">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          كيف يعمل نظام التوظيف الذكي؟
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed drop-shadow-md max-w-2xl mx-auto">
          بوت التوظيف من Bureau مدرَّب على أكثر من 1000 سيرة ذاتية من مجالات و
          مستويات خبرات مختلف يفرز السير الذاتية ، يسوي
        </p>
      </div>
      <div className="w-full h-max pb-5 pt-5 flex justify-center items-center ">
        <div className="w-[50%] h-max pb-5 flex flex-col gap-10 ">
          <div className="w-full h-max  flex justify-end items-center pr-5 ">
            <div className="w-[349px] h-max min-h-[136px] flex justify-center items-center bg-white rounded-[24px] rounded-tr-none hover:shadow-[#FFD23D]/20 
      transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2
      ">
              <div className="w-full h-max   flex flex-col justify-center  items-center">
                <div className="w-full h-max  flex justify-center items-center gap-4 ">
                  <h1 className="h-max pt-2 text-black font-extrabold text-[20px]">
                    استقبال وفرز السير الذاتية
                  </h1>
                  <Image src={BlackBot} alt="Black Bot" />
                </div>
                <div className="w-full h-max pt-5  pr-5 flex justify-center items-center text-center ">
                  <p>يقرأ كل طلب جديد ويختار الأنسب تلقائيًايقرأ كل طلب جديد </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-max pb-5 pt-5 flex flex-col gap-10 justify-center items-center bg-[#353535] rounded-[25px] rounded-tl-none">
            {Data.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
