import React from 'react'
import { Check, Play } from 'lucide-react'

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
  const leftColumn = features.filter((_, i) => i % 2 === 0)
  const rightColumn = features.filter((_, i) => i % 2 === 1)

  const renderCard = (feature, i) => (
    <div key={i} className="mb-7">
      <h3 className="text-white font-semibold text-2xl md:text-[32px] mb-3 leading-snug">
        {feature.titleWhite} <span className="text-[#FF403A]">{feature.titleRed}</span>
      </h3>
      <ul className="space-y-2 mb-4">
        {feature.points.map((point, j) => (
          <li key={j} className="flex items-start gap-2">
           <img src="/images/crt.svg"  className='h-[20px]'/>
            <span className="text-white text-[20px] leading-snug">{point}</span>
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-2 border border-gray-600 rounded px-4 py-2 hover:border-red-500 transition-colors cursor-pointer">
        <span className="bg-[#FF403A] rounded-sm p-1 flex items-center justify-center">
          <Play className="w-3 h-3 text-white fill-white" />
        </span>
        <span className="text-white text-sm font-medium">Watch video</span>
      </button>
    </div>
  )

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-white mb-10">
          Clarity: <span className="text-[#FF403A]">Key Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <div>{leftColumn.map((feature, i) => renderCard(feature, i))}</div>
          <div>{rightColumn.map((feature, i) => renderCard(feature, i))}</div>
        </div>
      </div>
    </section>
  )
}

export default Claritysection