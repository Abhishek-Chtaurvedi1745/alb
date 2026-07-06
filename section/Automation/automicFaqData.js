export const automicFaqData = [
  {
    question: "What is Workload Automation (WLA)?",
    answer:
      "Workload automation is the process of scheduling, orchestrating, and managing the execution of business and IT processes — such as batch jobs, file transfers, and application workflows — without manual intervention. WLA platforms provide centralised control, dependency management, and monitoring across heterogeneous environments.",
  },
  {
    question: "What types of workloads can be automated?",
    bullets: [
      "Batch processing (ERP, banking, billing cycles)",
      "Data pipelines and ETL workflows",
      "File transfer and managed file transfer (MFT)",
      "Application-to-application integration",
      "Cloud and container workloads (AWS, Azure, Kubernetes)",
      "IT operations tasks (backups, patching, report generation)",
    ],
  },
  {
    question: "What is the difference between WLA and RPA?",
    answer:
      "WLA orchestrates backend IT and business processes — batch jobs, system integrations, and data pipelines — at scale and with minimal human involvement. RPA (Robotic Process Automation) mimics human interaction with UI-based applications. They are complementary: WLA handles the process backbone while RPA can handle UI-driven steps within that flow.",
  },
  {
    question: "Can WLA trigger cloud workloads on AWS or Azure?",
    answer:
      "Yes. WLA platforms provide native cloud agents and REST-based integrations to trigger workloads on AWS, Azure, and GCP. Cloud job executions are orchestrated alongside on-premises jobs within the same workflow, providing unified visibility across hybrid environments.",
  },
  {
    question: "How does WLA integrate with ServiceNow?",
    answer:
      "WLA platforms expose REST APIs that enable integration with ServiceNow and any other tool that supports API-based communication. This allows ServiceNow service catalogue requests, incidents, or change records to trigger automated workflows in WLA, enabling end-to-end touchless process execution.",
  },
  {
    question: "Can WLA be deployed on cloud?",
    answer:
      "Yes. WLA platforms support deployment on cloud infrastructure, containers (Kubernetes), and are also available as SaaS offerings. Cloud-deployed WLA can orchestrate workloads across on-premises and cloud environments interchangeably, providing a unified automation layer across hybrid and multi-cloud architectures.",
  },
];
