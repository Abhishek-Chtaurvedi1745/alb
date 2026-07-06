"use client";

import { useState } from "react";

const industries = [
  {
    name: "BFSI",
    image: "/images/ea5.png",
    items: [
      {
        title: "End-of-Day Batch Processing",
        desc: "Automate nightly ledger closures, reconciliation runs, and GL postings across core banking systems with zero-touch scheduling.",
      },
      {
        title: "Data Pipeline Automation",
        desc: "Orchestrate data ingestion, transformation, validation, and delivery workflows across source systems, data lakes, and analytics platforms — eliminating manual handoffs and ensuring timely data availability for reporting and downstream applications.",
      },
      {
        title: "Hybrid File Transfer Automation",
        desc: "Automate end-to-end file transfer workflows across on-premises and cloud environments, covering scheduled pickups, protocol handling (SFTP, FTP, FTPS, HTTPS), encryption, checksum validation, and delivery confirmation.",
      },
    ],
  },
  {
    name: "Retail",
    image: "/images/ea6.png",
    items: [
      {
        title: "Order-to-Fulfilment Orchestration",
        desc: "Automate order capture, inventory reservation, warehouse pick-pack, and dispatch notifications across OMS and WMS systems.",
      },
      {
        title: "Supply Chain & Replenishment",
        desc: "Schedule automated purchase order generation and stock replenishment triggers based on inventory thresholds.",
      },
    ],
  },
  {
    name: "Healthcare",
    image: "/images/ea7.png",
    items: [],
  },
  {
    name: "Manufacturing",
    image: "/images/ea8.png",
    items: [
      {
        title: "Production Planning & Scheduling",
        desc: "Orchestrate MRP/ERP job runs, work order release, and shop floor dispatch workflows aligned to production plans.",
      },
      {
        title: "Procurement Automation",
        desc: "Schedule automated reorder point checks, supplier PO dispatch, and goods receipt postings across SAP/Oracle environments.",
      },
    ],
  },
  {
    name: "Telecom",
    image: "/images/ea9.png",
    items: [
      {
        title: "Billing & Revenue Assurance",
        desc: "Automate CDR collection, invoice generation, and revenue leakage detection workflows across BSS platforms.",
      },
      {
        title: "Service Activation & Network Provisioning",
        desc: "Orchestrate service activation, network element configuration, and order fulfilment across OSS/BSS systems.",
      },
    ],
  },
];

export default function IndustriesServed() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTabClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const activeIndustry =
    activeIndex !== null ? industries[activeIndex] : null;

  return (
    <section className="bg-black text-white">
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
        <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight">
          Industries <span className="text-[#FF403A]">Served</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((industry, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={industry.name}
                type="button"
                onClick={() => handleTabClick(index)}
                aria-expanded={isActive}
                aria-controls="industry-content-panel"
                className={`relative group h-24 md:h-28 w-full overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-[#FF403A] shadow-[0_0_20px_rgba(255,64,58,0.25)]"
                    : "border-white/10 bg-zinc-900 hover:border-[#FF403A]/40 hover:shadow-[0_0_20px_rgba(255,64,58,0.15)]"
                }`}
              >
                <img
                  src={industry.image}
                  alt={`${industry.name} industry`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    isActive ? "bg-[#FF403A]/30" : "bg-black/55 group-hover:bg-black/45"
                  }`}
                />
                <span className="relative z-10 flex h-full items-center justify-center text-base md:text-lg font-semibold text-white tracking-wide">
                  {industry.name}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="industry-content-panel"
          className={`mt-8 text-left overflow-hidden transition-all duration-500 ease-in-out ${
            activeIndustry && activeIndustry.items.length > 0
              ? "max-h-[2000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {activeIndustry && activeIndustry.items.length > 0 && (
            <div className="rounded-2xl border border-[#FF403A]/40 bg-[#111111] p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {activeIndustry.name}{" "}
                <span className="text-[#FF403A]">Automation</span>
              </h3>

              <ul className="space-y-5">
                {activeIndustry.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF403A] shadow-lg shadow-red-500/20 group-hover:scale-110 transition duration-200">
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

                    <p className="text-[14px] md:text-[18px] text-white leading-relaxed">
                      <span className="font-semibold">{item.title}</span>
                      {" – "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
