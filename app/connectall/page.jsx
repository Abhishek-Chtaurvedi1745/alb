import Link from "next/link";
import FunctionalityGrid from "@/section/Automation/FunctionalityGrid";
import GetStartedLink from "@/component/GetStartedLink";
import ConnectAllIntroSection from "@/section/ConnectAll/ConnectAllIntroSection";
import ConnectAllServicesGrid from "@/section/ConnectAll/ConnectAllServicesGrid";
import {
  closingParagraph,
  closingParagraph2,
  deliveryMethodology,
  useCases,
  whyChooseAlbatrozParagraphs,
  whyImplementBenefits,
} from "@/section/ConnectAll/connectAllData";

export const metadata = {
  title: "ConnectALL | Albatroz Solutions",
  description:
    "ConnectALL by Broadcom — enterprise integration platform services from Albatroz Solutions. Connect Clarity, Rally, Jira, ServiceNow, and more.",
};

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF403A]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3.5 w-3.5 text-white"
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-sm leading-relaxed text-white/90 md:text-[18px]">
        {children}
      </span>
    </li>
  );
}

export default function ConnectAllPage() {
  return (
    <div className="bg-black text-white">
      <section className="mt-[83px] bg-[#000000] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
          <div className="w-full">
            <img
              src="/images/ca.svg"
              alt="ConnectALL by Broadcom"
              className="h-auto w-full max-w-[324px]"
            />
            <Link
              href="/contact-us"
              className="mt-[28px] inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-[25px] font-semibold text-white transition hover:opacity-90"
            >
              Request a free demo
            </Link>
          </div>

          <div className="flex w-full justify-center">
            <img
              src="/images/connectall-hero.png"
              alt="ConnectALL enterprise integration platform"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <ConnectAllIntroSection />

      <section className="bg-black px-6 py-16 text-white lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold leading-tight md:text-[40px]">
            Why Implement{" "}
            <span className="text-[#FF403A]">ConnectALL?</span>
          </h2>

          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyImplementBenefits.map((benefit) => (
              <CheckItem key={benefit}>{benefit}</CheckItem>
            ))}
          </ul>
        </div>
      </section>

      <FunctionalityGrid
        title="Common Enterprise Integration"
        titleAccent="Use Cases"
        items={useCases.map((item) => ({
          title: item.title,
          description: item.description,
          icon: item.icon,
        }))}
      />

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold leading-tight md:text-[40px]">
            Why Choose <span className="text-[#FF403A]">Albatroz?</span>
          </h2>

          <div className="mt-6 space-y-5">
            {whyChooseAlbatrozParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-white/90 md:text-[18px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ConnectAllServicesGrid />

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold leading-tight md:text-[40px]">
            Our Delivery <span className="text-[#FF403A]">Methodology</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/90 md:text-[18px]">
            Every ConnectALL engagement follows a structured implementation
            framework designed to ensure successful project delivery and
            long-term sustainability. Our methodology includes:
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliveryMethodology.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-[#FF403A]/30 bg-[#0a0a0a] px-5 py-4"
              >
                <span className="text-sm font-semibold text-[#FF403A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">
                  {step}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-white/80 md:text-[18px]">
            This collaborative approach ensures every integration is aligned with
            business objectives while delivering measurable operational
            improvements.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 pt-4 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold leading-tight md:text-[40px]">
            Enable a Truly{" "}
            <span className="text-[#FF403A]">Connected Enterprise</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/90 md:text-[18px]">
            {closingParagraph}
          </p>

          <p className="mt-5 text-base leading-relaxed text-white/90 md:text-[18px]">
            {closingParagraph2}
          </p>

          <GetStartedLink product="ConnectALL" className="mt-10" />
        </div>
      </section>
    </div>
  );
}
