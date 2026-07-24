"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import BookACallButton from "@/component/BookACall/BookACallButton";
import SolutionHero from "@/section/Automation/SolutionHero";
import { prebuiltPlugins } from "@/section/Clarity/prebuiltPluginsData";

function SectionBlock({ section }) {
  const hasBullets = section.bullets?.length > 0;
  const hasParagraphs = section.paragraphs?.length > 0;

  return (
    <article className="rounded-2xl border border-white/10 bg-[#080808] p-6 sm:p-8">
      <h4 className="text-xl font-semibold text-[#ff403a] sm:text-2xl">{section.title}</h4>

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
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {section.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff403a]/15">
                <Check size={12} className="text-[#ff403a]" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-white/80 sm:text-[15px] md:text-base">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function PrebuiltPluginPage({ page }) {
  const otherPlugins = prebuiltPlugins.filter((plugin) => plugin.slug !== page.slug);

  return (
    <div className="bg-black">
      <SolutionHero
        title={page.title}
        titleAccent={page.titleAccent}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
      />

      <section className="px-4 pt-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <nav className="text-sm text-white/60">
            <Link href="/clarity" className="transition-colors hover:text-[#ff403a]">
              Clarity
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{page.tabLabel}</span>
          </nav>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-semibold text-white md:text-[40px]">
            {page.title}{" "}
            <span className="text-[#FF403A]">{page.titleAccent}</span>
          </h3>
          <p className="font-normal mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-[13px] md:text-[16px]">
            {page.summary}
          </p>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-5">
          {page.intro.map((paragraph, index) => (
            <p
              key={index}
              className="font-normal text-sm leading-relaxed text-white/85 sm:text-[13px] md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl space-y-6">
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
              Request a free demo
            </BookACallButton>
            <Link
              href="/clarity"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-[#ff403a] hover:text-[#ff403a] sm:text-lg"
            >
              Back to Clarity
            </Link>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h4 className="text-lg font-semibold text-white sm:text-xl">
              Other <span className="text-[#ff403a]">Prebuilt Plugins</span>
            </h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {otherPlugins.map((plugin) => (
                <Link
                  key={plugin.slug}
                  href={`/clarity/plugins/${plugin.slug}`}
                  className="rounded-xl border border-white/10 bg-[#080808] px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:border-[#ff403a]/40 hover:text-[#ff403a] sm:text-base"
                >
                  {plugin.tabLabel}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
