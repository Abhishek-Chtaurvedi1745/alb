import BookACallButton from "@/component/BookACall/BookACallButton";
import FunctionalityGrid from "@/section/Automation/FunctionalityGrid";
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
      <span className="text-sm leading-relaxed text-white/90 md:text-[16px]">
        {children}
      </span>
    </li>
  );
}

export default function ConnectAllPage() {
  return (
    <div className="bg-black text-white">
      <section className="relative mt-20 h-[300px] overflow-hidden md:h-[450px]">
        <img
          src="/images/connectall-hero-banner.png?v=3"
          alt="ConnectALL by Broadcom"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center gap-5 px-6 md:gap-7 md:px-16">
          <h1 className="text-3xl font-semibold text-white md:text-[40px]">
            ConnectALL{" "}
            <span className="text-[#FF403A]">by Broadcom</span>
          </h1>

          <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
            Get Started with Connectall
          </BookACallButton>
        </div>
      </section>

      <ConnectAllIntroSection />

      <section className="bg-black px-6 py-16 text-white lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-3xl font-semibold leading-tight md:text-[40px]">
            Why Implement{" "}
            <span className="text-[#FF403A]">ConnectALL?</span>
          </h3>

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
          image: item.image,
        }))}
      />

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-center text-3xl font-semibold leading-tight md:text-[40px]">
            Why Choose <span className="text-[#FF403A]">Albatroz?</span>
          </h3>

          <div className="mt-6 space-y-5">
            {whyChooseAlbatrozParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="font-normal text-sm leading-relaxed text-white/90 md:text-[16px]"
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
          <h3 className="text-center text-3xl font-semibold leading-tight md:text-[40px]">
            Our Delivery <span className="text-[#FF403A]">Methodology</span>
          </h3>

          <p className="font-normal mt-5 text-sm leading-relaxed text-white/90 md:text-[16px]">
            Every ConnectALL engagement follows a structured implementation
            framework designed to ensure successful project delivery and
            long-term sustainability. Our methodology includes:
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliveryMethodology.map((step, index) => (
              <li
                key={step}
                className={`rounded-2xl border border-[#FF403A]/30 bg-[#0a0a0a] px-5 py-4${
                  index === deliveryMethodology.length - 1
                    ? " sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)] lg:col-span-1 lg:col-start-2 lg:mx-0 lg:w-full"
                    : ""
                }`}
              >
                <span className="text-sm font-semibold text-[#FF403A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-normal mt-2 text-sm leading-relaxed text-white/90 md:text-sm">
                  {step}
                </p>
              </li>
            ))}
          </ul>

          <p className="font-normal mt-8 text-sm leading-relaxed text-white/80 md:text-[16px]">
            This collaborative approach ensures every integration is aligned with
            business objectives while delivering measurable operational
            improvements.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 pt-4 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-center text-3xl font-semibold leading-tight md:text-[40px]">
            Enable a Truly{" "}
            <span className="text-[#FF403A]">Connected Enterprise</span>
          </h3>

          <p className="font-normal mt-6 text-sm leading-relaxed text-white/90 md:text-[16px]">
            {closingParagraph}
          </p>

          <p className="font-normal mt-5 text-sm leading-relaxed text-white/90 md:text-[16px]">
            {closingParagraph2}
          </p>
        </div>
      </section>
    </div>
  );
}
