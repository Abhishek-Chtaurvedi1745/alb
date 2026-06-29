import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  { src: "/images/banner-trozai.png", alt: "TrozAI – An AI Platform That Works with Your PPM Ecosystem" },
  { src: "/images/banner-pmo-operations.png", alt: "Meaningful & Secure AI for Smarter PMO Operations" },
  { src: "/images/banner-ai-agents.png", alt: "Simplify Complex Enterprise Workflows with AI Agents" },
  { src: "/images/banner-strategic-engine.png", alt: "Transform Your PMO into a Strategic Engine" },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full aspect-[1617/512] overflow-hidden mt-20 bg-black">
      
      {/* Slider Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
          >
            <img
              src={banner.src}
              alt={banner.alt}
              width={1617}
              height={512}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
              className="w-full h-full object-cover"
            />
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