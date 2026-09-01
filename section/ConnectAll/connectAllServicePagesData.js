function buildServicePage({
  slug,
  title,
  image,
  bullets,
}) {
  return {
    slug,
    title,
    image,
    subtitle: "",
    intro: [],
    sections: [
      {
        title: "",
        subtitle: "",
        paragraphs: [],
        bullets: bullets.slice(0, 5),
      },
    ],
  };
}

export const connectAllServicePages = {
  "assessment-advisory": buildServicePage({
    slug: "assessment-advisory",
    title: "Assessment & Advisory",
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263033/albatroz/connectall-services/assessment-advisory.webp",
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
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263034/albatroz/connectall-services/implementation-setup.webp",
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
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263036/albatroz/connectall-services/workflow-use-case-development.webp",
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
    image: "https://res.cloudinary.com/ddcx08e0s/image/upload/v1788263035/albatroz/connectall-services/upgrades-version-management.webp",
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
