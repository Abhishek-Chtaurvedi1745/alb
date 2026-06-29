import React from "react";
import Link from "next/link";

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Teams", href: "/ourteam" },
  { label: "Careers", href: "/career" },
  { label: "News & Events", href: "/Blog" },
  { label: "Blogs", href: "/Blog" },
];

const otherLinks = [
  { label: "Project Prortfolio Management", href: "/project-management" },
  { label: "Enterprise IT Automation", href: "/enterprise-it-automation" },
  // { label: "Project Management as a Service", href: "/project-management" },
  { label: "Clarity", href: "/clarity" },
  { label: "Clarity Services", href: "/clarity/services" },
  // { label: "Enterprise IT Automation", href: "/project" },
  { label: "Automic Automation", href: "/enterprise-it-automation" },
  { label: "Stonebranch UAC", href: "/enterprise-it-automation" },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block break-words text-[12px] leading-relaxed text-[#bbbbbb] transition-colors duration-200 hover:text-[#ff403a] sm:text-[13px] md:text-[14px]"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-[#bbbbbb] selection:bg-[#ff403a]">
      {/* Diagonal red streak background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(118deg, transparent 30%, rgba(229, 57, 53, 0.14) 42%, transparent 54%),
            linear-gradient(118deg, transparent 55%, rgba(229, 57, 53, 0.1) 62%, transparent 70%),
            linear-gradient(118deg, transparent 72%, rgba(229, 57, 53, 0.08) 78%, transparent 85%)
          `,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff403a]/[0.04] via-transparent to-transparent" aria-hidden />

      <div className="relative z-10">
        {/* Main content */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-5 gap-y-8 px-5 py-8 sm:gap-x-8 md:px-10 lg:grid-cols-12 lg:gap-10 lg:px-16 lg:py-10">
          {/* Logo */}
          <div className="col-span-2 flex items-start justify-center lg:col-span-3 lg:justify-start">
            <Link href="/" className="inline-flex transition-opacity hover:opacity-90">
              <img
                src="/images/nla.svg"
                alt="Albatroz Solutions"
                className="h-[44px] w-auto sm:h-[50px] md:h-[58px]"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 min-w-0 lg:col-span-2 lg:pl-6">
            <h3 className="mb-3 text-[15px] font-bold text-white sm:mb-4 sm:text-[16px]">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="col-span-1 min-w-0 lg:col-span-3">
            <h3 className="mb-3 text-[15px] font-bold text-white sm:mb-4 sm:text-[16px]">
              Other Links
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {otherLinks.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 lg:col-span-4">
            <h3 className="mb-3 text-[15px] font-bold text-white sm:mb-4 sm:text-[16px]">
              Contact Us
            </h3>

            <div className="mb-3.5 flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e53935] text-white">
                <LocationIcon />
              </span>
              <span className="min-w-0 text-[13px] leading-relaxed text-[#bbbbbb] sm:text-[14px]">
                DC-43, Development Center, 4th Floor,
                <br />
                TIDEL Park, ELCOSEZ, Civil Aerodrome Post,
                <br />
                Coimbatore, Tamil Nadu – 641014
              </span>
            </div>

            <div className="mb-3.5 flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e53935] text-white">
                <PhoneIcon />
              </span>
              <div className="min-w-0 text-[13px] leading-relaxed text-[#bbbbbb] sm:text-[14px]">
                <a
                  href="tel:+919384812035"
                  className="block transition-colors hover:text-[#ff403a]"
                >
                  +91 93848 12035
                </a>
                <a
                  href="tel:+919384812039"
                  className="block transition-colors hover:text-[#ff403a]"
                >
                  +91 93848 12039
                </a>
              </div>
            </div>

            <div className="mb-6 flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e53935] text-white">
                <EmailIcon />
              </span>
              <a
                href="mailto:info@albatrozsolutions.com"
                className="min-w-0 break-all text-[13px] text-[#bbbbbb] transition-colors hover:text-[#ff403a] sm:text-[14px]"
              >
                info@albatrozsolutions.com
              </a>
            </div>

            <h3 className="mb-3 text-[15px] font-bold text-white sm:mb-4 sm:text-[16px]">
              Follow on Us
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-[#e53935]">
              <a href="#instagram" aria-label="Instagram" className="transition-opacity hover:opacity-75">
                <InstagramIcon />
              </a>
              <a href="#facebook" aria-label="Facebook" className="transition-opacity hover:opacity-75">
                <FacebookIcon />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="transition-opacity hover:opacity-75">
                <LinkedInIcon />
              </a>
              <a href="#x" aria-label="X" className="transition-opacity hover:opacity-75">
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#333333]" />

        {/* Policy links */}
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-2 px-5 py-4 sm:justify-start md:px-10 lg:px-16">
          <Link
            href="/privacy-policy"
            className="text-center text-[12px] text-[#bbbbbb] transition-colors hover:text-[#ff403a] sm:text-[13px]"
          >
            Privacy Policy
          </Link>
          <span className="text-[#555555]">|</span>
          <Link
            href="/privacy-policy"
            className="text-center text-[12px] text-[#bbbbbb] transition-colors hover:text-[#ff403a] sm:text-[13px]"
          >
            Terms & Conditions
          </Link>
        </div>

        <div className="h-px w-full bg-[#333333]" />

        {/* Bottom copyright */}
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-4 text-center sm:flex-row sm:items-center sm:text-left md:px-10 lg:px-16">
          <span className="max-w-full text-[11px] leading-relaxed text-[#888888] sm:text-[13px]">
            © Copyright 2026 Albatroz (India) Private Limited. All Rights Reserved.
          </span>
          <span className="text-[11px] text-[#888888] sm:text-[13px]">
            Web Design by <strong className="font-bold text-white">Razobyte</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
