"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Testimonials from "../Home/Testimonials"
import Faqsection from "../Home/Faq"
import BlogSlider from "../Home/Blog"
import ContactSection from "../Home/Form"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Abovefooter() {

  const images = [
    "images/oc1.png",
    "images/oc2.png",
    "images/oc3.png",
    "images/oc4.png",
    "images/oc5.png",
  ];

const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Certified since 2023. Covers all consulting, implementation, and support services. Ensures consistent process quality across every engagement.",
  },
  {
    title: "CMMI ML3 (Services)",
    subtitle: "Capability Maturity Model Integration",
    description:
      "Achieved in 2024. Demonstrates defined, documented, and repeatable processes across all delivery functions — a hallmark of mature service firms.",
  },
  {
    title: "GDPR Compliant",
    subtitle: "Data Protection Compliance",
    description:
      "Certified since 2023. Covers all consulting, implementation, and support services. Ensures consistent process quality across every engagement.",
  },
  // {
  //   title: "Broadcom Partner of the Year",
  //   subtitle: "Expert Advantage Partner – Tier 1",
  //   description:
  //     "AAD solutions focused Tier-1 Reseller in India. Covers ValueOps (Clarity, Rally) and Automation (Automic). Recognized as Broadcom Partner of the Year – 2025, 2024.",
  // },
  // {
  //   title: "ISO 27001 (In Progress)",
  //   subtitle: "Information Security – Aspirational",
  //   description:
  //     "Currently in progress™. Target certification: 2026. Will formalize our robust information security controls already in practice.",
  // },
];


  return (
    <div>
      <section className="w-full overflow-hidden py-10 pb-5 md:pb-10  bg-black">
<div className="text-center  mb-10">
          <h2 className="text-3xl md:text-[45px] font-semibold text-white -mb-6">
            Our End  <span className="text-[#ff403a]">Customers</span>
          </h2>
        </div>
        <div className="relative flex overflow-hidden">

          {/* SLIDER */}
          <div className="flex animate-marquee gap-6">

            {[...images, ...images].map((img, index) => (
             <div
  key={index}
  className="w-[100px] md:w-[220px] h-[40px] md:h-[80px]  rounded-2xl flex items-center justify-center p-2 py-0 flex-shrink-0"
>
  <img
    src={img}
    alt=""
    className="max-w-full max-h-full object-contain"
  />
</div>
            ))}

          </div>
        </div>

        {/* CUSTOM CSS */}
        <style jsx>{`
          .animate-marquee {
            width: max-content;
            animation: marquee 25s linear infinite;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}</style>

      </section>
        <section className="bg-[#000000] py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-0">

        {/* Left Side */}
        <div className="w-full lg:w-[75%]">
          <h2 className="text-3xl text-center md:text-left md:text-[45px] font-bold text-[#FFFFFF] mb-8 md:mb-4">
           Awards &<span className="text-[#FF403A]"> 
 <br className="hidden md:block" /> Recognition </span>
          </h2>
        </div>
        {/* Right Side */}
        <div className="w-full flex justify-center gap-10">
            <div>
          <img
            src="images/ar1.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full  object-cover"
          />
          </div>
           <div>
          <img
            src="images/ar2.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full  object-cover"
          />
          </div>
        </div>
      </div>
    </section>
   <section className="w-full bg-black py-10 px-4">
  <div className="max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="text-center">
      <h2 className="text-3xl mb-8 md:mb-10 md:text-[40px] font-semibold text-white">
        Certifications &{" "}
        <span className="text-[#FF403A]">Accreditations</span>
      </h2>
    </div>

    {/* Desktop View */}
    <div className="hidden md:flex flex-wrap justify-center gap-6">
      {certifications.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[320px] bg-[#111111] rounded-2xl p-6 border border-gray-800 hover:border-[#ff403a] transition-all duration-300"
        >
          <h3 className="text-white text-[25px] font-bold mb-0">
            {item.title}
          </h3>

          <p className="text-[#FF403A] italic text-[18px] font-medium mb-1">
            {item.subtitle}
          </p>

          <p className="text-[#FFFFFF] text-[16px] leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    {/* Mobile Slider */}
    <div className="md:hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {certifications.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#111111] rounded-2xl p-6 border border-gray-800 min-h-[220px]">
              <h3 className="text-white text-[25px] font-bold mb-0">
                {item.title}
              </h3>

              <p className="text-[#FF403A] italic text-[18px] font-medium mb-1">
                {item.subtitle}
              </p>

              <p className="text-[#FFFFFF] text-[16px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  </div>
</section>
     <Testimonials />
     <Faqsection />
     <BlogSlider />
     <ContactSection />
    </div>
  );
}

export default Abovefooter;