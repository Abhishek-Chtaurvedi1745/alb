const sharedClosing = {
  title: "Enable a Truly Connected Enterprise",
  text: "Albatroz helps organizations unlock the full potential of ConnectALL by connecting enterprise applications, automating business processes, and eliminating information silos — delivering scalable, secure, and future-ready integration solutions.",
};

function buildServicePage(slug, title, subtitle, intro, bullets, extraSections = []) {
  return {
    slug,
    title,
    image: "/images/ea2.png",
    subtitle,
    intro,
    sections: [
      {
        title: `Our ${title} Services`,
        subtitle: "Our consultants help organizations:",
        paragraphs: [],
        bullets,
      },
      ...extraSections,
    ],
    closing: sharedClosing,
  };
}

export const connectAllServicePages = {
  "assessment-integration-strategy": buildServicePage(
    "assessment-integration-strategy",
    "Assessment & Integration Strategy",
    "Define a Clear Enterprise Integration Roadmap Before You Connect Your Tools",
    [
      "Every successful ConnectALL implementation begins with a comprehensive understanding of your enterprise application landscape, integration maturity, and business priorities.",
      "Albatroz consultants assess existing applications, integrations, and toolchain dependencies to identify high-value automation opportunities and design a future-state integration architecture aligned with your digital transformation goals.",
    ],
    [
      "Assess existing enterprise applications and integrations",
      "Discover the enterprise toolchain and identify integration opportunities",
      "Analyze current-state and future-state integration architecture",
      
      "Develop a phased implementation roadmap",
      "Define an enterprise integration strategy aligned with business objectives",
      "Build business cases for workflow automation and digital transformation",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Albatroz combines extensive ConnectALL implementation experience with deep expertise across Broadcom Clarity, Rally, Jira, ServiceNow, Azure DevOps, GitHub, SAP, Salesforce, and other enterprise platforms.",
          "We help organizations reduce integration risk by establishing a clear strategy, governance model, and implementation roadmap before development begins.",
        ],
        bullets: [],
      },
    ]
  ),

  "implementation-configuration": buildServicePage(
    "implementation-configuration",
    "ConnectALL Implementation & Configuration",
    "Deploy and Configure ConnectALL for Secure, Scalable Enterprise Integration",
    [
      "Albatroz provides complete ConnectALL installation and configuration services for on-premises, cloud, and hybrid environments.",
      "Our team ensures your integration platform is validated, secured, and production-ready — with connectors, authentication, and environment setup aligned to enterprise standards.",
    ],
    [
      "ConnectALL installation and environment setup",
      "Platform configuration and validation",
      "Connector and adapter installation",
      "Secure connectivity and authentication configuration",
      "Environment migration and deployment",
      "Production readiness assessment",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "We follow proven implementation methodologies to accelerate platform go-live while ensuring reliability, security, and operational readiness across connected systems.",
        ],
        bullets: [],
      },
    ]
  ),

  "integration-design-workflow": buildServicePage(
    "integration-design-workflow",
    "Integration Design & Workflow Development",
    "Automate Business Processes with Intelligent ConnectALL Workflows",
    [
      "Our consultants design and build integration workflows that automate data exchange and process orchestration across enterprise applications.",
      "From field mapping and transformation logic to conditional synchronization and exception handling, we deliver integrations that are maintainable, scalable, and aligned with your business rules.",
    ],
    [
      "Field mapping and attribute configuration",
      "Data transformation and value translation",
      "Workflow and synchronization design",
      "Business rule implementation",
      "Conditional synchronization logic",
      "Bi-directional integration setup",
      "Data validation and exception handling",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Albatroz integration architects design workflows that balance automation efficiency with governance, auditability, and long-term maintainability across your enterprise toolchain.",
        ],
        bullets: [],
      },
    ]
  ),

  "enterprise-integration-use-cases": buildServicePage(
    "enterprise-integration-use-cases",
    "Enterprise Integration Use Cases",
    "Deliver Real Business Value Through Targeted ConnectALL Integrations",
    [
      "We implement ConnectALL integration solutions tailored to your business requirements — connecting portfolio management, agile execution, service management, DevOps, and legacy systems.",
      "Whether you need Clarity-to-Jira synchronization, ServiceNow incident integration, or end-to-end release traceability, Albatroz delivers use-case-driven integrations that improve collaboration and visibility.",
    ],
    [
      "Portfolio-to-execution synchronization",
      "Incident and service management integration",
      "Agile planning and project synchronization",
      "Test management integration",
      "Source code and DevOps pipeline integration",
      "Cross-platform collaboration workflows",
      "Legacy system modernization",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Our consultants have delivered enterprise integrations across BFSI, manufacturing, retail, telecom, and public sector organizations — ensuring each use case delivers measurable operational improvement.",
        ],
        bullets: [],
      },
    ]
  ),

  "upgrades-platform-maintenance": buildServicePage(
    "upgrades-platform-maintenance",
    "Upgrades & Platform Maintenance",
    "Keep Your ConnectALL Environment Secure, Compatible, and Optimized",
    [
      "Albatroz ensures your ConnectALL environment remains secure, optimized, and compatible with connected applications through structured upgrade and maintenance services.",
      "We help organizations manage version upgrades, connector compatibility, workflow validation, and ongoing platform health — minimizing disruption while maintaining integration reliability.",
    ],
    [
      "ConnectALL version upgrades",
      "Connector compatibility assessments",
      "Workflow validation and optimization",
      "Regression testing",
      "Production deployment support",
      "Platform health checks and ongoing maintenance",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Our maintenance approach combines proactive monitoring, regression validation, and production support to keep mission-critical integrations running smoothly as your enterprise ecosystem evolves.",
        ],
        bullets: [],
      },
    ]
  ),
};

export const connectAllServiceSlugs = Object.keys(connectAllServicePages);

export function getConnectAllServicePage(slug) {
  return connectAllServicePages[slug] ?? null;
}
