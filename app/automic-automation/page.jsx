import Link from "next/link";
import GetStartedLink from "@/component/GetStartedLink";
import FAQSection from "@/component/Faq/Faqsection";
import SuccessStories from "@/component/SuccessStories/SuccessStories";
import FunctionalityGrid from "@/section/Automation/FunctionalityGrid";
import AutomicIntroSection from "@/section/Automation/AutomicIntroSection";
import { automicFaqData } from "@/section/Automation/automicFaqData";
import { automicFunctionalities } from "@/section/Automation/automicFunctionalitiesData";
import { automicSuccessStories } from "@/section/Automation/automicSuccessStoriesData";

export const metadata = {
  title: "Automic Automation | Albatroz Solutions",
  description:
    "Automic Workload Automation (AWA) by Broadcom — enterprise-grade workload automation and orchestration for hybrid IT environments.",
};

export default function AutomicAutomationPage() {
  return (
    <div className="bg-black">
      <section className="bg-[#000000] px-6 py-16 mt-[83px]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
          <div className="w-full">
            <img
              src="/images/Automic-by-broadcom.webp"
              alt="Automic by Broadcom"
              className="h-auto w-auto max-w-[324px]"
            />
            <Link
              href="/contact-us"
              className="mt-[28px] inline-block cursor-pointer rounded-lg bg-[#FF403A] px-6 py-3 text-[25px] font-semibold text-[#FFFFFF] transition hover:opacity-90"
            >
              Request a free demo
            </Link>
          </div>

          <div className="flex w-full justify-center">
            <img
              src="/images/ea.png"
              alt="Automic automation platform"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <AutomicIntroSection />

      <FunctionalityGrid
        title="Key Functionalities of"
        titleAccent="Automic Automation"
        items={automicFunctionalities}
      />

      <SuccessStories stories={automicSuccessStories} />
      <section className="bg-black px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <GetStartedLink product="Automic" />
        </div>
      </section>
      <FAQSection faqs={automicFaqData} />
    </div>
  );
}
