import { clarityServices } from "@/section/Clarity/clarityServicesData";
import { automicServices } from "@/section/Automation/automicServicesData";

export const aiServicesSection = {
  id: "ai",
  title: "AI Services For Enterprise",
  underlineWord: "AI",
  description:
    "Intelligent solutions to automate processes and improve business efficiency.",
  href: "/ai-services-for-enterprise",
};

function mapServiceItems(services) {
  return services.map((service) => ({
    label: service.title,
    href: service.href,
  }));
}

export const desktopSolutionsColumns = [
  {
    id: "ppm",
    title: "Project Portfolio Management",
    underlineWord: "Project",
    description:
      "Optimize project planning, execution and portfolio decisions with enterprise-grade PPM solutions.",
    href: "/project-management",
    product: {
      title: "Clarity",
      href: "/clarity",
    },
    services: {
      title: "Clarity Services",
      href: "/clarity/services",
      items: mapServiceItems(clarityServices),
    },
  },
  {
    id: "automation",
    title: "Enterprise IT Automation",
    underlineWord: "Enterprise",
    description:
      "Streamline complex business processes with intelligent automation across your enterprise.",
    href: "/enterprise-it-automation",
    product: {
      title: "Automic Automation",
      href: "/automic-automation",
    },
    services: {
      title: "Automic Automation Services",
      href: "/automic-automation/services",
      items: mapServiceItems(automicServices),
    },
  },
  aiServicesSection,
];

export const desktopFlyoutMenu = desktopSolutionsColumns.map((column) => {
  if (!column.product) {
    return {
      id: column.id,
      title: column.title,
      href: column.href,
      children: null,
    };
  }

  return {
    id: column.id,
    title: column.title,
    href: column.href,
    children: [
      { title: column.product.title, href: column.product.href },
      {
        title: column.services.title,
        href: column.services.href,
        children: column.services.items,
      },
    ],
  };
});

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
        href: "/automic-automation",
        servicesLink: {
          label: "Automic Automation Services",
          href: "/automic-automation/services",
        },
      },
    ],
    trailingProduct: {
      title: "Stonebranch",
      description:
        "Modern workload automation solutions to simplify IT operations and improve business agility.",
      href: "/stonebranch",
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
