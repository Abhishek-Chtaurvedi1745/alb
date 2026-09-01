"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookACallButton from "@/component/BookACall/BookACallButton";

const RED_GLOW =
  "radial-gradient(ellipse 72% 68% at 70% 48%, rgba(255,64,58,0.22) 0%, rgba(140,25,25,0.08) 42%, transparent 72%)";
const BLUE_GLOW =
  "radial-gradient(ellipse 72% 68% at 70% 48%, rgba(40,140,240,0.24) 0%, rgba(20,60,140,0.08) 42%, transparent 72%)";

const ROBOT_LAYOUT = {
  artClassName: "lg:right-[1%] lg:w-[50%]",
  textClassName: "lg:w-[52%]",
  objectPosition: "object-center",
  imageClassName: "mx-auto max-w-[560px] lg:max-w-none",
  maskClassName: "banner-art-mask",
  edgeFades: true,
};

const FILLED_LAYOUT = {
  artClassName: "lg:right-[3%] lg:w-[46%]",
  textClassName: "lg:w-[52%]",
  objectPosition: "object-center",
  imageClassName: "mx-auto max-w-[520px] lg:max-w-none",
  maskClassName: "",
  edgeFades: true,
};

const banners = [
  {
    src: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788262803/albatroz/banner-1-visual.png",
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
    src: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788262804/albatroz/banner-2-trozai-visual.jpg",
    alt: "troz.ai – An AI Platform That Works within Your Enterprise Ecosystem",
    width: 1024,
    height: 768,
    cta: "Request a Free Demo",
    glow: BLUE_GLOW,
    ...ROBOT_LAYOUT,
    title: (
      <>
        <span className="text-white">troz</span>
        <span className="text-[#ff3f3a]">.ai</span>
        {" – An AI Platform That Works within Your "}
        <span className="text-[#ff3f3a]">Enterprise Ecosystem</span>
      </>
    ),
    body: "troz.ai is an AI-powered enterprise platform that integrates seamlessly with your existing systems — from PMO and PPM tools to CRM, SAP, ITSM, DevOps and legacy applications.",
  },
  {
    src: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788262810/albatroz/banner-3-visual.png",
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
    src: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788262813/albatroz/banner-4-orchestration.png",
    alt: "Robotic assembly line running intelligent workload orchestration",
    width: 1024,
    height: 764,
    cta: "Connect With Our Experts",
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
  fontSize: "clamp(14px, 1.35vw, 20px)",
  padding: "clamp(12px, 0.9vw, 14px) clamp(22px, 1.8vw, 30px)",
  borderRadius: "9999px",
  letterSpacing: "0.01em",
  lineHeight: 1.15,
  WebkitFontSmoothing: "antialiased",
};

const ctaClassName =
  "relative z-10 inline-flex min-h-[48px] w-full max-w-[320px] items-center justify-center whitespace-nowrap bg-[#ff3f3a] font-bold text-white antialiased transition-opacity duration-300 hover:opacity-95 lg:min-h-0 lg:w-auto lg:max-w-none lg:shadow-[0_0_28px_rgba(255,63,58,0.28)] lg:hover:shadow-[0_0_36px_rgba(255,63,58,0.4)]";

const SWIPE_THRESHOLD = 40;
const BANNER_INTERVAL = 6000;

function EdgeFades() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-[18%] bg-gradient-to-r from-black from-10% via-black/70 to-transparent max-lg:w-[22%]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-[3] w-[18%] bg-gradient-to-l from-black from-10% via-black/70 to-transparent max-lg:w-[22%]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-[20%] bg-gradient-to-b from-black from-15% via-black/65 to-transparent max-lg:h-[24%]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[26%] bg-gradient-to-t from-black from-20% via-black/70 to-transparent max-lg:h-[30%]"
      />
    </>
  );
}

