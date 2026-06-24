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
  { label: "Enterprise IT Automation", href: "/project" },
  { label: "Project Management as a Service", href: "/project-management" },
  { label: "Clarity", href: "/project" },
  { label: "Enterprise IT Automation", href: "/project" },
  { label: "Automic Automation", href: "/project" },
  { label: "Stonebranch UAC", href: "/project" },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-[14px] text-[#bbbbbb] transition-colors duration-200 hover:text-[#ff403a]"
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
        {/* Logo section */}
        <div className="mx-auto max-w-[1400px] px-6 py-6 md:px-12 lg:px-16">
          <Link href="/" className="inline-flex flex-col gap-2 transition-opacity hover:opacity-90">
            <img
              src="/images/nla.svg"
              alt="Albatroz Solutions"
              className="h-[50px] w-auto md:h-[58px]"
            />
            <p className="pl-[3px] text-[11px] tracking-wide">
              <span className="text-[#e53935]">Business Outcomes.</span>{" "}
              <span className="text-white">Delivered.</span>
            </p>
          </Link>
        </div>

        {/* Main content */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:px-12 lg:px-16 lg:py-10">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[16px] font-bold text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="mb-4 text-[16px] font-bold text-white">Other Links</h3>
            <ul className="space-y-2.5">
              {otherLinks.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-[16px] font-bold text-white">Contact Us</h3>

            <div className="mb-3.5 flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e53935] text-white">
                <LocationIcon />
              </span>
              <span className="text-[14px] leading-relaxed text-[#bbbbbb]">
                DC-43, Development Center, 4th Floor,
                <br />
                TIDEL Park, ELCOSEZ, Civil Aerodrome Post,
                <br />
                Coimbatore, Tamil Nadu – 641014
              </span>
            </div>

            <div className="mb-3.5 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e53935] text-white">
                <PhoneIcon />
              </span>
              <a
                href="tel:+919384812035"
                className="text-[14px] text-[#bbbbbb] transition-colors hover:text-[#ff403a]"
              >
                +91 93848 12035/93848 12039
              </a>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e53935] text-white">
                <EmailIcon />
              </span>
              <a
                href="mailto:info@albatrozsolutions.com"
                className="text-[14px] text-[#bbbbbb] transition-colors hover:text-[#ff403a]"
              >
                info@albatrozsolutions.com
              </a>
            </div>

            <h3 className="mb-4 text-[16px] font-bold text-white">Follow on Us</h3>
            <div className="flex items-center gap-4 text-[#e53935]">
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
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-6 py-4 md:px-12 lg:px-16">
          <Link
            href="/privacy-policy"
            className="text-[13px] text-[#bbbbbb] transition-colors hover:text-[#ff403a]"
          >
            Privacy Policy
          </Link>
          <span className="text-[#555555]">|</span>
          <Link
            href="/privacy-policy"
            className="text-[13px] text-[#bbbbbb] transition-colors hover:text-[#ff403a]"
          >
            Terms & Conditions
          </Link>
        </div>

        <div className="h-px w-full bg-[#333333]" />

        {/* Bottom copyright */}
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-6 py-4 sm:flex-row sm:items-center md:px-12 lg:px-16">
          <span className="text-[13px] text-[#888888]">
            © Copyright 2026 Albatroz (India) Private Limited. All Rights Reserved.
          </span>
          <span className="text-[13px] text-[#888888]">
            Web Design by <strong className="font-bold text-white">Razobyte</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
