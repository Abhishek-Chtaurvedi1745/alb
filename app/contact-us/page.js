"use client";

import React, { useState } from "react";
import { sendContactEmail } from "@/lib/sendEmail";
import CountrySelect from "@/component/Form/CountrySelect";
import TermsAgreementCheckbox from "@/component/Form/TermsAgreementCheckbox";

const inputClassName =
  "w-full bg-transparent border border-gray-400 rounded-2xl px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/50 focus:border-[#ff403a] sm:rounded-3xl sm:px-6 sm:py-4 sm:text-base md:px-8 md:py-5";

function ContactInfoCard({ icon, children, className = "" }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl p-3.5 sm:items-center sm:gap-4 sm:p-4 ${className}`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white sm:h-14 sm:w-14">
        <img src={icon} alt="" className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <div className="min-w-0 text-sm font-medium leading-relaxed text-white sm:text-base md:text-lg md:leading-7">
        {children}
      </div>
    </div>
  );
}

const initialForm = {
  firstName: "",
  phone: "",
  email: "",
  country: "India",
  organization: "",
  message: "",
  agreed: true,
};

function Page() {
  const [formData, setFormData] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError("");

    try {
      await sendContactEmail({
        ...formData,
        formType: "Contact Us inline form",
        buttonLabel: "Submit",
      });
      setSubmitted(true);
      setFormData(initialForm);
    } catch {
      setError("We couldn't send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mt-20 bg-black px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12">
      <h1 className="py-4 text-center text-3xl font-semibold text-white sm:py-5 sm:text-4xl md:text-[40px]">
        Contact <span className="text-[#ff403a]">Us</span>
      </h1>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* Form */}
          <div className="w-full rounded-3xl bg-[#2f2d2d] p-5 shadow-2xl sm:p-8 md:p-10 lg:flex-1">
            <h1 className="mb-3 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[35px]">
              Let&apos;s Start the{" "}
              <span className="text-[#ff403a]">Conversation</span>
            </h1>
            <p className="font-normal mb-6 max-w-2xl text-sm leading-relaxed text-white sm:mb-8 sm:text-sm md:mb-10 md:text-sm lg:text-[13px]">
              Share your requirements with us and our team will get back to you soon.
            </p>

            {submitted ? (
              <div className="flex min-h-[300px] max-w-2xl flex-col items-center justify-center rounded-3xl border border-[#ff403a]/40 bg-black/20 px-6 text-center">
                <p className="text-2xl font-semibold text-white">Thank you!</p>
                <p className="mt-2 text-sm text-white/70">
                  We&apos;ve received your message and will reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-3xl bg-[#ff403a] px-8 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
                <input
                  type="text"
                  name="firstName"
                  required
                  autoComplete="name"
                  placeholder="Full Name*"
                  value={formData.firstName}
                  onChange={updateField("firstName")}
                  className={`${inputClassName} sm:col-span-2`}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
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
                  placeholder="Business Email*"
                  value={formData.email}
                  onChange={updateField("email")}
                  className={inputClassName}
                />

                <CountrySelect
                  value={formData.country}
                  onChange={updateField("country")}
                  className={inputClassName}
                  chevronClassName="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white sm:right-6 md:right-8"
                />

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
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={updateField("message")}
                className={`${inputClassName} mt-4 resize-none sm:mt-6`}
              />

              <TermsAgreementCheckbox
                id="contact-us-terms"
                checked={formData.agreed}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    agreed: event.target.checked,
                  }))
                }
                className="mt-4"
              />

              {error ? (
                <p className="mt-4 text-sm text-[#ff8a80]" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={sending}
                className="mt-6 w-full rounded-2xl bg-[#ff403a] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-8 sm:w-auto sm:rounded-3xl sm:px-12 sm:py-4 sm:text-lg md:text-xl lg:px-16"
              >
                {sending ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
            )}
          </div>

          {/* Contact Card */}
          <div className="w-full rounded-3xl bg-[#FF403A] p-5 shadow-2xl sm:p-6 md:p-7 lg:w-[min(100%,420px)] lg:shrink-0">
            <h4 className="mb-6 text-xl font-semibold leading-tight text-white sm:mb-8 sm:text-2xl md:text-[20px]">
              Hi! We are always here
              <br />
              to help you.
            </h4>

            <div className="space-y-4 sm:space-y-5">
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
                <p className="font-normal">
                  DC-43, Development Center,
                  <br />
                  4th Floor,
                  <br />
                  TIDEL Park, ELCOSEZ, Civil Aerodrome Post,
                  <br />
                  Coimbatore, Tamil Nadu – 641014
                </p>
              </ContactInfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
