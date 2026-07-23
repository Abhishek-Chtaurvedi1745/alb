import React from "react";
import { ChevronDown } from "lucide-react";

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

function page() {
  return (
    <section className="mt-20 bg-black px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-12">
      <h1 className="py-4 text-center text-3xl font-semibold text-white sm:py-5 sm:text-4xl md:text-[45px]">
        Contact <span className="text-[#ff403a]">Us</span>
      </h1>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* Form */}
          <div className="w-full rounded-3xl bg-[#2f2d2d] p-5 shadow-2xl sm:p-8 md:p-10 lg:flex-1">
            <h3 className="mb-3 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[35px]">
              Let&apos;s Start the{" "}
              <span className="text-[#ff403a]">Conversation</span>
            </h3>
            <p className="font-normal mb-6 max-w-2xl text-sm leading-relaxed text-white sm:mb-8 sm:text-sm md:mb-10 md:text-sm lg:text-[13px]">
              Share your requirements with us and our team will get back to you
              with the right solution for your business needs.
            </p>

            <form className="max-w-2xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Full Name*"
                  className={inputClassName}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  className={inputClassName}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  className={inputClassName}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email*"
                  className={inputClassName}
                />

                <div className="relative">
                  <select
                    name="country"
                    defaultValue="India"
                    className={`${inputClassName} appearance-none pr-12`}
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
                    size={20}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white sm:right-6 md:right-8"
                  />
                </div>

                <input
                  type="text"
                  name="organization"
                  placeholder="Organization*"
                  className={inputClassName}
                />
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                className={`${inputClassName} mt-4 resize-none sm:mt-6`}
              />

              <button
                type="submit"
                className="mt-6 w-full rounded-2xl bg-[#ff403a] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-red-600 sm:mt-8 sm:w-auto sm:rounded-3xl sm:px-12 sm:py-4 sm:text-lg md:text-xl lg:px-16"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Card */}
          <div className="w-full rounded-3xl bg-[#FF403A] p-5 shadow-2xl sm:p-6 md:p-7 lg:w-[min(100%,420px)] lg:shrink-0">
            <h4 className="mb-6 text-xl font-semibold leading-tight text-white sm:mb-8 sm:text-2xl md:text-[25px]">
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

export default page;
