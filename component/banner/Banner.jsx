"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookACallButton from "@/component/BookACall/BookACallButton";

const banners = [
  {
    type: "image",
    src: "/images/banner-1-pmo-operations.png",
    alt: "Meaningful & Secure AI for Smarter PMO Operations",
    width: 3234,
    height: 1024,
    cta: "Get My AI Readiness Report",
    ctaLeft: "5.63%",
    ctaTop: "72.07%",
  },
  {
    type: "html",
    src: "/images/banner-2-trozai-visual.png",
    alt: "TrozAI – An AI Platform That Works within Your Enterprise Ecosystem",
    width: 1536,
    height: 1024,
    cta: "Request a Free Demo",
    title: (
      <>
        <span className="text-white">Troz</span>
        <span className="text-[#ff3f3a]">AI</span>
        {" – An AI Platform That Works within Your "}
        <span className="text-[#ff3f3a]">Enterprise Ecosystem</span>
      </>
    ),
    body: "TrozAI is an AI-powered enterprise platform that integrates seamlessly with your existing systems — from PMO and PPM tools to CRM, SAP, ITSM, DevOps and legacy applications.",
  },
  {
    type: "image",
    src: "/images/banner-3-strategic-engine.png",
    alt: "Transform Your PMO into a Strategic Engine",
    width: 3234,
    height: 1024,
    cta: "Get My Trailored Roadmap",
    ctaLeft: "6.62%",
    ctaTop: "72.07%",
  },
  {
    type: "image",
    src: "/images/banner-4-orchestrate.png",
    alt: "Orchestrate complex enterprise workflows with intelligent automation",
    width: 3234,
    height: 1024,
    cta: "Book a Call",
    ctaLeft: "6.62%",
    ctaTop: "71.09%",
  },
];

const ctaStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "clamp(9px, 1.35vw, 22px)",
  padding: "clamp(5px, 0.85vw, 13px) clamp(12px, 1.7vw, 28px)",
  borderRadius: "9999px",
  letterSpacing: "0.01em",
  lineHeight: 1.15,
  WebkitFontSmoothing: "antialiased",
};

const ctaClassName =
  "absolute z-10 inline-flex items-center justify-center whitespace-nowrap bg-[#ff3f3a] font-bold text-white antialiased transition-opacity hover:opacity-90";

const htmlCtaClassName =
  "relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#ff3f3a] px-6 py-3 text-[14px] font-bold text-white antialiased transition-opacity hover:opacity-90 md:text-[16px]";

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative mt-20 aspect-[1617/512] w-full overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.src}
            className="relative h-full w-full flex-shrink-0"
          >
            {banner.type === "html" ? (
              <div className="relative flex h-full w-full items-center overflow-hidden bg-black">
                {/* Ambient blue glow — blends robot into dark theme */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[55%]"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 65% at 72% 50%, rgba(40,120,220,0.22) 0%, rgba(20,60,140,0.08) 40%, transparent 70%)",
                  }}
                />

                {/* Robot visual — soft left fade into black */}
                <div
                  className="absolute inset-y-0 right-0 z-0 w-[58%] md:w-[54%]"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 18%, black 42%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 18%, black 42%)",
                  }}
                >
                  <img
                    src={`${banner.src}?v=merge1`}
                    alt={banner.alt}
                    width={banner.width}
                    height={banner.height}
                    decoding="async"
                    className="h-full w-full object-contain object-right object-bottom"
                  />
                  {/* Bottom fade into page black */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%]"
                    style={{
                      background:
                        "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 45%, transparent 100%)",
                    }}
                  />
                  {/* Top fade under nav */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-[14%]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #000 0%, transparent 100%)",
                    }}
                  />
                </div>

                <div className="relative z-10 flex w-[58%] min-w-0 flex-col justify-center py-4 pl-5 pr-4 md:w-[55%] md:pl-10 md:pr-6 lg:pl-14 lg:pr-8">
                  <h1 className="w-full max-w-none text-[28px] font-bold leading-tight text-white md:text-[40px]">
                    {banner.title}
                  </h1>
                  <p className="mt-3 w-full max-w-none text-[14px] leading-relaxed text-white/90 md:mt-4 md:text-[16px]">
                    {banner.body}
                  </p>
                  <div className="mt-5 md:mt-7">
                    <BookACallButton className={htmlCtaClassName}>
                      {banner.cta}
                    </BookACallButton>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={`${banner.src}?v=hq2`}
                  alt={banner.alt}
                  width={banner.width}
                  height={banner.height}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className="h-full w-full object-cover object-center"
                />
                <BookACallButton
                  className={ctaClassName}
                  style={{
                    left: banner.ctaLeft,
                    top: banner.ctaTop,
                    ...ctaStyle,
                  }}
                >
                  {banner.cta}
                </BookACallButton>
              </>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 p-[10px] text-white md:flex"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 p-[10px] text-white md:flex"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index ? "bg-[#ff403a]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
