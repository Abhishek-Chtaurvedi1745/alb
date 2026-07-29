"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BookACallButton from "@/component/BookACall/BookACallButton";
import { useInView } from "react-intersection-observer";
import { aiServicesPageData } from "./aiServicesPageData";

const SLIDE_INTERVAL = 6500;
const HERO_IMAGE = "/images/ai-services-hero.png?v=2";

function RichHtml({ html, className = "", as: Tag = "span" }) {
  const safe = html
    .replace(/<em>/g, '<em class="text-[#FF403A] not-italic">')
    .replace(/<span class="ai-accent">/g, '<span class="text-[#FF403A]">')
    .replace(/<span class="accent">/g, '<span class="text-[#FF403A]">')
    .replace(/<br>/g, "<br />");

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safe }} />;
}

function SectionHeading({ titleHtml, subtitle, className = "", centered = true }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`mb-0 transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${centered ? "text-center" : ""} ${className}`}
    >
      {titleHtml ? (
        <RichHtml
          html={titleHtml}
          className="text-3xl font-semibold leading-tight text-white md:text-[40px]"
          as="h3"
        />
      ) : null}
      {subtitle ? (
        <p
          className={`font-normal mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:text-[16px] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function CapabilityCard({ panel, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-700 hover:border-[#FF403A]/50 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {panel.image ? (
        <>
          <img
            src={`${panel.image}?v=1`}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#0c0c0c]" />
      )}

      <h4 className="relative mb-4 text-[20px] font-semibold leading-snug text-white">
        {panel.title}
      </h4>

      <p className="relative mb-5 text-sm leading-relaxed text-white/90 md:text-base">
        {panel.desc}
      </p>

      <ul className="relative mt-auto space-y-3">
        {panel.tags.map((tag) => (
          <li key={tag} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF403A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3 w-3 text-white"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm leading-relaxed text-white/90 md:text-base">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function TierCard({ tier, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const layerNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={ref}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#FF403A]/35 bg-[#0a0a0a] p-6 transition-all duration-700 hover:-translate-y-1 hover:border-[#FF403A]/70 sm:p-7 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-8 text-[7rem] font-bold leading-none text-[#FF403A]/[0.07] transition-colors duration-500 group-hover:text-[#FF403A]/15"
      >
        {layerNumber}
      </div>

      <div className="relative mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF403A]/40 bg-[#FF403A]/10 text-sm font-bold text-white">
          {layerNumber}
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF403A]">
          {tier.kicker}
        </p>
      </div>

      <RichHtml
        html={tier.titleHtml}
        className="relative mb-3 text-lg font-semibold leading-snug text-white md:text-xl"
        as="h4"
      />
      <p className="relative mb-6 flex-1 text-sm leading-relaxed text-white/90 md:text-[15px]">
        {tier.desc}
      </p>
      <div className="relative flex flex-wrap gap-2">
        {tier.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-white/10 bg-[#111111] px-2.5 py-1 text-xs text-white/70 transition-colors group-hover:border-[#FF403A]/25 group-hover:text-white/85"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function AIServicesPage() {
  const { slides, flightHead, panels, skillsHead, tiers } = aiServicesPageData;
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const startSlideTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (paused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
  }, [slides.length, paused]);

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startSlideTimer]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    if (timerRef.current) clearInterval(timerRef.current);
    if (!paused) {
      timerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, SLIDE_INTERVAL);
    }
  };

  return (
    <div className="bg-black text-white">
      <section
        className="mt-[83px] bg-[#000000] px-6 py-16 md:px-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="w-full">
            <div className="ai-hero-slides">
              {slides.map((slide, index) => (
                <div
                  key={slide.eyebrow}
                  className={`ai-hero-slide ${index === activeSlide ? "active" : ""}`}
                  aria-hidden={index !== activeSlide}
                >
                  <RichHtml
                    html={slide.titleHtml}
                    className="text-3xl font-semibold leading-tight text-white md:text-[40px]"
                    as="h1"
                  />
                  <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-white/90 md:text-[16px]">
                    {slide.subtitle}
                  </p>
                  <BookACallButton className="mt-7 inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
                    {slide.cta}
                  </BookACallButton>
                </div>
              ))}
            </div>

            <div className="ai-hero-dots mt-8 flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.eyebrow}-${index === activeSlide ? "on" : "off"}`}
                  type="button"
                  className={`ai-hero-dot relative flex h-8 w-10 cursor-pointer items-center border-0 bg-transparent p-0 ${
                    index === activeSlide ? "active" : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="relative block h-[3px] w-8 overflow-hidden rounded-sm bg-white/15" />
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden bg-black">
            <img
              src={HERO_IMAGE}
              alt="AI partnership for enterprise — human and intelligent systems working together"
              className="relative z-10 w-full object-contain mix-blend-lighten [mask-image:radial-gradient(ellipse_at_center,black_42%,rgba(0,0,0,0.85)_68%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_42%,rgba(0,0,0,0.85)_68%,transparent_100%)] [mask-size:100%_100%] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[28%] bg-gradient-to-r from-black via-black/70 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[28%] bg-gradient-to-l from-black via-black/70 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-black via-black/70 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black via-black/75 to-transparent"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12" id="capabilities">
        <div className="mx-auto max-w-7xl">
          <SectionHeading titleHtml={flightHead.titleHtml} />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {panels.map((panel, index) => (
              <div
                key={panel.title}
                className={
                  index === panels.length - 1
                    ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:col-start-2 lg:mx-0 lg:w-full"
                    : undefined
                }
              >
                <CapabilityCard panel={panel} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12" id="skills">
        <div className="mx-auto max-w-7xl">
          <SectionHeading titleHtml={skillsHead.titleHtml} subtitle={skillsHead.desc} />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            {tiers.map((tier, index) => (
              <TierCard key={tier.kicker} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
