import React from 'react'
import FAQSection from '../../component/Faq/Faqsection';
import IndustriesServed from '../../section/Automation/IndustriesServed';

 const benefits = [
    {
      title: 'Streamlined Job Orchestration:',
      desc: 'Achieve seamless management of IT workflows across hybrid environments.',
    },
    {
      title: 'Comprehensive Automation:',
      desc: 'Automate complex processes with Business Process Automation Software and IT Process Automation Software.',
    },
    {
      title: 'Flexibility in Architecture:',
      desc: 'Leverage tools designed for hybrid and multi-cloud environments.',
    },
    {
      title: 'Advanced Workflow Management:',
      desc: 'Handle diverse business demands effortlessly with robust automation tools.',
    },
  ]
   const solutions = [
    {
      title: 'Broadcam',
      titleAccent: 'Automic Automation',
      desc: 'Broadcam Automic Automation offers cutting-edge solutions for Workload Automation, Automated Job Scheduling, and Enterprise Automation. With features like Automic Job Scheduling, Automic Automation for DevOps, and Broadcam Workload Automation, it enables seamless integration, scalability, and agility. Tools such as Automic SaaS and UC4 make it ideal for businesses striving for compliance and growth in today\'s dynamic IT landscape.',
    },
    {
      title: 'Stonebranch',
      titleAccent: 'Universal Automation Center (UAC)',
      desc: 'Stonebranch UAC is a versatile tool for Job Scheduling Software and IT workflow automation. It supports Stonebranch Workflow Orchestration, Stonebranch Managed File Transfer, and comprehensive Universal Automation Center Features. With real-time orchestration and centralized control, it enhances visibility and ensures efficient workflow execution, simplifying IT operations for hybrid environments.',
    },
  ]
  const benefits1 = [
    {
      title: "Centralized Control:",
      desc: "Manage enterprise-wide workloads with powerful Automation and Orchestration Tools."
    },
    {
      title: "Enhanced Agility:",
      desc: "Quickly adapt to evolving business needs with intuitive Enterprise Automation Software."
    },
    {
      title: "Flexible Deployment:",
      desc: "Choose the right model for your infrastructure from on-premises, cloud-based, or SaaS."
    },
    {
      title: "Seamless Integration:",
      desc: "Simplify Data Center Automation by integrating with existing systems."
    },
    {
      title: "Operational Efficiency:",
      desc: "Automate repetitive tasks using Robotic Process Automation (RPA) to drive innovation."
    },
    {
      title: "Event-Driven Processes:",
      desc: "Respond promptly to real-time triggers with Event-Driven Automation Software."
    },
    {
      title: "Continuous Development Support:",
      desc: "Enable Continuous Integration and Continuous Development to accelerate progress."
    },
    {
      title: "Advanced Monitoring:",
      desc: "Leverage embedded analytics and dashboards for actionable insights."
    },
    {
      title: "Scalability:",
      desc: "Use Workload Automation Tools to grow IT operations alongside business demands."
    }
  ];

