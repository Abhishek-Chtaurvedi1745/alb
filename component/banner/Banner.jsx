"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookACallButton from "@/component/BookACall/BookACallButton";

const RED_GLOW =
  "radial-gradient(ellipse 70% 65% at 72% 50%, rgba(220,60,55,0.20) 0%, rgba(140,25,25,0.08) 40%, transparent 70%)";
const BLUE_GLOW =
  "radial-gradient(ellipse 70% 65% at 72% 50%, rgba(40,120,220,0.22) 0%, rgba(20,60,140,0.08) 40%, transparent 70%)";

// The robot render is bottom-right anchored inside a mostly empty black frame,
// so it is blended with a CSS mask. The other crops are filled edge to edge and
// ship with their edge feathering baked into the PNG alpha instead.
const ROBOT_LAYOUT = {
  artClassName: "lg:right-[12%] lg:w-[54%]",
  textClassName: "lg:w-[55%]",
  // The robot sits right of centre inside its frame, so it is nudged left to
  // read as centred in the stacked layout.
  objectPosition: "object-[32%_50%] lg:object-right lg:object-bottom",
  maskClassName: "banner-art-mask",
  edgeFades: true,
};

const FILLED_LAYOUT = {
  artClassName: "lg:right-[3%] lg:w-[46%]",
  textClassName: "lg:w-[52%]",
  objectPosition: "object-center",
  maskClassName: "",
  edgeFades: false,
};

const banners = [
  {
    src: "/images/banner-1-visual.png",
    alt: "Meaningful & Secure AI for Smarter PMO Operations",
    width: 1391,
    height: 1024,
    cta: "Get My AI Readiness Report",
    glow: RED_GLOW,
    ...FILLED_LAYOUT,
    title: (
      <>
        {"Meaningful & Secure AI for Smarter "}
        <span className="text-[#ff3f3a] lg:whitespace-nowrap">
          PMO Operations
        </span>
      </>
    ),
    body: "Discover how AI can help you uncover the intelligence buried in years of project history, and bring it to scope, schedule, risk, financial and staffing decisions — the moment you need it, not after the fact. We'll help assess your PMO AI readiness with a tailored AI readiness report.",
  },
  {
    src: "/images/banner-2-trozai-visual.png",
    alt: "TrozAI – An AI Platform That Works within Your Enterprise Ecosystem",
    width: 1536,
    height: 1024,
    cta: "Request a Free Demo",
    glow: BLUE_GLOW,
    ...ROBOT_LAYOUT,
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
    src: "/images/banner-3-visual.png",
    alt: "Transform Your PMO into a Strategic Engine",
    width: 1520,
    height: 1024,
    cta: "Get My Tailored Roadmap",
    glow: RED_GLOW,
    ...FILLED_LAYOUT,
    title: (
      <>
        {"Transform Your PMO into a "}
        <span className="text-[#ff3f3a] lg:whitespace-nowrap">
          Strategic Engine
        </span>
      </>
    ),
    body: "We help you digitise your portfolio practices and improve strategic alignment by building a tailored roadmap aligned to your organization's maturity.",
  },
  {
    src: "/images/banner-4-orchestration.png",
    alt: "Robotic assembly line running intelligent workload orchestration",
    width: 1024,
    height: 764,
    cta: "Book a Call",
    glow: RED_GLOW,
    ...FILLED_LAYOUT,
    title: (
      <>
        {"Orchestrate complex enterprise workflows with "}
        <span className="text-[#ff3f3a] lg:whitespace-nowrap">
          intelligent automation
        </span>
      </>
    ),
    body: "Leverage the native AI-enabled capabilities of Automic and Stonebranch to orchestrate complex enterprise processes with speed, reliability, and control.",
  },
];

// Lower bounds keep the button a comfortable tap target on phones; the vw term
// takes over on the desktop poster layout.
const ctaStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "clamp(13px, 1.35vw, 22px)",
  padding: "clamp(10px, 0.85vw, 13px) clamp(20px, 1.7vw, 28px)",
  borderRadius: "9999px",
  letterSpacing: "0.01em",
  lineHeight: 1.15,
  WebkitFontSmoothing: "antialiased",
};

const ctaClassName =
  "relative z-10 inline-flex min-h-[44px] items-center justify-center whitespace-nowrap bg-[#ff3f3a] font-bold text-white antialiased transition-opacity hover:opacity-90 lg:min-h-0";

// Above lg the slider height is locked to an aspect ratio, so the title scales
// with viewport width to stay in proportion with the artwork. Body copy size is
// owned by the sitewide `p` rule in globals.css.
const titleStyle = {
  fontSize: "clamp(22px, 2.55vw, 46px)",
  lineHeight: 1.18,
};

const bodyStyle = {
  marginTop: "clamp(8px, 1vw, 18px)",
};

const ctaWrapStyle = {
  marginTop: "clamp(16px, 1.9vw, 34px)",
};

const SWIPE_THRESHOLD = 40;

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    if (distance < 0) nextSlide();
    else prevSlide();
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative mt-20 w-full overflow-hidden bg-black lg:aspect-[1617/512]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out lg:h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div key={banner.src} className="relative w-full flex-shrink-0 lg:h-full">
            {/* Stacks vertically below lg, where the wide banner ratio leaves
                no room for the copy alongside the artwork. */}
            <div className="relative flex h-full w-full flex-col justify-center overflow-hidden bg-black lg:flex-row lg:items-center lg:justify-start">
              {/* Ambient glow — blends the artwork into the dark theme */}
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-y-0 z-[1] hidden lg:block ${banner.artClassName}`}
                style={{ background: banner.glow }}
              />

              {/* Artwork — feathered so it dissolves into the black stage.
                  Sits between the copy and the CTA once stacked. */}
              <div
                className={`relative z-0 order-2 h-[42vw] max-h-[230px] w-full md:max-h-[310px] lg:absolute lg:inset-y-0 lg:order-none lg:h-auto lg:max-h-none ${banner.maskClassName} ${banner.artClassName}`}
              >
                <img
                  src={`${banner.src}?v=2`}
                  alt={banner.alt}
                  width={banner.width}
                  height={banner.height}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className={`h-full w-full object-contain ${banner.objectPosition}`}
                />
                {banner.edgeFades ? (
                  <>
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
                  </>
                ) : null}
              </div>

              {/* `contents` lets the copy and the CTA become siblings of the
                  artwork while stacked, so they can be ordered around it, then
                  regroup into a single column for the desktop poster. */}
              <div
                className={`contents lg:relative lg:z-10 lg:flex lg:min-w-0 lg:flex-col lg:justify-center lg:py-4 lg:pl-16 lg:pr-6 lg:text-left ${banner.textClassName}`}
              >
                <div className="relative z-10 order-1 w-full min-w-0 px-6 pt-6 text-left lg:order-none lg:p-0">
                  <h1
                    className="w-full max-w-none font-bold text-white"
                    style={titleStyle}
                  >
                    {banner.title}
                  </h1>
                  <p
                    className="w-full max-w-none text-white/90"
                    style={bodyStyle}
                  >
                    {banner.body}
                  </p>
                </div>

                <div
                  className="relative z-10 order-3 w-full px-6 pb-14 text-left lg:order-none lg:p-0"
                  style={ctaWrapStyle}
                >
                  <BookACallButton className={ctaClassName} style={ctaStyle}>
                    {banner.cta}
                  </BookACallButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 p-[10px] text-white lg:flex"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 p-[10px] text-white lg:flex"
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
