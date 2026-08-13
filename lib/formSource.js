/**
 * Helpers for lead attribution: which page + which button opened/submitted a form.
 */

export function getPagePath() {
  if (typeof window === "undefined") return "unknown";
  return window.location.pathname || "/";
}

const PAGE_LABELS = {
  "/": "Home",
  "/about": "About Us",
  "/ourteam": "Our Team",
  "/career": "Careers",
  "/contact-us": "Contact Us",
  "/privacy-policy": "Privacy Policy",
  "/blog": "Blog",
  "/project": "Project",
  "/project-portfolio-management": "Project Portfolio Management",
  "/enterprise-it-automation": "Enterprise IT Automation",
  "/ai-services-for-enterprise": "AI Services for Enterprise",
  "/clarity": "Clarity",
  "/clarity/services": "Clarity Services",
  "/rally": "Rally",
  "/rally/services": "Rally Services",
  "/connectall": "ConnectALL",
  "/connectall/services": "ConnectALL Services",
  "/automic-automation": "Automic Automation",
  "/automic-automation/services": "Automic Services",
  "/stonebranch": "Stonebranch",
  "/stonebranch/services": "Stonebranch Services",
};

function titleCaseSegment(segment) {
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getPageLabel(pathname = getPagePath()) {
  if (PAGE_LABELS[pathname]) return PAGE_LABELS[pathname];

  const parts = pathname.split("/").filter(Boolean);
  if (!parts.length) return "Home";
  return parts.map(titleCaseSegment).join(" › ");
}

/** Flatten React children into a plain button label. */
export function extractButtonLabel(children, fallback = "Book a Call") {
  const walk = (node) => {
    if (node == null || typeof node === "boolean") return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(walk).join(" ");
    if (node?.props?.children != null) return walk(node.props.children);
    return "";
  };

  const label = walk(children).replace(/\s+/g, " ").trim();
  return label || fallback;
}

/**
 * Human-readable source line for EmailJS {{form_source}}.
 * Example: Popup form | Page: Clarity Services ( /clarity/services ) | Button: Request Service
 */
export function buildFormSource({
  formType = "website",
  buttonLabel = "",
  pagePath = getPagePath(),
  pageLabel = getPageLabel(pagePath),
} = {}) {
  const parts = [
    formType,
    `Page: ${pageLabel} (${pagePath})`,
  ];
  if (buttonLabel) parts.push(`Button: ${buttonLabel}`);
  return parts.join(" | ");
}
