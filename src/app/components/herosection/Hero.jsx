"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BotIcon from "../../../../public/bot.svg";
import IconButton from "../../../../public/iconButton.svg";
import Card from "./card";
import Clients from "../clients/Clients";

const Hero = () => {
  const data = [
    {
      title: "أسرع توظيف بالذكاء الاصطناعي",
      subText: " بوت ذكي يفرز السير الذاتية، يسوي  المقابلات المبدئية، ويقلل وقت التوظيف",
      sub2Text: " %  66",
      desc: "بوت التوظيف من Bureau  مدرَّب على أكثر من 1000 سيرة ذاتية من مجالات و مستويات خبرات مختلف يفرز السير الذاتية ، يسوي المقابلات المبدئية، ويرد على المرشحين بسرعة قياسية.",
      cta: " جرّب البوت الحين",
    },
  ];

  const CardsData = [
    {
      text: "فرز تلقائي + مقابلات أولية ذكية",
    },
    {
      text: "ردود آلية للمتقدمين",
    },
  ];

  return (
    <section className="w-full bg-hero min-h-screen flex flex-col justify-center items-center">
      {/* Main Content */}
      <main className="w-full flex-1 flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Desktop and Tablet Layout */}
          <div className="hidden md:flex w-full h-full justify-center items-center">
            {/* Left Side - Bot and Cards */}
            <div className="w-1/2 h-full flex flex-col justify-center items-center pl-4 lg:pl-10">
              <div className="w-full h-max pt-5">
                <Card text={CardsData[0].text}  />
              </div>
              <div className="w-full h-max flex justify-center items-center py-8">
                <Image
                  src={BotIcon}
                  alt="Bot Icon"
                  className="w-auto h-auto max-w-full"
                  priority
                />
              </div>
              <div className="w-full h-max pb-20 flex justify-end items-end">
                <Card text={CardsData[1].text}  />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-1/2 h-full flex flex-col pt-16 lg:pt-[100px] justify-start items-center pr-4 lg:pr-10 text-end gap-5">
              <h1 className="w-full h-max text-2xl lg:text-[40px] xl:text-[40px] text-white font-medium leading-tight">
                {data[0].title}
              </h1>
              <h2 className="w-full h-max text-xl lg:text-[32px] xl:text-[32px] text-white font-medium leading-tight">
                {data[0].subText}
                <span className="text-[#FFD23D] font-bold">{data[0].sub2Text}</span>
              </h2>

              <div className="w-full h-max pb-5 pt-5 flex justify-end items-center">
                <a href="#form" className="w-full max-w-xs lg:w-[80%] h-12 lg:h-[48px] text-lg lg:text-[24px] flex justify-center items-center font-bold text-white backdrop-blur-lg bg-transparent border border-white hover:shadow-[#FFC400] hover:border-[#FFC400] shadow-sm hover:scale-105 transition-transform duration-300">
                  {data[0].cta}
                  <Image
                    src={IconButton}
                    alt="Icon Button"
                    width={24}
                    height={24}
                    className="inline ml-2"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Layout (0-900px) */}
          <div className="md:hidden w-full flex flex-col justify-center items-center py-8 px-4">
            {/* Text Content First on Mobile */}
            <div className="w-full flex flex-col justify-center items-center text-center gap-4 mb-8">
              <h1 className="w-full text-2xl sm:text-3xl text-white font-medium leading-tight">
                {data[0].title}
              </h1>
              <h2 className="w-full text-xl sm:text-2xl text-white font-medium leading-tight">
                <span className="text-[#FFD23D]">{data[0].sub2Text}</span>{" "}
                {data[0].subText}
              </h2>

              <div className="w-full flex justify-center items-center mt-4">
                <a href="#form" className="w-full max-w-sm h-12 text-lg flex justify-center items-center font-bold text-white bg-transparent backdrop-blur-lg border-white border hover:border-[#FFC400] rounded-lg hover:scale-105 transition-transform duration-300">
                  {data[0].cta}
                  <Image
                    src={IconButton}
                    alt="Icon Button"
                    width={20}
                    height={20}
                    className="inline ml-2"
                  />
                </a>
              </div>
            </div>

            {/* Bot and Cards Section */}
            <div className="w-full flex flex-col justify-center items-center">
              {/* First Card */}
              <div className="w-full max-w-md mb-6">
                <Card text={CardsData[0].text} desc={CardsData[0].desc} />
              </div>

              {/* Bot Icon */}
              <div className="w-full flex justify-center items-center py-6">
                <Image
                  src={BotIcon}
                  alt="Bot Icon"
                  className="w-auto h-auto max-w-[80%] sm:max-w-[70%]"
                  priority
                />
              </div>

              {/* Second Card */}
              <div className="w-full max-w-md mt-6">
                <Card text={CardsData[1].text} desc={CardsData[1].desc} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Clients Section */}
      <div className="w-full flex justify-center items-center py-8">
        <Clients />
      </div>
    </section>
  );
};

export default Hero;
