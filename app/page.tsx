"use client"
import Image from "next/image";
import Middle from "../component/Middle/Middle"
import Abovefooter from "../section/Home/Abovefooter"
import { useEffect, useState, useRef } from "react";
import BannerSlider from "../component/banner/Banner"
import PlatformShowcase from "../section/Home/PlatformShowcase"

// const stats = [
//   {
//     number: "30+",
//     title: "Happy Customers",
//   },
//   {
//     number: "100+",
//     title: "Projects Delivered",
//   },
//   {
//     number: "25+",
//     title: "Subject Matter Experts",
//   },
//   {
//     number: "8+",
//     title: "Years in Business",
//   },
// ];

export default function Home() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  const [counts, setCounts] = useState({
    customers: 0,
    projects: 0,
    experts: 0,
    years: 0,
  });

  const stats = [
    {
      key: "customers",
      value: 30,
      suffix: "+",
      label: "Happy Customers",
    },
    {
      key: "projects",
      value: 100,
      suffix: "+",
      label: "Project Delivered",
    },
    {
      key: "experts",
      value: 25,
      suffix: "+",
      label: "Subject Matter Expert",
    },
    {
      key: "years",
      value: 8,
      suffix: "+",
      label: "Years in Business",
    },
  ];

  // Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count animation
  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const interval = 30;

    const steps = Math.floor(duration / interval);

    let current = {
      customers: 0,
      projects: 0,
      experts: 0,
      years: 0,
    };

    const timer = setInterval(() => {
      let finished = true;

      // stats.forEach((item) => {
      //   if (current[item.key] < item.value) {
      //     current[item.key] += Math.ceil(
      //       item.value / steps
      //     );

      //     if (current[item.key] > item.value) {
      //       current[item.key] = item.value;
      //     }

      //     finished = false;
      //   }
      // });

      setCounts({ ...current });

      if (finished) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [started]);

  return (
   <>
  
   <BannerSlider /> 
    {/* <section className="bg-[#000000] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

   
        <div className="w-full ">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#FFFFFF] mb-4">
            Ready to bring meaningful, <span className="text-[#FF403A]"><br />  
secure AI into your PMO? </span>
          </h2>

          <p className="text-[17px] text-[#FFFFFF] mb-6">
            From portfolio planning to automation and analytics,
we help organizations manage work with structure,
visibility and control.
          </p>
          <p className="text-[#FFFFFF] text-upercase text-[24px]">Talk to Our Team</p>
          <button className="px-6 py-3 bg-[#FF403A] transition text-[#FFFFFF] text-[25px] mt-[28px] font-semibold cursor-pointer rounded-lg">
Get my AI readiness report
          </button>
        </div>

      
        <div className="w-full flex justify-center">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1788262764/albatroz/ai.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full "
          />
        </div>

      </div>
    </section> */}
    <PlatformShowcase />
{/* <section className="bg-[#000000] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

      
        <div className="w-full lg:w-[75%]">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#FFFFFF] mb-4">
            Build Better <span className="text-[#FF403A]"> 
Outcomes, <br /> Not Just Projects. </span>
          </h2>

          <p className="text-[17px] text-[#FFFFFF] mb-6">
            From portfolio planning to automation and analytics,
we help organizations manage work with structure,
visibility and control.
          </p>
          <p className="text-[#FFFFFF] text-upercase text-[24px]">Talk to Our Team</p>
      
        </div>

       
        <div className="w-full flex justify-center">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1788262769/albatroz/ald.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full  object-cover"
          />
        </div>

      </div>
    </section> */}

 <section
  ref={sectionRef}
  className="relative overflow-hidden bg-black pt-3 md:pt-14 py-14 md:py-20"
>
  <div className="relative mx-auto max-w-7xl px-6">

    {/* Desktop Image */}
    <div className="absolute right-[-120px] top-1/2 hidden -translate-y-1/2 lg:block">
      <img
        src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263137/albatroz/nsimg.png"
        alt="Strategic Growth"
        className="w-[750px] max-w-none h-auto object-contain"
      />

      {/* Glow */}
      <div className="absolute inset-0 -z-10 " />
    </div>
    {/* Content */}
    <div className="relative z-10 max-w-3xl">

      <h1 className="text-3xl font-semibold text-white md:text-[40px]">
        An Established Partner.
      </h1>

      <h1 className="mt-3 text-3xl font-semibold text-[#FF403A] md:text-[40px]">
        A Strategic Cost Advantage.
      </h1>


      <p className="mt-6 max-w-xl text-base leading-relaxed text-[#FFFFFF] md:text-lg">
        As An Esteemed IT Services Firm Founded In 2018,
        We Bridge The Gap Between Exceptional Technical
        Execution And Cost-Effective Services For Enterprise
        Solutions.
      </p>


      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 gap-y-8 md:flex md:gap-0">

        {stats.map((item,index)=>(
          <div
            key={item.key}
            className={`
              px-4 md:px-6
              ${
                index !== stats.length - 1
                ? "md:border-r md:border-gray-700"
                : ""
              }
            `}
          >

            {/* <h3 className="text-3xl font-bold text-white md:text-5xl">
              {counts[item.key]}
              {item.suffix}
            </h3>

            <p className="mt-2 text-sm text-[#FFFFFF]">
              {item.label}
            </p> */}

          </div>
        ))}

      </div>

    </div>



    {/* Mobile Image */}
    <div className="-mt-10 md:mt-12  block lg:hidden">
      <img
        src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263137/albatroz/nsimg.png"
        alt="Strategic Growth"
        className="mx-auto w-full max-w-[500px] object-contain"
      />
    </div>


  </div>
</section>
    
<Middle />
<Abovefooter />

   </>
  );
}
