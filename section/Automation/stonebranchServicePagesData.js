const sharedClosing = {
  title: "Deliver Reliable Enterprise Workload Automation",
  text: "Albatroz helps organizations unlock the full potential of Stonebranch Automation through expert implementation, integration, and managed support — delivering scalable, secure, and future-ready workload automation solutions.",
};

function buildServicePage(slug, title, subtitle, intro, bullets, extraSections = []) {
  return {
    slug,
    title,
    image: "/images/ea10.png",
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

export const stonebranchServicePages = {
  implementation: buildServicePage(
    "implementation",
    "Implementation",
    "Streamline Enterprise Workload Automation with Stonebranch Best Practices",
    [
      "Leveraging our extensive experience in designing and implementing Stonebranch Automation solutions, we help organizations streamline enterprise workload automation through industry best practices, scalable architectures, and business-focused service delivery.",
    ],
    [
      "Fresh installation, upgrade, and configuration",
      "Migration from existing workload automation and MFT platforms",
      "Application integration and onboarding",
      "Custom automation solutions for business-specific requirements",
      "Operations support and maintenance for stable automation",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Albatroz combines deep Stonebranch implementation expertise with proven delivery methodologies to help organizations build automation platforms that improve efficiency, governance, and process reliability across hybrid environments.",
        ],
        bullets: [],
      },
    ]
  ),

  "installation-upgrade": buildServicePage(
    "installation-upgrade",
    "Installation & Upgrade",
    "Build a Stable, Scalable, and Future-Ready Stonebranch Environment",
    [
      "We provide comprehensive installation, configuration, and upgrade services for Stonebranch Automation, helping organizations build a stable, scalable, and future-ready workload automation environment.",
    ],
    [
      "Fresh installation and deployment",
      "Configuration services across Stonebranch versions",
      "Version upgrade services with minimal downtime",
      "Upgrade planning and validation assessments",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Our team ensures secure configuration and production-ready implementation aligned with industry best practices, with detailed upgrade planning to reduce operational risk during version transitions.",
        ],
        bullets: [],
      },
    ]
  ),

  "staff-augmentation": buildServicePage(
    "staff-augmentation",
    "Staff Augmentation",
    "Accelerate Stonebranch Automation Initiatives with Expert Consultants",
    [
      "Our team of experienced Stonebranch consultants can seamlessly augment your existing automation team, helping organizations accelerate automation initiatives and deliver scalable, business-driven workload automation solutions.",
    ],
    [
      "Business and solution assessment",
      "Application onboarding and integration",
      "End-to-end implementation services",
      "Stonebranch upgrade services",
      "User education and training",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "We work closely with business and technology teams to evaluate automation requirements and deliver best-in-class solutions for onboarding, integration, and scaling Stonebranch across the enterprise.",
        ],
        bullets: [],
      },
    ]
  ),

  "support-maintenance": buildServicePage(
    "support-maintenance",
    "Support & Maintenance",
    "Keep Your Stonebranch Environment Stable, Secure, and Optimized",
    [
      "Albatroz provides reliable support and maintenance services for organizations that do not have dedicated in-house Stonebranch Automation expertise. Our managed services help ensure stable, secure, and efficient automation operations across enterprise environments.",
    ],
    [
      "Stonebranch administration support",
      "Day-to-day operations support",
      "Migration support from other automation platforms",
      "Proactive maintenance and health checks",
      "Performance monitoring and optimization",
    ],
    [
      {
        title: "Why Choose Albatroz?",
        paragraphs: [
          "Our support approach combines proactive monitoring, incident management, and operational assessments to improve platform stability, reliability, and overall system performance as your automation environment scales.",
        ],
        bullets: [],
      },
    ]
  ),
};

export const stonebranchServiceSlugs = Object.keys(stonebranchServicePages);

export function getStonebranchServicePage(slug) {
  return stonebranchServicePages[slug] ?? null;
}
