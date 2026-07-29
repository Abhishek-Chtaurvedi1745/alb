"use client";

import React, { useState } from "react";
import { PhoneCall, User, Phone, Mail, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { sendContactEmail } from "@/lib/sendEmail";
import { useBookACall } from "@/component/BookACall/BookACallContext";

const initialForm = {
  name: "",
  mobile: "",
  company: "",
  email: "",
  message: "",
  agreed: true,
};

export default function ContactSection() {
  const { openBookACall } = useBookACall();
  const [formData, setFormData] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await sendContactEmail({
        ...formData,
        formSource: "Home Let's Connect form",
      });
      setSubmitted(true);
      setFormData(initialForm);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-black text-white py-10 px-6 md:px-12 lg:px-24 flex items-center justify-center font-sans overflow-hidden">
      <div className="relative max-w-6xl w-full py-16 px-6 md:px-14">
        <div className="absolute top-0 left-0 w-32 h-[2px] bg-white pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[2px] h-40 bg-gradient-to-b from-white via-white to-transparent pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-[40px] font-semibold tracking-tight mb-6">
              Let&apos;s <span className="text-[#ff3b30]">Talk</span>
            </h1>
            <p className="text-[#FFFFFF] text-sm md:text-sm font-normal leading-relaxed tracking-wide max-w-md mb-10">
              If you&apos;re looking to bring structure to your projects or
              improve how your teams operate, we&apos;d be glad to understand
              your requirements and share how we can help.
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={openBookACall}
                className="inline-flex items-center gap-3 bg-white text-[#ff3b30] font-bold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap hover:bg-neutral-100 shadow-md text-[12px] md:text-sm md:text-base"
              >
                <PhoneCall className="w-5 h-5 fill-[#ff3b30] " />
                Call Us
              </button>
              <a
                href="https://wa.me/919384812035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent text-white font-bold px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-400 hover:bg-neutral-900/30 transition-all duration-200 text-[12px] md:text-sm md:text-base"
              >
                <FaWhatsapp className="w-7 h-7 text-[#25D366] whitespace-nowrap" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <h1 className="text-4xl md:text-[40px] font-bold tracking-tight mb-8">
              Let&apos;s <span className="text-[#ff3b30]">Connect</span>
            </h1>

            {submitted ? (
              <div className="rounded-md border border-[#ff3b30]/40 bg-neutral-900/50 px-6 py-10 text-center">
                <p className="text-xl font-semibold text-white">Thank you!</p>
                <p className="mt-2 text-sm text-white/70">
                  We&apos;ve received your message and will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-4 flex items-center text-[#FFFFFF]">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Enter Your Name*"
                      className="w-full bg-black text-white pl-11 pr-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm placeholder-gray-500"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-4 flex items-center text-[#FFFFFF]">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Enter Your Mobile No.*"
                      className="w-full bg-black text-white pl-11 pr-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm placeholder-gray-500"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      className="w-full bg-black text-[#FFFFFF] px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm appearance-none cursor-pointer"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    >
                      <option value="" disabled hidden>
                        Company Name
                      </option>
                      <option
                        value="enterprise"
                        className="bg-neutral-900 text-white"
                      >
                        Enterprise
                      </option>
                      <option
                        value="startup"
                        className="bg-neutral-900 text-white"
                      >
                        Startup/SMB
                      </option>
                      <option
                        value="other"
                        className="bg-neutral-900 text-white"
                      >
                        Other
                      </option>
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 pointer-events-none">
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-4 flex items-center text-[#FFFFFF]">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Email Id*"
                      className="w-full bg-black text-white pl-11 pr-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm placeholder-gray-500"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows="3"
                    placeholder="Message..."
                    className="w-full bg-black text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-[#ff3b30] transition-colors text-sm placeholder-gray-500 resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 rounded bg-black border-gray-700 accent-[#ff3b30] cursor-pointer"
                    checked={formData.agreed}
                    onChange={(e) =>
                      setFormData({ ...formData, agreed: e.target.checked })
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs text-[#FFFFFF] select-none leading-normal"
                  >
                    I agree to the Terms of Service and{" "}
                    <a
                      href="#privacy"
                      className="text-[#FFFFFF] underline hover:text-[#ff3b30]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {error ? (
                  <p className="text-sm text-[#ff8a80]">{error}</p>
                ) : null}

                <div className="pt-2 flex justify-center md:justify-start">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full md:w-auto min-w-[200px] bg-white text-[#ff3b30] font-bold px-8 py-3 rounded-md transition-all duration-200 hover:bg-neutral-100 shadow-md text-center text-sm md:text-base tracking-wide disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {sending ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
