"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Client logos
import DietHubIcon from "../../../../public/clients/diethub.png";
import FarefocusIcon from "../../../../public/clients/Farefocus.png";
import FitIcon from "../../../../public/clients/FIT.png";
import FursanIcon from "../../../../public/clients/Fursan.png";
import GvIcon from "../../../../public/clients/GV.png";
import happyLifeIcon from "../../../../public/clients/happyLife.png";
import IdealSolutionIcon from "../../../../public/clients/IdealSolution.png";
import ideaspaceIcon from "../../../../public/clients/ideaspace.png";
import itripIcon from "../../../../public/clients/itrip.png";
import jiraldurIcon from "../../../../public/clients/jiraldur.png";
import RoafyIcon from "../../../../public/clients/Roafy.png";
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

const Texts = [
  { text: "شركاؤنا في النجاح" },
  { text: "نفخر بثقة عملائنا من الشركات الرائدة في المنطقة" },
];

const Clients = () => {
  return (
    <section className="w-full bg-white h-max pb-5 pt-5 overflow-hidden relative" dir="rtl">
      {/* Grid Background Lines - Same as Hero */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.2) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(0,0,0,0.2) 2px, transparent 2px)
            `,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Decorative lines - Same style as Hero but with dark colors */}
        <div className="absolute top-1/4 left-1/5 w-48 h-1 bg-gradient-to-r from-yellow-400 to-transparent opacity-30 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/5 w-48 h-1 bg-gradient-to-l from-yellow-400 to-transparent opacity-30 -rotate-45"></div>
        <div className="absolute top-3/4 left-2/3 w-32 h-1 bg-gradient-to-r from-gray-400 to-transparent opacity-20 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
            {Texts[0].text}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {Texts[1].text}
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={60}
            slidesPerView={2}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3500}
            loop={true}
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 80,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 90,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 100,
              },
            }}
            className="clients-swiper"
          >
            {[...icons, ...icons, ...icons].map((icon, index) => (
              <SwiperSlide key={index}>
                <div className="group flex items-center justify-center  transition-all duration-500">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={800}
                    height={400}
                    className="object-contain w-full h-full  opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter drop-shadow-md"
                    draggable={false}
                    priority
                    quality={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Trust text */}
        <div className="text-center mt-8">
          <span className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            +{icons.length} شركة تثق في خدماتنا
          </span>
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
    </section>
  );
};

export default Clients;