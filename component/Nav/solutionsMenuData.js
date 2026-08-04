import { clarityServices } from "@/section/Clarity/clarityServicesData";
import { connectAllServices } from "@/section/ConnectAll/connectAllServicesData";
import { automicServices } from "@/section/Automation/automicServicesData";
import { stonebranchServices } from "@/section/Automation/stonebranchServicesData";

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

function buildServicesChildren(servicesLink, services) {
  return [
    {
      label: servicesLink.label,
      href: servicesLink.href,
      isSectionTitle: true,
    },
    ...mapServiceItems(services),
  ];
}

const productServicesMap = {
  Clarity: clarityServices,
  ConnectALL: connectAllServices,
  "Automic Automation": automicServices,
  Stonebranch: stonebranchServices,
};

export const desktopSolutionsColumns = [
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
        href: "/clarity",
        servicesLink: {
          label: "Clarity Services",
          href: "/clarity/services",
        },
      },
      {
        title: "Rally",
        href: "/rally",
      },
      {
        title: "ConnectALL",
        href: "/connectall",
        servicesLink: {
          label: "ConnectALL Services",
          href: "/connectall/services",
        },
      },
    ],
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
    products: [
      {
        title: "Automic Automation",
        href: "/automic-automation",
        servicesLink: {
          label: "Automic Automation Services",
          href: "/automic-automation/services",
        },
      },
      {
        title: "Stonebranch",
        href: "/stonebranch",
        servicesLink: {
          label: "Stonebranch Services",
          href: "/stonebranch/services",
        },
      },
    ],
  },
  aiServicesSection,
];

export const desktopFlyoutMenu = desktopSolutionsColumns.map((column) => {
  if (column.products?.length) {
    return {
      id: column.id,
      title: column.title,
      href: column.href,
      children: column.products.map((product) => {
        let children;

        if (product.servicesLink && productServicesMap[product.title]) {
          children = buildServicesChildren(
            product.servicesLink,
            productServicesMap[product.title]
          );
        }

        return {
          title: product.title,
          href: product.href,
          ...(children ? { children } : {}),
        };
      }),
    };
  }

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
      {
        title: column.product.title,
        href: column.product.href,
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
      {
        title: "Rally",
        description:
          "Enterprise Agile management and Value Stream Management — from team iteration to portfolio strategy.",
        href: "/rally",
      },
      {
        title: "ConnectALL",
        description:
          "Enterprise integration platform that connects Clarity, Rally, Jira, ServiceNow, and your entire toolchain.",
        href: "/connectall",
        servicesLink: {
          label: "ConnectALL Services",
          href: "/connectall/services",
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
      {
        title: "Stonebranch",
        description:
          "Modern workload automation solutions to simplify IT operations and improve business agility.",
        href: "/stonebranch",
        servicesLink: {
          label: "Stonebranch Services",
          href: "/stonebranch/services",
        },
      },
    ],
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
