import React from 'react'
import { Play } from 'lucide-react'

const features = [
  {
    titleWhite: "Top Down Planning with",
    titleRed: "Roadmaps",
    videoUrl: "https://youtu.be/fuMAzW0-Oxg?si=4D0gsmzCMTToMBPJ",
    points: [
      "Create, Visualize and Communicate Product, Strategy plans to stakeholders.",
      "Helps align the investments to strategic objectives, prioritize, rank & include/exclude investments from roadmap with just drag and drop.",
    ],
  },
  {
    titleWhite: "Project",
    titleRed: "Management",
    videoUrl: "https://youtu.be/pDscCTpH0p0?si=rVOaLr-jhftf3UBl",
    points: [
      "Create, Visualize and Communicate Product, Strategy plans to stakeholders.",
      "Helps align the investments to strategic objectives, prioritize, rank & include/exclude investments from roadmap with just drag and drop.",
    ],
  },
  {
    titleWhite: "Resource",
    titleRed: "Management",
    videoUrl: "https://youtu.be/OtN4vFlTsa8?si=VXWHn-pQXpNImlJU",
    points: [
      "Optimizes resource allocation and capacity planning.",
      "Helps in managing and balancing workloads across teams.",
    ],
  },
  {
    titleWhite: "Financial",
    titleRed: "Management",
    videoUrl: "https://youtu.be/-7xDUBU7710?si=jJerctCW1UazIy2H",
    points: [
      "Budgeting and cost tracking features for effective financial management.",
      "Supports forecasting and tracking of project expenses.",
    ],
  },
  {
    titleWhite: "Time and",
    titleRed: "Expense Tracking",
    videoUrl: "https://youtu.be/PJGrHlqMFDE?si=ADnnBtm5ueay9mtZ",
    points: [
      "Allows for accurate tracking of time spent on tasks and project-related expenses.",
    ],
  },
  {
    titleWhite: "Risk and Issue",
    titleRed: "Management",
    videoUrl: "https://youtu.be/zeoDfvzLHd4?si=Z-Ege-rLSBpaWBs7",
    points: [
      "Identifies, assesses, and manages risks and issues throughout the project lifecycle.",
      "Facilitates proactive risk mitigation strategies.",
    ],
  },
  {
    titleWhite: "Collaboration and",
    titleRed: "Communication",
    videoUrl: "https://youtu.be/VKDOd7ndf5o?si=KgGN3X85FmiE_dG-",
    points: [
      "Provides tools for centralized document sharing and collaboration.",
      "Enables communication among team members and stakeholders.",
    ],
  },
  {
    titleWhite: "Reporting and",
    titleRed: "Analytics",
    videoUrl: "https://youtu.be/m2RhTUPQgDI?si=INpDXmiCMZyC1r6C",
    points: [
      "Offers robust reporting capabilities for real-time project and portfolio insights.",
      "Supports customizable dashboards and analytics to aid decision-making.",
    ],
  },
  {
    titleWhite: "Agile and Hybrid",
    titleRed: "Methodology Support",
    videoUrl: "https://youtu.be/kibHJqIpexg?si=XnKdi0SgHSUUsly3",
    points: [
      "Accommodates Agile and hybrid project management methodologies.",
      "Facilitates flexibility in project execution by integrating with Rally.",
    ],
  },
  {
    titleWhite: "Integration",
    titleRed: "Capabilities",
    points: [
      "Integrates with other business applications and tools, such as HR, CRM, ERP systems.",
      "Integrates business intelligence solutions such as Power BI, Tableau, Qlik.",
      "Enhances interoperability with existing organizational systems through SOAP and REST APIs.",
    ],
  },
  {
    titleWhite: "Mobile",
    titleRed: "Accessibility",
    points: [
      "Clarity Timesheet App allows users to submit and approve timesheets on the go.",
      "Manage projects, tasks, and approvals from anywhere.",
      "Keep teams aligned with instant updates and on-the-go productivity.",
    ],
  },
  {
    titleWhite: "VAIA",
    titleRed: "Capabilities",
    points: [
      "Delivers intelligent recommendations and actionable insights to support faster, data-driven decision-making.",
      "Enables users to interact with project and portfolio data using simple conversational queries for improved productivity.",
      "Proactively analyzes data to detect potential risks, bottlenecks, and opportunities, helping teams optimize project outcomes.",
    ],
  },
]

function Claritysection() {
  const renderCard = (feature, i) => (
    <article
      key={i}
      className="flex h-full flex-col rounded-xl border border-white/10 bg-[#0c0c0c] p-3.5 transition-colors duration-300 hover:border-[#FF403A]/40 sm:rounded-2xl sm:p-5 md:p-6"
    >
      <h3 className="mb-3 min-h-[2.75rem] text-[13px] font-semibold leading-snug text-white sm:mb-4 sm:min-h-0 sm:text-base md:text-[20px]">
        {feature.titleWhite}{" "}
        <span className="text-[#FF403A]">{feature.titleRed}</span>
      </h3>

      <ul className="mb-4 flex-1 space-y-2 sm:mb-6 sm:space-y-3">
        {feature.points.map((point, j) => (
          <li key={j} className="flex items-start gap-2">
            <img
              src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263038/albatroz/crt.svg"
              alt=""
              className="mt-0.5 h-3.5 w-3.5 shrink-0 sm:mt-1 sm:h-4 sm:w-4"
            />
            <span className="text-[11px] leading-relaxed text-white/85 sm:text-sm md:text-base">
              {point}
            </span>
          </li>
        ))}
      </ul>

      {feature.videoUrl ? (
        <a
          href={feature.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex w-full items-center justify-center gap-1.5 rounded border border-gray-600 px-2.5 py-1.5 transition-colors hover:border-[#FF403A] sm:w-fit sm:justify-start sm:gap-2 sm:px-4 sm:py-2"
        >
          <span className="flex items-center justify-center rounded-sm bg-[#FF403A] p-0.5 sm:p-1">
            <Play className="h-2.5 w-2.5 fill-white text-white sm:h-3 sm:w-3" />
          </span>
          <span className="text-[11px] font-medium text-white sm:text-sm">
            Watch video
          </span>
        </a>
      ) : null}
    </article>
  );

  return (
    <section className="bg-black px-4 py-14 sm:px-6 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-semibold text-white sm:mb-12 sm:text-3xl md:text-[40px]">
          Clarity: <span className="text-[#FF403A]">Key Features</span>
        </h2>

        <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, i) => renderCard(feature, i))}
        </div>
      </div>
    </section>
  );
}

export default Claritysection
