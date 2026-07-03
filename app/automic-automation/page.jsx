import Link from "next/link";
import FAQSection from "@/component/Faq/Faqsection";
import FunctionalityGrid from "@/section/Automation/FunctionalityGrid";
import AutomicIntroSection from "@/section/Automation/AutomicIntroSection";

const functionalities = [
  {
    title: "Workload Automation & Orchestration",
    description:
      "Automate, schedule, and orchestrate complex workloads across on-premises, cloud, and hybrid environments with centralized control and real-time visibility.",
    featured: true,
    icon: "/images/md2.svg",
  },
  {
    title: "Hybrid Cloud Automation",
    image: "/images/ea2.png",
  },
  {
    title: "Business Process Automation",
    image: "/images/ea1.png",
  },
  {
    title: "DevOps & API Automation",
    image: "/images/ea3.png",
  },
  {
    title: "Enterprise Application Automation",
    image: "/images/ea4.png",
  },
  {
    title: "AI-Powered Operations",
    image: "/images/ea1.png",
  },
  {
    title: "Governance & Operational Visibility",
    description:
      "Gain end-to-end visibility into automated processes with dashboards, audit trails, and governance controls that support compliance and operational excellence.",
    image: "/images/ea.png",
    fullWidth: true,
  },
];

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
        items={functionalities}
      />

      <FAQSection />
    </div>
  );
}
