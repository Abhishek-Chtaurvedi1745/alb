"use client";

import { useMemo, useState } from "react";
import { Check, Link2, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const SITE_URL = "https://albatrozsolutions.com";

function buildShareLinks({ url, title }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      icon: FaWhatsapp,
      className:
        "hover:border-[#25D366]/50 hover:bg-[#25D366]/15 hover:text-[#25D366]",
    },
    {
      id: "x",
      label: "Share on X",
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: FaXTwitter,
      className: "hover:border-white/40 hover:bg-white/10 hover:text-white",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: FaLinkedinIn,
      className:
        "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/15 hover:text-[#4da3ff]",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FaFacebookF,
      className:
        "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/15 hover:text-[#4d9fff]",
    },
    {
      id: "email",
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: Mail,
      className:
        "hover:border-[#FF403A]/50 hover:bg-[#FF403A]/15 hover:text-[#FF403A]",
    },
  ];
}

export default function BlogShare({ title, slug }) {
  const [copied, setCopied] = useState(false);

  // Stable on server + client to avoid hydration mismatch
  const url = useMemo(
    () => `${SITE_URL}/blog/${slug}/`,
    [slug]
  );

  const links = useMemo(
    () => buildShareLinks({ url, title }),
    [url, title]
  );

  async function copyLink() {
    const copyUrl =
      typeof window !== "undefined" ? window.location.href : url;

    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF403A]">
            Share
          </p>
          <p className="mt-1 text-sm text-white/55">
            Pass this article along to your team
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {links.map(({ id, label, href, icon: Icon, className }) => (
            <a
              key={id}
              href={href}
              target={id === "email" ? undefined : "_blank"}
              rel={id === "email" ? undefined : "noopener noreferrer"}
              aria-label={label}
              title={label}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/75 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] ${className}`}
            >
              <Icon size={16} />
            </a>
          ))}

          <button
            type="button"
            onClick={copyLink}
            aria-label={copied ? "Link copied" : "Copy link"}
            title={copied ? "Copied!" : "Copy link"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] ${
              copied
                ? "border-[#7CFF8A]/40 bg-[#7CFF8A]/15 text-[#7CFF8A]"
                : "border-white/12 bg-white/[0.04] text-white/75 hover:border-[#FF403A]/50 hover:bg-[#FF403A]/15 hover:text-[#FF403A]"
            }`}
          >
            {copied ? <Check size={16} /> : <Link2 size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
