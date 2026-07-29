const sharedClosing = {
  title: "Maximize the Value of Your Automic Automation Investment",
  text: "Albatroz helps organizations get the most from Broadcom Automic Automation through expert implementation, upgrades, integration, and managed support — delivering scalable, secure, and future-ready enterprise workload automation.",
};

function buildServicePage(slug, title, subtitle, intro, bullets, extraSections = []) {
  return {
    slug,
    title,
    image: `/images/automic-services/${slug}.png`,
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

export const automicServicePages = {
  implementation: buildServicePage(
    "implementation",
    "Implementation",
    "Streamline Enterprise Workload Automation with Automic Best Practices",
    [
      "Implementing Broadcom Automic Automation is more than installing a scheduler — it is about building an enterprise automation platform that orchestrates workloads consistently across applications, databases, and hybrid infrastructure.",
      "Albatroz brings deep Automic delivery experience, proven architecture patterns, and business-focused execution to help organizations automate critical processes with confidence.",
    ],
    [
      "Automation requirement analysis and solution design",
      "Automic Automation Engine deployment and configuration",
      "Agent rollout across servers, applications, and databases",
      "Workflow, job, and calendar design using best practices",
      "Migration from legacy schedulers and custom scripts",
      "Role-based security, naming standards, and governance setup",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Our implementation approach combines certified Automic expertise with structured delivery — discovery, design, build, test, and adoption — so your automation platform is stable from day one and scales cleanly as workloads grow.",
        ],
        bullets: [],
      },
    ]
  ),

  "installation-upgrade": buildServicePage(
    "installation-upgrade",
    "Installation & Upgrade",
    "Build a Stable, Scalable, and Future-Ready Automic Environment",
    [
      "We provide end-to-end installation, configuration, and upgrade services for Broadcom Automic Automation, helping organizations move to supported versions with minimal disruption to production workloads.",
    ],
    [
      "Fresh installation and environment provisioning",
      "Automation Engine, database, and agent configuration",
      "Version upgrade planning and impact assessment",
      "High-availability and disaster recovery setup",
      "Environment migration and cloning across dev, test, and production",
      "Post-upgrade validation and performance tuning",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Every upgrade begins with a readiness assessment covering custom objects, integrations, and agent compatibility — reducing risk and keeping downtime within agreed maintenance windows.",
        ],
        bullets: [],
      },
    ]
  ),

  "education-training": buildServicePage(
    "education-training",
    "Education / Training",
    "Build In-House Automic Expertise Across Your Teams",
    [
      "Technology delivers value only when teams know how to use it. Our role-based Automic training programs help administrators, developers, and operations staff work confidently on the platform.",
    ],
    [
      "Administrator training on architecture and system management",
      "Developer training on objects, workflows, and scripting",
      "Operator training on monitoring, alerts, and incident handling",
      "Customized workshops based on your environment and standards",
      "Documentation, runbooks, and knowledge transfer sessions",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Sessions are delivered by practicing consultants using examples from your own environment, so teams learn on real workflows rather than generic demos — improving adoption and reducing dependency on external support.",
        ],
        bullets: [],
      },
    ]
  ),

  "staff-augmentation": buildServicePage(
    "staff-augmentation",
    "Staff Augmentation",
    "Scale Your Automic Team with Certified Consultants",
    [
      "Our experienced Automic consultants integrate directly with your existing teams to accelerate delivery, cover skill gaps, and keep automation initiatives moving without long hiring cycles.",
    ],
    [
      "Short-term and long-term consultant engagement models",
      "Automic administration and platform operations support",
      "Workflow development and application onboarding",
      "Upgrade and migration project support",
      "Onsite, offshore, and hybrid delivery options",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "You get consultants who have delivered enterprise Automic programs across banking, energy, manufacturing, and public sector environments — productive from the first sprint, with flexible scaling as project needs change.",
        ],
        bullets: [],
      },
    ]
  ),

  "support-maintenance": buildServicePage(
    "support-maintenance",
    "Support & Maintenance",
    "Keep Your Automic Platform Stable, Secure, and Optimized",
    [
      "Albatroz provides managed support and maintenance for organizations without dedicated in-house Automic expertise, ensuring reliable automation operations across enterprise environments.",
    ],
    [
      "Day-to-day administration and operations support",
      "Incident management and root cause analysis",
      "Proactive health checks and preventive maintenance",
      "Performance monitoring, tuning, and capacity planning",
      "Patch management and periodic version currency",
      "Enhancements and ongoing workflow optimization",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Our managed support model combines proactive monitoring with defined response commitments, so issues are resolved before they affect business-critical batch cycles and platform performance stays predictable as volumes grow.",
        ],
        bullets: [],
      },
    ]
  ),
};

export const automicServiceSlugs = Object.keys(automicServicePages);

export function getAutomicServicePage(slug) {
  return automicServicePages[slug] ?? null;
}
