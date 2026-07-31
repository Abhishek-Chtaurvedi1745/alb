import React from "react";
import Link from "next/link";
import BookACallButton from "@/component/BookACall/BookACallButton";
import FAQSection from "../../component/Faq/Faqsection";
import IndustriesServed from "../../section/Automation/IndustriesServed";

const workloadBenefits = [
  {
    title: "Centralized Control:",
    desc: "Move workloads across your organization with advanced Automation and Orchestration Tools.",
  },
  {
    title: "Agility Boost:",
    desc: "Adapt quickly to dynamic business needs using intuitive Enterprise Automation Software.",
  },
  {
    title: "Reliable Deployment:",
    desc: "Optimize workflows with pre-built and customized automation processes.",
  },
  {
    title: "Seamless Integration:",
    desc: "Ensure compatibility with your current systems for smooth Data Center Automation.",
  },
  {
    title: "Efficiency Gains:",
    desc: "Free up valuable resources by automating repetitive tasks with Robotic Process Automation (RPA).",
  },
];

const benefits = [
  {
    title: "Streamlined Job Orchestration:",
    desc: "Achieve seamless management of IT workflows across hybrid environments.",
  },
  {
    title: "Comprehensive Automation:",
    desc: "Automate complex processes with Business Process Automation Software and IT Process Automation Software.",
  },
  {
    title: "Flexibility in Architecture:",
    desc: "Leverage tools designed for hybrid and multi-cloud environments.",
  },
  {
    title: "Advanced Workflow Management:",
    desc: "Handle diverse business demands effortlessly with robust automation tools.",
  },
];

const benefits1 = [
  {
    title: "Centralized Control:",
    desc: "Manage enterprise-wide workloads with powerful Automation and Orchestration Tools.",
  },
  {
    title: "Enhanced Agility:",
    desc: "Quickly adapt to evolving business needs with intuitive Enterprise Automation Software.",
  },
  {
    title: "Flexible Deployment:",
    desc: "Choose the right model for your infrastructure from on-premises, cloud-based, or SaaS.",
  },
  {
    title: "Seamless Integration:",
    desc: "Simplify Data Center Automation by integrating with existing systems.",
  },
  {
    title: "Operational Efficiency:",
    desc: "Automate repetitive tasks using Robotic Process Automation (RPA) to drive innovation.",
  },
  {
    title: "Event-Driven Processes:",
    desc: "Respond promptly to real-time triggers with Event-Driven Automation Software.",
  },
  {
    title: "Continuous Development Support:",
    desc: "Enable Continuous Integration and Continuous Development to accelerate progress.",
  },
  {
    title: "Advanced Monitoring:",
    desc: "Leverage embedded analytics and dashboards for actionable insights.",
  },
  {
    title: "Scalability:",
    desc: "Use Workload Automation Tools to grow IT operations alongside business demands.",
  },
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF403A]">
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
  );
}

