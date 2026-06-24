"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function TestimonialsSection({
  testimonials,
  eyebrow = "Testimonials",
  title = "What Employees Say",
  highlight = "About Us.",
  autoSlideMs = 5000,
  sectionClassName = "w-full bg-black py-10 pt-0 md:pt-20 px-4 overflow-hidden",
}) {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  const goToSlide = useCallback(
    (direction) => {
      setAnimate(false);

      setTimeout(() => {
        setCurrent((prev) => {
          if (direction === "next") {
            return prev === testimonials.length - 1 ? 0 : prev + 1;
          }
          return prev === 0 ? testimonials.length - 1 : prev - 1;
        });
        setAnimate(true);
      }, 200);
    },
    [testimonials.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide("next");
    }, autoSlideMs);

    return () => clearInterval(interval);
  }, [current, autoSlideMs, goToSlide]);

  const active = testimonials[current];

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 px-[30px] lg:grid-cols-2 lg:px-0">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-[#ff403a]">
              {eyebrow}
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-white md:text-[40px]">
              {title}
              <br />
              <span className="text-[#ff403a]">{highlight}</span>
            </h2>

            <div className="mt-12 flex items-center gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setAnimate(false);
                    setTimeout(() => {
                      setCurrent(index);
                      setAnimate(true);
                    }, 200);
                  }}
                  className={`rounded-full transition-all duration-500 ${
                    current === index ? "h-3 w-8 bg-[#ff403a]" : "h-3 w-3 bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-5 left-5 h-full w-full rounded-3xl border border-[#ff403a]" />

            <div
              className={`relative z-10 min-h-[340px] rounded-3xl bg-[#151515] pt-8 transition-all duration-700 ease-in-out ${
                animate
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-8 scale-95 opacity-0"
              }`}
            >
              <div
                className={`absolute -top-10 -left-10 transition-all duration-700 ${
                  animate
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-12 scale-75 opacity-0"
                }`}
              >
                <img
                  src={active.image}
                  alt={active.name}
                  className="h-24 w-24 rounded-full border-4 border-black object-cover shadow-2xl"
                />
              </div>

              <div className="ml-12 pt-2">
                <p className="text-sm leading-relaxed text-white transition-all duration-700 md:text-base">
                  {active.text}
                </p>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white">({active.name})</h3>
                  <p className="mt-2 text-sm text-white">{active.role}</p>
                  <p className="text-sm text-white">{active.region}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-6 z-20 flex -translate-y-1/2 flex-col gap-4">
              <button
                type="button"
                onClick={() => goToSlide("prev")}
                className="-mr-[50px] hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-700 p-[10px] text-white transition-all duration-300 hover:border-[#ff403a] hover:bg-[#ff403a] md:flex"
                aria-label="Previous testimonial"
              >
                <ChevronUp size={22} />
              </button>

              <button
                type="button"
                onClick={() => goToSlide("next")}
                className="-mr-[50px] hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-700 p-[10px] text-white transition-all duration-300 hover:border-[#ff403a] hover:bg-[#ff403a] md:flex"
                aria-label="Next testimonial"
              >
                <ChevronDown size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
