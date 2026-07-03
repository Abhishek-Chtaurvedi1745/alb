import Link from "next/link";
import AlternatingSection from "@/section/Automation/AlternatingSection";
import FunctionalityGrid from "@/section/Automation/FunctionalityGrid";

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
      "Coordinate and automate complex workloads across hybrid infrastructure with centralized visibility and control.",
    featured: true,
    icon: "/images/md2.svg",
  },
  { title: "Hybrid Infrastructure Automation", icon: "/images/14.svg" },
  { title: "DevOps Automation", icon: "/images/15.svg" },
  { title: "Data Pipeline Orchestration", icon: "/images/13.svg" },
  { title: "Managed File Transfer", icon: "/images/12.svg" },
  { title: "Enterprise Integrations", icon: "/images/11.svg" },
  {
    title: "AI-Powered Intelligence",
    description:
      "Leverage intelligent automation capabilities to optimize scheduling, detect anomalies, and improve operational decision-making.",
    image: "/images/ea3.png",
    fullWidth: true,
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
      <section className="bg-[#000000] px-6 py-16 mt-[83px]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
          <div className="w-full">
            <img
              src="/images/stb.svg"
              alt="Stonebranch"
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
              src="/images/ea3.png"
              alt="Stonebranch orchestrate and automate"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-black px-6 pb-4 pt-2 text-white lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-semibold leading-tight md:text-[40px]">
            Stonebranch Workload{" "}
            <span className="text-[#FF403A]">Automation Solutions</span>
          </h1>
        </div>
      </section>

      <AlternatingSection sections={productSections} />

      <FunctionalityGrid
        title="Core Capabilities of Stonebranch"
        titleAccent="Automation Include"
        items={capabilities}
      />

      <section className="bg-black px-6 pb-20 pt-4 text-center lg:px-12">
        <Link
          href="/contact-us"
          className="inline-block rounded-xl border border-[#FF403A]/40 bg-[#111111] px-10 py-4 text-lg font-semibold text-white transition hover:border-[#FF403A] hover:text-[#FF403A]"
        >
          Services for <span className="text-[#FF403A]">Automation</span>
        </Link>
      </section>
    </div>
  );
}
