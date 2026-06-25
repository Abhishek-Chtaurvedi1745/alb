
"use client"
import React from 'react'
import { useState } from 'react';
import { Target, Activity, TrendingUp, Coins } from "lucide-react";

import {
  Settings,
  Cog,
  Monitor,
  Puzzle,
  Code2,
  Users,
  Headset,
  GraduationCap,
  BarChart3,
} from "lucide-react";
import Claritysection from '../../component/claritypagesection/Claritysection';
import FAQSection from '../../component/Faq/Faqsection';

const services = [
  {
    icon: Settings,
    label: "Implementation Services",
    image: "/images/11.svg",
  },
  {
    icon: Cog,
    label: "Installation & Upgrades",
    image: "/images/12.svg",
  },
  {
    icon: Monitor,
    label: "Migration to Modern UX",
    image: "/images/13.svg",
  },
  {
    icon: Puzzle,
    label: "Integration Services",
    image: "/images/14.svg",
  },
  {
    icon: Code2,
    label: "Technical Development",
    image: "/images/15.svg",
  },
  {
    icon: Users,
    label: "Staff Augmentation",
    image: "/images/new16.svg",
  },
  {
    icon: Headset,
    label: "Support & Maintenance",
    image: "/images/17.svg",
  },
  {
    icon: GraduationCap,
    label: "User Trainings",
    image: "/images/18.svg",
  },
  {
    icon: BarChart3,
    label: "Reports & Dashboards",
    image: "/images/19.svg",
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
          <img src="/images/climg1.svg" />
          <button className="px-6 py-3 bg-[#FF403A] transition text-[#FFFFFF] text-[25px] mt-[28px] font-semibold cursor-pointer rounded-lg">
Request a free demo
          </button>
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

            <button className="mt-8 bg-[#FF403A] transition px-8 py-4 rounded-xl font-semibold shadow-lg shadow-red-500/30 cursor-pointer">
              Get Free Consultation
            </button>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLastInRow5 = (index + 1) % 5 === 0;
            const isLastOverall = index === services.length - 1;

            return (
              <div
                key={service.label}
                className={`flex flex-col items-center text-center gap-3 px-4 py-8 border-white/10
                  ${!isLastInRow5 && !isLastOverall ? "sm:border-r" : ""}
                  ${index < 5 ? "border-b sm:border-b md:border-b" : ""}
                `}
              >
                <img src={service.image} />
                <p className="text-[22px] text-[#FFFFFF] leading-snug max-w-[120px]">
                  {service.label}
                </p>
              </div>
            );
          })}
        </div>
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
    <FAQSection />
    </div>
  )
}

export default page