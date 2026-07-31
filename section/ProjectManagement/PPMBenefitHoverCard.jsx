"use client";

import { useState } from "react";

export default function PPMBenefitHoverCard({ benefit }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article
      className={`group relative flex h-full min-h-[252px] w-full cursor-pointer flex-col rounded-xl border bg-[#080808] transition-colors duration-500 ease-out sm:min-h-[300px] sm:rounded-2xl ${
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
      aria-label={benefit.title}
    >
      <div
        className={`pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#ff403a]/10 blur-2xl transition-opacity duration-500 sm:-right-8 sm:-top-8 sm:h-28 sm:w-28 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      {!isActive ? (
        <div className="flex flex-1 flex-col p-3 pb-4 sm:p-6 sm:pb-6 md:p-7">
          <div className="mb-2 sm:mb-4">
            <img
              src={benefit.icon}
              alt=""
              className="h-8 w-8 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
            />
          </div>

          <h4 className="text-[12px] font-medium leading-snug text-white sm:text-xl md:text-[20px]">
            {benefit.title}
          </h4>

          <div className="mt-2 flex items-center gap-1 sm:mt-4">
            <div className="h-px w-6 bg-white sm:w-16" />
            <div className="h-px w-2 bg-[#ff403a] sm:w-4" />
          </div>

          <p className="mt-auto pt-3 text-[10px] font-medium leading-normal text-[#ff403a]/80 sm:pt-4 sm:text-sm">
            <span className="hidden md:inline">Hover to explore</span>
            <span className="md:hidden">Tap to explore</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-1 flex-col p-3 pb-4 sm:p-6 sm:pb-6 md:p-7">
          <h4 className="mb-2 text-[12px] font-semibold leading-snug text-white sm:mb-4 sm:text-lg md:text-xl">
            {benefit.title}
          </h4>

          <p className="text-[11px] font-normal leading-relaxed text-white/85 sm:text-[13px] md:text-[16px] lg:text-[13px]">
            {benefit.description}
          </p>

          <div className="mt-auto flex items-center gap-1 pt-3 sm:mt-5 sm:pt-4">
            <div className="h-px w-6 bg-[#ff403a] sm:w-10" />
            <div className="h-px w-8 bg-white/40 sm:w-16" />
          </div>
        </div>
      )}
    </article>
  );
}
