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

function PhaseCard({ phase, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`rally-flip-card h-[360px] transition-all duration-700 sm:h-[380px] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="rally-flip-inner h-full w-full">
        {/* Front — Phase label */}
        <div className="rally-flip-face rally-flip-front flex flex-col items-center justify-center rounded-2xl border border-[#FF403A]/40 bg-[#0a0a0a] px-6 text-center">
          <p className="text-4xl font-bold tracking-tight text-[#FF403A] sm:text-5xl md:text-[56px]">
            {phase.kicker}
          </p>
        </div>

        {/* Back — Content */}
        <div className="rally-flip-face rally-flip-back flex flex-col rounded-2xl border border-[#FF403A]/40 bg-[#0a0a0a] p-6 sm:p-7">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF403A]">
            {phase.kicker}
          </p>
          <h4 className="mb-3 text-lg font-semibold leading-snug text-white md:text-xl">
            {phase.title}
          </h4>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-white/90 md:text-[15px]">
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
          className="text-3xl font-semibold leading-tight text-white md:text-[40px]"
          as="h3"
        />
        <p className="font-normal mt-6 max-w-3xl text-sm leading-relaxed text-white/90 md:text-[16px]">
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
            Get started with Rally
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
              <CapabilityCard key={panel.title} panel={panel} index={index} />
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
