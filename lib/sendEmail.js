"use client";

import { buildFormSource, getPageLabel, getPagePath } from "./formSource";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/**
 * Sends a contact/book-a-call form via EmailJS REST API.
 *
 * EmailJS template variables:
 *   {{from_name}}, {{last_name}}, {{phone}}, {{email}},
 *   {{organization}}, {{country}}, {{message}},
 *   {{page_url}}, {{page_path}}, {{page_label}},
 *   {{button_label}}, {{form_source}}
 *
 * {{form_source}} is a single readable line, e.g.
 *   Popup form | Page: Home (/) | Button: Request a Free Demo
 */
export async function sendContactEmail(fields) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_* keys to .env.local",
    );
  }

  const pagePath = getPagePath();
  const pageLabel = getPageLabel(pagePath);
  const pageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${pagePath}`
      : "unknown";

  const buttonLabel = (fields.buttonLabel || "").trim();
  const formType = fields.formType || fields.formSource || "website";
  const formSource =
    fields.formSourceDetailed ||
    buildFormSource({
      formType,
      buttonLabel,
      pagePath,
      pageLabel,
    });

  const response = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          from_name: fields.name || fields.firstName || "",
          last_name: fields.lastName || "",
          phone: fields.phone || fields.mobile || "",
          email: fields.email || "",
          organization: fields.organization || fields.company || "",
          country: fields.country || "",
          message: fields.message || "",
          page_url: pageUrl,
          page_path: pagePath,
          page_label: pageLabel,
          button_label: buttonLabel || "—",
          form_source: formSource,
        },
      }),
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Failed to send email");
  }

  return response;
}
