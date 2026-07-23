"use client";

import Link from "next/link";

export default function AutomationServiceCard({ service }) {
  return (
    <article className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[320px] md:min-h-[360px]">
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

      <div className="relative z-10 flex h-full min-h-[280px] flex-col p-6 sm:min-h-[320px] sm:p-8 md:min-h-[360px]">
        <div className="flex flex-1 items-center justify-center px-2">
          <h4 className="text-center text-2xl font-semibold leading-tight text-white sm:text-[28px] md:text-[32px]">
            {service.title}
          </h4>
        </div>

        <div className="flex items-center justify-center gap-5 sm:gap-8">
          <Link
            href={service.href}
            className="rounded-md border border-[#ff403a] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#ff403a]/10 sm:text-base"
          >
            Read More
          </Link>

          <Link
            href={`/contact-us?service=${service.slug}`}
            className="text-sm font-semibold text-white transition-opacity hover:opacity-80 sm:text-base"
          >
            Request Service
          </Link>
        </div>
      </div>
    </article>
  );
}
