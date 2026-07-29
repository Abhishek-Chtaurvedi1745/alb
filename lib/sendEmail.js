"use client";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/**
 * Sends a contact/book-a-call form via EmailJS REST API.
 * Always includes the current page URL so you know where the lead came from.
 *
 * EmailJS template variables expected:
 *   {{from_name}}, {{last_name}}, {{phone}}, {{email}},
 *   {{organization}}, {{country}}, {{message}}, {{page_url}}, {{form_source}}
 */
export async function sendContactEmail(fields) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_* keys to .env.local",
    );
  }

  // origin + pathname only, so query strings and hashes stay out of the email
  const pageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : "unknown";

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
          form_source: fields.formSource || "website",
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
