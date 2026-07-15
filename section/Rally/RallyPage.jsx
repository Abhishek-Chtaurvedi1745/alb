"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import GetStartedLink from "@/component/GetStartedLink";
import { useInView } from "react-intersection-observer";
import {
  capabilityPanels,
  capabilitiesHead,
  closingCta,
  deliveryHead,
  deliveryPhases,
  rallyHeroSlides,
} from "./rallyPageData";

const SLIDE_INTERVAL = 6500;
const HERO_IMAGE = "/images/connectall-hero.png";

const badgeStyles = {
  green: "bg-green-500/10 text-green-400",
  amber: "bg-amber-500/10 text-amber-400",
  blue: "bg-blue-500/10 text-blue-400",
};

function TitleWithAccent({ title, accent, className = "", as: Tag = "h2" }) {
  if (!accent || !title.includes(accent)) {
    return <Tag className={className}>{title}</Tag>;
  }

  const [before, after] = title.split(accent);

  return (
    <Tag className={className}>
      {before}
      <span className="text-[#FF403A]">{accent}</span>
      {after}
    </Tag>
  );
}

function SectionHeading({ title, titleAccent, subtitle }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <TitleWithAccent
        title={`${title} ${titleAccent}`}
        accent={titleAccent}
        className="text-3xl font-semibold leading-tight text-white md:text-[40px]"
        as="h2"
      />
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:text-[18px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function PanelVisual({ visual }) {
  if (!visual) return null;

  const shell =
    "relative overflow-hidden rounded-2xl border border-[#FF403A]/20 bg-[#0a0a0a] p-5 sm:p-6";

  if (visual.type === "chat") {
    return (
      <div className={shell}>
        <div className="ml-auto max-w-[92%] rounded-xl border border-[#FF403A]/25 bg-[#FF403A]/10 px-3 py-2.5 text-sm text-white md:text-[16px]">
          {visual.user}
        </div>
        <div className="mt-2 max-w-[92%] rounded-xl border border-white/10 bg-black px-3 py-2.5 text-sm text-white/75 md:text-[16px]">
          {visual.ai}
        </div>
      </div>
    );
  }

  return (
    <div className={shell}>
      {visual.rows?.map((row) => (
        <div
          key={`${row.icon}-${row.label}`}
          className="mb-2 flex items-center gap-2.5 rounded-lg border border-white/10 bg-black px-3 py-2.5 text-sm text-white/80 last:mb-0 md:text-[16px]"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#FF403A]/15 text-[11px] text-[#FF403A]">
            {row.icon}
          </span>
          <span className="min-w-0 flex-1 truncate">{row.label}</span>
          {row.badge ? (
            <span
              className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] ${
                badgeStyles[row.badgeVariant] || "bg-[#FF403A]/10 text-[#FF403A]"
              }`}
            >
              {row.badge}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function CapabilityRow({ panel, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const reversed = index % 2 === 1;

  return (
    <article
      ref={ref}
      className={`grid items-center gap-8 border-t border-white/10 py-10 transition-all duration-700 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-12 lg:py-12 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
          {panel.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-white/90 md:text-[18px]">
          {panel.desc}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {panel.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-[#111111] px-2.5 py-1 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={reversed ? "lg:order-1" : ""}>
        <PanelVisual visual={panel.visual} />
      </div>
    </article>
  );
}

function PhaseCard({ phase, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex h-full flex-col rounded-2xl border border-[#FF403A]/25 bg-[#0a0a0a] p-6 sm:p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF403A]">
          {phase.kicker}
        </p>
        <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
          {phase.title}
        </h3>
        <p className="mb-5 flex-1 text-base leading-relaxed text-white/90 md:text-[18px]">
          {phase.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {phase.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-[#111111] px-2.5 py-1 text-xs text-white/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function RallySliderSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const startSlideTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (paused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % rallyHeroSlides.length);
    }, SLIDE_INTERVAL);
  }, [paused]);

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startSlideTimer]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    startSlideTimer();
  };

  return (
    <section
      className="bg-black px-6 py-16 text-white lg:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid">
          {rallyHeroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`rally-hero-slide col-start-1 row-start-1 ${
                index === activeSlide ? "active" : ""
              }`}
            >
              <TitleWithAccent
                title={slide.title}
                accent={slide.titleAccent}
                className="text-3xl font-semibold leading-tight text-white md:text-[40px]"
                as="h1"
              />
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 md:text-[18px]">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="rally-hero-dots mt-6 flex gap-2">
          {rallyHeroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`relative h-[3px] w-8 overflow-hidden rounded-sm border-0 bg-white/15 ${
                index === activeSlide ? "active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <Link
          href="/contact-us"
          className="mt-6 inline-block rounded-xl bg-[#FF403A] px-8 py-4 font-semibold shadow-lg shadow-red-500/30 transition hover:opacity-90"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}

export default function RallyPage() {
  return (
    <div className="bg-black text-white">
      <section className="mt-[83px] bg-[#000000] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
          <div className="w-full">
            <img
              src="/images/rally.svg"
              alt="Rally by Broadcom"
              className="h-auto w-full max-w-[324px]"
            />
            <Link
              href="/contact-us"
              className="mt-[28px] inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-[25px] font-semibold text-white transition hover:opacity-90"
            >
              Request a free demo
            </Link>
          </div>

          <div className="flex w-full justify-center">
            <img
              src={HERO_IMAGE}
              alt="Rally enterprise agile management"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <RallySliderSection />

      <section className="px-6 py-16 lg:px-12" id="capabilities">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title={capabilitiesHead.title}
            titleAccent={capabilitiesHead.titleAccent}
          />

          <div className="mt-12">
            {capabilityPanels.map((panel, index) => (
              <CapabilityRow key={panel.title} panel={panel} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12" id="delivery">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title={deliveryHead.title}
            titleAccent={deliveryHead.titleAccent}
            subtitle={deliveryHead.subtitle}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            {deliveryPhases.map((phase, index) => (
              <PhaseCard key={phase.kicker} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold leading-tight md:text-[40px]">
            {closingCta.title}
            <span className="text-[#FF403A]">.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 md:text-[18px]">
            {closingCta.desc}
          </p>
          <GetStartedLink product="Rally" className="mt-10" />
        </div>
      </section>
    </div>
  );
}
