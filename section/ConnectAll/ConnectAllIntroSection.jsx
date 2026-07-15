"use client";

import Link from "next/link";
import { useState } from "react";
import { overviewParagraphs } from "./connectAllData";

export default function ConnectAllIntroSection() {
  const [expanded, setExpanded] = useState(false);
  const hiddenParagraphs = overviewParagraphs.slice(1);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h1 className="text-3xl font-semibold leading-tight md:text-[40px]">
          Connecting Your Enterprise,{" "}
          <span className="text-[#FF403A]">Simplifying Your Delivery</span>
        </h1>

        <p className="mt-6 text-base leading-relaxed text-white/90 md:text-[18px]">
          {overviewParagraphs[0]}
        </p>

        {expanded && (
          <div className="mt-5 space-y-5">
            {hiddenParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-white/90 md:text-[18px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {hiddenParagraphs.length > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-5 block text-base font-semibold text-[#FF403A] transition-opacity hover:opacity-80"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}

        <Link
          href="/contact-us"
          className="mt-10 inline-block rounded-xl bg-[#FF403A] px-8 py-4 font-semibold shadow-lg shadow-red-500/30 transition hover:opacity-90"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}
