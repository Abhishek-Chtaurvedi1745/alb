import BookACallButton from "@/component/BookACall/BookACallButton";
import FAQSection from "@/component/Faq/Faqsection";
import SuccessStories from "@/component/SuccessStories/SuccessStories";
import FunctionalityGrid from "@/section/Automation/FunctionalityGrid";
import AutomicIntroSection from "@/section/Automation/AutomicIntroSection";
import AutomicServicesGrid from "@/section/Automation/AutomicServicesGrid";
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
      <section className="relative mt-20 h-[300px] overflow-hidden bg-black md:h-[450px]">
        <img
          src="/images/automic-hero.png"
          alt="Automic by Broadcom"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center gap-5 px-6 md:gap-7 md:px-16">
          <h1 className="text-3xl font-semibold text-white md:text-[45px]">
            Automic{" "}
            <span className="text-[#FF403A]">by Broadcom</span>
          </h1>

          <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
            Get started with Automic
          </BookACallButton>
        </div>
      </section>

      <AutomicIntroSection />

      <FunctionalityGrid
        title="Key Functionalities of"
        titleAccent="Automic Automation"
        items={automicFunctionalities}
      />

      <AutomicServicesGrid />

      <SuccessStories stories={automicSuccessStories} />
      <FAQSection faqs={automicFaqData} />
    </div>
  );
}
