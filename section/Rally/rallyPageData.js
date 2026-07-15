export const rallyHeroSlides = [
  {
    id: "steel-thread",
    title: "The steel thread from boardroom to backlog.",
    titleAccent: "boardroom to backlog",
    subtitle:
      "Rally is the market-leading platform for business agility and Value Stream Management — helping enterprises plan, prioritise, manage, and measure work at every level, from team iteration to portfolio strategy, with full traceability from investment to delivery.",
  },
  {
    id: "albatroz-partner",
    title: "Rally, delivered by the team that lives in your PPM stack.",
    titleAccent: "PPM stack",
    subtitle:
      "Albatroz is a Broadcom reseller and implementation partner for Rally — from licensing and rollout to configuration, integration with Clarity PPM, and ongoing managed support. One partner, from procurement to production.",
  },
  {
    id: "valueops",
    title: "Rally, Clarity, ConnectALL — one connected value stream.",
    titleAccent: "one connected value stream",
    subtitle:
      "Rally integrates seamlessly with Clarity and ConnectALL to link strategic portfolio investment directly to Agile execution. Albatroz implements and supports the full ValueOps stack, not just one piece of it.",
  },
];

export const capabilitiesHead = {
  title: "Everything enterprise Agile needs,",
  titleAccent: "in one connected platform.",
};

export const capabilityPanels = [
  {
    title: "Plan work at every level, from iteration to program increment.",
    desc: "Teams pull work from the backlog into iterations on the Team Planning page, while Capacity Planning shows exactly how much a team or release train can realistically commit to — so plans stay achievable instead of aspirational.",
    tags: ["Team & PI planning", "Capacity planning", "Big Room Planning"],
    visual: {
      rows: [
        { icon: "▣", label: "Iteration 14 — Payments Squad", badge: "On track" },
        { icon: "▣", label: "PI 3.2 — 5 teams committed", badge: "Planned", badgeVariant: "blue" },
        { icon: "▣", label: "Capacity used: 87%", badge: "Near limit", badgeVariant: "amber" },
      ],
    },
  },
  {
    title: "A clear line of sight from strategic theme to shipped story.",
    desc: "Multi-level portfolio hierarchies connect team-level work to initiatives and strategic themes. The Portfolio Kanban visualises big work moving through stages, so product leaders can see exactly where investment is flowing.",
    tags: ["Portfolio item hierarchy", "Portfolio Kanban", "Strategic themes"],
    visual: {
      type: "chat",
      user: "Which initiatives are behind the Digital Strategy 2028 theme?",
      ai: "3 initiatives, 11 features, 62 stories roll up to this theme. 2 initiatives are on track, 1 is at risk on the payments gateway epic.",
    },
  },
  {
    title: "Real-time status, without chasing a single status update.",
    desc: "The Team Board gives live status on every story and task in flight. The Iteration Status page rolls that up into burndown, scope change and velocity at a glance — so blockers surface before they become slippage.",
    tags: ["Team Board", "Iteration Status", "Blocker visibility"],
    visual: {
      rows: [
        { icon: "⎙", label: "US-2291 Payment retry logic", badge: "In progress" },
        { icon: "⎙", label: "US-2288 Blocked on API access", badge: "Blocked", badgeVariant: "amber" },
        { icon: "⎙", label: "Iteration burndown", badge: "On pace", badgeVariant: "blue" },
      ],
    },
  },
  {
    title: "Empirical data, from the team level to the boardroom.",
    desc: "The Insights page benchmarks delivery with a Software Development Performance Index, while Flow Metrics surface efficiency and predictability trends. Custom views put the numbers that matter to your organisation front and centre.",
    tags: ["SDPI benchmark", "Flow Metrics", "Custom dashboards"],
    visual: {
      rows: [
        { icon: "⚑", label: "Flow efficiency down 6% this PI", badge: "Watch", badgeVariant: "amber" },
        { icon: "✓", label: "Velocity trend — stable, 3 PIs", badge: "Healthy" },
        { icon: "$", label: "SDPI benchmark vs. industry", badge: "Top quartile", badgeVariant: "blue" },
      ],
    },
  },
  {
    title: "Quality tracked alongside the code, not bolted on afterwards.",
    desc: "Test engineers manage defects, test cases, test plans, test runs and test sets inside the same platform as delivery. Acceptance tests evolve with the story, and regression sets stay under control as the codebase grows.",
    tags: ["Defect tracking", "Test plans & runs", "Regression management"],
    visual: {
      rows: [
        { icon: "🔒", label: "Regression suite — 412 cases", badge: "Passing" },
        { icon: "🔎", label: "Defect DE-118 linked to US-2291", badge: "Traced", badgeVariant: "blue" },
        { icon: "✓", label: "Release readiness", badge: "2 open defects", badgeVariant: "amber" },
      ],
    },
  },
  {
    title: "Every team pointed at the same goals, visibly.",
    desc: "Define objectives and key results directly in Rally and cascade them from portfolio to team. Progress against each key result rolls up automatically, so alignment is something you can see, not something you assume.",
    tags: ["Goal cascading", "Progress roll-up", "Strategic alignment"],
    visual: {
      rows: [
        { icon: "◷", label: "O: Reduce checkout latency Q3 OKR", badge: "62% to goal", badgeVariant: "blue" },
        { icon: "+", label: "KR: p95 latency under 300ms", badge: "On track" },
        { icon: "✉", label: "4 teams contributing", badge: "Aligned", badgeVariant: "amber" },
      ],
    },
  },
  {
    title: "Connected to Clarity and ConnectALL — and now, to AI.",
    desc: "Rally links directly to Clarity for investment planning and to ConnectALL for tool integration across Jira and other systems. AI powered by Vaia turns strategy into well-defined work and interprets flow metrics — keeping every AI-generated artifact traceable to the objectives that fund it.",
    tags: ["Clarity integration", "ConnectALL sync", "AI powered by Vaia"],
    visual: {
      rows: [
        { icon: "⇄", label: "Clarity investment → Rally epic", badge: "Synced" },
        { icon: "⇄", label: "Jira ↔ Rally sync via ConnectALL", badge: "18k items migrated", badgeVariant: "blue" },
        { icon: "⇄", label: "Vaia-generated task breakdown", badge: "Review pending", badgeVariant: "amber" },
      ],
    },
  },
];

