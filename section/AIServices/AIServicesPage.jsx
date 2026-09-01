"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BookACallButton from "@/component/BookACall/BookACallButton";
import { aiServicesPageData } from "./aiServicesPageData";

const SLIDE_INTERVAL = 6000;
const HERO_IMAGE = "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788262763/albatroz/ai-services-hero.jpg?v=3";

function RichHtml({ html, className = "", as: Tag = "span" }) {
  const safe = html
    .replace(/<em>/g, '<em class="text-[#FF403A] not-italic">')
    .replace(/<span class="ai-accent">/g, '<span class="text-[#FF403A]">')
    .replace(/<span class="accent">/g, '<span class="accent">')
    .replace(/<br>/g, "<br />");

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safe }} />;
}

function MockVisual({ visual }) {
  if (!visual) return null;

  if (visual.type === "chat") {
    return (
      <>
        <div className="mock-chrome">
          <span className="mock-dot" />
          <span className="mock-dot" />
          <span className="mock-dot" />
        </div>
        <div className="chat-bubble user">{visual.user}</div>
        <div className="chat-bubble ai">{visual.ai}</div>
      </>
    );
  }

  return (
    <>
      <div className="mock-chrome">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
      </div>
      {visual.rows.map((row) => (
        <div key={`${row.label}-${row.badge}`} className="mock-row">
          <span className="mock-icon">{row.icon}</span>
          <span>{row.label}</span>
          <span
            className={`mock-badge${row.badgeVariant ? ` ${row.badgeVariant}` : ""}`}
          >
            {row.badge}
          </span>
        </div>
      ))}
    </>
  );
}

function useInViewClass(refs, setActive, scrollingRef) {
  useEffect(() => {
    const nodes = refs.current.filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (setActive && !scrollingRef?.current) {
              const idx = nodes.indexOf(entry.target);
              if (idx >= 0) setActive(idx);
            }
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((node) => {
      observer.observe(node);
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 80) {
        node.classList.add("in-view");
      }
    });
    return () => observer.disconnect();
  }, [refs, setActive, scrollingRef]);
}

export default function AIServicesPage() {
  const { slides, flightHead, panels, skillsHead, tiers } =
    aiServicesPageData;
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const panelRefs = useRef([]);
  const tierRefs = useRef([]);

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

  useInViewClass(panelRefs);
  useInViewClass(tierRefs);

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
        className="mt-[83px] bg-[#000000] px-5 py-8 sm:px-8 md:px-16 md:py-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          {/* Text (+ desktop CTA) */}
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
                    className="text-left text-3xl font-semibold leading-tight text-white md:text-[40px]"
                    as="h1"
                  />
                  <p className="mt-4 max-w-2xl text-left text-sm font-normal leading-relaxed text-white/90 md:mt-6 md:text-[16px]">
                    {slide.subtitle}
                  </p>
                  <div className="mt-7 hidden md:block">
                    <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
                      {slide.cta}
                    </BookACallButton>
                  </div>
                </div>
              ))}
            </div>

            <div className="ai-hero-dots mt-8 hidden gap-2 md:flex">
              {slides.map((slide, index) => (
                <button
                  key={`d-${slide.eyebrow}-${index === activeSlide ? "on" : "off"}`}
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

          {/* Banner / image */}
          <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center overflow-hidden bg-black md:mx-0 md:max-w-none">
            <img
              src={HERO_IMAGE}
              alt="troz.ai — AI partnership for enterprise"
              width={1024}
              height={764}
              className="relative z-10 mx-auto h-auto w-full max-w-full object-contain object-center mix-blend-lighten [mask-image:radial-gradient(ellipse_at_center,black_55%,rgba(0,0,0,0.9)_78%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,rgba(0,0,0,0.9)_78%,transparent_100%)] [mask-size:100%_100%] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[18%] bg-gradient-to-r from-black via-black/65 to-transparent md:w-[22%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[18%] bg-gradient-to-l from-black via-black/65 to-transparent md:w-[22%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-20 h-12 bg-gradient-to-b from-black via-black/65 to-transparent md:h-16"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-black via-black/70 to-transparent md:h-20"
            />
          </div>

          {/* Mobile-only: button after banner */}
          <div className="flex w-full flex-col items-center gap-4 md:hidden">
            {slides.map((slide, index) => (
              <div
                key={`m-cta-${slide.eyebrow}`}
                className={index === activeSlide ? "block" : "hidden"}
              >
                <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90">
                  {slide.cta}
                </BookACallButton>
              </div>
            ))}

            <div className="ai-hero-dots flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={`m-${slide.eyebrow}-${index === activeSlide ? "on" : "off"}`}
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
        </div>
      </section>

      <div className="ai-mid">
        <section className="flight-section" id="capabilities">
          <div className="wrap">
            <RichHtml html={flightHead.titleHtml} className="flight-heading" as="h2" />
          </div>

          <div className="flight-path-wrap">
            <div className="flight-main">
              <svg
                className="flight-svg"
                viewBox="0 0 1180 2320"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id="flightGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF403A" stopOpacity="0" />
                    <stop offset="15%" stopColor="#FF403A" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#FF403A" stopOpacity="0.55" />
                    <stop offset="85%" stopColor="#FF403A" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#FF403A" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  className="flight-line"
                  d="M 590 50 C 200 160, 950 280, 590 380 S 200 560, 590 660 S 950 840, 590 940 S 200 1120, 590 1220 S 950 1400, 590 1500 S 200 1680, 590 1780 S 950 1960, 590 2060"
                />
              </svg>

              <div className="flight-panels">
                {panels.map((panel, index) => (
                  <div
                    key={panel.label}
                    className="flight-panel"
                    ref={(el) => {
                      panelRefs.current[index] = el;
                    }}
                  >
                    <div className="panel-text">
                      <div className="panel-num">
                        <span className="line" />
                        {panel.num} — {panel.label}
                      </div>
                      <h3 className="panel-title">{panel.title}</h3>
                      <p className="panel-desc">{panel.desc}</p>
                      <div className="panel-tags">
                        {panel.tags.map((tag) => (
                          <span key={tag} className="panel-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="panel-visual">
                      <MockVisual visual={panel.visual} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="wrap">
            <div className="skills-head">
              <div className="flight-label">{skillsHead.label}</div>
              <RichHtml html={skillsHead.titleHtml} as="h2" />
              <p>{skillsHead.desc}</p>
            </div>

            <div className="tiers">
              {tiers.map((tier, index) => (
                <div
                  key={tier.kicker}
                  className="tier"
                  ref={(el) => {
                    tierRefs.current[index] = el;
                  }}
                >
                  <div className="tier-node filled">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="tier-body">
                    <div className="tier-kicker">{tier.kicker}</div>
                    <RichHtml html={tier.titleHtml} className="tier-title" as="h3" />
                    <p className="tier-desc">{tier.desc}</p>
                    <div className="tier-skills">
                      {tier.skills.map((skill) => (
                        <span key={skill} className="tier-skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
