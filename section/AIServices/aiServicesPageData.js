export const aiServicesPageData = {
  slides: [
    {
      eyebrow: "AI CONCIERGE — BUILT FOR ENTERPRISE PPM",
      titleHtml:
        'Troz<span class="ai-accent">AI</span> : An AI solution that lives inside your <em>project office.</em>',
      subtitle:
        "TrozAI understands your organisation — its standards, its history, its way of working — and acts on that understanding inside your project management application. Every action stays reviewable. Every step keeps a human in the loop.",
      cta: "Request a free demo",
      href: "/contact-us",
    },
    {
      eyebrow: "CUSTOM AI BUILDS",
      titleHtml: "Bespoke AI <em>build, from Ground Up.</em>",
      subtitle:
        "If your organisation needs its own TrozAI, not ours, we build that too — on RAG, MCP and agentic architectures, grounded in your own data and your own systems.",
      cta: "Get Free Consultation",
      href: "/contact-us",
    },
    {
      eyebrow: "PAY FOR VALUE",
      titleHtml: "AI that earns its keep — <em>not licences sitting idle.</em>",
      subtitle:
        "We believe AI should be paid for by the value it delivers. Usage-based pricing, aligned to outcomes — so you only pay when you actually use it.",
      cta: "Get Free Consultation",
      href: "/contact-us",
    },
  ],
  flightHead: {
    titleHtml: "Everything you wanted from an AI,<br>now in one solution.",
  },
  panels: [
    {
      num: "01",
      label: "WORKSPACE MEMORY",
      title: "Every workspace remembers everything that happens inside it.",
      desc: "A project, programme or portfolio gets its own persistent workspace — every document, conversation, decision and artifact stays contained within it. Context never leaks between engagements, and nothing has to be re-explained the next time you open the chat.",
      tags: ["Persistent context", "Project · Programme · Portfolio", "Isolated by design"],
      image: "/images/ai-panel-workspace.png",
      visual: {
        type: "rows",
        rows: [
          { icon: "▣", label: "Employee Feedback Portal", badge: "Project" },
          { icon: "▣", label: "Cloud Infra Programme", badge: "Programme", badgeVariant: "blue" },
          { icon: "▣", label: "Digital Strategy 2028", badge: "Portfolio", badgeVariant: "amber" },
        ],
      },
    },
    {
      num: "02",
      label: "ORG CONTEXT",
      title: "Every answer is grounded in how your organisation actually works.",
      desc: "Org standards, delivery playbooks, past project history and policy documents are indexed and retrieved at query time. The AI doesn't give generic advice — it gives your advice, shaped by your own organisational knowledge.",
      tags: ["RAG-grounded", "Org knowledge base", "Policy-aware"],
      image: "/images/ai-panel-knowledge.png",
      visual: {
        type: "chat",
        user: "What's our standard approach to vendor risk escalation?",
        ai: "Per the PMO Risk Policy (v3): escalate to Steering Committee if unmitigated after 10 working days. Sourced from 2 org guidelines + 1 closed-project precedent.",
      },
    },
    {
      num: "03",
      label: "DOCUMENT INTELLIGENCE",
      title: "Upload almost any project document. It knows what to do with it.",
      desc: "A Statement of Work becomes a new project, scoped and structured. Meeting minutes become tasks and risks, assigned and dated. The same engine reads status reports, change requests, even scanned notes — and routes each one to the right action in your PM tool.",
      tags: ["SOW → Project", "Minutes → Tasks & Risks", "Any document type"],
      image: "/images/ai-panel-documents.png",
      visual: {
        type: "rows",
        rows: [
          { icon: "⎙", label: "SOW_ClientX_v2.pdf", badge: "→ Project created" },
          { icon: "⎙", label: "Sprint_review_notes.docx", badge: "→ 4 tasks, 1 risk", badgeVariant: "amber" },
          { icon: "⎙", label: "kickoff_recording.mp3", badge: "→ Transcribed + actioned", badgeVariant: "blue" },
        ],
      },
    },
    {
      num: "04",
      label: "ACTION INTELLIGENCE",
      title: "Every extracted action comes with a confidence score — and a human checkpoint.",
      desc: "Tasks, risks, decisions and change requests are scored for confidence before anything is written. Review, adjust or approve in one click. Nothing reaches your project management application without a clear audit trail.",
      tags: ["Confidence scoring", "Human-in-the-loop", "Full audit trail"],
      image: "/images/ai-panel-confidence.png",
      visual: {
        type: "rows",
        rows: [
          { icon: "⚑", label: "Vendor dependency, no owner assigned", badge: "97%", badgeVariant: "amber" },
          { icon: "✓", label: "Escalate to next steering session", badge: "88%" },
          { icon: "$", label: "Scope change — sponsor sign-off needed", badge: "79%", badgeVariant: "blue" },
        ],
      },
    },
    {
      num: "05",
      label: "TRUST & SAFETY",
      title: "An AI you can actually trust with your project data.",
      desc: "Every write-back is reviewable before it happens. Every response is traceable to its source. Workspace data stays isolated, access is role-based, and nothing is used to train a model outside your organisation. Trust isn't a feature here — it's the default.",
      tags: ["Source-traceable", "Role-based access", "Data stays yours"],
      image: "/images/ai-panel-trust.png",
      visual: {
        type: "rows",
        rows: [
          { icon: "🔒", label: "Workspace isolation", badge: "Enforced" },
          { icon: "🔎", label: "Every answer cites its source", badge: "Always on", badgeVariant: "blue" },
          { icon: "✓", label: "No write-back without approval", badge: "Required", badgeVariant: "amber" },
        ],
      },
    },
    {
      num: "06",
      label: "COLLABORATION ENGINE",
      title: "It knows who to notify, and when to schedule.",
      desc: "Reading conversations and calendars together, the AI surfaces meetings to attend, sessions still waiting to be booked, and notifications that are overdue — so coordination overhead stops living in email threads.",
      tags: ["Calendar-aware", "Auto-notify", "Meeting detection"],
      image: "/images/ai-panel-calendar.png",
      visual: {
        type: "rows",
        rows: [
          { icon: "◷", label: "Steering session — risk escalation", badge: "Today 14:00", badgeVariant: "blue" },
          { icon: "+", label: "Sprint retro", badge: "To schedule", badgeVariant: "amber" },
          { icon: "✉", label: "Notify PMO — overdue risk owner", badge: "Send today", badgeVariant: "amber" },
        ],
      },
    },
    {
      num: "07",
      label: "AGENTIC WORKFLOWS",
      title: "It doesn't stop at the PM tool — it works across the systems around it.",
      desc: "The same agentic core reaches into CRM, HR and finance systems alongside your PM tool — turning a closed opportunity into a scoped project, forecasting delivery against real capacity, validating timesheets, and flagging skill gaps before they become resourcing problems.",
      tags: ["CRM → Project", "Skill & capacity matching", "Timesheet validation", "Delivery forecasting"],
      image: "/images/ai-panel-systems.png",
      visual: {
        type: "rows",
        rows: [
          { icon: "⇄", label: "Opportunity closed-won", badge: "→ Project scoped" },
          { icon: "⇄", label: "Forecast vs. team capacity", badge: "2 skill gaps found", badgeVariant: "amber" },
          { icon: "⇄", label: "Weekly timesheets", badge: "96% validated", badgeVariant: "blue" },
        ],
      },
    },
  ],
  skillsHead: {
    label: "HOW WE BUILD",
    titleHtml: 'Three layers. <span class="accent">Built in order.</span>',
    desc: "Agentic AI isn't one skill — it's three, stacked. You can't build the third without the first two holding underneath it. This is the order we built them in, and the order we'd recommend to anyone else.",
  },
  tiers: [
    {
      kicker: "LAYER ONE — RETRIEVAL",
      titleHtml: 'RAG <span class="accent">— giving the model your context</span>',
      desc: "Before an AI can act on your organisation, it has to know it. We index org standards, delivery policy, closed-project history and live documents into a vector store the model can search at query time — every response grounded in your context, not generic advice.",
      skills: ["Vector embeddings", "Chunking strategy", "Org Vault indexing", "Metadata filtering"],
    },
    {
      kicker: "LAYER TWO — CONNECTIVITY",
      titleHtml: 'MCP <span class="accent">— giving the model your tools</span>',
      desc: "Knowing isn't enough — it has to act. We build on the Model Context Protocol to connect live, two-way to your project management application, CRM, HR and finance systems, so the model can read real state and write real changes, not just describe them.",
      skills: ["Tool schema design", "Scoped permissions", "Multi-app routing", "Write-back validation"],
    },
    {
      kicker: "LAYER THREE — AUTONOMY",
      titleHtml: 'Agentic AI <span class="accent">— giving the model judgement</span>',
      desc: "The final layer: multi-step reasoning that plans, calls the right tool from the right context, and checks its own work. This is where a chatbot becomes a colleague — one that drafts the report, files the risk, and tells you what it did and why.",
      skills: ["Document classification", "Confidence scoring", "Human-in-the-loop gates", "Multi-step workflows"],
    },
  ],
};
