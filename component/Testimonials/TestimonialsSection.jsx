"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const MOBILE_TEXT_LIMIT = 130;

function truncateAtWord(text, limit) {
  if (text.length <= limit) return text;
  const slice = text.slice(0, limit);
  const lastSpace = slice.lastIndexOf(" ");
  return `${(lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trim()}…`;
}

function TestimonialQuote({ text, isActive, onExpandChange }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > MOBILE_TEXT_LIMIT;

  useEffect(() => {
    if (!isActive) {
      setExpanded(false);
    }
  }, [isActive]);

  useEffect(() => {
    onExpandChange?.(expanded);
  }, [expanded, onExpandChange]);

  return (
    <div>
      <p className="text-sm leading-relaxed text-white/90 md:text-base">
        <span className="md:hidden">
          {expanded || !isLong ? text : truncateAtWord(text, MOBILE_TEXT_LIMIT)}
        </span>
        <span className="hidden md:inline">{text}</span>
      </p>

      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-sm font-semibold text-[#ff403a] transition-colors hover:text-[#ff6b66] md:hidden"
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}

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
  const [quoteExpanded, setQuoteExpanded] = useState(false);

  const goToSlide = useCallback(
    (direction) => {
      setQuoteExpanded(false);
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
    if (paused || quoteExpanded) return;

    const interval = setInterval(() => {
      goToSlide("next");
    }, autoSlideMs);

    return () => clearInterval(interval);
  }, [autoSlideMs, goToSlide, paused, quoteExpanded]);

  return (
    <section
      className={sectionClassName}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 px-2 sm:px-4 lg:grid-cols-2 lg:gap-12 lg:px-0">
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

            <div className="mt-8 flex items-center gap-3 md:mt-12 md:gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setQuoteExpanded(false);
                    setCurrent(index);
                  }}
                  className={`rounded-full transition-all duration-500 ${
                    current === index ? "h-3 w-8 bg-[#ff403a]" : "h-3 w-3 bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative mt-2 max-md:px-1 md:mt-0">
            <div className="pointer-events-none absolute top-3 left-3 h-full w-full rounded-2xl border border-[#ff403a] max-md:top-2 max-md:left-2 md:top-5 md:left-5 md:rounded-3xl" />

            <div className="relative z-10 grid rounded-2xl bg-[#151515] md:min-h-[340px] md:rounded-3xl">
              {/* Mobile avatar — in flow */}
              <div className="flex px-5 pt-5 md:hidden">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="h-16 w-16 rounded-full border-[3px] border-black object-cover shadow-xl"
                />
              </div>

              {/* Desktop avatars — stacked */}
              <div className="absolute -top-10 -left-10 hidden h-24 w-24 md:block">
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
                  className={`col-start-1 row-start-1 flex flex-col justify-center px-5 pb-6 pt-3 transition-opacity duration-500 ease-in-out max-md:pt-4 md:px-12 md:pb-8 md:pt-2 ${
                    index === current
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <TestimonialQuote
                    text={testimonial.text}
                    isActive={index === current}
                    onExpandChange={
                      index === current ? setQuoteExpanded : undefined
                    }
                  />

                  <div className="mt-5 md:mt-8">
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-snug text-white/90">
                      {testimonial.role}
                    </p>
                    {testimonial.region &&
                    testimonial.region !== testimonial.role ? (
                      <p className="mt-1 text-sm text-white/70">
                        {testimonial.region}
                      </p>
                    ) : null}
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
