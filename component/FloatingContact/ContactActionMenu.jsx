"use client";

import { useEffect, useRef, useState } from "react";
import { Headphones, Phone, X } from "lucide-react";
import { useBookACall } from "@/component/BookACall/BookACallContext";
import ContactActionPanel from "./ContactActionPanel";

export default function ContactActionMenu({
  variant = "floating",
  onOpenChange,
  dismissWhen = false,
  panelTop = 88,
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const { openBookACall } = useBookACall();
  const isFloating = variant === "floating";
  const isNavbar = variant === "navbar";

  const setOpenState = (next) => {
    setOpen(next);
    onOpenChange?.(next);
  };

  useEffect(() => {
    if (dismissWhen && open) setOpenState(false);
  }, [dismissWhen, open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpenState(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpenState(false);
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
      className={
        isFloating
          ? "fixed bottom-5 right-4 z-[1100] max-md:hidden flex flex-col items-end gap-3 sm:bottom-7 sm:right-6"
          : "relative z-[1001] shrink-0 md:hidden"
      }
    >
      {open && isFloating ? (
        <div className="w-[min(100vw-2rem,340px)]">
          <ContactActionPanel
            onClose={() => setOpenState(false)}
            onBookACall={() =>
              openBookACall({
                buttonLabel: "Call / Chat › Book a Call",
                formType: "Popup form",
              })
            }
          />
        </div>
      ) : null}

      <div className="relative">
        {isFloating && !open ? (
          <span className="float-contact-pulse-wrap" aria-hidden="true">
            <span className="float-contact-pulse" />
            <span className="float-contact-pulse-delay" />
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => setOpenState(!open)}
          aria-expanded={open}
          aria-label={open ? "Close contact menu" : "Open Call and Chat menu"}
          className={
            isNavbar
              ? `flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF403A] text-white shadow-[0_4px_14px_rgba(255,64,58,0.4)] transition hover:bg-[#e63530] active:scale-[0.96] ${
                  open ? "bg-[#e63530]" : ""
                }`
              : `float-contact-btn group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#FF403A] py-2.5 pl-2.5 pr-5 text-white transition hover:bg-[#e63530] active:scale-[0.98] ${
                  open ? "is-open" : ""
                }`
          }
        >
          {isNavbar ? (
            open ? (
              <X size={22} className="text-white" />
            ) : (
              <Phone size={22} className="text-white" />
            )
          ) : (
            <>
              <span className="float-contact-icon flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/15">
                {open ? (
                  <X size={18} />
                ) : (
                  <Headphones size={22} className="h-[18px] w-[18px]" />
                )}
              </span>
              <span className="text-[15px] font-bold tracking-wide">
                {open ? "Close" : "Call / Chat"}
              </span>
            </>
          )}
        </button>
      </div>

      {open && isNavbar ? (
        <div
          className="fixed right-5 z-[1100] w-[calc(100vw-2.5rem)] max-w-[340px]"
          style={{ top: panelTop }}
        >
          <ContactActionPanel
            onClose={() => setOpenState(false)}
            onBookACall={() =>
              openBookACall({
                buttonLabel: "Call / Chat › Book a Call",
                formType: "Popup form",
              })
            }
          />
        </div>
      ) : null}
    </div>
  );
}
