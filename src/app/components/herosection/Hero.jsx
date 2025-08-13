"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BotIcon from "../../../../public/bot.svg";
import Clients from "../clients/Clients";
import IconButton from "../../../../public/iconButton.svg"
import Card from "./card";



const Hero = () => {

  const data = [
    {
      title : "شات بوت للتوظيف الذكي، يوظف لك أسرع وبأقل تكلفة",
      subText  : " صار دافور",
      sub2Text : 'توظيفك',
      desc : "بوت التوظيف من Bureau  مدرَّب على أكثر من 1000 سيرة ذاتية من مجالات و مستويات خبرات مختلف يفرز السير الذاتية ، يسوي المقابلات المبدئية، ويرد على المرشحين بسرعة قياسية.",
      cta : "ارسال ابدا",
    }
  ]

  const CardsData = [
    {
      text: "استقبال وفرز السير الذاتية",
      desc : "يقرأ  كل  طلب  جديد  ويختار  الأنسب  تلقائيًا"
    },
    {
      text: "استقبال وفرز السير الذاتية",
      desc : "يقرأ  كل  طلب  جديد  ويختار  الأنسب  تلقائيًا"
    }
  ]

 
  return (
    <section className="w-full bg-hero h-[823px] flex justify-center items-center flex-wrap">
         <div className="w-1/2 h-full bg-blue-500 flex flex-col justify-center items-center pl-10 gap-5">
               <div className="w-full h-max pb-5 bg-red-500">
                 <Card text={CardsData[0].text} desc={CardsData[0].desc} />
               </div>
               <div className="w-full h-max pb-5 bg-green-500">
                  <Image src={BotIcon} alt="Bot Icon" width={100} height={100} className="w-[100px] h-[100px]" />
               </div>
               <div className="w-full h-max pb-5 bg-yellow-500">
                 <Card text={CardsData[1].text} desc={CardsData[1].desc} />
               </div>

         </div>
         
         <div className="w-1/2 h-full  flex flex-col pt-[100px] justify-start items-center pr-10 text-end gap-5 ">
               <h1 className="w-full h-max text-[40px] text-white font-medium">{data[0].title}</h1>
               <h2 className="w-full h-max text-[32px] text-white font-medium"> <span className="text-[#FFD23D]">{data[0].sub2Text}</span> {data[0].subText}</h2>
               <p className="w-full h-max text-[24px] text-[#DEDEDE] font-light">{data[0].desc}</p>
               <div className="w-full h-max pb-5 flex justify-end items-center">
                    <button className="w-[50%] h-[48px] text-[24px] flex justify-center items-center font-bold text-white bg-gradient-to-r from-[#967509] to-[#FFD23D]">
                          {data[0].cta}
                          <Image src={IconButton} alt="Icon Button" width={24} height={24} className="inline ml-2" />
                      </button>
               </div>
         </div>
    </section>
  );
};

export default Hero;
