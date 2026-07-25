import React from 'react'
import { Play } from 'lucide-react'

const features = [
  {
    titleWhite: "Top Down Planning with",
    titleRed: "Roadmaps",
    points: [
      "Create, Visualize and Communicate Product, Strategy plans to stakeholders.",
      "Helps align the investments to strategic objectives, prioritize, rank & include/exclude investments from roadmap with just drag and drop.",
    ],
  },
  {
    titleWhite: "Project",
    titleRed: "Management",
    points: [
      "Create, Visualize and Communicate Product, Strategy plans to stakeholders.",
      "Helps align the investments to strategic objectives, prioritize, rank & include/exclude investments from roadmap with just drag and drop.",
    ],
  },
  {
    titleWhite: "Resource",
    titleRed: "Management",
    points: [
      "Optimizes resource allocation and capacity planning.",
      "Helps in managing and balancing workloads across teams.",
    ],
  },
  {
    titleWhite: "Financial",
    titleRed: "Management",
    points: [
      "Budgeting and cost tracking features for effective financial management.",
      "Supports forecasting and tracking of project expenses.",
    ],
  },
  {
    titleWhite: "Time and",
    titleRed: "Expense Tracking",
    points: [
      "Allows for accurate tracking of time spent on tasks and project-related expenses.",
    ],
  },
  {
    titleWhite: "Risk and Issue",
    titleRed: "Management",
    points: [
      "Identifies, assesses, and manages risks and issues throughout the project lifecycle.",
      "Facilitates proactive risk mitigation strategies.",
    ],
  },
  {
    titleWhite: "Collaboration and",
    titleRed: "Communication",
    points: [
      "Provides tools for centralized document sharing and collaboration.",
      "Enables communication among team members and stakeholders.",
    ],
  },
  {
    titleWhite: "Reporting and",
    titleRed: "Analytics",
    points: [
      "Offers robust reporting capabilities for real-time project and portfolio insights.",
      "Supports customizable dashboards and analytics to aid decision-making.",
    ],
  },
  {
    titleWhite: "Agile and Hybrid",
    titleRed: "Methodology Support",
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
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 transition-colors duration-300 hover:border-[#FF403A]/40"
    >
      <h3 className="mb-4 text-[20px] font-semibold leading-snug text-white">
        {feature.titleWhite}{" "}
        <span className="text-[#FF403A]">{feature.titleRed}</span>
      </h3>

      <ul className="mb-6 flex-1 space-y-3">
        {feature.points.map((point, j) => (
          <li key={j} className="flex items-start gap-2.5">
            <img src="/images/crt.svg" alt="" className="mt-1 h-4 w-4 shrink-0" />
            <span className="text-sm leading-relaxed text-white/90 md:text-base">
              {point}
            </span>
          </li>
        ))}
      </ul>

      <button className="mt-auto flex w-fit items-center gap-2 rounded border border-gray-600 px-4 py-2 transition-colors hover:border-[#FF403A] cursor-pointer">
        <span className="flex items-center justify-center rounded-sm bg-[#FF403A] p-1">
          <Play className="h-3 w-3 fill-white text-white" />
        </span>
        <span className="text-sm font-medium text-white">Watch video</span>
      </button>
    </article>
  );

  return (
    <section className="bg-black px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-semibold text-white md:text-[40px]">
          Clarity: <span className="text-[#FF403A]">Key Features</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => renderCard(feature, i))}
        </div>
      </div>
    </section>
  );
}

export default Claritysection