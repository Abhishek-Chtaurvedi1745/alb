"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import BookACallButton from "@/component/BookACall/BookACallButton";

function SectionBlock({ section }) {
  const hasBullets = section.bullets?.length > 0;
  const hasParagraphs = section.paragraphs?.length > 0;
  const hasSubtitle = Boolean(section.subtitle);
  const isNumbered = /^\d+\./.test(section.title);

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-5 sm:p-6 md:p-7 ${
        isNumbered
          ? "border-[#ff403a]/30 bg-[#0d0d0d]"
          : "border-white/10 bg-[#080808]"
      }`}
    >
      <h4
        className={`font-semibold text-white ${
          isNumbered ? "text-xl text-[#ff403a] sm:text-2xl" : "text-xl sm:text-[26px]"
        }`}
      >
        {section.title}
      </h4>

      {hasSubtitle && (
        <h4 className="mt-2 text-base font-semibold text-white/90 sm:text-lg">
          {section.subtitle}
        </h4>
      )}

      {hasParagraphs && (
        <div className="mt-4 space-y-4">
          {section.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm font-normal leading-relaxed text-white/85 sm:text-[13px] md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {hasBullets && (
        <ul className="mt-3 grid grid-cols-1 gap-y-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
          {section.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff403a]/15">
                <Check size={12} className="text-[#ff403a]" strokeWidth={3} />
              </span>
              <span className="min-w-0 text-sm leading-relaxed text-white/80 sm:text-[13px] md:text-[14px]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function RallyServiceDetailPage({ page }) {
  return (
    <div className="bg-black">
      <section className="relative mt-[83px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={page.image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/80 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-6 pt-10 text-left sm:px-6 sm:pb-8 sm:pt-12 md:pb-9 md:pt-16">
          <nav className="mb-4 text-left text-sm text-white/60 sm:mb-5">
            <Link href="/rally" className="transition-colors hover:text-[#ff403a]">
              Rally
            </Link>
            <span className="mx-2">/</span>
            <Link href="/rally/services" className="transition-colors hover:text-[#ff403a]">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{page.title}</span>
          </nav>

          <h1 className="text-left text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[40px]">
            {page.title}
          </h1>

          <p className="mt-4 text-left text-sm font-medium leading-relaxed text-white sm:text-xl md:text-[24px]">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-6 sm:pb-8">
        <div className="mx-auto max-w-6xl space-y-3 px-4 text-left sm:space-y-4 sm:px-6">
          {page.intro.map((paragraph, index) => (
            <p
              key={index}
              className="text-left text-sm font-normal leading-relaxed text-white/85 sm:text-[13px] md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="pb-12 sm:pb-14 md:pb-16">
        <div className="mx-auto max-w-6xl space-y-4 px-4 text-left sm:space-y-5 sm:px-6">
          {page.sections.map((section, index) => (
            <SectionBlock key={index} section={section} />
          ))}

          {page.closing && (
            <div className="rounded-2xl border border-[#ff403a]/35 bg-gradient-to-br from-[#ff403a]/10 to-transparent p-6 sm:p-8">
              <h4 className="text-xl font-semibold text-white sm:text-2xl">{page.closing.title}</h4>
              <p className="mt-4 text-sm font-normal leading-relaxed text-white/85 sm:text-[13px] md:text-[16px]">
                {page.closing.text}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <BookACallButton className="inline-flex items-center justify-center rounded-lg bg-[#ff403a] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#cc2f2a] sm:text-lg">
              Request Service
            </BookACallButton>
            <Link
              href="/rally/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-[#ff403a] hover:text-[#ff403a] sm:text-lg"
            >
              View All Rally Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
