"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function TestimonialsSection({
  testimonials,
  eyebrow,
  title = "What Employees Say",
  highlight = "About Us.",
  autoSlideMs = 5000,
  sectionClassName = "w-full bg-black py-10 pt-0 md:pt-20 px-4 overflow-hidden",
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goToSlide = useCallback(
    (direction) => {
      setCurrent((prev) => {
        if (direction === "next") {
          return prev === testimonials.length - 1 ? 0 : prev + 1;
        }
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      });
    },
    [testimonials.length]
  );

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      goToSlide("next");
    }, autoSlideMs);

    return () => clearInterval(interval);
  }, [autoSlideMs, goToSlide, paused]);

  return (
    <section
      className={sectionClassName}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 px-[30px] lg:grid-cols-2 lg:px-0">
          <div>
            {eyebrow ? (
              <p className="mb-4 text-sm uppercase tracking-widest text-[#ff403a]">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="text-3xl font-semibold leading-tight text-white md:text-[40px]">
              {title}
              <br />
              <span className="text-[#ff403a]">{highlight}</span>
            </h1>

            <div className="mt-12 flex items-center gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
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

            {/* Every quote is stacked in the same grid cell, so the card is
                always as tall as the longest one and switching slides cannot
                reflow the rest of the page. */}
            <div className="relative z-10 grid min-h-[340px] rounded-3xl bg-[#151515] pt-8">
              <div className="absolute -top-10 -left-10 h-24 w-24">
                {testimonials.map((testimonial, index) => (
                  <img
                    key={`${testimonial.name}-avatar`}
                    src={testimonial.image}
                    alt={testimonial.name}
                    aria-hidden={index !== current}
                    className={`absolute inset-0 h-24 w-24 rounded-full border-4 border-black object-cover shadow-2xl transition-opacity duration-500 ease-in-out ${
                      index === current ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  aria-hidden={index !== current}
                  className={`col-start-1 row-start-1 flex flex-col justify-center px-8 pb-8 pt-2 transition-opacity duration-500 ease-in-out md:px-12 ${
                    index === current
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-white md:text-base">
                    {testimonial.text}
                  </p>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="mt-2 text-sm text-white">{testimonial.role}</p>
                    <p className="text-sm text-white">{testimonial.region}</p>
                  </div>
                </div>
              ))}
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
