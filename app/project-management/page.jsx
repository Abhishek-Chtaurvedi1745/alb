"use client";
import React from 'react'
import { Plus, X } from "lucide-react";
import { useState } from "react";

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

const benefits = [
  {
    icon: "/images/1.svg",
    title: "Enhanced Project Prioritization & Alignment",
  },
  {
    icon: "/images/2.svg",
    title: "Improved Decision Making & Visibility",
  },
  {
     icon: "/images/3.svg",
    title: "Resource Optimization & Capacity Planning",
  },
  {
     icon: "/images/4.svg",
    title: "Adaptability to Agile & Hybrid Methodologies",
  },
  {
     icon: "/images/5.svg",
    title: "Cost Control & Budget Management",
  },
  {
    icon: "/images/6.svg",
    title: "Enhanced Collaboration & Communication",
  },
  {
     icon: "/images/7.svg",
    title: "Risk Mitigation & Issue Management",
  },
  {
     icon: "/images/8.svg",
    title: "Faster Time-to-Market & Delivery",
  },
  {
     icon: "/images/9.svg",
    title: "Strategic Portfolio Optimization",
  },
];

const features = [
  "Alignment with Objectives: Ensuring that projects align with strategic goals and priorities.",
  "Resource Allocation: Optimizing resources across projects to maximize value.",
  "Risk Management: Assessing and managing risks associated with the portfolio.",
  "Performance Measurement: Tracking project performance and outcomes.",
];

const features1 = [
  {
    title: "Product Vision and Strategy",
    desc: "Defining the long-term vision and strategy for digital products, aligning them with market needs and company objectives.",
  },
  {
    title: "Product Development",
    desc: "Managing the entire product development lifecycle, from ideation and design to development, launch, and ongoing enhancements.",
  },
  {
    title: "User Experience and Feedback",
    desc: "Prioritizing features and improvements based on user feedback and market trends to ensure customer satisfaction.",
  },
  {
    title: "Cross-Functional Collaboration",
    desc: "Working closely with engineering, design, marketing, and sales teams to ensure alignment and successful delivery.",
  },
];

const features2 = [
  {
    title: "End-to-End Visibility",
    desc: "Gaining visibility into the entire value stream,from ideation to delivery and feedback, to identify bottlenecks and areas for improvement.",
  },
  {
    title: "Continuous Improvement",
    desc: " Using data and analytics to continuouslyimprove processes and eliminate waste, thereby increasing efficiency and value delivery.",
  },
  {
    title: "Alignment with Business Objectives",
    desc: "Ensuring that all activities withinthe value stream are aligned with the organization’s strategic goals and objectives.",
  },
  {
    title: "Metrics and Measurement",
    desc: "Establishing key metrics to measure the flow of value and identifying areas that need attention or enhancement",
  },
];

function page() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <div>
      <section className="bg-[#000000] py-16 px-6 mt-[83px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

   
        <div className="w-full ">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#FFFFFF] mb-4">
            Project Portfolio  <span className="text-[#FF403A]"><br />  
secure AI into your PMO? </span>
          </h2>

          <p className="text-[20px] text-[#FFFFFF] mb-6">
            From portfolio planning to automation and analytics,
we help organizations manage work with structure,
visibility and control.
          </p>
          <p className="text-[#FFFFFF] text-upercase text-[24px]">Talk to Our Team</p>
          {/* <button className="px-6 py-3 bg-[#FF403A] transition text-[#FFFFFF] text-[25px] mt-[28px] font-semibold cursor-pointer rounded-lg">
Get my AI readiness report
          </button> */}
        </div>

      
        <div className="w-full flex justify-center">
          <img
            src="/images/ppm.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full "
          />
        </div>

      </div>
    </section>
    <section className="bg-black pt-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl md:text-[40px] font-semibold mb-3 leading-tight">
            Transformative Benefits of{" "}
            <span className="text-[#e02b20]">Implementing PPM</span>
          </h2>
          <p className="text-[#FFFFFF] text-base mx-auto text-[20px] font-medium leading-relaxed">
            Implementing modern Project and Portfolio Management (PPM) practices
            can yield several transformative benefits for organizations. Here are
            some key advantages
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Icon */}
              <div className="mb-2">
                <img src={benefit.icon} alt="" />
              </div>

              {/* Title */}
              <h3 className="text-white text-[25px] font-medium leading-snug">
                {benefit.title}
              </h3>

              {/* Divider — white line with red accent */}
              <div className="flex items-center gap-1">
                <div className="w-16 h-px bg-white"></div>
                <div className="w-4 h-px bg-[#e02b20]"></div>
              </div>

              {/* View More */}
              <a
                href="#"
                className="text-[#FF403A] text-[18px] font-medium hover:opacity-75 transition-opacity w-fit"
              >
                View More
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-white text-[32px] md:text-[40px] font-bold text-center mb-12 leading-tight">
          Engage with Albatroz{" "}
          <span className="text-[#FF403A]">for PPM Solutions</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* ── Left: PPM Wheel ── */}
      <div className='z-100'>
  <img
    src="/images/nbnew2.png"
    alt="Rotating Image"
    className="animate-spin [animation-duration:8s]  rounded-full h-[300px] md:h-[500px]"
  />
