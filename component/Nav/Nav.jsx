"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import {
  SolutionsMegaMenuDesktop,
  SolutionsMegaMenuWide,
  SolutionsMegaMenuMobile,
} from "./SolutionsMegaMenu";
import BookACallButton from "@/component/BookACall/BookACallButton";
import ContactActionMenu from "@/component/FloatingContact/ContactActionMenu";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/career", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

function NavLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`relative group py-1 text-[17px] font-medium tracking-wide text-white/90 hover:text-white transition-colors duration-300 ${className}`}
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ff403a] to-[#e52e2e] rounded-full transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

const SOLUTIONS_MENU_EDGE_GAP = 16;

function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsShift, setSolutionsShift] = useState(0);
  const solutionsRef = useRef(null);
  const solutionsMenuRef = useRef(null);
  const solutionsCloseTimerRef = useRef(null);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(80);

  const clearSolutionsCloseTimer = () => {
    if (solutionsCloseTimerRef.current) {
      clearTimeout(solutionsCloseTimerRef.current);
      solutionsCloseTimerRef.current = null;
    }
  };

  const openSolutions = () => {
    clearSolutionsCloseTimer();
    setShowSolutions(true);
  };

  const closeSolutionsDeferred = () => {
    clearSolutionsCloseTimer();
    solutionsCloseTimerRef.current = setTimeout(() => {
      setShowSolutions(false);
      solutionsCloseTimerRef.current = null;
    }, 180);
  };

  const updateNavHeight = () => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  };

  useLayoutEffect(() => {
    updateNavHeight();
  }, [scrolled, isOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const observer = new ResizeObserver(updateNavHeight);
    observer.observe(nav);
    window.addEventListener("resize", updateNavHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setMobileSolutionsOpen(false);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => clearSolutionsCloseTimer();
  }, []);

  // The Solutions flyout is up to 900px wide and anchored to its trigger, so on
  // narrower desktops it would render past the viewport edge without this nudge.
  useEffect(() => {
    if (!showSolutions) {
      setSolutionsShift(0);
      return;
    }

    const menu = solutionsMenuRef.current;
    if (!menu) return;

    const clampIntoViewport = () => {
      const rect = menu.getBoundingClientRect();
      const overflowRight =
        rect.right - (window.innerWidth - SOLUTIONS_MENU_EDGE_GAP);

      let delta = overflowRight > 0 ? -overflowRight : 0;

      const nextLeft = rect.left + delta;
      if (nextLeft < SOLUTIONS_MENU_EDGE_GAP) {
        delta += SOLUTIONS_MENU_EDGE_GAP - nextLeft;
      }

      if (Math.abs(delta) < 1) return;
      setSolutionsShift((prev) => prev + delta);
    };

    clampIntoViewport();

    const observer = new ResizeObserver(clampIntoViewport);
    observer.observe(menu);
    window.addEventListener("resize", clampIntoViewport);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", clampIntoViewport);
    };
  }, [showSolutions]);

  useEffect(() => {
    if (!showSolutions) return;

    const handleClickOutside = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        clearSolutionsCloseTimer();
        setShowSolutions(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        clearSolutionsCloseTimer();
        setShowSolutions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showSolutions]);

  return (
    <header className="relative z-[999]">
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ease-out ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] border-b border-white/[0.06]"
            : "bg-black/70 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10 transition-all duration-500 ${
            scrolled ? "min-h-[68px] py-3" : "min-h-[80px] py-4"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 select-none"
          >
            <img
              src="/images/nla.svg"
              alt="Albatroz Solutions"
              className={`transition-transform duration-300 group-hover:scale-[1.03] ${
                scrolled ? "h-[36px] md:h-[44px]" : "h-[30px] md:h-[50px]"
              }`}
            />
          </Link>

          {/* Mobile: call where sidebar was, sidebar where call was */}
          <div className="flex shrink-0 flex-row items-center gap-2.5 md:hidden">
            <ContactActionMenu
              variant="navbar"
              panelTop={navHeight + 8}
              dismissWhen={isOpen}
              onOpenChange={(next) => {
                if (next) setIsOpen(false);
              }}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[1001] flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Menu</span>
              <div className="flex w-[22px] flex-col items-end gap-[6px]">
                <span
                  className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${
                    isOpen ? "w-[22px] translate-y-[8px] rotate-45" : "w-[22px]"
                  }`}
                />
                <span
                  className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${
                    isOpen ? "w-0 opacity-0" : "w-[15px]"
                  }`}
                />
                <span
                  className={`block h-[2px] rounded-full bg-white transition-all duration-300 ${
                    isOpen ? "w-[22px] -translate-y-[8px] -rotate-45" : "w-[18px]"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center overflow-visible">
            <ul className="flex items-center gap-1 overflow-visible lg:gap-2">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg text-[#e52e2e] transition-all duration-300 hover:bg-[#ff403a]/10 hover:text-[#ff403a]"
                  aria-label="Home"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                </Link>
              </li>

              <li className="mx-1 h-4 w-px bg-white/10" />

              {navLinks.slice(0, 1).map((link) => (
                <li key={link.href} className="px-2 lg:px-3">
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}

              {/* Solutions Dropdown */}
              <li
                ref={solutionsRef}
                className="relative px-2 lg:px-3"
                onMouseEnter={openSolutions}
                onMouseLeave={closeSolutionsDeferred}
              >
                <button
                  type="button"
                  aria-expanded={showSolutions}
                  aria-haspopup="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSolutionsCloseTimer();
                    setShowSolutions((prev) => !prev);
                  }}
                  className="relative flex items-center gap-1.5 py-1 text-[17px] font-medium tracking-wide text-white/90 transition-colors duration-300 hover:text-white"
                >
                  Solutions
                  <ChevronDownIcon
                    size={15}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${
                      showSolutions ? "rotate-180 text-[#ff403a]" : ""
                    }`}
                  />
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#ff403a] to-[#e52e2e] transition-all duration-300 ${
                      showSolutions ? "w-full" : "w-0"
                    }`}
                  />
                </button>

                <div
                  ref={solutionsMenuRef}
                  style={{ marginLeft: solutionsShift }}
                  className={`absolute left-0 top-full z-[1001] w-max overflow-visible pt-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    showSolutions
                      ? "visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="hidden lg:block">
                    <SolutionsMegaMenuWide
                      onClose={() => {
                        clearSolutionsCloseTimer();
                        setShowSolutions(false);
                      }}
                    />
                  </div>
                  <div className="lg:hidden">
                    <SolutionsMegaMenuDesktop
                      onClose={() => {
                        clearSolutionsCloseTimer();
                        setShowSolutions(false);
                      }}
                    />
                  </div>
                </div>
              </li>

              {navLinks.slice(1).map((link) => (
                <li key={link.href} className="px-2 lg:px-3">
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <BookACallButton className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-7 py-2.5 text-[17px] font-bold tracking-wide text-[#c41e1e] shadow-[0_4px_20px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(255,64,58,0.25)] active:scale-[0.98]">
              <span className="absolute inset-0 bg-gradient-to-r from-white via-neutral-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">Book a Call</span>
            </BookACallButton>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[998] bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ top: navHeight }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-[1002] overflow-y-auto overscroll-y-contain bg-black [-webkit-overflow-scrolling:touch] md:hidden"
          style={{ top: navHeight }}
        >
          <ul className="flex flex-col gap-0.5 px-5 py-4 pb-8">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#ff403a] transition-colors hover:bg-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span className="text-[17px] font-medium text-white">Home</span>
              </Link>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[17px] font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[17px] font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
              >
                Solutions
                <ChevronDownIcon
                  size={18}
                  className={`transition-transform duration-300 ${
                    mobileSolutionsOpen ? "rotate-180 text-[#ff403a]" : ""
                  }`}
                />
              </button>

              {mobileSolutionsOpen && (
                <SolutionsMegaMenuMobile
                  onClose={() => {
                    setIsOpen(false);
                    setMobileSolutionsOpen(false);
                  }}
                />
              )}
            </li>

            <li className="mt-3 px-2">
              <BookACallButton
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-white py-3.5 text-[17px] font-bold text-[#c41e1e] shadow-lg transition-transform active:scale-[0.98]"
              >
                Book A Call
              </BookACallButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Nav;
