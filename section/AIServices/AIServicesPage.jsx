"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { aiServicesPageData } from "./aiServicesPageData";

const SLIDE_INTERVAL = 6500;

const badgeStyles = {
  green: "bg-green-500/10 text-green-400",
  amber: "bg-amber-500/10 text-amber-400",
  blue: "bg-blue-500/10 text-blue-400",
};

function RichHtml({ html, className = "", as: Tag = "span" }) {
  const safe = html
    .replace(/<em>/g, '<em class="text-[#ff403a] italic">')
    .replace(/<span class="ai-accent">/g, '<span class="text-[#ff403a] italic">')
    .replace(/<span class="accent">/g, '<span class="text-[#ff403a] italic">')
    .replace(/<br>/g, "<br />");

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safe }} />;
}

function SectionHeading({ eyebrow, titleHtml, subtitle, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`mb-10 text-center transition-all duration-700 md:mb-14 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff403a]/80">
          {eyebrow}
        </p>
      ) : null}
      {titleHtml ? (
        <RichHtml
          html={titleHtml}
          className="text-3xl font-semibold text-white sm:text-4xl md:text-[40px]"
          as="h2"
        />
      ) : null}
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
          {subtitle}
        </p>
      ) : null}
      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#ff403a] to-transparent" />
    </div>
  );
}

function PanelVisual({ visual }) {
  if (!visual) return null;

  const shell =
    "relative overflow-hidden rounded-2xl border border-[#ff403a]/20 bg-[#080808] p-5 shadow-[0_0_40px_rgba(255,64,58,0.06)] sm:p-6";

  if (visual.type === "chat") {
    return (
      <div className={shell}>
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#ff403a]/10 blur-3xl" />
        <div className="mb-4 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </div>
        <div className="ml-auto max-w-[92%] rounded-xl border border-[#ff403a]/25 bg-[#ff403a]/10 px-3 py-2.5 text-xs text-white sm:text-sm">
          {visual.user}
        </div>
        <div className="mt-2 max-w-[92%] rounded-xl border border-white/10 bg-black px-3 py-2.5 text-xs text-white/75 sm:text-sm">
          {visual.ai}
        </div>
      </div>
    );
  }

  return (
    <div className={shell}>
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#ff403a]/10 blur-3xl" />
      <div className="mb-4 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
      </div>
      {visual.rows?.map((row) => (
        <div
          key={`${row.icon}-${row.label}`}
          className="mb-2 flex items-center gap-2.5 rounded-lg border border-white/10 bg-black px-3 py-2.5 text-xs text-white/80 last:mb-0 sm:text-sm"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#ff403a]/15 text-[11px] text-[#ff403a]">
            {row.icon}
          </span>
          <span className="min-w-0 flex-1 truncate">{row.label}</span>
          {row.badge ? (
            <span
              className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] ${
                badgeStyles[row.badgeVariant] || "bg-[#ff403a]/10 text-[#ff403a]"
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
      className={`grid items-center gap-8 py-8 transition-all duration-700 lg:grid-cols-2 lg:gap-12 lg:py-10 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff403a]">
          {panel.num}
        </p>
        <h3 className="mb-4 text-xl font-semibold leading-snug text-white sm:text-2xl md:text-[28px]">
          {panel.title}
        </h3>
        <p className="mb-5 text-base leading-relaxed text-white/80 sm:text-[17px]">
          {panel.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {panel.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-[#111111] px-2.5 py-1 text-[11px] text-white/60 sm:text-xs"
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
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-[#ff403a]/40 to-transparent opacity-40" />
      <div className="relative flex h-full flex-col rounded-2xl border border-[#ff403a]/25 bg-[#080808] p-6 sm:p-7">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff403a] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(255,64,58,0.35)]">
          {tier.num}
        </div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
          {tier.kicker}
        </p>
        <RichHtml
          html={tier.titleHtml}
          className="mb-3 text-xl font-semibold text-white sm:text-[22px]"
          as="h3"
        />
        <p className="mb-5 flex-1 text-sm leading-relaxed text-white/75 sm:text-[15px]">
          {tier.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {tier.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-[#111111] px-2.5 py-1 text-[11px] text-white/60"
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
  const timerRef = useRef(null);

  const startSlideTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
  }, [slides.length]);

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
    <div className="bg-black">
      <section className="relative mt-[83px] overflow-hidden px-4 py-14 sm:px-6 md:py-20">
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

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <div className="relative min-h-[340px] sm:min-h-[380px]">
            {slides.map((slide, index) => (
              <div
                key={slide.eyebrow}
                className={`ai-hero-slide ${index === activeSlide ? "active" : ""}`}
              >
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff403a]/30 bg-[#ff403a]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#ff403a] sm:text-xs">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff403a]" />
                  {slide.eyebrow}
                </p>
                <RichHtml
                  html={slide.titleHtml}
                  className="mx-auto max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[45px]"
                  as="h1"
                />
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.href || "/contact-us"}
                  className="mt-8 inline-flex items-center rounded-lg bg-[#ff403a] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e63630] hover:shadow-[0_8px_24px_rgba(255,64,58,0.35)] sm:text-base"
                >
                  {slide.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="ai-hero-dots mt-8 flex justify-center gap-2">
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
      </section>

      <section className="relative px-4 pb-14 sm:px-6 sm:pb-16 md:pb-24" id="capabilities">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={flightHead.label.replace(" — ", " · ")}
            titleHtml={flightHead.titleHtml.replace(
              "now in one solution.",
              '<span class="text-[#ff403a]">now in one solution.</span>'
            )}
          />

          <div className="relative isolate">
            <svg
              className="ai-flight-svg hidden lg:block"
              viewBox="0 0 1180 2320"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="aiFlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff403a" stopOpacity="0" />
                  <stop offset="15%" stopColor="#ff403a" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ff403a" stopOpacity="0.6" />
                  <stop offset="85%" stopColor="#ff403a" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff403a" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="ai-flight-line"
                d="M 590 50 C 200 160, 950 280, 590 380 S 200 560, 590 660 S 950 840, 590 940 S 200 1120, 590 1220 S 950 1400, 590 1500 S 200 1680, 590 1780 S 950 1960, 590 2060"
              />
              <circle className="ai-flight-marker" r="5" fill="#ff403a">
                <animateMotion
                  dur="18s"
                  repeatCount="indefinite"
                  path="M 590 50 C 200 160, 950 280, 590 380 S 200 560, 590 660 S 950 840, 590 940 S 200 1120, 590 1220 S 950 1400, 590 1500 S 200 1680, 590 1780 S 950 1960, 590 2060"
                />
              </circle>
            </svg>

            <div className="relative z-[1] divide-y divide-white/5">
              {panels.map((panel, index) => (
                <CapabilityRow key={panel.num} panel={panel} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:py-20" id="skills">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={skillsHead.label}
            titleHtml={skillsHead.titleHtml}
            subtitle={skillsHead.desc}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            {tiers.map((tier, index) => (
              <TierCard key={tier.kicker} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24" id="contact">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#ff403a]/35 bg-gradient-to-br from-[#ff403a]/10 to-transparent p-8 text-center sm:p-10 md:p-12">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-[40px]">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
              {cta.desc}
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center rounded-lg bg-[#ff403a] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e63630] sm:text-base"
            >
              {cta.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