export const deliveryHead = {
  title: "Three phases.",
  titleAccent: "One reseller and delivery partner.",
  subtitle:
    "Buying a licence is the easy part. Getting an enterprise Agile rollout to actually stick takes configuration, integration and disciplined support. This is how Albatroz takes you from procurement to a running, adopted platform.",
};

export const deliveryPhases = [
  {
    kicker: "PHASE ONE — LICENSING & IMPLEMENTATION",
    title: "Reseller & rollout — Rally, correctly licensed and configured",
    desc: "As an authorised Broadcom reseller, we handle licensing and procurement for Rally, then configure it around your workflow — SAFe, Scrum, Kanban or hybrid — including portfolio hierarchy, workspaces, security model and team structures.",
    skills: [
      "Licensing & procurement",
      "Workflow configuration",
      "Portfolio hierarchy setup",
      "Security & access model",
    ],
  },
  {
    kicker: "PHASE TWO — INTEGRATION",
    title: "ValueOps & ConnectALL — connecting Rally to the rest of your stack",
    desc: "Rally rarely stands alone. We integrate it with Clarity PPM for investment-to-delivery traceability, and with ConnectALL for two-way sync to Jira and other tools already in use — including large-scale, low-downtime migrations.",
    skills: [
      "Clarity ↔ Rally integration",
      "ConnectALL sync (Jira, ADO)",
      "Data migration",
      "BI Dashboards",
    ],
  },
  {
    kicker: "PHASE THREE — ADOPTION & SUPPORT",
    title: "Training & managed support — keeping Rally adopted, not shelved",
    desc: "Go-live is the start, not the finish. We run coach-the-coach and end-user training, build the dashboards leadership actually looks at, and provide ongoing L1–L3 support and release management so Rally stays current and adopted.",
    skills: [
      "SAFe/Agile training",
      "Dashboard enablement",
      "L1–L3 managed support",
      "Release & upgrade management",
    ],
  },
];

export const closingCta = {
  title: "See Rally, configured for how your teams actually work",
  desc: "Book a walkthrough with our Rally practice — licensing, implementation, integration and support, one conversation.",
};
