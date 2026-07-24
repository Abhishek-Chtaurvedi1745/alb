"use client";

import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { useBookACall } from "./BookACallContext";

const inputClassName =
  "w-full rounded-xl border border-white/20 bg-black/30 px-3.5 py-3 text-base text-white outline-none transition-colors placeholder:text-white/45 focus:border-[#ff403a] sm:rounded-2xl sm:px-5 sm:py-3.5 sm:text-[15px]";

function ContactInfoCard({ icon, children, className = "" }) {
  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl p-2.5 sm:items-center sm:gap-3.5 sm:rounded-2xl sm:p-3.5 ${className}`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12">
        <img src={icon} alt="" className="h-4 w-4 sm:h-6 sm:w-6" />
      </div>
      <div className="min-w-0 text-[13px] font-medium leading-snug text-white sm:text-[15px] sm:leading-relaxed">
        {children}
      </div>
    </div>
  );
}

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
  const { isOpen, closeBookACall } = useBookACall();
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setFormData(initialForm);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateField = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData(initialForm);
      setSubmitted(false);
      closeBookACall();
    }, 1400);
  };

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-end justify-center sm:items-center sm:p-4 md:p-6"
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
        className="book-a-call-modal relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-t-[22px] border border-white/10 bg-[#141414] shadow-[0_30px_80px_rgba(0,0,0,0.65)] sm:rounded-[28px]"
        style={{
          maxHeight: "min(94dvh, 920px)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* Mobile drag handle */}
        <div className="flex shrink-0 justify-center pt-2 sm:hidden">
          <span className="h-1 w-10 rounded-full bg-white/25" />
        </div>

        <button
          type="button"
          onClick={closeBookACall}
          className="absolute right-2.5 top-2.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition hover:border-[#ff403a] hover:bg-[#ff403a] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
          aria-label="Close"
        >
          <X size={16} className="sm:hidden" />
          <X size={18} className="hidden sm:block" />
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-[#2f2d2d] px-4 pb-5 pt-3 sm:p-7 md:p-8">
              <p className="mb-1.5 pr-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff403a] sm:mb-2 sm:text-xs sm:tracking-[0.18em]">
                Book a Call
              </p>
              <h2
                id="book-a-call-title"
                className="mb-2 pr-8 text-[22px] font-semibold leading-tight text-white sm:text-3xl md:text-[34px]"
              >
                Let&apos;s Start the{" "}
                <span className="text-[#ff403a]">Conversation</span>
              </h2>
              <p className="mb-4 max-w-xl text-[13px] leading-relaxed text-white/80 sm:mb-7 sm:text-sm">
                Share your requirements with us and our team will get back to
                you with the right solution for your business needs.
              </p>

              {submitted ? (
                <div className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-[#ff403a]/40 bg-black/20 px-5 text-center sm:min-h-[280px] sm:rounded-3xl sm:px-6">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    Thank you!
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    We&apos;ve received your request and will reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-2xl">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    <input
                      type="text"
                      name="firstName"
                      required
                      autoComplete="name"
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
                    className={`${inputClassName} mt-3 min-h-[88px] resize-none sm:mt-4 sm:min-h-[120px]`}
                  />

                  <button
                    type="submit"
                    className="mt-4 w-full rounded-xl bg-[#ff403a] px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-[#e63530] active:scale-[0.99] sm:mt-6 sm:w-auto sm:rounded-3xl sm:px-12 sm:py-4 sm:text-lg"
                  >
                    SUBMIT
                  </button>
                </form>
              )}
            </div>

            <div className="border-t border-white/10 bg-[#FF403A] px-4 py-4 sm:border-t-0 sm:p-7 md:p-8">
              <h3 className="mb-3 text-lg font-semibold leading-tight text-white sm:mb-6 sm:text-2xl">
                Hi! We are always here
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                to help you.
              </h3>

              <div className="space-y-2.5 sm:space-y-4">
                <ContactInfoCard icon="/images/phn.svg" className="bg-[#CF2721]">
                  <a href="tel:+919384812035" className="block hover:underline">
                    +91 93848 12035
                  </a>
                  <a href="tel:+919384812039" className="block hover:underline">
                    +91 93848 12039
                  </a>
                </ContactInfoCard>

                <ContactInfoCard icon="/images/msg.svg" className="bg-[#d92020]">
                  <a
                    href="mailto:info@albatrozsolutions.com"
                    className="break-all hover:underline"
                  >
                    info@albatrozsolutions.com
                  </a>
                </ContactInfoCard>

                <ContactInfoCard icon="/images/lc.svg" className="bg-[#d92020]">
                  <p className="font-normal text-[12px] leading-relaxed sm:text-sm">
                    DC-43, Development Center, 4th Floor,
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    TIDEL Park, ELCOSEZ, Civil Aerodrome Post,
                    <br />
                    Coimbatore, Tamil Nadu – 641014
                  </p>
                </ContactInfoCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
