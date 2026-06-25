"use client";

import { useState } from "react";

export default function PPMBenefitHoverCard({ benefit }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl border bg-[#080808] p-6 transition-all duration-500 ease-out sm:min-h-[320px] sm:p-7 ${
        isActive
          ? "border-[#ff403a]/45 shadow-[0_0_35px_rgba(255,64,58,0.18)]"
          : "border-white/10 hover:border-[#ff403a]/45 hover:shadow-[0_0_35px_rgba(255,64,58,0.18)]"
      }`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive((prev) => !prev)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsActive((prev) => !prev);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
    >
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#ff403a]/10 blur-2xl transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative z-10 flex h-full min-h-[248px] flex-col transition-all duration-500 ease-out sm:min-h-[268px] ${
          isActive ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="mb-4">
          <img src={benefit.icon} alt="" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
        </div>

        <h3 className="text-xl font-medium leading-snug text-white sm:text-[25px]">
          {benefit.title}
        </h3>

        <div className="mt-4 flex items-center gap-1">
          <div className="h-px w-16 bg-white" />
          <div className="h-px w-4 bg-[#ff403a]" />
        </div>

        <p className="mt-5 text-sm font-medium text-[#ff403a]/80">
          <span className="hidden md:inline">Hover to explore</span>
          <span className="md:hidden">Tap to explore</span>
        </p>
      </div>

      <div
        className={`absolute inset-0 z-20 flex flex-col justify-center p-6 transition-all duration-500 ease-out sm:p-7 ${
          isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff403a]">
          PPM Benefit
        </p>

        <h3 className="mb-4 text-lg font-semibold leading-snug text-white sm:text-xl">
          {benefit.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/85 sm:text-[16px] md:text-[17px]">
          {benefit.description}
        </p>

        <div className="mt-5 flex items-center gap-1">
          <div className="h-px w-10 bg-[#ff403a]" />
          <div className="h-px w-16 bg-white/40" />
        </div>
      </div>
    </article>
  );
}
