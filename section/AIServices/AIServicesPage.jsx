"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import GetStartedLink from "@/component/GetStartedLink";
import { useInView } from "react-intersection-observer";
import { aiServicesPageData } from "./aiServicesPageData";

const SLIDE_INTERVAL = 6500;
const HERO_IMAGE = "/images/ai.png";

const badgeStyles = {
  green: "bg-green-500/10 text-green-400",
  amber: "bg-amber-500/10 text-amber-400",
  blue: "bg-blue-500/10 text-blue-400",
};

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
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <h4 className="text-xl font-semibold leading-snug text-white md:text-2xl">
          {panel.title}
        </h4>
        <p className="font-normal mt-4 text-sm leading-relaxed text-white/90 md:text-[16px]">
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

function TierCard({ tier, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`group relative transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative flex h-full flex-col rounded-2xl border border-[#FF403A]/25 bg-[#0a0a0a] p-6 sm:p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF403A]">
          {tier.kicker}
        </p>
        <RichHtml
          html={tier.titleHtml}
          className="mb-3 text-xl font-semibold text-white md:text-2xl"
          as="h4"
        />
        <p className="font-normal mb-5 flex-1 text-sm leading-relaxed text-white/90 md:text-[16px]">
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
    </article>
  );
}

export default function AIServicesPage() {
  const { slides, flightHead, panels, skillsHead, tiers, cta } = aiServicesPageData;
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
                  <Link
                    href={slide.href || "/contact-us"}
                    className="mt-[28px] inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-[25px] font-semibold text-white transition hover:opacity-90"
                  >
                    {slide.cta}
                  </Link>
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

          <div className="mt-12">
            {panels.map((panel, index) => (
              <CapabilityRow key={panel.title} panel={panel} index={index} />
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

      <section className="px-6 pb-20 pt-4 lg:px-12" id="contact">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-3xl font-semibold leading-tight md:text-[40px]">
            {cta.title.replace(".", "")}
            <span className="text-[#FF403A]">.</span>
          </h3>
          <p className="font-normal mt-6 max-w-3xl text-sm leading-relaxed text-white/90 md:text-[16px]">
            {cta.desc}
          </p>
          <GetStartedLink product="AI Services" className="mt-10" />
        </div>
      </section>
    </div>
  );
}
