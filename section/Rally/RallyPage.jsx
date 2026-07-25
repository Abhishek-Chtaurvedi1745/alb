"use client";

import { useInView } from "react-intersection-observer";
import BookACallButton from "@/component/BookACall/BookACallButton";
import {
  capabilityPanels,
  capabilitiesHead,
  deliveryHead,
  deliveryPhases,
  rallyHeroSlides,
} from "./rallyPageData";

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
        as="h3"
      />
      {subtitle ? (
        <p className="font-normal mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/90 md:text-[16px]">
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

      <h4 className="relative mb-4 text-xl font-semibold leading-snug text-white md:text-2xl">
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

function PhaseCard({ phase, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const phaseNumber = String(index + 1).padStart(2, "0");

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
        {phaseNumber}
      </div>

      <div className="relative mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF403A]/40 bg-[#FF403A]/10 text-sm font-bold text-[#FF403A]">
          {phaseNumber}
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF403A]">
          {phase.kicker}
        </p>
      </div>

      <h4 className="relative mb-3 text-lg font-semibold leading-snug text-white md:text-xl">
        {phase.title}
      </h4>
      <p className="relative mb-6 flex-1 text-sm leading-relaxed text-white/90 md:text-[15px]">
        {phase.desc}
      </p>
      <div className="relative flex flex-wrap gap-2">
        {phase.skills.map((skill) => (
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

function RallySliderSection() {
  const slide = rallyHeroSlides[0];

  return (
    <section className="bg-black px-6 py-16 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <TitleWithAccent
          title={slide.title}
          accent={slide.titleAccent}
          className="text-center text-3xl font-semibold leading-tight text-white md:text-[40px]"
          as="h3"
        />
        <p className="mt-6 w-full text-left text-sm font-normal leading-relaxed text-white/90 md:text-[16px]">
          {slide.subtitle}
        </p>
      </div>
    </section>
  );
}

export default function RallyPage() {
  return (
    <div className="bg-black text-white">
      <section className="relative mt-20 h-[300px] overflow-hidden md:h-[450px]">
        <img
          src="/images/rally-hero.png"
          alt="Rally by Broadcom"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center gap-5 px-6 md:gap-7 md:px-16">
          <h1 className="text-3xl font-semibold text-white md:text-[45px]">
            Rally{" "}
            <span className="text-[#FF403A]">by Broadcom</span>
          </h1>

          <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
            Get Started With Rally
          </BookACallButton>
        </div>
      </section>

      <RallySliderSection />

      <section className="px-6 py-16 lg:px-12" id="capabilities">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title={capabilitiesHead.title}
            titleAccent={capabilitiesHead.titleAccent}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityPanels.map((panel, index) => (
              <div
                key={panel.title}
                className={
                  index === capabilityPanels.length - 1
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
    </div>
  );
}
