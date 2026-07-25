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
      className={`rounded-2xl border p-6 sm:p-8 ${
        isNumbered
          ? "border-[#ff403a]/30 bg-[#0d0d0d]"
          : "border-white/10 bg-[#080808]"
      }`}
    >
      <h4
        className={`font-semibold text-white ${
          isNumbered
            ? "text-xl text-[#ff403a] sm:text-2xl"
            : "text-xl sm:text-[26px]"
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
              className="font-normal text-sm leading-relaxed text-white/85 sm:text-[13px] md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {hasBullets && (
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {section.bullets.map((bullet, index) => (
            <li key={index} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff403a]/15">
                <Check size={12} className="text-[#ff403a]" strokeWidth={3} />
              </span>
              <span className="text-[12px] leading-snug tracking-tight text-white/80 sm:whitespace-nowrap sm:text-[13px] sm:leading-none lg:text-[14px]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function ConnectAllServiceDetailPage({ page }) {
  return (
    <div className="bg-black">
      <section className="relative mt-[83px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={page.image}
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12 text-left sm:px-6 sm:py-16 md:py-20">
          <nav className="mb-6 text-left text-sm text-white/60">
            <Link
              href="/connectall"
              className="transition-colors hover:text-[#ff403a]"
            >
              ConnectALL
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/connectall/services"
              className="transition-colors hover:text-[#ff403a]"
            >
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

      <section className="pb-10">
        <div className="mx-auto max-w-6xl space-y-5 px-4 text-left sm:px-6">
          {page.intro.map((paragraph, index) => (
            <p
              key={index}
              className="text-left font-normal text-sm leading-relaxed text-white/85 sm:text-[13px] md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl space-y-6 px-4 text-left sm:px-6">
          {page.sections.map((section, index) => (
            <SectionBlock key={index} section={section} />
          ))}

          {page.closing && (
            <div className="rounded-2xl border border-[#ff403a]/35 bg-gradient-to-br from-[#ff403a]/10 to-transparent p-6 sm:p-8">
              <h4 className="text-xl font-semibold text-white sm:text-2xl">
                {page.closing.title}
              </h4>
              <p className="font-normal mt-4 text-sm leading-relaxed text-white/85 sm:text-[13px] md:text-[16px]">
                {page.closing.text}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <BookACallButton className="inline-flex items-center justify-center rounded-lg bg-[#ff403a] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[#cc2f2a] sm:text-lg">
              Request Service
            </BookACallButton>
            <Link
              href="/connectall/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-[#ff403a] hover:text-[#ff403a] sm:text-lg"
            >
              View All ConnectALL Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
