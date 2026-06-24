import WhatWeDo from "@/section/Home/WhatWeDo";
import HowWeWork from "@/section/Home/HowWeWork";
import { Handshake, Award, Settings, ShieldCheck, ThumbsUp,  ArrowUpRight, } from 'lucide-react';


// import {
//   Target,
//   BadgeCheck,
//   BarChart3,
//   Briefcase,
//   Cog,
//   Users,
//   Database,
//   Handshake,
//    ArrowUpRight,
// } from "lucide-react";

// // import {
// //   Lightbulb,
// //   Expand,
// //   Settings2,
// //   ArrowUpRight,
// // } from "lucide-react";

const features1 = [
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      text: "India's Dedicated Broadcom ValueOps & Automation Partner",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      text: "APAC's Most Certified Broadcom AOD Experts",
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      text: "APAC's Leading Stonebranch Reselling & Implementation Partner",
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-white" />,
      text: "Class-Leading Delivery Quality with a Decisive Cost Advantage",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      text: "Frictionless Engagement: Transparent, Agile, and Proven",
    },
  ];

const logos = [
    { src: "/images/brd.svg", alt: 'Broadcom' },
    { src: "/images/stb.svg", alt: 'Stonebranch', preserveColors: true },
    { src: "/images/hcl.svg", alt: 'HCLTech' },
    { src: "/images/ibm.svg", alt: 'IBM' },
    { src: "/images/iggt.svg", alt: 'Ignite Technology' },
  ];

function getPartnerLogoClassName(logo) {
  const base =
    "h-[20px] md:h-auto w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 w-24 md:w-auto";

  if (logo.preserveColors) {
    return base;
  }

  return `${base} brightness-0 invert`;
}

const features = [
  {
    icon: "images/sa.svg",
    title: "Strategy Approach",
  },
  {
    icon: "images/ce.svg",
    title: "Certified Experts",
  },
  {
    icon: "images/mi.svg",
    title: "Measurable Impact",
  },
  {
    icon: "images/de.svg",
    title: "Domain Expertise",
  },
  {
    icon: "images/cs.svg",
    title: "Custom Solutions",
  },
   {
    icon: "images/be.svg",
    title: "Businness Experienced",
  },
 
  {
    icon: "images/di.svg",
    title: "Data Intelligence",
  },
   {
    icon: "images/ep.svg",
    title: "Experienced Professionals",
  },
  {
    icon: "images/eep.svg",
    title: "End-to-End Partnership",
  },
  {
    icon: "images/tp.svg",
    title: "Trusted Partnership",
  },
];

