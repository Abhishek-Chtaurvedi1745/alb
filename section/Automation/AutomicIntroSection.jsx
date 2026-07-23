"use client";

import { useState } from "react";

const introParagraph =
  "Automic Automation is an enterprise-grade workload automation and orchestration platform designed to streamline complex IT and business processes across hybrid environments. It enables organizations to centrally manage, schedule, monitor, and automate workflows spanning cloud, on-premises, ERP systems, applications, databases, and infrastructure from a single platform.";

const moreParagraphs = [
  "Automic helps enterprises reduce manual intervention, improve operational efficiency, accelerate digital transformation, and ensure reliable execution of mission-critical processes. Its scalable architecture supports modern IT ecosystems including multi-cloud, containerized applications, DevOps pipelines, SAP environments, data platforms, and microservices.",
  "With advanced orchestration, governance, and real-time visibility capabilities, Automic empowers organizations to build resilient, secure, and intelligent automation strategies that align IT operations with business goals. The platform also supports AI-driven automation, self-service operations, and automation-as-code practices, making it highly relevant for modern enterprise IT operations. Available as on-premises, SaaS, or containerized deployment models, offering flexibility based on enterprise infrastructure strategies.",
];

export default function AutomicIntroSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-black px-6 py-16 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-left text-3xl font-semibold leading-tight md:text-[40px]">
          Automic Workload{" "}
          <span className="text-[#FF403A]">Automation (AWA)</span>
        </h3>

        <p className="font-normal mt-6 max-w-5xl text-left text-sm leading-relaxed text-white/90 md:text-[16px]">
          {introParagraph}
        </p>

        <div className={`max-w-5xl md:block ${expanded ? "block" : "hidden"}`}>
          {moreParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="font-normal mt-5 text-left text-sm leading-relaxed text-white/90 md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-4 block text-left text-base font-semibold text-[#FF403A] transition-opacity hover:opacity-80 md:hidden"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </section>
  );
}
