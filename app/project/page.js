"use client"
import React from 'react'
import Number from "@/component/Number/Number"
import { Check } from "lucide-react";


import { Play, BriefcaseBusiness, ChevronRight } from "lucide-react";
import FAQSection from '../../component/Faq/Faqsection';

const features = [
  "Aligns IT initiatives with business goals and priorities.",
  "Optimizes strategic portfolio management and resource allocation.",
  "Helps organizations manage risks and improve decision-making.",
  "Enhances project visibility and operational efficiency.",
];
const solutions = [
  {
    icon: <Play size={20} />,
    title: "Interactive PPM Demos",
    description:
      "Request a personalized demonstration of enterprise PPM solutions such as Broadcom’s Clarity and Planview to witness firsthand how it can revolutionize your PPM strategy.",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    title: "Expert PPM Consultations",
    description:
      "Discuss your specific business challenges and PPM needs with our subject matter experts and explore ways to overcome those challenges, training needs, improve adoption of your PPM solution, etc.",
    extra:
      "Are you struggling with maximizing the value out of your PPM investment? Whatever your business challenge may be to enhance product development, reporting and analytics integration, rolling out a new feature, scaling the implementation to other units in your organization, automate business workflows, etc, Our team of expert PPM consultants are here to help.",
  },
];
const benefits = [
  {
    title: "Enhanced Project Prioritization & Alignment",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Improved Decision Making & Visibility",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Resource Optimization & Capacity Planning",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Adaptability to Agile & Hybrid Methodologies",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cost Control & Budget Management",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Enhanced Collaboration & Communication",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Risk Mitigation & Issue Management",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Faster Time-to-Market & Delivery",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Strategic Portfolio Optimization",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Continuous Improvement & Adaptation",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];


function page() {
  return (
    <div>
        <section className="bg-[#000000] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Side */}
        <div className="w-full ">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#FFFFFF] mb-4">
            Built to Bring Structure <span className="text-[#FF403A]"> <br /> 
to Complex Work</span>
          </h2>

          <p className="text-[20px] text-[#FFFFFF] mb-6">
            We help organizations manage projects, streamline
processes, and make better decisions through clear
systems and practical execution.
          </p>
          <p className="text-[#FFFFFF] text-upercase text-[24px]">Talk to Our Team</p>
          <button className="px-6 py-3 bg-[#FF403A] transition text-[#FFFFFF] text-[25px] font-semibold cursor-pointer">
Get Started
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full flex justify-center">
          <img
            src="/images/abt.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full  object-cover"
          />
        </div>

      </div>
    </section>
    <Number />
    <div className='flex bg-black'>
    <div className='bg-black max-w-7xl px-4 mx-auto text-[#FFFFFF]'>
        <p className='text-[20px] font-regular text-center'>
            Welcome to Albatroz Solutions, a vanguard in delivering Project and Portfolio Management (PPM) solutions,
with deep expertise on market leading enterprise software in this domain such as Broadcom’s Clarity, Planview,
etc.. We offer cutting-edge solutions designed to streamline your strategic portfolio management, demand
management and project management processes, optimize resource allocation within your organization
using the power of these enterprise solutions.
        </p>
    </div>
    </div>
     <section className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[4px] text-[#FFFFFF] mb-4">
            Modern Project & Portfolio Management
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Solutions:
            <span className="text-[#ff403a]"> Comprehensive Features</span>
          </h2>

          <div className="w-32 h-[2px] bg-[#ff403a] mx-auto mt-6"></div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-[45px] text[#FFFFFF] font-semibold mb-6">
              Strategic Portfolio Management
            </h3>

            <p className="text-[#ffffff] text-[20px] leading-8 mb-8">
              Strategic Portfolio Management involves the oversight and
              management of an organization’s portfolio of projects and
              programs. It ensures that resources are aligned with strategic
              goals and objectives while maximizing overall business value.
            </p>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="min-w-[22px] h-[22px] rounded-full bg-[#ff403a] flex items-center justify-center mt-1">
                    <Check size={14} />
                  </div>

                  <p className="text-[#ffffff] text-[20px] leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          

         
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] '>
            <div>

            </div>
         <div>
            <h3 className="text-[45px] font-semibold mb-6 text-[#FFFFFF]">
              Strategic Portfolio Management
            </h3>

            <p className="text-[#ffffff] text-[20px] leading-8 mb-8">
              Strategic Portfolio Management involves the oversight and
              management of an organization’s portfolio of projects and
              programs. It ensures that resources are aligned with strategic
              goals and objectives while maximizing overall business value.
            </p>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="min-w-[22px] h-[22px] rounded-full bg-[#ff403a] flex items-center justify-center mt-1">
                    <Check size={14} />
                  </div>

                  <p className="text-[#FFFFFF] text-[20px] leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
            <div className='mt-15 grid grid-cols-1 md:grid-cols-[1.2fr_0.2fr] '>
            
         <div>
            <h3 className="text-[45px] font-semibold mb-6">
              Strategic Portfolio Management
            </h3>

            <p className="text-[#FFFFFF] text-[20px] leading-8 mb-8">
              Strategic Portfolio Management involves the oversight and
              management of an organization’s portfolio of projects and
              programs. It ensures that resources are aligned with strategic
              goals and objectives while maximizing overall business value.
            </p>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="min-w-[22px] h-[22px] rounded-full bg-[#ff403a] flex items-center justify-center mt-1">
                    <Check size={14} />
                  </div>

                  <p className="text-[#FFFFFF] text-[20px] leading-7 ">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
                
            </div>
          </div>
      </div>
    </section>

    <section className="w-full bg-black text-white py-20 px-4 overflow-hidden relative">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Transformative Benefits of{" "}
            <span className="text-[#ff3b30]">
              implementing PPM
            </span>
          </h2>

          <p className="text-[#FFFFFF] text-sm md:text-base max-w-4xl mx-auto mt-5 leading-7">
            Implementing modern Project and Portfolio Management (PPM)
            practices can yield several transformative benefits for
            organizations.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10 max-w-7xl">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="group"
            >
              
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl mb-5">
                <img
                  src="images/lk.svg"
                  alt=""
                  className="group-hover:scale-110 transition-all duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* TITLE */}
              <h3 className="text-[25px] text-[#FFFFFF] font-medium leading-8">
                {item.title}
              </h3>

              {/* LINE */}
              <div className="w-20 h-[1px] bg-[#ff3b30] mt-4 mb-3"></div>

              {/* BUTTON */}
              <button className="text-[#ff3b30] text-[18px] text-sm hover:tracking-wide transition-all duration-300 cursor-pointer">
                View More
              </button>
            </div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-7">
          <p className="text-[#FFFFFF] text-[18px] leading-8  md:text-base max-w-7xl">
            Implementing modern PPM practices isn’t just about adopting new tools; it’s about transforming the organization’s project
management approach to be more strategic, data-driven, and responsive to change. The benefits extend beyond
individual projects, influencing the organization’s overall efficiency, competitiveness, and ability to achieve its long-term goals..
          </p>
        </div>
      </div>
    </section>
     <section className="w-full bg-black text-white py-20 px-4 relative overflow-hidden">
      
      {/* RIGHT BORDER */}
      <div className="absolute top-0 right-6 h-full w-[1px] bg-[#ff403a]"></div>

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Engage with Albatroz for{" "}
            <span className="text-[#ff403a]">
              PPM Solutions
            </span>
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT BUTTON */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#ff403a] hover:bg-[#ff2c24] transition-all duration-300 text-white px-10 py-4 rounded-md flex items-center gap-2 text-xl font-semibold shadow-lg">
              SERVICES
              <ChevronRight size={22} />
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-12">

            {solutions.map((item, index) => (
              <div key={index}>

                {/* ICON + TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff403a] flex items-center justify-center text-white">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="pl-16">
                  <div className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#ff403a] mt-3"></span>

                    <p className="text-[#FFFFFF] leading-8">
                      {item.description}
                    </p>
                  </div>

                  {/* EXTRA BOX */}
                  {item.extra && (
                    <div className="mt-6 border border-dashed border-[#00bfff] p-5 rounded-lg">
                      <div className="flex gap-3 items-start">
                        <span className="w-2 h-2 rounded-full bg-[#ff403a] mt-3"></span>

                        <p className="text-[#FFFFFF] leading-8 text-sm">
                          {item.extra}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
        <FAQSection />
    </div>
  )
}

export default page