function BannerSlide({ banner, index, active }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-black lg:flex-row lg:items-center lg:justify-start">
      {/* Ambient glow — desktop only */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 z-[1] hidden transition-opacity duration-700 lg:block ${banner.artClassName}`}
        style={{
          background: banner.glow,
          opacity: active ? 1 : 0.35,
        }}
      />

      {/* Copy */}
      <div
        className={`relative z-10 order-1 w-full px-5 pt-5 sm:px-8 sm:pt-6 lg:order-none lg:flex lg:h-full lg:min-w-0 lg:flex-col lg:justify-center lg:py-5 lg:pl-20 lg:pr-6 lg:text-left ${banner.textClassName}`}
      >
        <h1 className="text-center text-[1.45rem] font-bold leading-[1.2] text-white sm:text-[1.75rem] md:text-[2rem] lg:text-left lg:text-[clamp(22px,2.55vw,46px)] lg:leading-[1.18]">
          {banner.title}
        </h1>

        <p className="mx-auto mt-3 max-w-[34rem] text-center text-[13px] font-normal leading-relaxed text-white/85 sm:mt-3.5 sm:text-[14px] md:text-[15px] lg:mx-0 lg:mt-[clamp(8px,1vw,18px)] lg:max-w-none lg:text-left lg:text-[clamp(13px,1.05vw,16px)] lg:text-white/90">
          {banner.body}
        </p>

        {/* Desktop CTA stays with copy */}
        <div className="mt-[clamp(16px,1.9vw,34px)] hidden lg:block">
          <BookACallButton className={ctaClassName} style={ctaStyle}>
            {banner.cta}
          </BookACallButton>
        </div>
      </div>

      {/* Artwork — between copy and CTA on mobile */}
      <div
        className={`relative z-[2] order-2 mx-auto mt-2 flex h-[210px] w-full max-w-[420px] shrink-0 items-center justify-center overflow-hidden bg-black sm:mt-3 sm:h-[250px] sm:max-w-[480px] md:h-[300px] md:max-w-[540px] lg:absolute lg:inset-y-0 lg:right-0 lg:order-none lg:mx-0 lg:mt-0 lg:h-auto lg:max-h-none lg:max-w-none lg:block ${banner.maskClassName} ${banner.artClassName}`}
      >
        <img
          src={`${banner.src}?v=4`}
          alt={banner.alt}
          width={banner.width}
          height={banner.height}
          decoding="async"
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`h-full w-full object-contain mix-blend-lighten transition-transform duration-700 ease-out ${
            active ? "scale-100 opacity-100" : "scale-[0.97] opacity-90"
          } ${banner.objectPosition} ${banner.imageClassName ?? ""}`}
        />
        {banner.edgeFades ? <EdgeFades /> : null}
      </div>

      {/* Mobile CTA under image */}
      <div className="relative z-10 order-3 flex w-full justify-center px-5 pb-12 pt-4 sm:pb-14 sm:pt-5 lg:hidden">
        <BookACallButton className={ctaClassName} style={ctaStyle}>
          {banner.cta}
        </BookACallButton>
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
    const interval = setInterval(nextSlide, BANNER_INTERVAL);
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
      {/* Soft top vignette for polish */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[15] h-10 bg-gradient-to-b from-black/40 to-transparent lg:h-6"
      />

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
            <BannerSlide banner={banner} index={index} active />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        className="relative min-h-[34rem] lg:hidden"
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
            <BannerSlide
              banner={banner}
              index={index}
              active={index === current}
            />
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div
        className="hidden transition-transform duration-700 ease-in-out lg:flex lg:h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={`desktop-${banner.src}`}
            className="relative w-full shrink-0 lg:h-full"
          >
            <BannerSlide
              banner={banner}
              index={index}
              active={index === current}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm transition hover:border-[#ff403a]/60 hover:bg-black/75 lg:flex"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm transition hover:border-[#ff403a]/60 hover:bg-black/75 lg:flex"
      >
        <ChevronRight size={22} />
      </button>

      {/* Progress-style dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
        {banners.map((_, index) => {
          const isActive = current === index;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                isActive
                  ? "w-7 bg-[#ff403a] shadow-[0_0_10px_rgba(255,64,58,0.55)]"
                  : "w-1.5 bg-white/35 hover:bg-white/55"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
