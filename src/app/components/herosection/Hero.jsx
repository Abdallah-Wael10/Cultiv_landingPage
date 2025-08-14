"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BotIcon from "../../../../public/bot.svg";
import IconButton from "../../../../public/iconButton.svg"
import Card from "./card";
import Clients from "../clients/Clients";


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
    <section className="w-full bg-hero h-max flex pt-20 flex-col justify-center items-center flex-wrap">
         <main className="w-full h-[80%] flex justify-center items-center flex-wrap">
           <div className="w-1/2 h-full flex flex-col justify-center items-center pl-10  max-[900px]:w-full">
               <div className="w-full h-max pt-5 ">
                 <Card text={CardsData[0].text} desc={CardsData[0].desc} />
               </div>
               <div className="w-full h-max  flex justify-center items-center ">
                  <Image src={BotIcon} alt="Bot Icon"  className="" />
               </div>
               <div className="w-full h-max pb-20 flex justify-end items-end ">
                 <Card text={CardsData[1].text} desc={CardsData[1].desc} />
               </div>

         </div>
         
         <div className="w-1/2 h-full  flex flex-col pt-[100px] justify-start items-center pr-10 text-end gap-5 max-[900px]:w-full ">
               <h1 className="w-full h-max text-[40px] text-white font-medium">{data[0].title}</h1>
               <h2 className="w-full h-max text-[32px] text-white font-medium"> <span className="text-[#FFD23D]">{data[0].sub2Text}</span> {data[0].subText}</h2>
               <p className="w-full h-max text-[24px] text-[#DEDEDE] font-light text-right" dir="rtl">{data[0].desc}</p>
               <div className="w-full h-max pb-5 flex justify-end items-center">
                    <button className="w-[50%] h-[48px] text-[24px] flex justify-center items-center font-bold text-white bg-gradient-to-r from-[#967509] to-[#FFD23D]">
                          {data[0].cta}
                          <Image src={IconButton} alt="Icon Button" width={24} height={24} className="inline ml-2" />
                      </button>
               </div>
         </div>
         </main>
         <div className="w-full h-[20%] flex justify-center items-center">
             {/* <Clients /> */}
         </div>
    </section>
  );
};

export default Hero;
