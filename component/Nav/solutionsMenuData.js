export const aiServicesSection = {
  id: "ai",
  title: "AI Services For Enterprise",
  underlineWord: "AI",
  description:
    "Intelligent solutions to automate processes and improve business efficiency.",
  href: "/ai-services-for-enterprise",
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
          "A powerful PPM platform to manage projects, resources, investments, and business outcomes.",
        href: "/clarity",
        servicesLink: {
          label: "Clarity Services",
          href: "/clarity/services",
        },
      },
    ],
    secondaryMain: aiServicesSection,
  },
  {
    id: "automation",
    title: "Enterprise IT Automation",
    underlineWord: "Enterprise",
    description:
      "Streamline complex business processes with intelligent automation across your enterprise.",
    href: "/enterprise-it-automation",
    products: [
      {
        title: "Automic Automation",
        description:
          "Automate workflows, applications, and IT processes with a scalable enterprise automation platform.",
        href: "/enterprise-it-automation",
        servicesLink: {
          label: "Automic Automation Services",
          href: "/contact-us",
        },
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
        "Modern workload automation solutions to simplify IT operations and improve business agility.",
      href: "/enterprise-it-automation",
      servicesLink: {
        label: "Stonebranch Services",
        href: "/contact-us",
      },
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
