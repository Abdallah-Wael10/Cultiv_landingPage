import React from "react";
import GoodCard from "./GoodCard";
import BadCard from "./BadCard";

const CaseStudy = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full max-w-4xl text-center pb-8 sm:pb-12 lg:pb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white font-medium leading-tight drop-shadow-lg">
          و  التوظيف التقليدي  Bureau الفرق بين بوت
        </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFD23D] to-transparent mx-auto mt-6 rounded-full"></div>

        
      </div>
      

      {/* Cards Container */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Desktop Layout (901px+) */}
        <div className="hidden min-[901px]:flex justify-center items-start gap-6 xl:gap-10">
          <BadCard
            title="التوظيف التقليدي"
            text1="تواصل محدود مرتبط بساعات العمل"
            text2="عبء إداري يستهلك الوقت"
            text3="مقابلات تمتد لأيام أو أسابيع"
            text4="جودة أقل للمرشحين"
          />
          <GoodCard
            title="Bureau شات بوت"
            text1="24/7 تواصل فوري مع المرشحين"
            text2="أتمتة كاملة للمهام الروتينية "
            text3="مقابلات المئات خلال دقائق"
            text4="تحسين جودة المرشحين"
          />
        </div>

        {/* Mobile and Tablet Layout (0-900px) */}
        <div className="min-[901px]:hidden flex flex-col gap-8 sm:gap-10 max-[900px]:items-center">
          <GoodCard
            title="شات بوت Bureau"
            text1="24/7 تواصل فوري مع المرشحين"
            text2="أتمتة كاملة للمهام الروتينية "
            text3="مقابلات المئات خلال دقائق"
            text4="تحسين جودة المرشحين"
          />
          <BadCard
            title="التوظيف التقليدي"
            text1="تواصل محدود مرتبط بساعات العمل"
            text2="عبء إداري يستهلك الوقت"
            text3="مقابلات تمتد لأيام أو أسابيع"
            text4="جودة أقل للمرشحين"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
