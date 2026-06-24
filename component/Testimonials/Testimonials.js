"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `As a Broadcom Expert Advantage Partner, Albatroz
    Solutions consistently demonstrates exceptional expertise
    in our ValueOps and Automation products.`,
    name: "Nagesh Jaiswal",
    role: "Partner Leader | Agile Operations Division",
    region: "APAC, META & Eastern European Territories",
  },

  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `Their collaborative approach and technical excellence
    helped us transform enterprise workflows and improve
    operational efficiency across teams.`,
    name: "Sarah Williams",
    role: "Director of Technology",
    region: "Europe & Asia Pacific",
  },

  {
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    text: `Outstanding customer support and enterprise solutions.
    The team consistently delivers quality and innovation
    for every project engagement.`,
    name: "Michael Brown",
    role: "Enterprise Solutions Manager",
    region: "North America",
  },
];

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  // NEXT SLIDE
  const nextSlide = () => {
    setAnimate(false);

    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

      setAnimate(true);
    }, 200);
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {
    setAnimate(false);

    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

      setAnimate(true);
    }, 200);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="w-full bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <p className="text-[#ff403a] uppercase tracking-widest text-sm mb-4">
              Testimonials
            </p>

            <h2 className="text-white text-[45px] font-semibold leading-tight">
              What People Say
              <br />
              <span className="text-[#ff403a]">About Us.</span>
            </h2>

            {/* DOTS */}
            <div className="flex items-center gap-4 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-500 rounded-full ${
                    current === index
                      ? "w-8 h-3 bg-[#ff403a]"
                      : "w-3 h-3 bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* RED BORDER */}
            <div className="absolute top-5 left-5 w-full h-full border border-[#ff403a] rounded-3xl"></div>

            {/* CARD */}
            <div
              className={`relative bg-[#151515] rounded-3xl p-8 z-10 min-h-[340px]
              transition-all duration-700 ease-in-out
              ${
                animate
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              {/* IMAGE */}
              <div
                className={`absolute -top-10 -left-10 transition-all duration-700
                ${
                  animate
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-75 -rotate-12"
                }`}
              >
                <img
                  src={testimonials[current].image}
                  alt=""
                  className="w-24 h-24 rounded-full object-cover border-4 border-black shadow-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className="ml-12 pt-2">
                <p className="text-[#FFFFFF] leading-relaxed text-sm md:text-base transition-all duration-700">
                  {testimonials[current].text}
                </p>

                {/* NAME */}
                <div className="mt-8">
                  <h3 className="text-white text-2xl font-bold">
                    ({testimonials[current].name})
                  </h3>

                  <p className="text-[#FFFFFF] text-sm mt-2">
                    {testimonials[current].role}
                  </p>

                  <p className="text-[#FFFFFF] text-sm">
                    {testimonials[current].region}
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-[#ff403a] hover:border-[#ff403a] transition-all duration-300"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-[#ff403a] hover:border-[#ff403a] transition-all duration-300"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TestimonialSlider;
