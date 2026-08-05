
"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import BookACallButton from '@/component/BookACall/BookACallButton';
import Claritysection from '../../component/claritypagesection/Claritysection';
import FAQSection from '../../component/Faq/Faqsection';
import SuccessStories from '../../component/SuccessStories/SuccessStories';
import { clarityFaqData } from '@/section/Clarity/clarityFaqData';
import { claritySuccessStories } from '@/section/Clarity/claritySuccessStoriesData';
import { prebuiltPlugins } from '@/section/Clarity/prebuiltPluginsData';

const services = [
  {
    label: "Implementation Services",
    image: "/images/11.svg",
    href: "/clarity/services/implementation",
  },
  {
    label: "Installation & Upgrades",
    image: "/images/12.svg",
    href: "/clarity/services/installations-upgrades",
  },
  {
    label: "Integration Services",
    image: "/images/14.svg",
    href: "/clarity/services/integration",
  },
  {
    label: "Technical Development",
    image: "/images/15.svg",
    href: "/clarity/services/technical-development",
  },
  {
    label: "Staff Augmentation",
    image: "/images/new16.svg",
    href: "/clarity/services/staff-augmentation",
  },
  {
    label: "Support & Maintenance",
    image: "/images/17.svg",
    href: "/clarity/services/support-maintenance",
  },
  {
    label: "User Trainings",
    image: "/images/18.svg",
    href: "/clarity/services/user-tranings",
    breakLabel: true,
  },
  {
    label: "Reports & Dashboards",
    image: "/images/19.svg",
    href: "/clarity/services/clarity-reporting-dashboard-services",
  },
];