</div>

          {/* ── Right: Content ── */}
          <div className="flex-1 flex flex-col gap-8 z-1000">

            {/* Interactive PPM Demos */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF403A] to-[#d9322d] shadow-lg shadow-[#FF403A]/25">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="12"
                      rx="2"
                      stroke="white"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M9 20h6M12 16v4"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <rect x="7" y="11" width="2.2" height="3" rx="0.4" fill="white" opacity="0.85" />
                    <rect x="10.9" y="9" width="2.2" height="5" rx="0.4" fill="white" />
                    <rect x="14.8" y="7" width="2.2" height="7" rx="0.4" fill="white" />
                    <path
                      d="M17.2 6.2l2.3 4.8-2.1-1.1-1.2 1.9z"
                      fill="white"
                    />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-black bg-white">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#FF403A] opacity-60" />
                    <span className="absolute inset-0.5 rounded-full bg-[#FF403A]" />
                  </span>
                </div>
                <h3 className="text-white text-[30px] font-semibold">Interactive PPM Demos</h3>
              </div>

              {/* Tool logos */}
              <div className="flex items-end gap-6 mb-5 pl-1">
                <div>
                  <p className="text-white text-[26px] font-black leading-none tracking-tight">
                    Clarity<sup className="text-[10px] font-normal align-super">™</sup>
                  </p>
                  <p className="text-white/50 text-[11px] mt-0.5">by Broadcom</p>
                </div>
                <div>
                  <p className="text-white text-[26px] font-black leading-none tracking-tight">
                    Rally<sup className="text-[10px] font-normal align-super">®</sup>
                  </p>
                  <p className="text-white/50 text-[11px] mt-0.5">by Broadcom</p>
                </div>
                <div>
                  <p className="text-white text-[26px] font-black leading-none tracking-tight">
                    ConnectALL
                  </p>
                  <p className="text-white/50 text-[11px] mt-0.5">by Broadcom</p>
                </div>
              </div>

              <button className="bg-[#FF403A] hover:bg-[#cc2f2a] transition-colors duration-200 text-white text-[20px] font-semibold px-7 py-2.5 rounded-sm">
                Request a Demo
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Expert PPM Consultations */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF403A] to-[#d9322d] shadow-lg shadow-[#FF403A]/25">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="8"
                      width="18"
                      height="12"
                      rx="2"
                      stroke="white"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 8V6.5a4 4 0 018 0V8"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path d="M3 13h18" stroke="white" strokeWidth="1.6" />
                    <path
                      d="M8 16.5h2.5M13.5 16.5H16"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <circle cx="18" cy="5.5" r="2.2" stroke="white" strokeWidth="1.4" />
                    <path
                      d="M15.8 9.8c.45-1.1 1.35-1.8 2.2-1.8s1.75.7 2.2 1.8"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-black bg-white">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#FF403A] opacity-60" />
                    <span className="absolute inset-0.5 rounded-full bg-[#FF403A]" />
                  </span>
                </div>
                <h3 className="text-white text-[30px] font-semibold">Expert PPM Consultations</h3>
              </div>

              <p className="text-white text-[18px] leading-relaxed mb-5 pl-1">
                Leverage expert PPM consultation to address business challenges
                and maximize the value of your PPM investments.
              </p>

              <button className="bg-[#FF403A] hover:bg-[#cc2f2a] transition-colors duration-200 text-white text-[20px] font-semibold px-7 py-2.5 rounded-sm">
                Book Free Consultation
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
<section className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[45px] font-semibold">
            Modern PPM Solutions:
            <span className="text-[#FF403A]">
              {" "}Comprehensive Features
            </span>
          </h2>
          <div className="w-full h-px bg-gray-800 mt-8"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-0 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl md:text-[35px] font-semibold mb-6">
              Strategic Portfolio{" "}
              <span className="text-red-500">Management</span>
            </h3>

            <p className="text-[#FFFFFF] text-[18px] leading-relaxed mb-8">
              Strategic Portfolio Management involves the oversight and
              management of an organization's portfolio of projects and
              initiatives. Its primary focus is on aligning projects with
              strategic goals and maximizing business value.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img src="/images/crt.svg" alt="" />
                  <p className="text-[#FFFFFF] text-[18px] font-regular leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="">
            <img
              src="/images/newcrt.png"
              alt="Strategic Portfolio"
              className="w-full "
            />

          
          </div>

        </div>
      </div>
    </section>
    <section className="bg-black pt-15 overflow-hidden ">
  <div className=" mx-auto max-w-[1600px]">

    <div className="grid lg:grid-cols-[55%_45%] items-start gap-10">

      {/* LEFT IMAGE */}
      <div className="relative">

        {/* Glow */}
        {/* <div className="absolute inset-0 bg-[#FF403A]/10 blur-[120px]"></div> */}

        <img
          src="/images/crt1.png"
          alt=""
          className="
            relative
            w-full
            object-contain
            animate-[float_6s_ease-in-out_infinite]
          "
        />

      </div>

      {/* RIGHT CONTENT */}
      <div className="pt-2 pr-[50px]">

        <h2 className="text-2xl md:text-[35px] font-semibold text-white mb-5">
          Digital Product{" "}
          <span className="text-[#FF403A]">
            Management
          </span>
        </h2>

        <p className="text-[#FFFFFF] text-[18px] leading-relaxed mb-8">
          Digital Product Management involves overseeing the
          development, enhancement, and management of digital products
          or services offered by a company. This includes:
        </p>

        <div className="space-y-5">

          {features1.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-4
              "
            >
              <img
                src="/images/crt.svg"
                alt=""
                className="mt-1 w-5 h-5 shrink-0"
              />

              <div>
                <h3 className="text-[#FF403A] text-[18px] font-medium inline">
                  {item.title}
                  <span className="text-white font-normal">
                    : {item.desc}
                  </span>
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>
 <section className="bg-black py-15 overflow-hidden pt-20 ">
  <div className=" mx-auto max-w-[1600px]">

    <div className="grid lg:grid-cols-[55%_45%] items-start gap-10">

      {/* LEFT IMAGE */}
     

      {/* RIGHT CONTENT */}
      <div className="pt-2 pl-[50px]">

        <h2 className="text-2xl md:text-[35px] font-semibold text-white mb-5">
          Value Stream {" "}
          <span className="text-[#FF403A]">
            Management
          </span>
        </h2>

        <p className="text-[#FFFFFF] text-[18px] leading-relaxed mb-8">
         Value Stream Management (VSM) involves optimizing the entire flow of work
across an organization to deliver value to customers efficiently. It encompasses
        </p>

        <div className="space-y-5">

          {features2.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-4
              "
            >
              <img
                src="/images/crt.svg"
                alt=""
                className="mt-1 w-5 h-5 shrink-0"
              />

              <div>
                <h3 className="text-[#FF403A] text-[18px] font-medium inline">
                  {item.title}
                  <span className="text-white font-normal">
                    : {item.desc}
                  </span>
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
       <div className="relative">

        {/* Glow */}
        {/* <div className="absolute inset-0 bg-[#FF403A]/10 blur-[120px]"></div> */}

        <img
          src="/images/newcrt1.png"
          alt=""
          className="
            relative
            w-full
            object-contain
            
          "
        />

      </div>

    </div>

  </div>
</section>
  <section className="bg-black text-white py-6 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Section: Button aligned right */}
       <div className="flex mb-0" style={{ justifyContent: 'center' }}>
          <button className="bg-[#FF3B30] hover:bg-[#E03126] text-white font-semibold py-3 px-8 text-lg rounded-sm transition-colors duration-200 shadow-lg cursor-pointer">
            Book free Consultation
          </button>
        </div>

        {/* Line divider directly beneath the button */}
        {/* <hr className="border-t border-gray-800 mb-10 w-full" /> */}

        {/* Content Paragraph */}
        {/* <p className="text-center text-[#FFFFFF] text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
          These management areas often intersect and complement each other, especially 
          in organizations aiming for digital transformation or seeking to enhance their 
          agility and competitiveness in today's rapidly evolving business landscape. 
          Integrating these practices can lead to more streamlined operations, improved 
          decision-making, and ultimately, better outcomes for the organization.
        </p>
         */}
      </div>
    </section>
    <section className="w-full bg-black  py-3 md:py-13 pb-13 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-center">

           <h2 className="text-white text-3xl md:text-[40px] font-semibold leading-tight mt-0 md:mt-0 mb-7">
  Frequently 
  <br className="hidden md:block" /> 
  
    Asked
  <br className="hidden md:block" />
  <span className="text-[#ff403a]"> Questions </span>
</h2>
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

                  <h3 className="text-white text-[16px] md:text-xl font-medium pr-5">
                    {item.question}
                  </h3>

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

                    <p className="text-[#FFFFFF] text-[12px] md:text-[14px] leading-relaxed px-6 pb-6 text-sm md:text-base">
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
  
    </div>
  )
}

export default page