function page() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative mt-20 h-[300px] overflow-hidden md:h-[450px]">
        <img
          src="/images/enterprise-it-automation-hero.png?v=7"
          alt="Enterprise IT Automation"
          className="absolute inset-0 h-full w-full object-cover object-[center_68%]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-start justify-center gap-5 px-6 md:gap-7 md:px-16">
          <h1 className="text-3xl font-semibold text-white md:text-[40px]">
            Enterprise IT <span className="text-[#FF403A]">Automation</span>
          </h1>

          <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
            Talk to our team
          </BookACallButton>
        </div>
      </section>

      {/* Workload Automation */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <h3 className="text-center text-3xl font-semibold leading-tight md:text-[40px]">
            Workload Automation
          </h3>

          <h4 className="mt-3 text-center text-2xl font-semibold text-[#FF403A] md:text-[40px]">
            Bridging IT Operations with Business Goals
          </h4>

          <p className="mt-5 w-full text-left text-[13px] font-normal leading-7 text-gray-300 md:text-[16px]">
            Workload Automation (WA) redefines business operations by automating,
            scheduling, and executing workflows, processes, and transactions without
            human intervention. This powerful automation platform aligns IT operations
            with business objectives, enabling businesses to optimize performance
            through unattended workflows and Event-Driven Automation Software in
            hybrid environments.
          </p>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[38%_1fr] lg:gap-10">
            <div className="overflow-hidden rounded-2xl border border-white/10 lg:sticky lg:top-28">
              <img
                src="/images/ea-workload-human.png?v=2"
                alt="IT professionals managing workload automation dashboards"
                className="aspect-video w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold leading-tight md:text-[35px]">
                What Workload Automation Brings to{" "}
                <span className="text-[#FF403A]">Your Business</span>
              </h3>

              <div className="mt-6 space-y-3">
                {workloadBenefits.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-white/10 bg-[#0c0c0c] p-4 transition-colors hover:border-[#FF403A]/40"
                  >
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="text-[13px] font-normal leading-relaxed text-white md:text-sm">
                        <span className="font-semibold">{item.title}</span>{" "}
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 md:p-10">
            <h3 className="text-center text-2xl font-semibold leading-tight md:text-[40px]">
              Simplify Your IT Operations with Service Orchestration and{" "}
              <span className="text-[#FF403A]">
                Automation Platforms (SOAPs)
              </span>
            </h3>

            <p className="mt-6 w-full text-left text-sm font-normal leading-relaxed text-white md:text-[16px]">
              Service Orchestration simplifies the coordination of complex IT
              workflows across multiple domains with minimal manual intervention.
              Built on advanced IT Orchestration Software, SOAPs unify workflows
              and tasks into a cohesive, efficient system that ensures optimal
              performance across diverse IT infrastructures.
            </p>
          </div>
        </div>
      </section>

      {/* Service Orchestration Benefits */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid items-start gap-8 lg:grid-cols-[38%_1fr] lg:gap-10">
            <div className="overflow-hidden rounded-2xl border border-white/10 lg:sticky lg:top-28">
              <img
                src="/images/ea-soap-human.png?v=2"
                alt="Team collaborating on service orchestration"
                className="aspect-video w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-[38px]">
                What Service Orchestration{" "}
                <span className="text-[#FF403A]">Brings to Your Business</span>
              </h3>

              <div className="mt-6 space-y-3">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#0c0c0c] p-4 transition-colors hover:border-[#FF403A]/40"
                  >
                    <div className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="text-[13px] font-normal leading-relaxed text-white md:text-[16px]">
                        <span className="font-semibold">{item.title}</span>{" "}
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <h3 className="text-center text-2xl font-semibold leading-tight md:text-[40px]">
            Enterprise Automation Solutions{" "}
            <span className="text-[#FF403A]">We Support</span>
          </h3>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
            <Link
              href="/automic-automation"
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] transition hover:border-[#FF403A]/50"
            >
              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                <h4 className="text-xl font-semibold leading-snug sm:text-2xl md:text-[32px]">
                  Broadcom{" "}
                  <span className="text-[#FF403A]">Automic Automation</span>
                </h4>
                <p className="mt-4 text-[13px] font-normal leading-relaxed text-white/90 md:text-sm">
                  Broadcom Automic Automation offers cutting-edge solutions for
                  Workload Automation, Automated Job Scheduling, and Enterprise
                  Automation. With features like Automic Job Scheduling, Automic
                  Automation for DevOps, and Broadcom Workload Automation, it
                  enables seamless integration, scalability, and agility. Tools
                  such as Automic SaaS and UC4 make it ideal for businesses
                  striving for compliance and growth in today&apos;s dynamic IT
                  landscape.
                </p>
                <span className="mt-5 text-sm font-semibold text-[#FF403A] transition group-hover:underline">
                  Explore Automic Automation →
                </span>
              </div>
            </Link>

            <Link
              href="/stonebranch"
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] transition hover:border-[#FF403A]/50"
            >
              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                <h4 className="text-xl font-semibold leading-snug sm:text-2xl md:text-[32px]">
                  Stonebranch{" "}
                  <span className="text-[#FF403A]">
                    Universal Automation Center (UAC)
                  </span>
                </h4>
                <p className="mt-4 text-[13px] font-normal leading-relaxed text-white/90 md:text-sm">
                  Stonebranch UAC is a versatile tool for Job Scheduling Software
                  and IT workflow automation. It supports Stonebranch Workflow
                  Orchestration, Stonebranch Managed File Transfer, and
                  comprehensive Universal Automation Center Features. With
                  real-time orchestration and centralized control, it enhances
                  visibility and ensures efficient workflow execution, simplifying
                  IT operations for hybrid environments.
                </p>
                <span className="mt-5 text-sm font-semibold text-[#FF403A] transition group-hover:underline">
                  Explore Stonebranch →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Transformative Benefits */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="text-center">
            <h3 className="text-3xl font-semibold leading-tight md:text-[40px]">
              Transformative Benefits of Implementing{" "}
              <span className="text-[#FF403A]">Automation</span>
            </h3>

            <p className="mt-6 w-full text-left text-sm font-normal leading-relaxed text-white/80 md:text-center md:text-[16px]">
              Implementing tools like Broadcom Automic Automation and Stonebranch
              UAC enables organizations to optimize IT processes while aligning
              them with business objectives. Key benefits include:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {benefits1.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-[#0c0c0c] p-4 transition-colors hover:border-[#FF403A]/40"
              >
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-[13px] font-normal leading-relaxed text-white md:text-sm">
                    <span className="font-semibold">{item.title}</span>{" "}
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesServed />
      <FAQSection />
    </div>
  );
}

export default page;
