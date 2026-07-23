import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    src: "/images/banner-1-pmo-operations.png",
    alt: "Meaningful & Secure AI for Smarter PMO Operations",
    width: 3234,
    height: 1024,
    cta: "Get my AI Readiness Report",
    ctaLeft: "5.63%",
    ctaTop: "72.07%",
  },
  {
    src: "/images/banner-2-trozai.png",
    alt: "TrozAI – An AI Platform That Works within Your Enterprise Ecosystem",
    width: 3234,
    height: 1024,
    cta: "Request a Free Demo",
    ctaLeft: "7.11%",
    ctaTop: "77.73%",
  },
  {
    src: "/images/banner-3-strategic-engine.png",
    alt: "Transform Your PMO into a Strategic Engine",
    width: 3234,
    height: 1024,
    cta: "Get my Trailored Roadmap",
    ctaLeft: "6.62%",
    ctaTop: "72.07%",
  },
  {
    src: "/images/banner-4-orchestrate.png",
    alt: "Orchestrate complex enterprise workflows with intelligent automation",
    width: 3234,
    height: 1024,
    cta: "Book a Call",
    ctaLeft: "6.62%",
    ctaTop: "71.09%",
  },
];

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
      {/* Slider Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.src}
            className="relative w-full h-full flex-shrink-0"
          >
            <img
              src={`${banner.src}?v=hq2`}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
              className="w-full h-full object-cover"
            />
            <Link
              href="/contact-us"
              className="absolute z-10 inline-flex items-center justify-center whitespace-nowrap bg-[#ff3f3a] font-bold text-white antialiased transition-opacity hover:opacity-90"
              style={{
                left: banner.ctaLeft,
                top: banner.ctaTop,
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "clamp(9px, 1.35vw, 22px)",
                padding:
                  "clamp(5px, 0.85vw, 13px) clamp(12px, 1.7vw, 28px)",
                borderRadius: "9999px",
                letterSpacing: "0.01em",
                lineHeight: 1.15,
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {banner.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="hidden cursor-pointer md:block p-[10px] absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center"
      >
        <ChevronLeft />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="hidden cursor-pointer md:block p-[10px] absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-[#ff403a]"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
