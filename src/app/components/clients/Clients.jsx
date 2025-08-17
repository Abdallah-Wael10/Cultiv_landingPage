"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Client logos
import DietHubIcon from "../../../../public/clients/diethub.png";
import FarefocusIcon from "../../../../public/clients/Farefocus.png";
import FitIcon from "../../../../public/clients/FIT.svg";
import FursanIcon from "../../../../public/clients/Fursan.svg";
import GvIcon from "../../../../public/clients/GV.png";
import happyLifeIcon from "../../../../public/clients/happyLife.png";
import IdealSolutionIcon from "../../../../public/clients/IdealSolution.svg";
import ideaspaceIcon from "../../../../public/clients/ideaspace.svg";
import itripIcon from "../../../../public/clients/itrip.png";
import jiraldurIcon from "../../../../public/clients/jiraldur.png";
import RoafyIcon from "../../../../public/clients/Roafy.svg";
import TMhIcon from "../../../../public/clients/TMH.png";
import VitrahIcon from "../../../../public/clients/Vitrah.png";
import WorldGateIcon from "../../../../public/clients/WorldGate.png";

const icons = [
  { src: DietHubIcon, alt: "DietHub" },
  { src: FarefocusIcon, alt: "Farefocus" },
  { src: FitIcon, alt: "FIT" },
  { src: FursanIcon, alt: "Fursan" },
  { src: GvIcon, alt: "GV" },
  { src: happyLifeIcon, alt: "happyLife" },
  { src: IdealSolutionIcon, alt: "IdealSolution" },
  { src: ideaspaceIcon, alt: "ideaspace" },
  { src: itripIcon, alt: "itrip" },
  { src: jiraldurIcon, alt: "jiraldur" },
  { src: RoafyIcon, alt: "Roafy" },
  { src: TMhIcon, alt: "TMH" },
  { src: VitrahIcon, alt: "Vitrah" },
  { src: WorldGateIcon, alt: "WorldGate" },
];

const Texts = [{ text: "شركانا في النجاح" }];

const Clients = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="w-full flex justify-center items-center gap-2 rounded-2xl p-4 border border-white/10 bg-transparent backdrop-blur-none shadow-none relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/5 w-24 sm:w-32 lg:w-48 h-1 bg-gradient-to-r from-yellow-400 to-transparent opacity-30 rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/5 w-24 sm:w-32 lg:w-48 h-1 bg-gradient-to-l from-yellow-400 to-transparent opacity-30 -rotate-45"></div>
          <div className="absolute top-3/4 left-2/3 w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-gray-400 to-transparent opacity-20 rotate-12"></div>
        </div>

        <div className="w-full relative z-10">
          {/* Title */}
          <div className="text-center mb-6 lg:mb-10">
            <h2 className="text-base sm:text-lg lg:text-[28px] font-extrabold text-white mb-3">
              {Texts[0].text}
            </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFD23D] to-transparent mx-auto mt-6 rounded-full"></div>

          </div>

          {/* Slider */}
          <div className="relative backdrop-blur-sm rounded-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3500}
              loop={true}
              freeMode={true}
              breakpoints={{
                // Mobile very small (0-480px) - Very small gap
                0: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                // Mobile small (480-640px) - Small gap
                480: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
                // Mobile medium (640-700px) - Still small gap
                640: {
                  slidesPerView: 4,
                  spaceBetween: 12,
                },
                // Mobile to small tablets (700-768px)
                700: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                // Tablets (768-1024px)
                768: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                // Small desktops (1024-1280px)
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 60,
                },
                // Large desktops (1280px+)
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 80,
                },
              }}
              className="clients-swiper"
            >
              {[...icons, ...icons, ...icons].map((icon, index) => (
                <SwiperSlide key={index}>
                  <div className="group flex items-center justify-center h-16 sm:h-20 lg:h-24 transition-all duration-500 ">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={800}
                      height={400}
                      className="object-contain w-full h-full max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter drop-shadow-md"
                      draggable={false}
                      priority
                      quality={100}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <style jsx global>{`
          .clients-swiper .swiper-wrapper {
            transition-timing-function: linear !important;
          }
          .clients-swiper .swiper-slide {
            height: auto;
            display: flex;
            align-items: center;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Clients;
