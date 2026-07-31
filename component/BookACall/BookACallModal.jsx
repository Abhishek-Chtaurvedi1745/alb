"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { useBookACall } from "./BookACallContext";
import { sendContactEmail } from "@/lib/sendEmail";

const inputClassName =
  "w-full rounded-xl border border-white/20 bg-black/30 px-3.5 py-3 text-base text-white outline-none transition-colors placeholder:text-white/45 focus:border-[#ff403a] sm:rounded-2xl sm:px-5 sm:py-3.5 sm:text-[15px]";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  country: "India",
  organization: "",
  message: "",
};

export default function BookACallModal() {
  const { isOpen } = useBookACall();

  return isOpen ? <BookACallModalContent /> : null;
}

function BookACallModalContent() {
  const { closeBookACall } = useBookACall();
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError("");

    try {
      await sendContactEmail({
        ...formData,
        formSource: "Book a Call popup",
      });
      setSubmitted(true);
      setTimeout(() => {
        setFormData(initialForm);
        setSubmitted(false);
        closeBookACall();
      }, 1400);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-a-call-title"
    >
      <button
        type="button"
        aria-label="Close dialog backdrop"
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={closeBookACall}
      />

      <div
        className="book-a-call-modal relative z-10 flex w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-[0_30px_80px_rgba(0,0,0,0.65)] sm:rounded-[24px]"
        style={{ maxHeight: "min(90dvh, 720px)" }}
      >
        <button
          type="button"
          onClick={closeBookACall}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition hover:border-[#ff403a] hover:bg-[#ff403a] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8 [-webkit-overflow-scrolling:touch]">
          <h2
            id="book-a-call-title"
            className="mb-2 pr-10 text-[22px] font-semibold leading-tight text-white sm:text-3xl"
          >
            Let&apos;s Start the{" "}
            <span className="text-[#ff403a]">Conversation</span>
          </h2>
          <p className="mb-5 text-[13px] leading-relaxed text-white/80 sm:mb-6 sm:text-sm">
            Share your requirements with us and our team will get back to you
            with the right solution for your business needs.
          </p>

          {submitted ? (
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-[#ff403a]/40 bg-black/20 px-5 text-center sm:min-h-[260px]">
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Thank you!
              </p>
              <p className="mt-2 text-sm text-white/70">
                We&apos;ve received your request and will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <input
                  type="text"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="Full Name*"
                  value={formData.firstName}
                  onChange={updateField("firstName")}
                  className={inputClassName}
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={updateField("lastName")}
                  className={inputClassName}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={updateField("phone")}
                  className={inputClassName}
                />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="Business Email*"
                  value={formData.email}
                  onChange={updateField("email")}
                  className={inputClassName}
                />

                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={updateField("country")}
                    className={`${inputClassName} appearance-none pr-11`}
                  >
                    <option value="India" className="text-black">
                      India
                    </option>
                    <option value="USA" className="text-black">
                      USA
                    </option>
                    <option value="UK" className="text-black">
                      UK
                    </option>
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/70 sm:right-4"
                  />
                </div>

                <input
                  type="text"
                  name="organization"
                  required
                  autoComplete="organization"
                  placeholder="Organization*"
                  value={formData.organization}
                  onChange={updateField("organization")}
                  className={inputClassName}
                />
              </div>

              <textarea
                name="message"
                rows={3}
                placeholder="Message"
                value={formData.message}
                onChange={updateField("message")}
                className={`${inputClassName} mt-3 min-h-[88px] resize-none sm:mt-4 sm:min-h-[110px]`}
              />

              {error ? (
                <p className="mt-3 text-sm text-[#ff8a80]">{error}</p>
              ) : null}

              <button
                type="submit"
                disabled={sending}
                className="mt-5 w-full rounded-xl bg-[#ff403a] px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-[#e63530] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:mt-6"
              >
                {sending ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
