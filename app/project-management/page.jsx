"use client";
import React from 'react'
import Link from "next/link";
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
      <section className="relative mt-20 h-[300px] overflow-hidden md:h-[450px]">
        <img
          src="/images/ppm-hero.png?v=2"
          alt="Project Portfolio Management"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-start justify-center gap-4 px-6 md:gap-6 md:px-16">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-[40px]">
            Manage Less. Govern More.{" "}
            <span className="text-[#FF403A] md:whitespace-nowrap">
              Deliver What Matters.
            </span>
          </h1>

          <p className="max-w-2xl text-sm font-normal text-white/90 md:text-[16px]">
            The best-run portfolios aren&apos;t just organised — they&apos;re
            aligned. Albatroz transforms your project and portfolio management
            practices to bring maturity, discipline, and real-time strategic
            insight to every layer of your organisation.
          </p>

          <BookACallButton className="inline-flex items-center justify-center rounded-lg border-2 border-[#FF403A] bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#FF403A] md:text-[18px]">
            Talk to our team
          </BookACallButton>
        </div>
      </section>
    <section className="bg-black px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h1 className="mb-3 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[40px]">
            Transformative Benefits of{" "}
            <span className="text-[#e02b20]">Implementing PPM</span>
          </h1>
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
        <h1 className="mb-12 text-center text-[32px] font-bold leading-tight text-white md:text-[40px]">
          Engage with Albatroz{" "}
          <span className="text-[#FF403A]">for PPM Solutions</span>
        </h1>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">

          {/* ── Left: PPM Wheel ── */}
          <div className="relative shrink-0 bg-black">
            <img
              src="/images/ppm-solution.png?v=3"
              alt="PPM Solution — strategic alignment, resource optimization, performance management, real-time visibility, risk and issue management, and continuous improvement"
              className="h-[300px] w-auto max-w-full object-contain mix-blend-screen md:h-[480px]"
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
                <Link
                  href="/clarity"
                  className="transition-opacity hover:opacity-80"
                >
                  <p className="text-[26px] font-black leading-none tracking-tight text-white">
                    Clarity<sup className="align-super text-[10px] font-normal">™</sup>
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/50">by Broadcom</p>
                </Link>
                <Link
                  href="/rally"
                  className="transition-opacity hover:opacity-80"
                >
                  <p className="text-[26px] font-black leading-none tracking-tight text-white">
                    Rally<sup className="align-super text-[10px] font-normal">®</sup>
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/50">by Broadcom</p>
                </Link>
                <Link
                  href="/connectall"
                  className="transition-opacity hover:opacity-80"
                >
                  <p className="text-[26px] font-black leading-none tracking-tight text-white">
                    ConnectALL
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/50">by Broadcom</p>
                </Link>
              </div>

              <BookACallButton className="inline-flex items-center justify-center rounded-lg border-2 border-[#FF403A] bg-black px-7 py-2.5 text-base font-semibold text-[#FF403A] transition-all duration-200 hover:bg-[#FF403A] hover:text-white md:text-[18px]">
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

              <BookACallButton className="inline-flex items-center justify-center rounded-lg border-2 border-[#FF403A] bg-black px-7 py-2.5 text-base font-semibold text-[#FF403A] transition-all duration-200 hover:bg-[#FF403A] hover:text-white md:text-[18px]">
                Book Free Consultation
              </BookACallButton>
            </div>

          </div>
        </div>
      </div>
    </section>
<section className="bg-black px-6 pt-10 pb-6 text-white md:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center md:mb-16">
          <h1 className="text-3xl font-semibold md:text-[40px]">
            Modern PPM Solutions:
            <span className="text-[#FF403A]"> Comprehensive Features</span>
          </h1>
        </div>

        {/* Strategic Portfolio Management */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 md:p-8">
            <h4 className="mb-4 text-2xl font-semibold md:text-[35px]">
              Strategic Portfolio{" "}
              <span className="text-[#FF403A]">Management</span>
            </h4>
            <p className="mb-6 text-[13px] font-normal leading-relaxed text-white md:text-sm">
              Strategic Portfolio Management involves the oversight and
              management of an organization&apos;s portfolio of projects and
              initiatives. Its primary focus is on aligning projects with
              strategic goals and maximizing business value.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-black/50 p-4 transition-colors hover:border-[#FF403A]/40"
                >
                  <div className="mb-2 flex items-start gap-2.5">
                    <img src="/images/crt.svg" alt="" className="mt-0.5 h-4 w-4 shrink-0" />
                    <p className="text-[13px] leading-relaxed text-white">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <BlendedSectionImage
              src="/images/ppm-strategic-portfolio.png?v=1"
              alt="Strategic Portfolio Management dashboard"
              fade="left"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden bg-black px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative order-1 overflow-hidden rounded-2xl border border-white/10 lg:order-1">
            <BlendedSectionImage
              src="/images/ppm-digital-product.png?v=1"
              alt="Digital Product Management workspace"
              fade="right"
              animate
            />
          </div>

          <div className="order-2 rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 md:p-8 lg:order-2">
            <h3 className="mb-4 text-2xl font-semibold text-white md:text-[35px]">
              Digital Product <span className="text-[#FF403A]">Management</span>
            </h3>
            <p className="mb-6 text-[13px] font-normal leading-relaxed text-white md:text-sm">
              Digital Product Management involves overseeing the development,
              enhancement, and management of digital products or services
              offered by a company. This includes:
            </p>
            <div className="space-y-3">
              {features1.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-black/50 p-4 transition-colors hover:border-[#FF403A]/40"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src="/images/crt.svg"
                      alt=""
                      className="mt-1 h-4 w-4 shrink-0"
                    />
                    <p className="text-[13px] leading-relaxed md:text-sm">
                      <span className="font-medium text-[#FF403A]">
                        {item.title}
                      </span>
                      <span className="font-normal text-white">
                        : {item.desc}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden bg-black px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 md:p-8 lg:order-1">
            <h3 className="mb-4 text-2xl font-semibold text-white md:text-[35px]">
              Value Stream <span className="text-[#FF403A]">Management</span>
            </h3>
            <p className="mb-6 text-[13px] font-normal leading-relaxed text-white md:text-sm">
              Value Stream Management (VSM) involves optimizing the entire flow
              of work across an organization to deliver value to customers
              efficiently. It encompasses
            </p>
            <div className="space-y-3">
              {features2.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-black/50 p-4 transition-colors hover:border-[#FF403A]/40"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src="/images/crt.svg"
                      alt=""
                      className="mt-1 h-4 w-4 shrink-0"
                    />
                    <p className="text-[13px] leading-relaxed md:text-sm">
                      <span className="font-medium text-[#FF403A]">
                        {item.title}
                      </span>
                      <span className="font-normal text-white">
                        : {item.desc}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 overflow-hidden rounded-2xl border border-white/10 lg:order-2">
            <BlendedSectionImage
              src="/images/ppm-value-stream.png?v=1"
              alt="Value Stream Management analytics"
              fade="left"
            />
          </div>
        </div>
      </div>
    </section>
  
    </div>
  )
}

export default page
