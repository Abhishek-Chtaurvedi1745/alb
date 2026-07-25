"use client";

import React from "react";
import HomeTestimonials from "../Home/HomeTestimonials"
import Faqsection from "../Home/Faq"
import BlogSlider from "../Home/Blog"
import ContactSection from "../Home/Form"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Abovefooter() {

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
        <section className="bg-[#000000] py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-0">

        {/* Left Side */}
        <div className="w-full lg:w-[75%]">
          <h1 className="text-3xl text-center md:text-left md:text-[40px] font-bold text-[#FFFFFF] mb-8 md:mb-4">
           Awards &<span className="text-[#FF403A]"> 
 <br className="hidden md:block" /> Recognition </span>
          </h1>
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
      <h1 className="text-3xl mb-8 md:mb-10 md:text-[40px] font-semibold text-white">
        Certifications &{" "}
        <span className="text-[#FF403A]">Accreditations</span>
      </h1>
    </div>

    {/* Desktop View */}
    <div className="hidden md:flex flex-wrap justify-center gap-6">
      {certifications.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[320px] bg-[#111111] rounded-2xl p-6 border border-gray-800 hover:border-[#ff403a] transition-all duration-300"
        >
          <h4 className="text-white text-[20px] font-bold mb-0">
            {item.title}
          </h4>

          <p className="text-[#FF403A] italic text-[13px] font-medium mb-1 font-normal">
            {item.subtitle}
          </p>

          <p className="text-[#FFFFFF] text-[13px] font-normal leading-relaxed">
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
              <h4 className="text-white text-[20px] font-bold mb-0">
                {item.title}
              </h4>

              <p className="text-[#FF403A] italic text-[13px] font-medium mb-1 font-normal">
                {item.subtitle}
              </p>

              <p className="text-[#FFFFFF] text-[13px] font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  </div>
</section>
     <HomeTestimonials />
     <Faqsection />
     <BlogSlider />
     <ContactSection />
    </div>
  );
}

export default Abovefooter;