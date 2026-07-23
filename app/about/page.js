import React from 'react'

function page() {
  return (
    <div>
      <section className="relative mt-20 h-[300px] overflow-hidden md:h-[450px]">
        <img
          src="/images/abtt.png"
          alt="About Us"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center px-6 md:px-16">
          <h1 className="text-3xl font-semibold text-white md:text-[45px]">
            About <span className="text-[#FF403A]">Us</span>
          </h1>
        </div>
      </section>

      {/* About Us content */}
      <section className="w-full overflow-hidden bg-black px-4 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center md:mb-8">
            <h4 className="text-3xl font-semibold text-white md:text-[45px]">
              About
              <span className="text-[#FF403A]">{" "}Us</span>
            </h4>
          </div>

          <p className="mb-4 text-justify text-[13px] font-normal leading-[1.65] text-[#E5E5E5] md:mb-5 md:text-[16px]">
            Established in 2018, Albatroz Solutions is an esteemed IT services
            firm that excels in offering consultation, implementation,
            deployment and support for enterprise software within the domains
            of Project & Portfolio Management, Automation, and Business
            Intelligence. Our company stands at the forefront of the industry,
            assisting businesses in fully realizing their potential by
            harnessing the power of technology and optimizing their software
            investments.
          </p>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="space-y-3 md:space-y-3.5">
              <p className="text-justify text-[13px] font-normal leading-[1.65] text-[#E5E5E5] md:text-[16px]">
                At Albatroz Solutions, we recognize that successful software
                implementation extends beyond the realm of technology. It
                entails aligning your organization’s objectives, processes, and
                personnel with the most fitting software solution. Our team
                comprises highly proficient professionals who blend their vast
                industry expertise with technical acumen to seamlessly guide
                you throughout your digital transformation expedition.
              </p>

              <p className="text-justify text-[13px] font-normal leading-[1.65] text-[#E5E5E5] md:text-[16px]">
                Our specialization lies in delivering top-notch services for
                renowned software platforms including Broadcom’s Clarity,
                Automic Automation, Stonebranch UAC, Microsoft Power BI, and
                Tidal. Moreover, we possess extensive experience in the field
                of Project Management, which enables us to offer Project
                Management as a Service (PMaaS) alongside our comprehensive
                range of offerings.
              </p>
            </div>

            <div className="relative w-full max-w-[420px] justify-self-end lg:max-w-[460px]">
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[20px] border-r-[4px] border-b-[4px] border-[#FF403A] md:translate-x-2.5 md:translate-y-2.5 md:rounded-[24px]" />
              <div className="relative z-10 overflow-hidden rounded-[20px] md:rounded-[24px]">
                <img
                  src="images/imm.png"
                  alt="Albatroz team collaboration"
                  className="aspect-[5/4] h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Our Approach */}
      <section className="w-full overflow-hidden bg-black px-4 pb-14 pt-8 md:pb-20 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center md:mb-12">
            <h3 className="text-3xl font-semibold leading-[1.2] text-white md:text-[42px]">
              Our Mission &{" "}
              <span className="text-[#FF403A]">Our Approach</span>
            </h3>
          </div>

          <div className="flex w-full flex-col gap-6 md:gap-8">
            {/* Mission card */}
            <article className="group relative overflow-hidden rounded-2xl border border-[#FF403A]/50 bg-[#080808] transition-all duration-500 hover:border-[#FF403A]">
              <div className="absolute inset-y-0 left-0 w-[3px] bg-[#FF403A]" />
              <div className="relative flex flex-col gap-5 p-6 pl-7 md:flex-row md:items-start md:gap-8 md:p-8 md:pl-10">
                <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#ECECEC] transition-transform duration-500 group-hover:scale-105 md:h-[96px] md:w-[96px]">
                    <img
                      src="images/ma.svg"
                      alt=""
                      className="h-10 w-10 object-contain md:h-12 md:w-12"
                    />
                  </div>
                  <h4 className="text-[22px] font-semibold leading-none text-white md:text-[28px]">
                    Our
                    <span className="text-[#FF403A]">{" "}Mission</span>
                  </h4>
                </div>

                <p className="max-w-3xl text-left text-[13px] font-normal leading-[1.7] text-[#D5D5D5] md:pt-2 md:text-[15px]">
                  To deliver exceptional services and solutions that empower
                  organizations to optimize the value extracted from their
                  technology investments — helping them achieve business
                  objectives faster, with a skilled team and well-defined
                  delivery processes.
                </p>
              </div>
            </article>

            {/* Approach card */}
            <article className="group relative overflow-hidden rounded-2xl border border-[#FF403A]/50 bg-[#080808] transition-all duration-500 hover:border-[#FF403A]">
              <div className="absolute inset-y-0 left-0 w-[3px] bg-[#FF403A]" />
              <div className="relative flex flex-col gap-5 p-6 pl-7 md:flex-row md:items-start md:gap-8 md:p-8 md:pl-10">
                <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#ECECEC] transition-transform duration-500 group-hover:scale-105 md:h-[96px] md:w-[96px]">
                    <img
                      src="images/ma1.svg"
                      alt=""
                      className="h-10 w-10 object-contain md:h-12 md:w-12"
                    />
                  </div>
                  <h4 className="text-[22px] font-semibold leading-none text-white md:text-[28px]">
                    Our
                    <span className="text-[#FF403A]">{" "}Approach</span>
                  </h4>
                </div>

                <div className="max-w-3xl space-y-3 text-left md:pt-2">
                  <p className="text-[13px] font-normal leading-[1.7] text-[#D5D5D5] md:text-[15px]">
                    We don’t implement software in isolation. We work to
                    understand your organization’s objectives, processes, and
                    people — and build solutions that align all three.
                  </p>

                  <p className="text-[13px] font-normal leading-[1.7] text-[#D5D5D5] md:text-[15px]">
                    Every engagement begins with a thorough discovery of your
                    business context, and every recommendation is grounded in
                    both technical expertise and real-world delivery experience.
                  </p>

                  <p className="text-[13px] font-normal leading-[1.7] text-[#D5D5D5] md:text-[15px]">
                    Whether it’s a new implementation, enhancement, ongoing
                    support, or strategic consulting for a key decision — we
                    bring the right combination of product depth and business
                    acumen to the table.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
