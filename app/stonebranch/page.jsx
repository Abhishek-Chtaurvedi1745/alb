import BookACallButton from "@/component/BookACall/BookACallButton";
import FunctionalityGrid from "@/section/Automation/FunctionalityGrid";
import StonebranchServicesGrid from "@/section/Automation/StonebranchServicesGrid";

const productSections = [
  {
    title: "Universal Automation Center",
    titleAccent: "(UAC)",
    description:
      "Stonebranch Universal Automation Center (UAC) is a modern workload automation platform that orchestrates IT and business processes across hybrid environments. It provides centralized scheduling, monitoring, and control for complex workflows spanning on-premises, cloud, and containerized infrastructure.",
    image: "/images/stonebranch-uac.png?v=1",
    imageAlt: "Stonebranch Universal Automation Center",
  },
  {
    title: "Universal Data Mover",
    titleAccent: "Gateway (UDMG)",
    description:
      "Universal Data Mover Gateway enables secure, reliable, and high-performance file transfer and data movement across enterprise systems. It supports managed file transfer use cases with governance, encryption, and operational visibility built for demanding enterprise workloads.",
    image: "/images/stonebranch-udmg.png?v=1",
    imageAlt: "Universal Data Mover Gateway",
  },
  {
    title: "UDMG Secure Proxy",
    titleAccent: "(USP)",
    description:
      "UDMG Secure Proxy adds a hardened security layer for data movement and integration workflows. It helps organizations enforce policies, protect sensitive transfers, and maintain compliance while keeping automation pipelines efficient and scalable.",
    image: "/images/stonebranch-usp.png?v=1",
    imageAlt: "UDMG Secure Proxy",
  },
];

const capabilities = [
  {
    title: "Workload Automation & Orchestration",
    description:
      "Centralize and automate workloads, applications, and business processes across your enterprise from a single platform. Improve efficiency, reduce manual intervention, and ensure reliable execution of critical operations.",
    image: "/images/sb-cap-workload.png?v=1",
  },
  {
    title: "Hybrid Infrastructure Automation",
    description:
      "Manage and automate workloads across cloud, on-premises, virtualized, and containerized environments with ease. Gain the flexibility to scale operations while maintaining consistency across your hybrid IT landscape.",
    image: "/images/sb-cap-hybrid.png?v=1",
  },
  {
    title: "DevOps Automation",
    description:
      "Streamline application delivery by automating deployment workflows, release processes, and operational tasks. Accelerate innovation, improve collaboration, and deliver changes faster with greater confidence.",
    image: "/images/sb-cap-devops.png?v=1",
  },
  {
    title: "Data Pipeline Orchestration",
    description:
      "Orchestrate end-to-end data workflows across systems, platforms, and business applications. Ensure timely, accurate data availability while simplifying complex processing dependencies.",
    image: "/images/sb-cap-data.png?v=1",
  },
  {
    title: "Managed File Transfer",
    description:
      "Securely automate file exchanges across internal systems, cloud platforms, and external business partners. Enhance data security, compliance, and visibility while ensuring reliable file delivery.",
    image: "/images/sb-cap-mft.png?v=1",
  },
  {
    title: "Enterprise Integrations",
    description:
      "Connect seamlessly with enterprise applications, cloud services, databases, and IT operations tools. Eliminate silos and enable connected workflows that support business agility and digital transformation.",
    image: "/images/sb-cap-integrations.png?v=1",
  },
  {
    title: "AI-Powered Intelligence",
    description:
      "Leverage AI-driven insights and conversational assistance to simplify workflow management, troubleshooting, and operational decision-making. Reduce complexity, accelerate issue resolution, and improve productivity through intelligent automation guidance.",
    image: "/images/sb-cap-ai.png?v=1",
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
          <h1 className="m-0">
            <img
              src="/images/stb-logo-hd.png"
              alt="Stonebranch"
              className="h-16 w-auto max-w-[min(100%,520px)] object-contain sm:h-20 md:h-24"
              decoding="async"
              style={{ imageRendering: "auto" }}
            />
          </h1>

          <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
            Talk to our team
          </BookACallButton>
        </div>
      </section>

      <section className="bg-black px-6 pb-8 pt-10 text-white lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-8 text-center text-3xl font-semibold leading-tight md:mb-10 md:text-[40px]">
            Stonebranch Workload{" "}
            <span className="text-[#FF403A]">Automation Solutions</span>
          </h3>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-5">
            {productSections.map((section) => (
              <article
                key={section.title}
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/10 sm:min-h-[320px]"
              >
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90" />
                <div className="relative flex h-full flex-col p-5 sm:p-6 md:p-7">
                  <h4 className="text-lg font-semibold leading-snug text-white sm:text-[20px]">
                    {section.title}{" "}
                    <span className="text-[#FF403A]">{section.titleAccent}</span>
                  </h4>
                  <p className="mt-4 text-sm font-normal leading-relaxed text-white/90 md:text-[15px]">
                    {section.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
