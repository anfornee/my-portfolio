export const site = {
  name: "Anthony Pereira",
  role: "Software Engineer",
  location: "Orlando, Florida",
  hero: {
    eyebrow: "Software Engineer · Product-minded builder",
    title: "I build software you notice by how it feels.",
    description:
      "I care about clear systems, thoughtful interfaces, and understanding the problem well enough that the technology disappears behind the experience.",
    personal:
      "My path through coffee, audio, and enterprise software has shaped how I think about craft, systems, and the people on the other side of what I build.",
  },
  navigation: [{ label: "Connect", href: "#connect" }],
  howIWork: [
    {
      title: "I turn incidents into instruments.",
      body: [
        "When something goes wrong, fixing the immediate problem is only part of the job.",
        "After a launch exposed infrastructure drift, a cross-repository contract break, and an invalid data assumption, I turned the retrospective into a failure-mode taxonomy and built a release-check tool around it. The goal was to make that class of failure easier to catch next time.",
      ],
    },
    {
      title: "I make assumptions fail loudly.",
      body: [
        "Distributed systems accumulate assumptions between repositories, teams, and services.",
        "When behavior owned elsewhere matters to my work, I put a test or contract around it so upstream drift becomes visible in CI instead of quietly reaching production.",
      ],
    },
    {
      title: "I write the plan before the code.",
      body: [
        "Larger features start with a written review of scope, dependencies, unknowns, parked decisions, and questions that need product judgment rather than an engineering guess.",
        "It keeps implementation focused and preserves the reasoning after the feature ships.",
      ],
    },
    {
      title: "I build the tools I keep needing.",
      body: [
        "Repeated friction is usually a signal. I have built shared tools for code review, debugging, releases, feature planning, and persistent project knowledge.",
        "Useful workflows should not stay trapped in one person's shell history or memory.",
      ],
    },
  ],
  range: [
    {
      title: "I learn new systems by finding something useful to do with them.",
      body: "I have learned unfamiliar platforms when a project needed them, including Salesforce APIs and third-party event platforms, then used them to build workflows and integrations around real business needs.",
    },
    {
      title: "I am useful outside my own stack.",
      body: "That has meant stepping into a WordPress VIP commerce codebase with payment, tax, inventory, and SSO integrations, getting it running locally, and documenting the path for the next engineer. It has also meant building registration and personalized agendas for roughly 2,000 in-person and 18,000 virtual event registrants across more than 30 sessions.",
    },
    {
      title: "I hand off what I know.",
      body: "I have led platform walkthroughs, supported teams after adoption, and created shared plugins, knowledge bases, and architecture guidelines. The work is not finished when it works. Someone else should be able to understand it, operate it, and carry it forward.",
    },
  ],
  values: [
    {
      title: "Clarity",
      body: "The most important information should be the easiest information to find.",
    },
    {
      title: "Maintainability",
      body: "Structure, naming, documentation, tests, and reusable patterns matter because someone has to understand the system later.",
    },
    {
      title: "Accessibility",
      body: "Interfaces should remain understandable across input methods, visual abilities, screen sizes, zoom levels, and motion preferences.",
    },
    {
      title: "Ownership",
      body: "I like understanding the whole path from problem to production, including what happens after launch.",
    },
  ],
  technologyGroups: [
    {
      label: "Application",
      items: ["React", "Next.js", "TypeScript", "Node", "SCSS"],
    },
    {
      label: "Cloud and data",
      items: ["AWS", "ECS", "Lambda", "DynamoDB", "S3", "CloudFront", "Redis"],
    },
    {
      label: "Delivery",
      items: ["Docker", "Terraform", "GitLab CI/CD", "SAML SSO", "APIs"],
    },
    {
      label: "AI",
      items: [
        "Claude Code",
        "Claude Cowork",
        "Agentic Workflows",
        "Claude Plugins",
        "Shared Context",
        "Knowledge Bases",
        "Custom Assistants",
        "Prompt Engineering",
      ],
    },
    {
      label: "Design",
      items: [
        "UX/UI",
        "Figma",
        "Adobe XD",
        "Adobe Illustrator",
        "Adobe Photoshop",
      ],
    },
    {
      label: "Platforms and media",
      items: ["WordPress VIP", "HLS", "Salesforce APIs", "i18n"],
    },
  ],
  connect: [
    { label: "Email", href: "mailto:contact@theanthonypereira.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anthony-luis-pereira",
    },
    { label: "GitHub", href: "https://github.com/anfornee" },
  ],
} as const;
