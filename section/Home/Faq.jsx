"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question:
      "What is Project Portfolio Management (PPM) and how does Albatroz help?",
    answer:
      "Project Portfolio Management (PPM) helps organizations manage multiple projects efficiently by aligning them with business goals. Albatroz provides structured PPM solutions to improve visibility, prioritize the right projects, and optimize resource allocation.",
  },

  {
    question:
      "What kind of automation solutions does Albatroz offer?",
    answer:
      "Albatroz provides enterprise automation solutions including workflow automation, IT process automation, cloud automation, and operational efficiency tools tailored for businesses.",
  },

  {
    question:
      "What is Project Management as a Service (PMaaS)?",
    answer:
      "PMaaS allows organizations to outsource project management expertise and processes, helping businesses improve delivery timelines and project success rates.",
  },

  {
    question:
      "How does Business Intelligence (BI) benefit my organization?",
    answer:
      "Business Intelligence helps organizations make data-driven decisions using dashboards, analytics, reporting tools, and predictive insights.",
  },

  {
    question:
      "Can Albatroz customize these solutions for my business?",
    answer:
      "Yes, Albatroz provides customized enterprise solutions tailored according to business size, goals, industry requirements, and operational workflows.",
  },
];

function FAQSection() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full bg-black  py-3 md:py-13 pb-13 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-center">

           <h1 className="text-white text-3xl md:text-[40px] font-semibold leading-tight mt-0 md:mt-0 mb-7">
  Frequently 
  <br className="hidden md:block" /> 
  
    Asked
  <br className="hidden md:block" />
  <span className="text-[#ff403a]"> Questions </span>
</h1>
            {/* IMAGE */}
            <div className="mt-10 hidden md:block">
              <img
                src="images/faqs.png"
                alt=""
                className="w-full object-contain h-[400px]"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">

            {faqData.map((item, index) => (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-500
                ${
                  active === index
                    ? "border-[#ff403a] bg-[#111111]"
                    : "border-gray-700 bg-black"
                }`}
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-6"
                >

                  <h4 className="text-white text-[16px] md:text-xl font-medium pr-5">
                    {item.question}
                  </h4>

                  <span className="text-white flex-shrink-0">
                    {active === index ? (
                      <X size={24} className="text-[#ff403a]" />
                    ) : (
                      <Plus size={24} />
                    )}
                  </span>

                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                  ${
                    active === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">

                    <p className="text-[#FFFFFF] text-[12px] md:text-[16px] font-normal leading-relaxed px-6 pb-6 text-sm md:text-sm">
                      {item.answer}
                    </p>

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