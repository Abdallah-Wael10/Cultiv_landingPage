import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FQA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FQA arabic saudi about بوت التوظيف من Bureau (rtl)
  const DataFQA = [
    {
      question: "وش هو شات بوت التوظيف؟",
      answer: "بوت يستخدم الذكاء الاصطناعي عشان يوظف الناس من أول فرز السير الذاتية لين يرد على المتقدمين."
    },
    {
      question: "كيف يوفر الوقت والتكلفة؟",
      answer: "البوت يسوي شغل فريق كامل بدقايق، ويقلل التكلفة ٣١٪ ويختصر مدة التوظيف ٦٦٪"
    },
    {
      question: "يدعم السعودة؟",
      answer: "ايه. يطابق السعوديين مع متطلبات نطاقات ويضمن الالتزام بسرعة"
    },
    {
      question: "يناسب المرشحين السعوديين؟",
      answer: "البوت يدعم العربي والانجليزي ويعطي تجربة احترافية وسهلة للمتقدمين"
    },
    {
      question: "لازم أعرف برمجة؟",
      answer: "لا. الحل جاهز ويركب على أنظمة الموارد البشرية عندك."
    },

  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-16 px-4 sm:px-6 lg:px-8" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FFD23D]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00DEB5]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 right-1/2 w-80 h-80 bg-[#967509]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-lg bg-transparent border border-[#FFD23D] rounded-full mb-6  shadow-[#FFD23D]/30">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            الأسئلة <span className="text-[#FFD23D]">الشائعة</span>
          </h1>
          
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            إجابات على أكثر الأسئلة انتشاراً عن بوت التوظيف من Bureau
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFD23D] to-transparent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {DataFQA.map((item, index) => (
            <div
              key={index}
              className="group bg-[#2a2a2a]/80 backdrop-blur-sm border border-gray-700/50  overflow-hidden
              hover:border-[#FFD23D]/30 hover:bg-[#2d2d2d]/90 transition-all duration-500 ease-out
              hover:shadow-2xl hover:shadow-[#FFD23D]/10 hover:-translate-y-1"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 lg:px-8 lg:py-8 text-right flex items-center justify-between
                focus:outline-none focus:ring-2 focus:ring-[#FFD23D]/50 focus:ring-inset
                transition-all duration-300 ease-out"
              >
                <div className="flex-1 ml-4">
                  <h3 className="text-lg lg:text-xl font-semibold text-white leading-tight
                    group-hover:text-[#FFD23D] transition-colors duration-300">
                    {item.question}
                  </h3>
                </div>
                
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 bg-gradient-to-br from-[#FFD23D]/20 to-[#967509]/20 rounded-full 
                    flex items-center justify-center transition-all duration-500 ease-out
                    group-hover:from-[#FFD23D] group-hover:to-[#967509] group-hover:shadow-lg group-hover:shadow-[#FFD23D]/30
                    ${openIndex === index ? 'rotate-180 bg-gradient-to-br from-[#FFD23D] to-[#967509]' : ''}`}>
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300
                      ${openIndex === index ? 'text-white' : 'text-[#FFD23D] group-hover:text-white'}`} />
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-out
                ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 lg:px-8 lg:pb-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent mb-6"></div>
                  <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <div className={`h-1 bg-gradient-to-r from-transparent via-[#FFD23D]/50 to-transparent
                transition-opacity duration-500 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2a2a2a]/50 to-[#353535]/50 backdrop-blur-sm border border-gray-700/30 
             p-8 lg:p-10 hover:border-[#FFD23D]/30 transition-all duration-500">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              لم تجد إجابة لسؤالك؟
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              تواصل معنا للحصول على إجابات مفصلة حول بوت التوظيف
            </p>
            <a href="#form" className="inline-flex items-center px-8 py-4 bg-transparent backdrop-blur-lg border border-white 
              text-white font-semibold  
              transform hover:scale-105 hover:shadow-xl hover:shadow-[#FFD23D]/30
              transition-all duration-300 ease-out focus:outline-none focus:ring-2  hover:border-[#FFD23D]">
              <MessageCircle className="w-5 h-5 ml-2" />
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FQA;