"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: "/images/md1.svg",
    title: "Project & Portfolio Management",
    href: "/project-management",
    items: [
      "Broadcom Clarity PPM",
      "Broadcom Rally",
      "Broadcom ConnectALL",
      "BI Dashboards (Power BI, Tableau, Qlik)",
    ],
  },
  {
    icon: "/images/md2.svg",
    title: "Enterprise IT Automation",
    href: "/enterprise-it-automation",
    items: [
      "Broadcom Automic Automation",
      "Automation Analytics & Intelligence",
      "Stonebranch UAC",
      "Redwood / AppWorx / Control-M Migrations",
    ],
  },
  {
    icon: "/images/md3.svg",
    title: "AI Services for Enterprise",
    href: "/ai-services-for-enterprise",
    items: [
      "LLM Engineering & Prompt Design",
      "Multi-Agent Orchestration",
      "RAG Pipeline Design",
      "MCP Protocol Integration",
      "Full-Stack AI Product Development",
    ],
  },
];

function ServiceCard({ service, index, inView }) {
  const [hovered, setHovered] = useState(false);
  // Highlight only on hover — no default featured state
  const active = hovered;

  const card = (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative h-full transition-[opacity,transform] duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${service.href ? "cursor-pointer" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Outer glow — absolute only, no layout push */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500 ${
          active
            ? "bg-gradient-to-b from-[#ff403a]/80 via-[#ff403a]/30 to-transparent opacity-100 blur-[1px]"
            : "opacity-0"
        }`}
      />

      <div
        className={`relative flex h-full min-h-full flex-col overflow-hidden rounded-2xl border bg-[#080808] p-7 transition-[border-color,box-shadow] duration-500 md:p-8 ${
          active
            ? "border-[#ff403a]/70 shadow-[0_0_40px_rgba(255,64,58,0.18)]"
            : "border-white/10 shadow-none"
        }`}
      >
        {/* Top accent bar */}
        <div className="absolute inset-x-0 top-0 h-[3px] overflow-hidden bg-white/5">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#ff403a] to-transparent transition-all duration-700 ${
              active ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Ambient corner glow */}
        <div
          aria-hidden
          className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ff403a]/10 blur-3xl transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Icon — scale stays inside card, no push */}
        <div className="relative mx-auto mb-7 flex h-24 w-24 shrink-0 items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full border transition-[border-color,opacity] duration-500 ${
              active
                ? "border-[#ff403a]/50 opacity-100"
                : "border-white/15 opacity-60"
            }`}
          />
          <div
            className={`absolute inset-2 rounded-full border border-dashed transition-[border-color,transform] duration-700 ${
              active
                ? "rotate-180 border-[#ff403a]/40"
                : "rotate-0 border-white/10"
            }`}
          />
          <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#ff403a] shadow-[0_8px_30px_rgba(255,64,58,0.35)]">
            <img
              src={service.icon}
              alt=""
              className="h-10 w-10 object-contain brightness-0 invert"
            />
          </div>
        </div>

        {/* Title — fixed min height so all cards align */}
        <h4 className="min-h-[56px] text-center text-[20px] font-semibold leading-snug text-white md:min-h-[60px] md:text-[22px]">
          {service.title}
        </h4>

        {/* Underline */}
        <div className="mx-auto my-5 flex h-[2px] w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full bg-[#ff403a] transition-all duration-500 ${
              active ? "w-full" : "w-1/2"
            }`}
          />
        </div>

        {/* List */}
        <ul className="mt-auto flex flex-1 flex-col space-y-3.5">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[14px] text-white/90 md:text-[16px]"
            >
              <span
                className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  active ? "bg-[#ff403a]/20" : "bg-transparent"
                }`}
              >
                <img src="/images/mdc.svg" alt="" className="h-4 w-4" />
              </span>
              <span
                className={`leading-snug transition-colors duration-300 ${
                  active ? "text-white" : "text-white/80"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Bottom shine on hover */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#ff403a]/[0.06] to-transparent transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </article>
  );

  if (service.href) {
    return (
      <Link href={service.href} className="block h-full">
        {card}
      </Link>
    );
  }

  return <div className="h-full">{card}</div>;
}

export default function WhatWeDo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section className="relative w-full overflow-hidden bg-black px-4 py-14 md:py-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-[#ff403a]/[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div
          className={`mb-10 text-center transition-all duration-700 md:mb-14 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff403a]/80">
            Our Expertise
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-[40px]">
            What <span className="text-[#ff403a]">We Do</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-normal text-white/80 md:text-sm">
            Smart Solutions,{" "}
            <span className="text-[#ff403a]">Measurable Results</span>
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#ff403a] to-transparent" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
