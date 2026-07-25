export const prebuiltPlugins = [
  {
    slug: "jira-integration",
    title: "Jira",
    titleAccent: "Integration",
    tabLabel: "Jira Integration",
    tabIcon: "/images/14.svg",
    heroImage: "/images/clarity-plugin-jira-hero.png?v=1",
    heroImageAlt: "Jira Integration with Clarity PPM",
    summary:
      "Jira integration helps project managers view up-to-date Agile development status executed in Jira, directly from within Clarity PPM. Built using our integration framework, it connects Clarity PPM with Jira to import Agile execution data including Epics, User Stories, Tasks, and Time into Clarity PPM.",
    intro: [
      "Organizations often use Jira to manage Agile planning and execution while relying on Broadcom Clarity PPM for portfolio governance, financial management, resource planning, and executive reporting. Without seamless integration, project teams are forced to maintain information in multiple systems, resulting in duplicate effort, inconsistent reporting, and limited visibility into project performance.",
      "Albatroz's Jira Integration for Clarity PPM is a prebuilt, enterprise-ready solution that bridges the gap between Agile delivery and portfolio management. Built on our proven Integration Framework, the solution automatically synchronizes Agile execution data between Jira and Clarity, enabling organizations to maintain a single source of truth while improving operational efficiency and decision-making.",
    ],
    sections: [
      {
        title: "Business Challenges",
        bullets: [
          "Duplicate project information maintained across multiple systems",
          "Manual effort to consolidate Agile execution and portfolio reporting",
          "Inconsistent project data across teams and business units",
          "Double entry of assignments and timesheets by end users",
          "Limited visibility into Agile progress within Clarity",
          "Inaccurate financial reporting due to disconnected execution data",
          "Increased administrative effort and reduced productivity",
        ],
      },
      {
        title: "Our Solution",
        paragraphs: [
          "Albatroz provides a configurable Jira Integration solution designed to address these challenges through automated synchronization between Jira and Clarity PPM.",
          "The solution includes preconfigured mappings between Jira and Clarity objects, built-in transformation and validation rules, and scheduled synchronization processes that automatically exchange project, Epic, User Story, Task, Bug, Assignment, and Worklog information. The integration is fully configurable and can be extended to support organization-specific business rules, custom investments, and additional integration requirements.",
          "Built using supported REST and SOAP web services, the solution is fully SaaS compliant and supports the latest versions of both Clarity and Jira.",
        ],
      },
      {
        title: "Key Capabilities",
        bullets: [
          "Automated synchronization of Agile execution data",
          "Preconfigured object and attribute mappings",
          "Built-in transformation and validation rules",
          "Flexible scheduling and monitoring capabilities",
          "Extensible architecture for custom business requirements",
          "Secure, SaaS-compliant integration using supported APIs",
        ],
      },
      {
        title: "Business Benefits",
        paragraphs: [
          "By connecting Jira with Clarity PPM, organizations can eliminate duplicate data entry, improve reporting accuracy, synchronize Agile execution with portfolio management, strengthen financial visibility, and provide executives with real-time insights into project delivery. Project managers gain a consolidated view of execution progress without switching between systems, while leadership benefits from more accurate portfolio reporting and better-informed investment decisions.",
        ],
      },
      {
        title: "Integration Architecture",
        paragraphs: [
          "The integration follows a secure and scalable architecture in which project and Agile execution data is extracted from Jira, validated and transformed using the Albatroz Integration Framework, and synchronized into Clarity PPM through supported web services. This approach ensures reliable data exchange while maintaining compatibility with both cloud and on-premises deployments.",
        ],
      },
    ],
    closing: {
      title: "Accelerate Your Clarity–Jira Integration",
      text: "Albatroz's Jira Integration for Clarity PPM enables organizations to connect Agile execution with strategic portfolio management through a secure, scalable, and enterprise-ready solution. By eliminating manual effort and synchronizing critical project information, organizations gain greater visibility, stronger governance, and improved decision-making across the entire project lifecycle.",
    },
  },
  {
    slug: "resource-integration",
    title: "Resource",
    titleAccent: "Integration",
    tabLabel: "Resource Integration",
    tabIcon: "/images/new16.svg",
    heroImage: "/images/clarity-plugin-resource-hero.png?v=1",
    heroImageAlt: "Resource Integration with Clarity PPM",
    summary:
      "Resource Integration automates user and resource provisioning by synchronizing employee information from your HR system directly into Clarity PPM, eliminating manual administration and ensuring Clarity always reflects the latest workforce information.",
    intro: [
      "Organizations rely on their HR system as the single source of truth for employee and user information. To ensure accurate resource planning, project execution, and security management, this information must be synchronized with Broadcom Clarity PPM in a timely and reliable manner.",
      "Albatroz's Resource Integration for Clarity PPM is a prebuilt, file-based integration solution that automates user and resource provisioning by synchronizing employee information from your HR system directly into Clarity. Built on our proven Integration Framework, the solution eliminates manual administration, improves data accuracy, and ensures that Clarity always reflects the latest workforce information.",
    ],
    sections: [
      {
        title: "Business Challenges",
        bullets: [
          "Employee information must be maintained manually in Clarity, resulting in additional administrative effort",
          "Delays in onboarding, transfers, and offboarding can lead to outdated resource information and security risks",
          "Clarity does not provide an out-of-the-box automated solution for synchronizing HR data",
          "Building and maintaining custom integrations requires specialized expertise and ongoing support",
          "Inconsistent resource data impacts project planning, reporting, and governance",
        ],
      },
      {
        title: "Our Solution",
        paragraphs: [
          "Albatroz provides a configurable Resource Integration solution that automates the synchronization of user and resource information from your HR system into Clarity PPM.",
          "The integration imports employee data through configurable flat files, automatically creates new users and resources, updates existing employee information, provisions security access, and processes changes resulting from onboarding, transfers, or employee exits. Administrators can configure and manage the integration directly from the Clarity interface, allowing organizations to adapt the solution to changing business requirements without extensive development effort.",
          "Designed with flexibility and scalability in mind, the solution can easily be extended to support custom attributes, additional validation rules, and organization-specific business logic.",
        ],
      },
      {
        title: "Key Capabilities",
        bullets: [
          "Automated user and resource provisioning",
          "Creation and update of user and resource records",
          "Security and access provisioning",
          "Configurable attribute mapping and validation",
          "Email notifications and error handling",
          "Centralized administration through the Clarity interface",
          "Extensible support for custom attributes and business rules",
        ],
      },
      {
        title: "Business Benefits",
        paragraphs: [
          "By automating resource synchronization between HR systems and Clarity, organizations eliminate manual administrative effort, improve data accuracy, accelerate employee onboarding, strengthen security governance, and ensure project managers always have access to current resource information. The result is a more efficient administration process, improved compliance, and greater confidence in resource planning and reporting.",
        ],
      },
      {
        title: "Integration Architecture",
        paragraphs: [
          "The solution uses a secure, file-based integration process to import employee data from the HR system into Clarity. Incoming data is validated, transformed using configurable business rules, and automatically processed to create or update users, resources, and security assignments. Built-in monitoring, error reporting, and notification capabilities enable administrators to quickly identify and resolve processing issues while maintaining complete operational visibility.",
        ],
      },
    ],
    closing: {
      title: "Simplify Resource Management with Automated Integration",
      text: "Albatroz's Resource Integration for Clarity PPM enables organizations to automate employee provisioning, improve data consistency, and eliminate manual administration. Built on our enterprise Integration Framework, the solution delivers a secure, scalable, and configurable approach to synchronizing HR data with Clarity, allowing organizations to focus on managing projects instead of maintaining resource records.",
    },
  },
  {
    slug: "financial-integration",
    title: "Financial",
    titleAccent: "Integration",
    tabLabel: "Financial Integration",
    tabIcon: "/images/md1.svg",
    heroImage: "/images/clarity-plugin-financial-hero.png?v=1",
    heroImageAlt: "Financial Integration with Clarity PPM",
    summary:
      "Financial Integration automates the import of labor and non-labor actual costs from enterprise financial systems into Clarity PPM, eliminating manual data entry and providing project managers with complete visibility into project costs.",
    intro: [
      "Organizations typically rely on enterprise financial systems to manage accounts payable, accounts receivable, payroll, billing, general ledger, and financial reconciliation, while Broadcom Clarity PPM serves as the platform for project planning, resource management, and portfolio governance. To maintain accurate project financials, actual costs generated within financial systems must be synchronized with Clarity.",
      "Albatroz's Financial Integration for Clarity PPM is a prebuilt, file-based integration solution that automates the import of labor and non-labor actual costs from enterprise financial systems into Clarity. Built on our proven Integration Framework, the solution eliminates manual data entry, improves financial accuracy, and provides project managers with complete visibility into project costs.",
    ],
    sections: [
      {
        title: "Business Challenges",
        bullets: [
          "Clarity does not provide an out-of-the-box capability to bulk import financial actuals into projects",
          "Importing financial transactions requires complex prerequisite configurations and execution of multiple Clarity financial jobs",
          "Manual entry of labor and non-labor actuals is time-consuming and prone to errors",
          "Custom-built integrations often require significant development effort and ongoing maintenance",
          "Delays in synchronizing financial data impact project reporting, forecasting, and decision-making",
        ],
      },
      {
        title: "Our Solution",
        paragraphs: [
          "Albatroz provides a configurable Financial Integration solution that automates the synchronization of labor and non-labor actual costs from enterprise financial systems into Clarity PPM.",
          "The solution imports financial transactions through configurable flat files and processes them using predefined transformation and validation rules before loading them into Clarity projects. Administrators can monitor and manage the integration directly from the Clarity interface, while built-in error handling, notifications, and monitoring capabilities simplify day-to-day administration. The solution is fully configurable and can be extended to support organization-specific business rules, custom attributes, and additional financial integration requirements.",
          "Built on our enterprise Integration Framework, the solution is SaaS compatible and supports the latest versions of Broadcom Clarity.",
        ],
      },
      {
        title: "Key Capabilities",
        bullets: [
          "Automated bulk import of labor and non-labor actual costs",
          "Preconfigured mappings and validation rules",
          "Configurable transformation and business logic",
          "Centralized administration through the Clarity interface",
          "Email notifications and error management",
          "Automatic file archival and cleanup",
          "Extensible support for custom financial requirements",
        ],
      },
      {
        title: "Business Benefits",
        paragraphs: [
          "By automating the synchronization of financial actuals into Clarity, organizations eliminate manual processing, improve the accuracy of project financials, and ensure timely visibility into project costs. Project managers gain a complete view of labor and non-labor expenses, enabling more accurate forecasting, improved financial governance, and better portfolio decision-making. Administrators also benefit from simplified integration management through automated monitoring, validation, and troubleshooting capabilities.",
        ],
      },
      {
        title: "Integration Architecture",
        paragraphs: [
          "The solution uses a secure, file-based integration process to import financial transactions from enterprise financial systems into Clarity. Incoming data is validated, transformed using configurable business rules, and automatically loaded into Clarity projects. Built-in monitoring, error reporting, file management, and notification capabilities ensure reliable processing while providing administrators with complete operational visibility.",
        ],
      },
    ],
    closing: {
      title: "Streamline Financial Data Integration with Clarity",
      text: "Albatroz's Financial Integration for Clarity PPM enables organizations to automate the synchronization of financial actuals, improve data accuracy, and strengthen project financial governance. Built on our enterprise Integration Framework, the solution delivers a secure, scalable, and configurable approach to integrating financial systems with Clarity, allowing organizations to focus on strategic financial management rather than manual data processing.",
    },
  },
  {
    slug: "blueprint-migrator",
    title: "Blueprint",
    titleAccent: "Migrator",
    tabLabel: "Blueprint Migrator",
    tabIcon: "/images/13.svg",
    heroImage: "/images/clarity-plugin-blueprint-hero.png?v=1",
    heroImageAlt: "Blueprint Migrator for Clarity PPM",
    summary:
      "Blueprint Migrator is an Albatroz-developed utility that automates the migration of Clarity blueprints between environments, enabling faster deployments and consistent configurations with just a few clicks.",
    intro: [
      "Managing blueprint migrations across development, testing, and production environments can be a time-consuming and error-prone process. Manual recreation of blueprint configurations often leads to inconsistencies, deployment delays, and unnecessary administrative effort.",
      "Blueprint Migrator is an Albatroz-developed utility that automates the migration of Clarity blueprints between environments. With an intuitive interface, users can select the required blueprint from the source environment and migrate it to the target environment in just a few clicks, ensuring faster deployments and consistent configurations.",
    ],
    sections: [
      {
        title: "Business Challenges",
        bullets: [
          "Manual recreation of blueprints across environments is time-consuming and prone to errors",
          "Maintaining consistency between Development, Test, and Production environments is difficult",
          "Blueprint validation and deployment increase project timelines",
          "Configuration inconsistencies can impact user experience and business processes",
          "Large-scale migrations require significant administrative effort",
        ],
      },
      {
        title: "Our Solution",
        paragraphs: [
          "Blueprint Migrator provides an automated and reliable approach to migrating Clarity blueprints across environments. The utility eliminates manual configuration by transferring blueprint components while preserving their structure and configuration.",
          "Designed for speed, accuracy, and ease of use, Blueprint Migrator significantly reduces migration effort and helps organizations maintain consistent blueprint configurations throughout the application lifecycle.",
        ],
      },
      {
        title: "Key Capabilities",
        bullets: [
          "Sections and Subtabs",
          "Fields and Modules",
          "Channels and Actions",
          "Complete Blueprint configurations",
          "Multiple blueprints across environments",
          "Simple, intuitive migration process with minimal manual intervention",
        ],
      },
      {
        title: "Proven Success",
        paragraphs: [
          "Blueprint Migrator was successfully used during a major Clarity migration project for ERGO as part of their transition from Microsoft SQL Server to PostgreSQL. The utility enabled the seamless migration of more than 50 blueprints, significantly reducing manual effort, improving migration accuracy, and accelerating the overall implementation timeline.",
        ],
      },
      {
        title: "Business Benefits",
        paragraphs: [
          "By automating blueprint migrations, organizations can reduce deployment effort, improve configuration consistency, accelerate implementation timelines, and minimize human error. The result is faster project delivery, improved operational efficiency, and greater confidence when promoting changes across environments.",
        ],
      },
    ],
    closing: {
      title: "Accelerate Blueprint Migrations with Albatroz",
      text: "Blueprint Migrator simplifies one of the most time-consuming aspects of Clarity administration by providing an automated, reliable, and scalable migration solution. Whether you're implementing a new Clarity environment, performing upgrades, or managing ongoing releases, Blueprint Migrator helps you deliver changes faster while maintaining consistency across your environments.",
    },
  },
];

export const prebuiltPluginSlugs = prebuiltPlugins.map((plugin) => plugin.slug);

export function getPrebuiltPlugin(slug) {
  return prebuiltPlugins.find((plugin) => plugin.slug === slug) ?? null;
}
