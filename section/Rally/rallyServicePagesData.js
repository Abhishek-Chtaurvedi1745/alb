function buildRallyServicePage({ slug, title, image, bullets }) {
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

export const rallyServicePages = {
  implementation: buildRallyServicePage({
    slug: "implementation",
    title: "Implementation",
    image: "/images/rally-services/implementation.webp",
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
    image: "/images/rally-services/integration.webp",
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
    image: "/images/rally-services/support.webp",
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
