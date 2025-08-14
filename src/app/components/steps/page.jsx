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
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-step relative overflow-hidden py-16 pt-7 gap-20">
      {/* Header */}
      <div className="w-full max-w-4xl text-center pb-5 pt-5 ">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          كيف يعمل نظام التوظيف الذكي؟
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed drop-shadow-md max-w-2xl mx-auto">
          أربع خطوات بسيطة لتوظيف أفضل المرشحين بكفاءة وسرعة قياسية
        </p>
      </div>
      {/* Steps & Curve Line */}
      <div className="relative w-full max-w-7xl px-8 flex flex-col items-center">
        {/* Steps */}
        <div className="w-full flex justify-center items-end gap-10 z-10">
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
        <div className="absolute left-0 right-0 top-[-150px] -bottom-0 flex justify-center pointer-events-none z-0">
          <Image src={CurveLine} alt="Curve Line" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
