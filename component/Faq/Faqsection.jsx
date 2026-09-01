"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const defaultFaqData = [
  {
    question:
      "What is Project Portfolio Management (PPM) and how does Albatroz help?",
    answer:
      "Project Portfolio Management (PPM) helps organizations manage multiple projects efficiently by aligning them with business goals. Albatroz provides structured PPM solutions to improve visibility, prioritize the right projects, and optimize resource allocation.",
  },
  {
    question: "What kind of automation solutions does Albatroz offer?",
    answer:
      "Albatroz provides enterprise automation solutions including workflow automation, IT process automation, cloud automation, and operational efficiency tools tailored for businesses.",
  },
  {
    question: "What is Project Management as a Service (PMaaS)?",
    answer:
      "PMaaS allows organizations to outsource project management expertise and processes, helping businesses improve delivery timelines and project success rates.",
  },
  {
    question: "How does Business Intelligence (BI) benefit my organization?",
    answer:
      "Business Intelligence helps organizations make data-driven decisions using dashboards, analytics, reporting tools, and predictive insights.",
  },
  {
    question: "Can Albatroz customize these solutions for my business?",
    answer:
      "Yes, Albatroz provides customized enterprise solutions tailored according to business size, goals, industry requirements, and operational workflows.",
  },
];

function FAQSection({
  faqs = defaultFaqData,
  showImage = false,
  imageSrc = "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263079/albatroz/faqs.png",
  imageAlt = "Frequently asked questions",
}) {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full overflow-hidden bg-black px-4 py-3 pb-13 md:py-13">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-2 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-center">
            <h1 className="mb-7 mt-0 text-3xl font-semibold leading-tight text-white md:mt-0 md:text-[40px]">
              Frequently
              <br className="hidden md:block" />
              Asked
              <br className="hidden md:block" />
              <span className="text-[#ff403a]"> Questions </span>
            </h1>

            {showImage ? (
              <div className="mt-10 hidden md:block">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-[400px] w-full object-contain"
                />
              </div>
            ) : null}
          </div>

          <div className="space-y-5">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                  active === index
                    ? "border-[#ff403a] bg-[#111111]"
                    : "border-gray-700 bg-black"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h4 className="pr-5 text-[16px] font-medium text-white md:text-xl">
                    {item.question}
                  </h4>

                  <span className="shrink-0 text-white">
                    {active === index ? (
                      <X size={24} className="text-[#ff403a]" />
                    ) : (
                      <Plus size={24} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    active === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {item.bullets ? (
                      <ul className="list-disc space-y-2 px-6 pb-6 pl-11 text-[12px] font-normal leading-relaxed text-[#FFFFFF] md:text-[16px]">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="px-6 pb-6 text-[12px] font-normal leading-relaxed text-[#FFFFFF] md:text-[16px]">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
