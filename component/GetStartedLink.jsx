"use client";

import BookACallButton from "@/component/BookACall/BookACallButton";

const buttonClassName =
  "inline-block rounded-xl border border-[#FF403A] bg-[#111111] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#FF403A]/10";

export default function GetStartedLink({ product, className = "" }) {
  return (
    <BookACallButton className={`${buttonClassName} ${className}`.trim()}>
      Get Started with <span className="text-[#FF403A]">{product}</span>
    </BookACallButton>
  );
}
