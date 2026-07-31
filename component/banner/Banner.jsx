"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookACallButton from "@/component/BookACall/BookACallButton";

const RED_GLOW =
  "radial-gradient(ellipse 70% 65% at 72% 50%, rgba(220,60,55,0.20) 0%, rgba(140,25,25,0.08) 40%, transparent 70%)";
const BLUE_GLOW =
  "radial-gradient(ellipse 70% 65% at 72% 50%, rgba(40,120,220,0.22) 0%, rgba(20,60,140,0.08) 40%, transparent 70%)";

const ROBOT_LAYOUT = {
  artClassName: "lg:right-[12%] lg:w-[54%]",
  textClassName: "lg:w-[55%]",
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

function BannerSlide({ banner, index }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden bg-black lg:flex-row lg:items-center lg:justify-start">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 z-[1] hidden lg:block ${banner.artClassName}`}
        style={{ background: banner.glow }}
      />

      <div
        className={`relative z-0 order-2 h-[200px] w-full shrink-0 md:h-[240px] lg:absolute lg:inset-y-0 lg:order-none lg:h-auto lg:max-h-none ${banner.maskClassName} ${banner.artClassName}`}
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
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%]"
              style={{
                background:
                  "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 45%, transparent 100%)",
              }}
            />
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

      <div
        className={`contents lg:relative lg:z-10 lg:flex lg:min-w-0 lg:flex-col lg:justify-center lg:py-4 lg:pl-16 lg:pr-6 lg:text-left ${banner.textClassName}`}
      >
        <div className="relative z-10 order-1 w-full min-w-0 px-6 pt-6 text-left max-lg:min-h-[11.5rem] lg:order-none lg:min-h-0 lg:p-0">
          <h1
            className="w-full max-w-none font-bold text-white"
            style={titleStyle}
          >
            {banner.title}
          </h1>
          <p
            className="w-full max-w-none text-white/90 max-lg:min-h-[7.25rem]"
            style={bodyStyle}
          >
            {banner.body}
          </p>
        </div>

        <div
          className="relative z-10 order-3 flex w-full justify-center px-6 pb-14 max-lg:min-h-[7.25rem] lg:order-none lg:min-h-0 lg:justify-start lg:p-0"
          style={ctaWrapStyle}
        >
          <BookACallButton className={ctaClassName} style={ctaStyle}>
            {banner.cta}
          </BookACallButton>
        </div>
      </div>
    </div>
  );
}

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileHeight, setMobileHeight] = useState(null);
  const touchStartX = useRef(null);
  const measureRefs = useRef([]);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const syncViewport = () => setIsDesktop(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);
    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useLayoutEffect(() => {
    if (isDesktop) {
      setMobileHeight(null);
      return;
    }

    const measureSlides = () => {
      const heights = measureRefs.current.map((node) => node?.offsetHeight ?? 0);
      const tallest = Math.max(...heights, 0);
      if (tallest > 0) setMobileHeight(tallest);
    };

    measureSlides();

    const observer = new ResizeObserver(measureSlides);
    measureRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    window.addEventListener("resize", measureSlides);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureSlides);
    };
  }, [isDesktop]);

  return (
    <section
      className="relative mt-20 w-full overflow-hidden bg-black lg:aspect-[1617/512]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Off-screen measurement keeps every mobile slide the same height. */}
      <div
        className="pointer-events-none invisible absolute top-0 left-[-10000px] w-full lg:hidden"
        aria-hidden
      >
        {banners.map((banner, index) => (
          <div
            key={`measure-${banner.src}`}
            ref={(node) => {
              measureRefs.current[index] = node;
            }}
            className="w-full"
          >
            <BannerSlide banner={banner} index={index} />
          </div>
        ))}
      </div>

      {/* Mobile: equal-height stack with smooth crossfade */}
      <div
        className="relative min-h-[32rem] lg:hidden"
        style={mobileHeight ? { height: mobileHeight } : undefined}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.src}
            className={`absolute inset-x-0 top-0 transition-opacity duration-700 ease-in-out ${
              index === current
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
            aria-hidden={index !== current}
          >
            <BannerSlide banner={banner} index={index} />
          </div>
        ))}
      </div>

      {/* Desktop: horizontal slide track */}
      <div
        className="hidden transition-transform duration-700 ease-in-out lg:flex lg:h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div key={`desktop-${banner.src}`} className="relative w-full shrink-0 lg:h-full">
            <BannerSlide banner={banner} index={index} />
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
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-[#ff403a]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
