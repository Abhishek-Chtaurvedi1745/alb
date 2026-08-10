function buildServicePage({ slug, title, subtitle, image, intro, bullets, extraSections = [] }) {
  return {
    slug,
    title,
    image,
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
  };
}

export const connectAllServicePages = {
  "assessment-advisory": buildServicePage({
    slug: "assessment-advisory",
    title: "Assessment & Advisory",
    subtitle: "Plan the Right Integration Journey Before You Build",
    image: "/images/connectall-services/assessment-advisory.webp",
    intro: [
      "Successful enterprise integration starts with clarity on systems, dependencies, and business priorities. Albatroz performs structured toolchain discovery across Jira, ServiceNow, Clarity, GitHub, and other platforms to identify what should connect and why.",
      "We convert this analysis into a phased integration roadmap so organizations can prioritize high-impact automation first and avoid fragmented, one-off integrations.",
    ],
    bullets: [
      "Toolchain discovery and integration landscape assessment",
      "System-to-system dependency mapping across business functions",
      "Integration strategy and phased roadmap definition",
      "Priority sequencing aligned to business outcomes",
      "Business case development for manual handoff automation",
    ],
  }),

  "implementation-setup": buildServicePage({
    slug: "implementation-setup",
    title: "Implementation & Setup",
    subtitle: "Deploy ConnectALL for Secure, Production-Ready Integration",
    image: "/images/connectall-services/implementation-setup.webp",
    intro: [
      "Albatroz provides end-to-end ConnectALL implementation across on-prem, cloud, and hybrid environments. We configure platform components, connectors, and security controls to match enterprise standards.",
      "Our approach ensures the platform is stable, scalable, and ready for repeatable integration delivery across multiple toolchains.",
    ],
    bullets: [
      "ConnectALL installation and environment setup",
      "Connector and adapter configuration for target tool pairs",
      "Field mapping and data transformation design",
      "Workflow trigger and success-rule definition",
      "Configuration validation and production readiness checks",
    ],
  }),

  "workflow-use-case-development": buildServicePage({
    slug: "workflow-use-case-development",
    title: "Workflow & Use-Case Development",
    subtitle: "Build Practical Integrations That Solve Real Operational Gaps",
    image: "/images/connectall-services/workflow-use-case-development.webp",
    intro: [
      "Integration value is realized through targeted workflows. Albatroz designs and implements use-case-specific syncs such as incident management, portfolio-to-execution, test management, and source-control coordination.",
      "We implement conditional logic and quality controls so integrations remain accurate and trustworthy across complex, multi-team environments.",
    ],
    bullets: [
      "Use-case workflow design and build-out",
      "Incident, portfolio, test, and source-control sync patterns",
      "Logic gates and business-rule configuration",
      "Approval-based and conditional trigger modeling",
      "Bi-directional synchronization for multi-tool ecosystems",
      "Data quality checks and exception handling",
    ],
  }),

  "upgrades-version-management": buildServicePage({
    slug: "upgrades-version-management",
    title: "Upgrades & Version Management",
    subtitle: "Keep ConnectALL Current, Compatible, and Reliable",
    image: "/images/connectall-services/upgrades-version-management.webp",
    intro: [
      "Albatroz helps organizations safely evolve ConnectALL environments through planned upgrades, compatibility verification, and post-upgrade validation.",
      "We ensure platform changes do not break active integrations by combining controlled rollout practices with targeted regression testing.",
    ],
    bullets: [
      "ConnectALL version upgrade planning and execution",
      "Compatibility checks with connected tools and adapters",
      "Post-upgrade regression testing for active workflows",
      "Stability verification and issue remediation support",
      "Ongoing version governance and maintenance guidance",
    ],
  }),
};

export const connectAllServiceSlugs = Object.keys(connectAllServicePages);

export function getConnectAllServicePage(slug) {
  return connectAllServicePages[slug] ?? null;
}
