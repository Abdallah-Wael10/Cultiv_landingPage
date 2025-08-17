import React from "react";
import HandByHandIcon from "../../../../public/handByHand.svg";
import RateIcon from "../../../../public/rate.svg";
import InterViewIcon from "../../../../public/interviewIcon.svg";
import CvIcon from "../../../../public/cvIcon.svg";
import CurveLine from "../../../../public/CurveLine.svg";
import Card from "./card";
import Image from "next/image";

const Steps = () => {
  const data = [
    {
      id: 1,
      title: "ترشيح المؤهلين للمقابلة الثانية",
      desc: "ينظم المقابلات النهائية للمرشحين المقبولين",
      image: HandByHandIcon,
    },
    {
      id: 2,
      title: "تقييم فوري لنقاط القوة والضعف",
      desc: "يقيم المهارات التقنية والناعمة بالاضافه مستوى اللغة الإنجليزية عند كل مرشح",
      image: RateIcon,
    },
    {
      id: 3,
      title: "مقابلة مبدئية آلية بناءً على معاييرك",
      desc: "يصمم أسئلة للمقابلة تتناسب مع معايير الوظيفة وخبرة المرشحين",
      image: InterViewIcon,
    },
    {
      id: 4,
      title: "فرز السير الذاتية",
      desc: "يحلل سير المرشحين الذاتية حسب مهام ومتطلبات كل وظيفة",
      image: CvIcon,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-step relative overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full max-w-7xl text-center pb-8 sm:pb-12 lg:pb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
          كيف يعمل نظام التوظيف الذكي؟
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-md max-w-4xl mx-auto px-4">
          أربع خطوات بسيطة لتوظيف أفضل المرشحين بكفاءة وسرعة قياسية
        </p>
      </div>

      {/* Steps & Curve Line Container */}
      <div className="relative w-full max-w-7xl flex flex-col items-center">
        {/* Desktop Layout (901px+) */}
        <div className="hidden min-[901px]:block w-full">
          {/* Steps Row */}
          <div className="w-full flex justify-center items-end gap-6 xl:gap-10 z-10 relative ">
            {data.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.desc}
                image={item.image}
              />
            ))}
          </div>

          {/* Curve Line under steps */}
          <div className="absolute left-0 right-0 top-[-100px] lg:top-[-150px] bottom-0 flex justify-center pointer-events-none z-0">
            <Image
              src={CurveLine}
              alt="Curve Line"
              className="w-full h-auto max-w-6xl"
              priority
            />
          </div>
        </div>

        {/* Mobile and Tablet Layout (0-900px) */}
        <div className="min-[901px]:hidden w-full">
          {/* Mobile: 2x2 Grid Layout for Tablets */}
          <div className="max-[600px]:hidden w-full h-max pb-5 items-center justify-center max-[900px]:flex max-[900px]:flex-col-reverse">
            {data.map((item) => (
              <div key={item.id} className="flex justify-center">
                <Card
                  title={item.title}
                  description={item.desc}
                  image={item.image}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Single Column Layout */}
          <div className="sm:hidden flex flex-col max-[500px]:flex-col-reverse gap-6 w-full max-w-md mx-auto max-[900px]:items-center">
            {data.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.desc}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
