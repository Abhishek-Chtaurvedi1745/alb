import React from "react";

function PolicyItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-white sm:text-base md:text-[16px] md:leading-8">
      <img
        src="/images/check.png"
        alt=""
        className="mt-1 h-4 w-4 shrink-0 sm:h-5 sm:w-5"
      />
      <span className="min-w-0 break-words">{children}</span>
    </li>
  );
}

function PolicySection({ number, title, children }) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold leading-snug text-white sm:text-xl md:text-[20px]">
        <span className="text-[#FF403A]">{number}. </span>
        {title}
      </h3>
      {children}
    </div>
  );
}

function Page() {
  return (
    <section className="mt-20 bg-black px-4 py-10 text-white sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold leading-tight sm:mb-8 sm:text-4xl md:text-5xl">
          Privacy <span className="text-[#FF403A]">Policy</span>
        </h1>

        <p className="font-normal mb-8 text-sm leading-relaxed text-white sm:text-sm md:mb-10 md:text-[16px] md:leading-8">
          At Albatroz Solutions, we are committed to protecting your privacy and
          safeguarding your personal information. This privacy policy explains how
          we collect, use, disclose, and protect the information we gather from
          individuals who interact with our organization.
        </p>

        <div className="space-y-8 sm:space-y-10">
          <PolicySection number="1" title="Personal Information Collection:">
            <p className="text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              We collect personal information that you provide to us voluntarily,
              such as your name, address, email address, phone number, and any
              other information you choose to provide. We may collect this
              information through our website, mobile applications, registrations,
              forms, or other means.
            </p>
          </PolicySection>

          <PolicySection number="2" title="Use of Personal Information:">
            <p className="mb-3 text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              We may use the personal information we collect for the following
              purposes:
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <PolicyItem>Providing and personalizing our services</PolicyItem>
              <PolicyItem>
                Communicating with you, including responding to inquiries and
                providing updates
              </PolicyItem>
              <PolicyItem>Analyzing and improving our services and website</PolicyItem>
              <PolicyItem>
                Conducting marketing and promotional activities (with your consent
                where required)
              </PolicyItem>
              <PolicyItem>Complying with legal obligations</PolicyItem>
            </ul>
          </PolicySection>

          <PolicySection number="3" title="Data Sharing and Disclosure:">
            <p className="mb-3 text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              We do not sell, trade, or rent your personal information to third
              parties for their marketing purposes. However, we may share your
              information in the following circumstances:
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <PolicyItem>
                With trusted third-party service providers who assist us in
                operating our business and providing services to you (e.g., legal,
                payment processors, customer support)
              </PolicyItem>
              <PolicyItem>
                When required by law or to protect our rights and safety
              </PolicyItem>
              <PolicyItem>
                In connection with a merger, acquisition, or sale of our
                organization, in which case your information may be transferred to
                the acquiring entity.
              </PolicyItem>
            </ul>
          </PolicySection>

          <PolicySection number="4" title="Cookies and Tracking Technologies:">
            <p className="text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              We may use cookies and similar tracking technologies on our website
              to enhance your browsing experience, analyze usage patterns, and
              personalize content. By using our website, you consent to the use of
              cookies and tracking technologies as described in our Cookie Policy.
            </p>
          </PolicySection>

          <PolicySection number="5" title="Data Security:">
            <p className="text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              We implement reasonable security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, please note that no method of transmission over
              the internet or electronic storage is completely secure.
            </p>
          </PolicySection>

          <PolicySection number="6" title="Your Rights:">
            <p className="text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              You have the right to access, correct, or delete your personal
              information that we hold, subject to legal requirements. If you wish
              to exercise these rights or have any inquiries about your personal
              information, please contact us using the information provided below.
            </p>
          </PolicySection>

          <PolicySection number="7" title="Updates to the Privacy Policy:">
            <p className="text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              We may update our privacy policy from time to time to reflect changes
              in our practices or legal obligations. We will notify you of any
              material updates through a notice on our website or other appropriate
              means.
            </p>
          </PolicySection>

          <PolicySection number="8" title="Contact Us:">
            <p className="mb-4 text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us at:
            </p>

            <div className="rounded-lg bg-zinc-900 p-4 sm:p-6">
              <p className="mb-2 break-all text-sm font-light text-white sm:text-sm md:text-[16px]">
                <span className="font-semibold">Email:</span>{" "}
                info@albatrozsolutions.com
              </p>
              <p className="mb-2 text-sm font-light text-white sm:text-sm md:text-[16px]">
                <span className="font-semibold">Phone:</span> +91 93848 12035 /
                93848 12039
              </p>
              <p className="text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
                <span className="font-semibold">Address:</span> DC-43, Development
                Center, 4th Floor, TIDEL Park, ELCOSEZ, Civil Aerodrome Post,
                Coimbatore, Tamil Nadu – 641014
              </p>
            </div>
          </PolicySection>

          <PolicySection number="9" title="Additional Terms:">
            <p className="text-sm font-light leading-relaxed text-white sm:text-sm md:text-[16px] md:leading-8">
              By using our website and services, you agree to the collection and use
              of information in accordance with this Privacy Policy. If you do not
              agree with any part of this policy, please discontinue use of our
              services immediately.
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

export default Page;
