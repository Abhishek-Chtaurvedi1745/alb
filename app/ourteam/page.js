


import React from 'react'
import Nav from "@/component/Nav/Nav"
import Number from "@/component/Number/Number"
import Footer from "@/component/Footer/Footer"

 const leaders = [
    {
      id: 1,
      name: "Build Modern Digital Experiences",
      role: "Creative Solutions For Your Business",
      description:
        "A PPM and Clarity SME with vast experience over 22 years helping customers with best practice solutions in implementing Clarity. Responsible for Strategy, Sales & Marketing & Operations. Financial Markets enthusiast, musicophile & a Tennis buff.",
      image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263100/albatroz/lt1.png",
    },
    {
      id: 2,
      name: "Innovative Technology Leadership",
      role: "Delivering Smart Business Solutions",
      description:
        "Experienced leader focused on driving digital transformation and helping organizations scale with innovative technologies and customer-focused strategies.",
      image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263101/albatroz/lt2.png",
    },
    {
      id: 3,
      name: "Gayathri Gupta Shatavelli",
      role: "Practice Lead – PPM",
      description:
        "A highly motivated Clarity guru backed by versatile skillset & 12 years of bimplementing & customizing Clarity for global customers. Leads the PPM Practice & Albatroz and a great mentor for budding consultants. Certified SAFe Agilist & Clarity PPM Professional. Traveller, foodie and loves music.",
      image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263103/albatroz/lt3.png",
    },
    {
      id: 4,
      name: "Venugopal Reddy Ettireddy",
      role: "Practice Lead – Automation",
      description:
        "Over 24 years of experience in IT services business with a technology mindset. Being a Subject Matter Expert on Automation & Devops, is responsible for leading the Automation practice & mentors the budding consultants.",
      image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263104/albatroz/lt4.png",
    },
  ];

function page() {
  return (
    <div>
       <section className="relative h-[300px] md:h-[450px] overflow-hidden mt-20">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263144/albatroz/ot.png"
        alt="About Us"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Dark Overlay */}

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <h1 className="text-white text-3xl md:text-[40px] font-semibold ">
          Our <span className="text-[#FF403A]">Team</span>
        </h1>
      </div>
    </section>
     <section className="w-full pt-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">      
        <h1 className="text-3xl md:text-[40px] text-center text-white font-semibold mb-6">
          Our Leadership <span className="text-[#FF403A]">Team</span>
        </h1>
        <div className="flex flex-col gap-20">

          {leaders.map((leader, index) => (

            <div
              key={leader.id}
              className={`grid grid-cols-1 ${
                index % 2 === 0
                  ? "lg:grid-cols-[0.7fr_1.3fr]"
                  : "lg:grid-cols-[1.3fr_0.7fr]"
              } gap-12 items-center`}
            >

              {/* IMAGE LEFT */}
              {index % 2 === 0 && (
                <div className="w-full">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full rounded-3xl"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="flex flex-col justify-center">
                
                <h4 className="text-[20px] md:text-[30px] font-semibold text-white leading-tight">
                  {leader.name}
                </h4>

                <h4 className="my-3 text-[17px] md:text-[20px] font-semibold text-[#FF403A]">
                  {leader.role}
                </h4>

                <p className="font-normal text-white text-[13px] md:text-[16px] leading-8">
                  {leader.description}
                </p>

              </div>

              {/* IMAGE RIGHT */}
              {index % 2 !== 0 && (
                <div className="w-full">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full rounded-3xl"
                  />
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>    
   
    </div>
  )
}

export default page