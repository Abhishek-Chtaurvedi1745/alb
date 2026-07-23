"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Info } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "ADOPT",
    desc: "We help you get started with the right foundation. From setup to training, we ensure a smooth and successful start.",
    accent: "#ff403a",
    borderClass: "border-[#ff403a]/50",
    glowClass: "shadow-[0_0_30px_rgba(255,64,58,0.12)]",
    textClass: "text-[#ff403a]",
    bgClass: "bg-[#ff403a]",
    icon: "/images/ww1.svg?v=red",
    checkIcon: "/images/aa1.svg",
    list: [
      "Product Installation",
      "Implementation & Initial Rollout",
      "Consulting",
      "Data Migration",
      "Education & Training",
    ],
  },
  {
    number: "02",
    title: "EXTEND",
    desc: "We help you scale your workflow with smart integrations and advanced solutions tailored to your business.",
    accent: "#ff403a",
    borderClass: "border-[#ff403a]/50",
    glowClass: "shadow-[0_0_30px_rgba(255,64,58,0.12)]",
    textClass: "text-[#ff403a]",
    bgClass: "bg-[#ff403a]",
    icon: "/images/ww2.svg?v=red",
    checkIcon: "/images/aa1.svg",
    list: [
      "Rollout to Other Business Units",
      "Product Upgrades",
      "Integrations with 3rd party systems",
      "Reports & BI Dashboards",
      "Custom Configs & Automations",
      "Staff Augmentation Services",
      "AI Agents",
    ],
  },
  {
    number: "03",
    title: "MAINTAIN",
    desc: "We provide continuous support and optimization to ensure long-term performance and reliability.",
    accent: "#ff403a",
    borderClass: "border-[#ff403a]/50",
    glowClass: "shadow-[0_0_30px_rgba(255,64,58,0.12)]",
    textClass: "text-[#ff403a]",
    bgClass: "bg-[#ff403a]",
    icon: "/images/ww3.svg?v=red",
    checkIcon: "/images/aa1.svg",
    list: [
      "L2/L3 Solution Support",
      "Managed Support Services",
      "Proactive System Health Monitoring",
    ],
  },
];

function InfoPanel({ step, variant = "popover" }) {
  const content = (
    <>
      <div className={`px-4 py-3 text-center text-sm font-semibold text-white ${step.bgClass}`}>
        {step.title} — Services
      </div>
      <ul className={`py-2 ${variant === "popover" ? "max-h-[280px] overflow-y-auto" : ""}`}>
        {step.list.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 px-4 py-2 text-[14px] text-white/90 transition-colors hover:bg-white/[0.04]"
          >
            <img src={step.checkIcon} alt="" className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </>
  );

  if (variant === "inline") {
    return (
      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#141414]">
        {content}
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-full z-[200] mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-white/10 bg-[#141414] shadow-2xl lg:left-full lg:right-auto lg:top-0 lg:mt-0 lg:ml-3">
      {content}
    </div>
  );
}

function StepCard({ step, index, inView, activeInfo, setActiveInfo }) {
  const [hovered, setHovered] = useState(false);
  const isInfoOpen = activeInfo === index;
  const isActive = hovered || isInfoOpen;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl border bg-[#050505] p-5 transition-all duration-500 md:p-6 ${
        step.borderClass
      } ${isActive ? step.glowClass : ""} ${
        isInfoOpen ? "z-[100]" : "z-0"
      } ${
        inView ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 gap-4">
          {/* Favicon: red border, white icon */}
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${step.borderClass} transition-transform duration-300 ${
              isActive ? "scale-105" : ""
            }`}
          >
            <img
              src={step.icon}
              alt=""
              className="h-6 w-6 brightness-0 invert"
            />
          </div>

          <div className="flex-1">
            <h4 className="flex flex-wrap items-baseline gap-2 text-2xl font-semibold md:text-[30px]">
              <span className={`${step.textClass} text-2xl md:text-[36px]`}>
                {step.number}
              </span>
              <span className="text-white">{step.title}</span>
            </h4>
            <p className="mt-3 text-[13px] font-normal leading-relaxed text-white/85 md:text-[16px]">
              {step.desc}
            </p>
          </div>
        </div>

        {/* Info icon: white + red border → red on hover */}
        <div
          className="relative -m-3 shrink-0 p-3"
          onMouseEnter={() => {
            if (window.matchMedia("(hover: hover)").matches) {
              setActiveInfo(index);
            }
          }}
          onMouseLeave={() => {
            if (window.matchMedia("(hover: hover)").matches) {
              setActiveInfo(null);
            }
          }}
        >
          <button
            type="button"
            aria-label={`More information about ${step.title}`}
            aria-expanded={isInfoOpen}
            onClick={() => setActiveInfo(isInfoOpen ? null : index)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border bg-transparent transition-all duration-300 ${step.borderClass} ${
              isInfoOpen
                ? "text-[#ff403a]"
                : "text-white hover:text-[#ff403a]"
            }`}
          >
            <Info size={18} strokeWidth={2.5} />
          </button>

          {isInfoOpen && (
            <div className="hidden lg:block">
              <InfoPanel step={step} variant="popover" />
            </div>
          )}
        </div>
      </div>

      {isInfoOpen && (
        <div className="lg:hidden">
          <InfoPanel step={step} variant="inline" />
        </div>
      )}
    </article>
  );
}

export default function HowWeWork() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [activeInfo, setActiveInfo] = useState(null);

  return (
    <section className="relative w-full bg-black py-12 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ff403a]/[0.05] blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`mb-10 text-center transition-all duration-700 md:mb-14 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-semibold text-white md:text-[40px]">
            How We <span className="text-[#ff403a]">Work</span>
          </h3>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Steps */}
          <div className="relative z-30 space-y-5">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={step}
                index={index}
                inView={inView}
                activeInfo={activeInfo}
                setActiveInfo={setActiveInfo}
              />
            ))}
          </div>

          {/* Illustration */}
          <div
            className={`relative z-0 flex justify-center transition-all duration-1000 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="absolute h-72 w-72 rounded-full bg-[#ff403a]/15 blur-3xl" />
            <div className="absolute h-48 w-48 translate-x-16 -translate-y-8 rounded-full bg-[#ff403a]/10 blur-3xl" />
            <img
              src="/images/hww.png?v=2"
              alt="How we work process illustration"
              className="relative z-0 w-full max-w-[520px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
