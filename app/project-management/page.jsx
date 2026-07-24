"use client";
import React from 'react'
import BookACallButton from "@/component/BookACall/BookACallButton";
import PPMBenefitHoverCard from "@/section/ProjectManagement/PPMBenefitHoverCard";
import { ppmBenefits } from "@/section/ProjectManagement/ppmBenefitsData";
import BlendedSectionImage from "@/component/Media/BlendedSectionImage";

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
  return (
    <div>
      <section className="mt-[83px] bg-black px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:gap-10">

        <div className="w-full">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-[45px]">
            Project Portfolio{" "}
            <span className="text-[#FF403A]">
              <br />
              secure AI into your PMO?
            </span>
          </h1>

          <p className="font-normal mb-6 text-sm text-white sm:text-sm md:text-[16px]">
            From portfolio planning to automation and analytics, we help
            organizations manage work with structure, visibility and control.
          </p>
          <p className="text-lg text-white uppercase sm:text-[24px]">Talk to Our Team</p>
        </div>

        <div className="w-full">
          <BlendedSectionImage
            src="/images/ppm.png"
            alt="Project Portfolio Management"
            fade="all"
          />
        </div>

      </div>
    </section>
    <section className="bg-black px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h3 className="mb-3 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[40px]">
            Transformative Benefits of{" "}
            <span className="text-[#e02b20]">Implementing PPM</span>
          </h3>
          <p className="mx-auto max-w-3xl text-sm font-medium leading-relaxed text-white sm:text-sm md:text-[16px] lg:text-[13px]">
            Implementing modern Project and Portfolio Management (PPM) practices
            can yield several transformative benefits for organizations. Here are
            some key advantages
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          {ppmBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={
                index === ppmBenefits.length - 1 ? "lg:col-start-2" : undefined
              }
            >
              <PPMBenefitHoverCard benefit={benefit} />
            </div>
          ))}
        </div>

      </div>
    </section>
  
    <section className="relative z-0 overflow-hidden bg-black px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h3 className="mb-12 text-center text-[32px] font-bold leading-tight text-white md:text-[40px]">
          Engage with Albatroz{" "}
          <span className="text-[#FF403A]">for PPM Solutions</span>
        </h3>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">

          {/* ── Left: PPM Wheel ── */}
          <div className="relative shrink-0">
            <img
              src="/images/nbnew2.png"
              alt="PPM Solutions"
              className="h-[300px] rounded-full object-contain md:h-[480px]"
            />
          </div>

          {/* ── Right: Content ── */}
          <div className="relative flex flex-1 flex-col gap-8">

            {/* Interactive PPM Demos */}
            <div>
              <div className="mb-4 flex items-center gap-3">
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
                <h4 className="text-[30px] font-semibold text-white">Interactive PPM Demos</h4>
              </div>

              {/* Tool logos */}
              <div className="mb-5 flex items-end gap-6 pl-1">
                <div>
                  <p className="text-[26px] font-black leading-none tracking-tight text-white">
                    Clarity<sup className="align-super text-[10px] font-normal">™</sup>
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/50">by Broadcom</p>
                </div>
                <div>
                  <p className="text-[26px] font-black leading-none tracking-tight text-white">
                    Rally<sup className="align-super text-[10px] font-normal">®</sup>
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/50">by Broadcom</p>
                </div>
                <div>
                  <p className="text-[26px] font-black leading-none tracking-tight text-white">
                    ConnectALL
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/50">by Broadcom</p>
                </div>
              </div>

              <BookACallButton className="rounded-sm bg-[#FF403A] px-7 py-2.5 text-[20px] font-semibold text-white transition-colors duration-200 hover:bg-[#cc2f2a]">
                Request a Demo
              </BookACallButton>
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
                <h4 className="text-white text-[30px] font-semibold">Expert PPM Consultations</h4>
              </div>

              <p className="font-normal text-white text-[13px] leading-relaxed mb-5 pl-1">
                Leverage expert PPM consultation to address business challenges
                and maximize the value of your PPM investments.
              </p>

              <BookACallButton className="bg-[#FF403A] hover:bg-[#cc2f2a] transition-colors duration-200 text-white text-[20px] font-semibold px-7 py-2.5 rounded-sm">
                Book Free Consultation
              </BookACallButton>
            </div>

          </div>
        </div>
      </div>
    </section>
