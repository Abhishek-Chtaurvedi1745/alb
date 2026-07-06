
"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Claritysection from '../../component/claritypagesection/Claritysection';
import FAQSection from '../../component/Faq/Faqsection';
import SuccessStories from '../../component/SuccessStories/SuccessStories';
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
    label: "Migration to Modern UX",
    image: "/images/13.svg",
    href: "/clarity/services/migration-to-modern-ux",
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
  },
  {
    label: "Reports & Dashboards",
    image: "/images/19.svg",
    href: "/clarity/services/clarity-reporting-dashboard-services",
  },
  {
    label: "Business Intelligence",
    image: "/images/md1.svg",
    href: "/clarity/services/business-intelligence",
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
        <section className="bg-[#000000] py-16 px-6 mt-[83px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

   
        <div className="w-full ">
          {/* <h2 className="text-3xl md:text-[45px] font-bold text-[#FFFFFF] mb-4">
            Clarity
          </h2>

          
          <p className="text-[#FFFFFF] text-upercase text-[24px]">Talk to Our Team</p> */}
          <img src="/images/climg1.svg" alt="Clarity" />
          <Link
            href="/contact-us"
            className="mt-[28px] inline-block rounded-lg bg-[#FF403A] px-6 py-3 text-[25px] font-semibold text-[#FFFFFF] transition hover:opacity-90"
          >
            Request a free demo
          </Link>
        </div>

      
        <div className="w-full flex justify-center">
          <img
            src="/images/climg.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full "
          />
        </div>

      </div>
    </section>
    <section className=" bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-[40px] font-semibold leading-tight">
              Transform Project
              <br />
              Portfolio Management
              <br />
              with <span className="text-[#FF403A]">Clarity</span>
            </h1>

            <p className="mt-6 text-[18px] text-[#FFFFFF] font-regular">
              Clarity, part of the ValueOps domain by Broadcom, is a leader in
              Project & Portfolio Management solutions.
            </p>

            <p className="mt-4 text-[18px] text-[#FFFFFF] font-regular">
              The enterprise software is packed with a wide range of features
              that support organizations from strategic planning & tracking to
              managing ideas, projects & resources centrally.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-block rounded-xl bg-[#FF403A] px-8 py-4 font-semibold shadow-lg shadow-red-500/30 transition hover:opacity-90"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Right Dashboard */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-purple-500/20 to-blue-500/30 blur-3xl rounded-3xl"></div>

            <img src="/images/newcl.png" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-[40px] font-semibold text-white mb-8">
          Comprehensive Clarity Services{" "}
          <span className="text-[#FF403A]">& Integrations</span>
        </h2>

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {services.map((service, index) => {
            const isLastInRow5 = (index + 1) % 5 === 0;
            const isLastOverall = index === services.length - 1;

            return (
              <Link
                key={service.label}
                href={service.href}
                className={`group flex flex-col items-center text-center gap-3 px-4 py-8 border-white/10 transition-colors hover:bg-white/[0.04]
                  ${!isLastInRow5 && !isLastOverall ? "sm:border-r" : ""}
                  ${index < 5 ? "border-b sm:border-b md:border-b" : ""}
                `}
              >
                <img
                  src={service.image}
                  alt={service.label}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-[22px] text-[#FFFFFF] leading-snug max-w-[120px] transition-colors group-hover:text-[#FF403A]">
                  {service.label}
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
                <p className="max-w-[160px] text-[20px] leading-snug text-[#FFFFFF] transition-colors group-hover:text-[#FF403A] md:text-[22px]">
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
        <h2 className="text-center text-3xl md:text-[40px] font-bold text-white mb-10">
          Benefits of <span className="text-[#FF403A]">Implementing Clarity</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex flex-col">
              
                <img src={benefit.icon} />
                {/* Text */}
                <h3 className="text-[#FF403A] font-semibold text-[14px] md:text-[20px] mt-2 mb-0">
                  {benefit.title}
                </h3>
                <p className="text-[#FFFFFF] text-[10px] md:text-[16px] leading-snug">
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
    <FAQSection />
    </div>
  )
}

export default page