function buildRallyServicePage({
  slug,
  title,
  subtitle,
  image,
  intro,
  bullets,
}) {
  return {
    slug,
    title,
    image,
    subtitle,
    intro,
    sections: [
      {
        title: `Our Rally ${title} Services`,
        subtitle: "Our consultants help organizations:",
        paragraphs: [],
        bullets,
      },
    ],
  };
}

export const rallyServicePages = {
  implementation: buildRallyServicePage({
    slug: "implementation",
    title: "Implementation",
    subtitle: "Launch Rally with the Right Agile Foundation",
    image: "/images/rally-services/implementation.webp",
    intro: [
      "Albatroz delivers end-to-end Rally implementation tailored to your Agile delivery model, organizational structure, and governance expectations.",
      "We configure Rally to support day-to-day execution while enabling leadership visibility across teams, releases, and programs.",
    ],
    bullets: [
      "End-to-end Rally implementation aligned to Agile delivery processes",
      "Workspace, project, team, role, and permission configuration",
      "Backlog, release, iteration, and workflow setup",
      "Dashboard configuration for operational and leadership visibility",
      "User onboarding, training, and go-live support",
    ],
  }),

  integration: buildRallyServicePage({
    slug: "integration",
    title: "Integration",
    subtitle: "Connect Rally to Portfolio and Enterprise Toolchains",
    image: "/images/rally-services/integration.webp",
    intro: [
      "Rally delivers maximum value when connected to surrounding systems. Albatroz builds secure and scalable integrations that eliminate manual data transfer and improve consistency.",
      "We help synchronize Rally with Clarity and other platforms so portfolio decisions and delivery execution stay aligned in real time.",
    ],
    bullets: [
      "Clarity and Rally synchronization for portfolio visibility",
      "Automated data synchronization to reduce manual effort",
      "Secure, scalable, and resilient integration patterns",
      "Integration design aligned to business process needs",
      "Ongoing validation for data consistency and reliability",
    ],
  }),

  support: buildRallyServicePage({
    slug: "support",
    title: "Support",
    subtitle: "Keep Rally Stable, Optimized, and Business-Ready",
    image: "/images/rally-services/support.webp",
    intro: [
      "Albatroz provides functional and technical Rally support to keep enterprise Agile operations smooth, predictable, and continuously improving.",
      "Our support model covers daily issue resolution, platform optimization, and proactive maintenance to sustain adoption over time.",
    ],
    bullets: [
      "Functional and technical support for Rally operations",
      "Incident resolution and root-cause troubleshooting",
      "Performance optimization and platform tuning",
      "Enhancement delivery and configuration changes",
      "User administration and access support",
      "Ongoing maintenance, upgrades, and proactive monitoring",
    ],
  }),
};

export const rallyServiceSlugs = Object.keys(rallyServicePages);

export function getRallyServicePage(slug) {
  return rallyServicePages[slug] ?? null;
}
