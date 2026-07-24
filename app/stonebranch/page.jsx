import BookACallButton from "@/component/BookACall/BookACallButton";
import AlternatingSection from "@/section/Automation/AlternatingSection";
import FunctionalityGrid from "@/section/Automation/FunctionalityGrid";
import StonebranchServicesGrid from "@/section/Automation/StonebranchServicesGrid";

const productSections = [
  {
    title: "Universal Automation Center",
    titleAccent: "(UAC)",
    description:
      "Stonebranch Universal Automation Center (UAC) is a modern workload automation platform that orchestrates IT and business processes across hybrid environments. It provides centralized scheduling, monitoring, and control for complex workflows spanning on-premises, cloud, and containerized infrastructure.",
    image: "/images/ea4.png",
    imageAlt: "Stonebranch Universal Automation Center",
    imageRight: true,
  },
  {
    title: "Universal Data Mover",
    titleAccent: "Gateway (UDMG)",
    description:
      "Universal Data Mover Gateway enables secure, reliable, and high-performance file transfer and data movement across enterprise systems. It supports managed file transfer use cases with governance, encryption, and operational visibility built for demanding enterprise workloads.",
    image: "/images/ea2.png",
    imageAlt: "Universal Data Mover Gateway",
    imageRight: false,
  },
  {
    title: "UDMG Secure Proxy",
    titleAccent: "(USP)",
    description:
      "UDMG Secure Proxy adds a hardened security layer for data movement and integration workflows. It helps organizations enforce policies, protect sensitive transfers, and maintain compliance while keeping automation pipelines efficient and scalable.",
    image: "/images/ea1.png",
    imageAlt: "UDMG Secure Proxy",
    imageRight: true,
  },
];

const capabilities = [
  {
    title: "Workload Automation & Orchestration",
    description:
      "Centralize and automate workloads, applications, and business processes across your enterprise from a single platform. Improve efficiency, reduce manual intervention, and ensure reliable execution of critical operations.",
    icon: "/images/md2.svg",
  },
  {
    title: "Hybrid Infrastructure Automation",
    description:
      "Manage and automate workloads across cloud, on-premises, virtualized, and containerized environments with ease. Gain the flexibility to scale operations while maintaining consistency across your hybrid IT landscape.",
    icon: "/images/14.svg",
  },
  {
    title: "DevOps Automation",
    description:
      "Streamline application delivery by automating deployment workflows, release processes, and operational tasks. Accelerate innovation, improve collaboration, and deliver changes faster with greater confidence.",
    icon: "/images/15.svg",
  },
  {
    title: "Data Pipeline Orchestration",
    description:
      "Orchestrate end-to-end data workflows across systems, platforms, and business applications. Ensure timely, accurate data availability while simplifying complex processing dependencies.",
    icon: "/images/13.svg",
  },
  {
    title: "Managed File Transfer",
    description:
      "Securely automate file exchanges across internal systems, cloud platforms, and external business partners. Enhance data security, compliance, and visibility while ensuring reliable file delivery.",
    icon: "/images/12.svg",
  },
  {
    title: "Enterprise Integrations",
    description:
      "Connect seamlessly with enterprise applications, cloud services, databases, and IT operations tools. Eliminate silos and enable connected workflows that support business agility and digital transformation.",
    icon: "/images/11.svg",
  },
  {
    title: "AI-Powered Intelligence",
    description:
      "Leverage AI-driven insights and conversational assistance to simplify workflow management, troubleshooting, and operational decision-making. Reduce complexity, accelerate issue resolution, and improve productivity through intelligent automation guidance.",
    icon: "/images/md3.svg",
  },
];

export const metadata = {
  title: "Stonebranch | Albatroz Solutions",
  description:
    "Stonebranch workload automation solutions including UAC, UDMG, and Secure Proxy for enterprise IT orchestration.",
};

export default function StonebranchPage() {
  return (
    <div className="bg-black">
      <section className="relative mt-20 h-[300px] overflow-hidden bg-black md:h-[450px]">
        <img
          src="/images/stonebranch-hero.png"
          alt="Stonebranch"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center gap-5 px-6 md:gap-7 md:px-16">
          <h1 className="text-3xl font-semibold text-white md:text-[45px]">
            Stonebranch
          </h1>

          <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
            Talk to our team
          </BookACallButton>
        </div>
      </section>

      <section className="bg-black px-6 pb-4 pt-2 text-white lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h3 className="text-3xl font-semibold leading-tight md:text-[40px]">
            Stonebranch Workload{" "}
            <span className="text-[#FF403A]">Automation Solutions</span>
          </h3>
        </div>
      </section>

      <AlternatingSection sections={productSections} />

      <FunctionalityGrid
        title="Core Capabilities of Stonebranch"
        titleAccent="Automation"
        titleSuffix="Include"
        items={capabilities}
      />

      <StonebranchServicesGrid />
    </div>
  );
}
