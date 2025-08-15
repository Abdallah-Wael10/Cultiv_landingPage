import React from "react";

const Form = () => {
  return (
    <div id="form" className="w-full min-h-screen py-8 sm:py-12 flex flex-col justify-center items-center bg-[#181818] px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="w-full max-w-7xl mb-8 sm:mb-12">
        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold tracking-wide drop-shadow-2xl leading-tight">
          احجز استشارتك المجانية
        </h1>
        <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#FFC400] to-transparent mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </div>

      <div className="w-full max-w-7xl">
        {/* Desktop Layout (901px+) */}
        <div className="hidden min-[901px]:flex justify-center items-start gap-12 px-6">
          {/* Form Section */}
          <div className="w-full max-w-lg flex-1">
            <form className="w-full bg-[#353535] rounded-[32px] p-10 space-y-8 shadow-2xl shadow-black/30 border border-gray-600/20 backdrop-blur-sm">
              {/* First row: Names */}
              <div className="flex gap-6">
                <div className="flex-1 group">
                  <input
                    type="text"
                    placeholder="الاسم الأخير"
                    className="w-full h-[68px] rounded-[20px] bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                    focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                    transition-all duration-300 ease-out hover:border-gray-500/60"
                    dir="rtl"
                  />
                </div>
                <div className="flex-1 group">
                  <input
                    type="text"
                    placeholder="الاسم الأول"
                    className="w-full h-[68px] rounded-[20px] bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                    focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                    transition-all duration-300 ease-out hover:border-gray-500/60"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full h-[68px] rounded-[20px] bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                  focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                  transition-all duration-300 ease-out hover:border-gray-500/60"
                  dir="rtl"
                />
              </div>

              {/* Company */}
              <div className="group">
                <input
                  type="text"
                  placeholder="اسم الشركة"
                  className="w-full h-[68px] rounded-[20px] bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                  focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                  transition-all duration-300 ease-out hover:border-gray-500/60"
                  dir="rtl"
                />
              </div>

              {/* Email */}
              <div className="group">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full h-[68px] rounded-[20px] bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                  focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                  transition-all duration-300 ease-out hover:border-gray-500/60"
                  dir="rtl"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[68px] rounded-[20px] bg-gradient-to-r from-[#FFC400] to-[#ffb800] 
                text-white text-[24px] font-bold tracking-wide
                hover:from-[#ffb800] hover:to-[#FFC400] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FFC400]/30
                active:scale-[0.98] transition-all duration-300 ease-out
                shadow-lg shadow-[#FFC400]/20 border border-[#FFC400]/30"
              >
                ارسال الطلب
              </button>
            </form>
          </div>

          {/* Text Section */}
          <div className="w-full max-w-2xl flex-1 flex flex-col justify-center items-center">
            <div className="w-full text-right pt-[130px]" dir="rtl">
              <h2 className="text-white text-[48px] font-bold leading-tight tracking-wide drop-shadow-xl mb-8">
                <span className="text-[#FFC400]">توظيفك</span> صار دافور
              </h2>
              <p className="text-gray-200 text-[28px] font-normal leading-relaxed tracking-wide drop-shadow-md">
                بوت التوظيف من Bureau مدرَّب على أكثر من 1000 سيرة ذاتية من
                مجالات و مستويات خبرات مختلف يفرز السير الذاتية ، يسوي مقابلات
                مع المرشحين ويختار الأنسب منهم.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout (0-900px) */}
        <div className="min-[901px]:hidden flex flex-col gap-8 sm:gap-10">
          {/* Text Section - Mobile First */}
          <div className="w-full flex flex-col justify-center items-center px-4">
            <div className="w-full text-center" dir="rtl">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-wide drop-shadow-xl mb-4 sm:mb-6">
                <span className="text-[#FFC400]">توظيفك</span> صار دافور
              </h2>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-wide drop-shadow-md max-w-2xl mx-auto">
                بوت التوظيف من Bureau مدرَّب على أكثر من 1000 سيرة ذاتية من
                مجالات و مستويات خبرات مختلف يفرز السير الذاتية ، يسوي مقابلات
                مع المرشحين ويختار الأنسب منهم.
              </p>
            </div>
          </div>

          {/* Form Section - Mobile */}
          <div className="w-full flex justify-center items-center px-4">
            <form className="w-full max-w-lg bg-[#353535] rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 shadow-2xl shadow-black/30 border border-gray-600/20 backdrop-blur-sm">
              {/* Names - Mobile: Stack vertically on small screens, side by side on larger mobiles */}
              <div className="flex flex-col xs:flex-row gap-4 sm:gap-6">
                <div className="flex-1 group">
                  <input
                    type="text"
                    placeholder="الاسم الأول"
                    className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                    focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                    transition-all duration-300 ease-out hover:border-gray-500/60"
                    dir="rtl"
                  />
                </div>
                <div className="flex-1 group">
                  <input
                    type="text"
                    placeholder="الاسم الأخير"
                    className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                    focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                    transition-all duration-300 ease-out hover:border-gray-500/60"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                  focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                  transition-all duration-300 ease-out hover:border-gray-500/60"
                  dir="rtl"
                />
              </div>

              {/* Company */}
              <div className="group">
                <input
                  type="text"
                  placeholder="اسم الشركة"
                  className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                  focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                  transition-all duration-300 ease-out hover:border-gray-500/60"
                  dir="rtl"
                />
              </div>

              {/* Email */}
              <div className="group">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                  focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                  transition-all duration-300 ease-out hover:border-gray-500/60"
                  dir="rtl"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-gradient-to-r from-[#FFC400] to-[#ffb800] 
                text-white text-lg sm:text-xl md:text-[24px] font-bold tracking-wide
                hover:from-[#ffb800] hover:to-[#FFC400] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FFC400]/30
                active:scale-[0.98] transition-all duration-300 ease-out
                shadow-lg shadow-[#FFC400]/20 border border-[#FFC400]/30"
              >
                ارسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
