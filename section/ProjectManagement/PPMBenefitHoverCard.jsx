"use client";

import { useState } from "react";

export default function PPMBenefitHoverCard({ benefit }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article
      className={`group relative cursor-pointer overflow-hidden rounded-xl border bg-[#080808] transition-all duration-500 ease-out sm:rounded-2xl ${
        isActive
          ? "min-h-[340px] border-[#ff403a]/45 shadow-[0_0_35px_rgba(255,64,58,0.18)] sm:min-h-[320px]"
          : "min-h-[260px] border-white/10 hover:border-[#ff403a]/45 hover:shadow-[0_0_35px_rgba(255,64,58,0.18)] sm:min-h-[300px]"
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
      aria-label={benefit.title}
    >
      <div
        className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#ff403a]/10 blur-2xl transition-opacity duration-500 sm:-right-8 sm:-top-8 sm:h-28 sm:w-28 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative z-10 flex h-full flex-col p-4 transition-all duration-500 ease-out sm:p-6 md:p-7 ${
          isActive ? "pointer-events-none opacity-0 -translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="mb-3 sm:mb-4">
          <img
            src={benefit.icon}
            alt=""
            className="h-11 w-11 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
          />
        </div>

        <h3 className="text-lg font-medium leading-snug text-white sm:text-xl md:text-[25px]">
          {benefit.title}
        </h3>

        <div className="mt-3 flex items-center gap-1 sm:mt-4">
          <div className="h-px w-12 bg-white sm:w-16" />
          <div className="h-px w-3 bg-[#ff403a] sm:w-4" />
        </div>

        <p className="mt-4 text-xs font-medium text-[#ff403a]/80 sm:mt-5 sm:text-sm">
          <span className="hidden md:inline">Hover to explore</span>
          <span className="md:hidden">Tap to explore</span>
        </p>
      </div>

      <div
        className={`absolute inset-0 z-20 flex flex-col justify-center overflow-y-auto p-4 transition-all duration-500 ease-out sm:p-6 md:p-7 ${
          isActive ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <h3 className="mb-3 text-base font-semibold leading-snug text-white sm:mb-4 sm:text-lg md:text-xl">
          {benefit.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/85 sm:text-[15px] md:text-[16px] lg:text-[17px]">
          {benefit.description}
        </p>

        <div className="mt-4 flex items-center gap-1 sm:mt-5">
          <div className="h-px w-8 bg-[#ff403a] sm:w-10" />
          <div className="h-px w-12 bg-white/40 sm:w-16" />
        </div>
      </div>
    </article>
  );
}