function Middle() {
    const data = [
    {
      image:"/images/ic1.png",
      title: "Improve Visibility",
      text: "Gain real-time insights across your portfolio and projects.",
    },
    {
      image:"/images/ic2.png",
      title: "Optimize Resources",
      text: "Allocate the right resources to the right projects.",
    },
    {
      image:"/images/ic3.png",
      title: "Increase Efficiency",
      text: "DStreamline processes & deliver projects on time.",
    },
    {
      image:"/images/ic4.png",
      title: "Maximize ROI",
      text: "Make smarter decisions & drive better business outcomes.",
    },
  ];


  return (
    <>
    <WhatWeDo />
    {/* new Updated */}
    <section className="bg-black text-white py-10 px-6 overflow-hidden">
  <div className="mx-auto text-center">

    {/* Title */}
    <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight mb-0 md:mb-4">
      Partnership Built <span className="text-[#FF3B30]">On Trust</span>
    </h2>

    {/* Infinite Slider */}
    <div className="relative mt-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black to-transparent sm:w-16 md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black to-transparent sm:w-16 md:w-20" />

      <div className="partner-marquee flex w-max items-center">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex shrink-0 items-center justify-center px-8 md:px-12 lg:px-16"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={getPartnerLogoClassName(logo)}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
   <section className="bg-black text-white py-10 pb-4 md:pb-10 px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

    {/* Left Side */}
    <div className="lg:col-span-5 flex flex-col items-center text-center">

      {/* Image only on Desktop */}
      <div className="relative w-full rounded-lg overflow-hidden mb-6 group hidden lg:block">
        <img
          src="/images/asd.png"
          alt="People looking at neon question mark"
          className="w-full h-[350px] object-cover rounded-lg brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>
{/* 
      <p className="text-[16px] md:text-[20px] uppercase tracking-[0.2em] text-[#FFFFFF] mb-2">
        Questions Are Normal
      </p> */}

      <h3 className="text-xl md:text-[30px] font-semibold tracking-wide uppercase mb-1">
        Delivering Solutions
      </h3>

      <h3 className="text-xl md:text-[30px] font-semibold tracking-wide uppercase text-[#ff3b30] mb-6">
        Is Our Superpower
      </h3>

      <button className="-mb-4 inline-flex items-center gap-2 px-5 py-4 rounded-full border border-[#ff3b30] bg-transparent text-[20px] cursor-pointer hover:bg-[#ff3b30]/10 transition">
        <span className="text-[#ff3b30]">★</span>
        <span className="font-medium whitespace-nowrap">
          Smart Solutions. <span className="text-[#ff3b30]">Real Impact</span>
        </span>
      </button>
    </div>

    {/* Right Side */}
    <div className="lg:col-span-7 flex flex-col justify-center">

      <h2 className="text-2xl md:text-[45px] font-semibold tracking-tight mb-2">
        Why Albatroz <span className="text-[#ff3b30]">Solutions</span> ?
      </h2>

      <p className="text-sm md:text-base font-medium text-[#FFFFFF] mb-8">
        Purpose-driven solutions.
        <span className="text-[#ff3b30]"> Built around you.</span>
      </p>

      {/* Feature Box */}
      <div className="relative border border-[#ff3b30] rounded-2xl overflow-hidden">

        {/* Mobile Background Image */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src="/images/asd.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* Desktop Background */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-b from-neutral-900/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10">
          {features1.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 md:p-6 transition-colors duration-300 hover:bg-neutral-900/50 ${
                index !== features1.length - 1
                  ? "border-b border-[#ff3b30]"
                  : ""
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#ff3b30] bg-black flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                {feature.icon}
              </div>

              <div className="h-8 w-[1px] bg-[#FF3B30] mx-1 hidden sm:block"></div>

              <p className="text-sm md:text-[20px] font-semibold tracking-wide text-white leading-snug">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>
     {/* <section className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        
       
        <div className="text-center mb-12">
          <h2 className="text-[45px] font-bold text-[#FFFFFF] ">
            Benefits of <span className="text-[#FF403A]"> Implementing Clarity </span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              
            >
              <div className=" overflow-hidden rounded-xl transition duration-300">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full transition duration-500"
                />
              </div>

              
            </div>
            <div className="pt-5 text-left">
                <h3 className="text-[20px]  font-semibold text-[#FF403A]">
                  {item.title}
                </h3>
                <p className="text-[#FFFFFF] text-[16px] mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-[#000000] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

       
        <div className="w-full lg:w-[75%]">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#FFFFFF] mb-4">
           Discover how <span className="text-[#FF403A]"> 
 <br /> Rally by Broadcom </span>
          </h2>
          <p className="text-[20px] text-[#FFFFFF] mb-6">
            Rally by Broadcom is designed to improve your delivery
system, increase teamwork, and enhance the visibility of
your work. With tools that help you plan, prioritize, and
track tasks effectively, Rally keeps your business objectives,
the focus of everything.
          </p>
        </div>
       
        <div className="w-full flex justify-center">
          <img
            src="images/dh.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full  object-cover"
          />
        </div>
      </div>
    </section>
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
         
          <div className=" flex flex-col justify-center text-center">
            <div className="">
              
             
             
              <img
                src="images/as.png"
                alt="hand"
                className=" w-[520px]"
              />
            </div>
            <h5 className="text-[20px] font-regular text-[#FFFFFF]">QUESTIONS ARE NORMAL</h5>
            <h4 className="text-[30px] text-[#FFFFFF] font-semibold mt-2">DELIVERING SOLUTIONS</h4>
            <h5 className="text-[30px] text-[#FF403A] font-semibold">IS OUR SUPERPOWER</h5>
            <div className="flex justify-center">
           <button className="mt-5 px-6 py-3 rounded-full border border-[#ff403a] text-white hover:bg-red-600 transition rounded-full p-4 cursor-pointer">
                ✦ Smart Solutions. <span className="text-red-600"> Real Impact </span>
              </button>
            </div>

          </div>

       
          <div>
           
            <h2 className="text-[40px] font-semibold text-white mb-3">
              Why Albatroz{" "}
              <span className="text-[#ff403a]">Solutions</span>
            </h2>

            <p className="text-[#FFFFFF] mb-8">
              Purpose-driven solutions. Built around you.
            </p>

            <div className="border border-[#ff403a] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-5 py-5 border-b border-r border-[#ff403a]/50 last:border-b-0"
                  >
                    
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white shrink-0">
                      <img src={item.icon} alt="" />
                    </div>

                  
                    <h3 className="text-white text-sm font-medium">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="mt-8">
              <p className="text-[#FFFFFF] uppercase tracking-widest text-sm">
                Delivering Solutions
              </p>

              <h3 className="text-3xl font-bold text-white mt-2">
                IS OUR{" "}
                <span className="text-[#ff403a]">SUPERPOWER</span>
              </h3>

              
            </div>
          </div>

        </div>
      </div>
    </section> */}
    <HowWeWork />
    </>
  );
}

export default Middle;