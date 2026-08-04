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
          <h1 className="text-3xl font-semibold text-white md:text-[40px]">
            About <span className="text-[#FF403A]">Us</span>
          </h1>
        </div>
      </section>

      {/* About Us content */}
      <section className="w-full overflow-hidden bg-black px-4 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
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

      {/* What drives us */}
      <section className="w-full overflow-hidden bg-black px-4 pb-16 pt-6 md:pb-24 md:pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14">
            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.15] text-white md:text-[40px]">
              What <span className="text-[#FF403A]">drives us</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            {/* Mission — statement panel */}
            <article className="relative overflow-hidden rounded-[28px] border border-[#FF403A]/40 bg-[#0c0c0c] lg:col-span-5">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#FF403A]" />
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#FF403A]/15" />
              <div className="absolute -bottom-10 right-8 h-28 w-28 rounded-full border border-[#FF403A]/10" />

              <div className="relative flex h-full flex-col">
                <div className="border-b border-[#FF403A]/25 px-7 py-7 md:px-9 md:py-8">
                  <div className="flex flex-wrap items-center gap-5">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white md:h-[84px] md:w-[84px]">
                      <img
                        src="/images/ma.svg"
                        alt=""
                        className="h-9 w-9 object-contain md:h-10 md:w-10"
                      />
                    </div>
                    <div>
                      <h4 className="text-[28px] font-semibold leading-none text-white md:text-[34px]">
                        Our <span className="text-[#FF403A]">Mission</span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="text-[14px] font-normal leading-[1.75] text-[#D8D8D8] md:text-[16px]">
                    To deliver exceptional services and solutions that empower
                    organizations to optimize the value extracted from their
                    technology investments — helping them achieve business
                    objectives faster, with a skilled team and well-defined
                    delivery processes.
                  </p>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-16 bg-[#FF403A]" />
                    <p className="mt-4 text-sm text-white/55">
                      Value from every technology investment.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Approach — three pillars */}
            <article className="rounded-[28px] border border-white/10 bg-[#0c0c0c] lg:col-span-7">
              <div className="border-b border-white/10 px-7 py-7 md:px-9 md:py-8">
                <div className="flex flex-wrap items-center gap-5">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white md:h-[84px] md:w-[84px]">
                    <img
                      src="/images/ma1.svg"
                      alt=""
                      className="h-9 w-9 object-contain md:h-10 md:w-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-[28px] font-semibold leading-none text-white md:text-[34px]">
                      Our <span className="text-[#FF403A]">Approach</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-7">
                  <span className="mb-4 block text-[28px] font-semibold leading-none text-[#FF403A]/80">
                    01
                  </span>
                  <h5 className="mb-3 text-base font-semibold text-white">
                    Align people & process
                  </h5>
                  <p className="text-[13px] font-normal leading-[1.7] text-[#C8C8C8] md:text-[14px]">
                    We don&apos;t implement software in isolation. We understand
                    your organization&apos;s objectives, processes, and people —
                    and build solutions that align all three.
                  </p>
                </div>

                <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-7">
                  <span className="mb-4 block text-[28px] font-semibold leading-none text-[#FF403A]/80">
                    02
                  </span>
                  <h5 className="mb-3 text-base font-semibold text-white">
                    Discover before decide
                  </h5>
                  <p className="text-[13px] font-normal leading-[1.7] text-[#C8C8C8] md:text-[14px]">
                    Every engagement begins with thorough discovery of your
                    business context. Recommendations stay grounded in technical
                    expertise and real-world delivery experience.
                  </p>
                </div>

                <div className="p-6 md:p-7">
                  <span className="mb-4 block text-[28px] font-semibold leading-none text-[#FF403A]/80">
                    03
                  </span>
                  <h5 className="mb-3 text-base font-semibold text-white">
                    Depth with judgment
                  </h5>
                  <p className="text-[13px] font-normal leading-[1.7] text-[#C8C8C8] md:text-[14px]">
                    Implementation, enhancement, support, or strategic
                    consulting — we bring the right mix of product depth and
                    business acumen to every decision.
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