const benefits = [
  {
    title: "Improve Visibility",
    description: "Gain real-time insights across your portfolio and projects.",
    icon: "/images/20.png",
    gradient: "from-cyan-500/30 via-blue-900/40 to-black",
  },
  {
    title: "Optimize Resources",
    description: "Allocate the right resources to the right projects.",
    icon: "/images/21.png",
    gradient: "from-slate-500/30 via-slate-800/40 to-black",
  },
  {
    title: "Increase Efficiency",
    description: "Streamline processes & deliver projects on time.",
    icon: "/images/22.png",
    gradient: "from-orange-500/30 via-zinc-800/40 to-black",
  },
  {
    title: "Maximize ROI",
    description: "Make smarter decisions & drive better business outcomes.",
    icon: "/images/23.png",
    gradient: "from-amber-500/30 via-yellow-900/40 to-black",
  },
];

 function page() {
    const [activeTab, setActiveTab] = useState("services");
   return (
    <div>
      <section className="relative mt-20 h-[300px] overflow-hidden md:h-[450px]">
        <img
          src="/images/clarity-hero.png"
          alt="Clarity by Broadcom"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center gap-5 px-6 md:gap-7 md:px-16">
          <h1 className="m-0 leading-none text-white">
            <span className="block text-[2.75rem] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Clarity
              <sup className="ml-0.5 align-super text-[0.42em] font-bold leading-none">
                ™
              </sup>
            </span>
            <span className="mt-1.5 block text-xl font-medium tracking-wide text-white sm:text-2xl md:text-[1.75rem]">
              by Broadcom
            </span>
          </h1>

          <BookACallButton className="inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 md:text-[20px]">
            Get started with Clarity
          </BookACallButton>
        </div>
      </section>

    <section className="w-full overflow-hidden bg-black px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center md:mb-8">
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-[40px]">
            Transform Project Portfolio Management with{" "}
            <span className="text-[#FF403A]">Clarity</span>
          </h1>
        </div>

        <div className="mx-auto max-w-5xl space-y-4 md:space-y-5">
          <p className="text-justify text-[13px] font-normal leading-[1.7] text-[#E5E5E5] md:text-[16px]">
            Clarity, part of the ValueOps domain by Broadcom, is a leader in
            Project & Portfolio Management solutions. It helps organizations
            bring strategy, investment, and delivery into one connected system —
            so teams can prioritize the right work and move faster with clarity.
          </p>

          <p className="text-justify text-[13px] font-normal leading-[1.7] text-[#E5E5E5] md:text-[16px]">
            The enterprise software is packed with a wide range of features that
            support organizations from strategic planning & tracking to managing
            ideas, projects & resources centrally. With Albatroz as your
            implementation partner, you get practical guidance, proven delivery,
            and lasting adoption across your Clarity journey.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-[40px] font-semibold text-white mb-8">
          Comprehensive Clarity Services{" "}
          <span className="text-[#FF403A]">& Integrations</span>
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-0 mb-12">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-8 py-3 text-[20px] font-semibold tracking-wide  cursor-pointer transition-colors ${
              activeTab === "services"
                ? "bg-[#FF403A] text-white"
                : "bg-[#1a1a1d] text-gray-300 hover:bg-[#222226]"
            }`}
          >
            SERVICES
          </button>
          <button
            onClick={() => setActiveTab("plugins")}
            className={`px-8 py-3 text-[20px] font-semibold tracking-wide transition-colors cursor-pointer ${
              activeTab === "plugins"
                ? "bg-[#FF403A] text-white"
                : "bg-[#1a1a1d] text-gray-300 hover:bg-[#222226]"
            }`}
          >
            PREBUILT PLUGINS
          </button>
        </div>

        {/* Icon grid with dividers */}
        {activeTab === "services" && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, index) => {
            const isLastInRow4 = (index + 1) % 4 === 0;
            const isLastOverall = index === services.length - 1;

            return (
              <Link
                key={service.label}
                href={service.href}
                className={`group flex flex-col items-center text-center gap-3 px-4 py-8 border-white/10 transition-colors hover:bg-white/[0.04]
                  ${!isLastInRow4 && !isLastOverall ? "md:border-r" : ""}
                  ${index < 4 ? "border-b" : ""}
                `}
              >
                <img
                  src={service.image}
                  alt={service.label}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-[22px] text-[#FFFFFF] leading-snug max-w-[120px] transition-colors group-hover:text-[#FF403A]">
                  {service.breakLabel ? (
                    <>
                      User
                      <br />
                      Trainings
                    </>
                  ) : (
                    service.label
                  )}
                </p>
              </Link>
            );
          })}
        </div>
        )}

        {activeTab === "plugins" && (
        <div className="grid grid-cols-2 md:grid-cols-4">
          {prebuiltPlugins.map((plugin, index) => {
            const isLastInRow4 = (index + 1) % 4 === 0;
            const isLastOverall = index === prebuiltPlugins.length - 1;

            return (
              <Link
                key={plugin.slug}
                href={`/clarity/plugins/${plugin.slug}`}
                className={`group flex flex-col items-center gap-3 px-4 py-8 text-center transition-colors hover:bg-white/[0.04]
                  ${!isLastInRow4 && !isLastOverall ? "md:border-r border-white/10" : ""}
                `}
              >
                <img
                  src={plugin.tabIcon}
                  alt={plugin.tabLabel}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <p className="max-w-[160px] text-[17px] leading-snug text-[#FFFFFF] transition-colors group-hover:text-[#FF403A] md:text-[22px]">
                  {plugin.tabLabel}
                </p>
              </Link>
            );
          })}
        </div>
        )}
      </div>
    </section>
    <section className="bg-black py-9 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-[40px] font-bold text-white mb-10">
          Benefits of <span className="text-[#FF403A]">Implementing Clarity</span>
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex flex-col">
              
                <img src={benefit.icon} />
                {/* Text */}
                <h4 className="text-[#FF403A] font-semibold text-[14px] md:text-[20px] mt-2 mb-0">
                  {benefit.title}
                </h4>
                <p className="font-normal text-[#FFFFFF] text-[10px] md:text-[16px] leading-snug">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <Claritysection />
    <SuccessStories stories={claritySuccessStories} />
    <FAQSection faqs={clarityFaqData} />
    </div>
  )
}

export default page