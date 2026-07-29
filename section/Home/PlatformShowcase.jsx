"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

// href only for Solutions → Project Portfolio Management matches
const platforms = [
  {
    src: "/images/clarity-logo-vector.svg",
    alt: "Clarity by Broadcom",
    tag: "Portfolio",
    href: "/clarity",
  },
  {
    src: "/images/Automic-by-broadcom.webp",
    alt: "Automic by Broadcom",
    tag: "Service Orchestration",
    href: "/automic-automation",
  },
  {
    src: "/images/rally.svg",
    alt: "Rally by Broadcom",
    tag: "Agile",
    href: "/rally",
  },
  {
    src: "/images/ca.svg",
    alt: "ConnectALL by Broadcom",
    tag: "Integration",
    href: "/connectall",
  },
  {
    src: "/images/stb.svg",
    alt: "Stonebranch",
    tag: "Automation",
    href: "/stonebranch",
  },
];

function PlatformLogo({ platform, index, inView }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <>
      <div
        className={`relative flex h-[88px] w-full items-center justify-center rounded-2xl border px-6 py-5 transition-all duration-500 sm:h-[100px] ${
          hovered
            ? "border-[#ff403a]/50 bg-white/[0.04] shadow-[0_0_35px_rgba(255,64,58,0.15)] -translate-y-1"
            : "border-white/[0.08] bg-white/[0.02]"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#ff403a]/10 to-transparent opacity-0 transition-opacity duration-500 ${
            hovered ? "opacity-100" : ""
          }`}
        />
        <img
          src={platform.src}
          alt={platform.alt}
          className={`relative z-10 h-10 w-auto max-w-full object-contain transition-all duration-500 sm:h-12 ${
            hovered ? "scale-110 brightness-110" : "brightness-90"
          }`}
        />
      </div>

      <span
        className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
          hovered ? "text-[#ff403a]" : "text-white/30"
        }`}
      >
        {platform.tag}
      </span>
    </>
  );

  const sharedClassName = `group relative flex w-[200px] shrink-0 flex-col items-center px-1 pt-3 transition-all duration-700 ease-out sm:w-[220px] ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  } ${platform.href ? "cursor-pointer" : ""}`;

  if (platform.href) {
    return (
      <Link
        href={platform.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={sharedClassName}
        style={{ transitionDelay: `${300 + index * 120}ms` }}
      >
        {card}
      </Link>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={sharedClassName}
      style={{ transitionDelay: `${300 + index * 120}ms` }}
    >
      {card}
    </div>
  );
}

export default function PlatformShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const marqueeItems = [...platforms, ...platforms];

  return (
    <section className="relative overflow-hidden bg-black py-14 md:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff403a]/[0.06] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(115deg, transparent 40%, rgba(255,64,58,0.06) 50%, transparent 60%),
              linear-gradient(115deg, transparent 65%, rgba(255,64,58,0.04) 72%, transparent 80%)
            `,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[40px]">
            Plan Smarter. Deliver Faster.{" "}
            <span className="text-[#ff403a]">Automate Everything.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-normal leading-relaxed text-white/75 md:text-[16px]">
            Industry-leading platforms that bring strategy, delivery, and
            automation together enabling your teams to move faster with complete
            visibility.
          </p>
        </div>

        {/* Auto-scroll logo strip */}
        <div className="relative mt-12 overflow-x-hidden py-5 md:mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-24" />

          <div className="platform-marquee flex w-max gap-5 sm:gap-6 lg:gap-8">
            {marqueeItems.map((platform, index) => (
              <PlatformLogo
                key={`${platform.alt}-${index}`}
                platform={platform}
                index={index % platforms.length}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .platform-marquee {
          animation: platform-marquee 32s linear infinite;
        }

        .platform-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes platform-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
