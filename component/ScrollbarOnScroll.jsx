"use client";

import { useEffect } from "react";

/** Shows page scrollbar thumb only while scrolling; thumb is red. */
export default function ScrollbarOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    let hideTimer;

    const show = () => {
      root.classList.add("is-scrolling");
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        root.classList.remove("is-scrolling");
      }, 900);
    };

    window.addEventListener("scroll", show, { passive: true });
    window.addEventListener("wheel", show, { passive: true });
    window.addEventListener("touchmove", show, { passive: true });

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", show);
      window.removeEventListener("wheel", show);
      window.removeEventListener("touchmove", show);
      root.classList.remove("is-scrolling");
    };
  }, []);

  return null;
}