<section className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-[45px] font-semibold">
            Modern PPM Solutions:
            <span className="text-[#FF403A]">
              {" "}Comprehensive Features
            </span>
          </h3>
          <div className="w-full h-px bg-gray-800 mt-8"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-0 items-center">

          {/* Left Side */}
          <div>
            <h4 className="text-2xl md:text-[35px] font-semibold mb-6">
              Strategic Portfolio{" "}
              <span className="text-red-500">Management</span>
            </h4>

            <p className="font-normal text-[#FFFFFF] text-[13px] leading-relaxed mb-8">
              Strategic Portfolio Management involves the oversight and
              management of an organization's portfolio of projects and
              initiatives. Its primary focus is on aligning projects with
              strategic goals and maximizing business value.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <img src="/images/crt.svg" alt="" />
                  <p className="text-[#FFFFFF] text-[13px] font-regular leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <BlendedSectionImage
              src="/images/newcrt.png"
              alt="Strategic Portfolio"
              fade="left"
            />
          </div>

        </div>
      </div>
    </section>
    <section className="overflow-hidden bg-black px-4 pt-10 sm:px-6 md:pt-14">
  <div className="mx-auto max-w-[1600px]">

    <div className="grid items-center gap-8 lg:grid-cols-[55%_45%] lg:gap-10">

      {/* LEFT IMAGE */}
      <div className="relative">
        <BlendedSectionImage
          src="/images/crt1.png"
          alt="Digital Product Management"
          fade="right"
          animate
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="pt-2 lg:pr-8 xl:pr-[50px]">

        <h3 className="text-2xl md:text-[35px] font-semibold text-white mb-5">
          Digital Product{" "}
          <span className="text-[#FF403A]">
            Management
          </span>
        </h3>

        <p className="font-normal text-[#FFFFFF] text-[13px] leading-relaxed mb-8">
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
                <h4 className="text-[#FF403A] text-[18px] font-medium inline">
                  {item.title}
                  <span className="text-white font-normal">
                    : {item.desc}
                  </span>
                </h4>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>
 <section className="overflow-hidden bg-black px-4 py-10 pt-16 sm:px-6 md:pt-20">
  <div className="mx-auto max-w-[1600px]">

    <div className="grid items-center gap-8 lg:grid-cols-[45%_55%] lg:gap-10">

      {/* LEFT CONTENT */}
      <div className="order-2 pt-2 lg:order-1 lg:pl-8 xl:pl-[50px]">

        <h3 className="text-2xl md:text-[35px] font-semibold text-white mb-5">
          Value Stream {" "}
          <span className="text-[#FF403A]">
            Management
          </span>
        </h3>

        <p className="font-normal text-[#FFFFFF] text-[13px] leading-relaxed mb-8">
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
                <h4 className="text-[#FF403A] text-[18px] font-medium inline">
                  {item.title}
                  <span className="text-white font-normal">
                    : {item.desc}
                  </span>
                </h4>
              </div>
            </div>
          ))}

        </div>

        <BookACallButton className="mt-8 bg-[#FF403A] hover:bg-[#cc2f2a] transition-colors duration-200 text-white text-[18px] md:text-[20px] font-semibold px-7 py-2.5 rounded-sm">
          Book Free Consultation
        </BookACallButton>

      </div>

      <div className="relative order-1 lg:order-2">
        <BlendedSectionImage
          src="/images/newcrt1.png"
          alt="Value Stream Management"
          fade="left"
        />
      </div>

    </div>

  </div>
</section>
  <section className="bg-black text-white py-6 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Section: Button aligned right */}
       <div className="flex mb-0" style={{ justifyContent: 'center' }}>
          <BookACallButton className="bg-[#FF3B30] hover:bg-[#E03126] text-white font-semibold py-3 px-8 text-lg rounded-sm transition-colors duration-200 shadow-lg cursor-pointer">
            Book free Consultation
          </BookACallButton>
        </div>

        {/* Line divider directly beneath the button */}
        {/* <hr className="border-t border-gray-800 mb-10 w-full" /> */}

        {/* Content Paragraph */}
        {/* <p className="text-center text-[#FFFFFF] text-sm md:text-sm leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
          These management areas often intersect and complement each other, especially 
          in organizations aiming for digital transformation or seeking to enhance their 
          agility and competitiveness in today's rapidly evolving business landscape. 
          Integrating these practices can lead to more streamlined operations, improved 
          decision-making, and ultimately, better outcomes for the organization.
        </p>
         */}
      </div>
    </section>
  
    </div>
  )
}

export default page