function page() {
  return (
    <div>
         <section className="bg-black text-white mt-[83px]">
      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="px-8 py-16 lg:px-12">
          <h1 className="text-3xl md:text-[50px] font-bold leading-tight">
            Enterprise IT{" "}
            <span className="text-[#FF403A]">Automation</span>
          </h1>

          <button className="cursor-pointer mt-9 bg-[#FF403A] transition px-6 py-3 rounded-md font-semibold">
            Request a free demo
          </button>
        </div>

        {/* Right Image */}
        <div className="h-full">
          <img
            src="/images/ea.png"
            alt="Enterprise IT Automation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
    <section className="bg-black text-white py-16">
  <div className="max-w-7xl mx-auto px-8 lg:px-12">
    <h2 className="text-3xl md:text-[40px] font-semibold leading-tight">
      Workload Automation
    </h2>

    <h3 className="mt-3 text-2xl md:text-[40px] font-semibold text-[#FF403A]">
      Bridging IT Operations with Business Goals
    </h3>

    <p className="mt-5 max-w-5xl text-[15px] md:text-[16px] leading-7 text-gray-300">
      Workload Automation (WA) redefines business operations by automating,
      scheduling, and executing workflows, processes, and transactions without
      human intervention. This powerful automation platform aligns IT operations
      with business objectives, enabling businesses to optimize performance
      through unattended workflows and Event-Driven Automation Software in
      hybrid environments.
    </p>
  </div>
</section>
<section className="bg-black text-white py-16">
  <div className="max-w-7xl mx-auto px-8 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-[35px] font-semibold leading-tight">
          What Workload Automation Brings to
          <span className="mt-2 text-2xl md:text-[35px] font-semibold text-[#FF403A]">
             Your Business
        </span>
        </h2>

        

        <div className="mt-8 space-y-5">
          {[
            {
              title: "Centralized Control:",
              desc: "Move workloads across your organization with advanced Automation and Orchestration Tools.",
            },
            {
              title: "Agility Boost:",
              desc: "Adapt quickly to dynamic business needs using intuitive Enterprise Automation Software.",
            },
            {
              title: "Reliable Deployment:",
              desc: "Optimize workflows with pre-built and customized automation processes.",
            },
            {
              title: "Seamless Integration:",
              desc: "Ensure compatibility with your current systems for smooth Data Center Automation.",
            },
            {
              title: "Efficiency Gains:",
              desc: "Free up valuable resources by automating repetitive tasks with Robotic Process Automation (RPA).",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              {/* Icon */}
              <div className="w-6 h-6 rounded-full bg-[#FF403A] flex items-center justify-center shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l5 5L20 7"
                  />
                </svg>
              </div>

              <p className="text-white font-regular leading-7 text-[18px]">
                <span className="font-semibold text-white">
                  {item.title}
                </span>{" "}
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="/images/ea1.png"
          alt="Workload Automation"
          className="w-full "
        />
      </div>
    </div>
  </div>
</section>
<section className="bg-black text-white">
<hr className="border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-8 py-12 lg:px-12">
        <h1 className="text-3xl md:text-[40px] font-semibold leading-tight">
          Simplify Your IT Operations with Service Orchestration
          <br />
          and <span className="text-[#FF403A]">Automation Platforms (SOAPs)</span>
        </h1>

        <p className="mt-6 max-w-4xl text-base md:text-[20px] text-white leading-relaxed">
          Service Orchestration simplifies the coordination of complex IT
          workflows across multiple domains with minimal manual intervention.
          Built on advanced IT Orchestration Software , SOAPs unify workflows
          and tasks into a cohesive, efficient system that ensures optimal
          performance across diverse IT infrastructures.
        </p>
      </div>
    </section>
    <section className="bg-black text-white">
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 px-6 sm:px-8 lg:px-12 py-16">

    {/* Left Image */}
    <div className="flex justify-center">
      <img
        src="/images/ea2.png"
        alt="Service Orchestration cloud automation diagram"
        className="w-full max-w-md md:max-w-lg lg:max-w-none object-contain drop-shadow-[0_0_40px_rgba(255,64,58,0.15)]"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-[38px] font-semibold leading-tight tracking-tight">
        What Service Orchestration
        <br />
        <span className="text-[#FF403A] font-bold">
          Brings to Your Business
        </span>
      </h2>

      <ul className="mt-8 space-y-6">
        {benefits.map((item, i) => (
          <li key={i} className="flex items-start gap-4 group">

            {/* Icon */}
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF403A] shadow-lg shadow-red-500/20 group-hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3.5 w-3.5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            {/* Text */}
            <p className="text-[14px] md:text-[18px] text-white leading-relaxed">
              <span className="font-regular text-white">
                {item.title}
              </span>{" "}
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
  <section className="bg-black text-white">
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-8 py-16 lg:px-12">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-[45px] font-semibold leading-tight">
          Enterprise Automation Solutions{' '}
          <span className="text-[#FF403A]">We Support</span>
        </h2>

        {/* Top row: first block (left) + image (right) */}
        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Broadcam block */}
          <div className="">
            <h3 className="text-3xl md:text-[40px] font-semibold leading-snug">
              Broadcam{' '}
              <span className="text-[#FF403A]">Automic Automation</span>
            </h3>
            <p className="mt-3 text-[18px] text-white leading-relaxed">
              Broadcam Automic Automation offers cutting-edge solutions for
              Workload Automation, Automated Job Scheduling, and Enterprise
              Automation. With features like Automic Job Scheduling, Automic
              Automation for DevOps, and Broadcam Workload Automation, it
              enables seamless integration, scalability, and agility. Tools
              such as Automic SaaS and UC4 make it ideal for businesses
              striving for compliance and growth in today's dynamic IT
              landscape.
            </p>
            <h3 className="pt-5 text-3xl md:text-[40px] font-semibold leading-snug">
            Stonebranch{' '}
            <span className="text-[#FF403A]">Universal Automation Center (UAC)</span>
          </h3>
          </div>

          {/* Right: image */}
          <div className="flex justify-center">
            <img
              src="/images/ea3.png"
              alt="Enterprise automation network diagram"
              className="w-full object-contain pt-5"
            />
          </div>
        </div>

        {/* Bottom row: second block, full width below image */}
        <div className="">
          
          <p className="mt-3 text-[18px] text-white leading-relaxed">
            Stonebranch UAC is a versatile tool for Job Scheduling Software
            and IT workflow automation. It supports Stonebranch Workflow
            Orchestration, Stonebranch Managed File Transfer, and
            comprehensive Universal Automation Center Features. With
            real-time orchestration and centralized control, it enhances
            visibility and ensures efficient workflow execution, simplifying
            IT operations for hybrid environments.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-black text-white">
        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-8 py-12 lg:px-12 text-center">
          <h1 className="text-3xl md:text-[40px] font-semibold leading-tight">
            Transformative Benefits of Implementing
            <br />
            <span className="text-[#FF403A]">Automation</span>
          </h1>

          <p className="mt-6 max-w-5xl mx-auto text-base md:text-[20px] text-white/80 leading-relaxed">
            Implementing tools like Broadcom Automic Automation and Stonebranch UAC enables organizations to optimize
            IT processes while aligning them with business objectives. Key benefits include:
          </p>
        </div>
      </section>

      {/* Visual & List Split Layout */}
      <section className="bg-black text-white">
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 px-6 sm:px-8 lg:px-12 pb-16">
          
          {/* Left Side: Graphic Element */}
          <div className="flex justify-center">
            <img
              src="/images/ea4.png" 
              alt="Automation network and dashboard graphics"
              className="max-w-full object-contain"
            />
          </div>

          {/* Right Side: Key Benefits Feature List */}
          <div>
            <ul className="space-y-6">
              {benefits1.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  {/* Styled Checkmark Bullet */}
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF403A] shadow-lg shadow-red-500/20 group-hover:scale-110 transition duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  {/* Bullet Content */}
                  <p className="text-[14px] md:text-[18px] text-white leading-relaxed font-regular">
                    <span className="font-semibold text-white">
                      {item.title}
                    </span>{" "}
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      <IndustriesServed />
    <FAQSection />
    </div>
  )
}

export default page