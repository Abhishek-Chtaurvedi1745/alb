export const aiServicesSection = {
  id: "ai",
  title: "AI Services For Enterprise",
  underlineWord: "AI",
  description:
    "Intelligent solutions to automate processes and improve business efficiency.",
  href: "/ai-services",
};

export const solutionsMegaMenu = [
  {
    id: "ppm",
    title: "Project Portfolio Management",
    underlineWord: "Project",
    description:
      "Optimize project planning, execution and portfolio decisions with enterprise-grade PPM solutions.",
    href: "/project-management",
    products: [
      {
        title: "Clarity",
        description:
          "A powerful PPM platform to manage projects, resources, investments, and business outcomes. (+ <span class=\"text-[#ef4444]\">Clearity services</span>)",
        href: "/project",
      },
    ],
    secondaryMain: aiServicesSection,
    services: {
      title: "Clarity Services",
      href: "/clarity/services",
      items: [
        { label: "Implementation", href: "/clarity/services/implementation" },
        { label: "Installations & Upgrades", href: "/clarity/services/installations-upgrades" },
        { label: "Migration to Modern UX", href: "/clarity/services/migration-to-modern-ux" },
        { label: "Integrations", href: "/clarity/services/integration" },
        { label: "Reporting & Dashboards", href: "/clarity/services/clarity-reporting-dashboard-services" },
        { label: "Business Intelligence", href: "/clarity/services/business-intelligence" },
      ],
    },
  },
  {
    id: "automation",
    title: "Enterprise IT Automation",
    underlineWord: "Enterprise",
    description:
      "Streamline complex business processes with intelligent automation across your enterprise.",
    href: "/project",
    products: [
      {
        title: "Automic Automation",
        description:
          "Automate workflows, applications, and IT processes with a scalable enterprise automation platform. (+ <span class=\"text-[#ef4444]\">Automic Automation Services</span>)",
        href: "/project",
      },
    ],
    // services: {
    //   title: "Automic Automation Services",
    //   items: [
    //     { label: "Implementation", href: "/contact-us" },
    //     { label: "Installation & Upgrades", href: "/contact-us" },
    //     { label: "Education/Training", href: "/contact-us" },
    //     { label: "Staff Augmentation", href: "/contact-us" },
    //     { label: "Support & Maintenance", href: "/contact-us" },
    //   ],
    // },
    trailingProduct: {
      title: "Stonebranch",
      description:
        "Modern workload automation solutions to simplify IT operations and improve business agility. (+ <span class=\"text-[#ef4444]\">Stonebranch Services</span>)",
      href: "/project",
    },
  },
];

export function getResponsiveSolutionsMenu() {
  const [ppm, automation] = solutionsMegaMenu;

  return [
    { ...ppm, secondaryMain: undefined },
    automation,
    {
      ...aiServicesSection,
      products: [],
      services: null,
    },
  ];
}
