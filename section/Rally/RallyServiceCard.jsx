"use client";

import Link from "next/link";
import BookACallButton from "@/component/BookACall/BookACallButton";

export default function RallyServiceCard({ service }) {
  return (
    <article className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[280px] md:min-h-[320px]">
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/25" />

      <div className="relative z-10 flex h-full min-h-[220px] flex-col p-5 sm:min-h-[280px] sm:p-6 md:min-h-[320px]">
        <div className="flex flex-1 items-center justify-center px-2">
          <h4 className="text-center text-xl font-semibold leading-tight text-white sm:text-[28px] md:text-[32px]">
            {service.title}
          </h4>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <Link
            href={service.href}
            className="text-sm font-semibold text-[#ff403a] transition-opacity hover:opacity-80 sm:text-base"
          >
            Read More
          </Link>

          <BookACallButton className="rounded-md border border-white/80 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#ff403a] hover:bg-[#ff403a]/10 sm:px-5 sm:text-base">
            Request Service
          </BookACallButton>
        </div>
      </div>
    </article>
  );
}
