"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, Headphones, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useBookACall } from "@/component/BookACall/BookACallContext";

const PHONE_DISPLAY = "+91 93848 12035";
const PHONE_HREF = "tel:+919384812035";
const WHATSAPP_HREF = "https://wa.me/919384812035";

export default function FloatingContactAction() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const { openBookACall } = useBookACall();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="fixed bottom-5 right-4 z-[1100] flex flex-col items-end gap-3 sm:bottom-7 sm:right-6"
    >
      {open ? (
        <div className="float-contact-panel w-[min(100vw-2rem,340px)] overflow-hidden rounded-[22px] border border-white/10 bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#FF403A] via-[#e63530] to-[#b91c1c] px-4 py-4 sm:px-5 sm:py-5">
            <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-black/10" />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/15">
                  <Headphones size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white sm:text-base">
                    Albatroz Team
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/90 sm:text-xs">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                      <span className="float-online-dot absolute inline-flex h-full w-full rounded-full bg-[#7CFF8A]/70" />
                      <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[#7CFF8A]" />
                    </span>
                    Available now · Usually replies fast
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/20 text-white transition hover:bg-black/35 hover:rotate-90"
                aria-label="Close contact menu"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          <div className="bg-[#151515]">
            <a
              href={PHONE_HREF}
              className="float-contact-row group flex items-center gap-3 border-b border-white/10 px-4 py-3.5 transition hover:bg-white/[0.04] sm:px-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF403A]/20 text-white transition group-hover:scale-110">
                <Phone size={18} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] text-white/55">Call our team</p>
                <p className="truncate text-[15px] font-semibold text-white">
                  {PHONE_DISPLAY}
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition group-hover:translate-x-0.5 group-hover:bg-[#FF403A]/20 group-hover:text-[#FF403A]">
                <ChevronRight size={16} />
              </span>
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="float-contact-row group flex items-center gap-3 border-b border-white/10 px-4 py-3.5 transition hover:bg-white/[0.04] sm:px-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF403A]/20 text-white transition group-hover:scale-110">
                <FaWhatsapp size={20} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-white">
                  Chat on WhatsApp
                </p>
                <p className="text-[12px] text-white/55">
                  Ask about Clarity, Automation & more
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition group-hover:translate-x-0.5 group-hover:bg-[#FF403A]/20 group-hover:text-[#FF403A]">
                <ChevronRight size={16} />
              </span>
            </a>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openBookACall();
              }}
              className="float-contact-row group flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-white/[0.04] sm:px-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF403A]/40 bg-[#FF403A]/20 text-white transition group-hover:scale-110">
                <Headphones size={18} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-white">
                  Book a Call
                </p>
                <p className="text-[12px] text-white/55">
                  Share requirements — we&apos;ll get back soon
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition group-hover:translate-x-0.5 group-hover:bg-[#FF403A]/20 group-hover:text-[#FF403A]">
                <ChevronRight size={16} />
              </span>
            </button>
          </div>

          <div className="border-t border-white/10 bg-[#101010] px-4 py-2.5 text-center">
            <p className="text-[11px] text-white/40">
              Albatroz Solutions · Enterprise IT experts
            </p>
          </div>
        </div>
      ) : null}

      <div className="relative">
        {!open ? (
          <span className="float-contact-pulse-wrap" aria-hidden="true">
            <span className="float-contact-pulse" />
            <span className="float-contact-pulse-delay" />
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Close contact menu" : "Open Call and Chat menu"}
          className={`float-contact-btn group relative inline-flex items-center justify-center rounded-full bg-[#FF403A] text-white transition hover:bg-[#e63530] active:scale-[0.98] max-sm:h-14 max-sm:w-14 max-sm:p-0 sm:gap-3 sm:py-2.5 sm:pl-2.5 sm:pr-5 ${
            open ? "is-open" : ""
          }`}
        >
          <span className="float-contact-icon flex items-center justify-center max-sm:h-full max-sm:w-full sm:h-11 sm:w-11 sm:rounded-full sm:border sm:border-white/35 sm:bg-white/15">
            {open ? (
              <X size={22} className="sm:h-[18px] sm:w-[18px]" />
            ) : (
              <>
                <Phone size={22} className="sm:hidden" />
                <Headphones size={22} className="hidden sm:block sm:h-[18px] sm:w-[18px]" />
              </>
            )}
          </span>
          <span className="hidden text-[15px] font-bold tracking-wide sm:inline">
            {open ? "Close" : "Call / Chat"}
          </span>
        </button>
      </div>
    </div>
  );
}
