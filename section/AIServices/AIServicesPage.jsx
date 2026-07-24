"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BookACallButton from "@/component/BookACall/BookACallButton";
import { useInView } from "react-intersection-observer";
import { aiServicesPageData } from "./aiServicesPageData";

const SLIDE_INTERVAL = 6500;
const HERO_IMAGE = "/images/ai.png";

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
          className={`font-normal mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:text-[18px] ${
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
      className={`flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 transition-all duration-700 hover:border-[#FF403A]/40 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h4 className="mb-4 text-xl font-semibold leading-snug text-white md:text-2xl">
        {panel.title}
      </h4>

      <p className="mb-5 text-sm leading-relaxed text-white/90 md:text-base">
        {panel.desc}
      </p>

      <ul className="mt-auto space-y-3">
        {panel.tags.map((tag) => (
          <li key={tag} className="flex items-start gap-2.5">
            <img src="/images/crt.svg" alt="" className="mt-1 h-4 w-4 shrink-0" />
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
  const layerLabels = ["Layer One", "Layer Two", "Layer Three"];
  const frontLabel = layerLabels[index] || `Layer ${index + 1}`;

  return (
    <article
      ref={ref}
      className={`ai-flip-card h-[360px] transition-all duration-700 sm:h-[380px] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="ai-flip-inner h-full w-full">
        <div className="ai-flip-face ai-flip-front flex flex-col items-center justify-center rounded-2xl border border-[#FF403A]/40 bg-[#0a0a0a] px-6 text-center">
          <p className="text-4xl font-bold tracking-tight text-[#FF403A] sm:text-5xl md:text-[52px]">
            {frontLabel}
          </p>
        </div>

        <div className="ai-flip-face ai-flip-back flex flex-col rounded-2xl border border-[#FF403A]/40 bg-[#0a0a0a] p-6 sm:p-7">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF403A]">
            {tier.kicker}
          </p>
          <RichHtml
            html={tier.titleHtml}
            className="mb-3 text-lg font-semibold leading-snug text-white md:text-xl"
            as="h4"
          />
          <p className="mb-5 flex-1 text-sm leading-relaxed text-white/90 md:text-[15px]">
            {tier.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {tier.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-[#111111] px-2.5 py-1 text-xs text-white/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
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
    startSlideTimer();
  };

  return (
    <div className="bg-black text-white">
      <section
        className="mt-[83px] bg-[#000000] px-6 py-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
          <div className="w-full">
            <div className="relative min-h-[280px] md:min-h-[320px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.eyebrow}
                  className={`ai-hero-slide ${index === activeSlide ? "active" : ""}`}
                >
                  <RichHtml
                    html={slide.titleHtml}
                    className="text-3xl font-semibold leading-tight text-white md:text-[40px]"
                    as="h1"
                  />
                  <p className="font-normal mt-6 max-w-2xl text-sm leading-relaxed text-white/90 md:text-[16px]">
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
                  key={slide.eyebrow}
                  type="button"
                  className={`relative h-[3px] w-8 overflow-hidden rounded-sm border-0 bg-white/15 ${
                    index === activeSlide ? "active" : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center">
            <img
              src={HERO_IMAGE}
              alt="AI services for enterprise"
              className="w-full rounded-xl shadow-lg"
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
